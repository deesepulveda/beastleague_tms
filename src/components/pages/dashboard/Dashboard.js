import React from "react";
import "./Dashboard.css";

const Dashboard = ({ activeComponent }) => {
  return (
    <div
      className={
        activeComponent
          ? "pageContainer_components componentSlideIn"
          : "pageContainer_components"
      }>
      Dashboard
    </div>
  );
};

export default Dashboard;
