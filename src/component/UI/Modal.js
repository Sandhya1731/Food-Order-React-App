import React from "react";
import ReactDOM from "react-dom";
import classes from "./Modal.module.css";

const Backdrop = (props) => {
  return <div onClick={props.onClose} className={classes.backdrop}></div>;
};
const ModalOverlay = (props) => {
  return (
    <div className={classes.modal}>
      <div className={classes.content}>{props.children}</div>
    </div>
  );
};
function Modal(props) {
  const docele = document.getElementById("overlays");
  return (
    <div>
      {ReactDOM.createPortal(<Backdrop onClose={props.onClose} />, docele)}
      {ReactDOM.createPortal(
        <ModalOverlay>{props.children}</ModalOverlay>,
        docele
      )}
    </div>
  );
}

export default Modal;
