import React from "react";
import "./DataEntry.css";
import { dataButtons } from "../../global/dataButtonsArrays";
import SortButtons from "../../global/SortButtons";
import { templateButtons } from "../../global/dataButtonsArrays";
import "../../global/SortButtons.css";

const DataEntry = () => {
  return (
    <div className="dataEntryContainer">
      <div className="sortButtonContainer">
        {dataButtons.map((btn, i) => (
          <SortButtons key={i} ind={i} btn={btn}>
            {btn.tab}
          </SortButtons>
        ))}
      </div>
      <div className="dataEntryContainer_template">
        <p>templates:</p>
        <div className="sortButtonContainer">
          {templateButtons.map((btn, i) => (
            <SortButtons key={i} ind={i} btn={btn}>
              {btn.tab}
            </SortButtons>
          ))}
        </div>
      </div>
      <form className="dataEntryContainer_form"></form>
      <div className="dataEntryContainer_history"></div>
    </div>
  );
};

export default DataEntry;
