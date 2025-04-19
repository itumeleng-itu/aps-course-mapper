
import React from 'react';
import { cn } from '@/lib/utils';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Input } from '@/components/ui/input';
import { Trash2 } from 'lucide-react';
import { Button } from '@/components/ui/button';

export interface Subject {
  name: string;
  percentage: string;
}

interface SubjectSelectProps {
  subject: Subject;
  availableSubjects: Record<string, string[]>;
  selectedSubjects: string[];
  onSubjectChange: (name: string) => void;
  onPercentageChange: (percentage: string) => void;
  onRemove: () => void;
}

const SubjectSelect: React.FC<SubjectSelectProps> = ({
  subject,
  availableSubjects,
  selectedSubjects,
  onSubjectChange,
  onPercentageChange,
  onRemove,
}) => {
  return (
    <div className="flex gap-4 items-center">
      <Select value={subject.name} onValueChange={onSubjectChange}>
        <SelectTrigger className="flex-1">
          <SelectValue placeholder="Select Subject" />
        </SelectTrigger>
        <SelectContent>
          {Object.entries(availableSubjects).map(([category, subjects]) => (
            <div key={category}>
              <div className="text-sm font-semibold px-2 py-1.5 text-muted-foreground">
                {category}
              </div>
              {subjects.map((subjectName) => (
                <SelectItem
                  key={subjectName}
                  value={subjectName}
                  disabled={selectedSubjects.includes(subjectName) && subject.name !== subjectName}
                >
                  {subjectName}
                </SelectItem>
              ))}
            </div>
          ))}
        </SelectContent>
      </Select>
      <Input
        type="number"
        placeholder="%"
        min="0"
        max="100"
        className="w-24 bg-white text-black"
        value={subject.percentage}
        onChange={(e) => onPercentageChange(e.target.value)}
      />
      <Button
        variant="ghost"
        size="icon"
        onClick={onRemove}
        className="text-destructive hover:text-destructive hover:bg-destructive/10"
      >
        <Trash2 className="h-5 w-5" />
      </Button>
    </div>
  );
};

export default SubjectSelect;
