import { useState } from 'react';

const Apply = () => {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    type: 'lab'
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('感谢您的申请！我们将在24小时内与您联系。');
  };

  return (
    <section id="apply" className="section-padding bg-gradient-to-b from-dark-bg to-dark-card">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl lg:text-5xl font-bold mb-4">申请加入内测</h2>
            <p className="text-xl text-gray-400">
              开启智能口腔修复新时代，享受免费试用和专属技术支持
            </p>
          </div>

          <div className="bg-dark-card border border-dark-border rounded-2xl p-8 lg:p-12">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium mb-2">姓名 *</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 bg-dark-bg border border-dark-border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                    placeholder="请输入您的姓名"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">机构名称 *</label>
                  <input
                    type="text"
                    required
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    className="w-full px-4 py-3 bg-dark-bg border border-dark-border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                    placeholder="加工厂/口腔医院名称"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">邮箱 *</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 bg-dark-bg border border-dark-border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">联系电话 *</label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-3 bg-dark-bg border border-dark-border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                    placeholder="手机号码"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">机构类型 *</label>
                <div className="grid grid-cols-2 gap-4">
                  <button
                    type="button"
                    onClick={() => setFormData({ ...formData, type: 'lab' })}
                    className={`px-6 py-3 rounded-lg border-2 transition-all ${
                      formData.type === 'lab'
                        ? 'border-blue-500 bg-blue-500/10 text-blue-400'
                        : 'border-dark-border hover:border-gray-500'
                    }`}
                  >
                    加工厂
                  </button>
                  <button
                    type="button"
                    onClick={() => setFormData({ ...formData, type: 'clinic' })}
                    className={`px-6 py-3 rounded-lg border-2 transition-all ${
                      formData.type === 'clinic'
                        ? 'border-purple-500 bg-purple-500/10 text-purple-400'
                        : 'border-dark-border hover:border-gray-500'
                    }`}
                  >
                    口腔医院
                  </button>
                </div>
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white py-4 rounded-lg text-lg font-semibold hover:shadow-2xl hover:shadow-blue-500/50 transition-all duration-300 hover:-translate-y-1"
              >
                提交申请
              </button>

              <p className="text-sm text-gray-500 text-center">
                提交申请即表示您同意我们的隐私政策和服务条款
              </p>
            </form>

            {/* Benefits */}
            <div className="mt-12 grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-12 h-12 bg-blue-500/10 rounded-full flex items-center justify-center mx-auto mb-3">
                  <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div className="font-semibold mb-1">24小时响应</div>
                <div className="text-sm text-gray-500">快速对接技术团队</div>
              </div>

              <div className="text-center">
                <div className="w-12 h-12 bg-purple-500/10 rounded-full flex items-center justify-center mx-auto mb-3">
                  <svg className="w-6 h-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                </div>
                <div className="font-semibold mb-1">专属技术支持</div>
                <div className="text-sm text-gray-500">一对一培训指导</div>
              </div>

              <div className="text-center">
                <div className="w-12 h-12 bg-green-500/10 rounded-full flex items-center justify-center mx-auto mb-3">
                  <svg className="w-6 h-6 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                  </svg>
                </div>
                <div className="font-semibold mb-1">免费内测体验</div>
                <div className="text-sm text-gray-500">零成本试用完整功能</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Apply;
