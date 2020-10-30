import React from 'react';
import './ProjectCard.css'; 

const ProjectCard = (props) => {
  const { title, description, img } = props.singleProject
  return (
    <div className="col-md-4 col-sm-12 serviceCard">
      <div className="single-item my-4">
        <div className="card shadow">
          <img className="card-img-top" src={img} alt={title} />
          <div className="card-body">
            <h4 className="card-title font-weight-bold">{title}</h4>
            <p className="card-text">{description}</p>
            <br />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;