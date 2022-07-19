import React from "react";

import classes from "./Modal.module.css";
import Card from "../UI/Card";
import Cart from "../Cart/Cart";

const Modal = () => {
  return (
    <div className={classes.backdrop}>
      <Card className={classes.modal}>
        <Cart />
      </Card>
    </div>
  );
};

export default Modal;
