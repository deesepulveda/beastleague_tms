import React, { useState } from "react";
import "./SideTaskView.css";

const dispTaskView = [
  { id: 1, tab: "undispatched" },
  { id: 2, tab: "in transit to cust" },
  { id: 3, tab: "at customer" },
  { id: 4, tab: "at pickup rail" },
  { id: 5, tab: "at return rail" },
  { id: 6, tab: "at depot" },
];

const apptTaskView = [
  { id: 1, tab: "need pu #s" },
  { id: 2, tab: "need appointments" },
  { id: 3, tab: "need po #s" },
  { id: 4, tab: "email customers" },
  { id: 5, tab: "available" },
  { id: 6, tab: "misc" },
];

const traceTaskView = [
  { id: 1, tab: "need pu #s" },
  { id: 2, tab: "eta" },
  { id: 3, tab: "need storage paid" },
  { id: 4, tab: "last free day" },
  { id: 5, tab: "eta" },
  { id: 6, tab: "misc" },
];

const SideTaskView = ({ activeComponent }) => {
  const [toggleView, setToggleView] = useState(false);

  const handleToggleTaskView = () => {
    setToggleView(!toggleView);
  };

  return (
    <div className="sideTaskViewContainer">
      <div
        className={
          toggleView
            ? "sideTaskViewContainer_toggle toggleBG"
            : "sideTaskViewContainer_toggle"
        }
        onClick={handleToggleTaskView}>
        Task View 🚢
      </div>
      {activeComponent === "disp" && (
        <div
          className={
            toggleView
              ? "sideTaskViewContainer_menu openTaskView"
              : "sideTaskViewContainer_menu closeTaskView"
          }>
          {dispTaskView.map((tabs) => (
            <div className="sideTaskViewContainer_miniView">
              <p>{tabs.tab}</p>
            </div>
          ))}
        </div>
      )}
      {activeComponent === "appt" && (
        <div
          className={
            toggleView
              ? "sideTaskViewContainer_menu openTaskView"
              : "sideTaskViewContainer_menu closeTaskView"
          }>
          {apptTaskView.map((tabs) => (
            <div className="sideTaskViewContainer_miniView">
              <p>{tabs.tab}</p>
            </div>
          ))}
        </div>
      )}
      {activeComponent === "trace" && (
        <div
          className={
            toggleView
              ? "sideTaskViewContainer_menu openTaskView"
              : "sideTaskViewContainer_menu closeTaskView"
          }>
          {traceTaskView.map((tabs) => (
            <div className="sideTaskViewContainer_miniView">
              <p>{tabs.tab}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SideTaskView;
