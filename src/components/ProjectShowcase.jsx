import React, { useEffect, useRef } from 'react';
import './ProjectShowcase.css';
import projectBoard from '../assets/project_board.jpg';

const ProjectShowcase = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add('visible');
        });
      },
      { threshold: 0.1 }
    );
    const elements = sectionRef.current.querySelectorAll('.animate-apple');
    elements.forEach((el) => observer.observe(el));
    return () => elements.forEach((el) => observer.unobserve(el));
  }, []);

  return (
    <section id="showcase" className="showcase-section container" ref={sectionRef}>
      <div className="showcase-header animate-apple delay-1">
        <h2 className="section-title serif">The Physical Model</h2>
        <div className="line-accent full"></div>
      </div>
      
      <div className="showcase-content glass-panel animate-apple delay-2">
        <div className="image-wrapper">
          <img src={projectBoard} alt="BioVisionaries Physical Nervous System Model" className="project-board-img" />
          <div className="scan-line"></div>
        </div>
        <div className="showcase-caption">
          <h3>Interactive Neural Architecture</h3>
          <p>This is the tangible, fully-illuminated 3D model constructed by the BioVisionaries. Featuring meticulously mapped cranial and peripheral nerves, integrated active LED pathways simulating action potentials, and detailed structural zones spanning from the cerebral cortex down to the spinal cord.</p>
        </div>
      </div>
    </section>
  );
};

export default ProjectShowcase;
