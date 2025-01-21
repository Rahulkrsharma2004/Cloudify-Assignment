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
      border: "1px solid #d1d5db",
      borderRadius: "5px",
      padding: "2px",
    }),
    option: (provided, state) => ({
      ...provided,
      backgroundColor: state.isDisabled
        ? "#e5e7eb"
        : state.isSelected
        ? "#2563eb"
        : state.isFocused
        ? "#bfdbfe"
        : "#ffffff",
      color: state.isDisabled ? "#9ca3af" : "#000000",
      cursor: state.isDisabled ? "not-allowed" : "pointer",
    }),
    multiValue: (provided) => ({
      ...provided,
      backgroundColor: "#f3f4f6",
    }),
    multiValueLabel: (provided) => ({
      ...provided,
      color: "#111827",
    }),
    multiValueRemove: (provided) => ({
      ...provided,
      color: "#dc2626",
      ":hover": {
        backgroundColor: "#fee2e2",
        color: "#b91c1c",
      },
    }),
  };

  const handleChange = (selectedOption) => {
    onChange(selectedOption ? selectedOption.value : "");
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
