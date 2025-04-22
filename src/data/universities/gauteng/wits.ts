import { University } from "../../types/university";

export const wits: University = {
  name: "University of the Witwatersrand",
  courses: [
    {
      degree: "Bachelor of Science in Engineering",
      faculty: "Engineering and the Built Environment",
      duration: 4,
      apsMin: 36,
      subjectRequirements: [
        { subject: "Mathematics", level: 6 },
        { subject: "Physical Sciences", level: 5 }
      ]
    },
    {
      degree: "Bachelor of Health Sciences",
      faculty: "Health Sciences",
      duration: 3,
      apsMin: 35,
      subjectRequirements: [
        { subject: "Mathematics", level: 5 },
        { subject: "Life Sciences", level: 5 },
        { subject: "English Home Language", level: 5 }
      ]
    },
    {
      degree: "Bachelor of Accounting Science",
      faculty: "Commerce, Law and Management",
      duration: 3,
      apsMin: 34,
      subjectRequirements: [
        { subject: "Mathematics", level: 5 },
        { subject: "English Home Language", level: 5 }
      ]
    }
  ]
};
