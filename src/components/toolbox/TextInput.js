import React from "react";
const TextInput = ({ name, label, onChange, placeHolder, value, error }) => {
  let wrapperClass = "form-group";
  if (error && error.length > 0) {
    wrapperClass += " has-error";
    return (
      <div className={wrapperClass}>
        <label htmlFor={name} >{label}</label>
        <div>
          <input
            type="text"
            className="form-control"
            name={name}
            placeholder={placeHolder}
            value={value}
            onChange={onChange}
          />
          {error && <div className="alert alert-danger">{error}</div>}
        </div>
      </div>
    );
  }
};
export default TextInput;
