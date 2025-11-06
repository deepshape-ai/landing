const Technology = () => {
  const techs = [
    {
      title: '深度学习模型',
      description: 'Transformer网络驱动的智能识别',
      features: [
        '基于10000+专业案例训练',
        '持续学习优化算法',
        '多任务并行处理能力'
      ],
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      ),
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: '三维几何感知',
      description: '99%准确率的精准识别',
      features: [
        '毫米级精度控制',
        '复杂形态智能重建',
        '咬合关系自动优化'
      ],
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
        </svg>
      ),
      color: 'from-purple-500 to-pink-500'
    },
    {
      title: '技师专业指导',
      description: '资深技师全流程参与优化',
      features: [
        '500+技师参与训练指导',
        '真实案例持续反馈优化',
        '行业专家认可推荐使用'
      ],
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      color: 'from-green-500 to-emerald-500'
    }
  ];

  return (
    <section id="technology" className="section-padding bg-dark-bg">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">核心技术</h2>
          <p className="text-xl text-gray-400">领先的AI技术栈，确保专业品质</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {techs.map((tech, index) => (
            <div
              key={index}
              className="bg-dark-card border border-dark-border rounded-2xl p-8 card-hover"
            >
              {/* Icon */}
              <div className={`w-16 h-16 bg-gradient-to-br ${tech.color} rounded-xl flex items-center justify-center mb-6 text-white`}>
                {tech.icon}
              </div>

              {/* Title */}
              <h3 className="text-2xl font-bold mb-3">{tech.title}</h3>
              <p className="text-gray-400 mb-6">{tech.description}</p>

              {/* Features */}
              <ul className="space-y-3">
                {tech.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start text-sm text-gray-300">
                    <svg className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Additional info */}
        <div className="mt-16 bg-gradient-to-r from-blue-900/30 to-purple-900/30 border border-blue-500/30 rounded-2xl p-8 text-center">
          <h3 className="text-2xl font-bold mb-4">专利与高校支持</h3>
          <p className="text-gray-400 mb-6">
            拥有多项核心技术专利，与国内外顶尖院校深度合作
          </p>
          <div className="flex flex-wrap justify-center gap-8 text-sm text-gray-500">
            <div>发明专利 3项</div>
            <div>•</div>
            <div>华西口腔医学院</div>
            <div>•</div>
            <div>全国高校生物医药区域技术转移转化中心</div>
            <div>•</div>
            <div>国家重点研发计划</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Technology;
