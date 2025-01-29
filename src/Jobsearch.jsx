 import { Link } from "react-router-dom";
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";


const jobs = [
  {
    title: "Marketing Officer",
    type: "FULL-TIME",
    salary: "20,000 INR - 25,000 INR",
    company: "Intel Corp",
    location: "Hyderabad, India",
    Experience: "Fresher/Entry-Level",
  },
  

  {
    title: "Software Engineer",
    type: "FULL-TIME",
    salary: "50,000 INR - 70,000 INR",
    company: "Google",
    location: "Bangalore, India",
    Experience: "Mid-Level",
  },
  {
    title: "Data Scientist",
    type: "FULL-TIME",
    salary: "70,000 INR - 90,000 INR",
    company: "Facebook",
    location: "Mumbai, India",
    Experience: "Fresher/Entry-Level",
  },
  {
    title: "Graphic Designer",
    type: "PART-TIME",
    salary: "15,000 INR - 20,000 INR",
    company: "Adobe",
    location: "Chennai, India",
    Experience: "Junior",
  },
  {
    title: "Product Manager",
    type: "FULL-TIME",
    salary: "1,00,000 INR - 1,50,000 INR",
    company: "Amazon",
    location: "Pune, India",
    Experience: "Fresher/Entry-Level",
  },
  {
    title: "HR Specialist",
    type: "FULL-TIME",
    salary: "30,000 INR - 40,000 INR",
    company: "Infosys",
    location: "Delhi, India",
    Experience: "Lead/Managerial",
  },
  {
    title: "DevOps Engineer",
    type: "FULL-TIME",
    salary: "60,000 INR - 80,000 INR",
    company: "Microsoft",
    location: "Hyderabad, India",
    Experience: "Fresher/Entry-Level",
  },
  {
    title: "Accountant",
    type: "FULL-TIME",
    salary: "25,000 INR - 35,000 INR",
    company: "TCS",
    location: "Kolkata, India",
    Experience: "Lead/Managerial",
  },
  {
    title: "Marketing Officer",
    type: "PART-TIME",
    salary: "20,000 INR - 25,000 INR",
    company: "Intel Corp",
    location: "Hyderabad, India",
    Experience: "junior",
  },
  {
    title: "Software Engineer",
    type: "Internship",
    salary: "50,000 INR - 70,000 INR",
    company: "Google",
    location: "Bangalore, India",
    Experience: "Fresher/Entry-Level",
  },
  {
    title: "Data Scientist",
    type: "Contract",
    salary: "70,000 INR - 90,000 INR",
    company: "Facebook",
    location: "Mumbai, India",
    Experience: "Fresher/Entry-Level",
  },
  {
    title: "Graphic Designer",
    type: "PART-TIME",
    salary: "15,000 INR - 20,000 INR",
    company: "Adobe",
    location: "Chennai, India",
    Experience: "Mid-Level",
  },
  {
    title: "Product Manager",
    type: "Contract",
    salary: "1,00,000 INR - 1,50,000 INR",
    company: "Amazon",
    location: "Pune, India",
    Experience: "Mid-level",
  },
  {
    title: "HR Specialist",
    type: "FULL-TIME",
    salary: "30,000 INR - 40,000 INR",
    company: "Infosys",
    location: "Delhi, India",
    Experience: "Junior",
  },
];

