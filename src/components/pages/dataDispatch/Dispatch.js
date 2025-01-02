import React, { useEffect, useState } from "react";
import supabase from "../../../config/supabaseClient";
import "./Dispatch.css";
import "../../global/SortButtons.css";
import { dispButtons } from "../../global/dataButtonsArrays";
import SortButtons from "../../global/SortButtons";
import DispatchTimeLine from "../../global/DispatchTimeLine";
import SideTaskView from "../../global/SideTaskView";

const Dispatch = () => {
  const [showData, setShowData] = useState([]);

  const fetchData = async () => {
    let { data, error } = await supabase.from("dispatch").select("*");
    if (error) console.log("Error!");
    if (data !== null) console.log("There is Data!");

    const filteredData = data.filter((d) => {
      return d.appointment_date !== null;
    });

    setShowData(filteredData);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="dispatchContainer">
      <div className="sortButtonContainer">
        {dispButtons.map((btn) => (
          <SortButtons key={btn.id} btn={btn}>
            {btn.tab}
          </SortButtons>
        ))}
      </div>
      <SideTaskView />
      {showData.map((data) => (
        <DispatchTimeLine key={data.id} data={data} />
      ))}
    </div>
  );
};

export default Dispatch;
