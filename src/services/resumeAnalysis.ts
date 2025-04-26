
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
  console.log(`Analyzing resume: ${file.name} (${file.type})`);
  
  await delay(3000);
  
  return {
    name: "Rohit Sharma",
    summary: "Experienced software developer with 5+ years of experience in full-stack development, specializing in React, Node.js, and cloud technologies. Strong background in building scalable web applications and leading development teams. Proven track record of delivering high-quality solutions and mentoring junior developers.",
    salaryEstimate: {
      min: 1500000,
      max: 2200000,
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
      },
      {
        title: "Technical Architect",
        matchPercentage: 70
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
      },
      {
        name: "Kubernetes",
        level: 60
      },
      {
        name: "GraphQL",
        level: 55
      }
    ],
    improvementAreas: [
      "Add more specific metrics and achievements to quantify impact",
      "Expand on leadership experience and team management",
      "Consider adding certifications in cloud technologies",
      "Include more details about CI/CD and DevOps practices",
      "Highlight experience with agile methodologies",
      "Add examples of complex problem-solving scenarios"
    ],
    suitableCompanies: [
      {
        name: "Infosys",
        reason: "Strong match for your technical skills and experience level. Their digital transformation initiatives align perfectly with your expertise."
      },
      {
        name: "TCS",
        reason: "Great fit for your full-stack development background and cloud technology experience."
      },
      {
        name: "Wipro",
        reason: "Their digital transformation initiatives and cloud-first approach align well with your skills."
      },
      {
        name: "Tech Mahindra",
        reason: "Looking for experienced React developers with cloud expertise for their product teams."
      },
      {
        name: "HCL Technologies",
        reason: "Your full-stack and cloud experience matches their digital solutions division requirements."
      }
    ]
  };
};
