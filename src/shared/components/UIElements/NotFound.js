import React from "react";

import "./NotFound.css";

const NotFound = () => {
  const notFoundUrl =
    "https://img.freepik.com/premium-vector/error-404-landing-page-with-file-flat-design_249405-162.jpg";
  return (
    <div className="NotFound-box">
      <header className="NotFound-box-header">
        <a className="NotFound-box-link" href="/" rel="noopener noreferrer">
          <img
            width="100%"
            height="100%"
            src={notFoundUrl}
            className="NotFound-box-logo"
            alt="NOt Found 404"
          />
        </a>
      </header>
    </div>
  );
};

export default NotFound;
