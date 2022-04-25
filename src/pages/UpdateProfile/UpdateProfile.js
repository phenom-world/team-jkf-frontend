import React, { useState, useEffect } from "react";
import Button from "../../components/Button/Button";
import { updateUser } from "../../Redux/actions/users";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Message from "../../components/Message/Message";
import Loader from "../../components/Loader/Loader";
import { userDetails } from "../../Redux/actions/users";
import LoadState from "../../components/Spinner/LoadState";
import Field from "../../components/Form/Field/Field";
import Select from "../../components/Form/Select/Select";
import { Footer } from "../index";

//prettier-ignore
import {statesList, electoralParticipationList, maritalStatusList, genderList, educationStatusList,politicalInterestList, employmentStatusList} from "../../components/utils";

const UpdateProfile = () => {
  const { isloading, userDetail } = useSelector((state) => state.userDetailsReducer);

  const { updateUserloading, updateUserError } = useSelector((state) => state.updateUserReducer);
  //prettier-ignore
  const { firstname, lastname, username, lga, phone, gender, state, statecode, maritalStatus, educationStatus, employmentStatus, politicalInterest, electoralParticipation } = userDetail;
  //prettier-ignore

  const [formData, setFormData] = useState(userDetail);
  const [inputState, setInputState] = useState([state, statecode]);
  const [updateGender, setUpdateGender] = useState(gender);
  const [MaritalStatus, setMaritalStatus] = useState(maritalStatus);
  const [EducationStatus, setEducationStatus] = useState(educationStatus);
  const [EmploymentStatus, setEmploymentStatus] = useState(employmentStatus);
  const [PoliticalInterest, setPoliticalInterest] = useState(politicalInterest);
  const [ElectoralParticipation, setElectoralParticipation] = useState(electoralParticipation);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const required = true;

  const states = statesList.map((state, i) => ({
    name: state,
    statecode: i < 9 ? "00" + Number(i) : "0" + Number(i),
  }));

  // prettier-ignore
  useEffect(() => {
    dispatch(userDetails());
    setFormData(userDetail);
    setUpdateGender(gender);
    setMaritalStatus(maritalStatus);
    setEducationStatus(educationStatus);
    setEmploymentStatus(employmentStatus);
    setElectoralParticipation(electoralParticipation);
    setPoliticalInterest(politicalInterest);
    setInputState([state, statecode]);
  }, [dispatch, gender, state ]);

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
    dispatch(updateUser(formData, navigate));
  };

  return isloading ? (
    <LoadState />
  ) : (
    <div>
      <div className="title">
        <p>Update User Profile</p>
      </div>
      {updateUserError && <Message variant="danger">{updateUserError}</Message>}
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
                value={lastname}
                required={required}
              />
              <Field
                label="firstname"
                type="text"
                labelValue="First Name"
                handleChange={handleChange}
                formType="form__div__1"
                required={required}
                value={firstname}
              />
              <Field
                label="username"
                type="text"
                labelValue="Username"
                handleChange={handleChange}
                formType="form__div__1"
                required={required}
                value={username}
              />
              <Field
                label="phone"
                type="tel"
                labelValue="Phone Number"
                handleChange={handleChange}
                formType="form__div__1"
                required={required}
                value={phone}
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
                label="maritalStatus"
                labelValue="Marital Status"
                handleChange={(e) => {
                  setMaritalStatus(e.target.value);
                  setFormData({
                    ...formData,
                    [e.target.name]: e.target.value,
                  });
                }}
                formType="form__div__2"
                required={required}
                value={MaritalStatus}
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
                value={lga}
              />

              <Select
                label="educationStatus"
                labelValue="Education Status"
                handleChange={(e) => {
                  setEducationStatus(e.target.value);
                  setFormData({
                    ...formData,
                    [e.target.name]: e.target.value,
                  });
                }}
                formType="form__div__2"
                required={required}
                value={EducationStatus}
              >
                <option hidden value="">
                  {" "}
                </option>
                {educationStatusList.map((item, i) => (
                  <option key={i} value={item.toLowerCase()}>
                    {item}
                  </option>
                ))}
              </Select>
              <Select
                label="employmentStatus"
                labelValue="Employment Status"
                handleChange={(e) => {
                  setEmploymentStatus(e.target.value);
                  setFormData({
                    ...formData,
                    [e.target.name]: e.target.value,
                  });
                }}
                formType="form__div__2"
                required={required}
                value={EmploymentStatus}
              >
                <option hidden value="">
                  {" "}
                </option>
                {employmentStatusList.map((item, i) => (
                  <option key={i} value={item.toLowerCase()}>
                    {item}
                  </option>
                ))}
              </Select>
              <Select
                label="politicalInterest"
                labelValue="Political Interest"
                handleChange={(e) => {
                  setPoliticalInterest(e.target.value);
                  setFormData({
                    ...formData,
                    [e.target.name]: e.target.value,
                  });
                }}
                formType="form__div__2"
                required={required}
                value={PoliticalInterest}
              >
                <option hidden value="">
                  {" "}
                </option>
                {politicalInterestList.map((item, i) => (
                  <option key={i} value={item.toLowerCase()}>
                    {item}
                  </option>
                ))}
              </Select>
              <Select
                label="electoralParticipation"
                labelValue="Electoral Participation"
                handleChange={(e) => {
                  setElectoralParticipation(e.target.value);
                  setFormData({
                    ...formData,
                    [e.target.name]: e.target.value,
                  });
                }}
                formType="form__div__2"
                required={required}
                value={ElectoralParticipation}
              >
                <option hidden value="">
                  {" "}
                </option>
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
            {updateUserloading ? (
              <Loader />
            ) : (
              <Button type="submit" className="button">
                Update Profile
              </Button>
            )}
          </div>
        </div>
      </form>
      <Footer />
    </div>
  );
};

export default UpdateProfile;
