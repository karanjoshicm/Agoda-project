import React from "react";

//components
import CustomStar from "../CustomStar/CustomStar";

import styles from "./HotelCard.module.scss";
const HotelCard = () => {
  return (
    <div className={styles.hotelCard}>
      <div className={styles.hotelCardLeft}>
        <div className={styles.hotelCard_ImageContainer}>
          <img
            className={styles.hotelCard_MainImage}
            src="https://pix8.agoda.net/hotelImages/agoda-homes/11075451/f9f38a41f31a8f5e42a2450e7adc2c18.png?ca=9&ce=1&s=450x450"
            alt=""
          />
          <div className={styles.hotelCard_MoreImages}>
            <div className={styles.hotelCard_smallImage}>
              <img
                src="https://pix8.agoda.net/hotelImages/agoda-homes/11075451/f9f38a41f31a8f5e42a2450e7adc2c18.png?ca=9&ce=1&s=450x450"
                alt=""
              />
            </div>
            <div className={styles.hotelCard_smallImage}>
              <img
                src="https://pix8.agoda.net/hotelImages/agoda-homes/11075451/f9f38a41f31a8f5e42a2450e7adc2c18.png?ca=9&ce=1&s=450x450"
                alt=""
              />
            </div>
            <div className={styles.hotelCard_smallImage}>
              <img
                src="https://pix8.agoda.net/hotelImages/agoda-homes/11075451/f9f38a41f31a8f5e42a2450e7adc2c18.png?ca=9&ce=1&s=450x450"
                alt=""
              />
            </div>
            <div className={styles.hotelCard_smallImage}>
              <img
                src="https://pix8.agoda.net/hotelImages/agoda-homes/11075451/f9f38a41f31a8f5e42a2450e7adc2c18.png?ca=9&ce=1&s=450x450"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
      <div className={styles.hotelCardMid}>
        <div className={styles?.hotelCardMid_header}>
          <div className={styles?.hotelName}>
            Kamalaya Assagao Private Luxury Villa At North Goa
          </div>
          <div className={styles.hotelProperties}>
            <span className={styles.hotelProperties_value}>Entire Villa</span>
            <span className={styles.hotelProperties_value}>Verified Host </span>
          </div>
          <div className={styles.hotelProperties}>
            <CustomStar value={5} />
            <span
              className={`${styles.hotelProperties_value} ${styles.isLink}`}
            >
              Near metro station, New Delhi
            </span>
          </div>
        </div>
        <div className={styles.hotelAmeneties}>
          <div className={styles.hotelAmeneties_value}>
            <span>Gym</span>
          </div>
          <div className={styles.hotelAmeneties_value}>
            <span>Free Parking</span>
          </div>
          <div className={styles.hotelAmeneties_value}>
            <span>Wi-Fi</span>
          </div>
          <div className={styles.hotelAmeneties_value}>
            <span>Internet</span>
          </div>
        </div>
        <ul className={styles.hotelFeatures}>
          <li>Cashback rewards: Rs 4,475</li>
          <li>Agoda Cash Rs 1,000 </li>
        </ul>
        <div className={styles.hotelHighlights}>
          <span>Highlights</span>
          <div className={styles.highLight_list}>
            <svg
              width="1em"
              height="1em"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path
                fill-rule="evenodd"
                d="M18 17l3 3-3 3v-2H6v2l-3-3 3-3v2h12v-2zM12.64 2.057l8.264 6.887a.75.75 0 0 1-.87 1.217l-.09-.065-.945-.788L19 15a1 1 0 0 1-.883.993L18 16H6a1 1 0 0 1-1-1V9.31l-.944.786a.75.75 0 0 1-.979-.016L3 10a.75.75 0 0 1 .096-1.056l8.264-6.887a1 1 0 0 1 1.28 0z"
              ></path>
            </svg>

            <svg
              width="1em"
              height="1em"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path
                fill-rule="evenodd"
                d="M13.95 2.07a1 1 0 0 1 .05.314V21.62a1 1 0 0 1-1.311.95l-8-2.62A1 1 0 0 1 4 18.998V5.027a1 1 0 0 1 .686-.95l8-2.643a1 1 0 0 1 1.263.636zM19 4a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1h-4V4h4zm-8 7a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"
              ></path>
            </svg>
          </div>
        </div>
      </div>
      <div className={styles.hotelCardRight}>
        <div className={styles.hotelCardRight_data}>
          <div className={styles.hotelCardRight_header}>
            <div className={styles.hotelCardRight_header_text}>
              <h4>Exceptional</h4>
              <p>258 review</p>
            </div>
            <div className={styles.hotelCardRight_header_rating}>
              <span>9.7</span>
            </div>
          </div>
          <div className={styles?.hotelCard_price}>
            <div className={styles.hotel_originalPrice}>Rs. 74,343</div>
            <div className={styles.subjectCashback}>
              Subject to Cashback Terms
            </div>
            <div className={styles.hotel_discountedPrice}>Rs.60,232</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HotelCard;
