
import { 
  StudentMarks, 
  CourseRequirement, 
  EligibilityResult, 
  SubjectMark, 
  SubjectType,
  SubjectRequirement,
  classifySubject
} from './types';

/**
 * Calculate APS score based on subject marks
 * Different universities use different scales for APS calculation
 */
export const calculateAps = (marks: StudentMarks, universitySystem: 'UJ' | 'UP' | 'WITS' = 'UJ'): number => {
  // Process and classify subjects
  const processedSubjects = marks.subjects.map(subject => ({
    ...subject,
    type: subject.type || classifySubject(subject.name)
  }));
  
  // Sort subjects by percentage (highest first) to consider only the best subjects if needed
  const sortedSubjects = [...processedSubjects].sort((a, b) => b.percentage - a.percentage);
  
  // Get APS points for each subject based on university system
  const apsPoints = sortedSubjects.map(subject => {
    const percentage = subject.percentage;
    const subjectType = subject.type;
    
    // Apply subject-specific caps (e.g., Math Literacy gets max 5 points in some systems)
    let points = 0;
    
    // UJ uses an 8-point scale (90%+ = 8 points)
    if (universitySystem === 'UJ') {
      if (percentage >= 90) points = 8;
      else if (percentage >= 80) points = 7;
      else if (percentage >= 70) points = 6;
      else if (percentage >= 60) points = 5;
      else if (percentage >= 50) points = 4;
      else if (percentage >= 40) points = 3;
      else if (percentage >= 30) points = 2;
      else points = 1;
      
      // Subject-specific caps for UJ
      if (subjectType === SubjectType.MATH_LIT) {
        points = Math.min(points, 6); // Cap Mathematical Literacy at 6 points
      }
    }
    
    // UP uses a 7-point scale (80%+ = 7 points)
    else if (universitySystem === 'UP') {
      if (percentage >= 80) points = 7;
      else if (percentage >= 70) points = 6;
      else if (percentage >= 60) points = 5;
      else if (percentage >= 50) points = 4;
      else if (percentage >= 40) points = 3;
      else if (percentage >= 30) points = 2;
      else points = 1;
      
      // Subject-specific caps for UP
      if (subjectType === SubjectType.MATH_LIT) {
        points = Math.min(points, 5); // Cap Mathematical Literacy at 5 points
      }
    }
    
    // WITS uses a 9-point scale with different boundaries
    else if (universitySystem === 'WITS') {
      if (percentage >= 90) points = 9;
      else if (percentage >= 80) points = 8;
      else if (percentage >= 70) points = 7;
      else if (percentage >= 60) points = 6;
      else if (percentage >= 50) points = 5;
      else if (percentage >= 40) points = 4;
      else if (percentage >= 30) points = 3;
      else if (percentage >= 20) points = 2;
      else points = 1;
      
      // Subject-specific caps for WITS
      if (subjectType === SubjectType.MATH_LIT) {
        points = Math.min(points, 6); // Cap Mathematical Literacy at 6 points
      }
    }
    
    return { subject: subject.name, points, percentage, type: subjectType };
  });
  
  // Most universities consider the best 6 or 7 subjects
  // We'll take the best 6 subjects by default, excluding Life Orientation
  const topSubjectsCount = universitySystem === 'WITS' ? 7 : 6;
  
  // Filter out Life Orientation as it's typically not counted for APS
  const filteredPoints = apsPoints.filter(
    subject => !subject.subject.includes('Life Orientation')
  );
  
  // Take the best N subjects for APS calculation
  let totalAps = filteredPoints
    .slice(0, topSubjectsCount)
    .reduce((sum, subject) => sum + subject.points, 0);
  
  // Apply quintile adjustment for disadvantaged schools (quintiles 1-3)
  if (marks.schoolQuintile && marks.schoolQuintile <= 3) {
    totalAps += 2; // Add 2 points for disadvantaged schools
  }
  
  return totalAps;
};

/**
 * Check if a student meets the subject requirements for a course
 * With enhanced support for conditional requirements
 */
