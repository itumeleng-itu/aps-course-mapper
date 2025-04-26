import { useState } from "react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { Info } from "lucide-react";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import universities from "@/data/universities/universities"; // Import universities

interface UniversitySelectorProps {
  universitySystem: string; // Updated to accept dynamic university IDs
  schoolQuintile?: number;
  onUniversityChange: (value: string) => void;
  onQuintileChange: (value: number | undefined) => void;
}

const UniversitySelector = ({
  universitySystem,
  schoolQuintile,
  onUniversityChange,
  onQuintileChange,
}: UniversitySelectorProps) => {
  const [selectedUniversity, setSelectedUniversity] = useState<string>(universitySystem);

  return (
    <div className="grid grid-cols-2 gap-4 mb-4">
      <div>
        <Label htmlFor="university-system">University System</Label>
        <Select 
          value={selectedUniversity} 
          onValueChange={(value) => {
            setSelectedUniversity(value);
            onUniversityChange(value);
          }}
        >
          <SelectTrigger id="university-system">
            <SelectValue placeholder="Select university" />
          </SelectTrigger>
          <SelectContent position="popper">
            {universities.map((university) => (
              <SelectItem key={university.id} value={university.id.toString()}>
                {university.id.toString()} ({university.courses.join(", ")})
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
      <div>
        <Label htmlFor="school-quintile">
          School Quintile
          <Tooltip>
            <TooltipTrigger asChild>
              <Info className="h-4 w-4 inline-block ml-1 cursor-help" />
            </TooltipTrigger>
            <TooltipContent>
              <p className="w-80">
                School Quintile 1-3 represents disadvantaged schools and receives a +2 APS adjustment.
                Leave blank if not applicable.
              </p>
            </TooltipContent>
          </Tooltip>
        </Label>
        <Select
          value={schoolQuintile?.toString() || ""}
          onValueChange={(value) => onQuintileChange(value ? Number(value) : undefined)}
        >
          <SelectTrigger id="school-quintile">
            <SelectValue placeholder="Select quintile (optional)" />
          </SelectTrigger>
          <SelectContent position="popper">
            <SelectItem value="">Not specified</SelectItem>
            <SelectItem value="1">Quintile 1</SelectItem>
            <SelectItem value="2">Quintile 2</SelectItem>
            <SelectItem value="3">Quintile 3</SelectItem>
            <SelectItem value="4">Quintile 4</SelectItem>
            <SelectItem value="5">Quintile 5</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </div>
  );
};

export default UniversitySelector;
