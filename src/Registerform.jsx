import React, { useState } from 'react';
import google1 from "./google (1).png";
import facebook1 from "./facebook (1).png";
import linkedin from "./linkedin.png";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';

function Registerform() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    mobile: '',
    password: '',
    cv: null,
    subscribe: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleFileChange = (e) => {
    setFormData({
      ...formData,
      cv: e.target.files[0],
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <div className="container">
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

      <h2 className="mt-4 ">Registration form</h2>
      <p className='mb-5'>Register to aplly for jobs of your choice all over the world</p>
     
     <div className="container mt-5 mb-4 p-4"style={{backgroundColor:'whitesmoke',borderRadius:"20px"}}>
      <form onSubmit={handleSubmit}>
        {/* Full Name */}
        <div className="mb-3">
          <label htmlFor="fullName" className="form-label">Full name <span className="text-danger">*</span></label>
          <input
            type="text"
            className="form-control"
            id="fullName"
            name="fullName"
            placeholder="Enter your full name..."
            value={formData.fullName}
            onChange={handleChange}
            required
          />
        </div>

        {/* Email */}
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email <span className="text-danger">*</span></label>
          <input
            type="email"
            className="form-control"
            id="email"
            name="email"
            placeholder="Enter your Email..."
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        {/* Mobile Number */}
        <div className="mb-3">
          <label htmlFor="mobile" className="form-label">Mobile Number <span className="text-danger">*</span></label>
          <input
            type="text"
            className="form-control"
            id="mobile"
            name="mobile"
            placeholder="Enter your Mobile Number..."
            value={formData.mobile}
            onChange={handleChange}
            required
          />
        </div>

        {/* Password */}
        <div className="mb-3">
          <label htmlFor="password" className="form-label">Password <span className="text-danger">*</span></label>
          <input
            type="password"
            className="form-control"
            id="password"
            name="password"
            placeholder="Enter your Password..."
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>

        {/* Upload CV */}
        <div className="mb-3">
          <label htmlFor="cv" className="form-label">Upload Your CV</label>
          <input
            type="file"
            className="form-control"
            id="cv"
            name="cv"
            accept=".pdf, .doc, .docx, .txt"
            onChange={handleFileChange}
          />
          <small className="text-muted">File format: PDF, DOC, DOCX, Txt</small>
        </div>


        {/* Submit Button */}
        <Link to="/Jobsearch"> <button type="submit" className="btn btn-primary w-100">Register now</button></Link>
        {/* Subscribe Checkbox */}
        <div className="mb-3 form-check mt-3 text-center ">
          <input
            type="checkbox"
            className="form-check-input"
            id="subscribe"
            name="subscribe"
            checked={formData.subscribe}
            onChange={handleChange}
          />
          <label className="form-check-label" htmlFor="subscribe">
            Send me important updates & promotions via SMS, email, and <span><i class="bi bi-whatsapp"></i></span>WhatsApp
          </label>
        </div>

        {/* Terms and Signup Links */}
        <p className="mt-3 text-center">
          By clicking Register, you agree to the 
          <a href="/terms" className="text-primary mx-1">Terms and Conditions</a> 
          & 
          <a href="/privacy" className="text-primary mx-1">Privacy Policy</a> 
          of AlwaysApply.
        </p>

        {/* Social Signup */}
        <p className="text-center mt-2">or signup with</p>
        <div className="d-flex justify-content-center gap-3">
          <img src={google1} alt='pic'style={{width:"4%"}}/>
          <img src={facebook1} alt='pic'style={{width:"4%"}}/>
          <img src={linkedin } alt='pic'style={{width:"4%"}}/>
          
          
        </div>
      </form>
    </div>
    </div>
  );
}

export default Registerform;
