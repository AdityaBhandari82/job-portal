import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";

const Fill = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    resume: null,
    coverLetter: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, resume: e.target.files[0] });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Application Submitted", formData);
  };

  return (
    <div className="container-fluid bg-light min-vh-100 d-flex flex-column">
      <header className="text-white text-center py-3 mb-4">
       <Navbar />
      </header>
      <div className="d-flex justify-content-center align-items-center flex-grow-1">
        <div className="card w-50 p-4">
          <h2 className="text-center mb-4">Job Application Details</h2>
          <div className="card-body">
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label htmlFor="fullName" className="form-label">Full Name</label>
                <input id="fullName" name="fullName" type="text" className="form-control" value={formData.fullName} onChange={handleChange} required />
              </div>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">Email</label>
                <input id="email" name="email" type="email" className="form-control" value={formData.email} onChange={handleChange} required />
              </div>
              <div className="mb-3">
                <label htmlFor="phone" className="form-label">Phone</label>
                <input id="phone" name="phone" type="tel" className="form-control" value={formData.phone} onChange={handleChange} required />
              </div>
              <div className="mb-3">
                <label htmlFor="resume" className="form-label">Resume (PDF)</label>
                <input id="resume" name="resume" type="file" className="form-control" accept=".pdf" onChange={handleFileChange} required />
              </div>
              <div className="mb-3">
                <label htmlFor="coverLetter" className="form-label">Cover Letter</label>
                <textarea id="coverLetter" name="coverLetter" className="form-control" rows="4" value={formData.coverLetter} onChange={handleChange} required></textarea>
              </div>
              <Link to="/Apply">
              <button type="submit" className="btn btn-primary w-100">Submit Application</button>
              </Link>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Fill;