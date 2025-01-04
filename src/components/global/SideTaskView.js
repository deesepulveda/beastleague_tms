import React, { useState } from "react";
import "./SideTaskView.css";

const SideTaskView = () => {
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
      <div
        className={
          toggleView
            ? "sideTaskViewContainer_menu openTaskView"
            : "sideTaskViewContainer_menu closeTaskView"
        }>
        <div className="sideTaskViewContainer_miniView">
          <p>Today</p>
        </div>
        <div className="sideTaskViewContainer_miniView">
          <p>Requested PU Numbers</p>
        </div>
        <div className="sideTaskViewContainer_miniView">
          <p>Updates Needed</p>
        </div>
        <div className="sideTaskViewContainer_miniView">
          <p>Trace Now</p>
        </div>
        <div className="sideTaskViewContainer_miniView">
          <p>Call In Appts</p>
        </div>
        <div className="sideTaskViewContainer_miniView">
          <p>Email Appts</p>
        </div>
        <div className="sideTaskViewContainer_miniView">
          <p>Need Updates</p>
        </div>
      </div>
    </div>
  );
};

export default SideTaskView;
