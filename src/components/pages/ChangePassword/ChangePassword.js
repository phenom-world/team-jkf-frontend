import React, { useState } from "react";
import Button from "../../Button/Button";
import { Footer } from "../index";

const initialState = {
  email: "",
};
const ChangePassword = () => {
  const [formData, setFormData] = useState(initialState);
  const handleSubmit = (e) => {
    e.preventDefault();
    // dispatch(signup(formData, navigate));
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  return (
    <div>
      <div className="title">
        <p>Update Password</p>
      </div>
      <form className="login_form" onSubmit={handleSubmit}>
        <div className="login__container">
          <div className="login__form__section">
            <div className="login__form">
              <div className="form__div  password">
                <label className="login__form__label" htmlFor="password">
                  Current Password
                </label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  className="login__input"
                  onClick={handleChange}
                />
              </div>
              <div className="form__div  password">
                <label className="login__form__label" htmlFor="password">
                  New Password
                </label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  className="login__input"
                  onClick={handleChange}
                />
              </div>
              <div className="form__div  password">
                <label className="login__form__label" htmlFor="password">
                  Confirm New Password
                </label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  className="login__input"
                  onClick={handleChange}
                />
              </div>
              <div className="login__form__div">
                <Button styles="button">Update Password</Button>
              </div>
            </div>
          </div>
        </div>
      </form>
      <Footer />
    </div>
  );
};

export default ChangePassword;
