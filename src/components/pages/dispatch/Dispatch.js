import React, { useEffect, useState } from "react";
import { dispButtons } from "../../global/dataButtonsArrays";
import SortButtons from "../../global/SortButtons";
import "../../global/SortButtons.css";
import SideTaskView from "../../global/SideTaskView";
import supabase from "../../../config/supabaseClient";
import DispatchTimeLine from "../../global/DispatchTimeLine";

const Dispatch = ({ activeComponent }) => {
  const [showData, setShowData] = useState([]);
  const [isDataLoading, setIsDataLoading] = useState(true);

  const fetchDispatchData = async () => {
    const { data, error } = await supabase
      .from("dispatch")
      .select("*");

    if (error) console.log("Error! No Data");

    if (data) {
      console.log("There is Data!");
      setIsDataLoading(false);
    }

    setShowData(
      data.filter((datas) => {
        return datas.appointment_date !== null;
      })
    );
  };

  useEffect(() => {
    fetchDispatchData();
  }, []);

  return (
    <div
      className={
        activeComponent
          ? "pageContainer_components componentSlideIn"
          : "pageContainer_components"
      }>
      <div className="sortButtonsContainer">
        {dispButtons.map((btns) => (
          <SortButtons key={btns.id} btns={btns}>
            {btns.tab}
          </SortButtons>
        ))}
      </div>
      {isDataLoading ? (
        <div>"Loading..."</div>
      ) : (
        <div>
          {showData.map((data, i) => (
            <DispatchTimeLine key={i} data={data} />
          ))}
        </div>
      )}
      <SideTaskView />
    </div>
  );
};

export default Dispatch;
