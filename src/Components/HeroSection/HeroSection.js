import React, { useState } from "react";
import Flights from "./Flights/Flights";

//styles
import "./HeroSection.scss";
import HotelsAndHomes from "./HotelsAndHomes/HotelsAndHomes";
import Activities from "./Activities/Activities";
const HeroSection = () => {
  const tabListLinks = [
    {
      title: "Hotels & Homes",
      svg: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          className="SvgIconstyled__SvgIconStyled-sc-1i6f60b-0 cClucx"
        >
          <path
            fillRule="evenodd"
            d="M7 2.18a1 1 0 0 1 .164.014l10 1.667a1 1 0 0 1 .836.986V11L21 11a1 1 0 0 1 1 1v10h-8v-5a1 1 0 0 0-1-1h-2a1 1 0 0 0-1 1v5H6V3.18a1 1 0 0 1 1-1zM5 10v12H2V11a1 1 0 0 1 1-1h2zm16 7h-3v1h3v-1zm0-3h-3v1h3v-1zm-9.5-4H9v2.5h1.01V11h1.49v-1zm4 0H13v2.5h1.01V11h1.49v-1zm-4-4H9v2.5h1.01V7h1.49V6zm4 0H13v2.5h1.01V7h1.49V6z"
          ></path>
        </svg>
      ),
      active: true,
    },
    {
      title: "Private Stays",
      svg: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          className="SvgIconstyled__SvgIconStyled-sc-1i6f60b-0 fTCyNE"
        >
          <path
            fillRule="evenodd"
            d="M12 2c5.523 0 10 4.477 10 10 0 5.43-4.327 9.848-9.72 9.996L12 22a10 10 0 0 1-9-5.637l-.08-.169A9.963 9.963 0 0 1 2 12C2 6.477 6.477 2 12 2zm-.5 12h-3v4h3v-4zm4 0h-3v4h3v-4zm-4-5c-1.624.274-2.84 1.632-2.985 3.272l-.012.19L8.5 13h3V9zm1 0v4h3v-.508l-.01-.193c-.129-1.593-1.265-2.917-2.796-3.261L12.5 9zM12 3.5a8.5 8.5 0 0 0-8.485 9.014L12 4.5l8.485 8.013A8.5 8.5 0 0 0 12 3.5z"
          ></path>
        </svg>
      ),
      active: false,
    },
    {
      title: "Flight + Hotel",
      svg: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          className="SvgIconstyled__SvgIconStyled-sc-1i6f60b-0 fTCyNE"
        >
          <path
            fillRule="evenodd"
            d="M10 13v9.023H2V14a1 1 0 0 1 1-1h7zm11.5-3a.5.5 0 0 1 .5.5V22H11V10.5a.5.5 0 0 1 .5-.5h10zM8 18H4v1h4v-1zm8-2h-2v2h1.01v-1H16v-1zm3 0h-2v2h1.01v-1H19v-1zM8 15H4v.954h4V15zm8-2h-2v2h1.01v-1H16v-1zm3 0h-2v2h1.01v-1H19v-1zM8.127 1.301a2 2 0 0 1 1.61.106l4.94 2.576 3.726-1.357a1.19 1.19 0 1 1 .814 2.236L8.473 8.772a2 2 0 0 1-2.25-.635L4 5.337l.485-.177a2 2 0 0 1 1.868.267l1.442 1.06L10.95 5.34 7.085 1.681z"
          ></path>
        </svg>
      ),
      active: false,
    },
    {
      title: "Flights",
      svg: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          className="SvgIconstyled__SvgIconStyled-sc-1i6f60b-0 fTCyNE"
        >
          <path
            fillRule="evenodd"
            d="M4.775 4.604L3 6.379l8.408 4.02-3.827 3.826-2.15-.704a1.034 1.034 0 0 0-1.053.252l-1.28 1.281 3.557 2.29 2.291 3.56 1.281-1.283c.276-.275.373-.682.252-1.052l-.704-2.15 3.826-3.826L17.62 21l1.776-1.776c.26-.258.362-.636.27-.99l-2.411-9.298 3.29-3.29a1.551 1.551 0 0 0-2.193-2.193l-3.29 3.29-9.297-2.41a1.035 1.035 0 0 0-.99.27"
          ></path>
        </svg>
      ),
      active: false,
    },
    {
      title: "Long stays",
      svg: (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="SvgIconstyled__SvgIconStyled-sc-1i6f60b-0 fTCyNE"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M9 1.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5V3H4a2 2 0 0 0-2 2v15a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-3h-2v2l-.007.117A1 1 0 0 1 19 20H5l-.117-.007A1 1 0 0 1 4 19V7h16v3h2V5a2 2 0 0 0-2-2h-3V1.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5V3H9V1.5zm10 10a.5.5 0 0 0-1 0V13h-1.5a.5.5 0 0 0 0 1H18v1.5a.5.5 0 0 0 .5.5l.09-.008A.5.5 0 0 0 19 15.5V14h1.5l.09-.008A.5.5 0 0 0 20.5 13H19v-1.5zM9.5 9.125a.875.875 0 1 0 0 1.75h3.173l-2.477 5.78a.875.875 0 0 0 1.608.69l3-7A.875.875 0 0 0 14 9.125H9.5z"
            fill="#2A2A2E"
          ></path>
        </svg>
      ),
      active: false,
    },
    {
      title: "Activities",
      svg: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          className="SvgIconstyled__SvgIconStyled-sc-1i6f60b-0 fTCyNE"
        >
          <path d="M12 10.5c.54 0 1.013.352 1.173.86l.031.119L15.187 21H16a1 1 0 0 1 1 1v1H7v-1a1 1 0 0 1 1-1h.812l1.984-9.521A1.23 1.23 0 0 1 12 10.5zM13.5 1a.5.5 0 0 1 .5.5v.723A8.993 8.993 0 0 1 18.71 5H21.5a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-.5.5h-.723A9.03 9.03 0 0 1 21 11c0 1.052-.18 2.062-.512 3H21.5a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.467-.321 9.008 9.008 0 0 1-2.21 1.471l-.21-1.01A8.03 8.03 0 0 0 18 16.29L18 15.28l-3.423-2.106-.28-1.348 3.82 2.353A.499.499 0 0 1 18.5 14l.918.001c.375-.927.582-1.94.582-3.001 0-.69-.087-1.36-.252-2H18.5a.5.5 0 0 1-.5-.5v-.606l-4.168 2.565a2.236 2.236 0 0 0-.779-.695L18 6.72l.001-1.01a7.999 7.999 0 0 0-4-2.458L14 4.5a.5.5 0 0 1-.5.5h-1v4.557a2.231 2.231 0 0 0-1 0V5h-1a.5.5 0 0 1-.5-.5V3.252a7.999 7.999 0 0 0-4 2.457V6.72l4.947 3.044c-.31.167-.578.405-.78.696L6 7.895V8.5a.5.5 0 0 1-.5.5H4.252A8.015 8.015 0 0 0 4 11c0 1.061.207 2.074.582 3.001L5.5 14c.153 0 .29.07.382.178l3.82-2.351-.281 1.347L6 15.279v1.012a8.03 8.03 0 0 0 2.387 1.849l-.21 1.01a9.014 9.014 0 0 1-2.21-1.472A.498.498 0 0 1 5.5 18h-3a.5.5 0 0 1-.5-.5v-3a.5.5 0 0 1 .5-.5h1.012A8.985 8.985 0 0 1 3 11c0-.687.077-1.357.223-2H2.5a.5.5 0 0 1-.5-.5v-3a.5.5 0 0 1 .5-.5h2.791a8.993 8.993 0 0 1 4.71-2.777L10 1.5a.5.5 0 0 1 .5-.5h3z"></path>
        </svg>
      ),
      active: false,
    },
  ];

  const [activeLink, setActiveLink] = useState(tabListLinks[0]);
  const [showOverlay, setShowOverlay] = useState(false);
  return (
    <div className="heroSection">
      {showOverlay && (
        <div onClick={() => setShowOverlay(false)} className="overlay"></div>
      )}
      <div className="heroSection-bgContainer">
        <div className="heroSection-bgContainer-text">
          <div className="heroSection-bgContainer-text-bg">
            BOOK A HOME ON AGODA HOMES
          </div>
          <div className="heroSection-bgContainer-text-sm">
            More spacious. More local. More of why you travel.
          </div>
        </div>
      </div>
      <div className="heroSection-inputContainer">
        <ul className="heroSection-inputContainer-tabList">
          {tabListLinks.map((elem, index) => {
            return (
              <TabLink
                currentLink={elem}
                activeLink={activeLink}
                setActiveLink={setActiveLink}
                key={index}
              />
            );
          })}
        </ul>
        <div className="heroSection-inputContainer-tabPanel">
          {
            {
              "Hotels & Homes": (
                <HotelsAndHomes setShowOverlay={setShowOverlay} />
              ),
              Flights: <Flights setShowOverlay={setShowOverlay} />,
              "Private Stays": (
                <HotelsAndHomes privateStays={true} setShowOverlay={setShowOverlay} />
              ),
              "Long stays": <HotelsAndHomes privateStays={true} setShowOverlay={setShowOverlay} />,
              Activities: <Activities setShowOverlay={setShowOverlay} />,
              "Flight + Hotel": <Flights setShowOverlay={setShowOverlay} flightAndHotel={true}/>,
            }[activeLink.title]
          }
        </div>


      </div>
    </div>
  );
};

export default HeroSection;

const TabLink = ({ currentLink, activeLink, setActiveLink }) => {
  return (
    <li
      onClick={() => setActiveLink(currentLink)}
      className={`${currentLink.title === activeLink.title ? "active" : ""}`}
    >
      <span className="tabList-image">{currentLink.svg}</span>
      <span className="tabList-title">{currentLink.title}</span>
    </li>
  );
};
