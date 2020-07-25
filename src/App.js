import React from "react";
import "./styles.css";
import Home from "./home";
import { Router } from "@reach/router";
import Login from "./login";
import data from "./data";
import { RawCardList } from "./card";
import Content from "./content";
import CreateGroup from "./group";

function App() {
  return (
    // {/* <RawCardList cards={data} /> */}
    // {/* <div className="grid grid-cols-4 gap-3 p-5 max-w-7xl mx-auto px-2 sm:px-4 lg:px-8 mt-16">
    //   <CardBox data={data} />
    // </div> */}
    <Router>
      <Home path="/" />
      <Login path="/login" />
      <Content path="/content" />
      <CreateGroup path="/create-group" />
    </Router>
  );
}

export default App;
