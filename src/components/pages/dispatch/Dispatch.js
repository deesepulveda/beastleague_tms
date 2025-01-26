import React, { useEffect, useState } from "react";
import "../../global/SortButtons.css";
import supabase from "../../../config/supabaseClient";
import DispatchTimeLine from "../../global/DispatchTimeLine";

const Dispatch = ({ activeComponent }) => {
  const [showDispData, setShowDispData] = useState([]);
  const [isDataLoading, setIsDataLoading] = useState(true);

  const fetchDataDisp = async () => {
    const { data, error } = await supabase
      .from("dispatches")
      .select("*");

    if (error) console.log("Error! No Data");

    if (data) {
      console.log("There is Data!");

      setShowDispData(data);

      // setShowDispData(
      //   data.filter((datas) => {
      //     return datas.appt_date !== null;
      //   })
      // );

      setIsDataLoading(false);
    }
  };

  useEffect(() => {
    fetchDataDisp();
  }, []);

  return (
    <div
      className={
        activeComponent
          ? "pageContainer_components componentSlideIn"
          : "pageContainer_components"
      }>
      {isDataLoading ? (
        <div>Loading...</div>
      ) : (
        <div>
          {showDispData.map((data, i) => (
            <DispatchTimeLine key={i} data={data} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Dispatch;
