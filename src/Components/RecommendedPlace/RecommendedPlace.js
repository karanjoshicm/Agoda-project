import React from "react";

//components
import CustomStar from "../CustomStar/CustomStar";

//styles
import "./RecommendedPlace.scss";
const RecommendedPlace = ({ placeData = [] }) => {
  console.log(placeData);
  return (
    <div className="recommendedPlace">
      <div className="recommendedPlace-title">
        Recommended places to stay for your next trip!
      </div>
      <div className="recommendedPlace-container">
        {placeData?.map((elem) => (
          <PlaceCard cardData={elem} />
        ))}
      </div>
    </div>
  );
};

export default RecommendedPlace;

const PlaceCard = ({ cardData }) => {
  console.log(cardData);
  return (
    <div className="recommendedPlace-card">
      <div className="recommendedPlace-card-header">
        <img
          className="recommendedPlace-image"
          src={cardData?.hotelImage}
          alt=""
        />
        <div className="recommendedPlace-card-header-rating">
          <div className="rating-text">
            <h5>Very good</h5>
            <p>{cardData?.count_review_rating} reviews</p>
          </div>
          {cardData?.avg_rating && (
            <div className="rating-number">{cardData?.avg_rating}</div>
          )}
        </div>
      </div>

      <div className="recommendedPlace-card-body">
        <div className="recommendedPlace-card-body-text">
          <h5 className="place-name">{cardData?.name}</h5>
          <p className="place-address">{cardData?.city}</p>
          <CustomStar value={3} color2="#ffa726" />
        </div>
        <div className="recommendedPlace-card-body-price">
          <div className="card-discount">
            <span>85% discount</span>
          </div>
          <div className="card-actualPrice">₹ 15200</div>
          <div className="card-discountedPrice">₹ 2000</div>
        </div>
      </div>
    </div>
  );
};
