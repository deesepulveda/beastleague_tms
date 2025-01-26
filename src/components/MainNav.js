/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import "./MainNav.css";

const MainNav = ({ handleNavLinks, activeComponent }) => {
  return (
    <div className="mainNav">
      <div className="mainNav_welcomeBox">
        <img
          src={require("../assets/WhimsyIntermodalWhite-Clearbkgrd.png")}
        />
        Whimsy Inc, Welcome <span>Dee</span>
      </div>
      <nav className="mainNav_navMenu">
        <ul>
          <li
            onClick={() => handleNavLinks("dash")}
            className={
              activeComponent === "dash" ? "mainNav_activeLink" : ""
            }>
            dash
          </li>
          <li
            onClick={() => handleNavLinks("data")}
            className={
              activeComponent === "data" ? "mainNav_activeLink" : ""
            }>
            data
          </li>
          <li
            onClick={() => handleNavLinks("disp")}
            className={
              activeComponent === "disp" ? "mainNav_activeLink" : ""
            }>
            disp
          </li>
          <li
            onClick={() => handleNavLinks("appt")}
            className={
              activeComponent === "appt" ? "mainNav_activeLink" : ""
            }>
            appt
          </li>
          <li
            onClick={() => handleNavLinks("trace")}
            className={
              activeComponent === "trace" ? "mainNav_activeLink" : ""
            }>
            trace
          </li>
          <li
            onClick={() => handleNavLinks("bill")}
            className={
              activeComponent === "bill" ? "mainNav_activeLink" : ""
            }>
            bill
          </li>
          <li
            onClick={() => handleNavLinks("equip")}
            className={
              activeComponent === "equip" ? "mainNav_activeLink" : ""
            }>
            equip
          </li>
          <li
            onClick={() => handleNavLinks("drivers")}
            className={
              activeComponent === "drivers"
                ? "mainNav_activeLink"
                : ""
            }>
            drivers
          </li>
          <li
            onClick={() => handleNavLinks("test")}
            className={
              activeComponent === "test" ? "mainNav_activeLink" : ""
            }>
            test
          </li>
        </ul>
      </nav>
      <div className="mainNav_searchBox">
        search <input type="text" />
      </div>
    </div>
  );
};

export default MainNav;
