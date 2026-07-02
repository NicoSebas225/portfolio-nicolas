import { useEffect, useState } from "react";

const navLinks = [
  { label: "About", href: "#about", id: "about" },
  { label: "Projects", href: "#projects", id: "projects" },
  { label: "Skills", href: "#skills", id: "skills" },
  { label: "Experience", href: "#experience", id: "experience" },
  { label: "Contact", href: "#contact", id: "contact" },
];

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);

      const currentSection = navLinks.find((link) => {
        const section = document.getElementById(link.id);
        if (!section) return false;

        const rect = section.getBoundingClientRect();
        return rect.top <= 180 && rect.bottom >= 180;
      });

      setActiveSection(currentSection?.id || "");
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
        {navLinks.map((link) => (
          <a
            key={link.id}
            href={link.href}
            className={activeSection === link.id ? "active-link" : ""}
          >
            {link.label}
          </a>
        ))}
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