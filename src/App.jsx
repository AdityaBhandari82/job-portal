import React from "react";
import {BrowserRouter as Router,Route,Routes } from "react-router-dom";
import Home from "./Home";
import Login from "./Login";
import Registerform from "./Registerform";
import Jobsearch from "./Jobsearch";
import "./App.css";
import Apply from "./Apply";
import Singnup from "./Singnup";
import Post from "./Post";
import Profile from "./Profile";
import JobDetails from "./JobDetails"
import Fill from "./Fill";
import List from "./List";
 
const Main=()=>{
  return(
    <div>
      <Router>

     <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/Login" element={<Login/>}/>
      <Route path="/Registerform" element={<Registerform/>}/>
      <Route path="/Jobsearch" element={<Jobsearch/>}/>
      <Route path="/Apply" element={<Apply/>}/>
      <Route path="/Singnup" element={<Singnup/>}/>
      <Route path="/Post" element={<Post/>}/>
      <Route path="/Profile" element={<Profile/>}/>
      <Route path="/JobDetails" element={<JobDetails />} />
      <Route path="/Fill" element={<Fill />}/>
      <Route path="/List" element={<List/>}/>
     </Routes>



      </Router>
    </div>

  );
}
export default Main;