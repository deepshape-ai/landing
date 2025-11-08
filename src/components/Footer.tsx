const Footer = () => {
  const footerLinks = {
    product: {
      title: '产品',
      links: [
        { name: '功能特性', href: '#features' },
        { name: '解决方案', href: '#solutions' },
        { name: '技术架构', href: '#technology' },
        { name: '价格方案', href: '#pricing' }
      ]
    },
    company: {
      title: '公司',
      links: [
        { name: '关于我们', href: '#about' },
        { name: '新闻动态', href: '#news' },
        { name: '加入我们', href: '#careers' },
        { name: '合作伙伴', href: '#partners' }
      ]
    },
    support: {
      title: '支持',
      links: [
        { name: '帮助中心', href: '#help' },
        { name: '常见问题', href: '#faq' },
        { name: '联系我们', href: 'mailto:feedback@deepshape.cn' },
        { name: '隐私政策', href: '#privacy' }
      ]
    }
  };

  return (
    <footer className="bg-dark-card border-t border-dark-border">
      <div className="container-custom py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <img src="/logo.svg" alt="DeepShape Logo" className="w-8 h-8" />
              <span className="text-xl font-semibold">深形智能 DeepShape</span>
            </div>
            <p className="text-gray-400 mb-6 max-w-sm">
              基于深度学习的AI技术，重塑口腔修复设计，让每一个修复体都成为艺术品。
            </p>
            <div className="flex space-x-4">
              {/* WeChat */}
              <a href="#" aria-label="微信" className="w-10 h-10 bg-dark-bg rounded-full flex items-center justify-center hover:bg-gray-700 transition-colors">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M10.5 4C6.91 4 4 6.24 4 8.99c0 1.6.9 3.03 2.33 4.01l-.5 2 2.2-1.3c.72.2 1.48.3 2.3.3 3.59 0 6.5-2.24 6.5-4.99S14.09 4 10.5 4Zm-2.25 4.25a.75.75 0 1 1 0 1.5.75.75 0 0 1 0-1.5Zm4.5 0a.75.75 0 1 1 0 1.5.75.75 0 0 1 0-1.5Z"/>
                  <path d="M13.5 11.5c3.04 0 5.5 1.94 5.5 4.33 0 1.39-.88 2.62-2.28 3.43l.42 1.74-1.9-1.1c-.58.12-1.1.16-1.74.16-3.04 0-5.5-1.94-5.5-4.33s2.46-4.33 5.5-4.33Zm-2 2.33a.7.7 0 1 0 0 1.4.7.7 0 0 0 0-1.4Zm4 0a.7.7 0 1 0 0 1.4.7.7 0 0 0 0-1.4Z"/>
                </svg>
              </a>
              {/* Xiaohongshu */}
              <a href="#" aria-label="小红书" className="w-10 h-10 bg-dark-bg rounded-full flex items-center justify-center hover:bg-gray-700 transition-colors">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <rect x="3" y="6.5" width="18" height="11" rx="2" ry="2"/>
                  <path d="M7.5 9.5h1.8v5H7.5zm3.2 0h1.8v5h-1.8zM15 9.5h3v1.5h-3v-1.5zm0 3h3V14h-3v-1.5z" fill="#0f172a"/>
                </svg>
              </a>
              {/* Weibo */}
              <a href="#" aria-label="微博" className="w-10 h-10 bg-dark-bg rounded-full flex items-center justify-center hover:bg-gray-700 transition-colors">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M15.7 6.3a.9.9 0 0 1 1.25-.22c1.53 1.04 2.33 2.58 2.13 4.38a.9.9 0 1 1-1.79-.2c.12-1.03-.34-1.92-1.26-2.54a.9.9 0 0 1-.33-1.42Z"/>
                  <path d="M13.9 7.6a.8.8 0 0 1 1.1-.2c.9.6 1.37 1.45 1.25 2.46a.8.8 0 1 1-1.58-.18c.05-.47-.16-.86-.61-1.17a.8.8 0 0 1-.16-1.1Z"/>
                  <path d="M10.6 9.5c2.2-.46 3.02.28 2.76 1.24-.12.43.24.43.56.32 1.17-.41 1.98.28 1.52 1.37-.19.45.04.55.39.65.91.27.97 1.1.2 1.78-1.04.94-2.86 1.74-5.18 1.74-2.86 0-5.18-1.23-5.18-2.75 0-1.96 3.08-4 4.94-4.35Z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([key, section]) => (
            <div key={key}>
              <h3 className="font-semibold mb-4">{section.title}</h3>
              <ul className="space-y-3">
                {section.links.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom */}
        <div className="flex justify-center">
          <div className="flex flex-col items-center gap-1 text-sm text-gray-500">
            <div>©2025 南京深形智能科技有限公司 版权所有</div>
            <div>地址：江苏省南京市江北新区龙山南路141号化学之光B栋 电话：15262245466</div>
            <div>
              <a href="https://beian.miit.gov.cn/" target="_blank" rel="noopener noreferrer">
                苏ICP备2025186445号
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
