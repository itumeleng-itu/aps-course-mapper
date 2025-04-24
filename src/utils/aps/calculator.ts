
import { StudentMarks, CourseRequirement, EligibilityResult, SubjectMark } from './types';

/**
 * Calculate APS score based on subject marks
 * Different universities use different scales for APS calculation
 */
export const calculateAps = (marks: StudentMarks, universitySystem: 'UJ' | 'UP' | 'WITS' = 'UJ'): number => {
  // Sort subjects by percentage (highest first) to consider only the best subjects if needed
  const sortedSubjects = [...marks.subjects].sort((a, b) => b.percentage - a.percentage);
  
  // Get APS points for each subject based on university system
  const apsPoints = sortedSubjects.map(subject => {
    const percentage = subject.percentage;
    
    // UJ uses an 8-point scale (90%+ = 8 points)
    if (universitySystem === 'UJ') {
      if (percentage >= 90) return 8;
      if (percentage >= 80) return 7;
      if (percentage >= 70) return 6;
      if (percentage >= 60) return 5;
      if (percentage >= 50) return 4;
      if (percentage >= 40) return 3;
      if (percentage >= 30) return 2;
      return 1;
    }
    
    // UP uses a 7-point scale (80%+ = 7 points)
    if (universitySystem === 'UP') {
      if (percentage >= 80) return 7;
      if (percentage >= 70) return 6;
      if (percentage >= 60) return 5;
      if (percentage >= 50) return 4;
      if (percentage >= 40) return 3;
      if (percentage >= 30) return 2;
      return 1;
    }
    
    // WITS uses a 9-point scale with different boundaries
    if (universitySystem === 'WITS') {
      if (percentage >= 90) return 9;
      if (percentage >= 80) return 8;
      if (percentage >= 70) return 7;
      if (percentage >= 60) return 6;
      if (percentage >= 50) return 5;
      if (percentage >= 40) return 4;
      if (percentage >= 30) return 3;
      if (percentage >= 20) return 2;
      return 1;
    }
    
    return 0;
  });
  
  // Most universities consider the best 6 or 7 subjects
  // We'll take the best 6 subjects by default
  const topSubjectsCount = universitySystem === 'WITS' ? 7 : 6;
  let totalAps = apsPoints.slice(0, topSubjectsCount).reduce((sum, points) => sum + points, 0);
  
  // Apply quintile adjustment for disadvantaged schools (quintiles 1-3)
  if (marks.schoolQuintile && marks.schoolQuintile <= 3) {
    totalAps += 2; // Add 2 points for disadvantaged schools
  }
  
  return totalAps;
};

/**
 * Check if a student meets the subject requirements for a course
 */
const meetsSubjectRequirements = (
  marks: StudentMarks, 
  courseRequirements: CourseRequirement
): {meets: boolean; missing: string[]} => {
  const missing: string[] = [];
  
  // Check each required subject
  for (const req of courseRequirements.requiredSubjects) {
    const subject = marks.subjects.find(s => s.name.toLowerCase() === req.name.toLowerCase());
    
    // If subject not found or below required percentage
    if (!subject || subject.percentage < req.minimumPercentage) {
      missing.push(
        `${req.name} (Required: ${req.minimumPercentage}%${subject ? `, Got: ${subject.percentage}%` : ', Not taken'})`
      );
    }
  }
  
  return { meets: missing.length === 0, missing };
};

/**
 * Get eligible courses for a student based on their marks
 */
export const getEligibleCourses = (
  marks: StudentMarks, 
  courses: CourseRequirement[],
  universitySystem: 'UJ' | 'UP' | 'WITS' = 'UJ'
): EligibilityResult[] => {
  const apsScore = calculateAps(marks, universitySystem);
  const results: EligibilityResult[] = [];
  
  for (const course of courses) {
    const subjectRequirements = meetsSubjectRequirements(marks, course);
    const meetsAps = apsScore >= course.minAps;
    const eligibleForExtended = course.extendedProgramMinAps && 
      apsScore >= course.extendedProgramMinAps && 
      apsScore < course.minAps;
    
    results.push({
      courseName: course.name,
      faculty: course.faculty,
      eligible: meetsAps && subjectRequirements.meets,
      extendedProgram: eligibleForExtended && subjectRequirements.meets,
      missingRequirements: subjectRequirements.missing,
    });
  }
  
  return results;
};

/**
 * Filter only extended program eligible courses
 */
export const getExtendedProgramCourses = (
  marks: StudentMarks, 
  courses: CourseRequirement[],
  universitySystem: 'UJ' | 'UP' | 'WITS' = 'UJ'
): EligibilityResult[] => {
  return getEligibleCourses(marks, courses, universitySystem)
    .filter(result => result.extendedProgram);
};

/**
 * Generate sample course data for testing
 */
export const sampleCourseRequirements: CourseRequirement[] = [
  {
    name: "BSc Computer Science",
    faculty: "Science",
    minAps: 32,
    extendedProgramMinAps: 28,
    requiredSubjects: [
      { name: "Mathematics", minimumPercentage: 60 },
      { name: "English", minimumPercentage: 50 }
    ]
  },
  {
    name: "BSc Engineering (Mechanical)",
    faculty: "Engineering",
    minAps: 36,
    extendedProgramMinAps: 32,
    requiredSubjects: [
      { name: "Mathematics", minimumPercentage: 70 },
      { name: "Physical Science", minimumPercentage: 60 },
      { name: "English", minimumPercentage: 50 }
    ]
  },
  {
    name: "BCom Accounting",
    faculty: "Commerce",
    minAps: 34,
    extendedProgramMinAps: 30,
    requiredSubjects: [
      { name: "Mathematics", minimumPercentage: 60 },
      { name: "English", minimumPercentage: 60 }
    ]
  },
  {
    name: "BA Law",
    faculty: "Humanities",
    minAps: 30,
    extendedProgramMinAps: 28,
    requiredSubjects: [
      { name: "English", minimumPercentage: 60 }
    ]
  },
  {
    name: "BSc Medicine",
    faculty: "Health Sciences",
    minAps: 40,
    requiredSubjects: [
      { name: "Mathematics", minimumPercentage: 80 },
      { name: "Physical Science", minimumPercentage: 70 },
      { name: "Life Science", minimumPercentage: 70 },
      { name: "English", minimumPercentage: 60 }
    ]
  }
];
