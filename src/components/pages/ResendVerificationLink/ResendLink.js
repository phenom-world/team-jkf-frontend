import React, { useState } from "react";
import { Container } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { resendLink } from "../../../Redux/actions/users";
import { useNavigate } from "react-router-dom";
import Loader from "../../Loader/Loader";
import Message from "../../Message/Message";

const ResendLink = () => {
  const [formData, setFormData] = useState({});
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isloading, message, error } = useSelector(
    (state) => state.resendLinkReducer
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(resendLink(formData, navigate));
  };

  const handleChange = (e) => {
    setFormData({ ...formData, email: e.target.value });
  };

  return (
    <div>
      <div className="title">
        <p>Resend Verification Link</p>
      </div>
      {error && <Message variant="danger">{error}</Message>}
      <Container className="m-5 mx-auto d-flex flex-column">
        <p className="text-center">
          Please enter your email address, you will receive an email message
          with instructions on how to activate your account
        </p>
        <form onSubmit={handleSubmit}>
          <div className="d-flex flex-column align-items-center ">
            <div className="form-group input">
              <label htmlFor="email">Email Address</label>
              <input
                className="form-control "
                id="email"
                type="email"
                onChange={handleChange}
                required
              />
            </div>
            <div className="mt-3">
              {isloading ? (
                <Loader />
              ) : (
                <button className="btn btn-primary" type="submit">
                  Resend Activation Link
                </button>
              )}
            </div>
          </div>
        </form>
      </Container>
    </div>
  );
};

export default ResendLink;
