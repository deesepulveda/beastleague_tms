import React from "react";
import "./Pages.css";
// import "./dataDispatch/Dispatch";
import Dashboard from "./pages/dashboard/Dashboard";
import DataEntry from "./pages/entry/DataEntry";
import Dispatch from "./pages/dispatch/Dispatch";
import Appointments from "./pages/appointments/Appointments";
import Tracing from "./pages/tracing/Tracing";
import Billing from "./pages/billing/Billing";
import Equipment from "./pages/equipment/Equipment";
import Drivers from "./pages/drivers/Drivers";

const Pages = ({ activeComponent }) => {
  return (
    <div className="pageContainer">
      {activeComponent === "dash" && (
        <Dashboard activeComponent={activeComponent} />
      )}
      {activeComponent === "data" && (
        <DataEntry activeComponent={activeComponent} />
      )}
      {activeComponent === "disp" && (
        <Dispatch activeComponent={activeComponent} />
      )}
      {activeComponent === "appt" && (
        <Appointments activeComponent={activeComponent} />
      )}
      {activeComponent === "trace" && (
        <Tracing activeComponent={activeComponent} />
      )}
      {activeComponent === "bill" && (
        <Billing activeComponent={activeComponent} />
      )}
      {activeComponent === "equip" && (
        <Equipment activeComponent={activeComponent} />
      )}
      {activeComponent === "drivers" && (
        <Drivers activeComponent={activeComponent} />
      )}
    </div>
  );
};

export default Pages;
