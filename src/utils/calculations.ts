// Convert percentage to APS points according to South African university standards
export const getAPSPoints = (percentage: number): number => {
  if (percentage >= 80) return 7; // Level 7: 80-100%
  if (percentage >= 70) return 6; // Level 6: 70-79%
  if (percentage >= 60) return 5; // Level 5: 60-69%
  if (percentage >= 50) return 4; // Level 4: 50-59%
  if (percentage >= 40) return 3; // Level 3: 40-49%
  if (percentage >= 30) return 2; // Level 2: 30-39%
  if (percentage >= 0)  return 1; // Level 1: 0-29%
  return 0; // Invalid percentage
};

// Get NSC level (1-7) from percentage
export const getNSCLevel = (percentage: number): number => {
  return getAPSPoints(percentage);
};

// Check if any of the alternative subjects meet the requirement
const meetsSubjectAlternative = (
  subjectLevels: Record<string, number>,
  requirement: { subject: string; level: number }
): boolean => {
  // Handle the Mathematics/Mathematical Literacy/Technical Mathematics case
  if (requirement.subject.includes('Mathematics')) {
    const mathLevel = subjectLevels['Mathematics'] || 0;
    const mathLitLevel = subjectLevels['Mathematical Literacy'] || 0;
    const techMathLevel = subjectLevels['Technical Mathematics'] || 0;

    // If the requirement specifically asks for Mathematics
    if (requirement.subject === 'Mathematics') {
      return mathLevel >= requirement.level;
    }

    // If the requirement allows for any type of mathematics
    if (requirement.subject.includes('/')) {
      // Check each alternative
      return (
        (requirement.subject.includes('Mathematics') && mathLevel >= requirement.level) ||
        (requirement.subject.includes('Mathematical Literacy') && mathLitLevel >= (requirement.level + 2)) || // Mathematical Literacy typically requires 2 levels higher
        (requirement.subject.includes('Technical Mathematics') && techMathLevel >= requirement.level)
      );
    }
  }

  // For Physical Sciences/Technical Sciences
  if (requirement.subject.includes('Physical Sciences')) {
    const physicsLevel = subjectLevels['Physical Sciences'] || 0;
    const techScienceLevel = subjectLevels['Technical Sciences'] || 0;
    return physicsLevel >= requirement.level || techScienceLevel >= requirement.level;
  }

  // For standard single subject requirements
  return (subjectLevels[requirement.subject] || 0) >= requirement.level;
};

// Check if subject requirements are met
export const meetsSubjectRequirements = (
  subjectLevels: Record<string, number>,
  requirements: { subject: string; level: number }[]
): boolean => {
  for (const req of requirements) {
    if (!meetsSubjectAlternative(subjectLevels, req)) {
      return false;
    }
  }
  return true;
};
