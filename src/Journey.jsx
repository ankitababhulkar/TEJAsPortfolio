function Journey() {
  const experiences = [
    {
      title: "Data Scientist & AI/ML Engineer",
      company: "TechCorp Solutions",
      companyUrl: "#",
      description: "AI/ML • Machine Learning • Deep Learning • Python • TensorFlow",
      duration: "Jan 2022 - Present",
      side: "left"
    },
    {
      title: "Software Developer (Python Full Stack)",
      company: "DataFlow Analytics",
      companyUrl: "#",
      description: "Analytics • Django • React • Kubernetes • Microservices",
      duration: "May 2020 - Dec 2021",
      side: "right"
    },
    {
      title: "Junior Software Engineer",
      company: "InnovateTech Group",
      companyUrl: "#",
      description: "Backend • FastAPI • PostgreSQL • Docker • AWS Deployment",
      duration: "Jun 2019 - April 2020",
      side: "left"
    }
  ];

  return (
    <section id="journey" className="px-8 py-20 max-w-6xl mx-auto scroll-mt-24">
      {/* Section Header */}
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-white">
          Professional Journey
        </h2>
      </div>

      {/* Timeline - Desktop */}
      <div className="relative hidden md:block">
        {/* Vertical Line */}
        <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 bg-[#4fc3f7] h-full"></div>

        {/* Timeline Items */}
        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <div key={index} className="relative flex items-center">
              {/* Timeline Dot */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-[#4fc3f7] rounded-full border-4 border-[#0a0f1c] z-10"></div>

              {/* Experience Card */}
              <div className={`w-5/12 ${exp.side === 'left' ? 'pr-8' : 'ml-auto pl-8'}`}>
                <div className="bg-gray-800/40 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50 hover:border-[#4fc3f7]/30 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-lg hover:shadow-[#4fc3f7]/10">
                  {/* Job Title */}
                  <h3 className="text-xl font-bold text-white mb-2">
                    {exp.title}
                  </h3>

                  {/* Company Name */}
                  <a 
                    href={exp.companyUrl}
                    className="text-[#4fc3f7] font-semibold hover:text-[#29b6f6] transition-colors duration-200 mb-3 inline-block"
                  >
                    {exp.company}
                  </a>

                  {/* Description */}
                  <p className="text-gray-300 text-sm leading-relaxed mb-4">
                    {exp.description}
                  </p>

                  {/* Duration */}
                  <p className="text-[#4fc3f7] text-sm font-medium">
                    {exp.duration}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Timeline - Mobile */}
      <div className="relative md:hidden">
        {/* Vertical Line */}
        <div className="absolute left-4 w-0.5 bg-[#4fc3f7] h-full"></div>

        {/* Timeline Items */}
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div key={index} className="relative flex items-start">
              {/* Timeline Dot */}
              <div className="absolute left-4 transform -translate-x-1/2 w-4 h-4 bg-[#4fc3f7] rounded-full border-4 border-[#0a0f1c] z-10 mt-2"></div>

              {/* Experience Card */}
              <div className="ml-12 w-full">
                <div className="bg-gray-800/40 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50 hover:border-[#4fc3f7]/30 transition-all duration-300">
                  {/* Job Title */}
                  <h3 className="text-lg font-bold text-white mb-2">
                    {exp.title}
                  </h3>

                  {/* Company Name */}
                  <a 
                    href={exp.companyUrl}
                    className="text-[#4fc3f7] font-semibold hover:text-[#29b6f6] transition-colors duration-200 mb-3 inline-block"
                  >
                    {exp.company}
                  </a>

                  {/* Description */}
                  <p className="text-gray-300 text-sm leading-relaxed mb-4">
                    {exp.description}
                  </p>

                  {/* Duration */}
                  <p className="text-[#4fc3f7] text-sm font-medium">
                    {exp.duration}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Journey;