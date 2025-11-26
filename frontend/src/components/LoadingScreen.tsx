import { useEffect, useState } from 'react';

const LoadingScreen = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Check if mobile view
    const checkMobile = () => {
      const mobile = window.innerWidth <= 768;
      setIsMobile(mobile);
      if (!mobile) {
        setIsLoading(false);
      }
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);

    // Hide loading screen after page loads (only on mobile)
    if (window.innerWidth <= 768) {
      const timer = setTimeout(() => {
        setIsLoading(false);
      }, 2000); // Show for 2 seconds

      return () => {
        clearTimeout(timer);
        window.removeEventListener('resize', checkMobile);
      };
    }

    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  if (!isLoading || !isMobile) return null;

  return (
    <div className="loading-screen">
      <div className="loading-content">
        <div className="loading-logo-container">
          <img src="/assets/hero/logo.png" alt="Supreme Masqueraders Society" className="loading-logo" />
        </div>
        <div className="loading-text">
          <h2>Supreme Masqueraders Society</h2>
          <p>Empowering the youth through masquerade</p>
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;

