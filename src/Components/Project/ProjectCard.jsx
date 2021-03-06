import React from "react";
import  styles from "./Project.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";
import Fade from "react-reveal/Fade";

const ProjectCard = (props) => {
  const { title, description, img, github, live } = props.singleProject;
  return (
    <div className={`${styles.serviceCard} col-lg-4 col-md-6 col-sm-12`}>
      <Fade bottom>
          <div className={`${styles.projectCard} card shadow project-card my-4`}>
            <div className={`${styles.card_img_wrapper}`}>
              <img className={`${styles.card_img_top}`} src={img} alt={title} />
            </div>
            <div className="card-body">
              <h4 className="card-title font-weight-bold">{title}</h4>
              <p className="card-text">{description}</p>
            </div>
            <div className="card-footer pb-3 bg-white border-0">
              <a
                className="btn btn-bg text-white mr-3 "
                href={github}
                target="/blank"
              >
                <FontAwesomeIcon className="icon-style" icon={faGithub} />{" "}
                Github
                <span></span>
              </a>

              <a className="btn btn-bg text-white" href={live} target="/blank">
                <FontAwesomeIcon
                  className="icon-style"
                  icon={faExternalLinkAlt}
                />{" "}
                Live Link
                <span></span>
              </a>
            </div>
          </div>
      </Fade>
    </div>
  );
};

export default ProjectCard;
