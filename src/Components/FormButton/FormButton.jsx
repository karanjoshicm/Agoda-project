import React from "react";

//styles
import "./FormButton.scss";
const FormButton = ({
  children,
  solid = true,
  hoverEffect = false,
  onClick,
  type,
}) => {
  return (
    <div className="buttonWrapper">
      <button
        type={type}
        onClick={onClick}
        className={`formButton ${solid && "solid"} ${
          hoverEffect && "hoverEffect"
        }`}
      >
        <span className={`formButton-text ${solid && "active"}`}>
          {children}
        </span>
      </button>
    </div>
  );
};

export default FormButton;
