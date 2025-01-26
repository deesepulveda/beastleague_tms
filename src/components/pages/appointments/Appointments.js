import React, { useEffect, useState } from "react";
import "../../global/SortButtons.css";
import supabase from "../../../config/supabaseClient";
import DispatchTimeLine from "../../global/DispatchTimeLine";

const Appointments = ({ activeComponent }) => {
  const [showApptData, setApptShowData] = useState([]);
  const [isDataLoading, setIsDataLoading] = useState(true);

  const fetchApptDispatchData = async () => {
    const { data, error } = await supabase
      .from("dispatches")
      .select("*");

    if (error) console.log("Error, No Data!");

    if (data) {
      console.log("There is Data!");

      setApptShowData(
        data.filter((datas) => {
          return datas.appt_date === null;
        })
      );

      setIsDataLoading(false);
    }
  };

  useEffect(() => {
    fetchApptDispatchData();
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
          {showApptData.map((data, i) => (
            <DispatchTimeLine key={i} data={data} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Appointments;
