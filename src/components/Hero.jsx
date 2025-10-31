function Hero() {
  return (
    <section id='home' className="px-8 pt-20 pb-16 max-w-7xl mx-auto  flex flex-col lg:flex-row gap-16 items-center min-h-screen">
      {/* LEFT CONTENT */}
      <div className="space-y-6 hero-content pl-8 md:pl-12">
        <h1 className="hero-title text-4xl md:text-5xl lg:text-6xl font-bold text-[#4fc3f7] leading-tight">
          Teja Chakilam
        </h1>
        
        <h2 className="text-lg md:text-xl text-gray-300 font-medium">
          Data Scientist | AI/ML Engineer|
        </h2>

        <p className="hero-description text-gray-300 leading-relaxed text-sm md:text-base max-w-2xl">
          I'm a Data Scientist and AI/ML Engineer with 5+ years of experience delivering AI-driven solutions across finance, healthcare, insurance, and retail. For me, data science isn't just a job — it's a responsibility. I take full ownership of the systems I build, ensuring they don't just work, but create measurable impact. My journey started in business and marketing, where I realized that every decision, at its core, is powered by data. That curiosity
        </p>

        <div className="flex gap-4 pt-4">
          <button className="bg-[#4fc3f7] text-black px-6 py-3 rounded font-semibold hover:bg-[#29b6f6] transition-colors">
            View My Work
          </button>
          <a 
            href="/sample.pdf" 
            download="Teja_Resume.pdf"
            className="border border-gray-600 text-gray-300 px-6 py-3 rounded hover:border-[#4fc3f7] hover:text-[#4fc3f7] transition-colors inline-block text-center"
          >
            Download Resume
          </a>
        </div>

        {/* STATS */}
        <div className=" flex gap-8 md:gap-12 pt-8 flex-wrap">
          <div className="text-left">
            <p className="text-2xl md:text-3xl font-bold text-[#4fc3f7]">5+</p>
            <p className="text-xs md:text-sm text-gray-400">Years Experience</p>
          </div>
          <div className="text-left">
            <p className="text-2xl md:text-3xl font-bold text-[#4fc3f7]">20+</p>
            <p className="text-xs md:text-sm text-gray-400">Technologies Mastered</p>
          </div>
          <div className="text-left">
            <p className="text-2xl md:text-3xl font-bold text-[#4fc3f7]">10+</p>
            <p className="text-xs md:text-sm text-gray-400">AI/ML Projects</p>
          </div>
          <div className="text-left">
            <p className="text-2xl md:text-3xl font-bold text-[#4fc3f7]">15+</p>
            <p className="text-xs md:text-sm text-gray-400">Certifications</p>
          </div>
        </div>
      </div>

      {/* RIGHT - PROFILE IMAGE */}
      <div className="flex justify-center lg:justify-end">
        <div className="relative profile-image-container">
          {/* Decorative elements */}
          <div className="absolute -top-4 -right-4 w-8 h-8 border-2 border-[#4fc3f7] rounded"></div>
          <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-[#4fc3f7] rounded"></div>
          <div className="absolute top-1/2 -right-8 w-4 h-4 border border-[#4fc3f7] rounded-full"></div>
          
          {/* Main image container */}
          <div className="relative rounded-full border-4 border-[#4fc3f7] p-2 bg-gradient-to-br from-[#4fc3f7]/20 to-transparent">
            <img
              src="/your-image.jpg"
              alt="Teja Chakilam"
              className="rounded-full w-64 h-64 md:w-80 md:h-80 object-cover"
            />
          </div>
          
          {/* Additional decorative elements */}
          <div className="absolute top-8 -left-6 w-3 h-3 bg-[#4fc3f7] rounded-full opacity-60"></div>
          <div className="absolute bottom-12 -right-6 w-2 h-2 bg-[#4fc3f7] rounded-full"></div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
