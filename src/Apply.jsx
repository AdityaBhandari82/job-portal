import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Apply = () => {
  return (
    <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-white border-bottom">
    <div className="container">
      <a className="navbar-brand fw-bold text-primary" href="#">
        Myjob
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse justify-content-between" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="#">
              Jobs
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Company
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Career
            </a>
          </li>
        </ul>
        <div className="d-flex">
          <a href="#" className="btn btn-outline-primary me-2">
            Login
          </a>
          <a href="#" className="btn btn-primary">
            Signup          
          </a>
        </div>
      </div>
    </div>
  </nav>
    <div className="container my-5">
      <h2 className="text-center mb-4">Recruiter Register</h2>
      <form>
        {/* Full Name */}
        <div className="mb-3 ">
          <label htmlFor="fullName" className="form-label">
            Full Name <span className="text-danger">*</span>
          </label>
          <input
            type="text"
            className="form-control"
            id="fullName"
            placeholder="Enter your full name..."
          />
        </div>

        {/* Email */}
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email <span className="text-danger">*</span>
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            placeholder="Enter your email..."
          />
        </div>

        {/* Mobile Number */}
        <div className="mb-3">
          <label htmlFor="mobileNumber" className="form-label">
            Mobile Number <span className="text-danger">*</span>
          </label>
          <input
            type="text"
            className="form-control"
            id="mobileNumber"
            placeholder="Enter your mobile number..."
          />
        </div>

        {/* Current Company Name */}
        <div className="mb-3">
          <label htmlFor="currentCompany" className="form-label">
            Current Company Name <span className="text-danger">*</span>
          </label>
          <input
            type="text"
            className="form-control"
            id="currentCompany"
            placeholder="Enter your company name..."
          />
        </div>

        {/* Current Location */}
        <div className="mb-3">
          <label htmlFor="currentLocation" className="form-label">
            Current Location <span className="text-danger">*</span>
          </label>
          <input
            type="text"
            className="form-control"
            id="currentLocation"
            placeholder="Enter your location..."
          />
        </div>

        {/* Designation */}
        <div className="mb-3">
          <label htmlFor="designation" className="form-label">
            Your Designation <span className="text-danger">*</span>
          </label>
          <input
            type="text"
            className="form-control"
            id="designation"
            placeholder="Enter your designation..."
          />
        </div>

        {/* Password */}
        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Password <span className="text-danger">*</span>
          </label>
          <input
            type="password"
            className="form-control"
            id="password"
            placeholder="Enter your password..."
          />
        </div>

        {/* Company Verification */}
        <div className="mb-3">
          <label htmlFor="companyVerification" className="form-label">
            Company Verification <span className="text-danger">*</span>
          </label>
          <div className="d-flex align-items-center">
            <button className="btn btn-primary me-2">
              Company Document Verification
            </button>
            <input
              type="text"
              className="form-control"
              id="companyVerification"
              placeholder="Ex: Business Documents, ISO..."
            />
          </div>
          <small className="text-muted">
            File format - PDF, DOC, DOCX | File size - Min 5MB & Max 20MB
          </small>
        </div>

        {/* Updates and Promotions */}
        <div className="mb-3 form-check">
          <input
            type="checkbox"
            className="form-check-input"
            id="updatesPromotions"
          />
          <label htmlFor="updatesPromotions" className="form-check-label">
            Send me important updates & promotions via SMS, email, and{" "}
            <span role="img" aria-label="WhatsApp">
              WhatsApp
            </span>
          </label>
        </div>

        {/* Terms and Conditions */}
        <div className="mb-4">
          <small className="text-muted">
            By clicking Register, you agree to the{" "}
            <a href="#terms" className="text-primary">
              Terms and Conditions
            </a>{" "}
            &{" "}
            <a href="#privacy" className="text-primary">
              Privacy Policy
            </a>{" "}
            of AlwaysApply.com
          </small>
        </div>

        {/* Register Button */}
        <div className="text-center mb-3">
          <button type="submit" className="btn btn-primary w-100">
            Register Now
          </button>
        </div>

        {/* Sign up with Socials */}
        <div className="text-center">
          <p>or signup with</p>
          <div>
            <button className="btn btn-outline-secondary me-2">
              <i className="fab fa-google"></i> Google
            </button>
            <button className="btn btn-outline-secondary me-2">
              <i className="fab fa-facebook"></i> Facebook
            </button>
            <button className="btn btn-outline-secondary">
              <i className="fab fa-linkedin"></i> LinkedIn
            </button>
          </div>
        </div>
      </form>
    </div>
    </div>
  );
};

export default Apply;
