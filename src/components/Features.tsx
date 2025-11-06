const Features = () => {
  const steps = [
    {
      number: '01',
      title: '智能数据识别',
      description: '上传扫描数据，AI自动识别牙位与边缘线',
      details: '支持STL、PLY等主流格式，自动完成牙位标注和边缘线提取',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      ),
      color: 'from-blue-500 to-cyan-500',
      illustration: (
        <svg viewBox="0 0 200 120" className="w-full h-32 mb-4">
          <defs>
            <linearGradient id="scan-grad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#3B82F6" />
              <stop offset="100%" stopColor="#06B6D4" />
            </linearGradient>
          </defs>
          {/* 3D扫描数据点云效果 */}
          <rect x="20" y="20" width="160" height="80" rx="8" fill="#1a1a1a" stroke="url(#scan-grad)" strokeWidth="2" />
          {/* 数据点 */}
          {[...Array(30)].map((_, i) => (
            <circle key={i} cx={40 + (i % 10) * 12} cy={35 + Math.floor(i / 10) * 15} r="2" fill="#3B82F6" opacity="0.6" />
          ))}
          {/* 扫描线 */}
          <line x1="30" y1="30" x2="170" y2="30" stroke="#06B6D4" strokeWidth="1" strokeDasharray="4 2" opacity="0.8" />
          <line x1="30" y1="90" x2="170" y2="90" stroke="#06B6D4" strokeWidth="1" strokeDasharray="4 2" opacity="0.8" />
          {/* 上传箭头 */}
          <path d="M100 85 L100 95 M95 87 L100 85 L105 87" stroke="#3B82F6" strokeWidth="2" fill="none" strokeLinecap="round" />
        </svg>
      )
    },
    {
      number: '02',
      title: '云端极速设计',
      description: '基于10000+训练样本的深度学习处理',
      details: '强大的云计算能力，平均30秒完成单冠设计，确保形态自然美观',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      color: 'from-purple-500 to-pink-500',
      illustration: (
        <svg viewBox="0 0 200 120" className="w-full h-32 mb-4">
          <defs>
            <linearGradient id="ai-grad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#A855F7" />
              <stop offset="100%" stopColor="#EC4899" />
            </linearGradient>
          </defs>
          {/* AI处理中心 */}
          <circle cx="100" cy="60" r="35" fill="#1a1a1a" stroke="url(#ai-grad)" strokeWidth="2" />
          <text x="100" y="68" textAnchor="middle" fill="#A855F7" fontSize="16" fontWeight="bold">AI</text>
          {/* 神经网络连接线 */}
          <circle cx="50" cy="30" r="8" fill="#A855F7" opacity="0.3" />
          <circle cx="50" cy="90" r="8" fill="#A855F7" opacity="0.3" />
          <circle cx="150" cy="30" r="8" fill="#EC4899" opacity="0.3" />
          <circle cx="150" cy="90" r="8" fill="#EC4899" opacity="0.3" />
          <line x1="58" y1="30" x2="70" y2="45" stroke="#A855F7" strokeWidth="1" opacity="0.5" />
          <line x1="58" y1="90" x2="70" y2="75" stroke="#A855F7" strokeWidth="1" opacity="0.5" />
          <line x1="130" y1="45" x2="142" y2="30" stroke="#EC4899" strokeWidth="1" opacity="0.5" />
          <line x1="130" y1="75" x2="142" y2="90" stroke="#EC4899" strokeWidth="1" opacity="0.5" />
          {/* 闪电效果 */}
          <path d="M95 50 L100 60 L98 60 L103 70" stroke="#EC4899" strokeWidth="2" fill="none" strokeLinecap="round" />
        </svg>
      )
    },
    {
      number: '03',
      title: '在线交互微调',
      description: '3D浏览器中进行微米级精细调整',
      details: '实时预览修改效果，支持厚度、边缘、咬合等多维度参数调整',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
        </svg>
      ),
      color: 'from-orange-500 to-red-500',
      illustration: (
        <svg viewBox="0 0 200 120" className="w-full h-32 mb-4">
          <defs>
            <linearGradient id="adjust-grad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#F97316" />
              <stop offset="100%" stopColor="#EF4444" />
            </linearGradient>
          </defs>
          {/* 3D牙冠形状 */}
          <ellipse cx="100" cy="70" rx="40" ry="20" fill="#1a1a1a" stroke="url(#adjust-grad)" strokeWidth="2" />
          <path d="M60 70 Q60 40 100 35 Q140 40 140 70" fill="#2a2a2a" stroke="url(#adjust-grad)" strokeWidth="2" />
          {/* 调整控制点 */}
          <circle cx="100" cy="35" r="4" fill="#F97316" />
          <circle cx="75" cy="50" r="4" fill="#F97316" opacity="0.7" />
          <circle cx="125" cy="50" r="4" fill="#F97316" opacity="0.7" />
          {/* 调整线条 */}
          <line x1="100" y1="35" x2="100" y2="25" stroke="#EF4444" strokeWidth="1" strokeDasharray="2 2" />
          <line x1="75" y1="50" x2="65" y2="45" stroke="#EF4444" strokeWidth="1" strokeDasharray="2 2" />
          <line x1="125" y1="50" x2="135" y2="45" stroke="#EF4444" strokeWidth="1" strokeDasharray="2 2" />
          {/* 微调图标 */}
          <path d="M95 25 L100 20 L105 25" stroke="#F97316" strokeWidth="2" fill="none" strokeLinecap="round" />
          <text x="160" y="60" fill="#F97316" fontSize="10">±0.01mm</text>
        </svg>
      )
    }
  ];

  return (
    <section id="features" className="section-padding bg-gradient-to-b from-dark-bg to-dark-card">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">AI核心流程</h2>
          <p className="text-xl text-gray-400">三步完成专业级修复体设计</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div
              key={index}
              className="relative bg-dark-card border border-dark-border rounded-2xl p-8 card-hover group"
            >
              {/* Step number */}
              <div className="text-6xl font-bold text-gray-800 mb-4">{step.number}</div>

              {/* Illustration */}
              <div className="bg-dark-bg rounded-xl p-4 mb-6 border border-dark-border">
                {step.illustration}
              </div>

              {/* Icon */}
              <div className={`w-16 h-16 bg-gradient-to-br ${step.color} rounded-xl flex items-center justify-center mb-6 text-white group-hover:scale-110 transition-transform duration-300`}>
                {step.icon}
              </div>

              {/* Content */}
              <h3 className="text-2xl font-bold mb-3">{step.title}</h3>
              <p className="text-lg text-gray-300 mb-4">{step.description}</p>
              <p className="text-sm text-gray-500">{step.details}</p>

              {/* Connection line */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-gray-700 to-transparent" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
