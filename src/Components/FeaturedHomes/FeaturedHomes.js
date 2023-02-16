import React, { useEffect, useState } from "react";

//icons
import CustomStar from "../CustomStar/CustomStar";
//styles
import "./FeaturedHomes.scss";
const FeaturedHomes = ({ homeData = [] }) => {
  const filters = [
    "New Delhi",
    "Mumbai",
    "Goa",
    "Bangalore",
    "Hyderabad",
  ];
  const [selectedLocation, setSelectedLocation] = useState(filters[0]);



  return (
    <div className="featuredHome">
      <div className="featuredHome-title">
        Featured homes recommended for you
      </div>

      <ul className="featured-home-filters">
        {filters.map((elem) => (
          <li onClick={() => setSelectedLocation(elem)} key={elem} className={`${elem === selectedLocation && "active"}`}>
            {elem}
          </li>
        ))}
      </ul>
      <div className="featured-home-container">
        {
          homeData?.filter((elem) => elem.area?.toLowerCase() === selectedLocation.toLowerCase()).map((elem, index) => <FeaturedHomeCard key={index} cardData={elem} />)
        }

      </div>
    </div>
  );
};

export default FeaturedHomes;


const FeaturedHomeCard = ({ cardData }) => {
  return <div className="featured-home-card">
    <div className="featured-home-card-header">
      <img
        className="featured-home-card-image"
        src={cardData?.hotelImages}
        alt=""
      />
      <div className="featured-home-card-rating">{Math.round(cardData?.avg_rating)} </div>
    </div>
    <div className="featured-home-card-body">
      <div className="featured-home-card-title">
        {cardData?.name}      </div>
      <div className="featured-home-card-stars">
        <CustomStar value={cardData?.star_rating} />
      </div>
      <div className="featured-home-card-location">
        {cardData?.address}, {cardData?.area}     </div>
      <div className="featured-home-card-price">INR {cardData?.price}</div>
    </div>
  </div>
}