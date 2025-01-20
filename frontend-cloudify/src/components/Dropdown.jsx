import React from 'react';

const Dropdown = ({ options, selected, onChange, disabledOptions }) => {
  return (
    <select
      value={selected}
      onChange={e => onChange(e.target.value)}
      className="w-full border border-gray-300 rounded px-2 py-1"
    >
      <option value="" disabled>Select an option</option>
      {options.map(option => (
        <option
          key={option}
          value={option}
          disabled={disabledOptions.includes(option)}
        >
          {option}
        </option>
      ))}
    </select>
  );
};

export default Dropdown;
