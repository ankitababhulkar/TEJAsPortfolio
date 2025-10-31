import { useScrollAnimation } from '../hooks/useScrollAnimation';

function Skills() {
  const [headerRef, headerVisible] = useScrollAnimation();
  const [gridRef, gridVisible] = useScrollAnimation();
  
  const skillCategories = [
    {
      title: "Core AI/ML",
      skills: ["Machine Learning", "Deep Learning", "MLOps", "Generative AI", "LLMs", "Agentic AI", "PyTorch", "TensorFlow", "Scikit-learn"]
    },
    {
      title: "Frameworks & Tools", 
      skills: ["LangChain", "LangGraph", "Tableau", "Power BI", "Jupyter", "MLflow", "Weights & Biases", "Hugging Face", "OpenAI API"]
    },
    {
      title: "Programming & Databases",
      skills: ["Python", "SQL", "Pandas", "NumPy", "Matplotlib", "Seaborn", "PostgreSQL", "MongoDB", "Vector Databases", "Data Preprocessing"]
    },
    {
      title: "Cloud & Deployment",
      skills: ["AWS", "Azure", "GCP", "Docker", "Kubernetes", "Azure ML", "AWS SageMaker", "Model Deployment", "API Development"]
    },
    {
      title: "Advanced AI Topics",
      skills: ["Graph RAG", "Chatbot Design", "AI Agents", "Cursor AI", "POC Development", "Multi-Agent Systems", "Context Retention", "Prompt Engineering"]
    },
    {
      title: "Data Visualization",
      skills: ["Tableau", "Power BI", "Plotly", "D3.js", "Dashboard Design", "Interactive Visualizations", "Business Intelligence", "Data Storytelling"]
    },
    {
      title: "AI Workflow Automation",
      skills: ["Pipeline Orchestration", "Model Monitoring", "A/B Testing", "Feature Engineering", "Data Quality", "Automated Retraining", "CI/CD for ML"]
    },
    {
      title: "Research & Development",
      skills: ["Research Papers", "Experimental Design", "Statistical Analysis", "Hypothesis Testing", "Model Evaluation", "Performance Metrics", "Innovation"]
    }
  ];

  return (
    <section id="skills" className="px-8 py-20 max-w-7xl mx-auto scroll-mt-24">
      {/* Section Header */}
      <div 
        ref={headerRef}
        className={`text-center mb-16 ${headerVisible ? 'animate-fade-in-up' : 'animate-on-scroll'}`}
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          Technical <span className="text-[#4fc3f7]">Skills</span>
        </h2>
        <p className="text-gray-300 text-lg max-w-3xl mx-auto leading-relaxed">
          A comprehensive toolkit for building modern, scalable applications across the full 
          technology stack.
        </p>
      </div>

      {/* Skills Grid */}
      <div 
        ref={gridRef}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
      >
        {skillCategories.map((category, index) => (
          <div 
            key={index}
            className={`bg-gray-800/30 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50 hover:border-[#4fc3f7]/30 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-lg hover:shadow-[#4fc3f7]/10 ${
              gridVisible ? `animate-scale-in animate-delay-${Math.min(index * 100, 400)}` : 'animate-on-scroll'
            }`}
          >
            {/* Title */}
            <div className="mb-4">
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