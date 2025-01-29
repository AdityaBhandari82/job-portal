

// export default Navbar;
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { FaUserCircle } from 'react-icons/fa'; // Import the profile icon from react-icons

function Navbar() {
  // State to handle the navbar collapse toggle
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Function to toggle the menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
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
          aria-expanded={isMenuOpen ? "true" : "false"}
          aria-label="Toggle navigation"
          onClick={toggleMenu} // Toggle the menu when button is clicked
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className={`collapse navbar-collapse ${isMenuOpen ? 'show' : ''}`} id="navbarNav">
          <ul className="navbar-nav ms-auto">
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
          <div className="d-flex ms-auto">
            <Link to="/Login" className="btn btn-outline-primary me-2">
              Login
            </Link>
            <Link to="/Singnup" className="btn btn-outline-primary me-2">
              Signup
            </Link>
            <Link to="/Post" className="btn btn-primary me-2">
              Find a Post
            </Link>
            <Link to="/Jobsearch" className="btn btn-primary me-2">
              Find a job
            </Link>
            <Link to="/Profile" className="btn btn-outline-secondary me-2">
              <FaUserCircle size={24} /> {/* Profile icon */}
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
