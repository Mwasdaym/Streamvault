
import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { CheckCircle, Download, Mail, MessageCircle } from 'lucide-react';

const PaymentSuccess = () => {
  const location = useLocation();
  const navigate = useNavigate();
  
  const { service, method, transactionId } = location.state || {};

  if (!service) {
    navigate('/');
    return null;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-blue-900 flex items-center justify-center p-4">
      <div className="bg-white/10 backdrop-blur-md rounded-xl p-8 border border-purple-300/30 neon-border max-w-2xl w-full text-center">
        <CheckCircle className="h-16 w-16 text-green-400 mx-auto mb-6" />
        
        <h1 className="text-3xl font-bold text-white mb-4">Payment Successful!</h1>
        
        <p className="text-gray-300 mb-6">
          Your purchase of <span className="text-purple-400 font-semibold">{service.title}</span> has been confirmed.
        </p>

        <div className="bg-white/5 rounded-lg p-4 mb-6 text-left">
          <h3 className="text-lg font-semibold text-white mb-3">Order Details</h3>
          <div className="space-y-2 text-sm">
            <div className="flex justify-between">
              <span className="text-gray-300">Service:</span>
              <span className="text-white">{service.title}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-300">Amount Paid:</span>
              <span className="text-white">KSh {service.price}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-300">Payment Method:</span>
              <span className="text-white capitalize">{method}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-300">Transaction ID:</span>
              <span className="text-white font-mono">{transactionId}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-300">Date:</span>
              <span className="text-white">{new Date().toLocaleDateString()}</span>
            </div>
          </div>
        </div>

        <div className="bg-blue-600/20 border border-blue-400/30 rounded-lg p-4 mb-6">
          <Mail className="h-6 w-6 text-blue-400 mx-auto mb-2" />
          <p className="text-blue-200 text-sm">
            Account credentials and setup instructions have been sent to your email.
            Please check your inbox and spam folder.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
          <Button className="bg-green-600 hover:bg-green-700 flex items-center justify-center">
            <Download className="h-4 w-4 mr-2" />
            Download Receipt
          </Button>
          <Button 
            variant="outline" 
            className="border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white flex items-center justify-center"
          >
            <MessageCircle className="h-4 w-4 mr-2" />
            Contact Support
          </Button>
        </div>

        <div className="space-y-3">
          <Button 
            onClick={() => navigate('/')}
            className="w-full bg-purple-600 hover:bg-purple-700"
          >
            Return to Homepage
          </Button>
          
          <p className="text-xs text-gray-400">
            Need help? Contact our 24/7 support team at support@carl24tech.com
          </p>
        </div>
      </div>
    </div>
  );
};

export default PaymentSuccess;
