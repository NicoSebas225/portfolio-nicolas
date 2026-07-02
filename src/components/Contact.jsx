import Button from "./ui/Button";

function Contact() {
  return (
    <section className="contact" id="contact">
      <div className="contact-grid">
        <div className="contact-left">
          <p className="section-tag">Contact</p>

          <h2>Ready for the next challenge.</h2>

          <p className="contact-description">
            I'm looking for opportunities where I can contribute as a Data
            Engineer or Full Stack Developer while building scalable, modern and
            impactful software.
          </p>

          <div className="contact-actions">
            <Button href="/Nicolas-Sebastian-Origlia-CV.pdf" variant="outline">
              View CV
            </Button>

            <Button href="https://www.linkedin.com/in/nicolasoriglia">
              LinkedIn
            </Button>
          </div>
        </div>

        <div className="contact-card">
          <h3>Professional Contact</h3>

          <div className="contact-item">
            <span>Email</span>
            <p>nicolas.sebastianoriglia@gmail.com</p>
          </div>

          <div className="contact-item">
            <span>Location</span>
            <p>Buenos Aires, Argentina</p>
          </div>

          <div className="contact-item">
            <span>LinkedIn</span>
            <p>linkedin.com/in/nicolasoriglia</p>
          </div>

          <div className="contact-item">
            <span>GitHub</span>
            <p>github.com/NicolasOriglia</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;