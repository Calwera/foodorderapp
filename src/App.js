import React, { Component, useState } from "react";
import Header from "./components/Header/Header";
import MealsSummary from "./components/Meals/MealsSummary";
import AvailableMeals from "./components/Meals/AvailableMeals";
import Modal from "./components/Modal/Modal";
import CartContext from "./context/cart-context";

function App() {
  return (
    <CartContext.Provider>
      <Header />
      {/* <Modal /> */}
      <MealsSummary />
      <AvailableMeals />
    </CartContext.Provider>
  );
}
export default App;
