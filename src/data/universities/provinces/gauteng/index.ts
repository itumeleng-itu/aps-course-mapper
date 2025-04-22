
import { University } from '@/data/types/university';

export const wits: University[] = [
  {
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
  }
];

export const uj: University[] = [
  {
    name: "University of Johannesburg",
    courses: [
      {
        degree: "Bachelor of Commerce in Accountancy",
        faculty: "College of Business and Economics",
        duration: 3,
        apsMin: 30,
        subjectRequirements: [
          { subject: "Mathematics", level: 5 },
          { subject: "English Home Language", level: 4 }
        ]
      },
      {
        degree: "Bachelor of Engineering Technology in Civil Engineering",
        faculty: "Faculty of Engineering and the Built Environment",
        duration: 3,
        apsMin: 28,
        subjectRequirements: [
          { subject: "Mathematics", level: 5 },
          { subject: "Physical Sciences", level: 5 }
        ]
      }
    ]
  }
];

export const up: University[] = [
  {
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
  }
];

// Re-export TUT from the existing file
export * from './tut';
