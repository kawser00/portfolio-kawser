import React from 'react';

const Contact = () => {
  return (
    <div className="contact-container">
      <div className="row">
        <div className="col-md-12 container-fluid"></div>
        <div className="col-md-12">
          <footer className="copyRight text-center bg-dark p-4 text-white">
            <p>© All Right Reserved By <span className="text-color font-weight-bold">Kawser Ahmed</span> | {(new Date()).getFullYear()}</p>
          </footer>
        </div>
      </div>
    </div>
  );
};

export default Contact;