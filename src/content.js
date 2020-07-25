import React, { Fragment } from "react";
import Nav from "./nav";
import data from "./data";
import { RawCardList } from "./card";

function Content() {
  return (
    <Fragment>
      <Nav isLogin />
      <RawCardList cards={data} />
    </Fragment>
  );
}

export default Content;
