import React, { useRef } from "react";
import "./Contact.css";
import { AiOutlineMail } from "react-icons/ai";
import { RiMessengerLine } from "react-icons/ri";
import { BsWhatsapp } from "react-icons/bs";
import emailjs from "emailjs-com";
import Reveal from "../Reveal";

const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    console.log(form.current);
    emailjs.sendForm(
      process.env.REACT_APP_SERVICE,
      process.env.REACT_APP_TEMPLATE,
      form.current,
      process.env.REACT_APP_USER
    );

    e.target.reset();
  };
  return (
    <section id="contact">
      <Reveal>
        <h2>Contact Me</h2>
        <h5 className="text-light">Get in Touch</h5>
        <div className="container contact">
          <div className="contact-options">
            <article className="option">
              <AiOutlineMail size="1.6rem" />
              <h4>Email</h4>
              <h5>Avivasulin1211@gmail.com</h5>
              <a href="mailto:Avivasulin1211@gmail.com" target="_blank">
                Send me message
              </a>
            </article>
            <article className="option">
              <RiMessengerLine size="1.6rem" />
              <h4>Messenger</h4>
              <h5>Aviv Asulin</h5>
              <a href="https://m.me/aviv.asulin.9" target="_blank">
                Send me message
              </a>
            </article>
            <article className="option">
              <BsWhatsapp size="1.6rem" />
              <h4>Whatsapp</h4>
              <h5>+972-53-777-8347</h5>
              <a href="https://wa.me/972537778347/" target="_blank">
                Send me message
              </a>
            </article>
          </div>
          <form ref={form} onSubmit={sendEmail} className="form">
            <input
              type="text"
              name="name"
              placeholder="Your Full Name"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
            />
            <textarea
              name="message"
              rows="7"
              placeholder="Your Message"
              required
            />
            <button
              type="sumbit"
              className="btn"
              id="btn2"
              style={{ cursor: "pointer" }}
            >
              Send Message
            </button>
          </form>
        </div>
      </Reveal>
    </section>
  );
};

export default Contact;
