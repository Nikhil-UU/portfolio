import "./Hero.css";
import resume from "../../assets/resume/Nikhil Patel Resume.pdf";

function Hero() {
  return (
    <section className="hero">

      <div className="hero-left">

        <p className="hello">Hello 👋 I'm</p>

        <h1>Nikhil Patel</h1>

        <h2>Java Backend Developer</h2>

        <p className="description">
          Passionate Java Backend Developer with experience in
          Spring Boot, REST APIs, MySQL, and modern web technologies.
        </p>

        <div className="hero-buttons">
          <button className="btn-primary">
            Hire Me
          </button>

          <a
    href={resume}
    download
    className="btn-secondary"
>
    Download Resume
</a>
        </div>

      </div>

      <div className="hero-right">

        <img
          src="https://via.placeholder.com/350"
          alt="Profile"
        />

      </div>

    </section>
  );
}

export default Hero;