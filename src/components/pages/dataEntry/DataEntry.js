import React from "react";
import "./DataEntry.css";
import { dataButtons } from "../../global/dataButtonsArrays";
import SortButtons from "../../global/SortButtons";
import "../../global/SortButtons.css";

const DataEntry = () => {
  return (
    <div className="dataEntryContainer">
      {" "}
      <div className="sortButtonContainer">
        {dataButtons.map((btn, i) => (
          <SortButtons key={i} ind={i} btn={btn}>
            {btn.tab}
          </SortButtons>
        ))}
      </div>
    </div>
  );
};

export default DataEntry;
