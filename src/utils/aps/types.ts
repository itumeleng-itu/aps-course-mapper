
/**
 * Types for the APS calculation system
 */

export interface SubjectMark {
  name: string;
  percentage: number;
}

export interface StudentMarks {
  subjects: SubjectMark[];
  schoolQuintile?: number; // 1-5, with lower numbers representing disadvantaged schools
}

export interface SubjectRequirement {
  name: string;
  minimumPercentage: number;
}

export interface CourseRequirement {
  name: string;
  faculty: string;
  minAps: number;
  extendedProgramMinAps?: number;
  requiredSubjects: SubjectRequirement[];
}

export interface EligibilityResult {
  courseName: string;
  faculty: string;
  eligible: boolean;
  extendedProgram: boolean;
  missingRequirements: string[];
}
