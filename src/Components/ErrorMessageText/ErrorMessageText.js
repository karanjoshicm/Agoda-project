import React from "react";

//style
import "./ErrorMessage.scss";
const ErrorMessageText = ({ children }) => {
  return (
    <div className="error-container">
      
      <span className="error-container-text">
      {children}
      </span>
    </div>
  );
};

export default ErrorMessageText;
