
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useToast } from "@/components/ui/use-toast";
import { calculateAps, getEligibleCourses, sampleCourseRequirements } from "@/utils/aps/calculator";
import { StudentMarks, SubjectMark, EligibilityResult, SubjectType, classifySubject } from "@/utils/aps/types";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { ScrollArea } from "@/components/ui/scroll-area";
import { southAfricanSubjects } from "@/data/subjects";
import { Info, Plus, Trash2, Check, ArrowUp, ArrowDown, HelpCircle } from "lucide-react";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";

// Flatten the subjects for the dropdown
const flattenSubjects = (subjectsObj: Record<string, string[]>) => {
  let flattened: string[] = [];
  Object.values(subjectsObj).forEach(subjects => {
    flattened = [...flattened, ...subjects];
  });
  return flattened.sort();
};

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

  // Combine all subjects from the data model
  const allSubjects = flattenSubjects(southAfricanSubjects);

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
      // Ensure percentage is between 0-100
      const numValue = Number(value);
      newSubjects[index][field] = Math.min(100, Math.max(0, numValue));
    } else {
      newSubjects[index][field] = value as never;
      // Automatically classify the subject type when name changes
      if (field === 'name') {
        newSubjects[index].type = classifySubject(value as string);
      }
    }
    setSubjects(newSubjects);
  };

  const calculateEligibility = () => {
    // Validate that all subjects have names and valid percentages
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

    // Check if we have at least 6 valid subjects excluding Life Orientation
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

    const studentMarks: StudentMarks = {
      subjects,
      schoolQuintile
    };

    // Calculate APS score
    const aps = calculateAps(studentMarks, universitySystem);
    setApsScore(aps);
    
    // Calculate eligible courses
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
              <div className="grid grid-cols-2 gap-4 mb-4">
                <div>
                  <Label htmlFor="university-system">University System</Label>
                  <Select 
                    value={universitySystem} 
                    onValueChange={(value) => setUniversitySystem(value as 'UJ' | 'UP' | 'WITS')}
                  >
                    <SelectTrigger id="university-system">
                      <SelectValue placeholder="Select university" />
                    </SelectTrigger>
                    <SelectContent position="popper">
                      <SelectItem value="UJ">University of Johannesburg (UJ)</SelectItem>
                      <SelectItem value="UP">University of Pretoria (UP)</SelectItem>
                      <SelectItem value="WITS">University of Witwatersrand (WITS)</SelectItem>
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
                    onValueChange={(value) => setSchoolQuintile(value ? Number(value) : undefined)}
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

              <ScrollArea className="h-[340px] pr-4">
                <div className="space-y-4">
                  {subjects.map((subject, index) => (
                    <div key={index} className="grid grid-cols-[1fr,80px,40px] gap-2 items-end">
                      <div>
                        <Label htmlFor={`subject-name-${index}`}>Subject</Label>
                        <Select
                          value={subject.name}
                          onValueChange={(value) => updateSubject(index, 'name', value)}
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
                          onChange={(e) => updateSubject(index, 'percentage', e.target.value)}
                        />
                      </div>
                      <Button
                        variant="outline"
                        size="icon"
                        onClick={() => removeSubject(index)}
                        className="flex-shrink-0"
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  ))}
                </div>
              </ScrollArea>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button variant="outline" onClick={addSubject} className="flex items-center gap-1">
                <Plus className="h-4 w-4" /> Add Subject
              </Button>
              <Button onClick={calculateEligibility}>Calculate Eligibility</Button>
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
              {results.length === 0 ? (
                <div className="text-center py-8 text-muted-foreground">
                  Submit your subjects to see which courses you qualify for
                </div>
              ) : (
                <Tabs defaultValue="all">
                  <TabsList className="mb-4">
                    <TabsTrigger value="all">All Programs</TabsTrigger>
                    <TabsTrigger value="eligible">Eligible</TabsTrigger>
                    <TabsTrigger value="extended">Extended</TabsTrigger>
                    <TabsTrigger value="ineligible">Ineligible</TabsTrigger>
                  </TabsList>
                  
                  <ScrollArea className="h-[400px] pr-4">
                    <TabsContent value="all" className="m-0 space-y-4">
                      {results.map((result, index) => (
                        <CourseResultCard key={index} result={result} />
                      ))}
                    </TabsContent>
                    
                    <TabsContent value="eligible" className="m-0 space-y-4">
                      {results.filter(r => r.eligible).length > 0 ? 
                        results
                          .filter(r => r.eligible)
                          .map((result, index) => (
                            <CourseResultCard key={index} result={result} />
                          )) : 
                        <div className="text-center py-8 text-muted-foreground">
                          You don't qualify for any standard programs with your current marks
                        </div>
                      }
                    </TabsContent>
                    
                    <TabsContent value="extended" className="m-0 space-y-4">
                      {results.filter(r => r.extendedProgram).length > 0 ? 
                        results
                          .filter(r => r.extendedProgram)
                          .map((result, index) => (
                            <CourseResultCard key={index} result={result} />
                          )) : 
                        <div className="text-center py-8 text-muted-foreground">
                          No extended programs available for your current marks
                        </div>
                      }
                    </TabsContent>

                    <TabsContent value="ineligible" className="m-0 space-y-4">
                      {results.filter(r => !r.eligible && !r.extendedProgram).length > 0 ? 
                        results
                          .filter(r => !r.eligible && !r.extendedProgram)
                          .map((result, index) => (
                            <CourseResultCard key={index} result={result} showSuggestions={true} />
                          )) : 
                        <div className="text-center py-8 text-muted-foreground">
                          All programs are eligible or eligible for extended programs
                        </div>
                      }
                    </TabsContent>
                  </ScrollArea>
                </Tabs>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

interface CourseResultCardProps {
  result: EligibilityResult;
  showSuggestions?: boolean;
}

const CourseResultCard = ({ result, showSuggestions = false }: CourseResultCardProps) => {
  const [showDetails, setShowDetails] = useState(false);
  
  return (
    <Card className={result.eligible ? "border-green-500" : result.extendedProgram ? "border-amber-500" : ""}>
      <CardHeader className="pb-2">
        <div className="flex justify-between items-start">
          <CardTitle className="text-lg">{result.courseName}</CardTitle>
          <div className="flex gap-2">
            {result.eligible && <Badge variant="default" className="bg-green-500">Eligible</Badge>}
            {result.extendedProgram && <Badge variant="outline" className="border-amber-500 text-amber-500">Extended Program</Badge>}
            {!result.eligible && !result.extendedProgram && <Badge variant="destructive">Not Eligible</Badge>}
          </div>
        </div>
        <CardDescription>{result.faculty}</CardDescription>
      </CardHeader>
      
      {(result.missingRequirements.length > 0 || (showSuggestions && result.improvementSuggestions?.length)) && (
        <CardContent className="pb-4">
          <Button 
            variant="ghost" 
            size="sm" 
            onClick={() => setShowDetails(!showDetails)}
            className="mb-2 text-xs p-1 h-auto"
          >
            {showDetails ? <ArrowUp className="h-3 w-3 mr-1" /> : <ArrowDown className="h-3 w-3 mr-1" />}
            {showDetails ? "Hide Details" : "Show Details"}
          </Button>
          
          {showDetails && (
            <div className="space-y-2">
              {result.missingRequirements.length > 0 && (
                <div>
                  <div className="text-sm font-medium text-destructive mb-1">Missing Requirements:</div>
                  <div className="text-sm space-y-1">
                    {result.missingRequirements.map((req, i) => (
                      <div key={i} className="text-muted-foreground flex items-start">
                        <span className="mr-2">•</span>
                        <span>{req}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
              
              {showSuggestions && result.improvementSuggestions?.length > 0 && (
                <div>
                  <div className="text-sm font-medium text-primary mb-1 mt-2 flex items-center">
                    <HelpCircle className="h-4 w-4 mr-1" />
                    Improvement Suggestions:
                  </div>
                  <div className="text-sm space-y-1">
                    {result.improvementSuggestions.map((suggestion, i) => (
                      <div key={i} className="text-primary-foreground bg-primary/10 rounded px-2 py-1 flex items-start">
                        <ArrowUp className="h-3 w-3 mr-1 mt-0.5 text-primary" />
                        <span>{suggestion}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}
        </CardContent>
      )}
    </Card>
  );
};

export default APSCalculator;
