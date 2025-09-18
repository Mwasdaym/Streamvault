
import React, { useState } from 'react';
import { useParams, useLocation, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowLeft, CreditCard, Smartphone, ExternalLink } from 'lucide-react';
import { toast } from 'sonner';

const Checkout = () => {
  const { serviceSlug } = useParams();
  const location = useLocation();
  const navigate = useNavigate();
  const [isProcessing, setIsProcessing] = useState(false);
  
  const service = location.state?.service;

  if (!service) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-blue-900 flex items-center justify-center p-4">
        <div className="bg-white/10 backdrop-blur-md rounded-xl p-8 border border-purple-300/30 neon-border text-center">
          <h1 className="text-2xl font-bold text-white mb-4">Service Not Found</h1>
          <p className="text-gray-300 mb-6">The requested service could not be found.</p>
          <Button onClick={() => navigate('/')} className="bg-purple-600 hover:bg-purple-700">
            Return Home
          </Button>
        </div>
      </div>
    );
  }

  const handlePayment = (method: string) => {
    setIsProcessing(true);
    
    // Simulate payment processing
    setTimeout(() => {
      toast.success(`Payment initiated via ${method}! Check your ${method === 'mpesa' ? 'phone' : 'email'} for confirmation.`);
      setIsProcessing(false);
      
      // Redirect to success page after 2 seconds
      setTimeout(() => {
        navigate('/payment-success', {
          state: {
            service,
            method,
            transactionId: `CARL24-${Date.now()}`
          }
        });
      }, 2000);
    }, 3000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-blue-900 p-4">
      <div className="container mx-auto max-w-4xl py-8">
        {/* Header */}
        <div className="flex items-center mb-8">
          <Button
            onClick={() => navigate('/')}
            variant="ghost"
            className="text-white hover:bg-white/10 mr-4"
          >
            <ArrowLeft className="h-5 w-5 mr-2" />
            Back to Services
          </Button>
          <h1 className="text-3xl font-bold text-white">Secure Checkout</h1>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Order Summary */}
          <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-purple-300/30 neon-border">
            <h2 className="text-xl font-bold text-white mb-6">Order Summary</h2>
            
            <div className="flex items-start space-x-4 mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-600 to-blue-600 rounded-lg flex items-center justify-center">
                <i className={`${service.icon} text-2xl text-white`}></i>
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-white">{service.title}</h3>
                <div className="text-sm text-gray-300 mt-2">
                  {service.features.slice(0, 3).map((feature, index) => (
                    <div key={index} className="flex items-center">
                      <i className="fas fa-check text-green-500 mr-2"></i>
                      {feature}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="border-t border-gray-600 pt-4">
              <div className="flex justify-between items-center mb-2">
                <span className="text-gray-300">Original Price:</span>
                <span className="text-gray-400 line-through">KSh {service.originalPrice}</span>
              </div>
              <div className="flex justify-between items-center mb-2">
                <span className="text-gray-300">Discount:</span>
                <span className="text-green-400">{service.discount}</span>
              </div>
              <div className="flex justify-between items-center text-xl font-bold text-white">
                <span>Total:</span>
                <span>KSh {service.price}</span>
              </div>
            </div>
          </div>

          {/* Payment Methods */}
          <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-purple-300/30 neon-border">
            <h2 className="text-xl font-bold text-white mb-6">Choose Payment Method</h2>
            
            <div className="space-y-4">
              {/* M-Pesa Payment */}
              <button
                onClick={() => handlePayment('mpesa')}
                disabled={isProcessing}
                className="w-full p-4 bg-green-600 hover:bg-green-700 rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <Smartphone className="h-6 w-6 text-white mr-3" />
                    <div className="text-left">
                      <div className="text-white font-semibold">M-Pesa</div>
                      <div className="text-green-100 text-sm">Pay with your mobile money</div>
                    </div>
                  </div>
                  <ExternalLink className="h-5 w-5 text-white" />
                </div>
              </button>

              {/* Card Payment */}
              <button
                onClick={() => handlePayment('card')}
                disabled={isProcessing}
                className="w-full p-4 bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <CreditCard className="h-6 w-6 text-white mr-3" />
                    <div className="text-left">
                      <div className="text-white font-semibold">Credit/Debit Card</div>
                      <div className="text-blue-100 text-sm">Visa, Mastercard, etc.</div>
                    </div>
                  </div>
                  <ExternalLink className="h-5 w-5 text-white" />
                </div>
              </button>

              {/* PayPal */}
              <button
                onClick={() => handlePayment('paypal')}
                disabled={isProcessing}
                className="w-full p-4 bg-yellow-600 hover:bg-yellow-700 rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <i className="fab fa-paypal text-white text-2xl mr-3"></i>
                    <div className="text-left">
                      <div className="text-white font-semibold">PayPal</div>
                      <div className="text-yellow-100 text-sm">Secure online payments</div>
                    </div>
                  </div>
                  <ExternalLink className="h-5 w-5 text-white" />
                </div>
              </button>
            </div>

            {isProcessing && (
              <div className="mt-6 text-center">
                <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-purple-500 mx-auto mb-2"></div>
                <p className="text-gray-300">Processing your payment...</p>
              </div>
            )}

            <div className="mt-6 text-xs text-gray-400 text-center">
              <p>🔒 Your payment information is secure and encrypted</p>
              <p className="mt-1">By proceeding, you agree to our Terms of Service</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
