import React, { useState, useEffect } from 'react';
import { toast } from 'sonner';
import { ShoppingCart } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { useNavigate } from 'react-router-dom';
import ServiceCard from '@/components/ServiceCard';
import BackgroundVideo from '@/components/BackgroundVideo';

interface Service {
  title: string;
  icon: string;
  features: string[];
  price: number;
  originalPrice: number;
  discount: string;
  bgColor: string;
  hoverColor: string;
  isAvailable: boolean;
  mpesaUrl: string;
}

const Index = () => {
  const navigate = useNavigate();
  const [cart, setCart] = useState<Service[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const [services, setServices] = useState([
    {
      title: 'Netflix Premium',
      icon: 'fab fa-netflix',
      features: ['4K Ultra HD', 'Multiple Profiles', 'Download for Offline', 'No Ads'],
      price: 250,
      originalPrice: 1500,
      discount: '83% OFF',
      bgColor: 'bg-red-600',
      hoverColor: 'hover:bg-red-700',
      isAvailable: true,
      mpesaUrl: '/checkout/netflix-premium'
    },
    {
      title: 'YouTube Premium',
      icon: 'fab fa-youtube',
      features: ['Ad-Free Videos', 'Background Play', 'YouTube Music', 'Offline Downloads'],
      price: 200,
      originalPrice: 1200,
      discount: '83% OFF',
      bgColor: 'bg-red-500',
      hoverColor: 'hover:bg-red-600',
      isAvailable: true,
      mpesaUrl: 'https://checkout.flutterwave.com/v3/hosted/pay/carl24tech-youtube'
    },
    {
      title: 'YouTube Music',
      icon: 'fas fa-music',
      features: ['Ad-Free Music', 'Background Play', 'Offline Downloads', 'High Quality Audio'],
      price: 150,
      originalPrice: 800,
      discount: '81% OFF',
      bgColor: 'bg-purple-600',
      hoverColor: 'hover:bg-purple-700',
      isAvailable: true,
      mpesaUrl: '/order/youtube-music'
    },
    {
      title: 'CapCut Pro',
      icon: 'fas fa-video',
      features: ['Premium Templates', 'No Watermark', 'Advanced Effects', '4K Export'],
      price: 180,
      originalPrice: 900,
      discount: '80% OFF',
      bgColor: 'bg-pink-600',
      hoverColor: 'hover:bg-pink-700',
      isAvailable: true,
      mpesaUrl: 'https://paypal.me/carl24tech/18'
    },
    {
      title: 'Canva Pro',
      icon: 'fas fa-palette',
      features: ['Premium Templates', 'Brand Kit', 'Background Remover', 'Team Collaboration'],
      price: 220,
      originalPrice: 1000,
      discount: '78% OFF',
      bgColor: 'bg-blue-600',
      hoverColor: 'hover:bg-blue-700',
      isAvailable: true,
      mpesaUrl: '/checkout/canva-pro'
    },
    {
      title: 'Amazon Prime Video',
      icon: 'fab fa-amazon',
      features: ['Exclusive Originals', '4K Streaming', 'Multiple Devices', 'Offline Downloads'],
      price: 300,
      originalPrice: 1800,
      discount: '83% OFF',
      bgColor: 'bg-yellow-600',
      hoverColor: 'hover:bg-yellow-700',
      isAvailable: true,
      mpesaUrl: 'https://checkout.flutterwave.com/v3/hosted/pay/carl24tech-amazon'
    },
    {
      title: 'Showmax Pro',
      icon: 'fas fa-tv',
      features: ['Local Content', 'Live Sports', 'Multiple Devices', 'Offline Downloads'],
      price: 280,
      originalPrice: 1500,
      discount: '81% OFF',
      bgColor: 'bg-orange-600',
      hoverColor: 'hover:bg-orange-700',
      isAvailable: true,
      mpesaUrl: '/checkout/showmax-pro'
    },
    {
      title: 'Nord VPN',
      icon: 'fas fa-shield-alt',
      features: ['Military Grade Encryption', '60+ Countries', 'No Logs Policy', '6 Devices'],
      price: 350,
      originalPrice: 2000,
      discount: '82% OFF',
      bgColor: 'bg-indigo-600',
      hoverColor: 'hover:bg-indigo-700',
      isAvailable: true,
      mpesaUrl: 'https://stripe.com/checkout/carl24tech-nordvpn'
    },
    {
      title: 'Surfshark VPN',
      icon: 'fas fa-globe',
      features: ['Unlimited Devices', '65+ Countries', 'CleanWeb Feature', 'No Logs'],
      price: 320,
      originalPrice: 1800,
      discount: '82% OFF',
      bgColor: 'bg-teal-600',
      hoverColor: 'hover:bg-teal-700',
      isAvailable: true,
      mpesaUrl: '/checkout/surfshark-vpn'
    },
    {
      title: 'Pornhub Premium',
      icon: 'fas fa-heart',
      features: ['Ad-Free Experience', 'HD Videos', 'Exclusive Content', 'Download Videos'],
      price: 200,
      originalPrice: 1000,
      discount: '80% OFF',
      bgColor: 'bg-orange-500',
      hoverColor: 'hover:bg-orange-600',
      isAvailable: false,
      mpesaUrl: ''
    },
    {
      title: 'HDO Premium',
      icon: 'fas fa-film',
      features: ['Latest Movies', 'TV Shows', 'No Ads', 'Multiple Quality Options'],
      price: 150,
      originalPrice: 700,
      discount: '78% OFF',
      bgColor: 'bg-gray-600',
      hoverColor: 'hover:bg-gray-700',
      isAvailable: true,
      mpesaUrl: '/checkout/hdo-premium'
    }
  ]);

  useEffect(() => {
    const savedServices = localStorage.getItem('carl24tech_services');
    if (savedServices) {
      setServices(JSON.parse(savedServices));
    }
    setTimeout(() => setIsLoading(false), 500);
  }, []);

  const handleAddToCart = (serviceName: string, price: number) => {
    const serviceToAdd = services.find(service => service.title === serviceName);
    if (serviceToAdd) {
      setCart([...cart, serviceToAdd]);
      toast.success(`${serviceName} added to cart!`, {
        duration: 3000,
      });
    }
  };

  const handleBuyNow = (serviceName: string, price: number, mpesaUrl: string) => {
    // This function is now handled within ServiceCard component
    console.log(`Buy now clicked for ${serviceName}`);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-blue-900 relative overflow-hidden">
      {isLoading && (
        <div className="fixed inset-0 bg-black opacity-70 z-50 grid place-items-center">
          <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-purple-500"></div>
        </div>
      )}

      <BackgroundVideo />

      {/* Galaxy floating objects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
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
        <div className="container mx-auto text-center max-w-6xl">
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-4 md:mb-6">
            Unlock Premium Entertainment & Tools
          </h1>
          <p className="text-lg md:text-xl text-gray-300 mb-8 md:mb-12">
            Enjoy ad-free streaming, exclusive content, and powerful tools at unbeatable prices.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button
              onClick={() => navigate('/faq')}
              className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg transition-colors neon-border"
            >
              Frequently Asked Questions
            </button>
            <button
              onClick={() => navigate('/contact')}
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition-colors neon-border"
            >
              Contact Support
            </button>
          </div>

          {/* Trust Indicators */}
          <div className="mt-8 md:mt-12 grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
            <div className="bg-white/10 backdrop-blur-md rounded-lg p-3 md:p-4 border border-purple-300/30 neon-border">
              <div className="text-xl md:text-2xl font-bold text-green-400">10K+</div>
              <div className="text-xs md:text-sm text-gray-300">Happy Customers</div>
            </div>
            <div className="bg-white/10 backdrop-blur-md rounded-lg p-3 md:p-4 border border-purple-300/30 neon-border">
              <div className="text-xl md:text-2xl font-bold text-blue-400">99.8%</div>
              <div className="text-xs md:text-sm text-gray-300">Success Rate</div>
            </div>
            <div className="bg-white/10 backdrop-blur-md rounded-lg p-3 md:p-4 border border-purple-300/30 neon-border">
              <div className="text-xl md:text-2xl font-bold text-purple-400">&lt;2min</div>
              <div className="text-xs md:text-sm text-gray-300">Instant Delivery</div>
            </div>
            <div className="bg-white/10 backdrop-blur-md rounded-lg p-3 md:p-4 border border-purple-300/30 neon-border">
              <div className="text-xl md:text-2xl font-bold text-yellow-400">24/7</div>
              <div className="text-xs md:text-sm text-gray-300">Support</div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-12 md:py-20 px-4 relative z-10">
        <div className="container mx-auto max-w-7xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-8 md:mb-12">
            Premium Services Available
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
            {services.map((service) => (
              <ServiceCard
                key={service.title}
                {...service}
                onBuyNow={handleBuyNow}
                onAddToCart={handleAddToCart}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-12 md:py-20 px-4 relative z-10">
        <div className="container mx-auto max-w-5xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 md:mb-8">
            Why Choose Carl24Tech?
          </h2>
          <p className="text-lg md:text-xl text-gray-300 mb-8 md:mb-12">
            We provide reliable, instant, and affordable access to premium digital services.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            <div className="bg-white/10 backdrop-blur-md rounded-lg p-4 md:p-6 border border-purple-300/30 neon-border">
              <div className="text-2xl font-bold text-green-400 mb-2">Instant Delivery</div>
              <p className="text-sm md:text-base text-gray-300">
                Get your premium account details delivered instantly via email and SMS.
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-md rounded-lg p-4 md:p-6 border border-purple-300/30 neon-border">
              <div className="text-2xl font-bold text-blue-400 mb-2">100% Legitimacy</div>
              <p className="text-sm md:text-base text-gray-300">
                All our accounts are legitimate premium subscriptions sourced through official channels.
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-md rounded-lg p-4 md:p-6 border border-purple-300/30 neon-border">
              <div className="text-2xl font-bold text-yellow-400 mb-2">24/7 Support</div>
              <p className="text-sm md:text-base text-gray-300">
                Our dedicated support team is available 24/7 to assist you with any questions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-12 md:py-20 px-4 relative z-10">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 md:mb-8">
            What Our Customers Say
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            <div className="bg-white/10 backdrop-blur-md rounded-lg p-4 md:p-6 border border-purple-300/30 neon-border">
              <p className="text-sm md:text-base text-gray-300 italic mb-4">
                "Carl24Tech has been a game-changer for me. I can now enjoy ad-free YouTube and Netflix without breaking the bank!"
              </p>
              <div className="text-purple-400 font-bold">- Jane K.</div>
            </div>
            <div className="bg-white/10 backdrop-blur-md rounded-lg p-4 md:p-6 border border-purple-300/30 neon-border">
              <p className="text-sm md:text-base text-gray-300 italic mb-4">
                "I was skeptical at first, but Carl24Tech delivered exactly what they promised. Fast, reliable, and affordable premium services."
              </p>
              <div className="text-purple-400 font-bold">- John M.</div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-12 md:py-20 px-4 relative z-10">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 md:mb-8">
            Get Started Today!
          </h2>
          <p className="text-lg md:text-xl text-gray-300 mb-8 md:mb-12">
            Unlock premium entertainment and tools at unbeatable prices.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button
              onClick={() => navigate('/faq')}
              className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg transition-colors neon-border"
            >
              Explore Services
            </button>
            <button
              onClick={() => navigate('/contact')}
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition-colors neon-border"
            >
              Contact Support
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-6 md:py-8 px-4 relative z-10">
        <div className="container mx-auto text-center">
          <p className="text-sm text-gray-500">
            &copy; {new Date().getFullYear()} Carl24Tech. All rights reserved.
          </p>
        </div>
      </footer>

      {/* Floating Cart Button */}
      <button
        onClick={() => navigate('/cart')}
        className="fixed bottom-6 right-6 bg-purple-600 hover:bg-purple-700 text-white rounded-full p-3 md:p-4 shadow-lg transition-colors z-20 neon-border"
      >
        <div className="relative">
          <ShoppingCart className="h-6 w-6 md:h-7 md:w-7" />
          {cart.length > 0 && (
            <Badge className="absolute -top-2 -right-2 rounded-full bg-red-500 border-none text-white text-xs h-5 w-5 flex items-center justify-center">
              {cart.length}
            </Badge>
          )}
        </div>
      </button>
    </div>
  );
};

export default Index;
