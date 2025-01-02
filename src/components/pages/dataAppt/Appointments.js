import React, { useState, useEffect } from "react";
import supabase from "../../../config/supabaseClient";
import "./Appointment.css";
import { apptButtons } from "../../global/dataButtonsArrays";
import SortButtons from "../../global/SortButtons";
import DispatchTimeLine from "../../global/DispatchTimeLine";
import SideTaskView from "../../global/SideTaskView";

const Appointments = () => {
  const [showData, setShowData] = useState([]);

  const fetchData = async () => {
    let { data, error } = await supabase.from("dispatch").select("*");
    if (error) console.log("Error!");
    // if (data !== null) console.log("There is Data!");

    const filteredData = data.filter((d) => {
      return d.appointment_date === null;
    });

    setShowData(filteredData);

    // console.log(
    //   data.filter((d) => {
    //     return d.appointment_date !== null;
    //   })
    // );
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="appointmentContainer">
      <div className="sortButtonContainer">
        {apptButtons.map((btn, i) => (
          <SortButtons key={i} ind={i} btn={btn}>
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

export default Appointments;
