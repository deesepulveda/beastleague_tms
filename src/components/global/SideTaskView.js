import React, { useState } from "react";
import "./SideTaskView.css";

const SideTaskView = () => {
  const [toggleView, setToggleView] = useState(false);

  const handleToggleTaskView = () => {
    setToggleView(!toggleView);
  };

  return (
    <div
      className={
        toggleView
          ? "sideTaskViewContainer toggleBG"
          : "sideTaskViewContainer"
      }>
      <div
        className="sideTaskViewContainer_toggle"
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
          <p>Need Updates</p>
        </div>
      </div>
    </div>
  );
};

export default SideTaskView;
