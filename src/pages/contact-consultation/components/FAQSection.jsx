import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';

const FAQSection = () => {
  const [openFAQ, setOpenFAQ] = useState(null);

  const faqs = [
    {
      id: 1,
      category: "Consultation",
      question: "Is the initial consultation really free?",
      answer: `Yes, absolutely! Our initial consultation is completely free with no hidden charges or obligations. During this 30-60 minute session, we'll:\n\n• Understand your project requirements and business goals\n• Provide expert advice and recommendations\n• Discuss timeline and budget estimates\n• Answer all your technical questions\n• Share relevant case studies and examples\n\nThere's no pressure to proceed, and you'll gain valuable insights regardless of your decision.`
    },
    {
      id: 2,
      category: "Pricing",
      question: "How do you determine project pricing?",
      answer: `Our pricing is transparent and based on several factors:\n\n• Project complexity and scope\n• Technology stack requirements\n• Timeline and urgency\n• Additional features and integrations\n• Ongoing support and maintenance needs\n\nWe provide detailed cost breakdowns and fixed-price quotes to avoid any surprises. Our quote calculator gives you an instant estimate, and we'll refine it during our consultation.`
    },
    {
      id: 3,
      category: "Process",
      question: "What\'s your typical project development process?",
      answer: `We follow a proven 6-phase development process:\n\n1. **Discovery & Planning** (1-2 weeks): Requirements gathering, technical planning\n2. **Design & Prototyping** (1-3 weeks): UI/UX design, client approval\n3. **Development** (4-12 weeks): Coding, regular progress updates\n4. **Testing & QA** (1-2 weeks): Comprehensive testing, bug fixes\n5. **Deployment** (1 week): Launch preparation, go-live support\n6. **Support & Maintenance** (Ongoing): Post-launch support, updates\n\nYou'll receive regular updates and have multiple review checkpoints throughout the process.`
    },
    {
      id: 4,
      category: "Timeline",
      question: "How long does a typical project take?",
      answer: `Project timelines vary based on complexity:\n\n• **Simple Website**: 2-4 weeks\n• **Business Website with CMS**: 4-6 weeks\n• **E-commerce Store**: 6-10 weeks\n• **Web Application**: 8-16 weeks\n• **Mobile App**: 12-20 weeks\n• **Custom Software**: 16-24 weeks\n\nWe can accommodate rush projects with expedited timelines for an additional fee. During consultation, we'll provide a detailed timeline specific to your requirements.`
    },
    {
      id: 5,
      category: "Technology",
      question: "What technologies do you work with?",
      answer: `We specialize in modern, industry-standard technologies:\n\n**Frontend**: React, Next.js, Vue.js, Angular, HTML5, CSS3\n**Backend**: Node.js, Python, PHP, .NET, Java\n**Mobile**: React Native, Flutter, iOS, Android\n**Databases**: MySQL, PostgreSQL, MongoDB, Firebase\n**Cloud**: AWS, Google Cloud, Azure, Vercel\n**E-commerce**: Shopify, WooCommerce, Magento, Custom solutions\n\nWe choose the best technology stack based on your specific needs, scalability requirements, and budget.`
    },
    {
      id: 6,
      category: "Support",
      question: "Do you provide ongoing support after project completion?",
      answer: `Yes, we offer comprehensive post-launch support:\n\n**Included Support** (3 months):\n• Bug fixes and minor issues\n• Basic content updates\n• Security patches\n• Performance monitoring\n\n**Extended Support Plans**:\n• 6-month Standard Support: ₹12,000\n• 12-month Premium Support: ₹25,000\n• 24/7 Enterprise Support: ₹50,000\n\nAll plans include regular backups, security updates, and priority technical support.`
    },
    {
      id: 7,
      category: "Payment",
      question: "What are your payment terms?",
      answer: `We offer flexible payment options to suit your cash flow:\n\n**Standard Payment Schedule**:\n• 30% advance payment to start the project\n• 40% at 50% project completion milestone\n• 30% upon final delivery and approval\n\n**Alternative Options**:\n• Monthly installments for larger projects\n• Milestone-based payments\n• Custom payment plans for startups\n\nWe accept bank transfers, UPI, credit cards, and digital wallets. All payments are secured and invoiced properly.`
    },
    {
      id: 8,
      category: "Location",
      question: "Do you work with clients outside Rajkot/Gujarat?",
      answer: `Absolutely! While we're based in Rajkot, we work with clients across India and internationally:\n\n**Local Clients** (Gujarat): In-person meetings, on-site support available\n**Pan-India**: Video calls, phone support, remote collaboration\n**International**: Flexible timing, English communication, global payment options\n\nWe use modern collaboration tools like Slack, Zoom, and project management platforms to ensure seamless communication regardless of location.`
    }
  ];

  const toggleFAQ = (faqId) => {
    setOpenFAQ(openFAQ === faqId ? null : faqId);
  };

  const categories = [...new Set(faqs.map(faq => faq.category))];

  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Get answers to common questions about our services, process, and pricing. Can't find what you're looking for? Contact us directly.
            </p>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {categories?.map((category) => (
              <span
                key={category}
                className="px-3 py-1 bg-accent/10 text-accent text-sm font-medium rounded-full"
              >
                {category}
              </span>
            ))}
          </div>

          {/* FAQ List */}
          <div className="space-y-4">
            {faqs?.map((faq) => (
              <div
                key={faq?.id}
                className="bg-card border border-border rounded-xl overflow-hidden transition-brand hover:shadow-brand"
              >
                <button
                  className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-muted/30 transition-brand"
                  onClick={() => toggleFAQ(faq?.id)}
                >
                  <div className="flex items-start space-x-4">
                    <span className="text-xs bg-accent/10 text-accent px-2 py-1 rounded-full font-medium mt-1">
                      {faq?.category}
                    </span>
                    <h3 className="text-lg font-semibold text-primary pr-4">
                      {faq?.question}
                    </h3>
                  </div>
                  <Icon
                    name={openFAQ === faq?.id ? "ChevronUp" : "ChevronDown"}
                    size={20}
                    className={`text-muted-foreground transition-brand ${
                      openFAQ === faq?.id ? "rotate-180" : ""
                    }`}
                  />
                </button>
                
                {openFAQ === faq?.id && (
                  <div className="px-6 pb-6">
                    <div className="pl-20 pr-4">
                      <div className="whitespace-pre-line text-muted-foreground leading-relaxed">
                        {faq?.answer}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Contact CTA */}
          <div className="mt-12 text-center bg-gradient-to-br from-secondary/10 to-accent/10 border border-secondary/20 rounded-xl p-8">
            <div className="w-16 h-16 bg-gradient-to-br from-secondary to-accent rounded-full flex items-center justify-center mx-auto mb-4">
              <Icon name="MessageCircle" size={32} color="white" />
            </div>
            <h3 className="text-2xl font-bold text-primary mb-2">
              Still Have Questions?
            </h3>
            <p className="text-muted-foreground mb-6 max-w-md mx-auto">
              Our team is here to help! Get in touch for personalized answers and expert guidance on your project.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <button className="bg-gradient-to-r from-secondary to-accent hover:from-secondary/90 hover:to-accent/90 text-white px-6 py-3 rounded-lg font-medium transition-brand flex items-center space-x-2">
                <Icon name="Phone" size={16} />
                <span>Call: +91 6352412728</span>
              </button>
              <button className="border border-border hover:bg-muted text-foreground px-6 py-3 rounded-lg font-medium transition-brand flex items-center space-x-2">
                <Icon name="Mail" size={16} />
                <span>Email Us</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;