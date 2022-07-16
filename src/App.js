import React, { Component, useState } from "react";
import Header from "./components/Header/Header";
import MealsSummary from "./components/Meals/MealsSummary";
import "./App.css";
function App() {
  return (
    <React.Fragment>
      <Header />
      <MealsSummary />
    </React.Fragment>
  );
}
export default App;
