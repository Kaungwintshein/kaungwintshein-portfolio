import React from "react";
import "./InputItem.css";

const InputItem = ({ type, label }) => {
  return (
    <div className="form-group">
      <label>{label}</label>
      <input type={type} />
    </div>
  );
};

export default InputItem;
