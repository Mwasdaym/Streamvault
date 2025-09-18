
import React, { useState } from 'react';
import { Star, StarHalf, User, MessageSquare, ThumbsUp } from 'lucide-react';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import BackgroundVideo from '@/components/BackgroundVideo';

const Reviews = () => {
  const [newReview, setNewReview] = useState({
    name: '',
    service: '',
    rating: 5,
    comment: ''
  });

  const [reviews, setReviews] = useState([
    {
      id: 1,
      name: "John M.",
      service: "Netflix Premium",
      rating: 5,
      comment: "Got my Netflix account instantly after payment. Working perfectly for 3 months now. Highly recommended!",
      date: "2024-01-15",
      verified: true,
      likes: 23
    },
    {
      id: 2,
      name: "Sarah K.",
      service: "Canva Pro",
      rating: 5,
      comment: "The M-Pesa payment was so convenient and I received my Canva Pro login in under a minute. Amazing service!",
      date: "2024-01-10",
      verified: true,
      likes: 18
    },
    {
      id: 3,
      name: "David B.",
      service: "YouTube Premium",
      rating: 4.5,
      comment: "Bought YouTube Premium for my whole family. Great savings compared to official pricing. Will buy again!",
      date: "2024-01-08",
      verified: true,
      likes: 15
    },
    {
      id: 4,
      name: "Mary W.",
      service: "Nord VPN",
      rating: 5,
      comment: "Excellent VPN service! Fast speeds and works perfectly with streaming. Customer support is also very responsive.",
      date: "2024-01-05",
      verified: true,
      likes: 12
    },
    {
      id: 5,
      name: "Peter K.",
      service: "HDO Premium",
      rating: 5,
      comment: "HDO Premium is amazing! High quality streaming and vast movie collection. Carl24Tech delivered instantly!",
      date: "2024-01-03",
      verified: true,
      likes: 20
    }
  ]);

  const services = [
    "Netflix Premium", "YouTube Premium", "Nord VPN", "Surfshark VPN", 
    "YouTube Music", "Pornhub Premium", "HDO Premium", "CapCut Pro", 
    "Canva Pro", "Amazon Prime Video", "Showmax Pro"
  ];

  const renderStars = (rating: number) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    for (let i = 0; i < fullStars; i++) {
      stars.push(<Star key={i} className="h-4 w-4 fill-current text-yellow-400" />);
    }

    if (hasHalfStar) {
      stars.push(<StarHalf key="half" className="h-4 w-4 fill-current text-yellow-400" />);
    }

    const remainingStars = 5 - Math.ceil(rating);
    for (let i = 0; i < remainingStars; i++) {
      stars.push(<Star key={`empty-${i}`} className="h-4 w-4 text-gray-300" />);
    }

    return stars;
  };

  const handleSubmitReview = (e: React.FormEvent) => {
    e.preventDefault();
    
    const review = {
      id: reviews.length + 1,
      name: newReview.name,
      service: newReview.service,
      rating: newReview.rating,
      comment: newReview.comment,
      date: new Date().toISOString().split('T')[0],
      verified: false,
      likes: 0
    };
    
    setReviews([review, ...reviews]);
    setNewReview({ name: '', service: '', rating: 5, comment: '' });
    alert('Thank you for your review! It has been published.');
  };

  const handleLike = (reviewId: number) => {
    setReviews(reviews.map(review => 
      review.id === reviewId 
        ? { ...review, likes: review.likes + 1 }
        : review
    ));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-blue-900 relative overflow-hidden">
      <BackgroundVideo />
      
      {/* Galaxy floating objects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(25)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-blue-400 rounded-full animate-pulse-slow opacity-20"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
            }}
          />
        ))}
      </div>

      {/* Hero Section */}
      <section className="py-20 px-4 relative z-10">
        <div className="container mx-auto text-center">
          <div className="flex items-center justify-center mb-6">
            <MessageSquare className="h-12 w-12 text-purple-400 mr-4" />
            <h1 className="text-4xl md:text-6xl font-bold text-white">
              Customer Reviews
            </h1>
          </div>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Read what our customers say about our premium services and share your own experience.
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 pb-16 relative z-10">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Reviews List */}
          <div className="lg:col-span-2">
            <h2 className="text-2xl font-bold text-white mb-6">Customer Reviews ({reviews.length})</h2>
            <div className="space-y-6">
              {reviews.map((review) => (
                <Card key={review.id} className="bg-white/10 backdrop-blur-md border border-purple-300/30 shadow-2xl shadow-purple-500/10 neon-border">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div className="flex items-center">
                        <div className="w-12 h-12 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 flex items-center justify-center text-white font-bold mr-3">
                          <User className="h-6 w-6" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-white flex items-center">
                            {review.name}
                            {review.verified && (
                              <span className="ml-2 bg-green-500 text-white text-xs px-2 py-1 rounded-full">
                                ✓ Verified
                              </span>
                            )}
                          </h4>
                          <p className="text-purple-300 text-sm">{review.service}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="flex">
                          {renderStars(review.rating)}
                        </div>
                        <p className="text-gray-400 text-xs mt-1">{review.date}</p>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-300 mb-4">{review.comment}</p>
                    <div className="flex items-center justify-between">
                      <button 
                        onClick={() => handleLike(review.id)}
                        className="flex items-center text-purple-400 hover:text-purple-300 transition-colors"
                      >
                        <ThumbsUp className="h-4 w-4 mr-1" />
                        <span>{review.likes}</span>
                      </button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Review Form */}
          <div className="lg:col-span-1">
            <Card className="bg-white/10 backdrop-blur-md border border-purple-300/30 shadow-2xl shadow-purple-500/10 sticky top-6 neon-border">
              <CardHeader>
                <h3 className="text-xl font-bold text-white">Leave a Review</h3>
                <p className="text-gray-300 text-sm">Share your experience with other customers</p>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmitReview} className="space-y-4">
                  <div>
                    <label className="block text-white text-sm font-medium mb-2">Name</label>
                    <input
                      type="text"
                      value={newReview.name}
                      onChange={(e) => setNewReview({...newReview, name: e.target.value})}
                      className="w-full px-3 py-2 bg-white/20 border border-purple-300/50 rounded-md text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500"
                      placeholder="Your name"
                      required
                    />
                  </div>
                  
                  <div>
                    <label className="block text-white text-sm font-medium mb-2">Service</label>
                    <select
                      value={newReview.service}
                      onChange={(e) => setNewReview({...newReview, service: e.target.value})}
                      className="w-full px-3 py-2 bg-white/20 border border-purple-300/50 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                      required
                    >
                      <option value="" className="bg-gray-800">Select a service</option>
                      {services.map((service) => (
                        <option key={service} value={service} className="bg-gray-800">
                          {service}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-white text-sm font-medium mb-2">Rating</label>
                    <div className="flex space-x-1">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <button
                          key={star}
                          type="button"
                          onClick={() => setNewReview({...newReview, rating: star})}
                          className="focus:outline-none"
                        >
                          <Star
                            className={`h-6 w-6 ${
                              star <= newReview.rating 
                                ? 'text-yellow-400 fill-current' 
                                : 'text-gray-400'
                            }`}
                          />
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block text-white text-sm font-medium mb-2">Comment</label>
                    <textarea
                      value={newReview.comment}
                      onChange={(e) => setNewReview({...newReview, comment: e.target.value})}
                      className="w-full px-3 py-2 bg-white/20 border border-purple-300/50 rounded-md text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500"
                      placeholder="Share your experience..."
                      rows={4}
                      required
                    />
                  </div>

                  <Button type="submit" className="w-full bg-purple-600 hover:bg-purple-700 neon-border">
                    Submit Review
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
