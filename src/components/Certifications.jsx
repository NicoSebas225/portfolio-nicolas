import SectionTitle from "./SectionTitle";

const certificates = [
  {
    title: "Advanced JavaScript",
    institution: "Educación IT",
    area: "Web Development",
  },
  {
    title: "Object-Oriented Programming with AI",
    institution: "Fundación Pescar · Educación IT",
    area: "Software Engineering",
  },
  {
    title: "Data Science with Python",
    institution: "Educación IT",
    area: "Data Science",
  },
  {
    title: "Power BI",
    institution: "Educación IT",
    area: "Business Intelligence",
  },
  {
    title: "Cybersecurity Fundamentals for Companies",
    institution: "Educación IT",
    area: "Cybersecurity",
  },
];

function Certifications() {
  return (
    <section className="certifications" id="certifications">
      <SectionTitle tag="Credentials" title="Additional training" />

      <div className="certifications-grid">
        {certificates.map((certificate) => (
          <article className="certificate-card" key={certificate.title}>
            <span>{certificate.area}</span>

            <h3>{certificate.title}</h3>

            <p translate="no">{certificate.institution}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Certifications;