import React from "react";

//styles
import "./TermsAndConditions.scss";
const TermsAndConditions = () => {
  return (
    <div className="termAndCondition">
      <span>By signing in, I agree to Agoda's </span>
      <a target={"_blank"} href="https://www.agoda.com/info/termsofuse.html">
        <span>Terms of Use</span>
      </a>
      <span> and </span>{" "}
      <a target={"_blank"} href="https://www.agoda.com/info/privacy.html">
        Privacy Policy
      </a>
    </div>
  );
};

export default TermsAndConditions;
