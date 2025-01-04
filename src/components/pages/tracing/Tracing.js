import React from "react";
import { traceButtons } from "../../global/dataButtonsArrays";
import SortButtons from "../../global/SortButtons";
import "../../global/SortButtons.css";
import SideTaskView from "../../global/SideTaskView";

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
          <SortButtons key={btns.id} btns={btns}>
            {btns.tab}
          </SortButtons>
        ))}
      </div>
      <SideTaskView />
    </div>
  );
};

export default Tracing;
