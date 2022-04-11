import React from "react";
import { Container, Card } from "react-bootstrap";
import { Link } from "react-router-dom";

const ChangePasswordDone = () => {
  return (
    <Container className="m-5 mx-auto d-flex flex-column ">
      <Card
        style={{ maxWidth: "30rem" }}
        className="m-5 mx-auto d-flex flex-column p-4  align-items-center shadow border-0 text-center"
      >
        <div>
          <span style={{ fontSize: "4em", color: "#20B2AA" }}>
            <i className="fas fa-check-circle"></i>
          </span>
        </div>
        <h5>Password Changed!</h5>
        <p className="mb-5">Your password has been succesfully changed</p>
        <span>
          Go to
          <Link to="/login" className="text-decoration-none">
            login page
          </Link>{" "}
        </span>
      </Card>
    </Container>
  );
};

export default ChangePasswordDone;
