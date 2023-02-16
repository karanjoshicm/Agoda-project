import React from "react";
import { Link } from "react-router-dom";

//icons
import {
  AiOutlineCalendar,
  AiOutlineStar,
  AiFillDollarCircle,
  AiFillCaretDown,
} from "react-icons/ai";
import { BiMessageSquareDetail, BiUser } from "react-icons/bi";
import { SiSololearn } from "react-icons/si";
import { RxDot } from "react-icons/rx";
import { MdStars } from "react-icons/md";

//style
import "./SideNav.scss";
const SideNav = () => {
  const sideNavElements = [
    {
      title: "My bookings",
      path: "/bookings",
      icon: <AiOutlineCalendar />,
    },
    {
      title: "Inbox",
      path: "/inbox",
      icon: <BiMessageSquareDetail />,
    },
    {
      title: "Reviews",
      path: "/reviews",
      icon: <AiOutlineStar />,
    },
    {
      title: "Agoda VIP",
      path: "/agodaVip",
      icon: <MdStars />,
    },
    {
      title: "AgodaCash",
      path: "/agodaCash",
      icon: <AiFillDollarCircle />,
    },
    {
      title: "Cashback Rewards",
      path: "/cashback",
      icon: <AiFillDollarCircle />,
    },
    {
      title: "PointsMAX",
      path: "/points",
      icon: <SiSololearn />,
    },
  ];
  const profileNavElements = [
    {
      name: "User details",
      path: "#user-details",
    },
    {
      name: "Payment methods",
      path: "#payment-methods",
    },
    {
      name: "Email subscriptions",
      path: "#email-subscriptions",
    },
  ];
  return (
    <div className="sidenav">
      <ul className="sidenav-listContainer">
        {sideNavElements.map((elem) => (
          <li className="sidenav-listContainer-item">
            <Link to={elem.path}>
              {elem.icon}
              <span> {elem.title}</span>
            </Link>
          </li>
        ))}
      </ul>

      <div className="sidenav-profile">
        <div className="sidenav-profile-header">
          <BiUser /> <span>Profile</span> <AiFillCaretDown />
        </div>
        <ul className="sidenav-listContainer">
          {profileNavElements.map((elem) => (
            <li className="sidenav-listContainer-item disc">
              <a href={elem.path}>
                <RxDot /> <span> {elem.name}</span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SideNav;
