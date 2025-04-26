
import { FileText } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-gray-50 py-12 border-t">
      <div className="container px-4">
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start mb-8">
          <div className="mb-6 md:mb-0">
            <div className="flex items-center gap-2 mb-3">
              <FileText className="h-6 w-6 text-resume-blue" />
              <h3 className="text-xl font-bold">ResumeInsight AI</h3>
            </div>
            <p className="text-gray-500 max-w-xs">
              Transforming your resume into actionable career insights with advanced AI
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
            <div>
              <h4 className="font-semibold mb-3">Product</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-500 hover:text-resume-blue">Features</a></li>
                <li><a href="#" className="text-gray-500 hover:text-resume-blue">Pricing</a></li>
                <li><a href="#" className="text-gray-500 hover:text-resume-blue">FAQ</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-3">Company</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-500 hover:text-resume-blue">About</a></li>
                <li><a href="#" className="text-gray-500 hover:text-resume-blue">Blog</a></li>
                <li><a href="#" className="text-gray-500 hover:text-resume-blue">Careers</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-3">Legal</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-500 hover:text-resume-blue">Privacy</a></li>
                <li><a href="#" className="text-gray-500 hover:text-resume-blue">Terms</a></li>
                <li><a href="#" className="text-gray-500 hover:text-resume-blue">Security</a></li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="border-t pt-8 text-center">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} ResumeInsight AI. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
