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
              <svg className="w-8 h-8" viewBox="0 0 40 40" fill="none">
                <rect width="40" height="40" rx="8" fill="url(#gradient)" />
                <path d="M12 20L18 26L28 14" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                <defs>
                  <linearGradient id="gradient" x1="0" y1="0" x2="40" y2="40">
                    <stop stopColor="#60A5FA" />
                    <stop offset="1" stopColor="#A78BFA" />
                  </linearGradient>
                </defs>
              </svg>
              <span className="text-xl font-semibold">深形智能 DeepShape</span>
            </div>
            <p className="text-gray-400 mb-6 max-w-sm">
              基于深度学习的AI技术，重塑口腔修复设计，让每一个修复体都成为艺术品。
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-dark-bg rounded-full flex items-center justify-center hover:bg-gray-700 transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                </svg>
              </a>
              <a href="#" className="w-10 h-10 bg-dark-bg rounded-full flex items-center justify-center hover:bg-gray-700 transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </a>
              <a href="#" className="w-10 h-10 bg-dark-bg rounded-full flex items-center justify-center hover:bg-gray-700 transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm4.441 16.892c-2.102.144-6.784.144-8.883 0C5.282 16.736 5.017 15.622 5 12c.017-3.629.285-4.736 2.558-4.892 2.099-.144 6.782-.144 8.883 0C18.718 7.264 18.982 8.378 19 12c-.018 3.629-.285 4.736-2.559 4.892zM10 9.658l4.917 2.338L10 14.342V9.658z" />
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
        <div className="pt-8 border-t border-dark-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">
            © 2025 深形智能 DeepShape. 保留所有权利。
          </p>
          <div className="flex gap-6 text-sm text-gray-500">
            <a href="#privacy" className="hover:text-white transition-colors">隐私政策</a>
            <a href="#terms" className="hover:text-white transition-colors">服务条款</a>
            <a href="#cookies" className="hover:text-white transition-colors">Cookie政策</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
