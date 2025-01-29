import React, { useState } from 'react';
import Navbar from './Navbar';

const Profile = () => {
  const [resume, setResume] = useState(null);

  const handleResumeChange = (e) => {
    setResume(e.target.files[0]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add the logic for handling the resume submission (e.g., uploading to a server)
    console.log('Resume submitted:', resume);
  };

  return (
    <div className="container mt-5">
        <Navbar />
      <div className="card shadow-lg p-4 mx-auto" style={{ maxWidth: '500px' }}>
        <div className="text-center">
          {/* Profile Picture */}
          <img
            src="https://www.opticalexpress.co.uk/media/1064/man-with-glasses-smiling-looking-into-distance.jpg"
            alt="Profile Picture"
            className="profile-picture"
          />
        </div>
        <div>
          <h2 className="mb-0">Atul Semwal</h2>
          <p className="text-muted mb-0">atulsemwal77@gmail.com</p>
          <p className="text-muted mb-0">082658 60188</p>
          <p className="text-muted">India, IN</p>
        </div>
        <hr />
        {/* Resume Upload */}
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="resume" className="form-label">Upload Resume</label>
            <input
              type="file"
              className="form-control"
              id="resume"
              accept=".pdf, .doc, .docx"
              onChange={handleResumeChange}
            />
            <small className="text-muted">Accepted formats: PDF, DOC, DOCX</small>
          </div>
          <button type="submit" className="btn btn-primary w-100">Submit</button>
        </form>
      </div>

      {/* Job Matches Section */}
      <h5 className="section-header mt-4">Improve your job matches</h5>
      <ul className="list-group">
        <li className="list-group-item d-flex justify-content-between align-items-center">
          <div>
            <strong>Qualifications</strong>
            <p className="text-muted mb-0">Highlight your skills and experience.</p>
          </div>
          <i className="bi bi-chevron-right"></i>
        </li>
        <li className="list-group-item d-flex justify-content-between align-items-center">
          <div>
            <strong>Job preferences</strong>
            <p className="text-muted mb-0">Save specific details like minimum desired pay and schedule.</p>
          </div>
          <i className="bi bi-chevron-right"></i>
        </li>
        <li className="list-group-item d-flex justify-content-between align-items-center">
          <div>
            <strong>Hide jobs with these details</strong>
            <p className="text-muted mb-0">Manage the qualifications or preferences used to hide jobs from your search.</p>
          </div>
          <i className="bi bi-chevron-right"></i>
        </li>
        <li className="list-group-item d-flex justify-content-between align-items-center">
          <div>
            <strong>Ready to work</strong>
            <p className="text-muted mb-0">Let employers know that you're available to start working as soon as possible.</p>
          </div>
          <i className="bi bi-chevron-right"></i>
        </li>
      </ul>
    </div>
  );
};

export default Profile;