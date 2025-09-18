
import React from 'react';

const LoadingScreen = () => {
  return (
    <div className="fixed inset-0 bg-gradient-to-br from-gray-900 via-purple-900 to-blue-900 flex items-center justify-center z-50">
      <div className="text-center">
        <div className="mb-8">
          <div className="text-purple-500 text-6xl mb-4 animate-pulse">🏦</div>
          <h1 className="text-white text-4xl font-bold mb-2">StreamVault</h1>
          <p className="text-purple-300">Loading premium experiences...</p>
        </div>
        
        {/* Loading Animation */}
        <div className="relative w-64 h-2 bg-gray-700 rounded-full overflow-hidden">
          <div className="absolute top-0 left-0 h-full bg-gradient-to-r from-purple-500 to-blue-500 rounded-full animate-loading-bar"></div>
        </div>
        
        {/* Floating Particles */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-purple-400 rounded-full animate-float opacity-20"
              style={{
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${3 + Math.random() * 2}s`
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;
