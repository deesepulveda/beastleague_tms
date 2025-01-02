import React from "react";
import "./Tracing.css";
import { traceButtons } from "../../global/dataButtonsArrays";
import SortButtons from "../../global/SortButtons";
import SideTaskView from "../../global/SideTaskView";

const Tracing = () => {
  return (
    <div className="tracingContainer">
      {" "}
      <div className="sortButtonContainer">
        {traceButtons.map((btn) => (
          <SortButtons key={btn.id} btn={btn}>
            {btn.tab}
          </SortButtons>
        ))}
      </div>
      <SideTaskView />
    </div>
  );
};

export default Tracing;
