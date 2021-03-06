import React from "react";

const Field = ({ label, type, handleChange, errors, value, required, labelValue, readonly, formType }) => {
  return (
    <div className={` ${formType} ${label}`}>
      <label className="form__label" htmlFor={label}>
        {labelValue}
      </label>
      <input type={type} name={label} id={label} defaultValue={value} onChange={handleChange} required={required} readOnly={readonly} />
      <p className="text-danger mx-2 form__paragraph">
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

export default Field;
