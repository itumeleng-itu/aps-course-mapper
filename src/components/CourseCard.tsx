
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { GraduationCap, Calendar, MapPin, BookOpen } from 'lucide-react';

interface CourseCardProps {
  degree: string;
  university: string;
  faculty: string;
  duration: number;
  apsMin: number;
}

const CourseCard: React.FC<CourseCardProps> = ({ degree, university, faculty, duration, apsMin }) => {
  return (
    <Card className="hover:shadow-md transition-shadow h-full">
      <CardContent className="p-4 flex flex-col h-full">
        <div className="flex-1">
          <h4 className="font-semibold text-gray-800 text-lg">{degree}</h4>
          <div className="mt-2 space-y-1">
            <div className="flex items-center text-sm text-gray-600">
              <MapPin className="h-4 w-4 mr-2 text-blue-500" />
              {university}
            </div>
            <div className="flex items-center text-sm text-gray-600">
              <BookOpen className="h-4 w-4 mr-2 text-blue-500" />
              {faculty}
            </div>
            <div className="flex items-center text-sm text-gray-600">
              <Calendar className="h-4 w-4 mr-2 text-blue-500" />
              {duration} {duration === 1 ? 'year' : 'years'}
            </div>
          </div>
        </div>
        <div className="mt-3 pt-3 border-t border-gray-100 flex items-center justify-between">
          <Badge variant="secondary" className="flex items-center space-x-1">
            <GraduationCap className="h-3 w-3" />
            <span>APS: {apsMin}</span>
          </Badge>
        </div>
      </CardContent>
    </Card>
  );
};

export default CourseCard;
