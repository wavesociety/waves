import React from "react";
import { RandomColor } from "../../utils/HelperMethod";

const ImgText = (props) => {
  return (
    <>
      <div className="row my-2">
        <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12 mx-auto">
          <img
            className="bi me-2 img-text-component"
            style={{
              borderBottomLeftRadius: "55px",
              borderTopRightRadius: "55px",
              border: `10px solid ${RandomColor()}`,
            }}
            width="100%"
            height="400px"
            src={props.url}
            alt={`WAVE Society ${props.heading}`}
          />
        </div>
        <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12 mx-auto">
          <div className="content-align-to-center">
            <h1>{props.heading}</h1>
            <p>{props.text}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ImgText;
