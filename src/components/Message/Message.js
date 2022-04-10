import React from "react";
import { Alert } from "react-bootstrap";
import "./Message.css";

const Message = ({ variant, children }) => {
  return (
    <>
      <Alert variant={variant}>{children}</Alert>
    </>
  );
};

export default Message;
