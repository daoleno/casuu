import React, { Fragment } from "react";
import CardBox from "./card-box";
import Nav from "./nav";
import "./styles.css";
import Home from "./home";
import Footer from "./footer";
import data from "./data";
import { RawCardList } from "./card";

function App() {
  return (
    <Fragment>
      <Nav />
      <Home />
      <Footer />
      {/* <RawCardList cards={data} /> */}
      {/* <div className="grid grid-cols-4 gap-3 p-5 max-w-7xl mx-auto px-2 sm:px-4 lg:px-8 mt-16">
        <CardBox data={data} />
      </div> */}
    </Fragment>
  );
}

export default App;
