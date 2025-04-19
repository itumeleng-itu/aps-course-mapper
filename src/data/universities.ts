
export interface Course {
  degree: string;
  faculty: string;
  duration: number;
  apsMin: number;
  subjectRequirements: {
    subject: string;
    level: number;
  }[];
}

export interface University {
  name: string;
  courses: Course[];
}

// This is a subset of real South African university data
// In a production app, this would be fetched from an API
export const southAfricanUniversities: University[] = [
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
      }
    ]
  },
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
      }
    ]
  },
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
      }
    ]
  },
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
      }
    ]
  },
  {
    name: "University of KwaZulu-Natal",
    courses: [
      {
        degree: "Bachelor of Medicine and Bachelor of Surgery (MBChB)",
        faculty: "Health Sciences",
        duration: 6,
        apsMin: 40,
        subjectRequirements: [
          { subject: "Mathematics", level: 6 },
          { subject: "Physical Sciences", level: 6 },
          { subject: "Life Sciences", level: 6 }
        ]
      },
      {
        degree: "Bachelor of Laws (LLB)",
        faculty: "Law",
        duration: 4,
        apsMin: 32,
        subjectRequirements: [
          { subject: "English Home Language", level: 5 }
        ]
      }
    ]
  }
];
