
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { PlusCircle, Calculator, Filter } from 'lucide-react';
import SubjectSelect, { Subject } from '@/components/SubjectSelect';
import CourseCard from '@/components/CourseCard';
import { southAfricanSubjects } from '@/data/subjects';
import { southAfricanUniversities, Course, University } from '@/data/universities';
import { getAPSPoints } from '@/utils/calculations';
import { useToast } from '@/components/ui/use-toast';

const Index = () => {
  const [subjects, setSubjects] = useState<Subject[]>([]);
  const [apsScore, setApsScore] = useState<number | null>(null);
  const [qualifyingCourses, setQualifyingCourses] = useState<Array<Course & { university: string }>>([]);
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();

  const selectedSubjects = subjects.map(s => s.name).filter(Boolean);

  const addSubject = () => {
    setSubjects([...subjects, { name: '', percentage: '' }]);
  };

  const removeSubject = (index: number) => {
    setSubjects(subjects.filter((_, i) => i !== index));
  };

  const updateSubject = (index: number, name: string) => {
    const newSubjects = [...subjects];
    newSubjects[index].name = name;
    setSubjects(newSubjects);
  };

  const updatePercentage = (index: number, percentage: string) => {
    const newSubjects = [...subjects];
    newSubjects[index].percentage = percentage;
    setSubjects(newSubjects);
  };

  const calculateQualifications = () => {
    setLoading(true);
    try {
      let totalPoints = 0;
      const subjectLevels: Record<string, number> = {};

      subjects.forEach(subject => {
        if (subject.name && subject.percentage) {
          // Skip Life Orientation when calculating total APS
          if (subject.name === "Life Orientation") {
            const points = getAPSPoints(parseInt(subject.percentage));
            subjectLevels[subject.name] = points;
            return;
          }
          
          const points = getAPSPoints(parseInt(subject.percentage));
          totalPoints += points;
          subjectLevels[subject.name] = points;
        }
      });

      setApsScore(totalPoints);
      
      // Find qualifying courses based on APS and subject requirements
      const qualifying = southAfricanUniversities.flatMap(university => 
        university.courses
          .filter(course => {
            // First check if APS meets the minimum requirement
            if (totalPoints < course.apsMin) {
              return false;
            }
            
            // Then check if subject requirements are met
            for (const req of course.subjectRequirements) {
              const userLevel = subjectLevels[req.subject] || 0;
              if (userLevel < req.level) {
                return false;
              }
            }
            
            return true;
          })
          .map(course => ({
            ...course,
            university: university.name
          }))
      );
      
      setQualifyingCourses(qualifying);
      
      if (qualifying.length === 0) {
        toast({
          title: "No matching courses found",
          description: "Try adding more subjects or improving your marks.",
          variant: "default",
        });
      } else {
        toast({
          title: `Found ${qualifying.length} matching courses`,
          description: "Scroll down to see your options.",
          variant: "default",
        });
      }
      
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Error",
        description: "Failed to calculate qualifying courses. Please try again."
      });
    } finally {
      setLoading(false);
    }
  };

  const canCalculate = subjects.length >= 2 && 
    subjects.every(s => s.name && s.percentage) && 
    new Set(selectedSubjects).size === selectedSubjects.length;

  return (
    <div className="space-y-8 max-w-4xl mx-auto p-4">
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg p-8 shadow-lg">
        <h1 className="text-3xl font-bold">CourseFinder</h1>
        <p className="text-blue-100">Find South African university courses you qualify for</p>
        
        <div className="bg-white/10 p-6 rounded-lg backdrop-blur-sm mt-6">
          <div className="space-y-4">
            {subjects.map((subject, index) => (
              <SubjectSelect
                key={index}
                subject={subject}
                availableSubjects={southAfricanSubjects}
                selectedSubjects={selectedSubjects}
                onSubjectChange={(name) => updateSubject(index, name)}
                onPercentageChange={(percentage) => updatePercentage(index, percentage)}
                onRemove={() => removeSubject(index)}
              />
            ))}
          </div>
          
          <div className="space-x-4 pt-4">
            <Button
              variant="secondary"
              onClick={addSubject}
              className="bg-white/10 text-white hover:bg-white/20"
            >
              <PlusCircle className="mr-2 h-4 w-4" />
              Add Subject
            </Button>
            <Button
              onClick={calculateQualifications}
              disabled={!canCalculate || loading}
            >
              <Calculator className="mr-2 h-4 w-4" />
              Find Courses
            </Button>
          </div>
        </div>
      </div>

      {apsScore !== null && (
        <div className="space-y-6">
          <div className="bg-white rounded-lg p-6 shadow-lg border border-gray-200">
            <h2 className="text-2xl font-bold text-gray-800">Your APS Score</h2>
            <div className="text-4xl font-bold text-blue-600">{apsScore}</div>
            <p className="text-gray-500 text-sm mt-2">Note: Life Orientation is not included in the APS total</p>
          </div>

          <div className="bg-white rounded-lg p-6 shadow-lg border border-gray-200">
            <h3 className="text-xl font-bold text-gray-800 mb-4">Qualifying Courses</h3>
            {loading ? (
              <div className="text-center text-gray-500">Finding courses you qualify for...</div>
            ) : (
              <div className="grid gap-4 md:grid-cols-2">
                {qualifyingCourses.length > 0 ? (
                  qualifyingCourses.map((course, index) => (
                    <CourseCard
                      key={index}
                      degree={course.degree}
                      university={course.university}
                      faculty={course.faculty}
                      duration={course.duration}
                      apsMin={course.apsMin}
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
        </div>
      )}
    </div>
  );
};

export default Index;
