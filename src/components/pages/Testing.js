import React, { useEffect, useState } from "react";
import "./Testing.css";
import supabase from "../../config/supabaseClient";

const Testing = () => {
  const [testData, setTestData] = useState([]);
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [pos, setPos] = useState("");
  const [driver, setDriver] = useState("");
  const [truck, setTruck] = useState("");

  const getTestData = async () => {
    const { data, error } = await supabase
      .from("testing")
      .select("*");

    if (error) console.log("Test Data Error?!");

    if (data) {
      console.log("Test Data Working!");
      setTestData(data);
    }
  };

  useEffect(() => {
    getTestData();
  }, []);

  // Handle Form Submit

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { data, error } = await supabase.from("testing").insert({
      first_name: fname,
      last_name: lname,
      position: pos,
      dl: driver,
      truck: truck,
    });

    if (error) {
      console.log("Cannot Update?!");
    }

    if (data) {
      console.log("DB Updated!");
    }

    getTestData();

    setFname("");

    setLname("");

    setPos("");

    setDriver("");

    setTruck("");
  };

  return (
    <div className="testingContainer">
      <form className="testing_form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="fname"
          placeholder="first name"
          required
          value={fname}
          onChange={(e) => setFname(e.target.value)}
        />
        <input
          type="text"
          name="lname"
          placeholder="last name"
          required
          value={lname}
          onChange={(e) => setLname(e.target.value)}
        />
        <input
          type="text"
          name="pos"
          placeholder="position"
          required
          value={pos}
          onChange={(e) => setPos(e.target.value)}
        />
        <input
          type="text"
          name="driver"
          placeholder="drivers license"
          required
          value={driver}
          onChange={(e) => setDriver(e.target.value)}
        />
        <input
          type="text"
          name="truck"
          placeholder="truck info"
          required
          value={truck}
          onChange={(e) => setTruck(e.target.value)}
        />
        <button>submit</button>
      </form>
      <div className="testing_data">
        {testData.map((test) => (
          <div key={test.id} className="test_data_info">
            <li>
              First: <span>{test.first_name}</span>
            </li>
            <li>
              Last: <span>{test.last_name}</span>
            </li>
            <li>
              Own/Co: <span>{test.position}</span>
            </li>
            <li>
              DL: <span>{test.dl}</span>
            </li>
            <li>
              Truck: <span>{test.truck}</span>
            </li>
            {/* <button onClick={handleEdit}>
              {edit ? "save" : "edit"}
            </button> */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testing;
