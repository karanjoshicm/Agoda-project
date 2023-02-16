import React from "react";
import Lottie from "lottie-react";
import loader from "./loader.json";
import "./Loader.scss";
const Loader = () => {
  return (
    <div className="loader-container">
      <Lottie animationData={loader} loop={true} />
    </div>
  );
};

export default Loader;
