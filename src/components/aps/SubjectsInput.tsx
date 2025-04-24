
import { Button } from "@/components/ui/button";
import { Plus, Trash2 } from "lucide-react";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { southAfricanSubjects } from "@/data/subjects";
import { SubjectMark, classifySubject } from "@/utils/aps/types";

interface SubjectsInputProps {
  subjects: SubjectMark[];
  onAddSubject: () => void;
  onUpdateSubject: (index: number, field: keyof SubjectMark, value: string | number) => void;
  onRemoveSubject: (index: number) => void;
}

const SubjectsInput = ({
  subjects,
  onAddSubject,
  onUpdateSubject,
  onRemoveSubject,
}: SubjectsInputProps) => {
  return (
    <ScrollArea className="h-[340px] pr-4">
      <div className="space-y-4">
        {subjects.map((subject, index) => (
          <div key={index} className="grid grid-cols-[1fr,80px,40px] gap-2 items-end">
            <div>
              <Label htmlFor={`subject-name-${index}`}>Subject</Label>
              <Select
                value={subject.name}
                onValueChange={(value) => onUpdateSubject(index, 'name', value)}
              >
                <SelectTrigger id={`subject-name-${index}`}>
                  <SelectValue placeholder="Select subject" />
                </SelectTrigger>
                <SelectContent position="popper">
                  {Object.entries(southAfricanSubjects).map(([category, subjects]) => (
                    <div key={category}>
                      <SelectItem value={category} disabled className="font-semibold text-primary">
                        {category}
                      </SelectItem>
                      {subjects.map((name) => (
                        <SelectItem key={name} value={name}>{name}</SelectItem>
                      ))}
                    </div>
                  ))}
                </SelectContent>
              </Select>
              {subject.type && (
                <div className="text-xs mt-1 text-muted-foreground">
                  Type: {subject.type}
                </div>
              )}
            </div>
            <div>
              <Label htmlFor={`subject-percentage-${index}`}>Mark (%)</Label>
              <Input
                id={`subject-percentage-${index}`}
                type="number"
                min="0"
                max="100"
                value={subject.percentage}
                onChange={(e) => onUpdateSubject(index, 'percentage', e.target.value)}
              />
            </div>
            <Button
              variant="outline"
              size="icon"
              onClick={() => onRemoveSubject(index)}
              className="flex-shrink-0"
            >
              <Trash2 className="h-4 w-4" />
            </Button>
          </div>
        ))}
      </div>
      
      <Button variant="outline" onClick={onAddSubject} className="mt-4 flex items-center gap-1">
        <Plus className="h-4 w-4" /> Add Subject
      </Button>
    </ScrollArea>
  );
};

export default SubjectsInput;
