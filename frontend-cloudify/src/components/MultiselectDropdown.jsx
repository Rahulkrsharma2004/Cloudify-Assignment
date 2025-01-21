import React from "react";
import Select from "react-select";

const MultiselectDropdown = ({ options, selected, onChange, onAddOption }) => {
  const handleAddOption = (newOption) => {
    if (newOption && !options.includes(newOption.label)) {
      onAddOption(newOption.label);
    }
  };

  const customStyles = {
    control: (provided) => ({
      ...provided,
      border: "1px solid #d1d5db", // Light gray border
      borderRadius: "5px",
      padding: "2px",
    }),
    multiValue: (provided) => ({
      ...provided,
      backgroundColor: "#f1f5f9", // Light gray background
    }),
    multiValueLabel: (provided) => ({
      ...provided,
      color: "#111827", // Dark text
    }),
    multiValueRemove: (provided) => ({
      ...provided,
      color: "#dc2626", // Red cross
      ":hover": {
        backgroundColor: "#fee2e2", // Light red hover
        color: "#b91c1c",
      },
    }),
  };

  const formatOptions = options.map((option) => ({
    label: option,
    value: option,
  }));

  const handleChange = (selectedOptions) => {
    const values = selectedOptions.map((option) => option.value);
    onChange(values);
  };

  return (
    <div>
      <Select
        isMulti
        options={formatOptions}
        value={selected.map((val) => ({ label: val, value: val }))}
        onChange={handleChange}
        styles={customStyles}
        placeholder="Select Options"
      />
      <div className="mt-2 flex items-center gap-2">
        <input
          type="text"
          placeholder="Add new item"
          className="border border-gray-300 rounded px-2 py-1 flex-1"
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              handleAddOption({ label: e.target.value });
              e.target.value = "";
            }
          }}
        />
        <button
          onClick={() =>
            handleAddOption({ label: document.querySelector("input").value })
          }
          className="bg-green-500 text-white px-2 py-1 rounded hover:bg-green-600"
        >
          Add
        </button>
      </div>
    </div>
  );
};

export default MultiselectDropdown;
