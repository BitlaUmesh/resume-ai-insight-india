
import { ResumeAnalysisResult } from "@/services/resumeAnalysis";
import { jsPDF } from "jspdf";

export const generateAnalysisPDF = (result: ResumeAnalysisResult) => {
  const doc = new jsPDF();
  
  // Title
  doc.setFontSize(20);
  doc.text("Resume Analysis Report", 20, 20);
  doc.setFontSize(12);
  
  // Basic Info
  doc.text(`Candidate: ${result.name}`, 20, 40);
  doc.text("Professional Summary:", 20, 55);
  const summaryLines = doc.splitTextToSize(result.summary, 170);
  doc.text(summaryLines, 20, 65);
  
  // Salary Range
  doc.text(`Expected Salary Range: ${formatCurrency(result.salaryEstimate.min)} - ${formatCurrency(result.salaryEstimate.max)}`, 20, 90);
  
  // Skills
  doc.text("Specialized Skills:", 20, 110);
  result.skills.forEach((skill, index) => {
    doc.text(`• ${skill.name} - Proficiency: ${skill.level}%`, 25, 120 + (index * 7));
  });
  
  // Suitable Jobs
  doc.text("Recommended Job Roles:", 20, 180);
  result.suitableJobs.forEach((job, index) => {
    doc.text(`• ${job.title} - Match: ${job.matchPercentage}%`, 25, 190 + (index * 7));
  });
  
  // New Page for Additional Details
  doc.addPage();
  
  // Improvement Areas
  doc.text("Areas for Improvement:", 20, 20);
  result.improvementAreas.forEach((area, index) => {
    const areaLines = doc.splitTextToSize(`• ${area}`, 170);
    doc.text(areaLines, 25, 30 + (index * 15));
  });
  
  // Company Matches
  doc.text("Suitable Companies:", 20, 120);
  result.suitableCompanies.forEach((company, index) => {
    doc.text(`• ${company.name}`, 25, 130 + (index * 15));
    const reasonLines = doc.splitTextToSize(`  ${company.reason}`, 160);
    doc.text(reasonLines, 30, 135 + (index * 15));
  });
  
  // Save the PDF
  doc.save(`${result.name.replace(/\s+/g, '_')}_Resume_Analysis.pdf`);
};

const formatCurrency = (amount: number): string => {
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 0
  }).format(amount);
};
