import React, { useState } from 'react';

const InputField = ({ type, minLength, label, name, value, onChange, onFocus, onBlur }) => {
  const [active, setActive] = useState(false);

  return (
    <div className="input-wrap">
      <input
        type={type}
        minLength={minLength}
        name={name}
        className={`input-field ${active ? 'active' : ''}`}
        value={value}
        onChange={onChange}
        onFocus={() => setActive(true)}
        onBlur={() => value === '' && setActive(false)}
        required
      />
      <label>{label}</label>
    </div>
  );
};

export default InputField;