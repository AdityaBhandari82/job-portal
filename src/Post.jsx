import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Post = () => {
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
      <h2 className="text-center mb-4">Post a Job</h2>
      <p className="text-center text-muted">Find the best talent for your company</p>
      <form>
        {/* Job Title */}
        <div className="mb-3">
          <label htmlFor="jobTitle" className="form-label">
            Job Title
          </label>
          <input
            type="text"
            className="form-control"
            id="jobTitle"
            placeholder="Add job title, role vacancies etc"
          />
        </div>

        {/* Company Name */}
        <div className="mb-3">
          <label htmlFor="companyName" className="form-label">
            Company Name
          </label>
          <input
            type="text"
            className="form-control"
            id="companyName"
            placeholder="Add job title, role vacancies etc"
          />
        </div>

        {/* Work Mode and Job Role */}
        <div className="row mb-3">
          <div className="col-md-6">
            <label htmlFor="workMode" className="form-label">
              Work Mode
            </label>
            <select className="form-select" id="workMode">
              <option value="">Select...</option>
              <option value="remote">Remote</option>
              <option value="on-site">On-site</option>
              <option value="hybrid">Hybrid</option>
            </select>
          </div>
          <div className="col-md-6">
            <label htmlFor="jobRole" className="form-label">
              Job Role
            </label>
            <select className="form-select" id="jobRole">
              <option value="">Select...</option>
              <option value="developer">Developer</option>
              <option value="designer">Designer</option>
              <option value="manager">Manager</option>
            </select>
          </div>
        </div>

        {/* Salary */}
        <div className="row mb-3">
          <div className="col-md-5">
            <label htmlFor="minSalary" className="form-label">
              Min Salary
            </label>
            <div className="input-group">
              <input
                type="number"
                className="form-control"
                id="minSalary"
                placeholder="Minimum Salary..."
              />
              <span className="input-group-text">INR</span>
            </div>
          </div>
          <div className="col-md-5">
            <label htmlFor="maxSalary" className="form-label">
              Max Salary
            </label>
            <div className="input-group">
              <input
                type="number"
                className="form-control"
                id="maxSalary"
                placeholder="Maximum Salary..."
              />
              <span className="input-group-text">INR</span>
            </div>
          </div>
          <div className="col-md-2">
            <label htmlFor="salaryFrequency" className="form-label">
              Frequency
            </label>
            <select className="form-select" id="salaryFrequency">
              <option value="">Select...</option>
              <option value="monthly">Monthly</option>
              <option value="yearly">Yearly</option>
            </select>
          </div>
        </div>

        {/* Vacancies and Job Level */}
        <div className="row mb-3">
          <div className="col-md-6">
            <label htmlFor="vacancies" className="form-label">
              Vacancies
            </label>
            <select className="form-select" id="vacancies">
              <option value="">Select...</option>
              <option value="1">1</option>
              <option value="2-5">2-5</option>
              <option value="6-10">6-10</option>
            </select>
          </div>
          <div className="col-md-6">
            <label htmlFor="jobLevel" className="form-label">
              Job Level
            </label>
            <select className="form-select" id="jobLevel">
              <option value="">Select...</option>
              <option value="entry">Entry Level</option>
              <option value="mid">Mid Level</option>
              <option value="senior">Senior Level</option>
            </select>
          </div>
        </div>

        {/* Location */}
        <div className="row mb-3">
          <div className="col-md-6">
            <label htmlFor="country" className="form-label">
              Country
            </label>
            <select className="form-select" id="country">
              <option value="">Select...</option>
              <option value="india">India</option>
              <option value="usa">USA</option>
              <option value="uk">UK</option>
            </select>
          </div>
          <div className="col-md-6">
            <label htmlFor="city" className="form-label">
              City
            </label>
            <select className="form-select" id="city">
              <option value="">Select...</option>
              <option value="hyderabad">Hyderabad</option>
              <option value="bangalore">Bangalore</option>
              <option value="mumbai">Mumbai</option>
            </select>
          </div>
        </div>

        {/* Job Description */}
        <div className="mb-3">
          <label htmlFor="jobDescription" className="form-label">
            Job Description
          </label>
          <textarea
            className="form-control"
            id="jobDescription"
            rows="5"
            placeholder="Add your description..."
          ></textarea>
        </div>

        {/* Post Job Button */}
        <div className="text-center">
          <button type="submit" className="btn btn-primary w-100">
            Post Job
          </button>
        </div>
      </form>
    </div>
    </div>
  );
};

export default Post;
