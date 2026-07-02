import SectionTitle from "./SectionTitle";

const experiences = [
  {
    year: "2025",
    label: "Professional Project",
    title: "Fundación Pescar",
    text: "Collaborative development of a web application for managing veterinary appointments, strengthening teamwork, agile methods and Full Stack development skills.",
  },
  {
    year: "2024",
    label: "University",
    title: "Data Engineering",
    text: "University degree completed at Universidad Tecnológica Nacional, focused on data engineering, information analysis and technology solutions.",
  },
  {
    year: "2021 - Present",
    label: "University",
    title: "Information Systems Engineering",
    text: "Current university studies at Universidad Tecnológica Nacional, focused on software development, systems architecture and information technology.",
  },
  {
    year: "2022 - 2024",
    label: "Professional Experience",
    title: "OCASA | Logistics Operator",
    text: "Dispatch management, customer service, data entry control and operational tracking.",
  },
];

function Experience() {
  return (
    <section className="experience" id="experience">
      <SectionTitle tag="Journey" title="Education and experience" />

      <div className="experience-grid">
        {experiences.map((item) => (
          <article className="experience-card" key={item.title}>
            <div className="experience-top">
              <span>{item.year}</span>
              <p>{item.label}</p>
            </div>

            <h3>{item.title}</h3>
            <p>{item.text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Experience;