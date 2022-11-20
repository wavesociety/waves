import React from "react";

const HonorablePeople = (props) => {
  return (
    <div className="row honor-person-row">
      <div className="col-lg-3 col-md-3 col-sm-3 col-xs-12">
        <img src={props.url} />
      </div>
      <div className="col-lg-9 col-md-9 col-sm-9 col-xs-12">
        <p className="honor-person-quote">❝&nbsp;{props.quote}&nbsp;❞</p>
        <div className="mline"></div>
        <h4 className="honor-person-name">{props.name}</h4>
        <h6 className="honor-person-designation">{props.designation}</h6>
      </div>
    </div>
  );
};

export default HonorablePeople;
