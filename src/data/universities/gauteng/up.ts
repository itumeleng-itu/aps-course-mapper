import { University } from "../../types/university";

export const up: University = {
  name: "University of Pretoria",
  courses: [
    {
      degree: "Bachelor of Veterinary Science",
      faculty: "Veterinary Science",
      duration: 6,
      apsMin: 35,
      subjectRequirements: [
        { subject: "Mathematics", level: 5 },
        { subject: "Physical Sciences", level: 5 },
        { subject: "English Home Language", level: 5 }
      ]
    },
    {
      degree: "BSc Information Technology",
      faculty: "Engineering, Built Environment and IT",
      duration: 3,
      apsMin: 30,
      subjectRequirements: [
        { subject: "Mathematics", level: 4 },
        { subject: "English Home Language", level: 4 }
      ]
    },
    {
      degree: "Bachelor of Commerce",
      faculty: "Economic and Management Sciences",
      duration: 3,
      apsMin: 32,
      subjectRequirements: [
        { subject: "Mathematics", level: 5 }
      ]
    }
  ]
};
