import "./Skills.css";

function Skills() {

    const skills = [
        "Java",
        "Spring Boot",
        "REST APIs",
        "MySQL",
        "HTML",
        "CSS",
        "JavaScript",
        "Git",
        "GitHub"
    ];

    return (
       <section className="skills" id="skills">

            <h2>My Skills</h2>

            <div className="skills-container">

                {
                    skills.map((skill, index) => (

                        <div className="skill-card" key={index}>
                            {skill}
                        </div>

                    ))
                }

            </div>

        </section>
    );
}

export default Skills;