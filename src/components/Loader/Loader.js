import React from "react";
import { Spinner } from "react-bootstrap";

const Loader = () => {
  return (
    <div>
      <button className="disabled" disabled>
        <Spinner
          as="span"
          animation="grow"
          size="sm"
          role="status"
          aria-hidden="true"
        />
        Loading...
      </button>
    </div>
  );
};

export default Loader;
