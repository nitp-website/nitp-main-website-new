"use client";
import React, { useEffect, useState } from "react";
import * as XLSX from "xlsx";

function Page() {
  const [grant, setGrant] = useState(false);
  const [publish, setPublish] = useState(true);
  const [data, setData] = useState([]);
  const [columns, setColumns] = useState([]);
  const [load, setLoad] = useState(true);

  const fetchData = async (excel) => {
    try {
      const res = await fetch(`/${excel}`);
      const buffer = await res.arrayBuffer();

      const workbook = XLSX.read(buffer, { type: 'array' });
      const sheetName = workbook.SheetNames[0];
      const sheet = workbook.Sheets[sheetName];

      const exData = XLSX.utils.sheet_to_json(sheet, { header: 1, raw: false, dateNF: 'yyyy-mm-dd' });
      let [firstRow, ...restRows] = exData;
      if (firstRow.every(cell => cell === null || cell === undefined || cell === "")) {
        [firstRow, ...restRows] = restRows;
      }
      setData(restRows);
      setColumns(firstRow);
    } catch (err) {
      console.log("error fetching excel file", err);
    }
  };

  const renderCell = (cell, colIndex) => {
    if (columns[colIndex] === "Inventors Name") {
      const names = cell.split('\r\n').map(name => name.trim());
      return (
        <ol className="list-decimal list-inside">
          {names.map((name, index) => (
            <li key={index} className="text-gray-800">{name}</li>
          ))}
        </ol>
      );
    }
    return cell;
  };

  const render = () => {
    fetchData('published.xlsx');
    setLoad(false);
  };

  return (
    <div className="min-h-screen bg-white bg-opacity-50">
      <div className="mx-auto px-4 py-8 max-w-7xl">
        {load ? render() : ""}
        <h1 className="text-2xl md:text-3xl font-bold mb-8 text-red-950 text-center">
          Patents Dashboard
        </h1>

        <div className="flex flex-row justify-center gap-4 mb-8">
          <button
            className={`px-6 py-2 rounded-md text-sm font-medium transition-colors ${
              publish
                ? "bg-red-900 text-white hover:bg-red-800"
                : "border border-red-900 text-red-900 hover:bg-red-50"
            }`}
            onClick={() => {
              fetchData('published.xlsx');
              setPublish(true);
              setGrant(false);
            }}
          >
            Published
          </button>
          <button
            className={`px-6 py-2 rounded-md text-sm font-medium transition-colors ${
              grant
                ? "bg-red-900 text-white hover:bg-red-800"
                : "border border-red-900 text-red-900 hover:bg-red-50"
            }`}
            onClick={() => {
              fetchData('granted.xlsx');
              setPublish(false);
              setGrant(true);
            }}
          >
            Granted
          </button>
        </div>

        {data.length > 0 && (
          <div className="overflow-hidden rounded-lg shadow-md border border-gray-100">
            <div className="overflow-x-auto max-h-[600px]">
              <table className="w-full border-collapse bg-white">
                <thead className="sticky top-0 z-10">
                  <tr className="bg-[#421010] text-white">
                    {columns.map((col, index) => (
                      <th key={index} className="text-left px-6 py-4 font-semibold">
                        {col}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {data.map((row, rowIndex) => (
                    <tr
                      key={rowIndex}
                      className={`border-b border-gray-100 hover:bg-red-50 transition-colors ${
                        rowIndex % 2 === 0 ? 'bg-white' : 'bg-gray-50'
                      }`}
                    >
                      {row.map((cell, colIndex) => (
                        <td key={colIndex} className="text-left px-6 py-4 text-gray-800">
                          {renderCell(cell, colIndex)}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Page;

