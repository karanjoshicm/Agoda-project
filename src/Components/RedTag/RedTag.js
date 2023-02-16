import React from "react";

//style
import "./RedTag.scss";
const RedTag = ({ children, isCurve }) => {
  return (
    <div className={`redTag ${isCurve && "curve"}`}>
      <span>{children}</span>
    </div>
  );
};

export default RedTag;
