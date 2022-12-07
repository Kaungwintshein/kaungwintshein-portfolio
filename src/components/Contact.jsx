import React from "react";
import vectorImg from "../images/vector.svg";
import InputItem from "./InputItem";
import "./Contact.css";

const Contact = () => {
  return (
    <div id="contact-section" className="contact-section">
      <div className="contact">
        <div className="left">
          <img src={vectorImg} alt="" />
        </div>
        <div className="right">
          <h2>Front-End novelty in your inbox</h2>
          <p>
            My goal is to create easy-to-understand, rich blog posts for
            Front-End Developers. If you love to learn more about streamlined
            front-end practices, you'll more likely love what I'm working on!
            Don't worry, there will not be spam, and you can unsubscribe at any
            time.
          </p>
          <p>
            You will also receive <span>awesome weekly resources</span> to stay
            ahead in web development!
          </p>
          <form>
            <InputItem label="Name" type="text" />
            <InputItem label="Email" type="email" />
            <a href="#contact" className="button">
              Subscribe
            </a>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
