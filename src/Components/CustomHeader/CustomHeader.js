import React, { useState } from "react";
import { DateRangePicker } from "react-date-range";
import CustomDatePicker from "../CustomDatePicker/CustomDatePicker";
import CustomInput from "../HeroSection/CustomInput/CustomInput";
import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css";
//styles
import styles from "./CustomHeader.module.scss";
const CustomHeader = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [state, setState] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);
  return (
    <div className={styles.customHeader}>
      <div className={styles.customHeaderBody}>
        <CustomInput
          placeholder="Enter a destination or property"
          searchIcon={true}
          value={searchQuery}
          setValue={setSearchQuery}
          // setShowOverlay={setShowOverlay}
        />

      
      </div>
    </div>
  );
};

export default CustomHeader;
