import React from "react";
import "./Contact.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedinIn,
  faMedium,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import {
  faEnvelope,
  faMapMarkerAlt,
  faPhoneAlt,
} from "@fortawesome/free-solid-svg-icons";
import emailjs from "emailjs-com";
import Fade from "react-reveal/Fade";

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "gmail",
        "template_tkntbfh",
        e.target,
        "user_7EZXeIphZxeA0xkEmGcWE"
      )
      .then(
        (result) => {
          if (result) {
            alert("Your email sended successfully");
            e.target.reset();
          }
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <section>
      <div id="contact" style={{ height: "10vh" }}></div>
      <Fade top>
        <h1 className="text-center font-weight-bold">CONTACT</h1>
        <h5 className="text-center text-color font-weight-bold">
          Have a question or want to work together?
        </h5>
      </Fade>
      <div className="container-fluid">
        <div className="row px-0 pl-3 px-md-3 px-lg-5 my-5 pb-5 d-flex justify-content-between">
          <Fade left>
            <div className="col-md-6 col-sm-12 shadow-lg p-5 contact-style">
              <h4 className="text-center font-weight-bold pb-4">
                Get In Tough
              </h4>
              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-group d-flex justify-content-center">
                  <input
                    type="text"
                    className="form-control"
                    name="name"
                    autoComplete="off"
                    id="exampleInputName"
                    placeholder="Enter your name"
                    required
                  />
                </div>
                <div className="form-group d-flex justify-content-center">
                  <input
                    type="email"
                    className="form-control"
                    name="email"
                    id="exampleInputEmail1"
                    placeholder="Email"
                    autoComplete="off"
                    required
                  />
                </div>
                <div className="form-group d-flex justify-content-center">
                  <textarea
                    className="form-control"
                    name="message"
                    rows="3"
                    placeholder="Your Message"
                    required
                  ></textarea>
                </div>
                <div className="">
                  <button type="submit" className="btn btn-bg text-white w-100">
                    SUBMIT
                  </button>
                </div>
              </form>
            </div>
          </Fade>
          <Fade right>
            <div className="col-md-6 col-sm-12 pl mt-5">
              <div className="contact-info">
                <div className="mb-2">
                  <span className="mr-4">
                    <FontAwesomeIcon
                      className="text-color"
                      icon={faMapMarkerAlt}
                    />
                  </span>
                  <span>Mirpur 12, Dhaka, Bangladesh</span>
                </div>
                <div className="mb-2">
                  <span className="mr-4">
                    <FontAwesomeIcon className="text-color" icon={faPhoneAlt} />
                  </span>
                  <span>+880-1710-302513</span>
                </div>
                <div className="mb-2">
                  <span className="mr-4">
                    <FontAwesomeIcon className="text-color" icon={faEnvelope} />
                  </span>
                  <span>kawser.ahmed.dev@gmail.com</span>
                </div>
              </div>
              <hr className="btn-bg my-3 my-lg-5" />
              <div className="social-icon">
                <ul className="d-flex list-unstyled">
                  {/* <li>
                  <a className=" social-icon-style" href="https://web.facebook.com/kawsar.mahmud00/" target="/_blank"><FontAwesomeIcon  icon={faFacebook} /></a>
                </li> */}
                  <li>
                    <a
                      className=" social-icon-style"
                      href="https://www.linkedin.com/in/kawser00/"
                      target="/_blank"
                    >
                      <FontAwesomeIcon icon={faLinkedinIn} />
                    </a>
                  </li>
                  <li>
                    <a
                      className=" social-icon-style"
                      href="https://github.com/kawser00"
                      target="/_blank"
                    >
                      <FontAwesomeIcon icon={faGithub} />
                    </a>
                  </li>
                  <li>
                    <a
                      className=" social-icon-style"
                      href="https://twitter.com/Kawser12759188"
                      target="/_blank"
                    >
                      <FontAwesomeIcon icon={faTwitter} />
                    </a>
                  </li>
                  <li>
                    <a
                      className=" social-icon-style"
                      href="https://medium.com/@kawser00"
                      target="/_blank"
                    >
                      <FontAwesomeIcon icon={faMedium} />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </Fade>
        </div>
      </div>
      <footer className="copyRight text-center bg-dark p-4 text-white">
        <p>
          Designed and Developed by{" "}
          <span className="text-color font-weight-bold">Kawser Ahmed</span>
        </p>
        <p>Copyright © {new Date().getFullYear()}, All Rights Reserved</p>
      </footer>
    </section>
  );
};

export default Contact;
