import { University } from "../../types/university";

export const uct: University = {
  name: "University of Cape Town",
  courses: [
    {
      degree: "Bachelor of Science in Computer Science",
      faculty: "Science",
      duration: 3,
      apsMin: 36,
      subjectRequirements: [
        { subject: "Mathematics", level: 5 },
        { subject: "English Home Language", level: 5 }
      ]
    },
    {
      degree: "Bachelor of Commerce",
      faculty: "Commerce",
      duration: 3,
      apsMin: 34,
      subjectRequirements: [
        { subject: "Mathematics", level: 5 },
        { subject: "English Home Language", level: 5 }
      ]
    },
    {
      degree: "Bachelor of Arts",
      faculty: "Humanities",
      duration: 3,
      apsMin: 32,
      subjectRequirements: [
        { subject: "English Home Language", level: 5 }
      ]
    },
    {
      degree: "Bachelor of Medicine and Bachelor of Surgery (MBChB)",
      faculty: "Health Sciences",
      duration: 6,
      apsMin: 43,
      subjectRequirements: [
        { subject: "Mathematics", level: 6 },
        { subject: "Physical Sciences", level: 6 },
        { subject: "English Home Language", level: 6 }
      ]
    }
  ]
};
