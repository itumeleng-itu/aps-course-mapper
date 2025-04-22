
import { University } from '@/data/types/university';

export const ukzn: University[] = [
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
  }
];
