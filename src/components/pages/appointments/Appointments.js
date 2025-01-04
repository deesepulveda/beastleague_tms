import React from "react";
import { apptButtons } from "../../global/dataButtonsArrays";
import SortButtons from "../../global/SortButtons";
import "../../global/SortButtons.css";
import SideTaskView from "../../global/SideTaskView";

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
          <SortButtons key={btns.id} btns={btns}>
            {btns.tab}
          </SortButtons>
        ))}
      </div>
      <SideTaskView />
    </div>
  );
};

export default Appointments;
