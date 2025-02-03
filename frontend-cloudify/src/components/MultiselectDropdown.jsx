import React, { useState, useEffect, useRef } from "react";
import { FaPlus, FaChevronDown } from "react-icons/fa";

const MultiselectDropdown = ({ options, onChange }) => {
  const [dynamicOptions, setDynamicOptions] = useState([]);
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [newOption, setNewOption] = useState("");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const storedOptions = localStorage.getItem("dynamicOptions");
    const storedSelectedOptions = localStorage.getItem("selectedOptions");

    if (storedOptions) {
      setDynamicOptions(JSON.parse(storedOptions));
    } else {
      setDynamicOptions(options || []);
    }

    if (storedSelectedOptions) {
      setSelectedOptions(JSON.parse(storedSelectedOptions));
    }
  }, [options]);

  const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);

  const handleAddOption = () => {
    if (newOption.trim() && !dynamicOptions.includes(newOption)) {
      const updatedOptions = [...dynamicOptions, newOption];
      setDynamicOptions(updatedOptions);
      localStorage.setItem("dynamicOptions", JSON.stringify(updatedOptions));

      setNewOption("");
      alert("New option added successfully");
    }
  };

  const handleSelectOption = (option) => {
    let updatedSelectedOptions;

    if (selectedOptions.includes(option)) {
      updatedSelectedOptions = selectedOptions.filter(
        (selected) => selected !== option
      );
    } else {
      updatedSelectedOptions = [...selectedOptions, option];
    }

    setSelectedOptions(updatedSelectedOptions);
    localStorage.setItem(
      "selectedOptions",
      JSON.stringify(updatedSelectedOptions)
    );
    onChange(updatedSelectedOptions);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="relative inline-block w-full sm:w-auto" ref={dropdownRef}>
      <div
        className="w-full sm:w-[350px] max-w-[350px] px-4 py-2 border rounded-lg cursor-pointer bg-white shadow-sm focus:ring-2 focus:ring-blue-400 focus:outline-none hover:shadow-md transition-all flex items-center justify-between"
        onClick={toggleDropdown}
      >
        {selectedOptions.length > 0 ? (
          <span className="text-gray-700 truncate">
            {selectedOptions.join(", ")}
          </span>
        ) : (
          <span className="text-gray-400 truncate">Select or add options</span>
        )}
        <FaChevronDown className={`transform transition-all text-gray-300 `} />
      </div>

      {isDropdownOpen && (
        <div className="w-full sm:w-[350px] max-w-[350px] absolute left-0 right-0 z-10 mt-2 bg-white border rounded-lg shadow-xl">
          <div className="max-h-80 overflow-y-auto">
            {dynamicOptions.map((option, index) => (
              <div
                key={index}
                className={`flex items-center px-4 py-2 cursor-pointer ${
                  selectedOptions.includes(option)
                    ? "bg-blue-100 text-blue-700"
                    : "hover:bg-gray-100 text-gray-700"
                }`}
                onClick={() => handleSelectOption(option)}
              >
                <input
                  type="checkbox"
                  className="mr-2 accent-blue-500"
                  checked={selectedOptions.includes(option)}
                  readOnly
                />
                {option}
              </div>
            ))}
          </div>

          <div className="p-2 border-t bg-gray-50 flex flex-wrap gap-2 items-center">
            <input
              type="text"
              value={newOption}
              onChange={(e) => setNewOption(e.target.value)}
              placeholder="Add new option"
              className="flex-grow min-w-[60%] sm:min-w-[70%] px-3 py-2 text-gray-700 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              onFocus={() => setIsDropdownOpen(true)}
            />
            <button
              onClick={(e) => {
                e.preventDefault();
                handleAddOption();
              }}
              className="w-full sm:w-auto px-3 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 transition-all flex items-center justify-center"
            >
              <FaPlus className="mr-2" />
              Add
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default MultiselectDropdown;
