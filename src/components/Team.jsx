import React, { useEffect, useRef } from 'react';
import './Team.css';

const Team = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) entry.target.classList.add('visible');
      });
    }, { threshold: 0.1 });

    const elements = sectionRef.current.querySelectorAll('.animate-apple');
    elements.forEach((el) => observer.observe(el));

    return () => elements.forEach((el) => observer.unobserve(el));
  }, []);

  const members = [
    { name: 'Shaurya', role: 'Website Developer', desc: 'Engineered the React architecture, structural styling, and dark mode mechanics.' },
    { name: 'Aryansh', role: 'UI/UX Designer', desc: 'Curated the editorial aesthetic, visual flowcharts, and overall layout strategy.' },
    { name: 'Vaibhav Kumar', role: 'Project Leader / Coordinator', desc: 'Orchestrated project timelines, team collaboration, and overall execution.' },
    { name: 'Stuti Verma', role: 'Research & Content Specialist', desc: 'Collected information about human nervous system and ensured reliable data presentation' },
    { name: 'Ishita Singh', role: 'Physical Model Creator', desc: 'Spearheaded the base structural design and material selection for the tangible anatomical models.' },
    { name: 'Riya Patil', role: 'Physical Model Creator', desc: 'Crafted the intricate neural pathways and realistic internal textures of the brain.' },
    { name: 'Adhiti Sorab', role: 'Documentation & Report Writer', desc: 'Drafted the technical documentation and comprehensive project reports.' },
    { name: 'Krishna Sharma', role: 'Physical Model Creator', desc: 'Engineered the final physical assembly and integrated components for interactive demonstration.' }
  ];

  return (
    <section id="team" className="team-section container" ref={sectionRef}>
      <div className="team-header animate-apple delay-1">
        <h2 className="section-title serif">The BioVisionaries</h2>
        <p className="subtitle" style={{ fontSize: '1.2rem', color: 'var(--text-secondary)', marginTop: '-2rem' }}>
          The brilliant minds behind this educational visual model.
        </p>
        <div className="line-accent full"></div>
      </div>

      <div className="team-grid">
        {members.map((member, i) => (
          <div className={`team-card glass-panel animate-apple delay-${(i % 4) + 1}`} key={member.name}>
            <div className="card-inner">
              <h3 className="serif">{member.name}</h3>
              <p className="role" style={{ marginBottom: member.reg ? '0.4rem' : '1.5rem' }}>{member.role}</p>
              {member.reg && <p style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', marginBottom: '1.2rem', letterSpacing: '0.05em' }}>{member.reg} • {member.dept}</p>}
              <div className="divider"></div>
              <p className="desc">{member.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Team;
