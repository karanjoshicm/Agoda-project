import React from "react";

//data
import footerData from "./footerData";

//style
import styles from "./Footer1.module.scss";
import { Link } from "react-router-dom";
const Footer1 = () => {
  return (
    <div className={styles.footer1Wrapper}>
      <div className={`${styles.footer} ${styles.footer1}`}>
        {footerData?.map((elem) => (
          <div className={styles.footerColoumn}>
            <div className={styles.footerColoumnTitle}>{elem.title}</div>
            <div className={styles.footerColoumnLinks}>
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
