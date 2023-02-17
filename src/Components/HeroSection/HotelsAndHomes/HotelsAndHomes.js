import React, { useState } from "react";
import { createSearchParams, useNavigate } from "react-router-dom";

//compoments
import AppButton from "../../AppButton/AppButton";
import CustomDatePicker from "../../CustomDatePicker/CustomDatePicker";
import CustomInput from "../CustomInput/CustomInput";
import Tooptip from "../../Tooltip/Tooptip";

//icons
import { BsPeople } from "react-icons/bs";
import { IoIosArrowDown } from "react-icons/io";
//styles
import "./HotelsAndHomes.scss";
const HotelsAndHomes = ({ setShowOverlay, privateStays = false }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [showToolTip, setShowToolTip] = useState(false);
  const [roomCount, setRoomCount] = useState(1);
  const [adultCount, setAdultCount] = useState(1);
  const [childCount, setChildCount] = useState(1);
  const [checkIn, setCheckIn] = useState(new Date());
  const [checkOut, setCheckOut] = useState(new Date());
  const navigate = useNavigate();
  return (
    <div className="hotelAndHomes">
      {privateStays ? (
        <></>
      ) : (
        <div className="hotelAndHomes-buttonContainer">
          <AppButton style={{ marginRight: "7px" }} solid={true}>
            Overnight Stays
          </AppButton>
          <AppButton>Day Use Stays</AppButton>
        </div>
      )}
      <div className="hotelAndHomes-InputContainer">
        <CustomInput
          placeholder="Enter a destination or property"
          searchIcon={true}
          value={searchQuery}
          setValue={setSearchQuery}
          setShowOverlay={setShowOverlay}
        />
      </div>
      <div className="hotelAndHomes-DateContainer">
        <CustomDatePicker
          startDate={checkIn}
          endDate={checkOut}
          setShowOverLay={setShowOverlay}
        />

        <div
          onClick={() => {
            setShowToolTip(true);
            setShowOverlay(true);
          }}
          className={`${showToolTip && "showToolTip"} hotelAndHomes-guests`}
        >
          <div className="hotelAndHomes-guest-count">
            <div className="hotelAndHomes-guests-icon">
              <BsPeople />
            </div>
            <div className="hotelAndHomes-guests-info">
              <h5>1 adult</h5>
              <p>1 room</p>
            </div>
          </div>
          <div>
            <IoIosArrowDown />
          </div>
          {showToolTip && (
            <Tooptip
              setShowToolTip={setShowToolTip}
              style={{
                top: 75,
                width: 300,
                left: 0,
              }}
            >
              <div className="tooltip-flex">
                <div className="guest-info-heading">Room</div>
                <div className="guest-counter">
                  <span
                    onClick={() => {
                      if (roomCount === 0) return;
                      setRoomCount((prev) => prev - 1);
                    }}
                    className="guest-counter-controller dec"
                  >
                    -
                  </span>
                  <span>{roomCount}</span>
                  <span
                    onClick={() => {
                      setRoomCount((prev) => prev + 1);
                    }}
                    className="guest-counter-controller inc"
                  >
                    +
                  </span>
                </div>
              </div>
              <div className="tooltip-flex">
                <div className="guest-info-heading">
                  Adults
                  <p className="guest-info-subheading">Ages 18+ or above</p>
                </div>
                <div className="guest-counter">
                  <span
                    onClick={() => {
                      if (adultCount === 0) return;
                      setAdultCount((prev) => prev - 1);
                    }}
                    className="guest-counter-controller dec"
                  >
                    -
                  </span>
                  <span>{adultCount}</span>
                  <span
                    onClick={() => {
                      setAdultCount((prev) => prev + 1);
                    }}
                    className="guest-counter-controller inc"
                  >
                    +
                  </span>
                </div>
              </div>
              <div className="tooltip-flex">
                <div className="guest-info-heading">
                  Children
                  <p className="guest-info-subheading">Ages 0-17</p>
                </div>
                <div className="guest-counter">
                  <span
                    onClick={() => {
                      if (childCount === 0) return;
                      setChildCount((prev) => prev - 1);
                    }}
                    className="guest-counter-controller dec"
                  >
                    -
                  </span>
                  <span>{childCount}</span>
                  <span
                    onClick={() => {
                      setChildCount((prev) => prev + 1);
                    }}
                    className="guest-counter-controller inc"
                  >
                    +
                  </span>
                </div>
              </div>
            </Tooptip>
          )}
        </div>
      </div>
      <div className="heroSection-searchButton">
        <AppButton
          onClick={() =>
            navigate({
              pathname: "/search",
              search: createSearchParams({
                destination: searchQuery,
                checkIn: checkIn.toLocaleDateString(),
                checkOut: checkOut.toLocaleDateString(),
                passengers: adultCount + childCount,
              }).toString(),
            })
          }
          solid={true}
          style={{
            width: "450px",
            padding: "20px",
            fontSize: "18px",
            textTransform: "uppercase",
            fontWeight: "400",
          }}
        >
          Search
        </AppButton>
      </div>
    </div>
  );
};

export default HotelsAndHomes;
