import React from "react";

const Billing = ({ activeComponent }) => {
  return (
    <div
      className={
        activeComponent
          ? "pageContainer_components componentSlideIn"
          : "pageContainer_components"
      }>
      Billing
    </div>
  );
};

export default Billing;
