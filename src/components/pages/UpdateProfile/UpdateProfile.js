import React, { useState, useEffect } from "react";
import Button from "../../Button/Button";
import { signup } from "../../../Redux/actions/users";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Message from "../../Message/Message";
import Loader from "../../Loader/Loader";
import { getUser } from "../../../Redux/actions/users";
import LoadState from "../../Spinner/LoadState";
import Field from "../../../components/Form/Field/Field";
import Select from "../../../components/Form/Select/Select";
//prettier-ignore
import {statesList, electoralParticipationList, maritalStatusList, genderList, educationStatusList,politicalInterestList, employmentStatusList} from "../../utils";

const UpdateProfile = () => {
  const { isloading, error, userDetails } = useSelector(
    (state) => state.userDetailsReducer
  );
  //prettier-ignore
  const { firstname, lastname, username, lga, phone, gender, state, statecode, maritalStatus, educationStatus, employmentStatus, politicalInterest, electoralParticipation } = userDetails;
  console.log(userDetails);
  const [formData, setFormData] = useState({});
  const [inputState, setInputState] = useState([state, statecode]);
  const [errors, setErrors] = useState({});

  const [updateGender, setUpdateGender] = useState(gender);
  const [MaritalStatus, setMaritalStatus] = useState(maritalStatus);
  const [EducationStatus, setEducationStatus] = useState(educationStatus);
  const [EmploymentStatus, setEmploymentStatus] = useState(employmentStatus);
  const [PoliticalInterest, setPoliticalInterest] = useState(politicalInterest);
  const [ElectoralParticipation, setElectoralParticipation] = useState(
    electoralParticipation
  );

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("result"));

  const states = statesList.map((state, i) => ({
    name: state,
    statecode: i < 9 ? "00" + Number(i) : "0" + Number(i),
  }));

  useEffect(() => {
    if (user) dispatch(getUser());
    setUpdateGender(gender);
    setMaritalStatus(maritalStatus);
    setEducationStatus(educationStatus);
    setEmploymentStatus(employmentStatus);
    setElectoralParticipation(electoralParticipation);
    setPoliticalInterest(politicalInterest);
    setInputState([state, statecode]);
  }, [gender, state, statecode]);

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
    if (value !== "select gender") {
      setUpdateGender(value);
      console.log(value);
      setFormData({ ...formData, [e.target.name]: e.target.value });
    }
  };

  const validate = () => {
    let inValid = true;
    if (typeof formData["email"] !== "undefined") {
      var pattern = new RegExp(
        /^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i
      );
      if (!pattern.test(formData["email"])) {
        inValid = false;
        errors["email"] = "Please enter a valid email address.";
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
      console.log(formData);
      dispatch(signup(formData, navigate));
    }
  };
  return (
    <div>
      {isloading ? (
        <LoadState />
      ) : (
        <>
          <div className="title">
            <p>Update User Profile</p>
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
                    errors={errors}
                    value={lastname}
                  />
                  <Field
                    label="firstname"
                    type="text"
                    labelValue="First Name"
                    handleChange={handleChange}
                    formType="form__div__1"
                    errors={errors}
                    value={firstname}
                  />
                  <Field
                    label="username"
                    type="text"
                    labelValue="Username"
                    handleChange={handleChange}
                    formType="form__div__1"
                    errors={errors}
                    value={username}
                  />
                  <Field
                    label="phone"
                    type="tel"
                    labelValue="Phone Number"
                    handleChange={handleChange}
                    formType="form__div__1"
                    errors={errors}
                    value={phone}
                  />
                  <Select
                    label="gender"
                    labelValue="Gender"
                    handleChange={onGenderChange}
                    formType="form__div__1"
                    errors={errors}
                    value={updateGender}
                  >
                    {genderList.map((item, i) => (
                      <option key={i} value={item.toLowerCase()}>
                        {item}
                      </option>
                    ))}
                  </Select>
                  <Select
                    label="maritalStatus"
                    labelValue="Marital Status"
                    handleChange={onGenderChange}
                    formType="form__div__2"
                    errors={errors}
                    value={updateGender}
                  >
                    {maritalStatusList.map((item, i) => (
                      <option key={i} value={item.toLowerCase()}>
                        {item}
                      </option>
                    ))}
                  </Select>
                </div>
              </div>
              <div className="form__section">
                <div className="form">
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
                    value={lga}
                  />

                  <Select
                    label="educationStatus"
                    labelValue="Education Status"
                    handleChange={onGenderChange}
                    formType="form__div__2"
                    errors={errors}
                    value={updateGender}
                  >
                    {educationStatusList.map((item, i) => (
                      <option key={i} value={item.toLowerCase()}>
                        {item}
                      </option>
                    ))}
                  </Select>
                  <Select
                    label="employmentStatus"
                    labelValue="Employment Status"
                    handleChange={onGenderChange}
                    formType="form__div__2"
                    errors={errors}
                    value={updateGender}
                  >
                    {employmentStatusList.map((item, i) => (
                      <option key={i} value={item.toLowerCase()}>
                        {item}
                      </option>
                    ))}
                  </Select>
                  <Select
                    label="politicaInterest"
                    labelValue="Political Interest"
                    handleChange={onGenderChange}
                    formType="form__div__2"
                    errors={errors}
                    value={updateGender}
                  >
                    {politicalInterestList.map((item, i) => (
                      <option key={i} value={item.toLowerCase()}>
                        {item}
                      </option>
                    ))}
                  </Select>
                  <Select
                    label="electoralParticipation"
                    labelValue="Electoral Participation"
                    handleChange={onGenderChange}
                    formType="form__div__2"
                    errors={errors}
                    value={updateGender}
                  >
                    {electoralParticipationList.map((item, i) => (
                      <option key={i} value={item.toLowerCase()}>
                        {item}
                      </option>
                    ))}
                  </Select>
                </div>
              </div>
            </div>

            <div className=" terms">
              <div className="login__form__div">
                {isloading ? (
                  <Loader />
                ) : (
                  <Button type="submit" className="button">
                    Update Profile
                  </Button>
                )}
              </div>
            </div>
          </form>
        </>
      )}
    </div>
  );
};

export default UpdateProfile;
