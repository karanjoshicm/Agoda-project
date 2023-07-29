import React from "react";
import { Slide } from "react-slideshow-image";
import { sliderProperties } from "../../helpers/sliderProperties";

//styles
import "./Destinations.scss";
const Destinations = ({ destinationData = [{
  id:1,
  image:"",
  area:"New Delhi",
  accommodations:1
}], title = "" }) => {
  return (
    <div className="destination">
      <h3 className="destination-title">{title}</h3>

      <Slide {...sliderProperties} slidesToShow={6}>
        {destinationData.map((destination) => (
          <div key={destination} className="destination-card">
            <img
              className="destination-card-image"
              src={"https://images.unsplash.com/photo-1625244724120-1fd1d34d00f6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aG90ZWxzfGVufDB8fDB8fHww&w=1000&q=80"}
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
