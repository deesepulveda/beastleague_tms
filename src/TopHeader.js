import React from "react";
import "./TopHeader.css";
import SideTaskView from "./components/global/SideTaskView";
import "../src/components/global/SideTaskView.css";
import SortButtons from "./components/global/SortButtons";
import "./components/global/SortButtons.css";

const dispButtons = [
  { id: 1, tab: "all", hovered: true },
  { id: 2, tab: "today", hovered: false },
  { id: 3, tab: "imports", hovered: false },
  { id: 4, tab: "exports", hovered: false },
  { id: 5, tab: "yards", hovered: false },
  { id: 6, tab: "rails", hovered: false },
  { id: 7, tab: "drops", hovered: false },
];

const apptButtons = [
  { id: 1, tab: "all", hovered: true },
  { id: 2, tab: "avail", hovered: false },
  { id: 3, tab: "pu#s", hovered: false },
  { id: 4, tab: "sched", hovered: false },
  { id: 5, tab: "imports", hovered: false },
  { id: 6, tab: "exports", hovered: false },
];

const dataButtons = [
  { id: 1, tab: "entry", hovered: true },
  { id: 2, tab: "customers", hovered: false },
  { id: 3, tab: "rates", hovered: false },
  { id: 4, tab: "accessorials", hovered: false },
];

const traceButtons = [
  { id: 1, tab: "all", hovered: true },
  { id: 2, tab: "g4", hovered: false },
  { id: 3, tab: "lpc", hovered: false },
  { id: 4, tab: "cn", hovered: false },
  { id: 5, tab: "csx", hovered: false },
  { id: 6, tab: "ns", hovered: false },
  { id: 7, tab: "cp", hovered: false },
];

export const templateButtons = [
  { id: 1, tab: "cst drop", hovered: false },
  { id: 2, tab: "maersk xt", hovered: false },
  { id: 3, tab: "hapag mt", hovered: false },
  { id: 4, tab: "nufarm sv", hovered: false },
  { id: 5, tab: "nufarm ch", hovered: false },
  { id: 6, tab: "sandvik drop", hovered: false },
];

const TopHeader = ({ activeComponent }) => {
  return (
    <div className="topHeaderContainer">
      {activeComponent === "data" && (
        <div className="sortButtonsContainer">
          {dataButtons.map((btns) => (
            <SortButtons key={btns.id} btns={btns}>
              {btns.tab}
            </SortButtons>
          ))}
        </div>
      )}
      {activeComponent === "disp" && (
        <div className="sortButtonsContainer">
          {dispButtons.map((btns) => (
            <SortButtons key={btns.id} btns={btns}>
              {btns.tab}
            </SortButtons>
          ))}
        </div>
      )}
      {activeComponent === "appt" && (
        <div className="sortButtonsContainer">
          {apptButtons.map((btns) => (
            <SortButtons key={btns.id} btns={btns}>
              {btns.tab}
            </SortButtons>
          ))}
        </div>
      )}
      {activeComponent === "trace" && (
        <div className="sortButtonsContainer">
          {traceButtons.map((btns) => (
            <SortButtons key={btns.id} btns={btns}>
              {btns.tab}
            </SortButtons>
          ))}
        </div>
      )}
      {activeComponent !== "dash" &&
        activeComponent !== "data" &&
        activeComponent !== "bill" &&
        activeComponent !== "equip" &&
        activeComponent !== "drivers" &&
        activeComponent !== "test" && (
          <SideTaskView activeComponent={activeComponent} />
        )}
    </div>
  );
};

export default TopHeader;
