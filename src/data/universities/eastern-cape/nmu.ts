import { University } from "../../types/university";

export const nmu: University = {
  name: "Nelson Mandela University",
  courses: [
    {
      degree: "Bachelor of Engineering in Mechatronics",
      faculty: "Engineering",
      duration: 4,
      apsMin: 35,
      subjectRequirements: [
        { subject: "Mathematics", level: 6 },
        { subject: "Physical Sciences", level: 5 }
      ]
    }
  ]
};
