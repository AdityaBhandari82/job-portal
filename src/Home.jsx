import React from "react";
import Navbar from "./Navbar";
import 'bootstrap/dist/css/bootstrap.min.css';
import stand from "./stand.png";
import home from "./home.jpeg";
import { Link } from "react-router-dom";
import uber from "./uber 1.png";
import goo from "./goo.png";
import microsoft from "./microsoft 1.png";
import apple from "./apple-logo 1.png";
import sam from "./sam.png";
import pencil from "./pencil.png";
import book from "./book.png";
import certificate from "./certificate.png";
import cap from "./cap.png";
import degree from "./degree.png";
import check from "./check-circle.png";
import arrow from "./location-arrow.png";
import phone from "./phone-call 1.png";
import internship from "./internship.jpeg";
import full from "./full time.jpeg";
import part from "./part time.jpeg";
import startup from "./startup.jpeg";
import fresher from "./fresher.jpeg";
import { useState } from "react";



const Home=()=>{
  const imageUrls = [
    'https://icon-library.com/images/facebook-icon-transparent-vector/facebook-icon-transparent-vector-5.jpg',
    'https://static.vecteezy.com/system/resources/previews/018/930/569/original/youtube-logo-youtube-icon-transparent-free-png.png',
    'https://static.vecteezy.com/system/resources/previews/018/930/692/original/instagram-logo-instagram-icon-transparent-free-png.png',
    'https://th.bing.com/th/id/R.9207bed6b3d0b9e9b97e8005d171cb3b?rik=zRk%2bp9B1mG6YWw&riu=http%3a%2f%2fpluspng.com%2fimg-png%2flinkedin-icon-png-linkedin-square-logo-free-icon-512.png&ehk=lAv19wf1RoNWazfGjBMO%2fHe%2fw4HA2p6ld1Tho%2bV5sEk%3d&risl=&pid=ImgRaw&r=0',
    'https://img.icons8.com/ios7/600w/000000/x.png',
  ];
  const [jobTitle, setJobTitle] = useState("");
  const [location, setLocation] = useState("");
  const [experience, setExperience] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  

  const jobData = [
    { id: 1, title: "Software Developer", location: "Bangalore", experience: 1 },
    { id: 2, title: "Graphic Designer", location: "Chennai", experience: 2 },
    { id: 3, title: "Data Scientist", location: "Mumbai", experience: 1 },
    { id: 4, title: "Product Manager", location: "Pune", experience: 3 },
    { id: 5, title: "HR Specialist", location: "Delhi", experience: 3 },
    {id:6, title:"Marketing Officer", location:"Hydrabad", experience:1},
    {id:7, title:"Devops Engineer", location:"Hydrabad", experience:2},
    {id:8, title:"Accountant", location:"kolkata", experience:3},
    { id: 9, title: "Software Developer", location: "Bangalore", experience: 3 },
    { id: 10, title: "Graphic Designer", location: "Chennai", experience: 3 },
    { id: 11, title: "Data Scientist", location: "Mumbai", experience: 2 },
    { id: 12, title: "HR Specialist", location: "Delhi", experience: 1 },
    {id:13, title:"Marketing Officer", location:"Hydrabad", experience:2},
    {id:14, title:"Devops Engineer", location:"Hydrabad", experience:3},
  ];

  const handleSearch = () => {
    const results = jobData.filter((job) => {
      return (
        (jobTitle === "" || job.title.toLowerCase().includes(jobTitle.toLowerCase())) &&
        (location === "" || job.location.toLowerCase().includes(location.toLowerCase())) &&
        (experience === "" || job.experience <= Number(experience))
      );
    });
    setSearchResults(results);
  };
  
       return(
<div style={{marginTop:"25px"}}>
    <Navbar/>
    <div className="p-3 mt-3" style={{ backgroundColor: "#DDF2FF" }}>
        <div className="row align-items-center">
          <div className="col-12 col-md-6 text-center text-md-start" style={{ marginTop: "5%" }}>
            <h1>Find your dream job now</h1>
            <h4>1 lakh+ jobs for you to explore</h4>

            <div className="mt-4">
              <div className="input-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Search job title / Enter skills / Company"
                  value={jobTitle}
                  onChange={(e) => setJobTitle(e.target.value)}
                />
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter locations"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                />
                <input
                  type="number"
                  className="form-control"
                  placeholder="Year of experience"
                  value={experience}
                  onChange={(e) => setExperience(e.target.value)}
                />
                <button className="btn btn-primary" type="button" onClick={handleSearch}>
                  Search
                </button>
              </div>
            </div>
          </div>

          <div className="col-12 col-md-6 text-center mt-4 mt-md-0">
            <img src={stand} alt="pic" className="img-fluid" style={{ maxWidth: "400px" }} />
          </div>
        </div>
      </div>

      {/* Search Results Section */}
      <div className="container mt-4">
        <h3>Search Results:</h3>
        {searchResults.length > 0 ? (
          <div className="row">
            {searchResults.map((job) => (
              <div key={job.id} className="col-12 col-md-6 mb-3">
                <div className="card shadow-sm">
                  <div className="card-body">
                    <h5 className="card-title">{job.title}</h5>
                    <p className="card-text">
                      Location: {job.location} <br />
                      Experience: {job.experience} years
                    </p>
                  </div>
                </div>
              </div>
              
            ))}
          </div>
        ) : (
          <p>No jobs found. Please try different search criteria.</p>
        )}
      
    
  {/* Popular Categories Block */}
  <div className="container text-center mt-5">
    <h3>Popular Categories</h3>
  </div>

  <div className="container text-center">
    <div className="row justify-content-center">
      <div className="col-6 col-sm-4 col-md-2 mb-3">
        <button className="btn btn-light w-100" type="button">
          <img src={home} alt="Remote job" className="img-fluid" style={{ maxWidth: "20%" }} />
          <br />
          Remote 
        </button>
      </div>
      <div className="col-6 col-sm-4 col-md-2 mb-3">
        <button className="btn btn-light w-100" type="button">
          <img src={internship} alt="Internship" className="img-fluid" style={{ maxWidth: "20%" }} />
          <br />
          Internship
        </button>
      </div>
      <div className="col-6 col-sm-4 col-md-2 mb-3">
        <button className="btn btn-light w-100" type="button">
          <img src={full} alt="Full Time" className="img-fluid" style={{ maxWidth: "20%" }} />
          <br />
          Full Time
        </button>
      </div>
      <div className="col-6 col-sm-4 col-md-2 mb-3">
        <button className="btn btn-light w-100" type="button">
          <img src={part} alt="Part Time Job" className="img-fluid" style={{ maxWidth: "20%" }} />
          <br />
          Part Time Job
        </button>
      </div>
      <div className="col-6 col-sm-4 col-md-2 mb-3">
        <button className="btn btn-light w-100" type="button">
          <img src={startup} alt="Startup" className="img-fluid" style={{ maxWidth: "20%" }} />
          <br />
          Startup
        </button>
      </div>
      <div className="col-6 col-sm-4 col-md-2 mb-3">
        <button className="btn btn-light w-100" type="button">
          <img src={fresher} alt="Fresher" className="img-fluid" style={{ maxWidth: "20%" }} />
          <br />
          Fresher
        </button>
      </div>
    </div>
  </div>
</div>


{/* second */}
<div className="container mt-5 p-3" style={{ backgroundColor: "#DDF2FF" }}>
  <div className="row align-items-center">
    {/* Registration Section */}
    <div className="col-12 col-lg-6 mb-4">
      <div
        className="p-5 bg-white shadow rounded"
        style={{ borderRadius: "20px" }}
      >
        <h4>More than 20 lakh Indians<br /> trust Job Hai</h4>
        <button className="btn btn-primary mt-3" type="button">
          Register Now
        </button>
      </div>
    </div>

    {/* Features Section */}
    <div className="col-12 col-lg-6">
      <div className="row text-center">
        {/* Feature 1 */}
        <div className="col-12 col-sm-4 mb-4">
          <img src={check} alt="Verified Job" className="img-fluid mb-2" />
          <p>100% free &<br />verified jobs</p>
        </div>
        {/* Feature 2 */}
        <div className="col-12 col-sm-4 mb-4">
          <img src={arrow} alt="Best Job" className="img-fluid mb-2" />
          <p>Best jobs in<br />your area</p>
        </div>
        {/* Feature 3 */}
        <div className="col-12 col-sm-4 mb-4">
          <img src={phone} alt="Direct Call" className="img-fluid mb-2" />
          <p>Direct call with HR<br />for interviews</p>
        </div>
      </div>
    </div>
  </div>
</div>


{/* top companies hiring now */}
<div
  className="container p-4 my-5"
  style={{ backgroundColor: "#DDF2FF", borderRadius: "20px" }}
>
  <h2 className="text-center mb-4">Top Companies Hiring Now</h2>
  
  <div className="row text-center">
    {/* Company 1 */}
    <div className="col-6 col-sm-4 col-md-2 mb-4">
      <img src={uber} alt="Uber" style={{ width: "50px" }} className="mb-2" />
      <p>Uber</p>
      <Link to="/">View jobs</Link>
    </div>
    {/* Company 2 */}
    <div className="col-6 col-sm-4 col-md-2 mb-4">
      <img src={goo} alt="Google" style={{ width: "50px" }} className="mb-2" />
      <p>Google</p>
      <Link to="/">View jobs</Link>
    </div>
    {/* Company 3 */}
    <div className="col-6 col-sm-4 col-md-2 mb-4">
      <img
        src={microsoft}
        alt="Microsoft"
        style={{ width: "50px" }}
        className="mb-2"
      />
      <p>Microsoft</p>
      <Link to="/">View jobs</Link>
    </div>
    {/* Company 4 */}
    <div className="col-6 col-sm-4 col-md-2 mb-4">
      <img src={apple} alt="Apple" style={{ width: "50px" }} className="mb-2" />
      <p>Apple</p>
      <Link to="/">View jobs</Link>
    </div>
    {/* Company 5 */}
    <div className="col-6 col-sm-4 col-md-2 mb-4">
      <img src={sam} alt="Samsung" style={{ width: "50px" }} className="mb-2" />
      <p>Samsung</p>
      <Link to="/">View jobs</Link>
    </div>
  </div>
</div>



{/* whats your qualifications */}
<div
  className="container p-4 mb-5"
  style={{ backgroundColor: "#DDF2FF", borderRadius: "20px", width: "85%" }}
>
  <h2 className="text-center">What is your qualification?</h2>
  
  <div className="row text-center mt-5">
    {/* Qualification 1 */}
    <div className="col-6 col-sm-4 col-md-2 mb-4">
      <img src={pencil} alt="10th Pass" className="mb-2" />
      <h6>10th Pass</h6>
      <p>100,000+ vacancy</p>
    </div>
    {/* Qualification 2 */}
    <div className="col-6 col-sm-4 col-md-2 mb-4">
      <img src={book} alt="12th Pass" className="mb-2" />
      <h6>12th Pass</h6>
      <p>100,000+ vacancy</p>
    </div>
    {/* Qualification 3 */}
    <div className="col-6 col-sm-4 col-md-2 mb-4">
      <img src={certificate} alt="Diploma" className="mb-2" />
      <h6>Diploma</h6>
      <p>100,000+ vacancy</p>
    </div>
    {/* Qualification 4 */}
    <div className="col-6 col-sm-4 col-md-2 mb-4">
      <img src={cap} alt="Graduate" className="mb-2" />
      <h6>Graduate</h6>
      <p>100,000+ vacancy</p>
    </div>
    {/* Qualification 5 */}
    <div className="col-6 col-sm-4 col-md-2 mb-4">
      <img src={degree} alt="Post Graduate" className="mb-2" />
      <h6>Post Graduate</h6>
      <p>100,000+ vacancy</p>
    </div>
  </div>
</div>

{/* talk to HR section  */}
<div className="container mb-3 p-3 d-flex shadow"
style={{backgroundColor:"#DDF2FF", justifyContent:"space-evenly",borderRadius:"20px",width:"70%"}}>
<div>
  <h3>Talk to HR directly & <br/>get a job with better <br/> salary! </h3>
  <p className="mt-3">Get local job in your city!</p>
</div>
<div className="bg-white p-3 shadow" style={{borderRadius:"20px"}}>
  <p>Enter your number to continue<br/>Mobile number</p>
  <input
          type="number"
          className="form-control"
          placeholder="Enter your mobile number to get OTP"
          />
        <button className="btn btn-primary mt-3">Get startted</button>
</div>
</div>

{/* 100k content */}
<div className="container my-5">
  <div className="row text-center">
    {/* Active Jobs */}
    <div className="col-12 col-sm-4 mb-4">
      <h1>100k+</h1>
      <p>Active jobs</p>
    </div>
    {/* New Openings */}
    <div className="col-12 col-sm-4 mb-4">
      <h1>10k+</h1>
      <p>New opening everyday</p>
    </div>
    {/* Work from Home */}
    <div className="col-12 col-sm-4 mb-4">
      <h1>5k+</h1>
      <p>Work from home jobs</p>
    </div>
  </div>
</div>
<div>
  <p style={{ textDecoration: "underline", textDecorationColor: "blue", textAlign: "center" }}>
    <b>Connect with us</b>
  </p>

  <div 
    style={{
      display: 'flex', 
      justifyContent: 'center', 
      alignItems: 'center', 
      gap: '20px', 
      flexWrap: 'wrap', 
      margin: '0 auto',
      padding: '10px'
    }}
  >
    {imageUrls.map((url, index) => (
      <img
        key={index}
        src={url}
        alt={`Image ${index + 1}`}
        style={{
          width: '50px', 
          margin: '10px', 
          flexBasis: '20%',   
          maxWidth: '50px',   
          flexShrink: 0       
        }}
      />
    ))}
  </div>
</div>

{/* footer */}
<div className="container d-flex flex-wrap justify-content-evenly m-5">
  <ul style={{ listStyle: "none", padding: 0, marginBottom: "20px" }}>
    <li style={{ marginBottom: "10px" }}>About us</li>
    <li style={{ marginBottom: "10px" }}>Career</li>
    <li style={{ marginBottom: "10px" }}>Employer home</li>
    <li style={{ marginBottom: "10px" }}>Site map</li>
  </ul>

  <ul style={{ listStyle: "none", padding: 0, marginBottom: "20px" }}>
    <li style={{ marginBottom: "10px" }}>Help center</li>
    <li style={{ marginBottom: "10px" }}>Summon notice</li>
    <li style={{ marginBottom: "10px" }}>Grievance</li>
    <li style={{ marginBottom: "10px" }}>Report issue</li>
  </ul>

  <ul style={{ listStyle: "none", padding: 0, marginBottom: "20px" }}>
    <li style={{ marginBottom: "10px" }}>Privacy policy</li>
    <li style={{ marginBottom: "10px" }}>Term & conditions</li>
    <li style={{ marginBottom: "10px" }}>Fraud alert</li>
    <li style={{ marginBottom: "10px" }}>Trust & safety</li>
  </ul>
</div>

<p style={{ textDecoration: "underline", textDecorationColor: "black", textAlign: "center" }}>
  All rights reserved 2025 Nova Necter Pvt. Ltd.
</p>

</div> 
   );
}
export default Home;
