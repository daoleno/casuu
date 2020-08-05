import React from "react";
import "./styles.css";
import Home from "./home";
import { Router } from "@reach/router";
import Login from "./login";
import { CreateGroup, Group } from "./group";
import { CreateCard } from "./card";

function App() {
  return (
    <Router>
      <Home path="/" />
      <Login path="/login" />
      <Group path="/group" />
      <CreateGroup path="/create-group" />
      <CreateCard path="/create-card" />
    </Router>
  );
}

export default App;
