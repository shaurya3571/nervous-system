import React, { useEffect, useState } from 'react';
import './Loader.css';

const Loader = () => {
  const [loading, setLoading] = useState(true);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    // Artificial 1.5s delay for cinematic startup sequence
    const timer = setTimeout(() => {
      setLoading(false);
      setTimeout(() => setVisible(false), 1200); // 1.2s cubic ease fade out
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  if (!visible) return null;

  return (
    <div className={`loader-container ${loading ? '' : 'fade-out'}`}>
      <div className="loader-content">
        <div className="loader-logo">BioVisionaries</div>
        <div className="loader-bar-container">
          <div className="loader-bar"></div>
        </div>
      </div>
    </div>
  );
};

export default Loader;
