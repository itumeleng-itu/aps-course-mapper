
import React from 'react';
import { Button } from '@/components/ui/button';
import { PlusCircle, Calculator } from 'lucide-react';
import SubjectSelect from './SubjectSelect';
import { Subject } from './SubjectSelect';
import { southAfricanSubjects } from '@/data/subjects';

interface SubjectsFormProps {
  subjects: Subject[];
  selectedSubjects: string[];
  onAddSubject: () => void;
  onCalculate: () => void;
  onSubjectChange: (index: number, name: string) => void;
  onPercentageChange: (index: number, percentage: string) => void;
  onRemoveSubject: (index: number) => void;
  canCalculate: boolean;
  loading: boolean;
}

const SubjectsForm = ({
  subjects,
  selectedSubjects,
  onAddSubject,
  onCalculate,
  onSubjectChange,
  onPercentageChange,
  onRemoveSubject,
  canCalculate,
  loading,
}: SubjectsFormProps) => {
  return (
    <div className="bg-white/10 p-6 rounded-lg backdrop-blur-sm">
      <h2 className="text-xl font-semibold mb-4">Enter your NSC Subject Results</h2>
      <div className="space-y-4">
        {subjects.map((subject, index) => (
          <SubjectSelect
            key={index}
            subject={subject}
            availableSubjects={southAfricanSubjects}
            selectedSubjects={selectedSubjects}
            onSubjectChange={(name) => onSubjectChange(index, name)}
            onPercentageChange={(percentage) => onPercentageChange(index, percentage)}
            onRemove={() => onRemoveSubject(index)}
          />
        ))}
      </div>
      
      <div className="space-x-4 pt-4">
        <Button
          variant="secondary"
          onClick={onAddSubject}
          className="bg-white/10 text-white hover:bg-white/20"
        >
          <PlusCircle className="mr-2 h-4 w-4" />
          Add Subject
        </Button>
        <Button
          onClick={onCalculate}
          disabled={!canCalculate || loading}
        >
          <Calculator className="mr-2 h-4 w-4" />
          Find Courses
        </Button>
      </div>
      
      {subjects.length < 6 && (
        <p className="text-xs text-white/90 mt-3">
          Add at least 6 subjects excluding Life Orientation for APS calculation
        </p>
      )}
    </div>
  );
};

export default SubjectsForm;
