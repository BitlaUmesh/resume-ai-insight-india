
import { FileText } from "lucide-react";

export function Header() {
  return (
    <header className="w-full py-4 px-6 flex items-center justify-between border-b bg-white">
      <div className="flex items-center gap-2">
        <FileText className="h-6 w-6 text-resume-blue" />
        <h1 className="text-xl font-bold">ResumeInsight AI</h1>
      </div>
      <nav>
        <ul className="flex gap-6">
          <li><a href="/" className="text-gray-600 hover:text-resume-blue transition-colors">Home</a></li>
          <li><a href="#features" className="text-gray-600 hover:text-resume-blue transition-colors">Features</a></li>
          <li><a href="#how-it-works" className="text-gray-600 hover:text-resume-blue transition-colors">How it Works</a></li>
        </ul>
      </nav>
    </header>
  );
}
