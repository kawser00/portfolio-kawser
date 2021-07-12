import React from 'react';
import About from '../About/About';
import Banner from '../Banner';
import Blogs from '../Blogs';
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
      <Blogs />
      <Contact />
    </div>
  );
};

export default Home;