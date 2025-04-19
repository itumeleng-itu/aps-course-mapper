
import React from 'react';
import { School } from 'lucide-react';

const CoursesHeader = () => {
  return (
    <div>
      <div className="flex items-center mb-2">
        <School className="h-6 w-6 mr-2" />
        <h1 className="text-3xl font-bold">CourseFinder South Africa</h1>
      </div>
      <p className="text-blue-100">Find South African university courses you qualify for based on your NSC results</p>
    </div>
  );
};

export default CoursesHeader;
