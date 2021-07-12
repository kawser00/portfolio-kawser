import React, { useState } from "react";
import ProjectData from "../data/ProjectData/ProjectData";
import ProjectCard from "./ProjectCard";
import Zoom from "react-reveal/Zoom";
import Fade from "react-reveal/Fade";

const Project = () => {
  const [project] = useState(ProjectData);

  return (
    <section style={{ background: "#f5f5f5" }} className="pt-3">
      <div id="project" style={{ height: "10vh" }}></div>
      <Fade top>
        <h1 className="text-center font-weight-bold">PROJECTS</h1>
      </Fade>
      <div className="d-flex justify-content-center flex-column pb-5">
        <div className="row justify-content-center">
          {project.map((singleProject) => (
            <ProjectCard
              singleProject={singleProject}
              key={singleProject.id}
            ></ProjectCard>
          ))}
        </div>
        <Zoom>
          <div className="mb-5 text-center">
            <a
              href="https://github.com/kawser00"
              class="btn btn-outline-danger"
              target="/blank"
            >
              See More
            </a>
          </div>
        </Zoom>
      </div>
    </section>
  );
};

export default Project;
