
// This is a mock service that simulates resume analysis
// In a real app, this would connect to an AI backend service

export interface ResumeAnalysisResult {
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
}

// Simulated delay to mimic API call
const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

export const analyzeResume = async (file: File): Promise<ResumeAnalysisResult> => {
  // In a real app, you would:
  // 1. Upload the file to your server
  // 2. Parse it with an AI service
  // 3. Return the results
  
  console.log(`Analyzing resume: ${file.name} (${file.type})`);
  
  // Simulate API delay
  await delay(3000);
  
  // Generate a sample result
  // In a real app, this would come from your AI service
  return {
    name: "Rohit Sharma",
    summary: "Experienced software developer with 5+ years of experience in full-stack development, specializing in React, Node.js, and cloud technologies. Strong background in building scalable web applications and leading development teams.",
    salaryEstimate: {
      min: 1200000, // ₹12 Lakhs
      max: 1800000, // ₹18 Lakhs
      currency: "INR"
    },
    suitableJobs: [
      {
        title: "Senior Software Engineer",
        matchPercentage: 92
      },
      {
        title: "Frontend Team Lead",
        matchPercentage: 85
      },
      {
        title: "Full Stack Developer",
        matchPercentage: 78
      }
    ],
    skills: [
      {
        name: "React.js",
        level: 90
      },
      {
        name: "Node.js",
        level: 85
      },
      {
        name: "TypeScript",
        level: 82
      },
      {
        name: "AWS",
        level: 75
      },
      {
        name: "MongoDB",
        level: 70
      },
      {
        name: "Docker",
        level: 65
      }
    ],
    improvementAreas: [
      "Add more specific metrics and achievements to quantify impact",
      "Expand on leadership experience and team management",
      "Consider adding certifications in cloud technologies",
      "Include more details about CI/CD and DevOps practices"
    ],
    suitableCompanies: [
      {
        name: "Infosys",
        reason: "Strong match for your technical skills and experience level"
      },
      {
        name: "TCS",
        reason: "Good fit for your full-stack development background"
      },
      {
        name: "Wipro",
        reason: "Their digital transformation initiatives align with your skills"
      },
      {
        name: "Tech Mahindra",
        reason: "Looking for experienced React developers for their product teams"
      }
    ]
  };
};
