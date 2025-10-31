import { useScrollAnimation } from './hooks/useScrollAnimation';

function Projects() {
  const [headerRef, headerVisible] = useScrollAnimation();
  const [gridRef, gridVisible] = useScrollAnimation();
  
  const projects = [
    {
      name: "POC on MCP (Multi-Cloud Pipeline)",
      domain: "AI/ML Infrastructure",
      dateRange: "2024 - Present",
      role: "Data Scientist & AI/ML Engineer",
      description: "Designed a multi-cloud data pipeline using Azure and GCP for AI-driven analytics. Implemented MLOps pipelines and automated deployment workflows for model updates.",
      keyFeatures: [
        "Multi-cloud architecture",
        "MLOps pipeline automation",
        "AI-driven analytics",
        "Automated model deployment",
        "Cross-platform data integration"
      ],
      technologies: ["Python", "Azure", "GCP", "MLOps", "Docker", "Kubernetes", "TensorFlow", "PyTorch", "Apache Airflow", "SQL"]
    },
    {
      name: "Crew AI – Intelligent Agent Collaboration System",
      domain: "Agentic AI",
      dateRange: "2024",
      role: "AI/ML Engineer & Research Developer",
      description: "Built an Agentic AI framework using LangChain and LLMs for multi-agent task coordination. Enhanced task efficiency through adaptive prompt routing and context retention.",
      keyFeatures: [
        "Multi-agent coordination",
        "Adaptive prompt routing",
        "Context retention system",
        "Task efficiency optimization",
        "LLM integration framework"
      ],
      technologies: ["Python", "LangChain", "LangGraph", "OpenAI API", "Hugging Face", "FastAPI", "Redis", "PostgreSQL", "Docker"]
    },
    {
      name: "Cursor AI – Conversational AI Assistant",
      domain: "Conversational AI",
      dateRange: "2024",
      role: "AI Engineer & Full Stack Developer",
      description: "Developed an AI-powered chatbot integrating Graph RAG and LangGraph for contextual memory. Deployed on cloud infrastructure with real-time response optimization.",
      keyFeatures: [
        "Graph RAG implementation",
        "Contextual memory system",
        "Real-time response optimization",
        "Cloud-native deployment",
        "Advanced conversation flow"
      ],
      technologies: ["Python", "LangGraph", "Graph RAG", "Vector Databases", "AWS", "FastAPI", "React", "WebSocket", "Neo4j"]
    }
  ];

  return (
    <section id="projects" className="px-8 py-20 max-w-7xl mx-auto scroll-mt-24">
      {/* Section Header */}
      <div 
        ref={headerRef}
        className={`text-center mb-16 ${headerVisible ? 'animate-fade-in-up' : 'animate-on-scroll'}`}
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          AI/ML <span className="text-[#4fc3f7]">Projects</span>
        </h2>
        <p className="text-gray-300 text-lg max-w-4xl mx-auto leading-relaxed">
          Cutting-edge AI and machine learning projects focused on intelligent automation, 
          multi-agent systems, and advanced data analytics solutions.
        </p>
      </div>

      {/* Projects Grid */}
      <div 
        ref={gridRef}
        className="grid grid-cols-1 lg:grid-cols-3 gap-8"
      >
        {projects.map((project, index) => (
          <div 
            key={index}
            className={`bg-gray-800/30 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50 hover:border-[#4fc3f7]/30 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-lg hover:shadow-[#4fc3f7]/10 h-full flex flex-col ${
              gridVisible ? `animate-fade-in-up animate-delay-${Math.min(index * 200, 400)}` : 'animate-on-scroll'
            }`}
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