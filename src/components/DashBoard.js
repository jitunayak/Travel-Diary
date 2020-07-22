import React from "react";
import { useSelector } from "react-redux";
import { deleteTrip } from "../redux/store";

const DashBoard = () => {
  const lists = useSelector((state) => state);
  const totalTravels = lists.length;

  return (
    <div>
      <div
        className="box-div"
        style={{ backgroundColor: "#FFC4CC        ", color: "#7F4E55" }}
      >
        Family Trips
        <div style={{ fontSize: "40pt", margin: "30px" }}>0{totalTravels}</div>
      </div>

      <div className="box-div">
        Total Travels
        <div style={{ fontSize: "40pt", margin: "30px" }}>0{totalTravels}</div>
      </div>

      <div
        className="box-div"
        style={{
          color: "#1b5e20        ",
          backgroundColor: "#b2fab4",
        }}
      >
        International Travels
        <div style={{ fontSize: "40pt", margin: "30px" }}>0{totalTravels}</div>
      </div>
    </div>
  );
};

export default DashBoard;
