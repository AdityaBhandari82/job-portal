// import React from "react";
import { useParams } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

const jobs = [
  {
    title: "Marketing Officer",
    type: "FULL-TIME",
    salary: "20,000 INR - 25,000 INR",
    company: "Intel Corp",
    location: "Hyderabad, India",
    experience: "Fresher/Entry-Level",
    responsibilities: [
      "Develop marketing strategies and campaigns to promote products and services.",
      "Conduct market research to identify customer needs and trends.",
      "Manage social media platforms and create engaging content.",
      "Collaborate with sales teams to improve outreach and customer engagement."
    ],
    requirements: [
      "Bachelor’s degree in Marketing, Business, or a related field (preferred)",
      "Proficiency in MS Office and marketing tools",
      "Ability to work collaboratively in a team environment",
      "Strong analytical and communication skills"
    ],
    description: "Responsible for developing and executing marketing strategies to enhance brand awareness and increase customer engagement."
  },
  {
    title: "Software Engineer",
    type: "FULL-TIME",
    salary: "50,000 INR - 70,000 INR",
    company: "Google",
    location: "Bangalore, India",
    experience: "Mid-Level",
    responsibilities: [
      "Design, develop, and maintain scalable software solutions.",
      "Collaborate with cross-functional teams to define project requirements.",
      "Write clean, efficient, and maintainable code.",
      "Perform code reviews and optimize application performance."
    ],
    requirements: [
      "Bachelor’s or Master’s degree in Computer Science or related field",
      "Experience with programming languages such as Java, Python, or C++",
      "Familiarity with cloud technologies and software development lifecycle",
      "Problem-solving mindset and ability to work in a team"
    ],
    description: "Develop and maintain software solutions for various projects, ensuring high performance and reliability."
  }
];

const List = () => {
  const { jobTitle } = useParams();

  // Normalize jobTitle for comparison (lowercase & replace hyphens with spaces)
//   const formattedJobTitle = jobTitle.replace(/-/g, " ").toLowerCase();

  // Find the correct job object
//   const job = jobs.find((j) => j.title.toLowerCase() === formattedJobTitle);

  if (!jobs) {
    return (
      <div className="container my-5">
        <h2>Job not found!</h2>
      </div>
    );
  }

  return (
    <div className="container my-5">
      <h1 className="m-4">{jobs.title}</h1>
      <p><strong>Company:</strong> {jobs.company}</p>
      <p><strong>Location:</strong> {jobs.location}</p>
      <p><strong>Job Type:</strong> {jobs.type}</p>
      <p><strong>Salary:</strong> {jobs.salary}</p>
      <p><strong>Experience Level:</strong> {jobs.experience}</p>
      
      <h4>Job Description</h4>
      <p>{jobs.description}</p>

      {jobs.responsibilities && jobs.responsibilities.length > 0 && (
        <>
          <h4>Responsibilities</h4>
          <ul>
            {jobs.responsibilities.map((responsibility, index) => (
              <li key={index}>{responsibility}</li>
            ))}
          </ul>
        </>
      )}

      {jobs.requirements && jobs.requirements.length > 0 && (
        <>
          <h4>Requirements</h4>
          <ul>
            {jobs.requirements.map((requirement, index) => (
              <li key={index}>{requirement}</li>
            ))}
          </ul>
        </>
      )}

      <a href="/Fill" className="btn btn-primary">Apply Now</a>
    </div>
  );
};

export default List;
