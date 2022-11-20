import React from "react";
import { RandomColor } from "../../utils/HelperMethod";

const TextImg = (props) => {
  return (
    <>
      <div className="row my-2">
        <div className="col-lg-6 col-md-6 col-sm-9 col-xs-12">
          <div className="content-align-to-center">
            <h1>{props.heading}</h1>
            <p>{props.text}</p>
          </div>
        </div>
        <div className="col-lg-6 col-md-6 col-sm-3 col-xs-12">
          <img
            className="bi me-2"
            style={{
              borderBottomRightRadius: "55px",
              borderTopLeftRadius: "55px",
              border: `10px solid ${RandomColor()}`,
            }}
            width="100%"
            height="400px"
            src={props.url}
            alt={`WAVE Society ${props.heading}`}
          />
        </div>
      </div>
    </>
  );
};

export default TextImg;
