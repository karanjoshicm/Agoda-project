import React from "react";

//components
import AppButton from "../AppButton/AppButton";

//assets
import bagImg from "../../assets/bag.svg";

//styles
import "./NewUpdate.scss";

const NewUpdate = () => {
  return (
    <div className="newUpdate">
      <img src={bagImg} alt="" />
      <span className="newUpdate-text">
        Traveling internationally? Get updated information on COVID-19 travel
        guidance and restrictions.
      </span>
      <AppButton
        style={{
          padding: "4px",
          marginLeft: "10px",
        }}
      >
        Learn More
      </AppButton>
    </div>
  );
};

export default NewUpdate;
