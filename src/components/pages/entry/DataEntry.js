import React from "react";
import { dataButtons } from "../../global/dataButtonsArrays";
import { templateButtons } from "../../global/dataButtonsArrays";
import SortButtons from "../../global/SortButtons";
import "../../global/SortButtons.css";
import "./DataEntry.css";

const DataEntry = ({ activeComponent }) => {
  return (
    <div
      className={
        activeComponent
          ? "pageContainer_components dataEntryContainer componentSlideIn"
          : "pageContainer_components"
      }>
      <div className="sortButtonsContainer">
        {dataButtons.map((btns) => (
          <SortButtons key={btns.id} btns={btns}>
            {btns.tab}
          </SortButtons>
        ))}
      </div>
      <div className="dataEntryFormSection">
        <div className="dataEntryFormSection_mainBox">
          <div className="dataEntryFormSection_temp">
            <p>template</p>
            <div className="dataEntryFormSection_temp_buttons">
              {templateButtons.map((btns) => (
                <SortButtons key={btns.id} btns={btns}>
                  {btns.tab}
                </SortButtons>
              ))}
            </div>
          </div>
          <form className="dataEntryFormSection_form"></form>
        </div>
        <div className="dataEntryFormSection_sideBox"></div>
      </div>
    </div>
  );
};

export default DataEntry;
