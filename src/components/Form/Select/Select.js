import React from "react";

const Select = ({
  label,
  handleChange,
  errors,
  value,
  labelValue,
  formType,
  children,
}) => {
  return (
    <div className={` ${formType} ${label}`}>
      <label className="form__label" htmlFor={label}>
        {labelValue}
      </label>
      <select name={label} id={label} value={value} onChange={handleChange} >
        {children}
      </select>
      <p className="text-danger mx-2">
        {errors?.errors?.[`${label}`] && (
          <>
            <i className="fa-solid fa-circle-exclamation"></i>
            {errors?.errors?.[`${label}`]}
          </>
        )}
      </p>
    </div>
  );
};

export default Select;
