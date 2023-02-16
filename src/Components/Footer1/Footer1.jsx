import React from "react";

//data
import footerData from "./footerData";

//style
import "./Footer1.scss";
import { Link } from "react-router-dom";
const Footer1 = () => {
  return (
    <div className="footer1-wrapper">
      <div className="footer1 footer">
        {footerData?.map((elem) => (
          <div className="footer-coloumn">
            <div className="footer-coloumn-title">{elem.title}</div>
            <div className="footer-coloumn-links">
              {elem?.links?.map((link) => (
                <li>
                  <Link to={link.link}>{link.name}</Link>
                </li>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Footer1;
