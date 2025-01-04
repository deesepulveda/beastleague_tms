import React from "react";

const Drivers = ({ activeComponent }) => {
  return (
    <div
      className={
        activeComponent
          ? "pageContainer_components componentSlideIn"
          : "pageContainer_components"
      }>
      Drivers
    </div>
  );
};

export default Drivers;
