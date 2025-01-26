import React, { useState } from "react";
import "./DispatchTimeLine.css";

const DispatchTimeLine = ({ data }) => {
  const [expand, setExpand] = useState(false);
  const handleExpand = (e) => {
    console.log(e);
    setExpand(!expand);
  };

  return (
    <>
      <div
        className={
          expand
            ? "dispatchTimeLineContainer removeMarginBottom"
            : "dispatchTimeLineContainer"
        }>
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
          ctr: {data.container}
        </div>
        <div className="dispatchTimeLineContainer_chas">
          whiz424900 - 40w (wh)
        </div>
        <div className="dispatchTimeLineContainer_customer">
          {data.customer.slice(0, 10)}
        </div>
        <div className="dispatchTimeLineContainer_booking"></div>
        <div className="dispatchTimeLineContainer_location identifier customer_appt">
          {data.location_name} - {data.location_city}
        </div>
        <div className="dispatchTimeLineContainer_date customer_appt">
          {data.appt_date !== null && data.appt_date.slice(5, 10)}
        </div>
        <div className="dispatchTimeLineContainer_time customer_appt">
          {data.appt_time !== null && data.appt_time.slice(0, 5)}
        </div>
        <div className="dispatchTimeLineContainer_status">
          <span>
            {data.move_type !== "ex-export" ? "fcl" : "ecl"}
          </span>
          {data.move_type === "mt-empty repo" ||
          data.move_type === "xt-crosstown"
            ? "in transit to rail"
            : "in transit to cust"}
        </div>
        <div className="dispatchTimeLineContainer_currentDriver">
          cur drv: <span>James</span>
        </div>
        <div
          className={
            data.bill_status !== null
              ? "dispatchTimeLineContainer_billStatus  billedStyling "
              : "dispatchTimeLineContainer_billStatus identifier"
          }>
          billed:
          <span>{data.bill_status !== null ? "yes" : "no"}</span>
        </div>
        <div
          className="dispatchTimeLineContainer_expand"
          onClick={handleExpand}>
          +
        </div>
      </div>
      <div
        className={
          expand
            ? "dispatchTimeLineContainer_expanded"
            : "dispatchTimeLineContainer_expanded closeExpansion"
        }>
        <div className="dispatchTimeLineContainer_expanded_booking identifier">
          {data.move_type === "ex-export"
            ? `bkg: ${data.booking}`
            : `pu: ${data.pu_num}`}
        </div>
        <div className="dispatchTimeLineContainer_expanded_pickup ">
          pu: {data.pickup}
        </div>
        <div className="dispatchTimeLineContainer_expanded_pickup ">
          ret: {data.return}
        </div>
      </div>
    </>
  );
};

export default DispatchTimeLine;
