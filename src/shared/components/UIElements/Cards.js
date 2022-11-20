import React from "react";
import MainSection from "../Section/MainSection";
import "./Cards.css";
const Cards = () => {
  return (
    <>
      <MainSection heading="Events"></MainSection>
      <div className="container">
        <div className="row">
          <div className="col-4">
            <div className="card" style={{ width: "18rem" }}>
              <img
                src="/img/event-01.jpeg"
                className="card-img-top"
                alt="wave society event 01"
              />
              {/* <div className="card-body">
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
            </div> */}
            </div>
          </div>
          <div className="col-4">
            <div className="card" style={{ width: "18rem" }}>
              <img
                src="/img/event-02.jpg"
                className="card-img-top"
                alt="wave society event 02"
              />
              {/* <div className="card-body">
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
            </div> */}
            </div>
          </div>
          <div className="col-4">
            <div className="card" style={{ width: "18rem" }}>
              <img
                src="/img/event-03.jpeg"
                className="card-img-top"
                alt="wave society event 03"
              />
              {/* <div className="card-body">
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
            </div> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cards;
