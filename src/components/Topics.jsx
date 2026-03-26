import React, { useEffect, useRef } from 'react';
import './Topics.css';
import divisionsImg from '../assets/divisions.png';

const Topics = () => {
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
    <section id="topics" className="topics-section container" ref={sectionRef}>
      <div className="topics-header">
        <h2 className="section-title serif">Deep Dive.<br />Structure & Logic</h2>
        <div className="line-accent full"></div>
      </div>

      <div className="diagram-container">

        {/* Topic 2: The Neuron */}
        <div className="diagram-block glass-panel animate-apple">
          <div className="diagram-header">
            <h3> The Neuron <span>(The Specialist Cell)</span></h3>
            <p>Designed uniquely for electrical conduction.</p>
          </div>

          <div className="flowchart horizontal">
            <div className="flow-node">
              <div className="node-icon">📡</div>
              <h4>Dendrites</h4>
              <p>Listen & catch signals</p>
            </div>
            <div className="flow-arrow"></div>
            <div className="flow-node">
              <div className="node-icon">🧠</div>
              <h4>Cell Body (Soma) & Nucleus</h4>
              <p>Decides importance & Houses DNA</p>
            </div>
            <div className="flow-arrow"></div>
            <div className="flow-node highlight">
              <div className="node-icon">⚡</div>
              <h4>Axon + Myelin Sheath</h4>
              <p>One-way fast street separated by Nodes of Ranvier</p>
            </div>
            <div className="flow-arrow"></div>
            <div className="flow-node">
              <div className="node-icon">🌌</div>
              <h4>Axon Terminal</h4>
              <p>Connects to the muscle or next dendrite</p>
            </div>
          </div>
        </div>

        {/* Topic 3: Nerves */}
        <div className="diagram-block glass-panel animate-apple delay-1">
          <div className="diagram-header">
            <h3>Nerves & Divisions <span>(The Architecture)</span></h3>
            <p>Thick cable bundles mapping the entire body.</p>
          </div>

          <div className="box-layout split-with-image">
            <div className="nerve-visual-stack">
              <img src={divisionsImg} alt="Divisions of the Nervous System Flowchart" className="nerve-viz glass-panel" />

              <div className="glass-panel nerve-groups">
                <h4 className="accent-text">Spinal Nerve Groups</h4>
                <div className="groups-grid">
                  <span>• Cervical (C1–8)</span>
                  <span>• Thoracic (T1–12)</span>
                  <span>• Lumbar (L1–5)</span>
                  <span>• Sacral (S1–5)</span>
                  <span>• Coccygeal (1)</span>
                </div>
              </div>
            </div>

            <div className="tree-diagram vertical">
              <div className="tree-branch">
                <div className="tree-node afferent glass-panel">
                  <h4 className="accent-text" style={{ fontSize: '1.2rem', marginBottom: '1rem' }}>Autonomic Nervous System</h4>
                  <div className="sys-split">
                    <p><strong>Sympathetic:</strong> (Fight or Flight) Increases heart rate and blood pressure violently under stress.</p>
                    <hr className="sub-divider" />
                    <p><strong>Parasympathetic:</strong> (Rest & Digest) Returns body to state of rest; handles digestion and energy storage.</p>
                  </div>
                </div>
              </div>
              <div className="tree-branch">
                <div className="tree-node mixed glass-panel">
                  <h4 className="accent-text">Somatic Nerves</h4>
                  <p><strong>Sensory (Afferent):</strong> Carry "Input" UP to the brain.<br /><strong>Motor (Efferent):</strong> Carry "Output" DOWN to muscles.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Topic 4: The Brain */}
        <div className="diagram-block animate-apple delay-2" style={{ padding: '4rem 0' }}>
          <div className="diagram-header" style={{ marginBottom: '3rem' }}>
            <h3 style={{ marginBottom: '0.2rem' }}>The Brain Anatomy</h3>
            <p style={{ marginBottom: '1.5rem', color: 'var(--text-secondary)', fontSize: '1.1rem' }}>(The Main Center)</p>
            <p>The core computational engine of human consciousness.</p>
          </div>

          <div className="brain-grid-system">
            <div className="brain-card glass-panel" style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 4c-3.3 0-6 2.7-6 6 0 1.3.4 2.5 1.1 3.5.7 1 1.7 1.7 2.9 2v4c0 1.1.9 2 2 2h2c1.1 0 2-.9 2-2v-4c1.2-.3 2.2-1 2.9-2 .7-1 1.1-2.2 1.1-3.5 0-3.3-2.7-6-6-6Z" /><path d="M9 16v4" /><path d="M15 16v4" /></svg>
              <h4 className="accent-text" style={{ fontSize: '1.1rem', margin: 0 }}>Cerebrum (Lobes)</h4>
              <p style={{ fontSize: '0.9rem', lineHeight: '1.5', margin: 0 }}>Divided into Frontal, Parietal, Temporal, and Occipital lobes handling explicit thought, logic, and audio-visuals.</p>
            </div>
            <div className="brain-card glass-panel" style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" /><path d="M2 12h20" /></svg>
              <h4 className="accent-text" style={{ fontSize: '1.1rem', margin: 0 }}>Internal Structures</h4>
              <div style={{ fontSize: '0.9rem', lineHeight: '1.5', color: 'var(--text-secondary)', display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
                <p style={{ margin: 0 }}><strong>Corpus Callosum:</strong> Bridges hemispheres.</p>
                <p style={{ margin: 0 }}><strong>Pituitary Gland:</strong> Master hormone control.</p>
                <p style={{ margin: 0 }}><strong>Pons & Medulla Oblongata:</strong> Brain stem core.</p>
              </div>
            </div>
            <div className="brain-card glass-panel" style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96.44 2.5 2.5 0 0 1-2.96-3.08 3 3 0 0 1-.34-5.58 2.5 2.5 0 0 1 1.32-4.24 2.5 2.5 0 0 1 1.98-3A2.5 2.5 0 0 1 9.5 2Z" /><path d="M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96.44 2.5 2.5 0 0 0 2.96-3.08 3 3 0 0 0 .34-5.58 2.5 2.5 0 0 0-1.32-4.24 2.5 2.5 0 0 0-1.98-3A2.5 2.5 0 0 0 14.5 2Z" /></svg>
              <h4 className="accent-text" style={{ fontSize: '1.1rem', margin: 0 }}>Diencephalon</h4>
              <div style={{ fontSize: '0.9rem', lineHeight: '1.5', color: 'var(--text-secondary)', display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
                <p style={{ margin: 0 }}><strong>Thalamus:</strong> The sensory relay station.</p>
                <p style={{ margin: 0 }}><strong>Hypothalamus:</strong> Controls pituitary gland & homeostasis.</p>
              </div>
            </div>
            <div className="brain-card glass-panel" style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M16 18h.01" /><path d="M8 18h.01" /><path d="M12 18h.01" /><path d="M16 14h.01" /><path d="M8 14h.01" /><path d="M12 14h.01" /><path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10Z" /></svg>
              <h4 className="accent-text" style={{ fontSize: '1.1rem', margin: 0 }}>Cerebellum</h4>
              <p style={{ fontSize: '0.9rem', lineHeight: '1.5', margin: 0 }}>Coordinates complex muscle movement, physical balance, and posture.</p>
            </div>
          </div>

          <div className="protection-module-glow animate-apple delay-1">
            <h4 className="accent-text glowing-title">Protecting the Brain</h4>
            <div className="protection-split-new">
              <div className="protection-left" style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ marginBottom: '0.5rem' }}><path d="M12 4c-3.3 0-6 2.7-6 6 0 1.3.4 2.5 1.1 3.5.7 1 1.7 1.7 2.9 2v4c0 1.1.9 2 2 2h2c1.1 0 2-.9 2-2v-4c1.2-.3 2.2-1 2.9-2 .7-1 1.1-2.2 1.1-3.5 0-3.3-2.7-6-6-6Z" /></svg>
                <h5 style={{ fontSize: '1.1rem', color: '#fff', margin: 0 }}>Cerebrospinal Fluid</h5>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: '1.5', margin: 0 }}>Produced in 4 internal ventricles to cushion the physical mass.</p>
              </div>
              <div className="protection-right">
                <h5 style={{ fontSize: '1.1rem', color: '#fff', margin: '0 0 1rem 0' }}>Meninges (3 Layers)</h5>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
                  <span><strong>1. Dura Mater:</strong> Tough outer layer.</span>
                  <span><strong>2. Arachnoid:</strong> Web-like middle layer.</span>
                  <span><strong>3. Pia Mater:</strong> Thin inner layer on brain.</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Topic 5: Spinal Cord */}
        <div className="diagram-block glass-panel animate-apple delay-1">
          <div className="diagram-header">
            <h3>The Spine <span>(Information Highway)</span></h3>
            <p>Extends from Medulla Oblongata to 1st or 2nd lumbar vertebrae.</p>
          </div>

          <div className="box-layout three-cols">
            <div className="box-node glass-panel">
              <div className="box-tag">Gray Matter</div>
              <p>The dense internal area surrounded by white matter. Houses active synapses.</p>
            </div>
            <div className="box-node glass-panel">
              <div className="box-tag">White Matter</div>
              <p>Contains the vital insulated tracts that carry rapid impulses directly to & from the brain.</p>
            </div>
            <div className="box-node reflex glass-panel">
              <div className="box-tag dark">Reflex Action</div>
              <p>Spinal survival shortcut. Sends "MOVE!" before the brain even registers the pain.</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Topics;
