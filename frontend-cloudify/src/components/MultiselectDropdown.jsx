import React, { useState } from 'react';

const MultiselectDropdown = ({ options, selected, onChange, onAddOption }) => {
  const [newOption, setNewOption] = useState('');

  const handleAddOption = () => {
    if (newOption.trim() && !options.includes(newOption)) {
      onAddOption(newOption);
      setNewOption('');
    }
  };

  const toggleSelection = option => {
    if (selected.includes(option)) {
      onChange(selected.filter(item => item !== option));
    } else {
      onChange([...selected, option]);
    }
  };

  return (
    <div className="relative">
      <div className="border border-gray-300 rounded px-2 py-1">
        {options.map(option => (
          <label key={option} className="block">
            <input
              type="checkbox"
              checked={selected.includes(option)}
              onChange={() => toggleSelection(option)}
              className="mr-2"
            />
            {option}
          </label>
        ))}
        <div className="mt-2 flex items-center gap-2">
          <input
            type="text"
            value={newOption}
            onChange={e => setNewOption(e.target.value)}
            placeholder="Add new item"
            className="border border-gray-300 rounded px-2 py-1 flex-1"
          />
          <button
            onClick={handleAddOption}
            className="bg-green-500 text-white px-2 py-1 rounded hover:bg-green-600"
          >
            Add
          </button>
        </div>
      </div>
    </div>
  );
};

export default MultiselectDropdown;
