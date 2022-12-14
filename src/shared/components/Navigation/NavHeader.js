import React, { useState } from "react";
// import { Link } from "react-router-dom";
import logo from "./../../img/wave_society_logo.png";
import SocialHeader from "./SocialHeader";
import "./NavHeader.css";

const NavHeader = () => {
  const [activeTab, setActiveTab] = useState("home");

  const handleActiveTab = (tab) => {
    setActiveTab(tab);
  };

  const handleActiveClass = (tab) => {
    return activeTab === tab ? "active" : "";
  };
  return (
    <header className="bg-light">
      <SocialHeader />
      <div id="logo">
        <h1>
          <a className="navbar-brand logo-name" href="/">
            <img
              id="loading"
              className="bi me-2"
              width="40"
              height="32"
              src={logo}
              alt="Wisdom Awakening Value Education Society"
            />
            <span className="waves-logo-box">
              <span className="fs-4 waves-logo-name">Wave Society</span>
            </span>
          </a>
        </h1>
      </div>
      <div className="container-fluid p-0">
        <nav className="pt-1">
          <label htmlFor="drop" className="toggle">
            <i className="far fa-tasks" />
          </label>
          <input type="checkbox" id="drop" />
          <ul className="menu mt-2 border-radius-class">
            <li
              className={handleActiveClass("home")}
              onClick={() => handleActiveTab("home")}
            >
              <a href="/">
                <span className="fad fa-home" aria-hidden="true" />
                &nbsp;Home
              </a>
            </li>
            <li
              className={handleActiveClass("courses")}
              onClick={() => handleActiveTab("courses")}
            >
              <a href="/courses">
                <span className="fad fa-graduation-cap" aria-hidden="true" />
                &nbsp;Courses
              </a>
            </li>
            <li
              className={handleActiveClass("events")}
              onClick={() => handleActiveTab("events")}
            >
              <a href="/events">
                <span className="fad fa-calendar-check" aria-hidden="true" />
                &nbsp;Events
              </a>
            </li>
            <li
              className={handleActiveClass("contact-us")}
              onClick={() => handleActiveTab("contact-us")}
            >
              <a href="/contact-us">
                <span className="fad fa-address-book" aria-hidden="true" />
                &nbsp;Contact Us
              </a>
            </li>
            {/* <li className="dropdown">
          <label htmlFor="drop-2" className="toggle text-light">
            <span className="fad fa-map-marker-question" aria-hidden="true" />
            &nbsp;Awaited Trips
            <span className="fad fa-angle-down" aria-hidden="true" />
          </label>
          <Link to="/awated-trips">
            <span className="fad fa-map-marker-question" aria-hidden="true" />
            &nbsp;Awaited Trips
            <span className="fad fa-angle-down" aria-hidden="true" />
          </Link>
          <input type="checkbox" id="drop-2" />
          Awaited Trips lists
        </li> */}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default NavHeader;
