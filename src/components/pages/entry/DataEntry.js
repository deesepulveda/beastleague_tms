import React from "react";
import { templateButtons } from "../../../TopHeader";
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
        <div className="dataEntryFormSection_sideBox">
          <p className="sideBox_title">Created Dispatches</p>
          <ul>
            <li>
              <span>80035-0</span> created by Jake
            </li>
            <li>
              <span>80034-2</span> created by Jake
            </li>
            <li>
              <span>80034-1</span> created by Dan
            </li>
            <li>
              <span>80033-0</span> created by Dan
            </li>
            <li>
              <span>80032-0</span> created by Jake
            </li>
            <li>
              <span>80031-0</span> created by Jake
            </li>
            <li>
              <span>80030-0</span> created by Wes
            </li>
            <li>
              <span>80029-0</span> created by Jake
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DataEntry;
