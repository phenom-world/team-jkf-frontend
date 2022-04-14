import React from "react";
import { Container, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import LoadState from "../../Spinner/LoadState";
import { Footer } from "../index";

const RegistrationSuccess = () => {
  const { isloading, message } = useSelector((state) => state.registerReducer);
  const { resendLink_message } = useSelector(
    (state) => state.resendLinkReducer
  );

  return isloading ? (
    <div>
      <LoadState />
    </div>
  ) : true ? (
    <div>
      <Container className="m-5 mx-auto d-flex flex-column ">
        <Card
          style={{ maxWidth: "30rem" }}
          className="m-5 mx-auto d-flex flex-column p-4  align-items-center shadow border-0 text-center complete_card"
        >
          <div>
            <div>
              <span style={{ fontSize: "4em", color: "#20B2AA" }}>
                <i className="fa-solid fa-circle-check"></i>
              </span>
            </div>
            <div>
              <h4>{message ? message : resendLink_message}</h4>
              <h6 className=" small_size">
                Please confirm your Team-jkf account
              </h6>
              <p className="mt-3 text-success small_size">
                <i>
                  To access your account, Check your inbox or Spam folder for a
                  secure link to proceed.
                </i>
              </p>
              <p className=" small_size">
                Not received verification link?{" "}
                <span>
                  <Link
                    to="/resend_link"
                    className="text-decoration-none small_size"
                  >
                    Click Here
                  </Link>
                </span>
              </p>
            </div>
          </div>
        </Card>
      </Container>
      <Footer />
    </div>
  ) : null;
};

export default RegistrationSuccess;
