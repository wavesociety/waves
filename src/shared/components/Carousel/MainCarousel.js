import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import "./MainCarousel.css";
const MainCarousel = () => {
  const carouselOne =
    "https://img.freepik.com/premium-vector/teamwork-word-cloud-template-business-concept-vector-background_616200-1185.jpg?w=1060";
  const carouselTwo = "http://ethiccraft.org/assets/img/home-slider/quate.jpg";
  const carouselThree =
    "https://img.freepik.com/free-vector/illustration-education-concept_53876-20544.jpg";
  return (
    <>
      <div className="container-fluids carousel-box">
        <Carousel
          showArrows={false}
          infiniteLoop={true}
          showThumbs={false}
          showStatus={false}
          autoPlay={true}
          interval={2100}
        >
          <div>
            <img src={carouselOne} alt="Wave Society Banner 01" />
            {/* <p className="legend">Legend 1</p> */}
          </div>
          <div>
            <img src={carouselTwo} alt="Wave Society Banner 02" />
            {/* <p className="legend">Legend 2</p> */}
          </div>
          <div>
            <img src={carouselThree} alt="Wave Society Banner 03" />
            {/* <p className="legend">Legend 3</p> */}
          </div>
        </Carousel>
      </div>
    </>
  );
};

export default MainCarousel;
