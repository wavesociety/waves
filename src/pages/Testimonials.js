import React from "react";
import { Carousel } from "react-responsive-carousel";
import { Capitalization } from "../shared/utils/HelperMethod";
import { MainSection } from "../imports/App/components";
import data from "./../imports/data/testimonial.json";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./Testimonials.css";
const Testimonials = (props) => {
  return (
    <>
      <MainSection heading="Testimonials">
        <div className="container testimonial-box">
          <Carousel
            showArrows={true}
            infiniteLoop={true}
            showThumbs={false}
            showStatus={false}
            autoPlay={true}
            interval={6100}
          >
            {data.map((review, i) => (
              <div key={"testimonial-" + i} className="container">
                <img
                  src={review.img}
                  style={{ border: "2px solid grey" }}
                  alt="MakeYourTripPossible-img"
                />
                <div className="myCarousel">
                  <h3>{Capitalization(review.name)}</h3>
                  <h4>⭐⭐⭐⭐⭐</h4>
                  <p dangerouslySetInnerHTML={{ __html: review.para }} />
                </div>
              </div>
            ))}
          </Carousel>
        </div>
      </MainSection>
    </>
  );
};

export default Testimonials;
