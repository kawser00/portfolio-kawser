import React from 'react';
import About from '../About/About';
import Banner from '../Banner';
import Contact from '../Contact/Contact';
import Navbar from '../Navbar';
import Project from '../Project/Project';

const Home = () => {
  return (
    <div>
      <Navbar />
      <Banner />
      <About />
      <Project />
      <Contact />
    </div>
  );
};

export default Home;