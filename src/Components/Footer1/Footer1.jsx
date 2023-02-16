import React from "react";

//data
import footerData from "./footerData";

//style
import "./Footer1.scss";
const Footer1 = () => {
  return (
    <div className="footer-wrapper">
      <div className="footer1">
        {footerData?.map((elem) => (
          <div className="footer-coloumn">
            <div className="footer-coloumn-title">{elem.title}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Footer1;
