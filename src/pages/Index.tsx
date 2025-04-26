
import { useState } from "react";
import { Header } from "@/components/Header";
import { FileUploader } from "@/components/FileUploader";
import { AnalysisResult, AnalysisResultProps } from "@/components/AnalysisResult";
import { Features } from "@/components/Features";
import { HowItWorks } from "@/components/HowItWorks";
import { Footer } from "@/components/Footer";
import { analyzeResume, ResumeAnalysisResult } from "@/services/resumeAnalysis";
import { Button } from "@/components/ui/button";
import { Toaster } from "@/components/ui/sonner";

const Index = () => {
  const [file, setFile] = useState<File | null>(null);
  const [analyzing, setAnalyzing] = useState(false);
  const [result, setResult] = useState<ResumeAnalysisResult | null>(null);
  
  const handleFileSelect = (selectedFile: File) => {
    setFile(selectedFile);
    processFile(selectedFile);
  };
  
  const processFile = async (selectedFile: File) => {
    setAnalyzing(true);
    try {
      const analysisResult = await analyzeResume(selectedFile);
      setResult(analysisResult);
    } catch (error) {
      console.error("Error analyzing resume:", error);
    } finally {
      setAnalyzing(false);
    }
  };
  
  const handleReset = () => {
    setFile(null);
    setResult(null);
  };
  
  return (
    <div className="flex flex-col min-h-screen">
      <Toaster position="top-center" />
      <Header />
      
      {!file ? (
        <main className="flex-grow">
          {/* Hero Section */}
          <section className="py-16 md:py-24 bg-gradient-to-br from-blue-50 to-indigo-50">
            <div className="container px-4 text-center">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 gradient-text">
                Analyze Your Resume with AI
              </h1>
              <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
                Get personalized insights about your career potential, salary expectations in INR, 
                and matching job opportunities in seconds.
              </p>
              <FileUploader onFileSelect={handleFileSelect} />
            </div>
          </section>
          
          <Features />
          <HowItWorks />
        </main>
      ) : (
        <main className="flex-grow bg-gray-50 py-8">
          <div className="container">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-semibold">Resume Analysis</h2>
              <Button variant="ghost" onClick={handleReset}>Analyze Another Resume</Button>
            </div>
            <AnalysisResult result={result} loading={analyzing} />
          </div>
        </main>
      )}
      
      <Footer />
    </div>
  );
};

export default Index;
