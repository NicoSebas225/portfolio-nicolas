import { useEffect, useState } from "react";

function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`navbar ${scrolled ? "navbar-scrolled" : ""}`}>
      <a href="#top" className="logo" translate="no">
        ON<span>.</span>
      </a>

      <nav>
        <a href="#about">About</a>
        <a href="#projects">Projects</a>
        <a href="#skills">Skills</a>
        <a href="#experience">Experience</a>
        <a href="#contact">Contact</a>
      </nav>

      <a
        className="nav-button"
        href="https://www.linkedin.com/in/nicolasoriglia"
        target="_blank"
        rel="noreferrer"
      >
        LinkedIn
      </a>
    </header>
  );
}

export default Navbar;