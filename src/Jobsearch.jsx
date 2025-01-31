 import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";

const jobs = [
  {
    title: "Marketing Officer",
    type: "FULL-TIME",
    salary: "20,000 INR - 25,000 INR",
    company: "Intel Corp",
    location: "Hyderabad, India",
    Experience: "Fresher/Entry-Level",
    description: "Responsible for developing marketing strategies and campaigns.",
    Responsibility:"Develop and execute marketing plans and strategies Conduct market research to identify customer trends and competitors Manage digital marketing campaigns (SEO, social media, email marketing, PPC)     Coordinate with designers and content creators to produce promotional materials   Monitor and analyze marketing performance metrics Organize and participate in promotional events",

    
    
  
    
  },
  {
    title: "Software Engineer",
    type: "FULL-TIME",
    salary: "50,000 INR - 70,000 INR",
    company: "Google",
    location: "Bangalore, India",
    Experience: "Mid-Level",
    description: "Develop and maintain scalable software solutions.",
    Responsibility:"Design, develop, and maintain software applications and systems.Write clean, efficient, and scalable code using programming languages such as Python, Java, C++, JavaScript, etc. ",

  },
  {
    title: "Data Scientist",
    type: "FULL-TIME",
    salary: "70,000 INR - 90,000 INR",
    company: "Facebook",
    location: "Mumbai, India",
    Experience: "Fresher/Entry-Level",
    description:"A Data Scientist is responsible for analyzing complex data sets to extract insights, develop predictive models, and support data-driven decision-making.",
    Responsibility:"Collect, clean, and preprocess large datasets from various sources Apply machine learning algorithms and statistical models to solve business problems Develop predictive models to forecast trends and behaviors",
  },
  {
    title: "Graphic Designer",
    type: "PART-TIME",
    salary: "15,000 INR - 20,000 INR",
    company: "Adobe",
    location: "Chennai, India",
    Experience: "Junior",
    description:"A Graphic Designer is responsible for creating visually appealing designs that communicate messages effectively. They use creativity, typography, color theory, and digital tools to design graphics for websites, social media, branding, advertisements, and more. Graphic Designers collaborate with marketing teams, clients, and other creative professionals to bring ideas to life.",
    Responsibility:"Develop creative concepts and designs for digital and print media.Create logos, banners, social media posts, infographics, and advertisements. Design user interfaces (UI) for websites and mobile apps.",

  },
  {
    title: "Product Manager",
    type: "FULL-TIME",
    salary: "1,00,000 INR - 1,50,000 INR",
    company: "Amazon",
    location: "Pune, India",
    Experience: "Fresher/Entry-Level",
    description:"A Product Manager (PM) is responsible for overseeing the development, strategy, and success of a product. They work at the intersection of business, technology, and user experience to ensure that the product meets customer needs and aligns with company goals. Product Managers collaborate with cross-functional teams, including engineering, design, marketing, and sales, to drive product vision and execution.",
    Responsibility:"Define the product vision, strategy, and roadmap.Collaborate with engineering and design teams to develop product features.",
  },
  {
    title: "HR Specialist",
    type: "FULL-TIME",
    salary: "30,000 INR - 40,000 INR",
    company: "Infosys",
    location: "Delhi, India",
    Experience: "Lead/Managerial",
    description:"An HR Specialist is responsible for managing various aspects of human resources, including recruitment, employee relations, benefits administration, and compliance with labor laws. They ensure that HR policies align with company goals while fostering a positive workplace culture. HR Specialists work closely with management and employees to support organizational growth and employee well-being.",
    Responsibility:"Recruit, interview, and onboard new employees.Develop and implement HR policies and procedures.Manage employee relations, addressing concerns and resolving conflicts.",
  },
  {
    title: "DevOps Engineer",
    type: "FULL-TIME",
    salary: "60,000 INR - 80,000 INR",
    company: "Microsoft",
    location: "Hyderabad, India",
    Experience: "Fresher/Entry-Level",
    description:"A DevOps Engineer is responsible for bridging the gap between software development and IT operations. They ensure efficient and automated deployment, integration, and monitoring of applications to enhance system reliability, scalability, and security. DevOps Engineers work with CI/CD pipelines, cloud infrastructure, and automation tools to streamline the software development lifecycle.",
    Responsibility:"Design, implement, and manage CI/CD pipelines for automated software deployment.Automate infrastructure provisioning, configuration, and scaling using tools like Terraform, Ansible, or Kubernetes.",
  },
  {
    title: "Accountant",
    type: "FULL-TIME",
    salary: "25,000 INR - 35,000 INR",
    company: "TCS",
    location: "Kolkata, India",
    Experience: "Lead/Managerial",
    description:"An Accountant is responsible for managing financial records, ensuring accuracy in financial transactions, and preparing reports in compliance with accounting standards and regulations. Accountants analyze financial data, assist in budgeting, and provide insights to support business decision-making. They play a key role in maintaining financial health and ensuring compliance with tax laws and financial regulations.",
    Responsibility:"Prepare and maintain financial records, ensuring accuracy and compliance with standards.Monitor and reconcile accounts payable and accounts receivable.",
  },
  {
    title: "Marketing Officer",
    type: "PART-TIME",
    salary: "20,000 INR - 25,000 INR",
    company: "Intel Corp",
    location: "Hyderabad, India",
    Experience: "junior",
    description:"Responsible for developing marketing strategies and campaigns.",
    Responsibility:"Develop and execute marketing plans and strategies Conduct market research to identify customer trends and competitors Manage digital marketing campaigns (SEO, social media, email marketing, PPC)     Coordinate with designers and content creators to produce promotional materials   Monitor and analyze marketing",
  },
  {
    title: "Software Engineer",
    type: "Internship",
    salary: "50,000 INR - 70,000 INR",
    company: "Google",
    location: "Bangalore, India",
    Experience: "Fresher/Entry-Level",
    description:"Develop and maintain scalable software solutions.",
    Responsibility:"Design, develop, and maintain software applications and systems.Write clean, efficient, and scalable code using programming languages such as Python, Java, C++, JavaScript, etc",
  },
  {
    title: "Data Scientist",
    type: "Contract",
    salary: "70,000 INR - 90,000 INR",
    company: "Facebook",
    location: "Mumbai, India",
    Experience: "Fresher/Entry-Level",
    description:"A Data Scientist is responsible for analyzing complex data sets to extract insights, develop predictive models, and support data-driven decision-making",
    Responsibility:"Collect, clean, and preprocess large datasets from various sources Apply machine learning algorithms and statistical models to solve business problems Develop predictive models to forecast trends and behaviors",
  },
  {
    title: "Graphic Designer",
    type: "PART-TIME",
    salary: "15,000 INR - 20,000 INR",
    company: "Adobe",
    location: "Chennai, India",
    Experience: "Mid-Level",
    description:"A Graphic Designer is responsible for creating visually appealing designs that communicate messages effectively. They use creativity, typography, color theory, and digital tools to design graphics for websites",
    Responsibility:"Develop creative concepts and designs for digital and print media.Create logos, banners, social media posts, infographics, and advertisements. Design user interfaces (UI) for websites",
  },
  {
    title: "Product Manager",
    type: "Contract",
    salary: "1,00,000 INR - 1,50,000 INR",
    company: "Amazon",
    location: "Pune, India",
    Experience: "Mid-level",
    description:"A Product Manager (PM) is responsible for overseeing the development, strategy, and success of a product. They work at the intersection of business, technology, and user experience to ensure that the product meets customer needs and aligns",
    Responsibility:"Define the product vision, strategy, and roadmap.Collaborate with engineering and design teams to develop product features",
  },
  {
    title: "HR Specialist",
    type: "FULL-TIME",
    salary: "30,000 INR - 40,000 INR",
    company: "Infosys",
    location: "Delhi, India",
    Experience: "Junior",
    description:"An HR Specialist is responsible for managing various aspects of human resources, including recruitment, employee relations, benefits administration, and compliance with labor laws. They ensure that HR policies align with company goals while fostering a positive workplace ",
    Responsibility:"Recruit, interview, and onboard new employees.Develop and implement HR policies and procedures.Manage employee relations, addressing concerns and resolving conflicts",
  },
  // Add descriptions to other jobs...
];

