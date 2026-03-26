import React, { useEffect, useRef } from 'react';
import './About.css';
import neuronImg from '../assets/neuron.png';

const About = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = sectionRef.current.querySelectorAll('.animate-apple');
    elements.forEach((el) => observer.observe(el));

    return () => elements.forEach((el) => observer.unobserve(el));
  }, []);

  return (
    <section id="about" className="about-section container" ref={sectionRef}>
      <div className="about-grid">
        <div className="about-text-content">
          <h2 className="section-title serif animate-apple">The Network<br/>Within Us</h2>
          
          <div className="story-block animate-apple delay-1">
            <h3 className="story-subtitle">Why we chose this topic</h3>
            <p>
              The human nervous system is the ultimate command center, an intricate web of electrical impulses and chemical signals that defines our interaction with the universe. We embarked on this project to bridge the gap between microscopic neuroscience and tangible, 3D visualization, revealing the elegant asymmetry of our neural pathways.
            </p>
          </div>

          <div className="story-block animate-apple delay-2">
            <h3 className="story-subtitle">What makes it important</h3>
            <p>
              Understanding our neural architecture isn't just biology—it's the key to artificial intelligence, cognitive health, and the future of human augmentation. By mapping the pathways from the spinal cord to the cerebral cortex, we decode the very signals that make us human.
            </p>
          </div>
        </div>

        <div className="about-visual-content animate-apple delay-1">
          <div className="image-container">
            <img src={neuronImg} alt="Sketch illustration of neurons" className="neuron-sketch" />
            <div className="image-accent-box"></div>
          </div>
          
          <aside className="side-note-block animate-apple delay-3">
            <div className="side-note-header">
              <span className="icon">⚡</span>
              <h4>Did you know?</h4>
            </div>
            <p>Information travels along nerves at speeds up to <strong>268 mph</strong> (432 km/h), allowing the brain to react instantaneously to external stimuli.</p>
          </aside>
          
          <aside className="side-note-block secondary animate-apple delay-4">
            <div className="side-note-header">
              <span className="icon">🧠</span>
              <h4>Synaptic Density</h4>
            </div>
            <p>A single neuron can have up to <strong>10,000 synapses</strong>, linking it to thousands of others to form unimaginably complex processing networks.</p>
          </aside>



        </div>
      </div>
    </section>
  );
};

export default About;
