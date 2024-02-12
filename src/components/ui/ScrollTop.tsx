import React, { useState, useEffect } from 'react';
import { Button } from './button';
const ScrollTop= () => {
  const [isVisible, setIsVisible] = useState(false);

  // Function to scroll to the top
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  // Function to handle scroll event
  const handleScroll = () => {
    if (window.pageYOffset > 50) { // Adjust this value as needed
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Effect to add scroll event listener
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <Button>
        <button
          className={`scroll-to-top-button ${isVisible ? 'show' : 'hide'}`}
          onClick={scrollToTop}
        >
          Scroll To Top
        </button>
    </Button>
  );
};

export default ScrollTop;
