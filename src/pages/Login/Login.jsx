import React, { useState } from "react";
import "./Login.css";
import Button from "../../components/Button/Button";
import { signin } from "../../Redux/actions/users";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, Link, useLocation } from "react-router-dom";
import Loader from "../../components/Loader/Loader";
import Field from "../../components/Form/Field/Field";
import Message from "../../components/Message/Message";
import { auth, provider, fbProvider } from "../../firebase";
import { signInWithPopup } from "firebase/auth";
import { GoogleLogin } from "react-google-login";
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
  const location = useLocation();
  let { isloading, error } = useSelector((state) => state.authReducer);

  const from = location.state?.from?.pathname || "/dashboard";

  const googleSuccess = (res) => {
    try {
      dispatch(signin({ email: res.profileObj.email, password: res.profileObj.googleId, isSocial: true }, navigate, from));
    } catch (err) {
      alert(err.message);
    }
  };

  const googleError = () => console.log("Google Sign In was unsuccessful. Try again later");

  const onFacebookLogin = (e) => {
    e.preventDefault();
    e.stopPropagation();
    signInWithPopup(auth, fbProvider)
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
      dispatch(signin(formData, navigate, from));
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
                <div onClick={onFacebookLogin}>
                  <Button className={"handle facebook"}>Facebook</Button>
                </div>
                <GoogleLogin
                  clientId="724048877380-37edbc98eqoqc95oj6u1inf5d9qvg5ba.apps.googleusercontent.com"
                  render={(renderProps) => (
                    <button
                      className={"handle google"}
                      color="primary"
                      onClick={renderProps.onClick}
                      disabled={renderProps.disabled}
                      variant="contained"
                    >
                      Google
                    </button>
                  )}
                  onSuccess={googleSuccess}
                  onFailure={googleError}
                  cookiePolicy="single_host_origin"
                />
                {/* <div onClick={onGoogleLogin}>
                  <Button className={"handle google"}>Google</Button>
                </div> */}
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
