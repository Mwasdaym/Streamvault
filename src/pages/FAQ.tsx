
import React, { useState } from 'react';
import { ChevronDown, ChevronUp, HelpCircle, MessageCircle, Shield, Clock, CreditCard, Users, Award, HeadphonesIcon } from 'lucide-react';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import BackgroundVideo from '@/components/BackgroundVideo';

const FAQ = () => {
  const [openItems, setOpenItems] = useState<number[]>([]);

  const faqCategories = [
    {
      title: "Account Delivery & Access",
      icon: <Clock className="h-5 w-5" />,
      faqs: [
        {
          question: "How quickly will I receive my premium account?",
          answer: "All accounts are delivered instantly via email and SMS within 1-2 minutes after successful payment confirmation. Our automated system ensures immediate delivery 24/7, 365 days a year."
        },
        {
          question: "What login credentials will I receive?",
          answer: "You'll receive complete login credentials including username/email and password via your registered email and SMS. We also provide detailed setup instructions and quick start guides for each service."
        },
        {
          question: "Can I change the password after receiving the account?",
          answer: "Yes, for most services you can change passwords and personalize profiles. However, we recommend keeping a backup of original credentials. Some services may have restrictions on password changes during the subscription period."
        }
      ]
    },
    {
      title: "Service Quality & Legitimacy",
      icon: <Shield className="h-5 w-5" />,
      faqs: [
        {
          question: "Are these accounts legitimate and safe to use?",
          answer: "Absolutely! All our accounts are legitimate premium subscriptions sourced through official channels. We maintain partnerships with authorized resellers and use official payment methods. Your safety and account security are our top priorities."
        },
        {
          question: "Will my personal data be safe?",
          answer: "Yes, we use enterprise-grade encryption and never store your payment information. All transactions are processed through secure, encrypted channels. We comply with international data protection standards including GDPR."
        },
        {
          question: "What makes Carl24Tech different from competitors?",
          answer: "Carl24Tech specializes in premium digital solutions with focus on reliability, instant delivery, and exceptional customer service. We offer competitive pricing, 24/7 multilingual support, satisfaction guarantee, and have served over 10,000+ satisfied customers across East Africa."
        }
      ]
    },
    {
      title: "Payments & Pricing",
      icon: <CreditCard className="h-5 w-5" />,
      faqs: [
        {
          question: "What payment methods do you accept?",
          answer: "We primarily accept M-Pesa (Safaricom, Airtel Money, T-Kash), bank transfers, and mobile money across Kenya, Uganda, and Tanzania. We also accept PayPal for international customers and cryptocurrency payments for privacy-conscious users."
        },
        {
          question: "Are there any hidden charges or fees?",
          answer: "No hidden charges! The price you see is exactly what you pay. We believe in transparent pricing. The only additional cost might be network charges from your mobile money provider, which are standard rates."
        },
        {
          question: "Do you offer discounts for bulk purchases?",
          answer: "Yes! We offer attractive discounts for bulk orders, corporate packages, and returning customers. Contact our sales team for custom pricing on orders of 5+ accounts or enterprise solutions."
        },
        {
          question: "Can I get a refund if I'm not satisfied?",
          answer: "We offer a 48-hour replacement guarantee. If we cannot provide a working replacement within this period, we'll issue a full refund. Our goal is 100% customer satisfaction with a 99.8% success rate."
        }
      ]
    },
    {
      title: "Account Usage & Sharing",
      icon: <Users className="h-5 w-5" />,
      faqs: [
        {
          question: "Can I share the account with family members?",
          answer: "Yes! Most premium accounts support multiple profiles and simultaneous streaming. Netflix supports up to 4 screens, YouTube Premium works on 6 devices, Spotify allows family sharing, etc. Check individual service details for specific limitations."
        },
        {
          question: "How many devices can I use simultaneously?",
          answer: "This depends on the service: Netflix (4 screens), YouTube Premium (6 devices), Spotify (unlimited with premium family), Amazon Prime (3 devices), etc. We provide detailed device limit information for each service."
        },
        {
          question: "What if someone else is using my account?",
          answer: "Each account comes with profile management tools. You can monitor active sessions, log out other devices, and manage access. We also provide security tips to keep your account secure and private."
        }
      ]
    },
    {
      title: "Technical Support & Duration",
      icon: <HeadphonesIcon className="h-5 w-5" />,
      faqs: [
        {
          question: "What if my account stops working?",
          answer: "We provide 24/7 customer support with a 48-hour replacement guarantee. If any account stops working within the guaranteed period, we'll replace it immediately at no extra cost. Contact us via WhatsApp (+254700000000) or Telegram (@streamvault) for instant support."
        },
        {
          question: "How long do the accounts last?",
          answer: "Account duration varies by service: Netflix (30-90 days), YouTube Premium (30-180 days), Amazon Prime Video (6 months fixed), VPN services (30-365 days). We clearly specify duration for each service and offer renewal options."
        },
        {
          question: "Do you provide customer support in multiple languages?",
          answer: "Yes! Our support team is available in English, Swahili, French, and Arabic. We're available 24/7 via WhatsApp, Telegram, email, and live chat to assist you with any questions or technical issues."
        },
        {
          question: "What if I need help setting up the service?",
          answer: "We provide comprehensive setup guides, video tutorials, and personal assistance. Our technical support team can walk you through the setup process via video call if needed. Most setups take less than 5 minutes."
        }
      ]
    },
    {
      title: "Business & Enterprise",
      icon: <Award className="h-5 w-5" />,
      faqs: [
        {
          question: "Do you offer enterprise or business packages?",
          answer: "Yes! We provide custom enterprise solutions for businesses, educational institutions, and organizations. This includes bulk pricing, centralized management, detailed reporting, and dedicated account managers."
        },
        {
          question: "Can I become a reseller or partner?",
          answer: "Absolutely! We have an active reseller program with attractive margins, marketing support, and technical training. Contact our partnership team to learn about wholesale pricing and white-label solutions."
        },
        {
          question: "Do you provide APIs for integration?",
          answer: "Yes, we offer RESTful APIs for account provisioning, status checking, and automated delivery. Perfect for businesses wanting to integrate our services into their platforms. Full documentation and sandbox environment available."
        }
      ]
    }
  ];

  const toggleItem = (categoryIndex: number, faqIndex: number) => {
    const itemId = categoryIndex * 100 + faqIndex;
    setOpenItems(prev => 
      prev.includes(itemId) 
        ? prev.filter(i => i !== itemId)
        : [...prev, itemId]
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-blue-900 relative overflow-hidden">
      <BackgroundVideo />
      
      {/* Galaxy floating objects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 md:w-2 md:h-2 bg-purple-400 rounded-full animate-float opacity-20"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${3 + Math.random() * 2}s`
            }}
          />
        ))}
      </div>

      {/* Hero Section */}
      <section className="py-12 md:py-20 px-4 relative z-10">
        <div className="container mx-auto text-center max-w-4xl">
          <div className="flex items-center justify-center mb-6">
            <HelpCircle className="h-8 w-8 md:h-12 md:w-12 text-purple-400 mr-4" />
            <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold text-white">
              Frequently Asked Questions
            </h1>
          </div>
          <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Everything you need to know about Carl24Tech premium services, delivery process, and customer support.
          </p>
          <div className="bg-gradient-to-r from-purple-600/20 to-blue-600/20 backdrop-blur-md rounded-lg p-4 md:p-6 border border-purple-300/30 neon-border">
            <div className="flex flex-col md:flex-row items-center justify-center space-y-2 md:space-y-0 md:space-x-8 text-white">
              <div className="flex items-center">
                <Users className="h-5 w-5 mr-2 text-green-400" />
                <span className="text-sm md:text-base">10,000+ Happy Customers</span>
              </div>
              <div className="flex items-center">
                <Clock className="h-5 w-5 mr-2 text-blue-400" />
                <span className="text-sm md:text-base">Instant Delivery</span>
              </div>
              <div className="flex items-center">
                <Shield className="h-5 w-5 mr-2 text-purple-400" />
                <span className="text-sm md:text-base">100% Legitimate</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="py-8 md:py-16 px-4 relative z-10">
        <div className="container mx-auto max-w-5xl">
          <div className="space-y-6 md:space-y-8">
            {faqCategories.map((category, categoryIndex) => (
              <Card key={categoryIndex} className="bg-white/10 backdrop-blur-md border border-purple-300/30 shadow-2xl shadow-purple-500/10 neon-border">
                <CardHeader className="bg-gradient-to-r from-purple-600/30 to-blue-600/30 border-b border-purple-300/30">
                  <div className="flex items-center">
                    <div className="mr-3 text-purple-400">
                      {category.icon}
                    </div>
                    <h2 className="text-xl md:text-2xl font-bold text-white">{category.title}</h2>
                  </div>
                </CardHeader>
                <CardContent className="p-0">
                  {category.faqs.map((faq, faqIndex) => {
                    const itemId = categoryIndex * 100 + faqIndex;
                    return (
                      <div key={faqIndex} className="border-b border-purple-300/20 last:border-b-0">
                        <div 
                          className="cursor-pointer hover:bg-white/5 transition-colors p-4 md:p-6"
                          onClick={() => toggleItem(categoryIndex, faqIndex)}
                        >
                          <div className="flex justify-between items-start">
                            <h3 className="text-base md:text-lg font-semibold text-white pr-4">{faq.question}</h3>
                            {openItems.includes(itemId) ? (
                              <ChevronUp className="h-5 w-5 text-purple-400 flex-shrink-0" />
                            ) : (
                              <ChevronDown className="h-5 w-5 text-purple-400 flex-shrink-0" />
                            )}
                          </div>
                        </div>
                        {openItems.includes(itemId) && (
                          <div className="px-4 md:px-6 pb-4 md:pb-6 animate-fade-in">
                            <p className="text-gray-300 leading-relaxed text-sm md:text-base">{faq.answer}</p>
                          </div>
                        )}
                      </div>
                    );
                  })}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="py-8 md:py-16 px-4 relative z-10">
        <div className="container mx-auto max-w-4xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            <div className="text-center">
              <div className="bg-green-600/20 rounded-full w-12 h-12 md:w-16 md:h-16 flex items-center justify-center mx-auto mb-2 md:mb-3 neon-border">
                <Users className="h-6 w-6 md:h-8 md:w-8 text-green-400" />
              </div>
              <div className="text-xl md:text-2xl font-bold text-white">10K+</div>
              <div className="text-xs md:text-sm text-gray-300">Customers</div>
            </div>
            <div className="text-center">
              <div className="bg-blue-600/20 rounded-full w-12 h-12 md:w-16 md:h-16 flex items-center justify-center mx-auto mb-2 md:mb-3 neon-border">
                <Shield className="h-6 w-6 md:h-8 md:w-8 text-blue-400" />
              </div>
              <div className="text-xl md:text-2xl font-bold text-white">99.8%</div>
              <div className="text-xs md:text-sm text-gray-300">Success Rate</div>
            </div>
            <div className="text-center">
              <div className="bg-purple-600/20 rounded-full w-12 h-12 md:w-16 md:h-16 flex items-center justify-center mx-auto mb-2 md:mb-3 neon-border">
                <Clock className="h-6 w-6 md:h-8 md:w-8 text-purple-400" />
              </div>
              <div className="text-xl md:text-2xl font-bold text-white">&lt;2min</div>
              <div className="text-xs md:text-sm text-gray-300">Delivery</div>
            </div>
            <div className="text-center">
              <div className="bg-yellow-600/20 rounded-full w-12 h-12 md:w-16 md:h-16 flex items-center justify-center mx-auto mb-2 md:mb-3 neon-border">
                <Award className="h-6 w-6 md:h-8 md:w-8 text-yellow-400" />
              </div>
              <div className="text-xl md:text-2xl font-bold text-white">24/7</div>
              <div className="text-xs md:text-sm text-gray-300">Support</div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Support */}
      <section className="py-8 md:py-16 px-4 relative z-10">
        <div className="container mx-auto text-center max-w-2xl">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4 md:mb-6">Still Have Questions?</h2>
          <p className="text-gray-300 mb-6 md:mb-8 text-sm md:text-base">Our expert support team is here to help 24/7 across multiple channels</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <a 
              href="https://wa.me/254700000000" 
              className="bg-green-600 hover:bg-green-700 text-white px-4 md:px-6 py-3 rounded-lg transition-colors neon-border flex items-center justify-center text-sm md:text-base"
            >
              <MessageCircle className="h-4 w-4 md:h-5 md:w-5 mr-2" />
              WhatsApp Support
            </a>
            <a 
              href="https://t.me/streamvault" 
              className="bg-blue-600 hover:bg-blue-700 text-white px-4 md:px-6 py-3 rounded-lg transition-colors neon-border flex items-center justify-center text-sm md:text-base"
            >
              <MessageCircle className="h-4 w-4 md:h-5 md:w-5 mr-2" />
              Telegram Support
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FAQ;
