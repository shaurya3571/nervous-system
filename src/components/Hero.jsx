import React, { useState, useRef, useEffect } from 'react';
import './Hero.css';
import brainDark from '../assets/brain_dark.png';

const Hero = () => {
  const containerRef = useRef(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, { threshold: 0.1 });

    const elements = document.querySelectorAll('#hero .animate-apple');
    elements.forEach(el => observer.observe(el));

    return () => elements.forEach(el => observer.unobserve(el));
  }, []);

  useEffect(() => {
    let animationFrameId;
    const handleMouseMove = (e) => {
      animationFrameId = requestAnimationFrame(() => {
        if (!containerRef.current) return;
        const rect = containerRef.current.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        
        // Calculate tilt degrees (Max 15deg)
        const rotateX = ((y - centerY) / centerY) * -15; 
        const rotateY = ((x - centerX) / centerX) * 15;
        
        setTilt({ x: rotateX, y: rotateY });
      });
    };

    const handleMouseLeave = () => {
      setTilt({ x: 0, y: 0 });
    };

    const container = containerRef.current;
    if (container) {
      container.addEventListener('mousemove', handleMouseMove);
      container.addEventListener('mouseleave', handleMouseLeave);
      return () => {
        container.removeEventListener('mousemove', handleMouseMove);
        container.removeEventListener('mouseleave', handleMouseLeave);
        cancelAnimationFrame(animationFrameId);
      };
    }
  }, []);

  return (
    <section id="hero" className="hero-section container">
      <div className="hero-content animate-apple delay-1">
        <p className="hero-subtitle accent-text">A 3D & Working Model Exploration</p>
        <h1 className="hero-title serif">Human Nervous<br/>System</h1>
        
        <div className="submission-block glass-panel animate-apple delay-3">
          <p className="submitted-to"><strong>Submitted to:</strong> Ms. Ambikah Gandhi Mathi A G</p>
          <p className="institution">SRM Institute of Science and Technology</p>
          <p className="academic-year">Academic Year: 2025–26 EVEN</p>
        </div>
      </div>
      
      <div 
        className="hero-visual animate-apple delay-2"
        ref={containerRef}
      >
        <div 
          className="visual-wrapper"
          style={{ 
            transform: `rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
            transition: tilt.x === 0 && tilt.y === 0 ? 'transform 1s cubic-bezier(0.16, 1, 0.3, 1)' : 'transform 0.1s linear'
          }}
        >
          <div className="brain-glow"></div>
          <div className="brain-zoom-wrapper">
            <img 
              src={brainDark}
              alt="3D Working Model of Human Brain" 
              className="brain-model"
            />
          </div>
          <div className="floating-label label-brain animate-apple delay-4">
            <span className="dot pulse-dot"></span>Brain
          </div>
          <div className="floating-label label-cord animate-apple delay-5">
            <span className="dot pulse-dot"></span>Spinal Cord
          </div>
          <div className="floating-label label-nerves animate-apple delay-5">
            <span className="dot pulse-dot"></span>Nerves
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
