
import { useState } from "react";
import emailjs from "@emailjs/browser";
import "./Contact.css";
function Contact() {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  function handleChange(event) {

    const { name, value } = event.target;

    setFormData({
      ...formData,
      [name]: value
    });
  }

 function handleSubmit(event) {
  event.preventDefault();

  emailjs
    .send(
      "service_rzp3925",
      "template_lz86bah",
      {
        from_name: formData.name,
        from_email: formData.email,
        message: formData.message,
      },
      "dtJo7xNxniSL3CmE1"
    )
    .then(() => {
      alert("Message Sent Successfully!");

      setFormData({
        name: "",
        email: "",
        message: "",
      });
    })
    .catch((error) => {
      console.log(error);
      alert("Failed to send message.");
    });
}

  return (

    <section className="contact" id="contact">

      <h2>Contact Me</h2>

      <form
        className="contact-form"
        onSubmit={handleSubmit}
      >

        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
        />

        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
        />

        <textarea
          rows="5"
          name="message"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
        ></textarea>

        <button type="submit">
          Send Message
        </button>

      </form>

    </section>

  );
}

export default Contact;