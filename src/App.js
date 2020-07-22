import React from "react";
import logo from "./logo.svg";
import "./App.css";
import AddNewTravelItem from "./components/AddNewTravelItem";
import MainList from "./components/MainList";
import { BrowserRouter as Browser, Link, Route } from "react-router-dom";
import HomeList from "./components/HomeList";
import DashBoard from "./components/DashBoard";

function App() {
  return (
    <div>
      <Browser>
        <div className="nav">
          <nav>
            <Link to="/dashboard">
              <button className="btn-nav">Dashboard</button>
            </Link>
            <Link to="/home">
              <button className="btn-nav">Home</button>
            </Link>
            <Link to="/add">
              {" "}
              <button className="btn-nav">NewTrip</button>
            </Link>
          </nav>
        </div>
        <Route exact path="/add">
          <AddNewTravelItem />
        </Route>
        <Route exact path="/home" component={HomeList} />
        <Route exact path="/dashboard" component={DashBoard} />
      </Browser>
    </div>
  );
}

export default App;
