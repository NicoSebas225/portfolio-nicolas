import projects from "../data/projects";
import SectionTitle from "./SectionTitle";

function Projects() {
  const featuredProject = projects.find((project) => project.featured);
  const otherProjects = projects.filter((project) => !project.featured);

  return (
    <section className="projects" id="projects">
      <SectionTitle
        tag="Featured Work"
        title="Projects built to solve real problems"
      />

      {featuredProject && (
        <article className="featured-project">
          <div className="featured-content">
            <span className="featured-label">Featured Project</span>

            <h3>{featuredProject.title}</h3>

            <p className="featured-subtitle">{featuredProject.subtitle}</p>

            <p className="featured-description">
              {featuredProject.description}
            </p>

            <div className="featured-highlights">
              {featuredProject.highlights.map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>

            <div className="project-tech">
              {featuredProject.technologies.map((tech) => (
                <span key={tech} translate="no">
                  {tech}
                </span>
              ))}
            </div>

            <div className="project-links">
              <a href={featuredProject.github}>View Code</a>
              <a href={featuredProject.demo}>Live Preview</a>
            </div>
          </div>

          <div className="featured-preview">
            <div className="preview-window">
              <div className="preview-header">
                <span></span>
                <span></span>
                <span></span>
              </div>

              <div className="preview-body">
                <p>Veterinary Management System</p>
                <div></div>
                <div></div>
                <div></div>
              </div>
            </div>
          </div>
        </article>
      )}

      <div className="projects-grid">
        {otherProjects.map((project) => (
          <article className="project-card" key={project.id}>
            <div className="project-top">
              <span>0{project.id}</span>
              <p>Project</p>
            </div>

            <h3>{project.title}</h3>
            <p>{project.description}</p>

            <div className="project-tech">
              {project.technologies.map((tech) => (
                <span key={tech} translate="no">
                  {tech}
                </span>
              ))}
            </div>

            <div className="project-links">
              <a href={project.github}>View Code</a>
              <a href={project.demo}>Live Preview</a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Projects;