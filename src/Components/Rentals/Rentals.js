import React from "react";

//styles
import "./Rentals.scss";
const Rentals = ({ rentalData = [] }) => {
  return (
    <div className="rentals">
      <h3 className="rentals-title">Explore more travel vacation rentals</h3>
      <div className="rental-card-container">
        {rentalData[0]?.map((elem,index) => (
          <RentalCard key={index} cardData={elem} />
        ))}
      </div>
    </div>
  );
};

export default Rentals;

const RentalCard = ({ cardData }) => {
  // console.log(cardData);
  return (
    <div className="rental-card">
      <img src={cardData.url} alt="" />
      <div className="rental-card-info">
        <h3 className="rental-card-title">{cardData?.rentalType}</h3>
        <p className="rental-card-subtitle">{cardData?.properties}</p>
      </div>
    </div>
  );
};
