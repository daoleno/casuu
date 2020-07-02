import React, { Fragment } from "react";
import CardBox from "./card-box";
import DraggableList from "./draggable-list";
import "./styles.css";
import data from "./data";

function App() {
  return (
    <div className="flex flex-row">
      <CardBox data={data} />
      {/* <DraggableList items={"Lorem ipsum dolor sit".split(" ")} /> */}
    </div>
  );
}

export default App;
