import { useEffect, useState } from "react";

const loadingSteps = [
  "Initializing portfolio...",
  "Loading profile...",
  "Loading projects...",
  "Portfolio online.",
];

function HeroTerminal() {
  const [step, setStep] = useState(0);
  const isReady = step >= loadingSteps.length - 1;

  useEffect(() => {
    if (step < loadingSteps.length - 1) {
      const timer = setTimeout(() => {
        setStep(step + 1);
      }, 600);

      return () => clearTimeout(timer);
    }
  }, [step]);

  return (
    <div className="terminal-card dashboard-card hero-dashboard">
      <div className="dashboard-top">
        <div className="dashboard-status">
          <span></span>
          <p>PORTFOLIO ONLINE</p>
        </div>

        <small>v2.0.1</small>
      </div>

      <div className="dashboard-body">
        {!isReady ? (
          <div className="loading-panel">
            <p>{loadingSteps[step]}</p>

            <div className="loading-bar">
              <div style={{ width: `${(step + 1) * 25}%` }}></div>
            </div>

            <small>{(step + 1) * 25}%</small>
          </div>
        ) : (
          <>
            <div className="dashboard-intro">
              <span>PROFILE</span>
              <h3 translate="no">Nicolás Sebastián Origlia</h3>
              <p>Data Engineer · Full Stack Developer</p>
            </div>

            <div className="dashboard-mini-grid">
              <div>
                <span>Status</span>
                <p className="online">● Available</p>
              </div>

              <div>
                <span>Location</span>
                <p>Buenos Aires</p>
              </div>
            </div>

            <div className="dashboard-section compact">
              <span>Current focus</span>
              <p>Backend Systems</p>
              <p>Data Engineering</p>
              <p>Modern Web Apps</p>
            </div>

            <div className="dashboard-footer">
              <p>Ready to build</p>
              <strong>June 2026</strong>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default HeroTerminal;