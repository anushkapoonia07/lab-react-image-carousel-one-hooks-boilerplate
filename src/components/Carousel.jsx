import React, { useState } from "react";
import "./Carousel.css";
import { images } from "../data/CarouselData";

// you can research - how to use material ui
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

// complete the function below:
function Carousel() {
  const [currImg, setCurrImg] = useState(0);
  const { img, title, subtitle } = images[currImg];

  const updateImage = (newIndex) => setCurrImg(Math.max(0, Math.min(newIndex, images.length - 1)));

  return (
    <div className="carousel">
      <div className="carouselInner" style={{ backgroundImage: `url(${img})` }}>
        <div className="left" onClick={() => updateImage(currImg - 1)}>
          <ArrowBackIosIcon style={{ fontSize: 30 }} />
        </div>
        <div className="center">
          <h1>{title}</h1>
          <p>{subtitle}</p>
        </div>
        <div className="right" onClick={() => updateImage(currImg + 1)}>
          <ArrowForwardIosIcon style={{ fontSize: 30 }} />
        </div>
      </div>
    </div>
  );
}

export default Carousel;