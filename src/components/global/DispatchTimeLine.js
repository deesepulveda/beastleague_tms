import React from "react";
import "./DispatchTimeLine.css";

const DispatchTimeLine = ({ data }) => {
  return (
    <div className="dispatchTimeLineContainer">
      <div className="dispatchTimeLineContainer_type">
        {data.move_type !== null && data.move_type.slice(0, 2)}
      </div>
      <div className="dispatchTimeLineContainer_dispatchNumber">
        {data.disp_id}
      </div>
      <div className="dispatchTimeLineContainer_mode identifier">
        {data.mode_type}
      </div>
      <div
        className={
          data.haz === "yes"
            ? "dispatchTimeLineContainer_haz identifier hazBox"
            : "dispatchTimeLineContainer_haz identifier"
        }>
        haz: {data.haz}
      </div>
      <div
        className={
          data.ow === "yes"
            ? "dispatchTimeLineContainer_ow identifier overweightBox"
            : "dispatchTimeLineContainer_ow identifier"
        }>
        ow: {data.ow}
      </div>
      <div className="dispatchTimeLineContainer_ssl_size">
        {data.ssl.slice(0, 3)}-{data.size}
      </div>
      <div
        className={
          data.container === null
            ? "dispatchTimeLineContainer_container nullStyling"
            : "dispatchTimeLineContainer_container"
        }>
        cont: {data.container}
      </div>
      <div className="dispatchTimeLineContainer_chas">
        chas: whiz424900 - 40w (wh)
      </div>
      <div className="dispatchTimeLineContainer_customer">
        cust: {data.customer.slice(0, 10)}
      </div>
      <div className="dispatchTimeLineContainer_location identifier customer_appt">
        {data.location_name}
      </div>
      <div className="dispatchTimeLineContainer_date customer_appt">
        {data.appt_date !== null && data.appt_date.slice(5, 10)}
      </div>
      <div className="dispatchTimeLineContainer_time customer_appt">
        {data.appt_time !== null && data.appt_time.slice(0, 5)}
      </div>
      <div className="dispatchTimeLineContainer_status">
        <span>{data.move_type !== "ex-export" ? "fcl" : "ecl"}</span>
        in transit to customer
      </div>
      <div className="dispatchTimeLineContainer_currentDriver">
        cur drv: <span>janusz</span>
      </div>
      <div className="dispatchTimeLineContainer_expand">🍪</div>
    </div>
  );
};

export default DispatchTimeLine;
