import "./Timeline.css";

function Timeline() {

  const timeline = [
    {
      year: "2022",
      title: "BCA Completed",
      description: "Completed Bachelor of Computer Applications."
    },
    {
      year: "2026",
      title: "MCA Completed",
      description: "Completed Master of Computer Applications."
    },
    {
      year: "2026",
      title: "Java Backend Development",
      description: "Learning Java, Spring Boot, REST APIs, MySQL and Git."
    },
    {
      year: "Current Goal",
      title: "Java Backend Developer",
      description: "Looking for a Java Backend Developer role."
    }
  ];

  return (
    <section className="timeline" id="timeline">

      <h2>My Journey</h2>

      <div className="timeline-container">

        {timeline.map((item, index) => (

          <div className="timeline-card" key={index}>

            <h3>{item.year}</h3>

            <h4>{item.title}</h4>

            <p>{item.description}</p>

          </div>

        ))}

      </div>

    </section>
  );
}

export default Timeline;