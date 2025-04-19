
import React from 'react';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { GraduationCap, Calendar, MapPin, BookOpen, Check } from 'lucide-react';

interface SubjectRequirement {
  subject: string;
  level: number;
}

interface CourseCardProps {
  degree: string;
  university: string;
  faculty: string;
  duration: number;
  apsMin: number;
  subjectRequirements?: SubjectRequirement[];
}

const CourseCard: React.FC<CourseCardProps> = ({ 
  degree, 
  university, 
  faculty, 
  duration, 
  apsMin,
  subjectRequirements 
}) => {
  return (
    <Card className="hover:shadow-md transition-shadow h-full border-2 border-gray-100">
      <CardContent className="p-4 flex flex-col h-full">
        <div className="flex-1">
          <h4 className="font-semibold text-blue-800 text-lg">{degree}</h4>
          <div className="mt-2 space-y-2">
            <div className="flex items-center text-sm text-gray-700">
              <MapPin className="h-4 w-4 mr-2 text-blue-500" />
              <span className="font-medium">{university}</span>
            </div>
            <div className="flex items-center text-sm text-gray-700">
              <BookOpen className="h-4 w-4 mr-2 text-blue-500" />
              <span>{faculty}</span>
            </div>
            <div className="flex items-center text-sm text-gray-700">
              <Calendar className="h-4 w-4 mr-2 text-blue-500" />
              <span>{duration} {duration === 1 ? 'year' : 'years'}</span>
            </div>

            {subjectRequirements && subjectRequirements.length > 0 && (
              <div className="mt-2 pt-2 border-t border-gray-100">
                <p className="text-xs font-semibold text-gray-700 mb-1">Subject Requirements:</p>
                <div className="space-y-1">
                  {subjectRequirements.map((req, index) => (
                    <div key={index} className="flex items-center text-xs text-gray-600">
                      <Check className="h-3 w-3 mr-1 text-green-500" />
                      <span>{req.subject} (Level {req.level}+)</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
        <div className="mt-3 pt-3 border-t border-gray-100 flex items-center justify-between">
          <Badge variant="secondary" className="flex items-center space-x-1 bg-blue-100 text-blue-800">
            <GraduationCap className="h-3 w-3" />
            <span>APS: {apsMin}+</span>
          </Badge>
        </div>
      </CardContent>
    </Card>
  );
};

export default CourseCard;
