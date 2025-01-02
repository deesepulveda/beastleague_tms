import React from "react";
import "./Pages.css";
import "./dataDispatch/Dispatch";
import Dashboard from "./dataDashboard/Dashboard";
import DataEntry from "./dataEntry/DataEntry";
import Dispatch from "./dataDispatch/Dispatch";
import Appointments from "./dataAppt/Appointments";
import Tracing from "./dataTrace/Tracing";
import Billing from "./dataBilling/Billing";
import Equipment from "./dataEquip/Equipment";
import Drivers from "./dataDrivers/Drivers";

const Pages = ({ activeComponent }) => {
  return (
    <div className="pagesMain">
      {activeComponent === "dash" && <Dashboard />}
      {activeComponent === "data" && <DataEntry />}
      {activeComponent === "disp" && <Dispatch />}
      {activeComponent === "appt" && <Appointments />}
      {activeComponent === "trace" && <Tracing />}
      {activeComponent === "bill" && <Billing />}
      {activeComponent === "equip" && <Equipment />}
      {activeComponent === "drivers" && <Drivers />}
    </div>
  );
};

export default Pages;
