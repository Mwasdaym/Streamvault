
import React, { useState } from 'react';
import { Settings as SettingsIcon, Save, Link, Circle, AlertCircle, CheckCircle } from 'lucide-react';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import BackgroundVideo from '@/components/BackgroundVideo';

interface ServiceConfig {
  name: string;
  mpesaUrl: string;
  isAvailable: boolean;
  price: number;
  originalPrice: number;
}

const Settings = () => {
  const [services, setServices] = useState<ServiceConfig[]>([
    { 
      name: 'Netflix Premium', 
      mpesaUrl: 'https://checkout.flutterwave.com/v3/hosted/pay/carl24tech-netflix', 
      isAvailable: true,
      price: 250,
      originalPrice: 1500 
    },
    { 
      name: 'YouTube Premium', 
      mpesaUrl: 'https://checkout.flutterwave.com/v3/hosted/pay/carl24tech-youtube', 
      isAvailable: true,
      price: 200,
      originalPrice: 1200 
    },
    { 
      name: 'YouTube Music', 
      mpesaUrl: 'https://checkout.flutterwave.com/v3/hosted/pay/carl24tech-youtube-music', 
      isAvailable: true,
      price: 150,
      originalPrice: 800 
    },
    { 
      name: 'CapCut Pro', 
      mpesaUrl: 'https://checkout.flutterwave.com/v3/hosted/pay/carl24tech-capcut', 
      isAvailable: true,
      price: 180,
      originalPrice: 900 
    },
    { 
      name: 'Canva Pro', 
      mpesaUrl: 'https://checkout.flutterwave.com/v3/hosted/pay/carl24tech-canva', 
      isAvailable: true,
      price: 220,
      originalPrice: 1000 
    },
    { 
      name: 'Amazon Prime Video', 
      mpesaUrl: 'https://checkout.flutterwave.com/v3/hosted/pay/carl24tech-amazon', 
      isAvailable: true,
      price: 300,
      originalPrice: 1800 
    },
    { 
      name: 'Showmax Pro', 
      mpesaUrl: 'https://checkout.flutterwave.com/v3/hosted/pay/carl24tech-showmax', 
      isAvailable: true,
      price: 280,
      originalPrice: 1500 
    },
    { 
      name: 'Nord VPN', 
      mpesaUrl: 'https://checkout.flutterwave.com/v3/hosted/pay/carl24tech-nordvpn', 
      isAvailable: true,
      price: 350,
      originalPrice: 2000 
    },
    { 
      name: 'Surfshark VPN', 
      mpesaUrl: 'https://checkout.flutterwave.com/v3/hosted/pay/carl24tech-surfshark', 
      isAvailable: true,
      price: 320,
      originalPrice: 1800 
    },
    { 
      name: 'Pornhub Premium', 
      mpesaUrl: 'https://checkout.flutterwave.com/v3/hosted/pay/carl24tech-pornhub', 
      isAvailable: false,
      price: 200,
      originalPrice: 1000 
    },
    { 
      name: 'HDO Premium', 
      mpesaUrl: 'https://checkout.flutterwave.com/v3/hosted/pay/carl24tech-hdo', 
      isAvailable: true,
      price: 150,
      originalPrice: 700 
    },
  ]);

  const [saveStatus, setSaveStatus] = useState<'idle' | 'saving' | 'success' | 'error'>('idle');

  const updateService = (index: number, field: keyof ServiceConfig, value: string | boolean | number) => {
    const updatedServices = [...services];
    updatedServices[index] = { ...updatedServices[index], [field]: value };
    setServices(updatedServices);
  };

  const saveSettings = () => {
    setSaveStatus('saving');
    try {
      localStorage.setItem('carl24tech_services', JSON.stringify(services));
      setSaveStatus('success');
      setTimeout(() => setSaveStatus('idle'), 3000);
    } catch (error) {
      setSaveStatus('error');
      setTimeout(() => setSaveStatus('idle'), 3000);
    }
  };

  const loadSettings = () => {
    const saved = localStorage.getItem('carl24tech_services');
    if (saved) {
      setServices(JSON.parse(saved));
    }
  };

  const exportSettings = () => {
    const dataStr = JSON.stringify(services, null, 2);
    const dataUri = 'data:application/json;charset=utf-8,'+ encodeURIComponent(dataStr);
    const exportFileDefaultName = 'carl24tech-settings.json';
    const linkElement = document.createElement('a');
    linkElement.setAttribute('href', dataUri);
    linkElement.setAttribute('download', exportFileDefaultName);
    linkElement.click();
  };

  React.useEffect(() => {
    loadSettings();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-blue-900 relative overflow-hidden">
      <BackgroundVideo />
      
      {/* Galaxy floating objects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(25)].map((_, i) => (
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
      
      <div className="container mx-auto px-4 py-6 md:py-8 relative z-10 max-w-6xl">
        <div className="flex items-center mb-6 md:mb-8">
          <SettingsIcon className="h-6 w-6 md:h-8 md:w-8 text-purple-400 mr-3" />
          <h1 className="text-2xl md:text-3xl font-bold text-white">Service Management Dashboard</h1>
        </div>

        {/* Status Indicator */}
        {saveStatus !== 'idle' && (
          <div className={`mb-6 p-4 rounded-lg border ${
            saveStatus === 'success' ? 'bg-green-600/20 border-green-500/50 text-green-300' :
            saveStatus === 'error' ? 'bg-red-600/20 border-red-500/50 text-red-300' :
            'bg-blue-600/20 border-blue-500/50 text-blue-300'
          } neon-border`}>
            <div className="flex items-center">
              {saveStatus === 'success' && <CheckCircle className="h-5 w-5 mr-2" />}
              {saveStatus === 'error' && <AlertCircle className="h-5 w-5 mr-2" />}
              <span>
                {saveStatus === 'saving' && 'Saving settings...'}
                {saveStatus === 'success' && 'Settings saved successfully!'}
                {saveStatus === 'error' && 'Error saving settings. Please try again.'}
              </span>
            </div>
          </div>
        )}

        <Card className="bg-white/10 backdrop-blur-md border border-purple-300/30 mb-6 md:mb-8 neon-border">
          <CardHeader>
            <h2 className="text-lg md:text-xl font-bold text-white">Payment Integration & Service Configuration</h2>
            <p className="text-gray-300 text-sm md:text-base">Manage M-Pesa URLs, pricing, and service availability for all premium offerings</p>
          </CardHeader>
          <CardContent className="space-y-4 md:space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6">
              {services.map((service, index) => (
                <div key={service.name} className="bg-white/5 p-4 md:p-6 rounded-lg border border-purple-300/20 neon-border">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-white font-medium text-sm md:text-base">{service.name}</h3>
                    <div className="flex items-center space-x-2">
                      <span className="text-white text-xs md:text-sm">Available:</span>
                      <button
                        onClick={() => updateService(index, 'isAvailable', !service.isAvailable)}
                        className="relative"
                      >
                        <Circle 
                          className={`h-4 w-4 ${service.isAvailable ? 'text-green-500 fill-green-500' : 'text-red-500 fill-red-500'} transition-colors`}
                        />
                      </button>
                    </div>
                  </div>
                  
                  {/* Pricing */}
                  <div className="grid grid-cols-2 gap-2 md:gap-4 mb-4">
                    <div>
                      <label className="block text-xs md:text-sm text-gray-300 mb-1">Price (KSh)</label>
                      <input
                        type="number"
                        value={service.price}
                        onChange={(e) => updateService(index, 'price', parseInt(e.target.value) || 0)}
                        className="w-full px-2 md:px-3 py-1 md:py-2 bg-white/10 border border-purple-300/50 rounded text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500 text-sm md:text-base"
                      />
                    </div>
                    <div>
                      <label className="block text-xs md:text-sm text-gray-300 mb-1">Original Price (KSh)</label>
                      <input
                        type="number"
                        value={service.originalPrice}
                        onChange={(e) => updateService(index, 'originalPrice', parseInt(e.target.value) || 0)}
                        className="w-full px-2 md:px-3 py-1 md:py-2 bg-white/10 border border-purple-300/50 rounded text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500 text-sm md:text-base"
                      />
                    </div>
                  </div>
                  
                  {/* Payment URL */}
                  <div className="flex items-center space-x-2">
                    <Link className="h-4 w-4 text-purple-400 flex-shrink-0" />
                    <input
                      type="url"
                      value={service.mpesaUrl}
                      onChange={(e) => updateService(index, 'mpesaUrl', e.target.value)}
                      placeholder="Enter payment gateway URL"
                      className="flex-1 px-2 md:px-3 py-1 md:py-2 bg-white/10 border border-purple-300/50 rounded text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500 text-sm md:text-base"
                    />
                  </div>
                  
                  {service.mpesaUrl && (
                    <div className="mt-2 text-xs text-green-400">
                      ✓ Payment URL configured
                    </div>
                  )}
                </div>
              ))}
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                onClick={saveSettings} 
                disabled={saveStatus === 'saving'}
                className="flex-1 bg-purple-600 hover:bg-purple-700 disabled:opacity-50"
              >
                <Save className="h-4 w-4 mr-2" />
                {saveStatus === 'saving' ? 'Saving...' : 'Save Configuration'}
              </Button>
              <Button 
                onClick={exportSettings}
                variant="outline"
                className="flex-1 border-purple-500 text-purple-300 hover:bg-purple-600/20"
              >
                Export Settings
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Integration Guide */}
        <Card className="bg-white/10 backdrop-blur-md border border-purple-300/30 neon-border">
          <CardHeader>
            <h2 className="text-lg md:text-xl font-bold text-white">Integration Guide</h2>
          </CardHeader>
          <CardContent>
            <div className="space-y-4 text-gray-300 text-sm md:text-base">
              <div>
                <h3 className="text-white font-medium mb-2">Supported Payment Gateways:</h3>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>Flutterwave (Recommended for Kenya)</li>
                  <li>Paystack (Nigeria, Ghana)</li>
                  <li>Pesapal (East Africa)</li>
                  <li>DPO Group (Multi-country)</li>
                  <li>Custom M-Pesa STK Push integrations</li>
                </ul>
              </div>
              <div>
                <h3 className="text-white font-medium mb-2">URL Format Examples:</h3>
                <code className="block bg-black/30 p-2 md:p-3 rounded text-xs md:text-sm">
                  https://checkout.flutterwave.com/v3/hosted/pay/your-payment-link<br/>
                  https://paystack.com/pay/your-payment-code<br/>
                  https://www.pesapal.com/iframe/PesapalIframe3/Index/?pesapalMerchantReference=your-ref
                </code>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Settings;
