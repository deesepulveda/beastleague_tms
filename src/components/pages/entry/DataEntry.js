import React from "react";
import { dataButtons } from "../../global/dataButtonsArrays";
import SortButtons from "../../global/SortButtons";
import "../../global/SortButtons.css";

const DataEntry = ({ activeComponent }) => {
  return (
    <div
      className={
        activeComponent
          ? "pageContainer_components componentSlideIn"
          : "pageContainer_components"
      }>
      <div className="sortButtonsContainer">
        {dataButtons.map((btns) => (
          <SortButtons btns={btns}>{btns.tab}</SortButtons>
        ))}
      </div>
    </div>
  );
};

export default DataEntry;
