import React from 'react';


const Navbar = () => {
  return (
    <nav className="navbar bg-white navbar-expand-lg navbar-light sticky-top px-5 shadow-lg mb-4">
      <a className="navbar-brand px-5" href="/home">
        <h3 className="font-weight-bold text-color">KAWSER AHMED</h3>
      </a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav ml-auto px-5">
          <li className="nav-item">
            <a className="nav-link mr-3 font-weight-bold text-mute" href="#home">HOME</a>
          </li>
          <li className="nav-item">
            <a className="nav-link mr-3 font-weight-bold text-mute" href="#about">ABOUT</a>
          </li>
          <li className="nav-item">
            <a className="nav-link mr-3 font-weight-bold text-mute" href="#project">PROJECT</a>
          </li>
          <li className="nav-item">
            <a className="nav-link mr-3 font-weight-bold text-mute" href="/#">BLOG</a>
          </li>
          <li className="nav-item">
            <a className="nav-link mr-3 font-weight-bold text-mute" href="#contact">CONTACT</a>
          </li>
          <li className="nav-item">
            
          <a className="btn btn-bg text-white" href="https://drive.google.com/file/d/18LNd43kI4-MRSN6bBE4emYAwvMkcOkvt/view?usp=sharing" target="/blank">RESUME</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;