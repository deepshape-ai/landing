import { useState } from 'react';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: '支持哪些类型的修复体？',
      answer: '目前支持单冠、嵌体、高嵌体等常见修复体类型。我们正在持续扩展支持更多类型，包括桥体、种植体基台等。'
    },
    {
      question: '如何申请内测？',
      answer: '填写下方申请表单，我们的团队会在24小时内与您联系。内测用户将获得免费试用期和专属技术支持服务。'
    },
    {
      question: '数据安全如何保障？',
      answer: '我们采用银行级AES-256加密技术，所有数据传输均通过HTTPS加密通道。符合ISO 27001、HIPAA等国际标准，确保患者隐私和商业数据安全。数据存储在国内合规服务器，支持数据本地化部署。'
    },
    {
      question: '是否兼容现有设备？',
      answer: '兼容主流口内扫描仪（3Shape、iTero、Medit等）和椅旁铣削系统。支持STL、PLY等标准格式，可无缝集成到现有工作流程。'
    }
  ];

  return (
    <section id="faq" className="section-padding bg-dark-card">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">常见问题</h2>
          <p className="text-xl text-gray-400">快速了解您关心的问题</p>
        </div>

        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-dark-bg border border-dark-border rounded-xl overflow-hidden transition-all duration-300"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-dark-card/50 transition-colors"
              >
                <span className="text-lg font-semibold pr-8">{faq.question}</span>
                <svg
                  className={`w-6 h-6 flex-shrink-0 transition-transform duration-300 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? 'max-h-96' : 'max-h-0'
                }`}
              >
                <div className="px-6 pb-5 text-gray-400 leading-relaxed">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Contact CTA */}
        <div className="mt-16 text-center">
          <p className="text-gray-400 mb-4">没有找到您想要的答案？</p>
          <a
            href="mailto:feedback@deepshape.cn"
            className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            联系我们：feedback@deepshape.cn
          </a>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
