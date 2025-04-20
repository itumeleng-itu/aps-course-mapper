
import React, { useState } from 'react';
import { Subject } from '@/components/SubjectSelect';
import { useToast } from '@/hooks/use-toast';
import { getAPSPoints, meetsSubjectRequirements } from '@/utils/calculations';
import { southAfricanUniversities, Course } from '@/data/universities';
import CoursesHeader from '@/components/CoursesHeader';
import SubjectsForm from '@/components/SubjectsForm';
import APSScoreDisplay from '@/components/APSScoreDisplay';
import QualifyingCourses from '@/components/QualifyingCourses';

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
      let validSubjectsCount = 0;

      subjects.forEach(subject => {
        if (subject.name && subject.percentage) {
          const points = getAPSPoints(parseInt(subject.percentage));
          subjectLevels[subject.name] = points;
          
          if (subject.name === "Life Orientation") {
            return;
          }
          
          totalPoints += points;
          validSubjectsCount++;
        }
      });

      if (validSubjectsCount < 6) {
        toast({
          title: "Insufficient subjects",
          description: "Please enter at least 6 subjects excluding Life Orientation for a valid APS calculation.",
          variant: "destructive",
        });
        setLoading(false);
        return;
      }

      setApsScore(totalPoints);
      
      const qualifying = southAfricanUniversities.flatMap(university => 
        university.courses
          .filter(course => {
            if (totalPoints < course.apsMin) {
              return false;
            }
            
            return meetsSubjectRequirements(subjectLevels, course.subjectRequirements);
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

  const canCalculate = subjects.length >= 6 && 
    subjects.every(s => s.name && s.percentage) && 
    new Set(selectedSubjects).size === selectedSubjects.length;

  return (
    <div className="space-y-8 max-w-4xl mx-auto p-4">
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg p-8 shadow-lg">
        <CoursesHeader />
        <SubjectsForm
          subjects={subjects}
          selectedSubjects={selectedSubjects}
          onAddSubject={addSubject}
          onCalculate={calculateQualifications}
          onSubjectChange={updateSubject}
          onPercentageChange={updatePercentage}
          onRemoveSubject={removeSubject}
          canCalculate={canCalculate}
          loading={loading}
        />
      </div>

      {apsScore !== null && (
        <div className="space-y-6">
          <APSScoreDisplay score={apsScore} />
          <QualifyingCourses 
            courses={qualifyingCourses}
            loading={loading}
          />
        </div>
      )}
    </div>
  );
};

export default Index;
