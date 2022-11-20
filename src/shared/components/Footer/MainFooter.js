import React from "react";
import logo from "./../../img/wave_society_logo.png";

const MainFooter = () => {
  return (
    <div className="container-fluid bg-black">
      <footer className="d-flex flex-wrap justify-content-between align-items-center py-3">
        <div className="col-md-4 d-flex align-items-center">
          <a
            href="/"
            className="mb-3 me-2 mb-md-0 text-muted text-decoration-none lh-1"
          >
            <img
              className="bi"
              width="30"
              height="24"
              src={logo}
              alt="Wisdom Awakening Value Education Society"
            />
          </a>
          <span className="mb-3 mb-md-0 text-light">
            © 2022 Wisdom Awakening Value Education Society
          </span>
        </div>

        <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
          <li className="ms-3">
            <i className="fab fa-instagram text-danger"></i>
          </li>
          <li className="ms-3">
            <i className="fab fa-facebook text-primary"></i>
          </li>
          <li className="ms-3">
            <i className="fab fa-twitter text-info"></i>
          </li>
        </ul>
      </footer>
    </div>
  );
};

export default MainFooter;
