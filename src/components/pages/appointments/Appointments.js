import React from "react";
import { apptButtons } from "../../global/dataButtonsArrays";
import SortButtons from "../../global/SortButtons";
import "../../global/SortButtons.css";

const Appointments = ({ activeComponent }) => {
  return (
    <div
      className={
        activeComponent
          ? "pageContainer_components componentSlideIn"
          : "pageContainer_components"
      }>
      <div className="sortButtonsContainer">
        {apptButtons.map((btns) => (
          <SortButtons btns={btns}>{btns.tab}</SortButtons>
        ))}
      </div>
    </div>
  );
};

export default Appointments;
