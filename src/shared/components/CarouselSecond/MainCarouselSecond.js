import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import HonorablePeople from "./HonorablePeople";
import "./MainCarouselSecond.css";

const MainCarouselSecond = () => {
  return (
    <>
      <div className="container-fluids carouselSecond-box">
        <Carousel
          className="carouselSecond"
          showArrows={true}
          infiniteLoop={true}
          showThumbs={false}
          showStatus={false}
          autoPlay={true}
          interval={2100}
        >
          <HonorablePeople
            url="https://picsum.photos/200/300"
            quote="I hope that Wave Society, organised by its youth forum, will be an ideal
          platform for our youth to showcase their talents and to reaffirm their
          support for the progress of the nation."
            name="Shri Narendra Modi"
            designation="Honb'le Prime Minister of India"
          />
          <HonorablePeople
            url="https://picsum.photos/200/300"
            quote="I am confident that this initiative by Wave Society Club in the college premises will surely help the students of the college to become empowered with wisdom."
            name="Dr. Balram Pani"
            designation="Principal, Bhaskaracharya College of Applied Sciences"
          />
        </Carousel>
      </div>
    </>
  );
};

export default MainCarouselSecond;
