import React, { useState } from "react";
import ProjectCard from "./BlogCard";
import Zoom from "react-reveal/Zoom";
import Fade from "react-reveal/Fade";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import BlogData from "../data/BlogData";

const Blogs = () => {
  const [project] = useState(BlogData);
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
    responsive: [
      {
        breakpoint: 1124,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: true,
        },
      },
    ],
  };

  return (
    <section className="pt-3 bg-dark">
      <div id="blogs" style={{ height: "10vh" }}></div>
      <Fade top>
        <h1 className="text-center font-weight-bold text-white">MY BLOGS</h1>
      </Fade>
      <div className="d-flex justify-content-center flex-column pt-4">
        <div className="slide-container">
          <Slider {...settings}>
            {project.map((singleProject) => (
              <ProjectCard
                singleProject={singleProject}
                key={singleProject.id}
              ></ProjectCard>
            ))}
          </Slider>
        </div>
        <Zoom>
          <div className="see-more-btn my-5 text-center">
            <a
              href="https://kawser00.medium.com/"
              class="btn btn-bg text-white"
              target="/blank"
            >
              See More Blogs
            </a>
          </div>
        </Zoom>
      </div>
    </section>
  );
};

export default Blogs;
