import React, { useState } from "react";
import "./Login.css";
import Button from "../../components/Button/Button";
import { signin } from "../../Redux/actions/users";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, Link } from "react-router-dom";
import Loader from "../../components/Loader/Loader";
import Field from "../../components/Form/Field/Field";
import Message from "../../components/Message/Message";
import { auth, provider } from "../../firebase";
import { signInWithPopup } from "firebase/auth";
import { Footer } from "../index";

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

  const onGoogleLogin = (e) => {
    e.preventDefault();
    e.stopPropagation();
    signInWithPopup(auth, provider)
      .then((result) => {
        dispatch(signin({ email: result.user.email, password: result.user.uid, isSocial: true }, navigate));
    
      })
      .catch((err) => alert(err.message));
  };

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

  return (
    <div>
      <div className="title">
        <p>Sign in</p>
      </div>

      {error && <Message variant="danger">{error}</Message>}
      <form className="login_form" onSubmit={handleSubmit}>
        <div className="login__container">
          <div className="login__form__section">
            <div className="login__form">
              <Field label="username" type="text" labelValue="Username" handleChange={handleChange} formType="form__div" errors={errors} />
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
                <div
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                  }}
                >
                  <Button className={"handle facebook"}>Facebook</Button>
                </div>
                <div onClick={onGoogleLogin}>
                  <Button className={"handle google"}>Google</Button>
                </div>
                <div
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                  }}
                >
                  <Button className={"handle instagram"}>Instagram</Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
      <Footer />
    </div>
  );
};

export default Login;
