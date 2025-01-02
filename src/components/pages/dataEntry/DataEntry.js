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
      <div className="dataEntryContainer_history">
        <p className="dataEntryContainer_history_title">
          created dispatch:
        </p>
        <ul className="dataEntryContainer_history_list_container">
          <li className="dataEntryContainer_history_li">
            <span className="history_li_span">80006-0</span> created
            by Wes
          </li>
          <li className="dataEntryContainer_history_li">
            <span className="history_li_span">80005-0</span> created
            by Wes
          </li>
          <li className="dataEntryContainer_history_li">
            <span className="history_li_span">80004-0</span> created
            by Dan
          </li>
          <li className="dataEntryContainer_history_li">
            <span className="history_li_span addCursorPointer">
              80003-3
            </span>{" "}
            created by Jake
          </li>
          <li className="dataEntryContainer_history_li">
            <span className="history_li_span">80003-2</span> created
            by Jake
          </li>
          <li className="dataEntryContainer_history_li">
            <span className="history_li_span">80003-1</span> created
            by Jake
          </li>
          <li className="dataEntryContainer_history_li">
            <span className="history_li_span">80002-0</span> created
            by Dan
          </li>
          <li className="dataEntryContainer_history_li">
            <span className="history_li_span">80001-0</span> created
            by Dan
          </li>
          <li className="dataEntryContainer_history_li">
            <span className="history_li_span">80000-0</span> created
            by Jake
          </li>
        </ul>
      </div>
    </div>
  );
};

export default DataEntry;
