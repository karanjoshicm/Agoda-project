import React from "react";
import ErrorMessageText from "../ErrorMessageText/ErrorMessageText";

//styles
import "./InputField.scss";
const InputField = ({
  label = "",
  type = "text",
  placeholder = "",
  value = "",
  setValue,
  style,
  isError = false,
  errorText=null,
  name = "",
  onblur
}) => {

  return (
    <div className="inputContainer" style={{ ...style }}>
      <label className="inputContainer-label" htmlFor="">
        {label}
      </label>
      <input
      onBlur={onblur}
        name={name}
        className={`inputContainer-input ${errorText && "error"}`}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={setValue}
      />
      {errorText && <ErrorMessageText>{errorText}</ErrorMessageText>}
    </div>
  );
};

export default InputField;
