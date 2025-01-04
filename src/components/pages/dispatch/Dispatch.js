import React from "react";
import { dispButtons } from "../../global/dataButtonsArrays";
import SortButtons from "../../global/SortButtons";
import "../../global/SortButtons.css";

const Dispatch = ({ activeComponent }) => {
  return (
    <div
      className={
        activeComponent
          ? "pageContainer_components componentSlideIn"
          : "pageContainer_components"
      }>
      <div className="sortButtonsContainer">
        {dispButtons.map((btns) => (
          <SortButtons btns={btns}>{btns.tab}</SortButtons>
        ))}
      </div>
    </div>
  );
};

export default Dispatch;
