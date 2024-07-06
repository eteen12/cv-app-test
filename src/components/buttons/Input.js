import React from "react";

const Input = ({ value, label, handleChange }) => {
  return (
    <div className="input-wrapper">
      <label>{label}</label>
      <input
        type="text"
        value={value}
        onChange={(e) => handleChange(e.target.value)}
        className="text-input"
      />
    </div>
  );
};

export default Input;
