import React from 'react';
import './About.css'
import kawsar from '../../images/kawsar1.png'

const About = () => {
  return (
    <div id="about" className="container-fluid">
      <div className="row">
        <div className="col-md-12 text-center m-5 p-3">
          <h1 className="font-weight-bold">ABOUT <span className="text-color">ME</span></h1>
          <h3>Let me introduce...</h3>
        </div>
        <div className="col-md-12 px-5  pb-3 mb-5">
          <div className="row d-flex justify-content-center">
            <div className="col-md-3 col-sm-12 text-center mb-4">
              <img className="img-style mr-4" src={kawsar} alt="" />
            </div>
            <div className="col-md-5 col-sm-12 d-flex align-items-center">
              <p className="text-justify "><b> Passionate web app developer.</b> Always try to grab the new features of technology. Last few years made myself skilled in the field of web application development. Acquired to maintain strong interpersonal relationships with teammates. I am passionate about providing care to my work, which keeps me motivated and excited about doing my best work</p>
            </div>
          </div>

        </div>
        <div className="col-md-12 px-5 pb-5">
          <div className="row">
            <div className="col-md-6">
              <h3 className="pb-2">PROFILE</h3>
              <h5>Name:</h5>
              <p>KAWSER AHMED</p>
              <h5>Education:</h5>
              <p className="font-weight-bold mb-0">Bachelor of Pharmacy (B.Pharm)</p>
              <p>Atish Dipankar University of Science & Technology</p>
              <h5>Location:</h5>
              <p>Mirpur-12, Dhaka, Bangladesh</p>
              <h5>Nationality:</h5>
              <p>Bangladeshi</p>
            </div>
            <div className="col-md-6">
              <h3 className="">My Skills Set</h3>
              <div className="technology mb-5"><span>JavaScript</span><span>ES6</span><span>React.js</span><span>Node.js</span><span>Express.js</span><span>MongoDB</span><span>Redux.js</span><span>Gatsby.js</span><span>PHP</span><span>MySQL</span><span>Material UI</span><span>Git</span><span>Heroku</span><span>Netlify</span><span>NPM</span><span>VS Code</span><span>REST API</span><span>Firebase</span>
              </div>
              <h3 >I want to work with</h3>
              <div className="technology mb-5"><span>JavaScript</span><span>React.js</span><span>Gatsby.js</span><span>REST API</span><span>Redux.js</span></div>
              <h3>I prefer not to work with</h3>
              <div className="technology"><span>PHP</span><span>Laravel</span><span>MySQL</span><span>Wordpress</span><span>jQuery</span></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
