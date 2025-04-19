
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

// Check if subject requirements are met
export const meetsSubjectRequirements = (
  subjectLevels: Record<string, number>,
  requirements: { subject: string; level: number }[]
): boolean => {
  for (const req of requirements) {
    const userLevel = subjectLevels[req.subject] || 0;
    if (userLevel < req.level) {
      return false;
    }
  }
  return true;
};
