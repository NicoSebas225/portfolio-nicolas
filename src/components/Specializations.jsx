import {
  FaDatabase,
  FaCode,
  FaServer,
  FaRobot,
  FaChartLine,
  FaPuzzlePiece,
} from "react-icons/fa";

import SectionTitle from "./SectionTitle";
import Card from "./ui/Card";

const specializations = [
  {
    icon: <FaDatabase />,
    title: "Data Engineering",
    text: "I work with data to organize, analyze and transform it into useful information for better decision-making.",
  },
  {
    icon: <FaCode />,
    title: "Full Stack Development",
    text: "I build web applications by connecting frontend, backend, databases and business logic.",
  },
  {
    icon: <FaServer />,
    title: "Backend Systems",
    text: "I develop server-side structures, APIs and database integrations focused on stability and scalability.",
  },
  {
    icon: <FaRobot />,
    title: "Automation",
    text: "I create solutions that optimize repetitive tasks, improve workflows and reduce operational time.",
  },
  {
    icon: <FaChartLine />,
    title: "Dashboards & BI",
    text: "I design reports and visual dashboards to turn complex information into clear indicators.",
  },
  {
    icon: <FaPuzzlePiece />,
    title: "Problem Solving",
    text: "I focus on understanding the real problem before choosing the right technical solution.",
  },
];

function Specializations() {
  return (
    <section className="specializations" id="specializations">
      <SectionTitle tag="Expertise" title="Areas where I add value" />

      <div className="specializations-grid">
        {specializations.map((item) => (
          <Card className="specialization-card" key={item.title}>
            <div className="specialization-icon">{item.icon}</div>
            <h3>{item.title}</h3>
            <p>{item.text}</p>
          </Card>
        ))}
      </div>
    </section>
  );
}

export default Specializations;