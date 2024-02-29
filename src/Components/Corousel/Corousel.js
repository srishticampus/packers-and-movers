import React from "react";
import { Link } from "react-router-dom";

function Corousel() {
  return (
    <div>
      <div className="container-fluid bg-primary py-5 mb-5 hero-header">
        <div className="container py-5">
          <div className="row justify-content-start">
            <div className="col-lg-8 text-center text-lg-start">
              <h1 className="display-1 text-uppercase  mb-lg-4" style={{color:'white',fontWeight:'bold',fontSize:'50px'}}>
              <span style={{color:'#0d6efd'}}  >Move Smart,</span> Move Swift: Your Logistics Revolution Starts Here!
              </h1>
              <h1 className="text-uppercase text-white mb-lg-4">
              Your Reliable Moving Solutions!
              </h1>
              <p className="fs-4 text-white mb-lg-4">
              Welcome to Let's Go, your go-to destination for streamlined goods movement. We connect businesses with transporters, creating a transparent platform for efficient transactions. With user-friendly features, we simplify the process, allowing businesses to post loads and receive competitive bids. Whether you're a business owner or a transporter, join us in revolutionizing logistics across India.</p>
              {/* <div className="d-flex align-items-center justify-content-center justify-content-lg-start pt-5">
                <Link
                  to="/about"
                  className="btn btn-outline-light border-2 py-md-3 px-md-5 me-5"
                >
                  Read More
                </Link>
                
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Corousel;
