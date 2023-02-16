import React, { createRef, useEffect, useState } from "react";
import "./OtpContainer.scss";
const OtpContainer = ({ setValue = () => {} }) => {
  const [otp1, setOtp1] = useState("");
  const [otp2, setOtp2] = useState("");
  const [otp3, setOtp3] = useState("");
  const [otp4, setOtp4] = useState("");
  const [otp5, setOtp5] = useState("");
  const [otp6, setOtp6] = useState("");
  const inputRef1 = createRef();
  const inputRef2 = createRef();
  const inputRef3 = createRef();
  const inputRef4 = createRef();
  const inputRef5 = createRef();
  const inputRef6 = createRef();
  useEffect(() => {
    inputRef1.current.focus();
  }, []);

  const isBackSpace = (e) => {
    if (e.key === "Backspace") return true;
  };

  useEffect(() => {
   const value = otp1 + otp2 + otp3 + otp4 + otp5 + otp6;
    setValue(value);
  }, [otp1, otp2, otp3, otp4, otp5, otp6]);

  return (
    <div className="otp-wrapper">
      <div className="otpContainer">
        <input
          ref={inputRef1}
          type="text"
          inputMode="numeric"
          autoComplete="one-time-code"
          pattern="\d{1}"
          maxLength={1}
          className={`otp-input ${otp1 !== "" && "green"}`}
          value={otp1}
          onKeyDown={(e) => {
            if (isBackSpace(e)) {
              setOtp1("");
              if (otp1 == "") {
                inputRef1.current.focus();
              }
            }
          }}
          onChange={(e) => {
            setOtp1(e.target.value);
            inputRef2.current.focus();

            if (otp1 != "") inputRef1.current.focus();
          }}
        />
        <input
          ref={inputRef2}
          type="text"
          inputMode="numeric"
          autoComplete="one-time-code"
          pattern="\d{1}"
          maxLength={1}
          className={`otp-input ${otp2 !== "" && "green"}`}
          value={otp2}
          onKeyDown={(e) => {
            if (isBackSpace(e)) {
              setOtp2("");
              if (otp2 == "") {
                inputRef1.current.focus();
              }
            }
          }}
          onChange={(e) => {
            setOtp2(e.target.value);
            inputRef3.current.focus();
            if (otp2 != "") inputRef2.current.focus();
          }}
        />
        <input
          ref={inputRef3}
          type="text"
          inputMode="numeric"
          autoComplete="one-time-code"
          pattern="\d{1}"
          maxLength={1}
          className={`otp-input ${otp3 !== "" && "green"}`}
          value={otp3}
          onKeyDown={(e) => {
            if (isBackSpace(e)) {
              setOtp3("");
              if (otp3 == "") {
                inputRef2.current.focus();
              }
            }
          }}
          onChange={(e) => {
            setOtp3(e.target.value);

            inputRef4.current.focus();

            if (otp3 != "") inputRef3.current.focus();
          }}
        />
        <input
          ref={inputRef4}
          type="text"
          inputMode="numeric"
          autoComplete="one-time-code"
          pattern="\d{1}"
          maxLength={1}
          className={`otp-input ${otp4 !== "" && "green"}`}
          value={otp4}
          onKeyDown={(e) => {
            if (isBackSpace(e)) {
              setOtp4("");
              if (otp4 == "") {
                inputRef3.current.focus();
              }
            }
          }}
          onChange={(e) => {
            setOtp4(e.target.value);
            inputRef5.current.focus();
            if (otp4 != "") inputRef4.current.focus();
          }}
        />
        <input
          ref={inputRef5}
          type="text"
          inputMode="numeric"
          autoComplete="one-time-code"
          pattern="\d{1}"
          maxLength={1}
          className={`otp-input ${otp5 !== "" && "green"}`}
          value={otp5}
          onKeyDown={(e) => {
            if (isBackSpace(e)) {
              setOtp5("");
              if (otp5 == "") {
                inputRef4.current.focus();
              }
            }
          }}
          onChange={(e) => {
            setOtp5(e.target.value);
            inputRef6.current.focus();
            if (otp5 != "") inputRef5.current.focus();
          }}
        />
        <input
          ref={inputRef6}
          type="text"
          inputMode="numeric"
          autoComplete="one-time-code"
          pattern="\d{1}"
          maxLength={1}
          className={`otp-input ${otp6 !== "" && "green"}`}
          value={otp6}
          onKeyDown={(e) => {
            if (isBackSpace(e)) {
              setOtp6("");
              if (otp6 == "") {
                inputRef5.current.focus();
              }
            }
          }}
          onChange={(e) => {
            setOtp6(e.target.value);
          }}
        />
      </div>
    </div>
  );
};

export default OtpContainer;
