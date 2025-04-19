
import React from 'react';
import { Badge } from '@/components/ui/badge';
import CourseCard from './CourseCard';
import { Course } from '@/data/universities';

interface QualifyingCoursesProps {
  courses: Array<Course & { university: string }>;
  loading: boolean;
}

const QualifyingCourses = ({ courses, loading }: QualifyingCoursesProps) => {
  return (
    <div className="bg-white rounded-lg p-6 shadow-lg border border-gray-200">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-xl font-bold text-gray-800">Qualifying Courses</h3>
        <Badge variant="outline" className="px-3 py-1 font-medium">
          {courses.length} Results
        </Badge>
      </div>
      
      {loading ? (
        <div className="text-center text-gray-500 p-10">Finding courses you qualify for...</div>
      ) : (
        <div className="grid gap-4 md:grid-cols-2">
          {courses.length > 0 ? (
            courses.map((course, index) => (
              <CourseCard
                key={index}
                degree={course.degree}
                university={course.university}
                faculty={course.faculty}
                duration={course.duration}
                apsMin={course.apsMin}
                subjectRequirements={course.subjectRequirements}
              />
            ))
          ) : (
            <div className="text-center p-8 bg-gray-50 rounded-lg md:col-span-2">
              <div className="text-gray-400 mb-3">No qualifying courses found</div>
              <p className="text-sm text-gray-600">
                Try adding more subjects or improving your marks
              </p>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default QualifyingCourses;
