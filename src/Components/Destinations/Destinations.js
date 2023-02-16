import React from "react";
import { Slide } from "react-slideshow-image";
import { sliderProperties } from "../../helpers/sliderProperties";

//styles
import "./Destinations.scss";
const Destinations = ({ destinationData = [], title = "" }) => {
  return (
    <div className="destination">
      <h3 className="destination-title">{title}</h3>

      <Slide {...sliderProperties} slidesToShow={6}>
        {destinationData.map((destination) => (
          <div key={destination} className="destination-card">
            <img
              className="destination-card-image"
              src={destination.hotelImages}
              alt=""
            />
            <h3 className="destination-card-title">{destination.area}</h3>
            <p className="destination-card-subtitle">
              {destination.accommodations} accommodations
            </p>
          </div>
        ))}
      </Slide>
    </div>
  );
};

export default Destinations;
