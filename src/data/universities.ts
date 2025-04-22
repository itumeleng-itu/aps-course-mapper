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
      // Arts and Design Faculty courses
      {
        degree: "Diploma in Commercial Photography",
        faculty: "Arts and Design",
        duration: 3,
        apsMin: 22,
        subjectRequirements: [
          { subject: "English", level: 3 }
        ]
      },
      {
        degree: "Diploma in Fashion Design and Technology",
        faculty: "Arts and Design",
        duration: 3,
        apsMin: 20,
        subjectRequirements: [
          { subject: "English", level: 3 }
        ]
      },
      {
        degree: "Diploma in Fine and Applied Arts",
        faculty: "Arts and Design",
        duration: 3,
        apsMin: 20,
        subjectRequirements: [
          { subject: "English", level: 3 }
        ]
      },
      {
        degree: "Diploma in Integrated Communication Design",
        faculty: "Arts and Design",
        duration: 3,
        apsMin: 24,
        subjectRequirements: [
          { subject: "English", level: 4 }
        ]
      },
      {
        degree: "Diploma in Interior Design",
        faculty: "Arts and Design",
        duration: 3,
        apsMin: 22,
        subjectRequirements: [
          { subject: "English", level: 4 },
          { subject: "Civil Technology", level: 3 },
          { subject: "Engineering Graphics and Design", level: 3 },
          { subject: "Visual Arts", level: 3 }
        ]
      },
      {
        degree: "Diploma in Jewellery Design and Manufacture",
        faculty: "Arts and Design",
        duration: 3,
        apsMin: 20,
        subjectRequirements: [
          { subject: "English", level: 3 }
        ]
      },
      {
        degree: "Diploma in Motion Picture Production",
        faculty: "Arts and Design",
        duration: 3,
        apsMin: 22,
        subjectRequirements: [
          { subject: "English", level: 4 }
        ]
      },
      {
        degree: "Diploma in Performing Arts (Dance)",
        faculty: "Arts and Design",
        duration: 3,
        apsMin: 20,
        subjectRequirements: [
          { subject: "English", level: 4 }
        ]
      },
      {
        degree: "Diploma in Performing Arts (Jazz Music)",
        faculty: "Arts and Design",
        duration: 3,
        apsMin: 20,
        subjectRequirements: [
          { subject: "English", level: 4 }
        ]
      },
      {
        degree: "Diploma in Performing Arts (Opera)",
        faculty: "Arts and Design",
        duration: 3,
        apsMin: 20,
        subjectRequirements: [
          { subject: "English", level: 4 }
        ]
      },
      {
        degree: "Diploma in Performing Arts (Technical Theatre and Design)",
        faculty: "Arts and Design",
        duration: 3,
        apsMin: 20,
        subjectRequirements: [
          { subject: "English", level: 4 }
        ]
      },
      {
        degree: "Diploma in Performing Arts (Technical Theatre and Perfomance)",
        faculty: "Arts and Design",
        duration: 3,
        apsMin: 20,
        subjectRequirements: [
          { subject: "English", level: 4 }
        ]
      },
      {
        degree: "Higher Certificate in Music",
        faculty: "Arts and Design",
        duration: 3,
        apsMin: 18,
        subjectRequirements: [
          { subject: "English", level: 3 }
        ]
      },
      // Economics and Finance Faculty courses
      {
        degree: "Diploma in Accounting",
        faculty: "Economics and Finance",
        duration: 3,
        apsMin: 22,
        subjectRequirements: [
          { subject: "English", level: 4 },
          { subject: "Accounting", level: 5 },
          { subject: "Mathematics/Technical Mathematics", level: 3 },
          { subject: "Mathematical Literacy", level: 5 }
        ]
      },
      {
        degree: "Diploma in Economics",
        faculty: "Economics and Finance",
        duration: 3,
        apsMin: 22,
        subjectRequirements: [
          { subject: "English", level: 4 },
          { subject: "Mathematics/Technical Mathematics", level: 3 },
          { subject: "Mathematical Literacy", level: 6 }
        ]
      },
      {
        degree: "Diploma in Financial Management",
        faculty: "Economics and Finance",
        duration: 3,
        apsMin: 22,
        subjectRequirements: [
          { subject: "English", level: 4 },
          { subject: "Accounting", level: 3 },
          { subject: "Mathematics/Technical Mathematics", level: 3 },
          { subject: "Mathematical Literacy", level: 5 }
        ]
      },
      {
        degree: "Diploma in Financial Planning",
        faculty: "Economics and Finance",
        duration: 3,
        apsMin: 22,
        subjectRequirements: [
          { subject: "English", level: 4 },
          { subject: "Accounting", level: 3 },
          { subject: "Mathematics/Technical Mathematics", level: 3 },
          { subject: "Mathematical Literacy", level: 5 }
        ]
      },
      {
        degree: "Diploma in Internal Auditing",
        faculty: "Economics and Finance",
        duration: 3,
        apsMin: 22,
        subjectRequirements: [
          { subject: "English", level: 4 },
          { subject: "Accounting", level: 3 },
          { subject: "Mathematics/Technical Mathematics", level: 3 },
          { subject: "Mathematical Literacy", level: 5 }
        ]
      },
      {
        degree: "Diploma in Public Finance",
        faculty: "Economics and Finance",
        duration: 3,
        apsMin: 22,
        subjectRequirements: [
          { subject: "English", level: 4 },
          { subject: "Accounting", level: 4 },
          { subject: "Mathematics/Technical Mathematics", level: 3 },
          { subject: "Mathematical Literacy", level: 5 }
        ]
      },
      {
        degree: "Higher Certificate in Accounting",
        faculty: "Economics and Finance",
        duration: 1,
        apsMin: 22,
        subjectRequirements: [
          { subject: "English", level: 4 },
          { subject: "Mathematics/Technical Mathematics", level: 3 },
          { subject: "Mathematical Literacy", level: 4 }
        ]
      },
      // Engineering and Built Environment Faculty courses
      {
        degree: "Bachelor of Architecture",
        faculty: "Engineering and the Built Environment",
        duration: 4,
        apsMin: 25,
        subjectRequirements: [
          { subject: "English", level: 4 }
        ]
      },
      {
        degree: "Bachelor of Architecture(Extended)",
        faculty: "Engineering and the Built Environment",
        duration: 5,
        apsMin: 25,
        subjectRequirements: [
          { subject: "English", level: 4 }
        ]
      },
      {
        degree: "Bachelor of Geomatics",
        faculty: "Engineering and the Built Environment",
        duration: 3,
        apsMin: 25,
        subjectRequirements: [
          { subject: "English", level: 4 },
          { subject: "Mathematics/Technical Mathematics", level: 5 },
          { subject: "Physical Sciences/Technical Sciences", level: 4 }
        ]
      },
      {
        degree: "Bachelor of Engineering Technology (Chemical Engineering)",
        faculty: "Engineering and the Built Environment",
        duration: 3,
        apsMin: 28,
        subjectRequirements: [
          { subject: "English", level: 4 },
          { subject: "Mathematics/Technical Mathematics", level: 5 },
          { subject: "Physical Sciences/Technical Sciences", level: 5 }
        ]
      },
      {
        degree: "Bachelor of Engineering Technology (Civil Engineering)",
        faculty: "Engineering and the Built Environment",
        duration: 3,
        apsMin: 28,
        subjectRequirements: [
          { subject: "English", level: 4 },
          { subject: "Mathematics/Technical Mathematics", level: 5 },
          { subject: "Physical Sciences/Technical Sciences", level: 5 }
        ]
      },
      {
        degree: "Bachelor of Engineering Technology (Electrical Engineering)",
        faculty: "Engineering and the Built Environment",
        duration: 3,
        apsMin: 30,
        subjectRequirements: [
          { subject: "English", level: 4 },
          { subject: "Mathematics/Technical Mathematics", level: 5 },
          { subject: "Physical Sciences/Technical Sciences", level: 5 }
        ]
      },
      {
        degree: "Bachelor of Engineering Technology (Industrial Engineering)",
        faculty: "Engineering and the Built Environment",
        duration: 3,
        apsMin: 28,
        subjectRequirements: [
          { subject: "English", level: 4 },
          { subject: "Mathematics/Technical Mathematics", level: 5 },
          { subject: "Physical Sciences/Technical Sciences", level: 5 }
        ]
      },
      {
        degree: "Bachelor of Engineering Technology (Materials Engineering)",
        faculty: "Engineering and the Built Environment",
        duration: 3,
        apsMin: 28,
        subjectRequirements: [
          { subject: "English", level: 4 },
          { subject: "Mathematics/Technical Mathematics", level: 5 },
          { subject: "Physical Sciences/Technical Sciences", level: 5 }
        ]
      },
      {
        degree: "Bachelor of Engineering Technology (Mechanical Engineering)",
        faculty: "Engineering and the Built Environment",
        duration: 3,
        apsMin: 28,
        subjectRequirements: [
          { subject: "English", level: 4 },
          { subject: "Mathematics/Technical Mathematics", level: 5 },
          { subject: "Physical Sciences/Technical Sciences", level: 5 }
        ]
      },
      {
        degree: "Bachelor of Engineering Technology (Mechatronics Engineering)",
        faculty: "Engineering and the Built Environment",
        duration: 3,
        apsMin: 28,
        subjectRequirements: [
          { subject: "English", level: 4 },
          { subject: "Mathematics/Technical Mathematics", level: 5 },
          { subject: "Physical Sciences/Technical Sciences", level: 5 }
        ]
      },
      {
        degree: "Bachelor of Engineering Technology (Metallurgical Engineering)",
        faculty: "Engineering and the Built Environment",
        duration: 3,
        apsMin: 28,
        subjectRequirements: [
          { subject: "English", level: 4 },
          { subject: "Mathematics/Technical Mathematics", level: 5 },
          { subject: "Physical Sciences/Technical Sciences", level: 5 }
        ]
      },
      {
        degree: "Diploma in Building Science",
        faculty: "Engineering and the Built Environment",
        duration: 3,
        apsMin: 26,
        subjectRequirements: [
          { subject: "English", level: 4 },
          { subject: "Mathematics/Technical Mathematics", level: 3 },
          { subject: "Physical Sciences/Technical Sciences", level: 3 }
        ]
      },
      {
        degree: "Diploma in Electrical Engineering",
        faculty: "Engineering and the Built Environment",
        duration: 3,
        apsMin: 26,
        subjectRequirements: [
          { subject: "English", level: 4 },
          { subject: "Mathematics/Technical Mathematics", level: 4 },
          { subject: "Physical Sciences/Technical Sciences", level: 4 }
        ]
      },
      {
        degree: "Diploma in Geomatics",
        faculty: "Engineering and the Built Environment",
        duration: 3,
        apsMin: 23,
        subjectRequirements: [
          { subject: "English", level: 4 },
          { subject: "Mathematics/Technical Mathematics", level: 4 },
          { subject: "Physical Sciences/Technical Sciences", level: 3 }
        ]
      },
      {
        degree: "Diploma in Industrial Design",
        faculty: "Engineering and the Built Environment",
        duration: 3,
        apsMin: 21,
        subjectRequirements: [
          { subject: "English", level: 4 }
        ]
      },
      {
        degree: "Higer Certificate in Construction Engineering: Material Test",
        faculty: "Engineering and the Built Environment",
        duration: 1,
        apsMin: 20,
        subjectRequirements: [
          { subject: "English", level: 4 },
          { subject: "Mathematics/Technical Mathematics", level: 4 },
          { subject: "Physical Sciences/Technical Sciences", level: 3 }
        ]
      },
      {
        degree: "Higer Certificate in Construction Engineering: Water and Waste",
        faculty: "Engineering and the Built Environment",
        duration: 1,
        apsMin: 20,
        subjectRequirements: [
          { subject: "English", level: 4 },
          { subject: "Mathematics/Technical Mathematics", level: 4 },
          { subject: "Physical Sciences/Technical Sciences", level: 3 }
        ]
      },
      {
        degree: "Higer Certificate in Electrical Engineering",
        faculty: "Engineering and the Built Environment",
        duration: 1,
        apsMin: 20,
        subjectRequirements: [
          { subject: "English", level: 4 },
          { subject: "Mathematics/Technical Mathematics", level: 4 },
          { subject: "Physical Sciences/Technical Sciences", level: 3 }
        ]
      },
      {
        degree: "Higer Certificate in Industrial Engineering",
        faculty: "Engineering and the Built Environment",
        duration: 1,
        apsMin: 20,
        subjectRequirements: [
          { subject: "English", level: 4 },
          { subject: "Mathematics/Technical Mathematics", level: 4 },
          { subject: "Physical Sciences/Technical Sciences", level: 3 }
        ]
      },
      {
        degree: "Higer Certificate in Mechanical Engineering",
        faculty: "Engineering and the Built Environment",
        duration: 1,
        apsMin: 20,
        subjectRequirements: [
          { subject: "English", level: 4 },
          { subject: "Mathematics/Technical Mathematics", level: 4 },
          { subject: "Physical Sciences/Technical Sciences", level: 3 }
        ]
      },
      // Humanities Faculty courses
      {
        degree: "Bachelor of Education (Foundation Phase Teaching)",
        faculty: "Humanities",
        duration: 4,
        apsMin: 25,
        subjectRequirements: [
          { subject: "Home Language", level: 5 },
          { subject: "First Additional Language", level: 4 },
          { subject: "Mathematics", level: 4 },
          { subject: "Mathematical Literacy", level: 5 }
        ]
      },
      {
        degree: "Bachelor of Education (Intermediate Phase Teaching)",
        faculty: "Humanities",
        duration: 4,
        apsMin: 25,
        subjectRequirements: [
          { subject: "Home Language", level: 4 },
          { subject: "First Additional Language", level: 4 },
          { subject: "Mathematics", level: 4 },
          { subject: "Mathematical Literacy", level: 5 }
        ]
      },
      {
        degree: "Bachelor of Education (Senior Phase and Further Education and Training Teaching) (Specialisation in Agriculture)",
        faculty: "Humanities",
        duration: 4,
        apsMin: 24,
        subjectRequirements: [
          { subject: "English", level: 4 },
          { subject: "Mathematics/Technical Mathematics/Mathematical Literacy", level: 4 },
          { subject: "Agricultural Sciences/Life Sciences/Physical Sciences/Technical Sciences", level: 4 }
        ]
      },
      {
        degree: "Bachelor of Education (Senior Phase and Further Education and Training Teaching) (Specialisation in Consumer Sciences)",
        faculty: "Humanities",
        duration: 4,
        apsMin: 24,
        subjectRequirements: [
          { subject: "English", level: 4 },
          { subject: "Mathematics/Technical Mathematics/Mathematical Literacy", level: 4 },
          { subject: "Consumer Studies/Hospitality Studies/Tourism", level: 4 }
        ]
      },
      {
        degree: "Bachelor of Education (Senior Phase and Further Education and Training Teaching) (Specialisation in Economic and Management Sciences)",
        faculty: "Humanities",
        duration: 4,
        apsMin: 24,
        subjectRequirements: [
          { subject: "English", level: 4 },
          { subject: "Mathematics/Technical Mathematics/Mathematical Literacy", level: 4 },
          { subject: "Accounting/Business Studies/Economics", level: 4 }
        ]
      },
      {
        degree: "Bachelor of Education (Senior Phase and Further Education and Training Teaching) (Specialisation in Information Technology)",
        faculty: "Humanities",
        duration: 4,
        apsMin: 24,
        subjectRequirements: [
          { subject: "English", level: 4 },
          { subject: "Mathematics/Technical Mathematics/Information Technology", level: 4 }
        ]
      },
      {
        degree: "Bachelor of Education (Senior Phase and Further Education and Training Teaching) (Specialisation in Mathematics)",
        faculty: "Humanities",
        duration: 4,
        apsMin: 24,
        subjectRequirements: [
          { subject: "English", level: 4 },
          { subject: "Mathematics", level: 4 },
          { subject: "Life Sciences/Physical Sciences", level: 4 }
        ]
      },
      {
        degree: "Bachelor of Education (Senior Phase and Further Education and Training Teaching) (Specialisation in Physical Education)",
        faculty: "Humanities",
        duration: 4,
        apsMin: 24,
        subjectRequirements: [
          { subject: "English", level: 4 },
          { subject: "Mathematics/Technical Mathematics/Mathematics Literacy", level: 4 },
          { subject: "Life Sciences", level: 4 }
        ]
      },
      {
        degree: "Bachelor of Education (Senior Phase and Further Education and Training Teaching) (Specialisation in Sciences)",
        faculty: "Humanities",
        duration: 4,
        apsMin: 24,
        subjectRequirements: [
          { subject: "English", level: 4 },
          { subject: "Mathematics", level: 4 },
          { subject: "Life Sciences/Physical Sciences", level: 4 }
        ]
      },
      {
        degree: "Bachelor of Education (Senior Phase and Further Education and Training Teaching) (Specialisation in Technology)",
        faculty: "Humanities",
        duration: 4,
        apsMin: 24,
        subjectRequirements: [
          { subject: "English", level: 4 },
          { subject: "Mathematics/Technical Mathematics", level: 4 },
          { subject: "Civil Technology/Electrical Technology/Mechanical Technology/Engineering Graphics and Design/Physical Sciences", level: 4 }
        ]
      },
      {
        degree: "Diploma in Adult and Community Education and Training (Agriculture)",
        faculty: "Humanities",
        duration: 3,
        apsMin: 22,
        subjectRequirements: [
          { subject: "English", level: 4 },
          { subject: "Mathematics/Technical Mathematics", level: 3 },
          { subject: "Agricultural Management Practice/Agricultural Sciences/Life Sciences/Agricultural Technology/Physical Sciences/Technical Sciences", level: 3 }
        ]
      },
      {
        degree: "Diploma in Adult and Community Education and Training (Civil Technology)",
        faculty: "Humanities",
        duration: 3,
        apsMin: 22,
        subjectRequirements: [
          { subject: "English", level: 4 },
          { subject: "Engineering Graphics and Design/Mathematics/Technical Mathematics", level: 3 },
          { subject: "Civil Technology/Physical Sciences/Technical Sciences", level: 3 }
        ]
      },
      {
        degree: "Diploma in Adult and Community Education and Training (Consumer Sciences)",
        faculty: "Humanities",
        duration: 3,
        apsMin: 22,
        subjectRequirements: [
          { subject: "English", level: 4 },
          { subject: "Mathematics/Technical Mathematics/Mathematical Literacy", level: 3 }
        ]
      },
      {
        degree: "Diploma in Adult and Community Education and Training (Economics and Management)",
        faculty: "Humanities",
        duration: 3,
        apsMin: 22,
        subjectRequirements: [
          { subject: "English", level: 4 },
          { subject: "Mathematics/Technical Mathematics/Mathematical Literacy", level: 3 },
          { subject: "Accounting/Business Studies", level: 3 }
        ]
      },
      {
        degree: "Diploma in Adult and Community Education and Training (Electrical and Mechanical)",
        faculty: "Humanities",
        duration: 3,
        apsMin: 22,
        subjectRequirements: [
          { subject: "English", level: 4 },
          { subject: "Mathematics/Technical Mathematics", level: 3 },
          { subject: "Physical Sciences/Technical Sciences", level: 3 }
        ]
      },
      {
        degree: "Diploma in Adult and Community Education and Training (Languages)",
        faculty: "Humanities",
        duration: 3,
        apsMin: 22,
        subjectRequirements: [
          { subject: "English", level: 4 },
          { subject: "Another Official Language", level: 4 }
        ]
      },
      {
        degree: "Diploma in Correctional and Rehabilitation Studies",
        faculty: "Humanities",
        duration: 3,
        apsMin: 20,
        subjectRequirements: [
          { subject: "English", level: 3 },
          { subject: "Mathematics/Mathematical Literacy", level: 3 }
        ]
      },
      {
        degree: "Diploma in Integrated Communication",
        faculty: "Humanities",
        duration: 3,
        apsMin: 20,
        subjectRequirements: [
          { subject: "English", level: 4 },
          { subject: "Mathematical Literacy", level: 4 },
          { subject: "Mathematics/Technical Mathematics/Engineering Mathematics N3", level: 3 }
        ]
      },
      {
        degree: "Diploma in Journalism",
        faculty: "Humanities",
        duration: 3,
        apsMin: 24,
        subjectRequirements: [
          { subject: "English", level: 4 }
        ]
