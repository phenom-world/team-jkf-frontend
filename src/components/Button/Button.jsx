import React from "react";
import "./Button.css";

const Button = ({ children, className, type }) => {
  return (
    <>
      <button type={type} className={className}>
        {children}
      </button>
    </>
  );
};

export default Button;