const meetsSubjectRequirements = (
  marks: StudentMarks, 
  courseRequirements: CourseRequirement
): {meets: boolean; missing: string[]; suggestions: string[]} => {
  const missing: string[] = [];
  const suggestions: string[] = [];
  
  // Process and classify subjects
  const processedSubjects = marks.subjects.map(subject => ({
    ...subject,
    type: subject.type || classifySubject(subject.name)
  }));
  
  // Check each required subject
  for (const req of courseRequirements.requiredSubjects) {
    // Check main requirement
    const mainSubject = processedSubjects.find(s => 
      s.name.toLowerCase() === req.name.toLowerCase() || 
      (req.type && s.type === req.type)
    );
    
    let requirementMet = false;
    
    // Check main subject requirement
    if (mainSubject && mainSubject.percentage >= req.minimumPercentage) {
      requirementMet = true;
    } 
    // Check alternative requirements if main is not met
    else if (req.alternatives && req.alternatives.length > 0) {
      for (const alt of req.alternatives) {
        const altSubject = processedSubjects.find(s => 
          s.name.toLowerCase() === alt.name.toLowerCase() || 
          (alt.type && s.type === alt.type)
        );
        
        if (altSubject && altSubject.percentage >= alt.minimumPercentage) {
          requirementMet = true;
          break;
        }
      }
    }
    
    // If requirement not met, add to missing list
    if (!requirementMet) {
      let missingReq = `${req.name} (Required: ${req.minimumPercentage}%`;
      
      if (mainSubject) {
        missingReq += `, Got: ${mainSubject.percentage}%`;
        
        // Add improvement suggestion
        const deficit = req.minimumPercentage - mainSubject.percentage;
        suggestions.push(`Improve ${req.name} by ${deficit}% to meet the requirement`);
      } else {
        missingReq += ', Not taken';
        suggestions.push(`Consider taking ${req.name} to qualify`);
      }
      
      // Add alternative options to the requirement display
      if (req.alternatives && req.alternatives.length > 0) {
        const altTexts = req.alternatives.map(alt => `${alt.name} (${alt.minimumPercentage}%)`);
        missingReq += ` OR ${altTexts.join(' OR ')}`;
      }
      
      missingReq += ')';
      missing.push(missingReq);
    }
  }
  
  return { meets: missing.length === 0, missing, suggestions };
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
      improvementSuggestions: subjectRequirements.suggestions
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
 * Generate sample course data with enhanced conditional requirements
 */
export const sampleCourseRequirements: CourseRequirement[] = [
  {
    name: "BSc Computer Science",
    faculty: "Science",
    minAps: 32,
    extendedProgramMinAps: 28,
    requiredSubjects: [
      { 
        name: "Mathematics", 
        minimumPercentage: 60,
        type: SubjectType.MATH_PURE,
        alternatives: [
          { name: "Technical Mathematics", minimumPercentage: 70, type: SubjectType.MATH_TECH }
        ]
      },
      { 
        name: "English Home Language", 
        minimumPercentage: 50,
        type: SubjectType.LANG_HL,
        alternatives: [
          { name: "English First Additional Language", minimumPercentage: 60, type: SubjectType.LANG_FAL }
        ]
      }
    ]
  },
  {
    name: "BSc Engineering (Mechanical)",
    faculty: "Engineering",
    minAps: 36,
    extendedProgramMinAps: 32,
    requiredSubjects: [
      { 
        name: "Mathematics", 
        minimumPercentage: 70,
        type: SubjectType.MATH_PURE
      },
      { 
        name: "Physical Sciences", 
        minimumPercentage: 60,
        type: SubjectType.PHYS_SCI,
        alternatives: [
          { name: "Technical Sciences", minimumPercentage: 65, type: SubjectType.TECH_SCI }
        ]
      },
      { 
        name: "English Home Language", 
        minimumPercentage: 50,
        type: SubjectType.LANG_HL,
        alternatives: [
          { name: "English First Additional Language", minimumPercentage: 60, type: SubjectType.LANG_FAL }
        ]
      }
    ]
  },
  {
    name: "BCom Accounting",
    faculty: "Commerce",
    minAps: 34,
    extendedProgramMinAps: 30,
    requiredSubjects: [
      { 
        name: "Mathematics", 
        minimumPercentage: 60,
        type: SubjectType.MATH_PURE,
        alternatives: [
          { name: "Mathematical Literacy", minimumPercentage: 80, type: SubjectType.MATH_LIT }
        ]
      },
      { 
        name: "English Home Language", 
        minimumPercentage: 60,
        type: SubjectType.LANG_HL,
        alternatives: [
          { name: "English First Additional Language", minimumPercentage: 70, type: SubjectType.LANG_FAL }
        ]
      }
    ]
  },
  {
    name: "BA Law",
    faculty: "Humanities",
    minAps: 30,
    extendedProgramMinAps: 28,
    requiredSubjects: [
      { 
        name: "English Home Language", 
        minimumPercentage: 60,
        type: SubjectType.LANG_HL,
        alternatives: [
          { name: "English First Additional Language", minimumPercentage: 70, type: SubjectType.LANG_FAL }
        ]
      }
    ]
  },
  {
    name: "BSc Medicine",
    faculty: "Health Sciences",
    minAps: 40,
    requiredSubjects: [
      { 
        name: "Mathematics", 
        minimumPercentage: 80,
        type: SubjectType.MATH_PURE
      },
      { 
        name: "Physical Sciences", 
        minimumPercentage: 70,
        type: SubjectType.PHYS_SCI 
      },
      { 
        name: "Life Sciences", 
        minimumPercentage: 70,
        type: SubjectType.LIFE_SCI
      },
      { 
        name: "English Home Language", 
        minimumPercentage: 60,
        type: SubjectType.LANG_HL,
        alternatives: [
          { name: "English First Additional Language", minimumPercentage: 70, type: SubjectType.LANG_FAL }
        ]
      }
    ]
  }
];
