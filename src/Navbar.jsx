function Navbar() {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex justify-between items-center px-8 py-6 bg-[#0a0f1c]/95 backdrop-blur-sm border-b border-gray-800/50 text-white">
      <div className="flex flex-col">
        <h1 className="text-2xl font-bold text-[#4fc3f7]">Teja.dev</h1>
        <p className="text-sm text-gray-400">Hello, I'm</p>
      </div>
      
      <ul className="flex gap-8 text-base font-medium">
        <li 
          className="hover:text-[#4fc3f7] cursor-pointer transition-colors"
          onClick={() => scrollToSection('home')}
        >
          Home
        </li>
        <li 
          className="hover:text-[#4fc3f7] cursor-pointer transition-colors"
          onClick={() => scrollToSection('about')}
        >
          About
        </li>
        <li 
          className="hover:text-[#4fc3f7] cursor-pointer transition-colors"
          onClick={() => scrollToSection('skills')}
        >
          Skills
        </li>
        <li 
          className="hover:text-[#4fc3f7] cursor-pointer transition-colors"
          onClick={() => scrollToSection('projects')}
        >
          Projects
        </li>
        <li className="hover:text-[#4fc3f7] cursor-pointer transition-colors">Contact</li>
      </ul>
      
      <div className="flex items-center gap-4">
        <div className="flex gap-3">
          <div className="w-8 h-8 flex items-center justify-center cursor-pointer hover:text-[#4fc3f7] transition-colors">
            <span className="text-white text-lg">📧</span>
          </div>
          <div className="w-8 h-8 flex items-center justify-center cursor-pointer hover:text-[#4fc3f7] transition-colors">
            <span className="text-white text-lg">💼</span>
          </div>
          <div className="w-8 h-8 flex items-center justify-center cursor-pointer hover:text-[#4fc3f7] transition-colors">
            <span className="text-white text-lg">📧</span>
          </div>
        </div>
        <button className="px-4 py-2 bg-[#4fc3f7] text-black rounded font-semibold hover:bg-[#29b6f6] transition-colors">
          📄 Resume
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
