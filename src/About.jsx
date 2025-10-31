function About() {
  return (
    <section id="about" className="px-8 py-20 max-w-7xl mx-auto scroll-mt-24">
      {/* Section Header */}
      <div className="text-center mb-20">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          About <span className="text-[#4fc3f7]">Me</span>
        </h2>
        <p className="text-gray-300 text-lg max-w-2xl mx-auto leading-relaxed">
          More than just code and debugging - it's about responsibility, innovation, and making 
          a real difference.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
        {/* Left Content */}
        <div className="space-y-8">
          <div className="space-y-6">
            <p className="text-gray-300 leading-relaxed text-base">
              I fell in love with Java because it gave me the power to build secure, scalable 
              systems through its simplicity, portability, and strong ecosystem. But more 
              importantly, it allowed me to solve real-time customer problems that make a 
              meaningful impact.
            </p>
            
            <p className="text-gray-300 leading-relaxed text-base">
              Early in my career, I became fascinated by how technology connects every part of 
              business - whether in banking, healthcare, or insurance. I realized that behind 
              every process, from transactions to patient care, there's a flow of data waiting to 
              be optimized.
            </p>
            
            <p className="text-gray-300 leading-relaxed text-base">
              This insight drove me to master Java Full Stack development, cloud-native 
              architectures, and microservices, where I could transform complex workflows into 
              scalable, real-world solutions. Today, I focus on building enterprise-grade systems 
              that enable organizations to innovate faster and make smarter, data-driven 
              decisions.
            </p>
          </div>

          {/* Tech Stack Grid */}
          <div className="grid grid-cols-2 gap-6 pt-8">
            <div className="text-center">
              <h3 className="text-3xl font-bold text-[#4fc3f7] mb-2">Java</h3>
              <p className="text-sm text-gray-400">Core Expertise</p>
            </div>
            <div className="text-center">
              <h3 className="text-3xl font-bold text-[#4fc3f7] mb-2">Cloud</h3>
              <p className="text-sm text-gray-400">AWS, Azure, GCP</p>
            </div>
            <div className="text-center">
              <h3 className="text-3xl font-bold text-[#4fc3f7] mb-2">Full Stack</h3>
              <p className="text-sm text-gray-400">End-to-End</p>
            </div>
            <div className="text-center">
              <h3 className="text-3xl font-bold text-[#4fc3f7] mb-2">Microservices</h3>
              <p className="text-sm text-gray-400">Architecture</p>
            </div>
          </div>
        </div>

        {/* Right Content - Core Values */}
        <div className="space-y-8">
          <div className="text-center mb-10">
            <h3 className="text-2xl font-bold text-white mb-4">Core Values & Principles</h3>
          </div>
          
          <div className="space-y-6">
            <div className="flex gap-4 items-start">
              <div className="w-12 h-12 bg-[#4fc3f7]/20 rounded-full flex items-center justify-center shrink-0 mt-1">
                <div className="w-6 h-6 bg-[#4fc3f7] rounded-full"></div>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-white mb-3">Customer Obsession</h4>
                <p className="text-gray-300 text-sm leading-relaxed">
                  Every solution I build starts with understanding the customer's real 
                  needs and pain points.
                </p>
              </div>
            </div>

            <div className="flex gap-4 items-start">
              <div className="w-12 h-12 bg-[#4fc3f7]/20 rounded-full flex items-center justify-center shrink-0 mt-1">
                <div className="w-6 h-6 bg-[#4fc3f7] rounded-full"></div>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-white mb-3">Leadership</h4>
                <p className="text-gray-300 text-sm leading-relaxed">
                  Leading by example in Agile teams, mentoring junior developers, 
                  and driving technical excellence.
                </p>
              </div>
            </div>

            <div className="flex gap-4 items-start">
              <div className="w-12 h-12 bg-[#4fc3f7]/20 rounded-full flex items-center justify-center shrink-0 mt-1">
                <div className="w-6 h-6 bg-[#4fc3f7] rounded-full"></div>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-white mb-3">System Scalability</h4>
                <p className="text-gray-300 text-sm leading-relaxed">
                  Designing systems that grow with business needs, handling 
                  millions of transactions efficiently.
                </p>
              </div>
            </div>

            <div className="flex gap-4 items-start">
              <div className="w-12 h-12 bg-[#4fc3f7]/20 rounded-full flex items-center justify-center shrink-0 mt-1">
                <div className="w-6 h-6 bg-[#4fc3f7] rounded-full"></div>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-white mb-3">Research & Innovation</h4>
                <p className="text-gray-300 text-sm leading-relaxed">
                  Continuously exploring emerging technologies like AI/ML to drive 
                  smarter, data-driven solutions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Quote Section */}
      <div className="text-center py-20 mt-16">
        <blockquote className="text-2xl md:text-3xl font-light text-gray-300 italic leading-relaxed max-w-4xl mx-auto mb-6">
          "Every project I take on is more than code—it's a responsibility to create 
          solutions that make a real-world difference."
        </blockquote>
        <cite className="text-[#4fc3f7] font-medium">- Vinay Kumar Shetty</cite>
      </div>
    </section>
  );
}

export default About;