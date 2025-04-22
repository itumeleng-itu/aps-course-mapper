import { University } from "../../types/university";

export const ufs: University = {
  name: "University of the Free State",
  courses: [
    {
      degree: "Bachelor of Architecture",
      faculty: "Natural and Agricultural Sciences",
      duration: 3,
      apsMin: 32,
      subjectRequirements: [
        { subject: "Mathematics", level: 4 }
      ]
    },
    {
      degree: "Bachelor of Social Work",
      faculty: "Humanities",
      duration: 4,
      apsMin: 30,
      subjectRequirements: [
        { subject: "English Home Language", level: 4 }
      ]
    }
  ]
};
