// src/Dropdown.js
import React, { useState } from 'react';

function Dropdown({ optionsData }) {
  const [selectedOption, setSelectedOption] = useState('');

  const handleOptionChange = (e) => {
    setSelectedOption(e.target.value);
  };

  return (
    <div>
      <h2>Dynamic Dropdown</h2>
      <select value={selectedOption} onChange={handleOptionChange}>
        <option value="">Select an option</option>
        {optionsData.map((option, index) => (
          <option key={index} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      <p>Selected option: {selectedOption}</p>
    </div>
  );
}

export default Dropdown;
