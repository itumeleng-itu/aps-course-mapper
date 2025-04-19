
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

interface CourseCardProps {
  degree: string;
  apsMin: number;
}

const CourseCard: React.FC<CourseCardProps> = ({ degree, apsMin }) => {
  return (
    <Card className="hover:shadow-md transition-shadow">
      <CardContent className="p-4">
        <h4 className="font-semibold text-gray-800">{degree}</h4>
        <Badge variant="secondary" className="mt-2">
          APS: {apsMin}
        </Badge>
      </CardContent>
    </Card>
  );
};

export default CourseCard;
