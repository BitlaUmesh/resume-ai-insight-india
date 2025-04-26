
export function HowItWorks() {
  const steps = [
    {
      number: "01",
      title: "Upload Your Resume",
      description: "Upload your resume in PDF, Word, or image format"
    },
    {
      number: "02",
      title: "AI Analysis",
      description: "Our AI analyzes your resume and extracts key information"
    },
    {
      number: "03",
      title: "Get Insights",
      description: "Review detailed insights about your skills, salary potential, and more"
    },
    {
      number: "04",
      title: "Improve & Apply",
      description: "Use our suggestions to improve your resume and apply to recommended companies"
    }
  ];

  return (
    <section id="how-it-works" className="py-16">
      <div className="container px-4">
        <h2 className="text-3xl font-bold text-center mb-12 gradient-text">How It Works</h2>
        <div className="flex flex-col md:flex-row gap-8">
          {steps.map((step, index) => (
            <div key={index} className="flex-1 relative">
              <div className="h-full bg-white border border-gray-100 rounded-xl p-6 hover:shadow-md transition-shadow">
                <span className="text-4xl font-bold text-gray-100">{step.number}</span>
                <h3 className="text-xl font-semibold mt-2 mb-3">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gray-200"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
