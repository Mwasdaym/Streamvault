
import React, { useState } from 'react';
import { Mail, Phone, MessageCircle, Send, MapPin } from 'lucide-react';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import BackgroundVideo from '@/components/BackgroundVideo';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Create mailto link with form data
    const mailtoUrl = `mailto:support@streamvault.com?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    )}`;
    
    window.location.href = mailtoUrl;
    
    // Reset form
    setFormData({ name: '', email: '', subject: '', message: '' });
    alert('Email client opened. Please send the message from your email application.');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-blue-900 relative overflow-hidden">
      <BackgroundVideo />
      
      {/* Galaxy floating objects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute w-3 h-3 bg-purple-400 rounded-full animate-float opacity-30"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${4 + Math.random() * 3}s`
            }}
          />
        ))}
      </div>

      {/* Hero Section */}
      <section className="py-20 px-4 relative z-10">
        <div className="container mx-auto text-center">
          <div className="flex items-center justify-center mb-6">
            <MessageCircle className="h-12 w-12 text-purple-400 mr-4" />
            <h1 className="text-4xl md:text-6xl font-bold text-white">
              Contact Us
            </h1>
          </div>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Have questions or need support? We're here to help you 24/7. Reach out to us through any of our channels.
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 pb-16 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Contact Form */}
          <Card className="bg-white/10 backdrop-blur-md border border-purple-300/30 shadow-2xl shadow-purple-500/10 neon-border">
            <CardHeader>
              <h2 className="text-2xl font-bold text-white flex items-center">
                <Send className="h-6 w-6 mr-2 text-purple-400" />
                Send us a Message
              </h2>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-white text-sm font-medium mb-2">Name</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-white/20 border border-purple-300/50 rounded-lg text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                      placeholder="Your full name"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-white text-sm font-medium mb-2">Email</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-white/20 border border-purple-300/50 rounded-lg text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                      placeholder="your@email.com"
                      required
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-white text-sm font-medium mb-2">Subject</label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white/20 border border-purple-300/50 rounded-lg text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                    placeholder="What is this about?"
                    required
                  />
                </div>

                <div>
                  <label className="block text-white text-sm font-medium mb-2">Message</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={6}
                    className="w-full px-4 py-3 bg-white/20 border border-purple-300/50 rounded-lg text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                    placeholder="Tell us how we can help you..."
                    required
                  />
                </div>

                <Button type="submit" className="w-full bg-purple-600 hover:bg-purple-700 text-white font-bold py-3">
                  <Send className="h-4 w-4 mr-2" />
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-6">
            <Card className="bg-white/10 backdrop-blur-md border border-purple-300/30 shadow-2xl shadow-purple-500/10 neon-border">
              <CardHeader>
                <h3 className="text-xl font-bold text-white">Get in Touch</h3>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center text-white">
                  <Mail className="h-5 w-5 text-purple-400 mr-3" />
                  <div>
                    <p className="font-medium">Email</p>
                    <p className="text-gray-300">support@streamvault.com</p>
                  </div>
                </div>
                
                <div className="flex items-center text-white">
                  <Phone className="h-5 w-5 text-purple-400 mr-3" />
                  <div>
                    <p className="font-medium">Phone</p>
                    <p className="text-gray-300">+254 700 000000</p>
                  </div>
                </div>
                
                <div className="flex items-center text-white">
                  <MapPin className="h-5 w-5 text-purple-400 mr-3" />
                  <div>
                    <p className="font-medium">Location</p>
                    <p className="text-gray-300">Nairobi, Kenya</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white/10 backdrop-blur-md border border-purple-300/30 shadow-2xl shadow-purple-500/10 neon-border">
              <CardHeader>
                <h3 className="text-xl font-bold text-white">Quick Support</h3>
              </CardHeader>
              <CardContent className="space-y-4">
                <a href="https://wa.me/254700000000" className="flex items-center p-3 rounded-lg bg-green-600/20 hover:bg-green-600/30 transition-colors text-white">
                  <div className="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center mr-3">
                    📱
                  </div>
                  <div>
                    <p className="font-medium">WhatsApp Support</p>
                    <p className="text-sm text-gray-300">Get instant help</p>
                  </div>
                </a>
                
                <a href="https://t.me/streamvault" className="flex items-center p-3 rounded-lg bg-blue-600/20 hover:bg-blue-600/30 transition-colors text-white">
                  <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center mr-3">
                    ✈️
                  </div>
                  <div>
                    <p className="font-medium">Telegram Channel</p>
                    <p className="text-sm text-gray-300">Join our community</p>
                  </div>
                </a>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
