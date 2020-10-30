import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <div id="contact" className="">
      <div className="row contact-container p-5">
        <div className="col-md-12 container-fluid px-4">
          <div className="col-md-6">
            <form>
              <div class="form-group d-flex justify-content-center">
                <input type="text" class="form-control" name="name" autocomplete="off" id="exampleInputName" placeholder="Enter your name" required="" />
              </div>

              <div class="form-group d-flex justify-content-center">
                <input type="email" class="form-control" name="email" id="exampleInputEmail1" placeholder="Email" autocomplete="off" required="" />
              </div>
              <div class="form-group d-flex justify-content-center">
                <textarea class="form-control" name="message" rows="3" placeholder="Your Message" required=""></textarea>
              </div>
              <div class="">
              <button type="submit" className="btn btn-bg text-white">SUBMIT</button>
              </div>
            </form>
          </div>
        </div>
        <div className="col-md-12">
        </div>
      </div>
      <footer className="copyRight text-center bg-dark p-4 text-white">
        <p>© All Right Reserved By <span className="text-color font-weight-bold">Kawser Ahmed</span> | {(new Date()).getFullYear()}</p>
      </footer>
    </div>
  );
};

export default Contact;