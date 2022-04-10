import React from "react";

const Errors = ({ errors, name }) => {
  return (
    <p className="text-danger mx-2">
      {errors?.errors[name] && (
        <>
          <i className="fa-solid fa-circle-exclamation"></i>
          {errors?.errors[name]}
        </>
      )}
    </p>
  );
};

export default Errors;
