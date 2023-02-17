import React from "react";

//style
import style1 from "../Footer1/Footer1.module.scss";
import styles from "./Footer3.module.scss";

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
    <div className={styles.footer3Wrapper}>
      <div className={`${styles.footer3} ${style1.footer}`}>
        <div className={styles.footer3Text}>
          All material herein © 2005–2023 Agoda Company Pvt. Ltd. All Rights
          Reserved.
        </div>
        <div className={styles.footer3Text}>
          Agoda is part of Booking Holdings Inc., the world leader in online
          travel & related services.
        </div>
        <div className={styles.footer3CompaniesLogo}>
          {logoData.map((img) => (
            <div className={styles.footerLogoContainer}>
              <img className={styles.footerCompanyLogo} src={img} />
            </div>
          ))}
        </div>
        <div className={`${styles.footer3Text} ${styles.sm}`}>
          sg-pc-6g-acm-web-user-59887698cc-z4vjs
        </div>
      </div>
    </div>
  );
};

export default Footer3;
