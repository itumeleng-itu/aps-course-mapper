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

// Expanded dataset with more comprehensive South African university data
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
      },
      {
        degree: "Bachelor of Science in Computer Science",
        faculty: "Science and Agriculture",
        duration: 3,
        apsMin: 30,
        subjectRequirements: [
          { subject: "Mathematics", level: 5 }
        ]
      }
    ]
  },
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
  },
  {
    name: "North-West University",
    courses: [
      {
        degree: "Bachelor of Health Sciences in Biokinetics",
        faculty: "Health Sciences",
        duration: 4,
        apsMin: 30,
        subjectRequirements: [
          { subject: "Mathematics", level: 4 },
          { subject: "Life Sciences", level: 4 }
        ]
      },
      {
        degree: "BEd Foundation Phase Teaching",
        faculty: "Education",
        duration: 4,
        apsMin: 28,
        subjectRequirements: [
          { subject: "English Home Language", level: 4 }
        ]
      }
    ]
  },
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
  },
  {
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
  },
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
  },
  {
    name: "University of South Africa (UNISA)",
    courses: [
      {
        degree: "Bachelor of Science in Computing",
        faculty: "Science, Engineering and Technology",
        duration: 3,
        apsMin: 26,
        subjectRequirements: [
          { subject: "Mathematics", level: 4 }
        ]
      }
    ]
  },
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
  },
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
  },
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
  },
  {
    name: "Tshwane University of Technology",
    courses: [
      {
        degree: "Diploma in Journalism",
        faculty: "Humanities",
        duration: 3,
        apsMin: 24,
        subjectRequirements: [
          { subject: "English Home Language", level: 4 }
        ]
      }
    ]
  },
  {
    name: "University of Limpopo",
    courses: [
      {
        degree: "Bachelor of Science in Agriculture",
        faculty: "Science and Agriculture",
        duration: 4,
        apsMin: 26,
        subjectRequirements: [
          { subject: "Mathematics", level: 4 },
          { subject: "Life Sciences", level: 4 }
        ]
      }
    ]
  },
  {
    name: "University of Zululand",
    courses: [
      {
        degree: "Bachelor of Arts",
        faculty: "Arts",
        duration: 3,
        apsMin: 26,
        subjectRequirements: [
          { subject: "English Home Language", level: 4 }
        ]
      }
    ]
  },
  {
    name: "Durban University of Technology",
    courses: [
      {
        degree: "National Diploma in Graphic Design",
        faculty: "Arts and Design",
        duration: 3,
        apsMin: 25,
        subjectRequirements: [
          { subject: "English Home Language", level: 4 }
        ]
      }
    ]
  },
  {
    name: "Vaal University of Technology",
    courses: [
      {
        degree: "Diploma in Tourism Management",
        faculty: "Human Sciences",
        duration: 3,
        apsMin: 23,
        subjectRequirements: [
          { subject: "English Home Language", level: 3 }
        ]
      }
    ]
  },
  {
    name: "Central University of Technology",
    courses: [
      {
        degree: "National Diploma in Engineering",
        faculty: "Engineering and Information Technology",
        duration: 3,
        apsMin: 27,
        subjectRequirements: [
          { subject: "Mathematics", level: 4 },
          { subject: "Physical Sciences", level: 4 }
        ]
      }
    ]
  },
  {
    name: "Walter Sisulu University",
    courses: [
      {
        degree: "Bachelor of Science in Nursing",
        faculty: "Health Sciences",
        duration: 4,
        apsMin: 28,
        subjectRequirements: [
          { subject: "Mathematics", level: 3 },
          { subject: "Life Sciences", level: 4 }
        ]
      }
    ]
  },
  {
    name: "Sefako Makgatho Health Sciences University",
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
      }
    ]
  },
  {
    name: "Sol Plaatje University",
    courses: [
      {
        degree: "Bachelor of Science in Data Science",
        faculty: "Natural and Applied Sciences",
        duration: 3,
        apsMin: 30,
        subjectRequirements: [
          { subject: "Mathematics", level: 5 }
        ]
      }
    ]
  },
  {
    name: "University of Mpumalanga",
    courses: [
      {
        degree: "Bachelor of Agriculture in Agricultural Extension",
        faculty: "Agriculture",
        duration: 3,
        apsMin: 26,
        subjectRequirements: [
          { subject: "Mathematics", level: 3 },
          { subject: "Life Sciences", level: 4 }
        ]
      }
    ]
  },
  {
    name: "Mangosuthu University of Technology",
    courses: [
      {
        degree: "National Diploma in Chemical Engineering",
        faculty: "Engineering",
        duration: 3,
        apsMin: 25,
        subjectRequirements: [
          { subject: "Mathematics", level: 4 },
          { subject: "Physical Sciences", level: 4 }
        ]
      }
    ]
  },
  {
    name: "University of Venda",
    courses: [
      {
        degree: "Bachelor of Environmental Sciences",
        faculty: "Science, Engineering and Technology",
        duration: 3,
        apsMin: 26,
        subjectRequirements: [
          { subject: "Mathematics", level: 3 },
          { subject: "Life Sciences", level: 4 }
        ]
      }
    ]
  }
];
