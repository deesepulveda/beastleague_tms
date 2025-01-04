import React from "react";
import { traceButtons } from "../../global/dataButtonsArrays";
import SortButtons from "../../global/SortButtons";
import "../../global/SortButtons.css";

const Tracing = ({ activeComponent }) => {
  return (
    <div
      className={
        activeComponent
          ? "pageContainer_components componentSlideIn"
          : "pageContainer_components"
      }>
      <div className="sortButtonsContainer">
        {traceButtons.map((btns) => (
          <SortButtons btns={btns}>{btns.tab}</SortButtons>
        ))}
      </div>
    </div>
  );
};

export default Tracing;
