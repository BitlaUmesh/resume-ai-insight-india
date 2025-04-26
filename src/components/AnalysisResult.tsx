import { Award, BadgeCheck, BadgeIndianRupee, Briefcase, Building, Star, TrendingUp, User, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { generateAnalysisPDF, toast } from "@/utils";

export interface AnalysisResultProps {
  result: {
    name: string;
    summary: string;
    salaryEstimate: {
      min: number;
      max: number;
      currency: string;
    };
    suitableJobs: Array<{
      title: string;
      matchPercentage: number;
    }>;
    skills: Array<{
      name: string;
      level: number;
    }>;
    improvementAreas: string[];
    suitableCompanies: Array<{
      name: string;
      reason: string;
    }>;
  } | null;
  loading: boolean;
}

export function AnalysisResult({ result, loading }: AnalysisResultProps) {
  if (loading) {
    return (
      <div className="w-full max-w-4xl mx-auto p-6 animate-pulse">
        <div className="h-12 bg-gray-200 rounded mb-6"></div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="h-48 bg-gray-200 rounded"></div>
          <div className="h-48 bg-gray-200 rounded"></div>
          <div className="h-48 bg-gray-200 rounded"></div>
          <div className="h-48 bg-gray-200 rounded"></div>
        </div>
      </div>
    );
  }
  
  if (!result) return null;
  
  const formatCurrency = (amount: number): string => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0
    }).format(amount);
  };

  const handleDownload = () => {
    if (result) {
      generateAnalysisPDF(result);
      toast.success("Analysis report downloaded successfully!");
    }
  };
  
  return (
    <div className="w-full max-w-4xl mx-auto p-6 animate-fade-in">
      <div className="flex items-center gap-3 mb-8">
        <User className="h-8 w-8 text-resume-blue p-1 bg-blue-50 rounded-full" />
        <h2 className="text-2xl font-bold gradient-text">{result.name}'s Resume Analysis</h2>
      </div>
      
      {/* Summary Card */}
      <Card className="mb-8 border-t-4 border-t-resume-blue hover:shadow-lg transition-all duration-300">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <BadgeCheck className="h-5 w-5 text-resume-blue" />
            Professional Summary
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-gray-700 leading-relaxed">{result.summary}</p>
        </CardContent>
      </Card>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        {/* Salary Estimate */}
        <Card className="hover:shadow-lg transition-all duration-300">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-lg">
              <BadgeIndianRupee className="h-5 w-5 text-resume-blue" />
              Estimated Salary Range
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col items-center">
              <div className="flex items-baseline gap-2">
                <span className="text-3xl font-bold text-resume-blue">{formatCurrency(result.salaryEstimate.min)}</span>
                <span className="mx-2 text-gray-400">—</span>
                <span className="text-3xl font-bold text-resume-blue">{formatCurrency(result.salaryEstimate.max)}</span>
              </div>
              <p className="text-center text-sm text-gray-500 mt-2">Annual salary based on your skills and experience</p>
            </div>
          </CardContent>
        </Card>
        
        {/* Suitable Jobs */}
        <Card className="hover:shadow-lg transition-all duration-300">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-lg">
              <Briefcase className="h-5 w-5 text-resume-blue" />
              Suitable Job Roles
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-3">
              {result.suitableJobs.map((job, index) => (
                <li key={index} className="flex items-center justify-between p-2 hover:bg-gray-50 rounded-lg transition-colors">
                  <span className="font-medium">{job.title}</span>
                  <div className="flex items-center gap-2">
                    <Progress value={job.matchPercentage} className="w-24 h-2" />
                    <span className="text-sm font-medium text-resume-blue">{job.matchPercentage}%</span>
                  </div>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        {/* Skills */}
        <Card className="hover:shadow-lg transition-all duration-300">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-lg">
              <Award className="h-5 w-5 text-resume-blue" />
              Specialized Skills
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-2">
              {result.skills.map((skill, index) => {
                let badgeColor = "bg-gray-100 text-gray-800";
                if (skill.level > 80) badgeColor = "bg-green-100 text-green-800";
                else if (skill.level > 60) badgeColor = "bg-blue-100 text-blue-800";
                
                return (
                  <Badge key={index} className={`${badgeColor} flex items-center gap-1 py-1 px-3 hover:scale-105 transition-transform cursor-default`}>
                    {skill.name}
                    {skill.level >= 80 && <Star className="h-3 w-3" />}
                  </Badge>
                );
              })}
            </div>
          </CardContent>
        </Card>
        
        {/* Improvement Areas */}
        <Card className="hover:shadow-lg transition-all duration-300">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-lg">
              <TrendingUp className="h-5 w-5 text-resume-blue" />
              Areas for Improvement
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              {result.improvementAreas.map((area, index) => (
                <li key={index} className="flex items-center gap-2 p-2 hover:bg-gray-50 rounded-lg transition-colors">
                  <span className="h-1.5 w-1.5 rounded-full bg-resume-accent"></span>
                  {area}
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </div>
      
      {/* Suitable Companies */}
      <Card className="hover:shadow-lg transition-all duration-300">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-lg">
            <Building className="h-5 w-5 text-resume-blue" />
            Recommended Companies
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {result.suitableCompanies.map((company, index) => (
              <div key={index} className="p-4 border rounded-lg hover:shadow-md transition-all">
                <h4 className="font-semibold text-resume-blue">{company.name}</h4>
                <p className="text-sm text-gray-600 mt-1">{company.reason}</p>
              </div>
            ))}
          </div>
        </CardContent>
        <CardFooter className="flex justify-center border-t pt-4">
          <Button 
            variant="outline" 
            className="text-resume-blue border-resume-blue hover:bg-resume-blue/10 transition-colors"
            onClick={handleDownload}
          >
            <FileText className="w-4 h-4 mr-2" />
            Download Full Analysis
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
