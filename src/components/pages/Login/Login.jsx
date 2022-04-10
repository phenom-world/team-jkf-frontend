import React, { useState } from "react";
import "./Login.css";
import Button from "../../Button/Button";
import { signin } from "../../../Redux/actions/users";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, Link } from "react-router-dom";
import Loader from "../../Loader/Loader";
import Field from "../../../components/Form/Field/Field";
import Message from "../../Message/Message";
import LoadState from "../../Spinner/LoadState";

const initialState = {
  username: "",
  password: "",
};

const Login = () => {
  const [formData, setFormData] = useState(initialState);
  const [errors, setErrors] = useState({});
  const dispatch = useDispatch();
  const navigate = useNavigate();
  let { isloading, error } = useSelector((state) => state.authReducer);
  let { verifyUser_loading, verifyUser_message } = useSelector(
    (state) => state.verifyUserReducer
  );

  const validate = () => {
    let isValid = true;

    if (!formData["username"]) {
      isValid = false;
      errors["username"] = "Please enter username.";
    }

    if (!formData["password"]) {
      isValid = false;
      errors["password"] = "Please enter your password.";
    }
    setErrors({
      errors: errors,
    });
    return isValid;
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    validate();
    if (validate()) {
      dispatch(signin(formData, navigate));
    }
  };

  return verifyUser_loading ? (
    <LoadState />
  ) : (
    <div>
      <div className="title">
        <p>Sign in</p>
      </div>
      {verifyUser_message && (
        <Message variant="success">{verifyUser_message}</Message>
      )}
      {error && <Message variant="danger">{error}</Message>}
      <form className="login_form" onSubmit={handleSubmit}>
        <div className="login__container">
          <div className="login__form__section">
            <div className="login__form">
              <Field
                label="username"
                type="text"
                labelValue="Username"
                handleChange={handleChange}
                formType="form__div"
                errors={errors}
              />
              <Field
                label="password"
                type="password"
                labelValue="Password"
                handleChange={handleChange}
                formType="form__div"
                errors={errors}
              />
              <div className="login__form__div">
                {isloading ? (
                  <Loader />
                ) : (
                  <Button type="submit" className="button">
                    Login
                  </Button>
                )}
              </div>
              <p>
                Don't have an account?{" "}
                <span>
                  <Link to="/register" className="text-decoration-none">
                    Sign Up
                  </Link>
                </span>
              </p>
              <p>
                Forgot Password?{" "}
                <span>
                  <Link to="/password_reset" className="text-decoration-none">
                    Click Here
                  </Link>
                </span>
              </p>
              <div className="social">
                <p>- OR LOGIN WITH -</p>
              </div>
              <div className="social_handle">
                <Button className={"handle facebook"}>Facebook</Button>
                <Button className={"handle google"}>Google</Button>
                <Button className={"handle instagram"}>Instagram</Button>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Login;
