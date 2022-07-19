import React, { Component, useState } from "react";
import Header from "./components/Header/Header";
import MealsSummary from "./components/Meals/MealsSummary";
import AvailableMeals from "./components/Meals/AvailableMeals";
import Modal from "./components/Modal/Modal";

function App() {
  return (
    <React.Fragment>
      <Header />
      {/* <Modal /> */}
      <MealsSummary />
      <AvailableMeals />
    </React.Fragment>
  );
}
export default App;
