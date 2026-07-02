import SectionTitle from "./SectionTitle";

function About() {
  return (
    <section className="about" id="about">
      <SectionTitle tag="Who I Am" title="Professional Profile" />

      <div className="about-grid">
        <div className="about-text">
          <p>
            I am a Data Engineer and Full Stack Developer focused on building
            practical, scalable and reliable technology solutions.
          </p>

          <p>
            I enjoy combining software development, databases, automation and
            data analysis to turn ideas into functional digital products.
          </p>
        </div>

        <div className="about-cards">
          <div className="about-card">Data Engineering</div>
          <div className="about-card">Full Stack Development</div>
          <div className="about-card">Databases</div>
          <div className="about-card">Automation</div>
        </div>
      </div>
    </section>
  );
}

export default About;