import React from "react";

const MainSection = (props) => {
  return (
    <section
      className={`common-section py-4 ${props.className}`}
      id="common-section"
    >
      <div className="container">
        <div className="inner-sec-w3pvt">
          <h3 className="tittle text-center heading-bottom-line ">
            {props.heading}
          </h3>
          {props.children}
        </div>
      </div>
    </section>
  );
};

export default MainSection;
