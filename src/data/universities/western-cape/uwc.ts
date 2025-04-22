import { University } from "../../types/university";

export const uwc: University = {
  name: "University of the Western Cape",
  courses: [
    {
      degree: "Bachelor of Dental Surgery",
      faculty: "Dentistry",
      duration: 5,
      apsMin: 35,
      subjectRequirements: [
        { subject: "Mathematics", level: 5 },
        { subject: "Physical Sciences", level: 5 },
        { subject: "Life Sciences", level: 5 }
      ]
    },
    {
      degree: "Bachelor of Arts",
      faculty: "Arts",
      duration: 3,
      apsMin: 27,
      subjectRequirements: [
        { subject: "English Home Language", level: 4 }
      ]
    }
  ]
};
