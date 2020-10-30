import React from 'react';
import './HeaderMain.css';
import Particles from 'react-particles-js';

const HeaderMain = () => {
  return (
    <div id="home" style={{ height: '100vh', position: "relative" }} className='header-bg'>
      <header id="home" className="d-flex justify-content-center align-items-center">
        <div className="header-section" id="div">
          <h1 style={{ fontSize: '4vw' }}>Hello, I'm <span>Kawser Ahmed</span></h1>
          <h1 style={{ fontSize: '3vw' }}>I'm a full stack web developer.</h1>
      <a className="btn btn-bg text-white mt-2" href="#contact">CONTACT ME</a>
        </div>
      </header>
      <Particles
      // canvasClassName="example"
      height="100vh"
      width="100%"
        params={{
          "particles": {
            "number": {
              "value": 60
            },
            "size": {
              "value": 3
            }
          },
          "interactivity": {
            "events": {
              "onhover": {
                "enable": true,
                "mode": "repulse"
              }
            }
          }
        }} />

    </div>
  );
};

export default HeaderMain;