import { University } from "../../types/university";

export const uj: University = {
  name: "University of Johannesburg",
  courses: [
    {
      degree: "Bachelor of Commerce in Accountancy",
      faculty: "College of Business and Economics",
      duration: 3,
      apsMin: 30,
      subjectRequirements: [
        { subject: "Mathematics", level: 5 },
        { subject: "English Home Language", level: 4 }
      ]
    },
    {
      degree: "Bachelor of Engineering Technology in Civil Engineering",
      faculty: "Faculty of Engineering and the Built Environment",
      duration: 3,
      apsMin: 28,
      subjectRequirements: [
        { subject: "Mathematics", level: 5 },
        { subject: "Physical Sciences", level: 5 }
      ]
    }
  ]
};
