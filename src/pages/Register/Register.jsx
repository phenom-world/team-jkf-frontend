import React, { useState } from "react";
import "./Register.css";
import Button from "../../components/Button/Button";
import { signup } from "../../Redux/actions/users";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, Link } from "react-router-dom";
import Message from "../../components/Message/Message";
import Loader from "../../components/Loader/Loader";
import Field from "../../components/Form/Field/Field";
import Select from "../../components/Form/Select/Select";
import { Footer } from "../index";

//prettier-ignore
import {genderList, statesList} from "../../components/utils";

const initialState = {
  username: "",
  firstname: "",
  lastname: "",
  email: "",
  phone: "",
  gender: "",
  state: "",
  statecode: "",
  lga: "",
  password: "",
};

const Register = () => {
  const [formData, setFormData] = useState(initialState);
  const [inputState, setInputState] = useState("");
  const [errors, setErrors] = useState({});
  const [updateGender, setUpdateGender] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isloading, error } = useSelector((state) => state.registerReducer);
  // prettier-ignore
  const states = statesList.map((state, i) => ({
    name: state,
    statecode: i < 9 ? "00" + Number(i) : "0" + Number(i),
  }));

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onStateChange = (e) => {
    const value = e.target.value.split(",");
    if (value[0] !== "Select State") {
      setInputState(value);
      setFormData({
        ...formData,
        [e.target.name]: value[0],
        statecode: value[1],
      });
    }
  };

  const onGenderChange = (e) => {
    const value = e.target.value;
    if (value !== "Select Gender") {
      setUpdateGender(value);
      setFormData({ ...formData, [e.target.name]: e.target.value });
    }
  };

  const validate = () => {
    let inValid = true;
    if (!formData["firstname"]) {
      inValid = false;
      errors["firstname"] = "Please enter first name.";
    }

    if (!formData["lastname"]) {
      inValid = false;
      errors["lastname"] = "Please enter last name.";
    }
    if (!formData["username"]) {
      inValid = false;
      errors["username"] = "Please enter username.";
    }
    if (!formData["phone"]) {
      inValid = false;
      errors["phone"] = "Please enter phone number.";
    }
    if (!formData["gender"]) {
      inValid = false;
      errors["gender"] = "Please select gender.";
    }
    if (!formData["state"]) {
      inValid = false;
      errors["state"] = "Please select state.";
    }
    if (!formData["lga"]) {
      inValid = false;
      errors["lga"] = "Please enter local government.";
    }

    if (!formData["email"]) {
      inValid = false;
      errors["email"] = "Please enter your email Address.";
    }

    if (typeof formData["email"] !== "undefined") {
      var pattern = new RegExp(
        /^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i
      );
      if (!pattern.test(formData["email"])) {
        inValid = false;
        errors["email"] = "Please enter a valid email address.";
      }
    }
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
      dispatch(signup(formData, navigate));
    }
  };

  return (
    <div>
      <div className="title">
        <p>Create Account</p>
      </div>
      {error && <Message variant="danger">{error}</Message>}
      <form className="register_form" onSubmit={handleSubmit}>
        <div className="container w-100">
          <div className="form__section">
            <div className="form">
              <Field
                label="username"
                type="text"
                labelValue="Username"
                handleChange={handleChange}
                formType="form__div__1"
                errors={errors}
              />
              <Field
                label="email"
                type="email"
                labelValue="Email"
                handleChange={handleChange}
                formType="form__div__1"
                errors={errors}
              />
              <Field
                label="phone"
                type="tel"
                labelValue="Phone Number"
                handleChange={handleChange}
                formType="form__div__1"
                errors={errors}
              />
              <Field
                label="password"
                type="password"
                labelValue="Password"
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
          <div className="form__section">
            <div className="form">
              <Field
                label="lastname"
                type="text"
                labelValue="Last Name"
                handleChange={handleChange}
                formType="form__div__2"
                errors={errors}
              />
              <Field
                label="firstname"
                type="text"
                labelValue="First Name"
                handleChange={handleChange}
                formType="form__div__2"
                errors={errors}
              />
              <Select
                label="gender"
                labelValue="Gender"
                handleChange={onGenderChange}
                formType="form__div__2"
                errors={errors}
                value={updateGender}
              >
                {genderList.map((gen, i) => (
                  <option key={i} value={gen.toLowerCase()}>
                    {gen}
                  </option>
                ))}
              </Select>
              <Select
                label="state"
                labelValue="State of Residence"
                handleChange={onStateChange}
                formType="form__div__2"
                errors={errors}
                value={inputState}
              >
                {states.map((state, i) => (
                  <option key={i} value={[state.name, state.statecode]}>
                    {state.name}
                  </option>
                ))}
              </Select>

              <Field
                label="lga"
                type="text"
                labelValue="LGA of Residence"
                handleChange={handleChange}
                formType="form__div__2"
                errors={errors}
              />
            </div>
          </div>
        </div>

        <div className=" terms">
          <div>
            <input type="checkbox" name="terms" id="terms" />
            <label className="form__label terms_text" htmlFor="terms">
              Accept our Terms and Conditions
            </label>
          </div>
          <div>
            <input type="checkbox" name="terms" id="terms" />
            <label className="form__label terms_text" htmlFor="terms">
              Show my profile on public Members Directory
            </label>
          </div>
          <div className="login__form__div">
            {isloading ? (
              <Loader />
            ) : (
              <Button type="submit" className="button">
                Register
              </Button>
            )}
          </div>
          <p>
            Already Have account?{" "}
            <span>
              <Link to="/login" className="text-decoration-none">
                Login Here
              </Link>{" "}
            </span>
          </p>
        </div>
        <div className="social">
          <p>- OR REGISTER WITH -</p>
        </div>
        <div className="social_handle">
          <Button type="button" className={"handle facebook"}>
            Facebook
          </Button>
          <Button type="button" className={"handle google"}>
            Google
          </Button>
          <Button type="button" className={"handle instagram"}>
            Instagram
          </Button>
        </div>
      </form>
      <Footer />
    </div>
  );
};

export default Register;
