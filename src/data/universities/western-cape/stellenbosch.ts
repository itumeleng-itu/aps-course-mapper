import { University } from "../../types/university";

export const stellenbosch: University = {
  name: "Stellenbosch University",
  courses: [
    {
      degree: "Bachelor of Arts in International Studies",
      faculty: "Arts and Social Sciences",
      duration: 3,
      apsMin: 32,
      subjectRequirements: [
        { subject: "English Home Language", level: 5 }
      ]
    },
    {
      degree: "Bachelor of Accounting",
      faculty: "Economic and Management Sciences",
      duration: 3,
      apsMin: 34,
      subjectRequirements: [
        { subject: "Mathematics", level: 5 },
        { subject: "English Home Language", level: 4 }
      ]
    },
    {
      degree: "BEng (Mechanical Engineering)",
      faculty: "Engineering",
      duration: 4,
      apsMin: 33,
      subjectRequirements: [
        { subject: "Mathematics", level: 6 },
        { subject: "Physical Sciences", level: 6 }
      ]
    }
  ]
};
