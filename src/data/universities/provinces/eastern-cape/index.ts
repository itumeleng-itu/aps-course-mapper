
import { University } from '@/data/types/university';

export const nmu: University[] = [
  {
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
  }
];

export const ru: University[] = [
  {
    name: "Rhodes University",
    courses: [
      {
        degree: "Bachelor of Science",
        faculty: "Science",
        duration: 3,
        apsMin: 30,
        subjectRequirements: [
          { subject: "Mathematics", level: 5 }
        ]
      },
      {
        degree: "Bachelor of Journalism",
        faculty: "Humanities",
        duration: 3,
        apsMin: 35,
        subjectRequirements: [
          { subject: "English Home Language", level: 6 }
        ]
      }
    ]
  }
];

export const ufh: University[] = [
  {
    name: "University of Fort Hare",
    courses: [
      {
        degree: "Bachelor of Social Sciences",
        faculty: "Social Sciences",
        duration: 3,
        apsMin: 26,
        subjectRequirements: [
          { subject: "English Home Language", level: 4 }
        ]
      }
    ]
  }
];
