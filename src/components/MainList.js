import React from "react";

const MainList = (props) => {
  return (
    <>
      {props.title ? (
        <div className="list-item" key={props.id}>
          <div className="title">{props.title}</div>
          <div className="description">{props.description}</div>
          <div
            className="btn-dlt"
            onClick={() => {
              props.selectItem(props.index);
            }}
          >
            Delete
          </div>
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default MainList;
