import React, { useEffect, useState } from 'react';
import './BackgroundEffect.css';

const BackgroundEffect = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    let animationFrameId;
    
    // Smooth cursor follow using lerp can be done, but simple translation is very fast using transform
    const handleMouseMove = (e) => {
      animationFrameId = requestAnimationFrame(() => {
        setMousePos({ x: e.clientX, y: e.clientY });
      });
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="bg-effects-container">
      {/* Dynamic Cursor Glow */}
      <div 
        className="cursor-glow"
        style={{ transform: `translate3d(${mousePos.x - 300}px, ${mousePos.y - 300}px, 0)` }}
      ></div>
      
      {/* Animated Gradient Mesh */}
      <div className="gradient-mesh">
        <div className="mesh-blob blob-1"></div>
        <div className="mesh-blob blob-2"></div>
        <div className="mesh-blob blob-3"></div>
      </div>

      {/* Floating Particles Overlay */}
      <div className="particles-overlay"></div>
      
      {/* Noise Texture layer for premium feel */}
      <div className="noise-overlay"></div>
    </div>
  );
};

export default BackgroundEffect;
