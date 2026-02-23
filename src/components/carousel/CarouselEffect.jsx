import React, { useEffect, useState } from "react";
import classes from "./carousel.module.css";
import { img } from "./img/data";

function CarouselEffect() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto slide every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === img.length - 1 ? 0 : prevIndex + 1,
      );
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={classes.carouselContainer}>
      {img.map((image, index) => (
        <div
          key={index}
          className={`${classes.slide} ${
            index === currentIndex ? classes.active : ""
          }`}
        >
          <img src={image} alt={`Slide ${index + 1}`} />
        </div>
      ))}
    </div>
  );
}

export default CarouselEffect;
