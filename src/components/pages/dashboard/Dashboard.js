import React from "react";
import "./Dashboard.css";

const Dashboard = ({ activeComponent }) => {
  return (
    <div
      className={
        activeComponent
          ? "pageContainer_components dashboardContainer componentSlideIn"
          : "pageContainer_components"
      }>
      <div className="dashboardContainer_main">
        <div className="dashboardContainer_main_topContainer">
          <div className="dashboardContainer_main_miniBox">
            <p className="dashboard_title">sched appts</p>
            <div className="dashboard_colored_color1 dashboard_colored">
              115
            </div>
          </div>
          <div className="dashboardContainer_main_miniBox">
            <p className="dashboard_title">unassigned</p>
            <div className="dashboard_colored_color2 dashboard_colored">
              10
            </div>
          </div>
          <div className="dashboardContainer_main_miniBox">
            <p className="dashboard_title">on time pct-%</p>
            <div className="dashboard_colored_color3 dashboard_colored">
              93.5%
            </div>
          </div>
          <div className="dashboardContainer_main_miniBox">
            <p className="dashboard_title">fuel surcharge</p>
            <div className="dashboard_colored_color4 dashboard_colored">
              32.5%
            </div>
          </div>
        </div>
        <div className="dashboardContainer_main_middleContainer">
          <p className="dashboard_title">avg hrs at rails</p>
          <div className="dashboardContainer_main_middleContainer_railBox">
            <div className="railBox_rails">
              <div className="rail_name">lpc</div>
              <div className="rail_hours">2.2</div>
            </div>
            <div className="railBox_rails">
              <div className="rail_name">g4</div>
              <div className="rail_hours">4.7</div>
            </div>
            <div className="railBox_rails">
              <div className="rail_name">cn</div>
              <div className="rail_hours">1.5</div>
            </div>
            <div className="railBox_rails">
              <div className="rail_name">csx</div>
              <div className="rail_hours">.57</div>
            </div>
            <div className="railBox_rails">
              <div className="rail_name">ns</div>
              <div className="rail_hours">3.7</div>
            </div>
            <div className="railBox_rails">
              <div className="rail_name">cp</div>
              <div className="rail_hours">.45</div>
            </div>
          </div>
        </div>
        <div className="dashboardContainer_main_bottomContainer">
          <p className="dashboard_title">productivity</p>
          <div className="dashboard_bottomcontainer_charts">
            <div className="dashboard_graph">
              <img
                src={require("../../../assets/graph_text.png")}
                alt=""
              />
            </div>
            <div className="dashboard_chartBar">
              <div className="dashboard_chartBar_pie">
                <img
                  src={require("../../../assets/CircleGraph_One.png")}
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="dashboardContainer_side">
        <div className="dashboardContainer_side_box">
          <p className="dashboard_title">daily board</p>
          <ul>
            <li>Happy Birthday John!</li>
            <li>B-Day Party 1400</li>
            <li>Drivers turn in Sheets</li>
            <li>Meeting 1500</li>
            <li style={{ color: "yellow" }}>
              Last day Insurance enroll
            </li>
            <li>system update 1900</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
