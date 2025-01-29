import React from "react";
import { useParams } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./Navbar";

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
    description: "Responsible for developing and executing marketing strategies to enhance brand awareness and increase customer engagement. The role involves working with cross-functional teams to implement campaigns and analyze their effectiveness."
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
    description: "Develop and maintain software solutions for various projects, ensuring high performance and reliability. Work closely with product managers and designers to create seamless user experiences."
  },
  {
    title: "Data Scientist",
    type: "FULL-TIME",
    salary: "70,000 INR - 90,000 INR",
    company: "Facebook",
    location: "Mumbai, India",
    experience: "Fresher/Entry-Level",
    responsibilities: [
      "Analyze large datasets to extract meaningful insights.",
      "Develop predictive models and algorithms to support decision-making.",
      "Collaborate with product and engineering teams to optimize data solutions.",
      "Present findings to stakeholders and recommend actionable strategies."
    ],
    requirements: [
      "Degree in Computer Science, Mathematics, or related field",
      "Proficiency in data analysis and machine learning techniques",
      "Experience with Python, R, and SQL",
      "Strong problem-solving and critical-thinking skills"
    ],
    description: "Work on data projects and collaborate with teams to derive actionable insights from complex datasets. Develop predictive models and perform statistical analysis to drive business decisions."
  },
  {
    title: "Graphic Designer",
    type: "PART-TIME",
    salary: "15,000 INR - 20,000 INR",
    company: "Adobe",
    location: "Chennai, India",
    experience: "Junior",
    responsibilities: [
      "Create visually appealing designs for marketing campaigns.",
      "Develop branding materials, including logos, brochures, and social media graphics.",
      "Work closely with marketing teams to understand design requirements.",
      "Stay updated on the latest design trends and software."
    ],
    requirements: [
      "Bachelor’s degree in Graphic Design or related field",
      "Proficiency in Adobe Creative Suite (Photoshop, Illustrator, InDesign)",
      "Strong creative and visual communication skills",
      "Ability to work under deadlines and collaborate with teams"
    ],
    description: "Create visually appealing designs that convey specific messages to target audiences. Collaborate with marketing teams to design promotional materials and web graphics."
  },

  {
    title: "Product Manager",
    type: "FULL-TIME",
    salary: "1,00,000 INR - 1,50,000 INR",
    company: "Amazon",
    location: "Pune, India",
    experience: "Fresher/Entry-Level",
    responsibilities: [
      "Define and execute product strategy and roadmap.",
      "Work closely with engineering and design teams to develop products.",
      "Conduct market research and analyze customer needs.",
      "Monitor product performance and implement improvements."
    ],
    requirements: [
      "Bachelor’s or Master’s degree in Business, Technology, or a related field.",
      "Experience with product lifecycle management and agile methodologies.",
      "Strong analytical, problem-solving, and leadership skills.",
      "Excellent communication and teamwork abilities."
    ],
    description: "Lead product development initiatives and drive business impact by collaborating with cross-functional teams to launch innovative products."
  },
  {
    title: "HR Specialist",
    type: "FULL-TIME",
    salary: "30,000 INR - 40,000 INR",
    company: "Infosys",
    location: "Delhi, India",
    experience: "Lead/Managerial",
    responsibilities: [
      "Manage recruitment, onboarding, and employee relations.",
      "Develop HR policies and ensure compliance with labor laws.",
      "Conduct training and development programs.",
      "Handle performance evaluations and employee grievances."
    ],
    requirements: [
      "Bachelor’s degree in Human Resources or related field.",
      "Experience in HR processes, employee engagement, and payroll.",
      "Excellent interpersonal and problem-solving skills.",
      "Ability to handle confidential information with discretion."
    ],
    description: "Responsible for overseeing HR functions, including recruitment, employee relations, and compliance, to foster a productive work environment."
  },
  {
    title: "DevOps Engineer",
    type: "FULL-TIME",
    salary: "60,000 INR - 80,000 INR",
    company: "Microsoft",
    location: "Hyderabad, India",
    experience: "Fresher/Entry-Level",
    responsibilities: [
      "Automate deployment and infrastructure management.",
      "Monitor system performance and ensure security compliance.",
      "Work with development teams to improve CI/CD pipelines.",
      "Troubleshoot infrastructure issues and optimize cloud resources."
    ],
    requirements: [
      "Bachelor’s degree in Computer Science or related field.",
      "Knowledge of cloud platforms like AWS, Azure, or GCP.",
      "Experience with DevOps tools like Docker, Kubernetes, and Jenkins.",
      "Strong problem-solving and scripting skills."
    ],
    description: "Implement and manage DevOps processes to improve software deployment, system reliability, and performance optimization."
  },
  {
    title: "Accountant",
    type: "FULL-TIME",
    salary: "25,000 INR - 35,000 INR",
    company: "TCS",
    location: "Kolkata, India",
    experience: "Lead/Managerial",
    responsibilities: [
      "Manage financial records and prepare tax reports.",
      "Ensure compliance with financial regulations.",
      "Analyze financial statements and provide budgeting advice.",
      "Monitor transactions and reconcile accounts."
    ],
    requirements: [
      "Bachelor’s degree in Accounting, Finance, or related field.",
      "Experience in financial reporting and tax preparation.",
      "Proficiency in accounting software like Tally and QuickBooks.",
      "Strong analytical and numerical skills."
    ],
    description: "Maintain financial records, ensure compliance, and support financial decision-making for the organization."
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

const JobDetail = () => {
  const { jobTitle } = useParams();
  const job = jobs.find((j) => j.title === jobTitle);

  if (!job) {
    return <div className="container my-5"><h2>Job not found!</h2></div>;
  }

  return (
    <div className="container my-5">
      <Navbar />
      <h1 className="m-4">{job.title}</h1>
      <p><strong>Company:</strong> {job.company}</p>
      <p><strong>Location:</strong> {job.location}</p>
      <p><strong>Job Type:</strong> {job.type}</p>
      <p><strong>Salary:</strong> {job.salary}</p>
      <p><strong>Experience Level:</strong> {job.experience}</p>
      <h4>Job Description</h4>
      <p>{job.description}</p>
      <h4>Responsibilities</h4>
      <ul>
        {job.responsibilities.map((resp, index) => (
          <li key={index}>{resp}</li>
        ))}
      </ul>
      <h4>Requirements</h4>
      <ul>
        {job.requirements.map((req, index) => (
          <li key={index}>{req}</li>
        ))}
      </ul>
      <a href="/Fill" className="btn btn-primary">Apply Now</a>
    </div>
  );
};

export default JobDetail;
