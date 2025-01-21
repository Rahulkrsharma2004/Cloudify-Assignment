import React, { useState } from "react";
import Select, { components } from "react-select";

const MultiselectDropdown = ({ options, selected, onChange }) => {
  const [dynamicOptions, setDynamicOptions] = useState(options || []);
  const [newOption, setNewOption] = useState("");

  const CustomOption = (props) => {
    const { data, innerRef, innerProps, isSelected } = props;
    return (
      <div
        ref={innerRef}
        {...innerProps}
        className="flex items-center gap-2 px-2 py-1 cursor-pointer hover:bg-blue-50"
      >
        <input
          type="checkbox"
          checked={isSelected}
          readOnly
        />
        <span>{data.label}</span>
      </div>
    );
  };

  const CustomMenu = (props) => {
    const { children } = props;
    return (
      <div>
        <components.Menu {...props}>
          {children}
          <div className="p-2 border-t border-gray-300 bg-white">
            <input
              type="text"
              value={newOption}
              onChange={(e) => setNewOption(e.target.value)}
              placeholder="Add new option"
              className="w-full border border-gray-300 rounded px-3 py-1 focus:outline-none focus:ring focus:ring-blue-300"
            />
            <button
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                handleAddOption();
              }}
              className="mt-2 w-full bg-green-500 text-white py-1 rounded hover:bg-green-600"
            >
              Add Option
            </button>
          </div>
        </components.Menu>
      </div>
    );
  };

  const customStyles = {
    control: (provided) => ({
      ...provided,
      border: "1px solid #3b82f6",
      borderRadius: "8px",
      padding: "4px",
      boxShadow: "none",
      "&:hover": {
        borderColor: "#2563eb",
      },
    }),
    multiValue: (provided) => ({
      ...provided,
      backgroundColor: "#dbeafe",
      borderRadius: "4px",
      padding: "2px",
    }),
    multiValueLabel: (provided) => ({
      ...provided,
      color: "#1e3a8a",
    }),
    multiValueRemove: (provided) => ({
      ...provided,
      color: "#dc2626",
      ":hover": {
        backgroundColor: "#fee2e2",
        color: "#b91c1c",
      },
    }),
    dropdownIndicator: (provided) => ({
      ...provided,
      color: "#2563eb",
      "&:hover": {
        color: "#1d4ed8",
      },
    }),
  };

  const formatOptions = dynamicOptions.map((option) => ({
    label: option,
    value: option,
  }));

  const handleAddOption = () => {
    if (newOption.trim() && !dynamicOptions.includes(newOption)) {
      setDynamicOptions((prevOptions) => [...prevOptions, newOption]);
      setNewOption(""); 
    }
  };

  const handleChange = (selectedOptions) => {
    const values = selectedOptions
      ? selectedOptions.map((option) => option.value)
      : [];
    onChange(values);
  };

  return (
    <div className="space-y-4">
      <Select
        isMulti
        options={formatOptions}
        value={selected.map((val) => ({ label: val, value: val }))}
        onChange={handleChange}
        styles={customStyles}
        components={{ Option: CustomOption, Menu: CustomMenu }}
        placeholder="Select or add options"
      />
    </div>
  );
};

export default MultiselectDropdown;
