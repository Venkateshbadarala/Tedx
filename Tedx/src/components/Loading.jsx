import React, { useState, useEffect } from 'react';
import Xloading from './Xloading.webp';

const XLoadingAnimation = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isOffline, setIsOffline] = useState(!navigator.onLine);

  useEffect(() => {
    const handleOnline = () => setIsOffline(false);
    const handleOffline = () => setIsOffline(true);


    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    const handleLoad = () => {
      setIsLoading(false);
    };

    window.addEventListener('load', handleLoad);

  
    const loadingTimeout = setTimeout(() => {
      setIsLoading(false);
    }, 5000);

    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
      window.removeEventListener('load', handleLoad);
      clearTimeout(loadingTimeout);
    };
  }, []);

  return (
    <div className="flex items-center justify-center h-screen bg-black bg-opacity-60 backdrop-blur-sm">
      {isLoading && (
        <div className="circle">
        
          <img
            src={Xloading}
            alt="X Shape"
            className="x-image"
            loading="lazy"
            decoding="async"
          />
          <div className="water">
            <div className="wave wave1"></div>
            <div className="wave wave2"></div>
          </div>
        </div>
      )}
      {!isLoading && isOffline && (
        <div className="relative z-10 flex items-center justify-center h-screen">
          <h1 className="text-3xl font-bold text-red-600">
            You are offline. Please check your internet connection.
          </h1>
        </div>
      )}
    </div>
  );
};

export default XLoadingAnimation;
