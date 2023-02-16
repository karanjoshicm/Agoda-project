import React, { useState } from "react";

//icon
import { BsSearch } from "react-icons/bs";

//styles
import "./CustomInput.scss";
import useOutsideClick from "../../../helpers/useOutsideClick";
const CustomInput = ({
  placeholder = "",
  value = "",
  setValue = () => { },
  searchIcon = <BsSearch />,
  setShowOverlay = () => { }
}) => {
  const [showSuggestions, setShowSuggestions] = useState(false)
  const ref = useOutsideClick(() => setShowSuggestions(false));

  return (
    <div className="customInput-container">
      <div className="customInput-inputBox">
        <div className="customInput-searchIcon">
          {searchIcon}
        </div>

        <input
          className="customInput-inputField"
          placeholder={placeholder}
          value={value}
          onChange={(e) => setValue(e.target.value)}
          onFocus={() => {
            setShowOverlay(true)
            setShowSuggestions(true)
          }
          }
        />

      </div>
      {
        showSuggestions &&
        <div ref={ref}
          className="customInput-suggestionContainer">
          <ul className="suggestion-list">
          </ul>
        </div>
      }
    </div>
  );
};

export default CustomInput;
