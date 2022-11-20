import React from "react";

const SocialHeader = () => {
  const phoneNoOne = 987654321;
  const waveEmail = "wavesociety.info@gmail.com";
  const facebook = "https://www.facebook.com/";
  const instagram = "https://www.facebook.com/";
  const twitter = "https://www.facebook.com/";
  return (
    <>
      <nav className="navbar navbar-light bg-light">
        <div className="container-fluid">
          <ul className="top-right-info">
            <li className="mr-1">
              <a href={`tel:${phoneNoOne}`} className="text-dark">
                <i className="fad fa-phone-plus top-nav-icon"></i>&nbsp;
                {phoneNoOne}
              </a>
            </li>
            <li className="mobile-view">
              <a href={`mailto:${waveEmail}`} className="text-dark">
                <i className="fad fa-envelope top-nav-icon"></i>&nbsp;
                {waveEmail}
              </a>
            </li>
          </ul>
          <div className="d-flex mobile-nav-social">
            <ul className="top-right-info d-inline">
              {instagram !== "/" && (
                <li>
                  <a href={instagram} target="_blank" rel="noreferrer">
                    <span className="fab fa-instagram" />
                  </a>
                </li>
              )}
              {facebook !== "/" && (
                <li className="mr-1">
                  <a href={facebook} target="_blank" rel="noreferrer">
                    <span className="fab fa-facebook text-primary" />
                  </a>
                </li>
              )}
              {twitter !== "/" && (
                <li>
                  <a href={twitter} target="_blank" rel="noreferrer">
                    <span className="fab fa-twitter" />
                  </a>
                </li>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default SocialHeader;
