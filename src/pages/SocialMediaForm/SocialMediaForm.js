import React, { useState, useEffect } from "react";
import Button from "../../components/Button/Button";
import { socialSignup } from "../../Redux/actions/users";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Loader from "../../components/Loader/Loader";
import Field from "../../components/Form/Field/Field";
import Message from "../../components/Message/Message";
import Select from "../../components/Form/Select/Select";
import { Footer } from "../index";

//prettier-ignore
import {statesList, genderList} from "../../components/utils";

const SocialMediaForm = () => {
  const { user } = useSelector((state) => state.socialFormReducer);
  const { isloading, error } = useSelector((state) => state.registerReducer);

  //prettier-ignore
  const { displayName, email , uid} = user;

  //prettier-ignore
  const [formData, setFormData] = useState({ firstname: displayName.split(" ")[1], lastname: displayName.split(" ")[0], email: email, password: uid, isSocial: true });
  const [inputState, setInputState] = useState("");
  const [updateGender, setUpdateGender] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const required = true;

  const states = statesList.map((state, i) => ({
    name: state,
    statecode: i < 9 ? "00" + Number(i) : "0" + Number(i),
  }));

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onStateChange = (e) => {
    const value = e.target.value.split(",");
    if (value[0] !== "select state") {
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
    if (value !== "") {
      setUpdateGender(value);
      setFormData({ ...formData, [e.target.name]: e.target.value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(socialSignup(formData, navigate));
  };

  return (
    <div>
      <div className="title">
        <p>Complete Registration</p>
      </div>
      {error && <Message variant="danger">{error}</Message>}
      <form className="register_form" onSubmit={handleSubmit}>
        <div className="container">
          <div className="form__section">
            <div className="form">
              <Field
                label="lastname"
                type="text"
                labelValue="Last Name"
                handleChange={handleChange}
                formType="form__div__1"
                value={displayName.split(" ")[0]}
                required={required}
              />
              <Field
                label="firstname"
                type="text"
                labelValue="First Name"
                handleChange={handleChange}
                formType="form__div__1"
                required={required}
                value={displayName.split(" ")[1]}
              />
              <Field
                label="email"
                type="email"
                labelValue="Email"
                handleChange={handleChange}
                formType="form__div__1"
                value={email}
                required={required}
              />
              <Field
                label="username"
                type="text"
                labelValue="Username"
                handleChange={handleChange}
                formType="form__div__1"
                required={required}
              />
            </div>
          </div>
          <div className="form__section">
            <div className="form">
              <Field
                label="phone"
                type="tel"
                labelValue="Phone Number"
                handleChange={handleChange}
                formType="form__div__1"
                required={required}
              />
              <Select
                label="gender"
                labelValue="Gender"
                handleChange={onGenderChange}
                formType="form__div__1"
                required={required}
                value={updateGender}
              >
                {genderList.map((item, i) => (
                  <option key={i} value={item.toLowerCase()}>
                    {item}
                  </option>
                ))}
              </Select>
              <Select
                label="state"
                labelValue="State of Residence"
                handleChange={onStateChange}
                formType="form__div__2"
                required={required}
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
                required={required}
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

export default SocialMediaForm;
