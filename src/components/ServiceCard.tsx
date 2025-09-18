
import React from 'react';
import { Button } from '@/components/ui/button';
import { Circle } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface ServiceCardProps {
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
  onBuyNow: (serviceName: string, price: number, mpesaUrl: string) => void;
  onAddToCart: (serviceName: string, price: number) => void;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  title,
  icon,
  features,
  price,
  originalPrice,
  discount,
  bgColor,
  hoverColor,
  isAvailable,
  mpesaUrl,
  onBuyNow,
  onAddToCart
}) => {
  const navigate = useNavigate();

  const generateServiceSlug = (serviceName: string) => {
    return serviceName.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '');
  };

  const handleBuyNow = () => {
    const serviceSlug = generateServiceSlug(title);
    
    // Check if it's an external URL (starts with http/https)
    if (mpesaUrl && (mpesaUrl.startsWith('http://') || mpesaUrl.startsWith('https://'))) {
      // External payment processor - open in new tab
      window.open(mpesaUrl, '_blank', 'noopener,noreferrer');
    } else if (mpesaUrl) {
      // Internal custom URL - navigate within the app
      navigate(mpesaUrl);
    } else {
      // Default local checkout page
      navigate(`/checkout/${serviceSlug}`, {
        state: {
          service: {
            title,
            price,
            originalPrice,
            discount,
            features,
            icon
          }
        }
      });
    }
  };

  return (
    <div className="w-full max-w-sm mx-auto bg-white/10 backdrop-blur-md rounded-xl shadow-lg overflow-hidden border border-purple-300/30 hover:transform hover:scale-105 transition-all duration-300 neon-border">
      <div className={`${bgColor} p-4 text-white relative min-h-[120px] flex flex-col justify-between`}>
        <div className="absolute top-2 right-2">
          <Circle 
            className={`h-3 w-3 ${isAvailable ? 'text-green-400 fill-green-400' : 'text-red-400 fill-red-400'} animate-pulse-dot`}
          />
        </div>
        <div className="flex items-center">
          <i className={`${icon} text-3xl md:text-4xl`}></i>
        </div>
        <div>
          <h3 className="text-lg md:text-xl font-bold">{title}</h3>
          {title === 'Amazon Prime Video' && (
            <span className="bg-yellow-500 text-black text-xs px-2 py-1 rounded mt-1 inline-block">
              6 months fixed
            </span>
          )}
        </div>
      </div>
      <div className="p-4 md:p-6">
        <ul className="mb-4 md:mb-6 space-y-2 min-h-[120px]">
          {features.map((feature, index) => (
            <li key={index} className="text-sm md:text-base">
              <i className="fas fa-check text-green-500 mr-2"></i> {feature}
            </li>
          ))}
        </ul>
        <div className="mb-4 md:mb-6">
          <span className="text-2xl md:text-3xl font-bold text-white">KSh {price}</span>
          <span className="text-gray-400 line-through ml-2 text-sm md:text-base">KSh {originalPrice}</span>
          <span className="bg-green-100 text-green-800 text-xs md:text-sm font-medium ml-2 px-2 py-1 rounded">
            {discount}
          </span>
        </div>
        <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-2">
          <Button
            onClick={() => onAddToCart(title, price)}
            disabled={!isAvailable}
            className={`w-full sm:flex-1 ${bgColor} ${hoverColor} text-white font-bold py-2 md:py-3 px-3 md:px-4 rounded transition disabled:opacity-50 text-sm md:text-base`}
          >
            Add to Cart
          </Button>
          <Button
            onClick={handleBuyNow}
            disabled={!isAvailable}
            className="w-full sm:flex-1 bg-gray-800 hover:bg-gray-900 text-white font-bold py-2 md:py-3 px-3 md:px-4 rounded transition disabled:opacity-50 text-sm md:text-base"
          >
            Buy Now
          </Button>
        </div>
        {!isAvailable && (
          <p className="text-red-400 text-sm mt-2 text-center">Currently Unavailable</p>
        )}
        {isAvailable && !mpesaUrl && (
          <p className="text-yellow-400 text-sm mt-2 text-center">Payment URL not configured</p>
        )}
      </div>
    </div>
  );
};

export default ServiceCard;
