import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams, Link } from "react-router-dom";
import Button from "../../Button/Button";
import { resetPassword } from "../../../Redux/actions/users";
import { Container, Card } from "react-bootstrap";
import Field from "../../../components/Form/Field/Field";
import Loader from "../../Loader/Loader";
import { Footer } from "../index";

const PasswordResetConfirm = () => {
  const [formData, setFormData] = useState({ password: "" });
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { token } = useParams();
  let { isloading, error } = useSelector((state) => state.resetPasswordReducer);
  const [errors, setErrors] = useState({});

  const validate = () => {
    let inValid = true;
    if (!formData["password"]) {
      inValid = false;
      errors["password"] = "Please enter your password.";
    }

    if (!formData["confirmPassword"]) {
      inValid = false;
      errors["confirmPassword"] = "Please enter your confirm password.";
    }
    if (
      typeof formData["password"] !== "undefined" &&
      typeof formData["confirmPassword"] !== "undefined"
    ) {
      // var pattern2 = new RegExp("^(?=.*[A-Za-z])(?=.*d)[A-Za-zd]{8,}$");
      // if (!pattern2.test(formData["password"])) {
      //   setIsValid(false);
      //   errors["password"] =
      //     "*Password must contain a minimum eight characters, at least one letter and one number:";
      // }
      if (formData["password"] !== formData["confirmPassword"]) {
        inValid = false;
        errors["password"] = "Passwords don't match.";
      }
    }

    setErrors({
      errors: errors,
    });

    return inValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    validate();
    if (validate()) {
      dispatch(resetPassword(formData, token, navigate));
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return error ? (
    <>
      <Container className="m-5 mx-auto d-flex flex-column ">
        <Card
          style={{ maxWidth: "30rem" }}
          className="m-5 mx-auto d-flex flex-column p-4  align-items-center shadow border-0 text-center complete_card"
        >
          <div>
            <div>
              <span style={{ fontSize: "4em", color: "#F40E15" }}>
                <i className="fa-solid fa-circle-exclamation"></i>
              </span>
            </div>
            <div>
              <h4 className=" small_size">Invalid/Expired Link </h4>
              <p className=" small_size">
                The password reset link was invalid, it has already been used or
                expired. Please request a new one
              </p>
              <p className=" small_size">
                <span>
                  <Link
                    to="/password_reset"
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
    </>
  ) : (
    <div>
      <div className="title">
        <p>Create New Password</p>
      </div>
      <form className="register_form" onSubmit={handleSubmit}>
        <div className="container">
          <div className="form__section">
            <div className="form">
              <Field
                label="password"
                type="password"
                labelValue="New Password"
                handleChange={handleChange}
                formType="form__div__1"
                errors={errors}
              />
              <Field
                label="confirmPassword"
                type="password"
                labelValue="Confirm Password"
                handleChange={handleChange}
                formType="form__div__1"
                errors={errors}
              />
            </div>
          </div>
        </div>

        <div className=" terms">
          <div className="login__form__div">
            {isloading ? (
              <Loader />
            ) : (
              <Button type="submit" className="button">
                Submit
              </Button>
            )}
          </div>
        </div>
      </form>
      <Footer />
    </div>
  );
};

export default PasswordResetConfirm;
