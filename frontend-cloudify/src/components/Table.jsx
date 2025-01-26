import React, { useState } from "react";
import { FaPlus } from "react-icons/fa";
import Dropdown from "./Dropdown";
import MultiselectDropdown from "./MultiselectDropdown";

const Table = () => {
  const [rows, setRows] = useState([{ id: 1, priority: "", teamMembers: [] }]);
  const [priorityOptions, setPriorityOptions] = useState([
    "High",
    "Medium",
    "Low",
    "Critical",
  ]);
  const [teamMemberOptions, setTeamMemberOptions] = useState([
    "Rahul",
    "Abhishek",
    "Murtaza",
    "Vijendra",
  ]);

  const handleAddRow = () => {
    setRows([...rows, { id: rows.length + 1, priority: "", teamMembers: [] }]);
  };

  const updateRow = (id, field, value) => {
    setRows((prevRows) =>
      prevRows.map((row) => (row.id === id ? { ...row, [field]: value } : row))
    );
  };

  return (
    <div className="container mx-auto p-6 rounded-lg">
      <table className="w-full border-collapse border border-gray-300 mb-6 hidden sm:table">
        <thead>
          <tr className="bg-gradient-to-r from-blue-500 to-indigo-500 text-white">
            <th className="border border-gray-300 px-6 py-3 text-left text-lg font-medium">
              Task Priority
            </th>
            <th className="border border-gray-300 px-6 py-3 text-left text-lg font-medium">
              Assigned Team Members
            </th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr
              key={row.id}
              className="odd:bg-white even:bg-gray-100 hover:bg-blue-100 transition duration-150"
            >
              <td className="border border-gray-300 px-6 py-3">
                <Dropdown
                  options={priorityOptions}
                  selected={row.priority}
                  onChange={(value) => updateRow(row.id, "priority", value)}
                  disabledOptions={rows.map((r) => r.priority)}
                />
              </td>
              <td className="border border-gray-300 px-6 py-3">
                <MultiselectDropdown
                  options={teamMemberOptions}
                  selected={row.teamMembers}
                  onChange={(value) => updateRow(row.id, "teamMembers", value)}
                  onAddOption={(option) => setTeamMemberOptions((prev) => [...prev, option])}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="sm:hidden">
        {rows.map((row) => (
          <div
            key={row.id}
            className="border border-gray-300 p-6 mb-4 rounded-lg shadow-md bg-white"
          >
            <div className="mb-4">
              <h3 className="font-semibold text-gray-700 mb-2">Task Priority</h3>
              <Dropdown
                options={priorityOptions}
                selected={row.priority}
                onChange={(value) => updateRow(row.id, "priority", value)}
                disabledOptions={rows.map((r) => r.priority)}
              />
            </div>
            <div>
              <h3 className="font-semibold text-gray-700 mb-2">
                Assigned Team Members
              </h3>
              <MultiselectDropdown
                options={teamMemberOptions}
                selected={row.teamMembers}
                onChange={(value) => updateRow(row.id, "teamMembers", value)}
                onAddOption={(option) =>
                  setTeamMemberOptions([...teamMemberOptions, option])
                }
              />
            </div>
          </div>
        ))}
      </div>
      <div className="mt-8 flex justify-center">
        <button
          onClick={handleAddRow}
          className="flex items-center bg-gradient-to-r from-blue-500 to-indigo-500 text-white px-6 py-3 rounded-lg shadow-md hover:shadow-lg hover:from-indigo-500 hover:to-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-300 transition duration-150"
        >
          <FaPlus className="mr-2" /> 
          Add New Row
        </button>
      </div>
    </div>
  );
};

export default Table;
