import React from "react";

const Equipment = ({ activeComponent }) => {
  return (
    <div
      className={
        activeComponent
          ? "pageContainer_components componentSlideIn"
          : "pageContainer_components"
      }>
      Equipment
    </div>
  );
};

export default Equipment;
