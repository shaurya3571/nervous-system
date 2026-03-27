import React, { useEffect, useRef } from 'react';
import './CustomCursor.css';

const CustomCursor = () => {
  const dotRef = useRef(null);
  const ringRef = useRef(null);

  useEffect(() => {
    // Only run on desktop/pointer devices
    if ('ontouchstart' in window || navigator.maxTouchPoints > 0) return;

    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;
    let ringX = mouseX;
    let ringY = mouseY;
    let isHovering = false;

    const onMouseMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;
      }
    };

    const isHoverable = (el) => {
      return (
        el.tagName.toLowerCase() === 'a' || 
        el.tagName.toLowerCase() === 'button' || 
        el.closest('a') !== null || 
        el.closest('button') !== null || 
        el.classList.contains('glass-panel') || 
        el.classList.contains('nav-brand') ||
        el.classList.contains('floating-label')
      );
    };

    const onMouseOver = (e) => {
      if (isHoverable(e.target)) {
        isHovering = true;
        if (ringRef.current) ringRef.current.classList.add('hovering');
      }
    };

    const onMouseOut = (e) => {
      if (isHoverable(e.target)) {
        isHovering = false;
        if (ringRef.current) ringRef.current.classList.remove('hovering');
      }
    };

    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mouseover', onMouseOver);
    window.addEventListener('mouseout', onMouseOut);

    const animate = () => {
      // Interpolation logic for the trailing effect on the ring
      const speed = isHovering ? 0.3 : 0.15;
      ringX += (mouseX - ringX) * speed;
      ringY += (mouseY - ringY) * speed;
      
      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${ringX}px, ${ringY}px, 0)`;
      }
      requestAnimationFrame(animate);
    };
    
    const animationId = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseover', onMouseOver);
      window.removeEventListener('mouseout', onMouseOut);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <>
      <div className="cursor-dot" ref={dotRef}></div>
      <div className="cursor-ring" ref={ringRef}></div>
    </>
  );
};

export default CustomCursor;
