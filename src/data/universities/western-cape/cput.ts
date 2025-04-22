import { University } from "../../types/university";

export const cput: University = {
  name: "Cape Peninsula University of Technology",
  courses: [
    {
      degree: "National Diploma in Information Technology",
      faculty: "Informatics and Design",
      duration: 3,
      apsMin: 26,
      subjectRequirements: [
        { subject: "Mathematics", level: 4 },
        { subject: "English Home Language", level: 4 }
      ]
    }
  ]
};
