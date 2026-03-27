import React, { useState, useEffect } from 'react';
import Lenis from 'lenis';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProjectShowcase from './components/ProjectShowcase';
import About from './components/About';
import Topics from './components/Topics';
import Diseases from './components/Diseases';
import Team from './components/Team';
import BackgroundEffect from './components/BackgroundEffect';
import Loader from './components/Loader';
import CustomCursor from './components/CustomCursor';
import './index.css';

function App() {
  const [loaded, setLoaded] = useState(false);
  const [theme, setTheme] = useState(() => localStorage.getItem('theme') || 'dark');

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => setTheme(t => t === 'dark' ? 'light' : 'dark');

  useEffect(() => {
    const loadTimer = setTimeout(() => {
      setLoaded(true);
      document.body.classList.add('page-loaded');
    }, 1500);

    const lenis = new Lenis({
      duration: 1.4,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      direction: 'vertical',
      gestureDirection: 'vertical',
      smooth: true,
      smoothTouch: false,
      touchMultiplier: 2,
    });

    // Custom Spotlight Tracking for all Glass Panels
    const handleGlobalMouseMove = (e) => {
      document.querySelectorAll('.glass-panel').forEach(card => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        card.style.setProperty('--mouse-x', `${x}px`);
        card.style.setProperty('--mouse-y', `${y}px`);
      });
    };
    window.addEventListener('mousemove', handleGlobalMouseMove);

    // High-performance Parallax Engine
    lenis.on('scroll', (e) => {
      document.querySelectorAll('.parallax-layer').forEach(el => {
        const speed = parseFloat(el.getAttribute('data-speed')) || 0.1;
        el.style.transform = `translate3d(0, ${e.scroll * speed}px, 0)`;
      });
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    return () => {
      clearTimeout(loadTimer);
      window.removeEventListener('mousemove', handleGlobalMouseMove);
      lenis.destroy();
    };
  }, []);

  return (
    <div className={`app-wrapper ${loaded ? 'ready' : ''}`}>
      <Loader />
      <CustomCursor />
      <BackgroundEffect />
      <Navbar theme={theme} toggleTheme={toggleTheme} />
      <main>
        <Hero />
        <ProjectShowcase />
        <About />
        <Topics />
        <Diseases />
        <Team />
      </main>
    </div>
  );
}

export default App;
