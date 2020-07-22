import React, { useState } from "react";
import MainList from "./MainList";
import { useDispatch } from "react-redux";
import { addnewTrip } from "../redux/store";
var rand = require("random-key");

const AddNewTravelItem = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [list, setList] = useState([{ title: "", ldescription: "" }]);
  const [family, setFamily] = useState(false);
  const [country, setCountry] = useState("Select Country");
  const dispather = useDispatch();

  const countries = [
    "India",
    "Australia",
    "USA",
    "France",
    "Thailand",
    "Dubai",
  ];

  const inputTitle = (e) => {
    setTitle(e.target.value);
  };

  const inputDescription = (e) => {
    setDescription(e.target.value);
  };

  const addToBucket = () => {
    let key = rand.generate();
    const newTravelList = {
      title: title,
      description: description,
      country: country,
      id: key,
    };
    dispather(addnewTrip(newTravelList));
    setDescription("");
    setTitle("");
  };

  const countryHandle = (e) => {
    setCountry(e.target.value);
  };
  const deleteItem = (id) => {
    console.log("Deleted");
    // setList((oldItems) => {
    //   return oldItems.filter((arrItem, index) => {
    //     return index !== id;
    //   });
    // });
  };

  return (
    <>
      <div className="main-div">
        <div className="center-div">
          <h1>Travel List</h1>
          <input
            className="input-txt"
            placeholder="Title "
            type="text"
            value={title}
            onChange={inputTitle}
          />
          <br />
          <input
            className="input-txt"
            placeholder="Description"
            type="text"
            value={description}
            onChange={inputDescription}
          />
          <br />
          <label className="checkBox">
            Family
            <input className="checkBoxTick" name="isGoing" type="checkbox" />
          </label>

          <select
            className="optionBox"
            value={country}
            onChange={countryHandle}
          >
            {countries.map((singlecountry, index) => {
              return (
                <option key={index} value={singlecountry}>
                  {singlecountry}
                </option>
              );
            })}
          </select>
          {country}
          <br />
          <button className="btn-add" onClick={addToBucket}>
            +
          </button>
        </div>
      </div>
      {/* <div className="grid-div">
        {list.map((obj, index) => {
          return (
            <MainList
              index={index}
              key={index}
              title={obj[0]}
              description={obj[1]}
              selectItem={deleteItem}
            />
          );
        })}
      </div> */}
    </>
  );
};

export default AddNewTravelItem;
