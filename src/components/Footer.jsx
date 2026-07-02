function Footer() {
  return (
    <footer className="footer">
      <div className="footer-main">
        <div>
          <h3>Nicolás Sebastián Origlia</h3>
          <p>Engineer. Developer. Problem Solver.</p>
        </div>

        <p className="footer-phrase">
          Always learning. Always building.
        </p>
      </div>

      <div className="footer-bottom">
        <p>© 2026 Nicolás Origlia</p>

        <div className="footer-links">
          <a href="mailto:nicolas.sebastianoriglia@gmail.com">Email</a>
          <a
            href="https://www.linkedin.com/in/nicolasoriglia"
            target="_blank"
          >
            LinkedIn
          </a>
          <a href="#top">Back to top ↑</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;