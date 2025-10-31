function Projects() {
  const projects = [
    {
      name: "TechBank Solutions",
      domain: "Banking/Finance",
      dateRange: "May 2024 - Present",
      role: "Data Scientist (AI/ML) at TechBank Solutions",
      description: "Secure microservices-based banking platform with real-time transaction processing, fraud detection, and customer portals. Enhanced transaction speed by 75% while ensuring PCI DSS compliance.",
      keyFeatures: [
        "PCI DSS compliance",
        "Real-time fraud detection",
        "Microservices architecture",
        "24x7 fraud monitoring",
        "Reduced CPU utilization from 80% to 45%"
      ],
      technologies: ["Java", "Spring Boot", "Microservices", "ReactJS", "MySQL", "TypeScript", "AWS", "Docker", "Jenkins", "Kafka", "SQL Server"]
    },
    {
      name: "InsureFlow Analytics",
      domain: "Insurance",
      dateRange: "May 2022 - Jul 2023",
      role: "Software Developer (Java Full Stack) at InsureFlow Analytics",
      description: "Comprehensive insurance platform with automated workflows, self-service policy management, and claims tracking. Achieved 99.95% uptime and reduced policy issuance time by 40%.",
      keyFeatures: [
        "40% faster policy issuance",
        "99.95% system uptime",
        "Automated claims tracking",
        "Kubernetes scaling",
        "HIPAA & SOC compliance"
      ],
      technologies: ["Java", "Spring Boot", "Microservices", "Angular", "TypeScript", "Azure", "Kubernetes", "TerraForm", "Jenkins", "Kafka"]
    },
    {
      name: "HealthTech Platform",
      domain: "Healthcare",
      dateRange: "Jan 2021 - April 2022",
      role: "Java Software Engineer at HealthTech Platform",
      description: "HIPAA-compliant healthcare platform with patient data management, appointment scheduling, and real-time lab results. Reduced patient onboarding time by 35%.",
      keyFeatures: [
        "35x faster patient onboarding",
        "HIPAA compliance",
        "Real-time lab results",
        "25% improved responsiveness",
        "Cloud-first security"
      ],
      technologies: ["Java", "Spring Boot", "React", "JavaScript (ES6)", "MongoDB", "Kubernetes", "Azure", "GitHub 2.0"]
    }
  ];

  return (
    <section id="projects" className="px-8 py-20 max-w-7xl mx-auto scroll-mt-24">
      {/* Section Header */}
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          Enterprise <span className="text-[#4fc3f7]">Projects</span>
        </h2>
        <p className="text-gray-300 text-lg max-w-4xl mx-auto leading-relaxed">
          Real-world enterprise applications built for Fortune 500 companies across banking, 
          healthcare, and insurance domains.
        </p>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <div 
            key={index}
            className="bg-gray-800/30 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50 hover:border-[#4fc3f7]/30 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-lg hover:shadow-[#4fc3f7]/10 h-full flex flex-col"
          >
            {/* Project Header */}
            <div className="mb-4">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-8 h-8 bg-[#4fc3f7]/20 rounded-full flex items-center justify-center">
                  <div className="w-4 h-4 bg-[#4fc3f7] rounded-full"></div>
                </div>
                <h3 className="text-xl font-bold text-white">
                  {project.name}
                </h3>
              </div>
              
              <div className="flex flex-wrap items-center gap-2 mb-3">
                <span className="px-3 py-1 bg-transparent border border-[#4fc3f7] text-[#4fc3f7] text-xs rounded-full">
                  {project.domain}
                </span>
                <span className="px-3 py-1 bg-gray-700/60 text-gray-300 text-xs rounded-full">
                  {project.dateRange}
                </span>
              </div>
              
              <p className="text-white text-sm mb-4">
                {project.role}
              </p>
              
              <p className="text-gray-300 text-sm leading-relaxed mb-6">
                {project.description}
              </p>
            </div>

            {/* Key Features */}
            <div className="mb-6">
              <h4 className="text-white font-bold text-sm mb-3">Key Features:</h4>
              <ul className="space-y-1">
                {project.keyFeatures.map((feature, featureIndex) => (
                  <li key={featureIndex} className="text-white text-sm flex items-start">
                    <span className="text-[#4fc3f7] mr-2">•</span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            {/* Technologies Used */}
            <div className="mt-auto">
              <h4 className="text-white font-bold text-sm mb-3">Technologies Used:</h4>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, techIndex) => (
                  <span 
                    key={techIndex}
                    className="px-2 py-1 bg-gray-700/60 text-gray-300 text-xs rounded border border-gray-600/50 hover:bg-gray-600/60 hover:text-white transition-colors duration-200"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;