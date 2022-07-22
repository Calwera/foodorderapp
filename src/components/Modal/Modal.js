import React, { Fragment } from "react";

import classes from "./Modal.module.css";
import Card from "../UI/Card";
import Cart from "../Cart/Cart";

const Modal = (props) => {
  return (
    <Fragment>
      <Card className={classes.modal}>
        <Cart onClick={props.onHideModal} />
      </Card>
      <div onClick={props.onHideModal} className={classes.backdrop}></div>
    </Fragment>
  );
};

export default Modal;
