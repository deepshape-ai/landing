const Solutions = () => {
  return (
    <section id="solutions" className="section-padding bg-dark-bg">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">行业解决方案</h2>
          <p className="text-xl text-gray-400">为不同场景量身打造的智能方案</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* 加工厂方案 */}
          <div className="bg-dark-card border border-dark-border rounded-2xl p-8 card-hover">
            <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mb-6">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
              </svg>
            </div>

            <h3 className="text-2xl font-bold mb-4">加工厂方案</h3>
            <p className="text-3xl font-bold gradient-text mb-6">产能倍增，品质如一</p>

            <ul className="space-y-4 mb-8">
              <li className="flex items-start">
                <svg className="w-6 h-6 text-green-500 mr-3 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <div>
                  <div className="font-semibold text-white mb-1">批量订单处理</div>
                  <div className="text-gray-400">同时处理数十个案例，效率提升5倍以上</div>
                </div>
              </li>
              <li className="flex items-start">
                <svg className="w-6 h-6 text-green-500 mr-3 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <div>
                  <div className="font-semibold text-white mb-1">标准化输出</div>
                  <div className="text-gray-400">AI确保每个修复体质量一致，减少返工</div>
                </div>
              </li>
              <li className="flex items-start">
                <svg className="w-6 h-6 text-green-500 mr-3 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <div>
                  <div className="font-semibold text-white mb-1">人力成本降低50%</div>
                  <div className="text-gray-400">释放技师时间专注于复杂案例</div>
                </div>
              </li>
            </ul>

            <button className="w-full bg-gradient-to-r from-blue-500 to-blue-600 text-white py-3 rounded-lg hover:shadow-lg hover:shadow-blue-500/50 transition-all duration-300">
              了解更多
            </button>
          </div>

          {/* 口腔医院方案 */}
          <div className="bg-dark-card border border-dark-border rounded-2xl p-8 card-hover">
            <div className="w-14 h-14 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center mb-6">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </div>

            <h3 className="text-2xl font-bold mb-4">口腔医院方案</h3>
            <p className="text-3xl font-bold gradient-text mb-6">当日修复，即刻微笑</p>

            <ul className="space-y-4 mb-8">
              <li className="flex items-start">
                <svg className="w-6 h-6 text-green-500 mr-3 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <div>
                  <div className="font-semibold text-white mb-1">快速方案设计</div>
                  <div className="text-gray-400">扫描后10分钟内获得专业修复体设计</div>
                </div>
              </li>
              <li className="flex items-start">
                <svg className="w-6 h-6 text-green-500 mr-3 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <div>
                  <div className="font-semibold text-white mb-1">患者体验提升</div>
                  <div className="text-gray-400">减少就诊次数，提高患者满意度</div>
                </div>
              </li>
              <li className="flex items-start">
                <svg className="w-6 h-6 text-green-500 mr-3 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <div>
                  <div className="font-semibold text-white mb-1">无缝设备对接</div>
                  <div className="text-gray-400">兼容主流口扫和椅旁铣削系统</div>
                </div>
              </li>
            </ul>

            <button className="w-full bg-gradient-to-r from-purple-500 to-purple-600 text-white py-3 rounded-lg hover:shadow-lg hover:shadow-purple-500/50 transition-all duration-300">
              了解更多
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Solutions;
