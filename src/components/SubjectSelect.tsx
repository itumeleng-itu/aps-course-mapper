
import React, { useRef } from 'react';
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
import { ScrollArea } from '@/components/ui/scroll-area';

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
  const triggerRef = useRef<HTMLButtonElement>(null);

  return (
    <div className="flex gap-4 items-center">
      <Select value={subject.name} onValueChange={onSubjectChange}>
        <SelectTrigger ref={triggerRef} className="flex-1 bg-white text-black z-[51]">
          <SelectValue placeholder="Select Subject" />
        </SelectTrigger>
        <SelectContent
          className="bg-white text-black w-[var(--radix-select-trigger-width)] max-h-[300px] z-[9999]"
          position="popper"
        >
          <ScrollArea className="h-[300px]">
            {Object.entries(availableSubjects).map(([category, subjects]) => (
              <div key={category}>
                <div className="text-sm font-semibold px-2 py-1.5 text-muted-foreground sticky top-0 bg-white z-10">
                  {category}
                </div>
                {subjects.map((subjectName) => (
                  <SelectItem
                    key={subjectName}
                    value={subjectName}
                    disabled={selectedSubjects.includes(subjectName) && subject.name !== subjectName}
                    className="hover:bg-gray-100"
                  >
                    {subjectName}
                  </SelectItem>
                ))}
              </div>
            ))}
          </ScrollArea>
        </SelectContent>
      </Select>
      <div className="flex flex-col items-center">
        <Input
          type="number"
          placeholder="%"
          min="0"
          max="100"
          className="w-24 bg-white text-black font-medium"
          value={subject.percentage}
          onChange={(e) => onPercentageChange(e.target.value)}
        />
        {subject.percentage && (
          <div className="text-xs font-medium text-blue-600 mt-1">
            {subject.percentage}% - Level {subject.percentage ? getSubjectLevel(parseInt(subject.percentage)) : ''}
          </div>
        )}
      </div>
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

// Helper function to convert percentage to NSC level
const getSubjectLevel = (percentage: number): number => {
  if (percentage >= 80) return 7;
  if (percentage >= 70) return 6;
  if (percentage >= 60) return 5;
  if (percentage >= 50) return 4;
  if (percentage >= 40) return 3;
  if (percentage >= 30) return 2;
  return 1;
};

export default SubjectSelect;
