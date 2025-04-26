
import { useState } from "react";
import { Upload } from "lucide-react";
import { Button } from "@/components/ui/button";
import { toast } from "@/components/ui/sonner";

interface FileUploaderProps {
  onFileSelect: (file: File) => void;
}

export function FileUploader({ onFileSelect }: FileUploaderProps) {
  const [dragActive, setDragActive] = useState(false);
  
  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };
  
  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleFile(e.dataTransfer.files[0]);
    }
  };
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    if (e.target.files && e.target.files[0]) {
      handleFile(e.target.files[0]);
    }
  };
  
  const handleFile = (file: File) => {
    // Check file type
    const validTypes = ['application/pdf', 'image/jpeg', 'image/jpg', 'image/png', 'application/msword', 
                         'application/vnd.openxmlformats-officedocument.wordprocessingml.document'];
    
    if (!validTypes.includes(file.type)) {
      toast.error("Invalid file type. Please upload PDF, JPEG, PNG, or Word document.");
      return;
    }
    
    // Check file size (10MB limit)
    if (file.size > 10 * 1024 * 1024) {
      toast.error("File is too large. Maximum size is 10MB.");
      return;
    }
    
    onFileSelect(file);
    toast.success("Resume uploaded successfully!");
  };
  
  return (
    <div 
      className={`w-full max-w-md mx-auto mt-8 border-2 border-dashed rounded-xl p-8 text-center
                ${dragActive ? 'border-resume-blue bg-blue-50' : 'border-gray-300'}`}
      onDragEnter={handleDrag}
      onDragOver={handleDrag}
      onDragLeave={handleDrag}
      onDrop={handleDrop}
    >
      <input 
        type="file" 
        id="file-upload" 
        className="hidden" 
        onChange={handleChange}
        accept=".pdf,.doc,.docx,.jpg,.jpeg,.png" 
      />
      <Upload className="h-12 w-12 mx-auto mb-4 text-gray-400" />
      <h3 className="text-xl font-medium mb-2">Upload Your Resume</h3>
      <p className="text-gray-500 mb-4">
        Drag & drop your resume file or click to browse
      </p>
      <p className="text-sm text-gray-400 mb-4">
        Supports PDF, Word (.doc, .docx), and Image files (.jpg, .jpeg, .png)
      </p>
      <label 
        htmlFor="file-upload"
      >
        <Button
          variant="default"
          className="bg-resume-blue hover:bg-resume-lightBlue cursor-pointer"
        >
          Select File
        </Button>
      </label>
    </div>
  );
}
