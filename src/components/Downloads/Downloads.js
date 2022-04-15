import React from "react";

const Downloads = ({ onClick }) => {
  return (
    <div className="mt-5 w-100 d-flex justify-content-center align-items-center">
      <h6>
        {" "}
        <i className="fa-solid fa-ban text-danger"></i>
        {""}
        {""} <span className="text-secondary">No Downloads Available</span>{" "}
        <button className="mx-2 border-0 " onClick={onClick}>
          <span style={{ fontSize: "1em" }}>
            <i class="fa-solid fa-circle-xmark "></i>
          </span>{" "}
        </button>
      </h6>
    </div>
  );
};

export default Downloads;
