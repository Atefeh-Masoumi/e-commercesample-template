import React from "react";
import "./input.css";
const Input = ({ formik, name, label, type = "text" }) => {
  return (
    <div className="formControl">
      <div className="inputcontainer">
        
        <label htmlFor={name} className="">
          {label} :{" "}
        </label>
        <input
          id={name}
          type={type}
          name={name}
          className="inputstyle borderanimation"
          {...formik.getFieldProps(name)}
        />
      </div>
      {formik.errors[name] && formik.touched[name] && (
        <div className="error">{formik.errors[name]}</div>
      )}
    </div>
  );
};

export default Input;
