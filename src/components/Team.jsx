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
    { name: 'Krishna Sharma', role: 'Physical Model Creator', desc: 'Engineered the final physical assembly and integrated components for interactive demonstration.' },
    { name: 'Ishita Singh', role: 'Physical Model Creator', desc: 'Spearheaded the base structural design and material selection for the tangible anatomical models.' },
    { name: 'Riya Patil', role: 'Physical Model Creator', desc: 'Crafted the intricate neural pathways and realistic internal textures of the brain.' },
    { name: 'Adhiti Sorab', role: 'Documentation & Report Writer', desc: 'Drafted the technical documentation and comprehensive project reports.' }
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

      <div className="group-photo-container animate-apple delay-2">
        <img
          src="/team/group.jpg"
          alt="The BioVisionaries Team"
          className="group-photo"
          onError={(e) => {
            e.target.style.display = 'none';
            e.target.parentElement.classList.add('no-group-photo');
          }}
        />
      </div>

      <div className="team-grid">
        {members.map((member, i) => (
          <div className={`team-card glass-panel animate-apple delay-${(i % 4) + 3}`} key={member.name}>
            <div className="card-inner">
              <div className="member-photo-container">
                <img
                  src={`/team/${member.name.split(' ')[0].toLowerCase()}.jpg`}
                  alt={member.name}
                  className="member-photo"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.parentElement.classList.add('no-photo');
                  }}
                />
              </div>
              <h3 className="serif">{member.name}</h3>
              <p className="role" style={{ marginBottom: member.reg ? '0.4rem' : '1.5rem' }}>{member.role}</p>
              {member.reg && <p style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', marginBottom: '1.2rem', letterSpacing: '0.05em' }}>{member.reg} • {member.dept}</p>}
              <div className="divider"></div>
              <p className="desc">{member.desc}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="developer-footer animate-apple delay-4">
        <p className="dev-credit">Engineered & Designed by <span className="accent-text">Shaurya</span></p>
        <div className="social-links">
          <a href="https://github.com/shaurya3571" target="_blank" rel="noreferrer" aria-label="GitHub">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.24c3-.34 6-1.53 6-6.76a5.2 5.2 0 0 0-1.36-3.71 4.3 4.3 0 0 0-.1-3.64s-1.1-.35-3.6 1.34a12.8 12.8 0 0 0-6.8 0c-2.5-1.69-3.6-1.34-3.6-1.34a4.3 4.3 0 0 0-.1 3.64 5.2 5.2 0 0 0-1.36 3.71c0 5.22 3 6.42 6 6.76a4.8 4.8 0 0 0-1 3.24v4" /><path d="M9 19c-5 1.5-5-2.5-7-3" /></svg>
          </a>
          <a href="https://www.linkedin.com/in/shaurya3571/" target="_blank" rel="noreferrer" aria-label="LinkedIn">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect width="4" height="12" x="2" y="9" /><circle cx="4" cy="4" r="2" /></svg>
          </a>
          <a href="https://instagram.com/shaurya3571_" target="_blank" rel="noreferrer" aria-label="Instagram">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" x2="17.51" y1="6.5" y2="6.5" /></svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Team;
