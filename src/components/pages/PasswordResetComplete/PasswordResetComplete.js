import React from "react";
import { Container, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import LoadState from "../../Spinner/LoadState";
import "./PasswordComplete.css";

const PasswordResetComplete = () => {
  const { isloading, message } = useSelector(
    (state) => state.resetPasswordReducer
  );
  console.log(message);
  return isloading ? (
    <LoadState />
  ) : (
    <Container className="m-5 mx-auto d-flex flex-column ">
      <Card
        style={{ maxWidth: "30rem" }}
        className="m-5 mx-auto d-flex flex-column p-4 align-items-center shadow border-0 text-center complete_card"
      >
        <div>
          <span style={{ fontSize: "4em", color: "#20B2AA" }}>
            <i className="fas fa-check-circle"></i>
          </span>
        </div>
        <h5>Password Changed!</h5>
        <p className="mb-5">{message}</p>
        <span>
          You can{" "}
          <Link to="/login" className="text-decoration-none">
            Sign In
          </Link>{" "}
          now
        </span>
      </Card>
    </Container>
  );
};

export default PasswordResetComplete;
