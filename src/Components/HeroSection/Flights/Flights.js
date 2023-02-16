import React, { useState } from "react";

//components
import AppButton from "../../AppButton/AppButton";
import SingleDatePicker from "../../Calendar/SingleDatePicker";
import SwapValue from "../../SwapValue/SwapValue";
import ToolTip from "../../Tooltip/Tooptip";
import CustomDatePicker from "../../CustomDatePicker/CustomDatePicker";

//icons
import { BsCheck2, BsPeople } from "react-icons/bs";
import { IoIosArrowDown } from "react-icons/io";
import { BsChevronDown } from "react-icons/bs";
import { CiCalendar } from "react-icons/ci";
import { RiHotelBedFill } from "react-icons/ri";

//style
import "./Flights.scss";

//library
import moment from "moment";

//helpers
import useOutsideClick from "../../../helpers/useOutsideClick";

const Flights = ({ setShowOverlay, flightAndHotel = false }) => {
  const ref = useOutsideClick(() => setShowCalendar(false));

  const flightTypes = ["Economy", "Premium economy", "Business", "First"];

  const [fromFlight, setFromFlight] = useState("");
  const [toFlight, setToFlight] = useState("");
  const [showToolTip, setShowToolTip] = useState(false);
  const [showCalendar, setShowCalendar] = useState(false);
  const [date, setDate] = useState(new Date());
  const [adultCount, setAdultCount] = useState(1);
  const [childCount, setChildCount] = useState(0);
  const [infantCount, setInfantCount] = useState(0);
  const [flightType, setFlightType] = useState("Economy");
  const [tripType, setTripType] = useState("One-way");
  const [tripTypeDropDown, setTripTypeDropDown] = useState(false);
  const [flightTypeDropDown, setFlightTypeDropDown] = useState(false);
  const [roomCount, setRoomCount] = useState(1);
  const [roomToolTip, setRoomToolTip] = useState(false);

  return (
    <div>
      {flightAndHotel ? (
        <div className=" flights-flex">
          <div>
            <AppButton
              onClick={() => {
                setShowOverlay(true);
                setTripTypeDropDown(true);
              }}
              style={{
                padding: "10px 15px",
                display: "flex",
                gap: "5px",
                alignItems: "center",
              }}
              solid={true}
            >
              <span>{tripType}</span>

              <BsChevronDown />
            </AppButton>
            {tripTypeDropDown && (
              <ToolTip
                style={{
                  marginTop: "5px",
                  padding: "10px",
                }}
                setShowToolTip={setTripTypeDropDown}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    padding: "10px",
                    width: "200px",
                    borderBottom: "1px solid rgb(221, 223, 226)",
                    cursor: "pointer",
                  }}
                  onClick={() => setTripType("One-way")}
                >
                  <div>One-way</div>
                  {tripType == "One-way" && <BsCheck2 />}
                </div>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    padding: "10px",
                    width: "200px",
                    cursor: "pointer",
                  }}
                  onClick={() => setTripType("Round-trip")}
                >
                  <div>Round-trip</div>
                  {tripType == "Round-trip" && <BsCheck2 />}
                </div>
              </ToolTip>
            )}
          </div>
          <div>
            <AppButton
              style={{
                padding: "10px 15px",
                display: "flex",
                gap: "5px",
                alignItems: "center",
              }}
              solid={true}
              onClick={() => setFlightTypeDropDown(true)}
            >
              <span>Economy</span>
              <BsChevronDown />
            </AppButton>

            {flightTypeDropDown && (
              <ToolTip
                style={{
                  marginTop: "5px",
                  padding: "10px",
                }}
                setShowToolTip={setFlightTypeDropDown}
              >
                {flightTypes.map((elem) => (
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      padding: "10px",
                      width: "200px",
                      borderBottom: "1px solid rgb(221, 223, 226)",
                      cursor: "pointer",
                    }}
                    onClick={() => setFlightType(elem)}
                  >
                    <div>{elem}</div>
                    {elem == flightType && <BsCheck2 />}
                  </div>
                ))}
              </ToolTip>
            )}
          </div>
        </div>
      ) : (
        <div className="hotelAndHomes-buttonContainer">
          <AppButton
            onClick={() => setTripType("One-way")}
            style={{ marginRight: "7px", padding: "10px 20px" }}
            solid={tripType === "One-way"}
          >
            One-way
          </AppButton>
          <AppButton
            onClick={() => setTripType("Round-trip")}
            solid={tripType === "Round-trip"}
            style={{ padding: "10px 20px" }}
          >
            Round-trip
          </AppButton>
        </div>
      )}
      <br />
      {flightAndHotel ? (
        <div className="flights-flex">
          <SwapValue
            setShowOverLay={setShowOverlay}
            fromValue={fromFlight}
            setFromValue={setFromFlight}
            toValue={toFlight}
            setToValue={setToFlight}
            small={true}
          />
          {tripType === "One-way" ? (
            <div
              ref={ref}
              style={{
                width: "49%",
                overflow: "hidden",
                zIndex: 2,
              }}
            >
              <div
                onClick={() => {
                  setShowOverlay(true);
                  setShowCalendar((prev) => !prev);
                }}
                className="flight-flex flight-data"
              >
                <span
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "10px",
                  }}
                >
                  <CiCalendar />
                  <div className="flight-data-text">
                    <div className="flight-data-title">
                      {moment(date).format("DD-MMMM-YYYY")}
                      <p className="flight-data-subtitle">
                        {moment(date).format("dddd")}{" "}
                      </p>
                    </div>
                  </div>
                </span>
              </div>
              {showCalendar && (
                <SingleDatePicker date={date} setDate={setDate} />
              )}
            </div>
          ) : (
            <CustomDatePicker setShowOverLay={setShowOverlay} />
          )}
        </div>
      ) : (
        <SwapValue
          setShowOverLay={setShowOverlay}
          fromValue={fromFlight}
          setFromValue={setFromFlight}
          toValue={toFlight}
          setToValue={setToFlight}
        />
      )}

      {flightAndHotel ? (
        <div className="flights-flex">
          <div
            onClick={() => {
              setShowOverlay(true);
            }}
            className={`${showToolTip && "showToolTip"} ${
              roomToolTip && "roomToolTip"
            } flight-data flight-tooltip `}
          >
            {/* passengers tooltip */}
            <span
              onClick={() => setShowToolTip(true)}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "10px",
                width: "100%",
                borderRight: "1px solid lightgrey",
              }}
            >
              <div className="hotelAndHomes-guests-icon">
                <BsPeople size={20} />
              </div>
              <div className="hotelAndHomes-guests-info">
                <div className="flight-data-text">
                  <div className="flight-data-title">
                    {adultCount + infantCount + childCount} Passengers
                  </div>
                </div>
              </div>
            </span>

            {/* room tooltip */}
            <span
              onClick={() => setRoomToolTip(true)}
              style={{
                display: "flex",
                alignItems: "center",
                width: "100%",
                gap: "10px",
                justifyContent: "flex-end",
              }}
            >
              <div className="hotelAndHomes-guests-icon">
                <RiHotelBedFill size={20} />
              </div>
              <div className="hotelAndHomes-guests-info">
                <div className="flight-data-text">
                  <div className="flight-data-title">
                    {roomCount} {roomCount > 1 ? "rooms" : "room"}
                  </div>
                </div>
              </div>
            </span>

            {showToolTip && (
              <ToolTip
                setShowToolTip={setShowToolTip}
                style={{
                  top: 75,
                  width: 400,
                  left: 0,
                }}
              >
                <div className="tooltip-flex">
                  <span
                    onClick={() => {
                      if (adultCount === 0) return;
                      setAdultCount((prev) => prev - 1);
                    }}
                  >
                    -
                  </span>
                  <span>
                    <span className="hightlight">{adultCount} </span>
                    <span className="text-grey">Adults (12yrs and above)</span>
                  </span>
                  <span onClick={() => setAdultCount((prev) => prev + 1)}>
                    +
                  </span>
                </div>

                <div className="tooltip-flex">
                  <span
                    onClick={() => {
                      if (childCount === 0) return;
                      setChildCount((prev) => prev - 1);
                    }}
                  >
                    -
                  </span>
                  <span className="hightlight">
                    {childCount}

                    <span className="text-grey">Children (2-11yrs)</span>
                  </span>

                  <span onClick={() => setChildCount((prev) => prev + 1)}>
                    +
                  </span>
                </div>

                <div className="tooltip-flex">
                  <span
                    onClick={() => {
                      if (infantCount === 0) return;
                      setInfantCount((prev) => prev - 1);
                    }}
                  >
                    -
                  </span>
                  <span className="hightlight">
                    {infantCount}

                    <span className="text-grey">Infants (below 2yrs)</span>
                  </span>
                  <span onClick={() => setInfantCount((prev) => prev + 1)}>
                    +
                  </span>
                </div>
              </ToolTip>
            )}

            {roomToolTip && (
              <ToolTip
                setShowToolTip={setRoomToolTip}
                style={{
                  top: 75,
                  width: 400,
                  right: 0,
                }}
              >
                {[1, 2, 3, 4, 5, 6].map((elem) => (
                  <div
                    onClick={() => setRoomCount(elem)}
                    className="tooltip-flex"
                  >
                    <p className={`${elem==roomCount && "activeRoomText"}`}>

                      {elem} {elem > 1 ? "rooms" : "room"}
                    </p>
                  </div>
                ))}
              </ToolTip>
            )}
          </div>
          <div className="passenger-room">
            <input
              type="checkbox"
              name="hotelForDifferentCities"
              id="hotelForDifferentCities"
            />
            <label htmlFor="hotelForDifferentCities">
              Search for hotel in different cities or dates
            </label>
          </div>
        </div>
      ) : (
        <div className="flights-flex">
          {tripType === "One-way" ? (
            <div
              ref={ref}
              style={{
                width: "49%",
                overflow: "hidden",
                zIndex: 2,
              }}
            >
              <div
                onClick={() => {
                  setShowOverlay(true);
                  setShowCalendar((prev) => !prev);
                }}
                className="flight-flex flight-data"
              >
                <span
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "10px",
                  }}
                >
                  <CiCalendar />
                  <div className="flight-data-text">
                    <div className="flight-data-title">
                      {moment(date).format("DD-MMMM-YYYY")}
                      <p className="flight-data-subtitle">
                        {moment(date).format("dddd")}{" "}
                      </p>
                    </div>
                  </div>
                </span>
              </div>
              {showCalendar && (
                <SingleDatePicker date={date} setDate={setDate} />
              )}
            </div>
          ) : (
            <CustomDatePicker setShowOverLay={setShowOverlay} />
          )}

          <div
            onClick={() => {
              setShowToolTip(true);

              setShowOverlay(true);
            }}
            className={`${
              showToolTip && "showToolTip"
            } flight-data flight-tooltip `}
          >
            <span
              style={{
                display: "flex",
                alignItems: "center",
                gap: "10px",
              }}
            >
              <div className="hotelAndHomes-guests-icon">
                <BsPeople />
              </div>
              <div className="hotelAndHomes-guests-info">
                <div className="flight-data-text">
                  <div className="flight-data-title">
                    {adultCount + infantCount + childCount} Passengers,{" "}
                    {flightType}
                  </div>
                </div>
              </div>
            </span>
            <div>
              <IoIosArrowDown />
            </div>
            {showToolTip && (
              <ToolTip
                setShowToolTip={setShowToolTip}
                style={{
                  top: 75,
                  width: 400,
                  left: 0,
                }}
              >
                <div className="tooltip-flex">
                  <span
                    onClick={() => {
                      if (adultCount === 0) return;
                      setAdultCount((prev) => prev - 1);
                    }}
                  >
                    -
                  </span>
                  <span>
                    <span className="hightlight">{adultCount} </span>
                    <span className="text-grey">Adults (12yrs and above)</span>
                  </span>
                  <span onClick={() => setAdultCount((prev) => prev + 1)}>
                    +
                  </span>
                </div>

                <div className="tooltip-flex">
                  <span
                    onClick={() => {
                      if (childCount === 0) return;
                      setChildCount((prev) => prev - 1);
                    }}
                  >
                    -
                  </span>
                  <span className="hightlight">
                    {childCount}

                    <span className="text-grey">Children (2-11yrs)</span>
                  </span>

                  <span onClick={() => setChildCount((prev) => prev + 1)}>
                    +
                  </span>
                </div>

                <div className="tooltip-flex">
                  <span
                    onClick={() => {
                      if (infantCount === 0) return;
                      setInfantCount((prev) => prev - 1);
                    }}
                  >
                    -
                  </span>
                  <span className="hightlight">
                    {infantCount}

                    <span className="text-grey">Infants (below 2yrs)</span>
                  </span>
                  <span onClick={() => setInfantCount((prev) => prev + 1)}>
                    +
                  </span>
                </div>

                <div className="tooltip-flex">
                  {flightTypes.map((elem) => (
                    <AppButton
                      key={elem}
                      onClick={() => setFlightType(elem)}
                      solid={elem === flightType}
                      style={{
                        width: "49%",
                      }}
                    >
                      {elem}
                    </AppButton>
                  ))}
                </div>
              </ToolTip>
            )}
          </div>
        </div>
      )}

      <div className="heroSection-searchButton">
        <AppButton
          solid={true}
          style={{
            width: "450px",
            padding: "20px",
            fontSize: "18px",
            textTransform: "uppercase",
            fontWeight: "400",
          }}
        >
          Search FLIGHTS
        </AppButton>
      </div>
    </div>
  );
};

export default Flights;
