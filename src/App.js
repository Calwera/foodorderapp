import React, { Component, useState } from "react";
import Header from "./components/Header/Header";
import MealsSummary from "./components/Meals/MealsSummary";
import AvailableMeals from "./components/Meals/AvailableMeals";
import Modal from "./components/Modal/Modal";
import CartProvider from "./context/CartProvider";

function App() {
  const [shownState, setShownState] = useState(false);

  const showModalHandler = () => {
    setShownState(true);
  };

  const hideModalHandler = () => {
    setShownState(false);
  };

  return (
    <CartProvider>
      <Header onShowModal={showModalHandler} />
      {shownState && <Modal onHideModal={hideModalHandler} />}
      <MealsSummary />
      <AvailableMeals />
    </CartProvider>
  );
}
export default App;
