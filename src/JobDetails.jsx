 import List from "./List";
import { Link } from "react-router-dom";

const jobs = [
  {
    title: "Marketing Officer",
    type: "FULL-TIME",
    salary: "20,000 INR - 25,000 INR",
    company: "Intel Corp",
    location: "Hyderabad, India",
    experience: "Fresher/Entry-Level",
  },
  {
    title: "Software Engineer",
    type: "FULL-TIME",
    salary: "50,000 INR - 70,000 INR",
    company: "Google",
    location: "Bangalore, India",
    experience: "Mid-Level",
  },
  {
    title: "Data Scientist",
    type: "FULL-TIME",
    salary: "70,000 INR - 90,000 INR",
    company: "Facebook",
    location: "Mumbai, India",
    experience: "Fresher/Entry-Level",
  },
  {
    title: "Graphic Designer",
    type: "PART-TIME",
    salary: "15,000 INR - 20,000 INR",
    company: "Adobe",
    location: "Chennai, India",
    experience: "Junior",
  },
];

const JobDetails = () => {
  return (
    <div className="container d-flex gap-4">
      <div className="row">
        <div className="col-md-12">
          <h5>All Jobs ({jobs.length})</h5>
          <div className="row">
            {jobs.map((job, index) => (
              <div key={index} className="col-md-6 mb-4">
                <div className="card" style={{ backgroundColor: "#DDF2FF" }}>
                  <div className="card-body">
                    <h5 className="card-title">{job.title}</h5>
                    <p className="card-text">
                      <strong>{job.type}</strong> <br />
                      Salary: {job.salary} <br />
                      <strong>{job.company}</strong> <br />
                      {job.location} <br />
                      <strong>Experience: </strong>
                      {job.experience}
                    </p>
                    <Link to={`/job/${index}`}>
                      <button className="btn btn-primary btn-sm me-2">
                        View Details
                      </button>
                    </Link>
                    <Link to="/apply">
                      <button className="btn btn-outline-primary btn-sm">
                        Apply Now
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      <List />
    </div>
  );
};

export default JobDetails;
