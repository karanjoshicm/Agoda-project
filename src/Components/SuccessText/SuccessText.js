import React from "react";

//style
import "./SuccessText.scss";
const SuccessText = ({ children }) => {
    return (
        <div className="success-container">

            <span className="success-container-text">
                {children}
            </span>
        </div>
    );
};

export default SuccessText;
