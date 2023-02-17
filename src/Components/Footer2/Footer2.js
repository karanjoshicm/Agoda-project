import React from "react";
import { Link } from "react-router-dom";

import style1 from "../Footer1/Footer1.module.scss";
import styles from "./Footer2.module.scss";
import footer2Data from "./footer2Data";
const Footer2 = () => {
  return (
    <div className={styles.footer2Wrapper}>
      <div className={`${style1.footer} ${styles.footer2}`}>
        {footer2Data.map((elem) => (
          <div className={styles.footer2Coloumn}>
            <div className={styles.footer2ColoumnTitle}>{elem.title}</div>
            <div className={styles.footer2Data}>
              {elem?.data?.map((subitem) => (
                <div className={styles.footer2ColoumnData}>
                  <li
                    className={styles.footer2ColoumnTitle}
                    style={{
                      paddingBottom: 5,
                    }}
                  >
                    <span>{subitem.name}</span>
                  </li>
                  {subitem?.links?.map((link) => (
                    <li className={styles.footer2Sublinks}>
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
