import React from "react";
import "./Blogs.css";

const BlogCard = (props) => {
  const { title, description, img, link } = props.singleProject;
  return (
    <div className="BlogsCard">
      <div className="card shadow my-4">
        <div className="card-img-wrapper">
          <img className="card-img-top" src={img} alt={title} />
        </div>
        <div className="card-body">
          <h4 className="card-title font-weight-bold">{title}</h4>
          <p className="card-text ">{description} <a href={link} target="/blank" className="text-color">read more </a> </p>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
