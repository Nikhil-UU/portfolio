import "./About.css";

function About() {
    return (
        <section className="about" id="about">

            <h2>About Me</h2>

            <p>
                I am a Java Backend Developer with knowledge of Java,
                Spring Boot, REST APIs and MySQL.
            </p>

            <div className="about-cards">

                <div className="card">
                    <h3>🎓 Education</h3>
                    <p>BCA & MCA</p>
                </div>

                <div className="card">
                    <h3>💻 Experience</h3>
                    <p>Fresher Java Developer</p>
                </div>

                <div className="card">
                    <h3>🚀 Projects</h3>
                    <p>Employee Management System, Hospital Management System</p>
                </div>

            </div>

        </section>
    );
}

export default About;