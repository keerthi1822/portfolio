import React from "react";
import "./contact.css";

const Contact = () => {
  return (
    <div className="contact">
    
      <section className="social_icons">
     {/*  <h4 className='contact-heading '><span>Contact: </span></h4> */}
        <a
          href="https://www.linkedin.com/in/keerthi-alampalli-002750152/"
          target="_blank"
          rel="noreferrer"
          title="keerthi's LinkedIn"
        >
          <i className="fab fa-linkedin-in" />
        </a>
        <a
          href="https://github.com/keerthi1822/portfolio"
          target="_blank"
          rel="noreferrer"
          title="keerthi's github"
        >
          <i className="fab fa-git"></i>
        </a>
        <a
          href="mailto:keerthi1822@gmail.com"
          rel="noreferrer"
          title="Email keerthi"
        >
          {" "}
          <i className="fas fa-at"></i>
        </a>
        <a href="tel:+4591734906" rel="noreferrer" title="call keerthi">
          {" "}
          <i className="fas fa-phone-square-alt"></i>
        </a>

        <a
          href="/Keerthika'sResume.pdf"
          download="Keerthika'sResume.pdf"
          rel="noreferrer"
          title="click for resume"
        >
          <i>
            Keerthika Devi Alampalli{" "}
            <i className="fas fa-cloud-download-alt"></i>
          </i>
        </a>
      </section>
    </div>
  );
};

export default Contact;