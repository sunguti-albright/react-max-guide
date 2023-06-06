import React from "react";
import classes from ".ErrorModal.module.css";
import Card from "./Card";
import ReactDOM from "react-dom";
import Button from "./Button";

//split modal component to backdrop and modal overlay
const Backdrop = (props) => {
  return <div className={classes.backdrop} onClick={props.onConfirm} />;
};

const ModalOverlay = (props) => {
  return (
    <Card>
      <h3>I will work on this later</h3>
      <footer>
        <Button onClick={props.onConfirm}>Okay</Button>
      </footer>
    </Card>
  );
};
function ErrorModal() {
  return (
    <React.Fragment>
      {/* onClick or onConfirm ? */}
      {ReactDOM.createPortal(
        <Backdrop onConfirm={props.onConfirm} />,
        document.getElementById("backdrop-root")
      )}
      {ReactDOM.createPortal(
        <ModalOverlay
          title={props.title}
          message={props.message}
          onConfirm={props.onConfirm}
        />,
        document.getElementById("overlay-root")
      )}
    </React.Fragment>
  );
}

export default ErrorModal;
