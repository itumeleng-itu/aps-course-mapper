import { University } from "../../types/university";

export const ru: University = {
  name: "Rhodes University",
  courses: [
    {
      degree: "Bachelor of Science",
      faculty: "Science",
      duration: 3,
      apsMin: 30,
      subjectRequirements: [
        { subject: "Mathematics", level: 5 }
      ]
    },
    {
      degree: "Bachelor of Journalism",
      faculty: "Humanities",
      duration: 3,
      apsMin: 35,
      subjectRequirements: [
        { subject: "English Home Language", level: 6 }
      ]
    }
  ]
};
