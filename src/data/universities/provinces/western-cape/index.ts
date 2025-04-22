
import { University } from '@/data/types/university';

export const uct: University[] = [
  {
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
  }
];

export const stellenbosch: University[] = [
  {
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
  }
];

export const uwc: University[] = [
  {
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
  }
];

export const cput: University[] = [
  {
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
  }
];
