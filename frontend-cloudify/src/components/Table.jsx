import React, { useState } from "react";
import Dropdown from "./Dropdown";
import MultiselectDropdown from "./MultiselectDropdown";

const Table = () => {
  const [rows, setRows] = useState([{ id: 1, label1: "", label2: [] }]);
  const [label1Options, setLabel1Options] = useState([
    "Option 1",
    "Option 2",
    "Option 3",
    "Option 4",
    "Option 5",
  ]);
  const [label2Options, setLabel2Options] = useState([
    "Option A",
    "Option B",
    "Option C",
    "Option D",
    "Option E",
  ]);

  const handleAddRow = () => {
    setRows([...rows, { id: rows.length + 1, label1: "", label2: [] }]);
  };

  const updateRow = (id, field, value) => {
    setRows((prevRows) =>
      prevRows.map((row) =>
        row.id === id ? { ...row, [field]: value } : row
      )
    );
  };

  return (
    <div className="container mx-auto p-4">
      <table className="w-full border-collapse border border-gray-300 mb-4">
        <thead>
          <tr className="bg-gray-200">
            <th className="border border-black px-4 py-2">Label 1</th>
            <th className="border border-black px-4 py-2">Label 2</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr key={row.id}>
              <td className="border border-green-500 px-4 py-2">
                <Dropdown
                  options={label1Options}
                  selected={row.label1}
                  onChange={(value) => updateRow(row.id, "label1", value)}
                  disabledOptions={rows.map((r) => r.label1)}
                />
              </td>
              <td className="border border-green-500 px-4 py-2">
                <MultiselectDropdown
                  options={label2Options}
                  selected={row.label2}
                  onChange={(value) => updateRow(row.id, "label2", value)}
                  onAddOption={(option) =>
                    setLabel2Options([...label2Options, option])
                  }
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="mt-8 flex justify-center">
    <button
      onClick={handleAddRow}
      className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
    >
      Add New Row
    </button>
  </div>
    </div>
  );
};

export default Table;
