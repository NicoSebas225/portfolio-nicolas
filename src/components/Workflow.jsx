import SectionTitle from "./SectionTitle";

const steps = [
  {
    number: "01",
    title: "Understand",
    text: "I analyze the problem, context and real needs before choosing a technical solution.",
  },
  {
    number: "02",
    title: "Design",
    text: "I define a clear structure, the right technologies and an architecture that is easy to maintain.",
  },
  {
    number: "03",
    title: "Build",
    text: "I create functional, scalable and organized solutions using clean code and good practices.",
  },
  {
    number: "04",
    title: "Test",
    text: "I test, adjust and optimize each part to improve stability, performance and usability.",
  },
  {
    number: "05",
    title: "Deliver",
    text: "I deliver a solution ready to evolve, be documented and maintained over time.",
  },
];

function Workflow() {
  return (
    <section className="workflow" id="workflow">
      <SectionTitle tag="Workflow" title="How I approach each project" />

      <div className="workflow-track">
        {steps.map((step) => (
          <article className="workflow-step" key={step.number}>
            <div className="workflow-marker">{step.number}</div>
            <h3>{step.title}</h3>
            <p>{step.text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Workflow;