const Jobsearch = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [locationQuery, setLocationQuery] = useState("");
  const [salaryRange, setSalaryRange] = useState({ min: "", max: "" });
  const [selectedJobTypes, setSelectedJobTypes] = useState([]);
  const [selectedWorkModes, setSelectedWorkModes] = useState([]);
  const [selectedExperienceLevels, setSelectedExperienceLevels] = useState([]);

  const handleCheckboxChange = (setState, value) => {
    setState((prev) =>
      prev.includes(value) ? prev.filter((item) => item !== value) : [...prev, value]
    );
  };

  const filteredJobs = jobs.filter((job) => {
    const matchesSearch =
      job.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      job.company.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesLocation =
      locationQuery === "" || job.location.toLowerCase().includes(locationQuery.toLowerCase());

    const matchesSalary =
      (salaryRange.min === "" || parseInt(job.salary.split(" ")[0].replace(",", "")) >= parseInt(salaryRange.min)) &&
      (salaryRange.max === "" || parseInt(job.salary.split(" ")[2].replace(",", "")) <= parseInt(salaryRange.max));

    const matchesJobType =
      selectedJobTypes.length === 0 || selectedJobTypes.includes(job.type);

    const matchesExperience =
      selectedExperienceLevels.length === 0 || selectedExperienceLevels.includes(job.Experience);

    return matchesSearch && matchesLocation && matchesSalary && matchesJobType && matchesExperience;
  });

  return (
    <div>
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg navbar-light bg-white border-bottom">
        {/* Add your navbar content here */}
      </nav>

      <div className="container m-5">
        <div className="text-center">
          <h1>Job Search</h1>
          <p>Search for your desired job matching your skills</p>
        </div>

        {/* Search Bar */}
        <div className="row mb-4">
          <div className="col-md-10 mx-auto shadow">
            <div className="input-group">
              <input
                type="text"
                className="form-control"
                placeholder="Search job title / Enter skills / Company"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <input
                type="text"
                className="form-control"
                placeholder="Enter locations"
                value={locationQuery}
                onChange={(e) => setLocationQuery(e.target.value)}
              />
              <input
                type="text"
                className="form-control"
                placeholder="Min salary"
                value={salaryRange.min}
                onChange={(e) => setSalaryRange({ ...salaryRange, min: e.target.value })}
              />
              <button className="btn btn-primary">Search</button>
            </div>
          </div>
        </div>

        <div className="row">
          {/* Filters */}
          <div className="col-md-3 p-4" style={{ backgroundColor: "whitesmoke" }}>
            <h5>Filter</h5>

            {/* Job Type */}
            <div className="mb-3">
              <h6>Job Type</h6>
              <div>
                <input
                  type="checkbox"
                  id="fullTime"
                  onChange={() => handleCheckboxChange(setSelectedJobTypes, "FULL-TIME")}
                />{" "}
                Full-Time
              </div>
              <div>
                <input
                  type="checkbox"
                  id="partTime"
                  onChange={() => handleCheckboxChange(setSelectedJobTypes, "PART-TIME")}
                />{" "}
                Part-Time
              </div>
              <div>
                <input
                  type="checkbox"
                  id="Internship"
                  onChange={() => handleCheckboxChange(setSelectedJobTypes, "Internship")}
                />{" "}
                Internship
              </div>
              <div>
                <input
                  type="checkbox"
                  id="Contract"
                  onChange={() => handleCheckboxChange(setSelectedJobTypes, "Contract")}
                />{" "}
                Contract
              </div>
            </div>

            {/* Experience Level */}
            <div>
              <h6>Experience Level</h6>
              <div>
                <input
                  type="checkbox"
                  id="fresher"
                  onChange={() => handleCheckboxChange(setSelectedExperienceLevels, "Fresher/Entry-Level")}
                />{" "}
                Fresher/Entry-Level
              </div>
              <div>
                <input
                  type="checkbox"
                  id="junior"
                  onChange={() => handleCheckboxChange(setSelectedExperienceLevels, "Junior")}
                />{" "}
                Junior
              </div>
                            <div>
                <input
                  type="checkbox"
                  id="Mid-level"
                  onChange={() => handleCheckboxChange(setSelectedExperienceLevels, "Mid-Level")}
                />{" "}
                Mid-Level
              </div>
                            <div>
                <input
                  type="checkbox"
                  id="Lead/Managerial"
                  onChange={() => handleCheckboxChange(setSelectedExperienceLevels, "Lead/Managerial")}
                />{" "}
                Lead/Managerial
              </div>
            </div>
          </div>

          {/* Jobs Listing */}
          <div className="col-md-9">
            <h5>All Jobs ({filteredJobs.length})</h5>
            <div className="row">
              {filteredJobs.map((job, index) => (
                <div key={index} className="col-md-6 mb-4">
                  <div className="card" style={{ backgroundColor: "#DDF2FF" }}>
                    <div className="card-body">
                      <h5 className="card-title">{job.title}</h5>
                      <p className="card-text">
                        <strong>{job.type}</strong> <br />
                        Salary: {job.salary} <br />
                        <strong>{job.company}</strong> <br />
                        {job.location} <br />
                        <strong>Experience: </strong>{job.Experience}
                      </p>
                      
                      <Link to={`/job/${job.title}`}>
                      <button className="btn btn-primary btn-sm me-2">View Details</button>
                      </Link>

                      <Link to="/Fill">
                        <button className="btn btn-outline-primary btn-sm">Apply Now</button>
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Jobsearch;
