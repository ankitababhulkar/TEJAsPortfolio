function Education() {
  const educationData = [
    {
      icon: "🎓",
      degree: "Master of Science, Computer Science",
      university: "University of North Texas",
      universityUrl: "#",
      description: "Advanced studies in software engineering, algorithms, and system design.",
      status: "Graduated May 2025"
    },
    {
      icon: "💻",
      degree: "Bachelor of Technology",
      university: "Vidhya Jyothi Institute of Technology",
      universityUrl: "#",
      description: "Foundation in computer science, programming, and engineering principles.",
      status: "Graduated"
    }
  ];

  const certifications = [
    "AWS Certified Developer",
    "GenAI for Software Developers (IBM)",
    "Cisco Network Essentials Badge",
    "ISC2 Candidate",
    "Java Full Stack Developer (Udemy)",
    "Master Kafka in Production (Udemy)",
    "MCP (Anthropic)",
    "Azure Developer",
    "SQL & NoSQL (Oracle)",
    "Spring Boot MVC (Udemy)",
    "Hibernate & JPA (Udemy)",
    "JIRA (Atlassian Senior Specialist)",
    "AWS Cloud Practitioner (Udemy)",
    "GCP Certified (Google)",
    "Python (Google)"
  ];

  return (
    <section id="education" className="px-8 py-20 max-w-7xl mx-auto scroll-mt-24">
      {/* Education Section */}
      <div className="mb-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            Education
          </h2>
        </div>

        {/* Education Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {educationData.map((edu, index) => (
            <div 
              key={index}
              className="bg-gray-800/40 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50 hover:border-[#4fc3f7]/30 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-lg hover:shadow-[#4fc3f7]/10"
            >
              {/* Icon and Degree */}
              <div className="flex items-start gap-4 mb-4">
                <span className="text-2xl mt-1">{edu.icon}</span>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-white mb-2">
                    {edu.degree}
                  </h3>
                  
                  {/* University Name */}
                  <a 
                    href={edu.universityUrl}
                    className="text-[#4fc3f7] font-semibold hover:text-[#29b6f6] transition-colors duration-200 mb-3 inline-block"
                  >
                    {edu.university}
                  </a>
                  
                  {/* Description */}
                  <p className="text-gray-300 text-sm leading-relaxed mb-4">
                    {edu.description}
                  </p>
                  
                  {/* Status Badge */}
                  <span className="inline-block px-3 py-1 bg-gray-700/60 text-gray-300 text-sm rounded-full border border-gray-600/50">
                    {edu.status}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Certifications Section */}
      <div>
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            Certifications & Achievements
          </h2>
        </div>

        {/* Certifications Grid */}
        <div className="flex flex-wrap justify-center gap-3 max-w-6xl mx-auto">
          {certifications.map((cert, index) => (
            <span 
              key={index}
              className="px-4 py-2 bg-gray-800/40 backdrop-blur-sm text-gray-300 text-sm rounded-full border border-[#4fc3f7]/30 hover:bg-[#4fc3f7]/10 hover:text-[#4fc3f7] hover:border-[#4fc3f7]/50 hover:shadow-md hover:shadow-[#4fc3f7]/20 transition-all duration-300 cursor-pointer"
            >
              {cert}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Education;