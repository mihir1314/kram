import React, { useState, useEffect } from 'react';
import '../CSS/ScrollUpButton.css';

function ScrollUpButton(){
    const [isVisible, setIsVisible] = useState(false);
  
    useEffect(() => {
      // Show/hide button based on scroll position
      const handleScroll = () => {
        if (window.scrollY > 300) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      };
  
      window.addEventListener('scroll', handleScroll);
  
      // Clean up event listener on component unmount
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);
  
    const scrollToTop = () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };
  
    return (
      <div
        className={`scroll-up-btn ${isVisible ? 'show' : ''}`}
        onClick={scrollToTop}
      >
        <span>&#9650;</span>
      </div>
    );
  };

  export default ScrollUpButton;