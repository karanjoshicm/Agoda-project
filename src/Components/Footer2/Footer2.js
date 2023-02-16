import React from "react";
import { Link } from "react-router-dom";

import "../Footer1/Footer1.scss";
import "./Footer2.scss";
import footer2Data from "./footer2Data";
const Footer2 = () => {
  return (
    <div className="footer2-wrapper">
      <div className="footer footer2">
        {footer2Data.map((elem) => (
          <div className="footer2-coloumn">
            <div className="footer2-coloumn-title">{elem.title}</div>
            <div className="footer2-data">
              {elem?.data?.map((subitem) => (
                <div className="footer2-coloumn-data">
                  <li
                    className="footer2-coloumn-title"
                    style={{
                      paddingBottom: 5,
                    }}
                  >
                    <span>{subitem.name}</span>
                  </li>
                  {subitem?.links?.map((link) => (
                    <li className="footer2-sublinks">
                      <Link to={link.path}>{link.text}</Link>
                    </li>
                  ))}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Footer2;
