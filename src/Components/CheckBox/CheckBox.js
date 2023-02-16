import React from "react";

//style
import "./CheckBox.scss";
const CheckBox = ({
  isChecked = false,
  onChange=()=>{},
  textMessage = "",
}) => {
  return (
    <div onClick={onChange} className="checkBox">
      <span className="checkBox-label">{textMessage}</span>
      <input  onChange={onChange} value={isChecked} type="checkBox" name="" id="checkBox" />
    </div>
  );
};

export default CheckBox;
