import { University } from "../../types/university";

export const ufh: University = {
  name: "University of Fort Hare",
  courses: [
    {
      degree: "Bachelor of Social Sciences",
      faculty: "Social Sciences",
      duration: 3,
      apsMin: 26,
      subjectRequirements: [
        { subject: "English Home Language", level: 4 }
      ]
    }
  ]
};
