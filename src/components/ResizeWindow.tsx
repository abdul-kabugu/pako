import { useEffect } from 'react';

const ResizeWindowOnLoad = () => {
  useEffect(() => {
    const resizeWindow = () => {
      // Trigger window resize event
      window.dispatchEvent(new Event('resize'));
    };

    // Resize window on page load
    resizeWindow();

    // Clean up event listener
    return () => {
      window.removeEventListener('resize', resizeWindow);
    };
  }, []); // Run effect only once on component mount

  return null; // This component doesn't render anything
};

export default ResizeWindowOnLoad;
