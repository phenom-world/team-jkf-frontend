import React from "react";
import { Spinner } from "react-bootstrap";

const LoadState = () => {
  return (
    <Spinner
      className="text-gray "
      animation="border"
      role="status"
      style={{
        width: "100px",
        height: "100px",

        display: "block",
        margin: "-25px 0 0 -60px",
        position: "absolute",
        top: "50%",
        left: "50%",
      }}
    >
      <span className="sr-only">Loading...</span>
    </Spinner>
  );
};

export default LoadState;
