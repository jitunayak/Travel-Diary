import React from "react";
import { useSelector, useDispatch } from "react-redux";
import MainList from "./MainList";
import { deleteTrip } from "../redux/store";

function HomeList() {
  const lists = useSelector((state) => state);

  const dispather = useDispatch();
  console.log(lists);

  const deleteItem = () => {
    console.log("delete called");
    // dispather(deleteTrip());
  };

  //   var randomColor = Math.floor(Math.random() * 16777215).toString(16);
  //   var color = "#" + randomColor;
  return (
    <div className="grid-div">
      {lists.map((list, index) => {
        return (
          <div className="list-item" key={index}>
            <div className="title" style={{ background: "white" }}>
              {list.title}
            </div>
            <div className="description">{list.description}</div>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
              <div
                style={{
                  color: "white",
                  borderRadius: "20px",
                  padding: "5px",
                  fontSize: "10pt",
                  backgroundColor: "#9c9c9c",
                }}
              >
                {list.country}
              </div>
              <div
                className="btn-dlt"
                value={list.id}
                onClick={() => dispather(deleteTrip(list.id))}
              >
                Delete
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default HomeList;
