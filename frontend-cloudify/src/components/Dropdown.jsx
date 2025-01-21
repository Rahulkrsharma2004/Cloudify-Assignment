import React from "react";
import Select from "react-select";

const Dropdown = ({ options, selected, onChange, disabledOptions }) => {
  const formattedOptions = options.map((option) => ({
    value: option,
    label: option,
    isDisabled: disabledOptions.includes(option),
  }));

  const customStyles = {
    control: (provided) => ({
      ...provided,
      border: "1px solid #d1d5db", // Light gray border
      borderRadius: "5px",
      padding: "2px",
    }),
    option: (provided, state) => ({
      ...provided,
      backgroundColor: state.isDisabled
        ? "#e5e7eb" // Light gray for disabled options
        : state.isSelected
        ? "#2563eb" // Blue for selected options
        : state.isFocused
        ? "#bfdbfe" // Light blue for hovered options
        : "#ffffff", // Default white
      color: state.isDisabled ? "#9ca3af" : "#000000", // Gray for disabled text
      cursor: state.isDisabled ? "not-allowed" : "pointer",
    }),
    multiValue: (provided) => ({
      ...provided,
      backgroundColor: "#f3f4f6", // Light gray background
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

  const handleChange = (selectedOption) => {
    onChange(selectedOption ? selectedOption.value : ""); // Handle value change
  };

  return (
    <Select
      options={formattedOptions}
      value={selected ? { value: selected, label: selected } : null}
      onChange={handleChange}
      styles={customStyles}
      isClearable
      placeholder="Select an option"
    />
  );
};

export default Dropdown;
