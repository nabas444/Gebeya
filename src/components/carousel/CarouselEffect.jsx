import React from "react";
import classes from "./CarouselEffect.module.css";
import { img } from "./img/data";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

function CarouselEffect() {
  return (
    <div className={classes.carouselContainer}>
      <Carousel
        showThumbs={false}
        autoPlay={true}
        infiniteLoop={true}
        showIndicators={false}
        showStatus={false}
        interval={4000}
        transitionTime={1000}
        stopOnHover={false}
      >
        {img.map((image, index) => (
          <div key={index} className={classes.slideWrapper}>
            <img
              src={image}
              alt={`carousel-${index}`}
              className={classes.carouselImage}
            />
          </div>
        ))}
      </Carousel>
    </div>
  );
}

export default CarouselEffect;
