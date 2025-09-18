
import React, { useState } from 'react';
import { X, Phone, CreditCard, Link } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader } from '@/components/ui/card';

interface MpesaPaymentProps {
  isOpen: boolean;
  onClose: () => void;
  serviceName: string;
  price: number;
}

const MpesaPayment: React.FC<MpesaPaymentProps> = ({ isOpen, onClose, serviceName, price }) => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [mpesaUrl, setMpesaUrl] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);

  const handlePayment = async () => {
    if (!mpesaUrl.trim()) {
      alert('Please enter your M-Pesa integration URL');
      return;
    }
    
    setIsProcessing(true);
    
    // Simulate payment processing
    setTimeout(() => {
      setIsProcessing(false);
      alert(`Payment initiated for ${serviceName}. Redirecting to your M-Pesa integration: ${mpesaUrl}`);
      window.open(mpesaUrl, '_blank');
      onClose();
    }, 2000);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <Card className="w-full max-w-md bg-white border border-purple-300 shadow-2xl shadow-purple-500/20">
        <CardHeader className="flex flex-row items-center justify-between border-b border-purple-200">
          <div className="flex items-center">
            <CreditCard className="h-6 w-6 text-green-600 mr-2" />
            <h3 className="text-xl font-bold text-gray-800">M-Pesa Payment</h3>
          </div>
          <Button variant="ghost" size="sm" onClick={onClose}>
            <X className="h-5 w-5" />
          </Button>
        </CardHeader>
        
        <CardContent className="space-y-6 p-6">
          <div className="bg-gradient-to-r from-purple-50 to-blue-50 p-4 rounded-lg border border-purple-200">
            <h4 className="font-semibold text-gray-800">{serviceName}</h4>
            <p className="text-2xl font-bold text-green-600">KSh {price}</p>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              <Link className="h-4 w-4 inline mr-1" />
              M-Pesa Integration URL
            </label>
            <input
              type="url"
              value={mpesaUrl}
              onChange={(e) => setMpesaUrl(e.target.value)}
              placeholder="https://your-mpesa-integration-url.com"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
              required
            />
            <p className="text-xs text-gray-500 mt-1">Enter your M-Pesa payment gateway URL</p>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              <Phone className="h-4 w-4 inline mr-1" />
              M-Pesa Phone Number
            </label>
            <input
              type="tel"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              placeholder="254700000000"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
              required
            />
          </div>

          <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
            <p className="text-sm text-blue-800">
              📱 You will be redirected to your M-Pesa integration for payment processing.
            </p>
          </div>

          <div className="space-y-3">
            <Button
              onClick={handlePayment}
              disabled={!phoneNumber || !mpesaUrl || isProcessing}
              className="w-full bg-green-600 hover:bg-green-700 disabled:opacity-50"
            >
              {isProcessing ? (
                <>
                  <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                  Processing...
                </>
              ) : (
                'Pay with M-Pesa'
              )}
            </Button>
            
            <div className="text-center">
              <p className="text-xs text-gray-500">Need help?</p>
              <div className="flex justify-center space-x-4 mt-2">
                <a href="https://wa.me/254700000000" className="text-green-600 hover:text-green-700">
                  📱 WhatsApp
                </a>
                <a href="https://t.me/streamvault" className="text-blue-600 hover:text-blue-700">
                  ✈️ Telegram
                </a>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default MpesaPayment;
