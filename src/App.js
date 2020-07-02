import React, { Fragment } from "react";
import CardBox from "./card-box";
import DraggableList from "./draggable-list";
import "./styles.css";
import data from "./data";

function App() {
  return (
    // <div className="flex items-center justify-center gap-10">

    <DraggableList items={"Lorem ipsum dolor sit".split(" ")} />
  );
}

export default App;
