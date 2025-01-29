// 
// 
import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import news from "./news.png";
import google from "./google.png";
import facebook from "./facebook.png";
import linkdin from "./linkdin.png";
import { Link } from "react-router-dom";

const Singnup = () => {
    return (
        <div>
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
                                Signup
                            </a>
                            <Link to="/Jobsearch" className="btn btn-primary">
                                Find a job
                            </Link>
                        </div>
                    </div>
                </div>
            </nav>

            <div className="container text-center my-4">
                <h2>Login to your Account</h2>
                <p>Welcome back! Select the below login methods</p>
            </div>

            <div className="container">
                <div className="row align-items-center">
                    {/* Login Form */}
                    <div className="col-md-6 mb-4">
                        <div className="card p-4 mx-auto" style={{ maxWidth: '400px' }}>
                            <h4 className="mb-3">Login</h4>
                            <form>
                                <div className="mb-3">
                                    <label htmlFor="email" className="form-label">
                                        Email ID / Username
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        className="form-control"
                                        placeholder="Enter email id / username"
                                    />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="password" className="form-label">
                                        Password
                                    </label>
                                    <div className="input-group">
                                        <input
                                            type="password"
                                            id="password"
                                            className="form-control"
                                            placeholder="Enter password"
                                        />
                                        <button type="button" className="btn btn-outline-secondary">
                                            Show
                                        </button>
                                    </div>
                                </div>
                                <div className="d-flex justify-content-between align-items-center mb-3">
                                    <div className="form-check">
                                        <input
                                            type="checkbox"
                                            id="remember"
                                            className="form-check-input"
                                        />
                                        <label htmlFor="remember" className="form-check-label">
                                            Remember me
                                        </label>
                                    </div>
                                    <a href="#" className="text-decoration-none">
                                        Forgot Password?
                                    </a>
                                </div>
                                <div className="d-grid mb-3">
                                    <button type="submit" className="btn btn-primary">
                                        Signup
                                    </button>
                                </div>
                                <div className="text-center mb-3">
                                    <span><hr />or login with<hr /></span>
                                    <div className="mt-3">
                                        <img src={google} alt="Google" style={{ width: "40px" }} className="me-2" />
                                        <img src={facebook} alt="Facebook" style={{ width: "40px" }} className="me-2" />
                                        <img src={linkdin} alt="LinkedIn" style={{ width: "40px" }} />
                                    </div>
                                </div>
                                <div className="text-center">
                                    <p>
                                        Don’t have an account?{' '}
                                        <Link to="/Registerform" className="text-primary text-decoration-none">
                                            Register
                                        </Link>
                                    </p>
                                </div>
                            </form>
                        </div>
                    </div>
                    {/* Image Section */}
                    <div className="col-md-6 text-center">
                        <img src={news} alt="News" className="img-fluid" style={{ maxHeight: "400px" }} />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Singnup;
