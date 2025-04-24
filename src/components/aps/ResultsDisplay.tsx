
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ScrollArea } from "@/components/ui/scroll-area";
import { EligibilityResult } from "@/utils/aps/types";
import CourseResultCard from "./CourseResultCard";

interface ResultsDisplayProps {
  results: EligibilityResult[];
  apsScore: number | null;
}

const ResultsDisplay = ({ results, apsScore }: ResultsDisplayProps) => {
  if (results.length === 0) {
    return (
      <div className="text-center py-8 text-muted-foreground">
        Submit your subjects to see which courses you qualify for
      </div>
    );
  }

  return (
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
  );
};

export default ResultsDisplay;
