import { useScrollAnimation } from '../hooks/useScrollAnimation';

function About() {
  const [headerRef, headerVisible] = useScrollAnimation();
  const [leftRef, leftVisible] = useScrollAnimation();
  const [rightRef, rightVisible] = useScrollAnimation();

  return (
    <section id="about" className="w-full px-4 sm:px-6 lg:px-8 py-20 scroll-mt-24">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div 
          ref={headerRef}
          className={`text-center mb-16 ${headerVisible ? 'animate-fade-in-up' : 'animate-on-scroll'}`}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            About <span className="text-[#4fc3f7]">Me</span>
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto leading-relaxed">
            More than just code and debugging - it's about responsibility, innovation, and making 
            a real difference.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Content - Description */}
          <div 
            ref={leftRef}
            className={`space-y-6 ${leftVisible ? 'animate-fade-in-left' : 'animate-on-scroll'}`}
          >
            <p className="text-gray-300 leading-relaxed text-base">
              I'm a passionate Data Scientist and AI/ML Engineer focused on building data-driven 
              solutions and intelligent automation systems. With expertise across MLOps, Generative AI, 
              and Agentic AI, I design and deploy scalable AI models that transform business processes 
              into actionable insights.
            </p>
            
            <p className="text-gray-300 leading-relaxed text-base">
              I'm experienced in Python, SQL, PyTorch, and LangChain, integrating AI tools and large 
              language models (LLMs) with data visualization and cloud platforms like Azure, AWS, and GCP. 
              My work spans from building intelligent chatbots to developing multi-agent AI systems that 
              collaborate seamlessly.
            </p>
            
            <p className="text-gray-300 leading-relaxed text-base">
              I strongly believe in the power of data — "In Data I Trust." This philosophy drives me to 
              create AI solutions that not only process information but truly understand context and deliver 
              meaningful results. Today, I focus on advancing the field of Agentic AI and building systems 
              that can think, learn, and adapt autonomously.
            </p>

            {/* Tech Stack Boxes */}
            <div className="grid grid-cols-2 gap-4 pt-6">
              <div className="bg-gray-800/30 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50 text-center">
                <h3 className="text-2xl font-bold text-[#4fc3f7] mb-2">AI/ML</h3>
                <p className="text-sm text-gray-400">Core Expertise</p>
              </div>
              <div className="bg-gray-800/30 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50 text-center">
                <h3 className="text-2xl font-bold text-[#4fc3f7] mb-2">Cloud</h3>
                <p className="text-sm text-gray-400">AWS, Azure, GCP</p>
              </div>
              <div className="bg-gray-800/30 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50 text-center">
                <h3 className="text-2xl font-bold text-[#4fc3f7] mb-2">Generative AI</h3>
                <p className="text-sm text-gray-400">LLMs & Agents</p>
              </div>
              <div className="bg-gray-800/30 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50 text-center">
                <h3 className="text-2xl font-bold text-[#4fc3f7] mb-2">MLOps</h3>
                <p className="text-sm text-gray-400">Deployment</p>
              </div>
            </div>
          </div>

          {/* Right Content - Core Values Box */}
          <div 
            ref={rightRef}
            className={`bg-gray-800/30 backdrop-blur-sm rounded-xl p-8 border border-gray-700/50 ${rightVisible ? 'animate-fade-in-right' : 'animate-on-scroll'}`}
          >
            <h3 className="text-2xl font-bold text-white mb-8 text-center">Core Values & Principles</h3>
            
            <div className="space-y-6">
              <div className="flex gap-4 items-start">
                <div className="w-12 h-12 bg-[#4fc3f7]/20 rounded-full flex items-center justify-center shrink-0 mt-1">
                  <svg className="w-6 h-6 text-[#4fc3f7]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-white mb-2">Data-Driven Solutions</h4>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    Every AI model I build starts with understanding the data story 
                    and transforming insights into actionable business value.
                  </p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="w-12 h-12 bg-[#4fc3f7]/20 rounded-full flex items-center justify-center shrink-0 mt-1">
                  <svg className="w-6 h-6 text-[#4fc3f7]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-white mb-2">AI Innovation</h4>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    Pioneering Agentic AI systems and multi-agent frameworks that 
                    collaborate intelligently to solve complex problems.
                  </p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="w-12 h-12 bg-[#4fc3f7]/20 rounded-full flex items-center justify-center shrink-0 mt-1">
                  <svg className="w-6 h-6 text-[#4fc3f7]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-white mb-2">MLOps Excellence</h4>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    Designing scalable ML pipelines and deployment workflows that 
                    ensure models perform reliably in production environments.
                  </p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="w-12 h-12 bg-[#4fc3f7]/20 rounded-full flex items-center justify-center shrink-0 mt-1">
                  <svg className="w-6 h-6 text-[#4fc3f7]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-white mb-2">Continuous Learning</h4>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    Constantly exploring cutting-edge AI research and implementing 
                    the latest techniques in LLMs, Graph RAG, and prompt engineering.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;