const Jobsearch = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [locationQuery, setLocationQuery] = useState("");
  const [selectedJobTypes, setSelectedJobTypes] = useState([]);
  const [selectedExperienceLevels, setSelectedExperienceLevels] = useState([]);
  const [activeJob, setActiveJob] = useState(null); // For "View Details" functionality

  const handleCheckboxChange = (setState, value) => {
    setState((prev) =>
      prev.includes(value) ? prev.filter((item) => item !== value) : [...prev, value]
    );
  };

  const filteredJobs = jobs.filter((job) => {
    return (
      (searchQuery === "" ||
        job.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        job.company.toLowerCase().includes(searchQuery.toLowerCase())) &&
      (locationQuery === "" || job.location.toLowerCase().includes(locationQuery.toLowerCase())) &&
      (selectedJobTypes.length === 0 || selectedJobTypes.includes(job.type)) &&
      (selectedExperienceLevels.length === 0 || selectedExperienceLevels.includes(job.Experience))
    );
  });

  return (
    <div className="container mt-5">
      <Navbar />
      <h1 className="text-center mt-5">Job Search</h1>
      
      {/* Search Bar */}
      <div className="row mb-4">
        <div className="col-md-10 mx-auto shadow">
          <div className="input-group">
            <input
              type="text"
              className="form-control"
              placeholder="Search job title / Company"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <input
              type="text"
              className="form-control"
              placeholder="Enter location"
              value={locationQuery}
              onChange={(e) => setLocationQuery(e.target.value)}
            />
            <button className="btn btn-primary">Search</button>
          </div>
        </div>
      </div>

      <div className="row">
        {/* Filters Section */}
        <div className="col-md-3 p-4 bg-light">
          <h5>Filter</h5>

          {/* Job Type Filter */}
          <div className="mb-3">
            <h6>Job Type</h6>
            <div>
              <input
                type="checkbox"
                id="fullTime"
                onChange={() => handleCheckboxChange(setSelectedJobTypes, "FULL-TIME")}
              /> Full-Time
            </div>
            <div>
              <input
                type="checkbox"
                id="partTime"
                onChange={() => handleCheckboxChange(setSelectedJobTypes, "PART-TIME")}
              /> Part-Time
            </div>
            <div>
              <input
                type="checkbox"
                id="Internship"
                onChange={() => handleCheckboxChange(setSelectedJobTypes, "Internship")}
              /> Internship
            </div>
            <div>
              <input
                type="checkbox"
                id="Contract"
                onChange={() => handleCheckboxChange(setSelectedJobTypes, "Contract")}
              /> Contract
            </div>
          </div>

          {/* Experience Level Filter */}
          <div>
            <h6>Experience Level</h6>
            <div>
              <input
                type="checkbox"
                id="fresher"
                onChange={() => handleCheckboxChange(setSelectedExperienceLevels, "Fresher/Entry-Level")}
              /> Fresher/Entry-Level
            </div>
            <div>
              <input
                type="checkbox"
                id="junior"
                onChange={() => handleCheckboxChange(setSelectedExperienceLevels, "Junior")}
              /> Junior
            </div>
            <div>
              <input
                type="checkbox"
                id="Mid-level"
                onChange={() => handleCheckboxChange(setSelectedExperienceLevels, "Mid-Level")}
              /> Mid-Level
            </div>
            <div>
              <input
                type="checkbox"
                id="Lead/Managerial"
                onChange={() => handleCheckboxChange(setSelectedExperienceLevels, "Lead/Managerial")}
              /> Lead/Managerial
            </div>
          </div>
        </div>

        {/* Job Listings */}
        <div className="col-md-4 ">
          
          <h5>All Jobs ({filteredJobs.length})</h5>
          <div className="row">
            {filteredJobs.map((job, index) => (
              <div key={index} className="col-md-12 mb-3">
                <div className="card p-3" style={{backgroundColor:"#DDF2FF"}}>
                  <h5>{job.title}</h5>
                  <p>
                    <strong>{job.company}</strong> - {job.location} <br />
                    <strong>Salary:</strong> {job.salary} <br />
                    <strong>Experience:</strong> {job.Experience}
                  </p>
                  <button className="btn btn-primary btn-sm me-2 " onClick={() => setActiveJob(job)}>
                    View Details
                  </button>
                  <Link to="/Fill">
                    <button className="btn btn-outline-primary btn-sm mt-2">Apply Now</button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Job Details Section */}
        {activeJob && (
          <div className="col-md-3 ">
            <div className="card shadow-lg p-3 position-sticky top-0">
              <button className="btn-close float-end" onClick={() => setActiveJob(null)}></button>
              <h4 className="text-center">{activeJob.title}</h4>
              <h6 className="text-muted">{activeJob.company}</h6>
              <p>
                <strong>Location:</strong> {activeJob.location}
              </p>
              <p>
                <strong>Salary:</strong> {activeJob.salary}
              </p>
              <p>
                <strong>Experience:</strong> {activeJob.Experience}
              </p>
              <p>
                <strong>Job Type:</strong> {activeJob.type}
              </p>
              <p>
                <strong>Description:</strong> {activeJob.description}
              </p>
              <p>
                <strong>Resposibility:</strong> {activeJob.Responsibility}
              </p>
              <Link to="/Fill">
                <button className="btn btn-success w-100">Apply Now</button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Jobsearch;
