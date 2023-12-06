import React from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate for navigation
import darkLogo from "../../public/images/logos/dark-logo.svg"; // Adjust this path as necessary for your project structure

function AuthenticationRegister() {
  const navigate = useNavigate(); // Hook for navigation

  // Function to handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    // Implement your sign-up logic here
    console.log("Form submitted");
    // navigate('/dashboard'); // Navigate to dashboard or other page on successful sign-up
  };

  // Function to navigate to the sign-in page
  const navigateToSignIn = () => {
    navigate('/authentication-login'); // Adjust the path as necessary
  };

  return (
    <div className="page-wrapper" data-layout="vertical">
      <div className="position-relative overflow-hidden radial-gradient min-vh-100 d-flex align-items-center justify-content-center">
        <div className="d-flex align-items-center justify-content-center w-100">
          <div className="row justify-content-center w-100">
            <div className="col-md-8 col-lg-6 col-xxl-3">
              <div className="card mb-0">
                <div className="card-body">
                  <button onClick={() => navigate('/')} className="text-nowrap logo-img text-center d-block py-3 w-100 border-0 bg-transparent">
                    <img src={darkLogo} width="180" alt="Logo" />
                  </button>
                  <p className="text-center">Your Social Campaigns</p>
                  <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                      <label htmlFor="exampleInputtext1" className="form-label">
                        Name
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="exampleInputtext1"
                        aria-describedby="textHelp"
                      />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="exampleInputEmail1" className="form-label">
                        Email Address
                      </label>
                      <input
                        type="email"
                        className="form-control"
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                      />
                    </div>
                    <div className="mb-4">
                      <label
                        htmlFor="exampleInputPassword1"
                        className="form-label"
                      >
                        Password
                      </label>
                      <input
                        type="password"
                        className="form-control"
                        id="exampleInputPassword1"
                      />
                    </div>
                    <button type="submit" className="btn btn-primary w-100 py-2 fs-4 mb-4 rounded-2">
                      Sign Up
                    </button>
                    <div className="d-flex align-items-center justify-content-center">
                      <p className="fs-4 mb-0 fw-bold">
                        Already have an Account?
                      </p>
                      <button className="text-primary fw-bold ms-2 border-0 bg-transparent" type="button" onClick={navigateToSignIn}>
                        Sign In
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AuthenticationRegister;
