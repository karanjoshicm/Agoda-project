import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

//components
import Tooptip from "../Tooltip/Tooptip";
import AppButton from "../AppButton/AppButton";
import RedTag from "../RedTag/RedTag";

//styles
import "./Navbar.scss";

import getToken from "../../helpers/getToken";
import useToast from "../../helpers/useToast";
import { userInfo } from "../../api/user/userInfo";
//icons
import { AiFillCaretDown } from "react-icons/ai";
import Cookies from "js-cookie";
import AuthContext from "../../AuthContext/Context";
const Navbar = () => {
  //states
  const [showMore, setShowMore] = useState(false);
  const [navLinksLimit] = useState(5);
  const [showProfileDropDown, setShowProfileDropDown] = useState(false);
  const [navLinks] = useState([
    {
      name: "Flight + Hotel",
      path: "#",
      redTag: true,
      redTagText: "Bundle and save!",
    },
    {
      name: "Hotels & Homes",
      path: "#",
      redTag: false,
      redTagText: "",
    },
    {
      name: "Flights",
      path: "#",
      redTag: false,
      redTagText: "",
    },

    {
      name: "Coupons & Deals",
      path: "#",
      redTag: true,

      redTagText: "New!",
    },
    {
      name: "Apartments",
      path: "#",
      redTag: false,
      redTagText: "",
      icon: (
        <svg
          width="1em"
          height="1em"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
        >
          <path
            fillRule="evenodd"
            d="M12 2c5.523 0 10 4.477 10 10 0 5.43-4.327 9.848-9.72 9.996L12 22a10 10 0 0 1-9-5.637l-.08-.169A9.963 9.963 0 0 1 2 12C2 6.477 6.477 2 12 2zm-.5 12h-3v4h3v-4zm4 0h-3v4h3v-4zm-4-5c-1.624.274-2.84 1.632-2.985 3.272l-.012.19L8.5 13h3V9zm1 0v4h3v-.508l-.01-.193c-.129-1.593-1.265-2.917-2.796-3.261L12.5 9zM12 3.5a8.5 8.5 0 0 0-8.485 9.014L12 4.5l8.485 8.013A8.5 8.5 0 0 0 12 3.5z"
          ></path>
        </svg>
      ),
    },
    {
      name: "Airport transfer",
      path: "#",
      redTag: false,
      redTagText: "",
    },
    {
      name: "Car rentals",
      path: "#",
      redTag: false,
      redTagText: "",
    },
  ]);
  const toolTipData = [
    {
      title: "MY ACCOUNT",
      path: "/",
    },

    {
      title: "My bookings",
      path: "/bookings",
    },

    {
      title: "Inbox",
      path: "/inbox",
    },

    {
      title: "AgodaCash",
      path: "/giftCard",
    },

    {
      title: "Cashback Rewards",
      path: "/giftCard",
    },
    {
      title: "Agoda VIP",
      path: "/vip",
    },
    {
      title: "Saved properties list",
      path: "/favourite",
    },
    {
      title: "Reviews",
      path: "/reviews",
    },
    {
      title: "Profile",
      path: "/profile",
    },
  ];

  const { userData, isLoggedIn, setIsLoggedIn } = useContext(AuthContext);
  const navigate = useNavigate();

  return (
    <div className="navbar">
      <div className="navbar-left">
        <img
          onClick={() => navigate("/")}
          src="https://cdn6.agoda.net/images/kite-js/logo/agoda/color-default.svg"
          alt=""
          className="logo"
        />
        <ul className="navbar-left-links-container">
          {navLinks.map((elem, index) => {
            if (index < navLinksLimit) {
              return (
                <li key={index} className="navbar-left-link">
                  {elem.redTag && (
                    <RedTag isCurve={true}>{elem?.redTagText}</RedTag>
                  )}
                  <a href={elem.path}>{elem.name}</a>
                </li>
              );
            }
          })}
        </ul>
        <span className="navbar-left-more">
          <svg
            onClick={() => setShowMore(() => !showMore)}
            width="1em"
            height="1em"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path
              fillRule="evenodd"
              d="M20 10a2 2 0 1 1 0 4 2 2 0 0 1 0-4zM4 10a2 2 0 1 1 0 4 2 2 0 0 1 0-4zm8 0a2 2 0 1 1 0 4 2 2 0 0 1 0-4z"
            ></path>
          </svg>
          {showMore && (
            <Tooptip setShowToolTip={setShowMore}>
              {navLinks.map((elem, index) => {
                if (index >= navLinksLimit) {
                  return (
                    <li
                      key={index}
                      onClick={() => setShowMore(() => !showMore)}
                      className="navbar-left-link"
                      style={{
                        display: "block",
                        padding: "0px 15px",
                      }}
                    >
                      <a href={elem.path}>{elem.name}</a>
                    </li>
                  );
                }
              })}
            </Tooptip>
          )}
        </span>
      </div>
      <div className="navbar-right">
        <AppButton type="danger">List your place</AppButton>
        <span className="navbar-right-span">
          <img
            height={20}
            src="https://cdn6.agoda.net/images/mobile/flag-us@2x.png"
            alt=""
          />
        </span>
        <span className="navbar-right-span">Rs. </span>

        <>
          {isLoggedIn ? (
            <div
              onClick={() => setShowProfileDropDown(true)}
              className="user-profile-details"
            >
              <div className="user-profile-icon">{userData?.firstName[0]}</div>
              <div className="user-profile-name">
                {userData?.firstName} {userData?.lastName[0]}
                {/* Karan J. */}
              </div>
              <div className="user-profile-agodaMoney">
                <svg
                  width="1em"
                  height="1em"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <path
                    fillRule="evenodd"
                    d="M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2zm1.125 2a.875.875 0 0 0-.868.765l-.007.11v1.128c-.445-.01-.853.005-1.226.037l-.274.028V4.875a.875.875 0 0 0-1.743-.11L9 4.875v1.592a5.544 5.544 0 0 0-.608.262 4.08 4.08 0 0 0-1.257.984c-.357.43-.575.926-.58 1.474 0 .686.556 1.242 1.242 1.242.307 0 .631-.098.805-.295.143-.176.285-.35.42-.53l.196-.276c.252-.389.603-.71 1.02-.937.48-.206.892-.29 1.377-.31l.25-.006h.442l.15.006c.99.073 1.779.86 1.855 1.849l.006.157v.226l-5.28 1.16-.254.074c-.756.229-1.432.525-1.979 1.07a2.88 2.88 0 0 0-.804 2.055 3.027 3.027 0 0 0 .486 1.658 3.37 3.37 0 0 0 1.39 1.213c.112.053.227.101.343.145l.247.086c.078.025.218.066.41.106l.123.024v1.221a.875.875 0 0 0 1.743.11l.007-.11v-1.161c.368-.04.766-.115 1.183-.243l.317-.106v1.51a.875.875 0 0 0 1.743.11l.007-.11-.001-2.434.033-.02.242-.167.237-.174h.072l.173.266c.239.349.512.673.815.968.25.257.587.41.944.424.375.002.738-.131 1.016-.37.269-.192.434-.498.447-.827a5.15 5.15 0 0 0-.29-1.155 5.69 5.69 0 0 1-.28-1.434l-.01-.293v-3.34l.005-.303a6.047 6.047 0 0 0-.487-2.347 2.934 2.934 0 0 0-1.675-1.446 9.253 9.253 0 0 0-.822-.23l-.418-.087L14 4.875A.875.875 0 0 0 13.125 4zm1.194 8.007v1.128c0 1.358-1.1 2.458-2.458 2.458h-.46a1.916 1.916 0 0 1-1.29-.423 1.313 1.313 0 0 1-.516-1.024 1.081 1.081 0 0 1 .418-.91c.26-.207.502-.305.883-.436l3.423-.793z"
                  ></path>
                </svg>
                <span> Rs.0</span>
              </div>
              <AiFillCaretDown />
              {showProfileDropDown && (
                <Tooptip
                  style={{
                    position: "absolute",
                    // bottom: "0px",
                    top: 60,
                    right: 10,
                    padding: "10px 15px",
                    width: 250,
                    // height: 300,
                  }}
                  setShowToolTip={setShowProfileDropDown}
                >
                  {toolTipData.map((elem) => (
                    <Link
                      onClick={() => setShowProfileDropDown(false)}
                      className="user-profile-tooltip"
                      to={elem.path}
                    >
                      <span>{elem.title}</span>
                    </Link>
                  ))}

                  <AppButton
                    onClick={() => {
                      Cookies.remove("token");
                      setIsLoggedIn(false);
                      // window.location.reload();
                    }}
                    style={{
                      width: "100%",
                    }}
                  >
                    Sign Out
                  </AppButton>
                </Tooptip>
              )}
            </div>
          ) : (
            <>
              <span
                onClick={() => {
                  navigate("/login");
                }}
                className="navbar-right-span"
              >
                Sign in
              </span>
              <AppButton
                onClick={() => {
                  navigate("/signup");
                }}
                type="primary"
              >
                Create account
              </AppButton>
            </>
          )}
        </>
      </div>
      {/* <button
        onClick={() => {
          Cookies.remove("token");
          dispatch({ type: "LoggedOut" });
        }}
      >
        Logout
      </button> */}
    </div>
  );
};

export default Navbar;
