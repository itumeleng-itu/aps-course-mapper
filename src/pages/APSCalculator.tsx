
import React, { useState } from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { calculateAps, getEligibleCourses, sampleCourseRequirements } from "@/utils/aps/calculator";
import { SubjectMark, EligibilityResult } from "@/utils/aps/types";
import { Calculator } from "lucide-react";
import UniversitySelector from "@/components/aps/UniversitySelector";
import SubjectsInput from "@/components/aps/SubjectsInput";
import ResultsDisplay from "@/components/aps/ResultsDisplay";

const APSCalculator = () => {
  const { toast } = useToast();
  const [universitySystem, setUniversitySystem] = useState<'UJ' | 'UP' | 'WITS'>('UJ');
  const [schoolQuintile, setSchoolQuintile] = useState<number | undefined>(undefined);
  const [subjects, setSubjects] = useState<SubjectMark[]>([
    { name: "Mathematics", percentage: 70 },
    { name: "English Home Language", percentage: 65 },
    { name: "Physical Sciences", percentage: 60 },
    { name: "Life Sciences", percentage: 65 },
    { name: "Geography", percentage: 75 },
    { name: "History", percentage: 70 },
  ]);
  const [results, setResults] = useState<EligibilityResult[]>([]);
  const [apsScore, setApsScore] = useState<number | null>(null);

  const addSubject = () => {
    setSubjects([...subjects, { name: "", percentage: 0 }]);
  };

  const removeSubject = (index: number) => {
    const newSubjects = [...subjects];
    newSubjects.splice(index, 1);
    setSubjects(newSubjects);
  };

  const updateSubject = (index: number, field: keyof SubjectMark, value: string | number) => {
    const newSubjects = [...subjects];
    if (field === 'percentage') {
      const numValue = Number(value);
      newSubjects[index][field] = Math.min(100, Math.max(0, numValue));
    } else {
      newSubjects[index][field] = value as never;
    }
    setSubjects(newSubjects);
  };

  const calculateEligibility = () => {
    const invalidSubjects = subjects.filter(
      (subject) => !subject.name.trim() || subject.percentage < 0 || subject.percentage > 100
    );
    
    if (invalidSubjects.length > 0) {
      toast({
        variant: "destructive",
        title: "Invalid subjects",
        description: "Please ensure all subjects have names and valid percentages (0-100)",
      });
      return;
    }

    const validSubjectsCount = subjects.filter(
      subject => !subject.name.includes("Life Orientation")
    ).length;
    
    if (validSubjectsCount < 6) {
      toast({
        variant: "destructive",
        title: "Insufficient subjects",
        description: "Please provide at least 6 subjects excluding Life Orientation",
      });
      return;
    }

    const studentMarks = {
      subjects,
      schoolQuintile
    };

    const aps = calculateAps(studentMarks, universitySystem);
    setApsScore(aps);
    
    const eligibility = getEligibleCourses(studentMarks, sampleCourseRequirements, universitySystem);
    setResults(eligibility);

    toast({
      title: "Calculation complete",
      description: `Your APS score: ${aps}`,
    });
  };

  return (
    <div className="container py-8">
      <h1 className="text-2xl font-bold mb-6">South African University APS Calculator</h1>
      
      <div className="grid gap-6 md:grid-cols-12">
        <div className="md:col-span-5">
          <Card>
            <CardHeader>
              <CardTitle>Enter Your Subjects</CardTitle>
              <CardDescription>
                Add your matric subjects and percentage marks to calculate your APS score
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <UniversitySelector
                universitySystem={universitySystem}
                schoolQuintile={schoolQuintile}
                onUniversityChange={setUniversitySystem}
                onQuintileChange={setSchoolQuintile}
              />
              
              <SubjectsInput
                subjects={subjects}
                onAddSubject={addSubject}
                onUpdateSubject={updateSubject}
                onRemoveSubject={removeSubject}
              />
            </CardContent>
            <CardFooter className="flex justify-end">
              <Button onClick={calculateEligibility} className="flex items-center gap-2">
                <Calculator className="h-4 w-4" />
                Calculate Eligibility
              </Button>
            </CardFooter>
          </Card>
        </div>

        <div className="md:col-span-7">
          <Card className="h-full flex flex-col">
            <CardHeader>
              <div className="flex justify-between items-center">
                <div>
                  <CardTitle>Your Results</CardTitle>
                  <CardDescription>
                    Courses you qualify for based on your APS score and subject requirements
                  </CardDescription>
                </div>
                {apsScore !== null && (
                  <div className="text-center">
                    <div className="text-sm font-medium text-muted-foreground mb-1">Your APS Score</div>
                    <div className="bg-primary text-primary-foreground rounded-full px-3 py-1 text-xl font-bold">
                      {apsScore}
                    </div>
                  </div>
                )}
              </div>
            </CardHeader>
            <CardContent className="flex-grow">
              <ResultsDisplay results={results} apsScore={apsScore} />
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default APSCalculator;
