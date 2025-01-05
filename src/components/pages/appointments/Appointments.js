import React, { useEffect, useState } from "react";
import { apptButtons } from "../../global/dataButtonsArrays";
import SortButtons from "../../global/SortButtons";
import "../../global/SortButtons.css";
import SideTaskView from "../../global/SideTaskView";
import supabase from "../../../config/supabaseClient";
import DispatchTimeLine from "../../global/DispatchTimeLine";

const Appointments = ({ activeComponent }) => {
  const [showApptData, setApptShowData] = useState([]);
  const [isDataLoading, setIsDataLoading] = useState(true);

  const fetchApptDispatchData = async () => {
    const { data, error } = await supabase
      .from("dispatch")
      .select("*");

    if (error) console.log("Error, No Data!");

    if (data) {
      console.log("There is Data!");

      setApptShowData(
        data.filter((datas) => {
          return datas.appointment_date === null;
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
      <div className="sortButtonsContainer">
        {apptButtons.map((btns) => (
          <SortButtons key={btns.id} btns={btns}>
            {btns.tab}
          </SortButtons>
        ))}
      </div>
      {isDataLoading ? (
        <div>Loading...</div>
      ) : (
        <div>
          {showApptData.map((data, i) => (
            <DispatchTimeLine key={i} data={data} />
          ))}
        </div>
      )}
      <SideTaskView />
    </div>
  );
};

export default Appointments;
