
/**
 * Types for the APS calculation system
 */

export enum SubjectCategory {
  MATHEMATICS = 'MATHEMATICS',
  LANGUAGE = 'LANGUAGE',
  SCIENCE = 'SCIENCE',
  COMMERCE = 'COMMERCE',
  HUMANITIES = 'HUMANITIES',
  TECHNOLOGY = 'TECHNOLOGY',
  ARTS = 'ARTS',
  OTHER = 'OTHER'
}

export enum SubjectType {
  MATH_PURE = 'MATH_PURE',
  MATH_TECH = 'MATH_TECH',
  MATH_LIT = 'MATH_LIT',
  LANG_HL = 'LANG_HL',
  LANG_FAL = 'LANG_FAL',
  PHYS_SCI = 'PHYS_SCI',
  LIFE_SCI = 'LIFE_SCI',
  TECH_SCI = 'TECH_SCI',
  OTHER = 'OTHER'
}

export interface SubjectMark {
  name: string;
  percentage: number;
  type?: SubjectType; // Optional field for automatic classification
}

export interface StudentMarks {
  subjects: SubjectMark[];
  schoolQuintile?: number; // 1-5, with lower numbers representing disadvantaged schools
}

export interface SubjectRequirement {
  name: string;
  minimumPercentage: number;
  alternatives?: SubjectRequirement[]; // Alternative subject requirements (OR condition)
  type?: SubjectType; // For type-based requirements
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
  improvementSuggestions?: string[]; // Added for improvement suggestions
}

// Map for subject classification
export const subjectClassificationMap: Record<string, SubjectType> = {
  'Mathematics': SubjectType.MATH_PURE,
  'Technical Mathematics': SubjectType.MATH_TECH,
  'Mathematical Literacy': SubjectType.MATH_LIT,
  'Physical Sciences': SubjectType.PHYS_SCI,
  'Life Sciences': SubjectType.LIFE_SCI,
  'Technical Sciences': SubjectType.TECH_SCI,
};

// Helper function to classify subjects
export const classifySubject = (subjectName: string): SubjectType => {
  if (subjectName.includes('Mathematics') && !subjectName.includes('Literacy') && !subjectName.includes('Technical')) {
    return SubjectType.MATH_PURE;
  }
  if (subjectName.includes('Technical Mathematics')) {
    return SubjectType.MATH_TECH;
  }
  if (subjectName.includes('Mathematical Literacy')) {
    return SubjectType.MATH_LIT;
  }
  
  if (subjectName.includes('Home Language')) {
    return SubjectType.LANG_HL;
  }
  if (subjectName.includes('First Additional Language')) {
    return SubjectType.LANG_FAL;
  }
  
  if (subjectName.includes('Physical Sciences')) {
    return SubjectType.PHYS_SCI;
  }
  if (subjectName.includes('Life Sciences')) {
    return SubjectType.LIFE_SCI;
  }
  if (subjectName.includes('Technical Sciences')) {
    return SubjectType.TECH_SCI;
  }
  
  return SubjectType.OTHER;
};
