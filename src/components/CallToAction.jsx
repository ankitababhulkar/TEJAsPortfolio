function CallToAction() {
  return (
    <section className="w-full px-4 sm:px-6 lg:px-8 py-20">
      <div className="max-w-4xl mx-auto">
        {/* Ready to Start a Project Banner */}
        <div className="bg-gradient-to-r from-[#4fc3f7]/20 to-[#29b6f6]/20 backdrop-blur-sm rounded-2xl p-12 border border-[#4fc3f7]/30 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Start a Project?
          </h2>
          <p className="text-gray-300 text-lg leading-relaxed mb-8 max-w-3xl mx-auto">
            Whether you need a full-stack application, cloud migration, or system architecture consultation, I'm here to help turn your ideas into reality.
          </p>
          <button className="bg-[#4fc3f7] text-black px-8 py-4 rounded-lg font-semibold hover:bg-[#29b6f6] hover:shadow-lg hover:shadow-[#4fc3f7]/25 transition-all duration-300 flex items-center justify-center gap-3 mx-auto">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            Let's Discuss Your Project
          </button>
        </div>
      </div>
    </section>
  );
}

export default CallToAction;