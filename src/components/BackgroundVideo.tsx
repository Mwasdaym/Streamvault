
import React from 'react';

const BackgroundVideo = () => {
  return (
    <div className="absolute inset-0 overflow-hidden">
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover opacity-30"
      >
        <source src="/api/placeholder/video/galaxy-background.mp4" type="video/mp4" />
        <source src="/api/placeholder/video/galaxy-background.webm" type="video/webm" />
      </video>
      <div className="absolute inset-0 bg-gradient-to-r from-purple-900/70 via-transparent to-blue-900/70" />
    </div>
  );
};

export default BackgroundVideo;
