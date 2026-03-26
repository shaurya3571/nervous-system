import React, { useEffect, useRef } from 'react';
import './Diseases.css';
import alzheimersImg from '../assets/alzheimers.png';
import parkinsonsImg from '../assets/parkinsons_new.png';
import epilepsyImg from '../assets/epilepsy_new.png';

const Diseases = () => {
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
    <section id="diseases" className="diseases-section container" ref={sectionRef}>
      <div className="topics-header">
        <h2 className="section-title serif">Neurological Conditions</h2>
        <p className="subtitle" style={{ fontSize: '1.2rem', color: 'var(--text-secondary)', marginTop: '-2rem' }}>
          Understanding the mechanical and electrochemical breakdowns of the nervous system.
        </p>
        <div className="line-accent full"></div>
      </div>

      <div className="diseases-grid">
        {/* Card 1 */}
        <div className="disease-card glass-panel animate-apple">
          <div className="disease-visual">
            <img src={alzheimersImg} alt="Alzheimer's Neuron Plaque Visualization" />
            <div className="disease-tag">Atrophy</div>
          </div>
          <div className="disease-content">
            <h3 className="serif">Alzheimer's Disease</h3>
            <p className="medical-meta">Impacts: Cerebral Cortex & Hippocampus</p>
            <div className="disease-details">
              <div className="detail-item">
                <div className="detail-icon"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><circle cx="12" cy="12" r="6" /><circle cx="12" cy="12" r="2" /></svg></div>
                <div className="detail-text">
                  <strong>Impact</strong> Progressive neurodegenerative disorder causing memory loss and cognitive decline; affects daily functioning.
                </div>
              </div>
              <div className="detail-item">
                <div className="detail-icon"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><line x1="12" y1="8" x2="12" y2="12" /><line x1="12" y1="16" x2="12.01" y2="16" /></svg></div>
                <div className="detail-text">
                  <strong>Symptoms</strong> Forgetfulness, confusion, difficulty in speaking, mood changes, poor judgment.
                </div>
              </div>
              <div className="detail-item">
                <div className="detail-icon"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="10" width="18" height="4" rx="1" /><rect x="10" y="3" width="4" height="18" rx="1" /></svg></div>
                <div className="detail-text">
                  <strong>Treatment</strong> No cure; managed with medications (e.g., cholinesterase inhibitors), cognitive therapy, lifestyle support, and caregiver assistance to slow progression.
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Card 2 */}
        <div className="disease-card glass-panel animate-apple delay-1">
          <div className="disease-visual">
            <img src={parkinsonsImg} alt="Parkinson's Dopamine Visualization" />
            <div className="disease-tag">Movement</div>
          </div>
          <div className="disease-content">
            <h3 className="serif">Parkinson's Disease</h3>
            <p className="medical-meta">Impacts: Substantia Nigra (Midbrain)</p>
            <div className="disease-details">
              <div className="detail-item">
                <div className="detail-icon"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><circle cx="12" cy="12" r="6" /><circle cx="12" cy="12" r="2" /></svg></div>
                <div className="detail-text">
                  <strong>Impact</strong> Affects movement due to loss of dopamine-producing neurons; worsens over time.
                </div>
              </div>
              <div className="detail-item">
                <div className="detail-icon"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><line x1="12" y1="8" x2="12" y2="12" /><line x1="12" y1="16" x2="12.01" y2="16" /></svg></div>
                <div className="detail-text">
                  <strong>Symptoms</strong> Tremors, muscle stiffness, slow movement (bradykinesia), balance issues.
                </div>
              </div>
              <div className="detail-item">
                <div className="detail-icon"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="10" width="18" height="4" rx="1" /><rect x="10" y="3" width="4" height="18" rx="1" /></svg></div>
                <div className="detail-text">
                  <strong>Treatment</strong> Medications like Levodopa, physical therapy, lifestyle changes; in severe cases, deep brain stimulation (DBS).
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Card 3 */}
        <div className="disease-card glass-panel animate-apple delay-2">
          <div className="disease-visual">
            <img src={epilepsyImg} alt="Epilepsy visualization" />
            <div className="disease-tag">Seizures</div>
          </div>
          <div className="disease-content">
            <h3 className="serif">Epilepsy</h3>
            <p className="medical-meta">Impacts: General Brain Activity</p>
            <div className="disease-details">
              <div className="detail-item">
                <div className="detail-icon"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><circle cx="12" cy="12" r="6" /><circle cx="12" cy="12" r="2" /></svg></div>
                <div className="detail-text">
                  <strong>Impact</strong> Chronic disorder causing repeated seizures due to abnormal brain activity; affects quality of life.
                </div>
              </div>
              <div className="detail-item">
                <div className="detail-icon"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><line x1="12" y1="8" x2="12" y2="12" /><line x1="12" y1="16" x2="12.01" y2="16" /></svg></div>
                <div className="detail-text">
                  <strong>Symptoms</strong> Seizures, loss of awareness, uncontrolled jerking, temporary confusion.
                </div>
              </div>
              <div className="detail-item">
                <div className="detail-icon"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="10" width="18" height="4" rx="1" /><rect x="10" y="3" width="4" height="18" rx="1" /></svg></div>
                <div className="detail-text">
                  <strong>Treatment</strong> Anti-epileptic drugs (AEDs), ketogenic diet, surgery or nerve stimulation in resistant cases.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Diseases;
