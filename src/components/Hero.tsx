const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-purple-900/20 to-dark-bg" />

      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="container-custom relative z-10">
        <div className="text-center max-w-5xl mx-auto">
          <h1 className="text-5xl lg:text-7xl font-bold mb-6 leading-tight">
            重塑口腔修复
            <br />
            <span className="gradient-text">在一瞬间</span>
          </h1>

          <p className="text-xl lg:text-2xl text-gray-400 mb-12 max-w-3xl mx-auto">
            基于深度学习的AI技术，实现牙科修复体设计的自动化
            <br />
            让每一个修复体都成为艺术品
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => scrollToSection('apply')}
              className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:shadow-2xl hover:shadow-blue-500/50 transition-all duration-300 hover:-translate-y-1"
            >
              申请加入内测
            </button>
            <button
              onClick={() => scrollToSection('features')}
              className="bg-dark-card border border-dark-border text-white px-8 py-4 rounded-full text-lg font-semibold hover:border-gray-500 transition-all duration-300 hover:-translate-y-1"
            >
              了解更多
            </button>
          </div>

          {/* Stats */}
          <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold gradient-text mb-2">10000+</div>
              <div className="text-gray-400">训练样本</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold gradient-text mb-2">99.5%</div>
              <div className="text-gray-400">识别准确率</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold gradient-text mb-2">50%</div>
              <div className="text-gray-400">成本降低</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
};

export default Hero;
