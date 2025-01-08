import React from "react";
import "../../global/SortButtons.css";

const Tracing = ({ activeComponent }) => {
  return (
    <div
      className={
        activeComponent
          ? "pageContainer_components componentSlideIn"
          : "pageContainer_components"
      }>
      Tracing
    </div>
  );
};

export default Tracing;
