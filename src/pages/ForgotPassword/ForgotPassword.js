import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./ForgotPassword.css";
import { useDispatch, useSelector } from "react-redux";
import { reset } from "../../Redux/actions/users";
import Message from "../../components/Message/Message";
import { Container } from "react-bootstrap";
import Loader from "../../components/Loader/Loader";
import { Footer } from "../index";

const initialState = {
  email: "",
};
const ForgotPassword = () => {
  const [formData, setFormData] = useState(initialState);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  let { isloading, error } = useSelector(
    (state) => state.forgotPasswordReducer
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(reset(formData, navigate));
  };

  const handleChange = (e) => {
    setFormData({ ...formData, email: e.target.value });
  };

  return (
    <div>
      <div className="title">
        <p>Forgot Password</p>
      </div>
      {error && <Message variant="danger">{error}</Message>}
      <Container className="m-5 mx-auto d-flex flex-column">
        <p className="text-center small_size">
          Please enter your email address, you will receive an email message
          with instructions on how to reset your password
        </p>
        <form onSubmit={handleSubmit}>
          <div className="d-flex flex-column align-items-center ">
            <div className="form-group input">
              <label htmlFor="email" className=" small_size">
                Email Address
              </label>
              <input
                className="form-control small_size"
                id="email"
                type="email"
                onChange={handleChange}
              />
            </div>
            <div className="mt-3">
              {isloading ? (
                <Loader />
              ) : (
                <button className="btn btn-primary small_size" type="submit">
                  {" "}
                  Get new Password
                </button>
              )}
            </div>
            <div className="login__form__div">
              <Link to="/login" className="text-decoration-none small_size">
                &#8592; Back to Login
              </Link>{" "}
            </div>
          </div>
        </form>
      </Container>
      <Footer />
    </div>
  );
};

export default ForgotPassword;
