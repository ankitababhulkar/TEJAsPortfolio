function Skills() {
  const skillCategories = [
    {
      icon: "💻",
      title: "Backend Development",
      skills: ["Java", "Spring Boot", "Spring MVC", "Spring Data JPA", "Hibernate ORM", "RESTful APIs", "Microservices", "NodeJS", "Python", "Django", "Material UI"]
    },
    {
      icon: "🎨",
      title: "Frontend Development", 
      skills: ["ReactJS", "Angular", "TypeScript", "JavaScript ES6+", "HTML5", "CSS3", "Bootstrap", "NextJS", "Redux", "Material UI"]
    },
    {
      icon: "☁️",
      title: "Cloud & DevOps",
      skills: ["AWS (EC2, Lambda, S3, RDS)", "Azure (VMs, Functions)", "GCP", "Docker", "Kubernetes", "Jenkins", "GitHub Actions", "CI/CD Pipelines"]
    },
    {
      icon: "🗄️",
      title: "Databases",
      skills: ["MySQL", "PostgreSQL", "MongoDB", "Oracle", "SQL Server", "Redis", "Database Optimization", "Indexing & Performance"]
    },
    {
      icon: "🏗️",
      title: "Architecture & Design",
      skills: ["System Design", "Microservices Architecture", "Event-Driven Architecture", "API Design", "Design Patterns", "Scalability", "Performance Optimization"]
    },
    {
      icon: "🛠️",
      title: "Tools & Technologies",
      skills: ["IntelliJ IDEA", "Maven", "Gradle", "Postman", "JIRA", "Agile/Scrum", "TDD/BDD"]
    },
    {
      icon: "🔒",
      title: "Security & Testing",
      skills: ["OAuth 2.0", "JWT", "Spring Security", "JUnit", "Mockito", "Jest", "Integration Testing", "Security Best Practices"]
    },
    {
      icon: "🚀",
      title: "Emerging Technologies",
      skills: ["AI/ML Integration", "Apache Kafka", "Event Streaming", "GraphQL", "WebSockets", "Blockchain Basics", "IoT Applications"]
    }
  ];

  return (
    <section id="skills" className="px-8 py-20 max-w-7xl mx-auto scroll-mt-24">
      {/* Section Header */}
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          Technical <span className="text-[#4fc3f7]">Skills</span>
        </h2>
        <p className="text-gray-300 text-lg max-w-3xl mx-auto leading-relaxed">
          A comprehensive toolkit for building modern, scalable applications across the full 
          technology stack.
        </p>
      </div>

      {/* Skills Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {skillCategories.map((category, index) => (
          <div 
            key={index}
            className="bg-gray-800/30 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50 hover:border-[#4fc3f7]/30 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-lg hover:shadow-[#4fc3f7]/10"
          >
            {/* Icon and Title */}
            <div className="flex items-center gap-3 mb-4">
              <span className="text-2xl">{category.icon}</span>
              <h3 className="text-lg font-semibold text-white">{category.title}</h3>
            </div>

            {/* Skills Tags */}
            <div className="flex flex-wrap gap-2">
              {category.skills.map((skill, skillIndex) => (
                <span 
                  key={skillIndex}
                  className="px-3 py-1 bg-gray-700/60 text-gray-300 text-sm rounded-full border border-gray-600/50 hover:bg-gray-600/60 hover:text-white transition-colors duration-200"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;