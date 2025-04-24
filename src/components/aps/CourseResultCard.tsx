
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowUp, ArrowDown, HelpCircle } from "lucide-react";
import { EligibilityResult } from "@/utils/aps/types";

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

export default CourseResultCard;
