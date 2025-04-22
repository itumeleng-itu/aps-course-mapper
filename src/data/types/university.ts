
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
