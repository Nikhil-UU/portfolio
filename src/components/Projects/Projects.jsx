import "./Projects.css";

const projects = [
  {
    title: "Employee Management System",
    image: "https://via.placeholder.com/400x220",
    description:
      "CRUD application using Spring Boot, REST APIs and MySQL.",
    tech: ["Java", "Spring Boot", "MySQL"],
    github: "https://github.com/yourusername/employee-management-system",
    demo: "#"
  },
  {
    title: "Hospital Management System",
    image: "https://via.placeholder.com/400x220",
    description:
      "Hospital Management backend using Spring Boot and JPA.",
    tech: ["Java", "JPA", "MySQL"],
    github: "https://github.com/yourusername/hospital-management",
    demo: "#"
  }
];

function Projects() {
  return (
    <section className="projects" id="projects">

      <h2>My Projects</h2>

      <div className="project-container">

        {projects.map((project, index) => (

          <div className="project-card" key={index}>

            <img
              src={project.image}
              alt={project.title}
            />

            <h3>{project.title}</h3>

            <p>{project.description}</p>

            <div className="tech">

              {project.tech.map((item, i) => (
                <span key={i}>{item}</span>
              ))}

            </div>

            <div className="buttons">

              <a href={project.github} target="_blank" rel="noreferrer">
                <button>GitHub</button>
              </a>

              <a href={project.demo} target="_blank" rel="noreferrer">
                <button>Live Demo</button>
              </a>

            </div>

          </div>

        ))}

      </div>

    </section>
  );
}

export default Projects;