import {
  SiPython,
  SiJavascript,
  SiTypescript,
  SiNodedotjs,
  SiMongodb,
  SiSqlite,
  SiPhp,
} from "react-icons/si";

import {
  FaJava,
  FaHtml5,
  FaCss3Alt,
  FaReact,
} from "react-icons/fa";

import { TbBrandCSharp, TbBrandCpp } from "react-icons/tb";
import { DiMsqlServer } from "react-icons/di";

import SectionTitle from "./SectionTitle";

const technologies = [
  { name: "Python", category: "Data / Backend", icon: <SiPython /> },
  { name: "JavaScript", category: "Frontend", icon: <SiJavascript /> },
  { name: "HTML5", category: "Frontend", icon: <FaHtml5 /> },
  { name: "CSS3", category: "Frontend", icon: <FaCss3Alt /> },
  { name: "React", category: "Frontend", icon: <FaReact /> },
  { name: "TypeScript", category: "Frontend", icon: <SiTypescript /> },
  { name: "Node.js", category: "Backend", icon: <SiNodedotjs /> },
  { name: "Java", category: "Software", icon: <FaJava /> },
  { name: "C#", category: "Software", icon: <TbBrandCSharp /> },
  { name: "C++", category: "Software", icon: <TbBrandCpp /> },
  { name: "PHP", category: "Backend", icon: <SiPhp /> },
  { name: "MongoDB", category: "Database", icon: <SiMongodb /> },
  { name: "SQL Server", category: "Database", icon: <DiMsqlServer /> },
  { name: "SQLite", category: "Database", icon: <SiSqlite /> },
];

function TechStack() {
  return (
    <section className="tech-stack" id="skills">
      <SectionTitle
        tag="Tech Stack"
        title="Technologies I use to build solutions"
      />

      <div className="tech-layout">
        <div className="tech-summary">
          <h3>Tools for building reliable digital products.</h3>

          <p>
            I work with technologies focused on web development, backend systems,
            databases and data engineering, choosing the right tools for each
            problem.
          </p>
        </div>

        <div className="tech-grid">
          {technologies.map((tech) => (
            <article className="tech-card" key={tech.name}>
              <span className="tech-icon" translate="no">
                {tech.icon}
              </span>

              <div>
                <h4 translate="no">{tech.name}</h4>
                <p>{tech.category}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default TechStack;