import React from "react";

//library
import { Slide } from "react-slideshow-image";

//styles
import "./Promotions.scss";

//import for slider
import { sliderProperties } from "../../helpers/sliderProperties";
import { promotionData } from "./promotionData";

const Promotions = ({}) => {
  console.log("promotion data ",promotionData)
  return (
    <div className="promotions">
      <h3 className="promotions-title">Accommodation Promotions</h3>
      <div className="promotions-shadow left"></div>
      <div className="promotions-shadow right"></div>
      <Slide transitionDuration={1000} {...sliderProperties}>
        {promotionData.map((slideImage, index) => (
          <div key={index} className="promotionContainer">
            <img src={slideImage.url} alt="" />
          </div>
        ))}
      </Slide>
    </div>
  );
};

export default Promotions;
