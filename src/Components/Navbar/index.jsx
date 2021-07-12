import React from 'react';
import './Navbar.css'

const Navbar = () => {
  return (
    <nav className="navbar bg-white navbar-expand-lg navbar-light sticky-top  shadow-lg">
      <a className="navbar-brand p-0 m-0" href="#home">
        <h3 className="font-weight-bold text-color logo m-0">{'< KAWSER />'}</h3>
      </a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav ml-auto px-3">
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
            <a className="nav-link mr-3 font-weight-bold text-mute" href="#blogs">BLOG</a>
          </li>
          <li className="nav-item">
            <a className="nav-link mr-3 font-weight-bold text-mute" href="#contact">CONTACT</a>
          </li>
          <li className="nav-item">
            
          <a className="btn btn-bg text-white" href="https://drive.google.com/file/d/11vIMtLPaE6qscm2wAVSkVHsKmN0pm-im/view?usp=sharing" target="/blank">RESUME</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;



//added navlink to navigate different pages

// <ul className="navbar-nav ml-auto px-3">
// <li className="nav-item">
//   <NavLink
//     to="#home"
//     activeClassName="active"
//     className="nav-link mr-3 font-weight-bold text-mute"
//   >
//     HOME
//   </NavLink>
// </li>
// <li className="nav-item">
//   <NavLink
//     to="#about"
//     activeClassName="active"
//     className="nav-link mr-3 font-weight-bold text-mute"
//   >
//     ABOUT
//   </NavLink>
// </li>
// <li className="nav-item">
//   <NavLink
//     to="#project"
//     activeClassName="active"
//     className="nav-link mr-3 font-weight-bold text-mute"
//   >
//     PROJECT
//   </NavLink>
// </li>
// <li className="nav-item">
//   <NavLink
//     to="#home"
//     activeClassName="active"
//     className="nav-link mr-3 font-weight-bold text-mute"
//   >
//     BLOG
//   </NavLink>
// </li>
// <li className="nav-item">
//   <NavLink
//     to="#contact"
//     activeClassName="active"
//     className="nav-link mr-3 font-weight-bold text-mute"
//   >
//     CONTACT
//   </NavLink>
// </li>
// <li className="nav-item">
//   <a
//     className="btn btn-bg text-white"
//     href="https://drive.google.com/file/d/11vIMtLPaE6qscm2wAVSkVHsKmN0pm-im/view?usp=sharing"
//     target="/blank"
//   >
//     RESUME
//   </a>
// </li>
// </ul>
