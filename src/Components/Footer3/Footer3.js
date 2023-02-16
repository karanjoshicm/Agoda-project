import React from "react";

//style
import "../Footer1/Footer1.scss";
import "./Footer3.scss";

//assets
import bookingCom from "../../assets/booking.png";
import agodaLogo from "../../assets/agodaLogo.png";
import kayakLogo from "../../assets/kayakLogo.png";
import openTable from "../../assets/openTable.png";
import priceLineLogo from "../../assets/priceLineLogo.png";
import rentalCarsLogo from "../../assets/rentalCarsLogo.png";

const Footer3 = () => {
  const logoData = [
    bookingCom,
    agodaLogo,
    kayakLogo,
    openTable,
    priceLineLogo,
    rentalCarsLogo,
  ];

  return (
    <div className="footer3-wrapper">
      <div className="footer footer3">
        <div className="footer3-text">
          All material herein © 2005–2023 Agoda Company Pvt. Ltd. All Rights
          Reserved.
        </div>
        <div className="footer3-text">
          Agoda is part of Booking Holdings Inc., the world leader in online
          travel & related services.
        </div>
        <div className="footer3-companiesLogo">
          {logoData.map((img) => (
            <div className="footer-logo-container">
              <img className="footer-company-logo" src={img} />
            </div>
          ))}
        </div>
        <div className="footer3-text sm">
          sg-pc-6g-acm-web-user-59887698cc-z4vjs
        </div>
      </div>
    </div>
  );
};

export default Footer3;
