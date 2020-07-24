import React from "react";
import "./styles.css";
import Home from "./home";
import { Router } from "@reach/router";
import Login from "./login";

function App() {
  return (
    // {/* <RawCardList cards={data} /> */}
    // {/* <div className="grid grid-cols-4 gap-3 p-5 max-w-7xl mx-auto px-2 sm:px-4 lg:px-8 mt-16">
    //   <CardBox data={data} />
    // </div> */}
    <Router>
      <Home path="/" abslote />
      <Login path="/login" />
    </Router>
  );
}

export default App;
