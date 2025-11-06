import { useState, useEffect } from 'react';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-dark-bg/95 backdrop-blur-lg shadow-lg shadow-black/20' : 'bg-transparent'
    }`}>
      <div className="container-custom">
        <div className="flex items-center justify-between h-16 lg:h-20">
          <div className="flex items-center space-x-2">
            <img src="/logo.svg" alt="DeepShape Logo" className="w-8 h-8" />
            <span className="text-xl font-semibold">
              深形智能 <span className="text-gray-400">DeepShape</span>
            </span>
          </div>

          <div className="hidden lg:flex items-center space-x-8">
            <button onClick={() => scrollToSection('home')} className="text-gray-300 hover:text-white transition-colors">
              首页
            </button>
            <button onClick={() => scrollToSection('solutions')} className="text-gray-300 hover:text-white transition-colors">
              解决方案
            </button>
            <button onClick={() => scrollToSection('features')} className="text-gray-300 hover:text-white transition-colors">
              产品功能
            </button>
            <button onClick={() => scrollToSection('technology')} className="text-gray-300 hover:text-white transition-colors">
              核心技术
            </button>
            <button onClick={() => scrollToSection('faq')} className="text-gray-300 hover:text-white transition-colors">
              FAQ
            </button>
          </div>

          <button onClick={() => scrollToSection('apply')} className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-2.5 rounded-full hover:shadow-lg hover:shadow-blue-500/50 transition-all duration-300">
            申请内测
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
