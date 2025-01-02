import React from "react";
import "./DispatchTimeLine.css";

const DispatchTimeLine = ({ data }) => {
  return (
    <div className="dispatchTimeLineContainer">
      <div className="dispatchTimeLineContainer_type">
        {data.type}
      </div>
      <div className="dispatchTimeLineContainer_dispatchNumber">
        {data.dispatch_number}
      </div>
      <div className="dispatchTimeLineContainer_mode identifier">
        {data.mode}
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
        {data.ssl}-{data.size}
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
        chas: whiz424900 - 40w (whim)
      </div>
      <div className="dispatchTimeLineContainer_customer">
        cust: {data.customer}
      </div>
      <div className="dispatchTimeLineContainer_location identifier customer_appt">
        {data.customer_location}
      </div>
      <div className="dispatchTimeLineContainer_date customer_appt">
        {data.appointment_date !== null &&
          data.appointment_date.slice(5, 10)}
      </div>
      <div className="dispatchTimeLineContainer_time customer_appt">
        {data.appointment_time !== null &&
          data.appointment_time.slice(0, 5)}
      </div>
      <div className="dispatchTimeLineContainer_status">
        <span>fcl</span> in transit to customer
      </div>
      <div className="dispatchTimeLineContainer_currentDriver">
        cur drv: <span>janusz</span>
      </div>
      <div className="dispatchTimeLineContainer_expand">🍪</div>
    </div>
  );
};

export default DispatchTimeLine;
