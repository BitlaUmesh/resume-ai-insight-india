
import { Badge, BarChart, FileText, Search } from "lucide-react";

export function Features() {
  const features = [
    {
      icon: <FileText className="h-6 w-6 text-resume-blue" />,
      title: "Multiple File Formats",
      description: "Upload resumes in PDF, DOC, DOCX, JPG or PNG formats for instant analysis"
    },
    {
      icon: <Search className="h-6 w-6 text-resume-blue" />,
      title: "Deep Resume Parsing",
      description: "Our AI extracts skills, experience, education, and achievements with high accuracy"
    },
    {
      icon: <Badge className="h-6 w-6 text-resume-blue" />,
      title: "Personalized Insights",
      description: "Get tailored salary estimates in INR, job recommendations, and improvement suggestions"
    },
    {
      icon: <BarChart className="h-6 w-6 text-resume-blue" />,
      title: "Industry Matching",
      description: "Find out which companies and industries are the best match for your profile"
    }
  ];

  return (
    <section id="features" className="py-16 bg-gray-50">
      <div className="container px-4">
        <h2 className="text-3xl font-bold text-center mb-12 gradient-text">Powerful Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="bg-blue-50 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                {feature.icon}
              </div>
              <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
