import React from "react";
import "./LoadState.css";

const LoadState = () => {
  return (
    <div className="wave-center">
      <div className="wave"></div>
      <div className="wave"></div>
      <div className="wave"></div>
      <div className="wave"></div>
      <div className="wave"></div>
      <div className="wave"></div>
      <div className="wave"></div>
      <div className="wave"></div>
      <div className="wave"></div>
      <div className="wave"></div>
    </div>
    // <Spinner
    //   className="text-gray "
    //   animation="border"
    //   role="status"
    //   style={{
    //     width: "100px",
    //     height: "100px",
    //     display: "block",
    //     margin: "-25px 0 0 -60px",
    //     position: "absolute",
    //     top: "50vh",
    //     left: "50%",
    //   }}
    // >
    //   <span className="sr-only">Loading...</span>
    // </Spinner>
  );
};

export default LoadState;
