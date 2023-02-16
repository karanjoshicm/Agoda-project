import React from "react";

//styles
import "./AppButton.scss";
const AppButton = ({
  type = "primary",
  style = {},
  children,
  onClick = () => {},
  solid = false,
}) => {
  return (
    <button
      onClick={onClick}
      className={`appButton ${type === "danger" ? "danger" : "primary"} ${
        solid && "solid"
      }`}
      style={{ ...style }}
    >
      {children}
    </button>
  );
};

export default AppButton;
