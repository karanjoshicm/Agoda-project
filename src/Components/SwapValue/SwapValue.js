import React from "react";
import CustomInput from "../HeroSection/CustomInput/CustomInput";

//styles
import "./SwapValue.scss";

//icons
import { IoIosSwap, IoIosAirplane } from "react-icons/io";
import { HiOutlineLocationMarker } from "react-icons/hi";
const SwapValue = ({
  fromValue = "",
  toValue = "",
  setFromValue = () => {},
  setToValue = () => {},
  setShowOverlay = () => {},
  small=false
}) => {
  const swapValues = () => {
    setFromValue(toValue);
    setToValue(fromValue);
  };
  return (
    <div className={`swapValue ${small && "small"}`}>
      <div className="swapValue-inputContainer">
        <CustomInput
          value={fromValue}
          setValue={setFromValue}
          searchIcon={<IoIosAirplane />}
          placeholder="Flying from"
          setShowOverlay={setShowOverlay}
        />
      </div>
      <div onClick={() => swapValues()} className="swapIcon">
        <IoIosSwap />
      </div>
      <div className="swapValue-inputContainer">
        <CustomInput
          value={toValue}
          setValue={setToValue}
          searchIcon={<HiOutlineLocationMarker />}
          placeholder="Flying to"
          setShowOverlay={setShowOverlay}
        />
      </div>
    </div>
  );
};

export default SwapValue;
