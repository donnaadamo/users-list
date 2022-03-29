import React from "react";
import Button from "./Button";
import Card from "./Card";
import Wrapper from "../Helpers/Wrapper";
import classes from "./ErrorModal.module.css";

const ErrorModal = (props) => {
  return (
    <Wrapper>
      <div className={classes.backdrop} onClick={props.handleError} />
      <Card className={classes.modal}>
        <header className={classes.header}>
          <h2>{props.title}</h2>
        </header>
        <div className={classes.content}>
          <p>{props.message}</p>
        </div>
        <footer className={classes.action}>
          <Button onClick={props.handleError}>Okay</Button>
        </footer>
      </Card>
    </Wrapper>
  );
};

export default ErrorModal;
