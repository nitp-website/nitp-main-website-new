"use client";
import React, { useEffect, useState } from "react";
import * as XLSX from "xlsx";

function Page(){
  const [grant,setGrant]=useState(false);
  const [publish,setPublish]=useState(true);
  const [data,setData]=useState([]);
  const [columns,setColumns]=useState([]);
  const [load,setLoad]=useState(true);
  const fetchData=async(excel)=>{
    try{
      const res=await fetch(`/${excel}`);
      const buffer=await res.arrayBuffer();

      const workbook=XLSX.read(buffer,{type:'array'});
      const sheetName=workbook.SheetNames[0];
      const sheet=workbook.Sheets[sheetName];

      const exData=XLSX.utils.sheet_to_json(sheet,{header:1,raw:false,dateNF:'yyyy-mm-dd'});
      let [firstRow,...restRows]=exData;
      if (firstRow.every(cell => cell === null || cell === undefined || cell === "")) {
        [firstRow, ...restRows] = restRows;
      }
      setData(restRows);
      setColumns(firstRow);

    }
    catch(err){
      console.log("error fetching excel file",err);
    }
  }
  
  const renderCell = (cell, colIndex) => {
    if (columns[colIndex] === "Inventors Name") {
      // Split names by line breaks and render as ordered list
      const names = cell.split('\r\n').map(name => name.trim());
      // Render the names as an ordered list
      return (
        <ol>
          {names.map((name, index) => (
            <li key={index}>{name}</li>
          ))}
        </ol>
      );
    }

    // Default rendering for other cells
    return cell;
  };
  const render=()=>{
    fetchData('published.xlsx');
    setLoad(false)
  }

  return(
    <div className="mx-4 border p-4 rounded-md shadow-lg shadow-slate-400 backdrop-blur-md">
      {load?render():""}
    <h1 className="p-5 text-red-900 text-xl md:text-3xl text-center font-bold">
      Patents Dashboard
    </h1>
      <div className='flex flex-row justify-center gap-2 mb-8 lg:gap-5'>
        <button className={`border border-black rounded-lg ${(publish) ? "text-white bg-red-800" : "text-red-800"} px-4 lg:px-8 lg:py-1 text-md md:text-xl`} onClick={()=>{
          fetchData('published.xlsx');
          setPublish(true);
          setGrant(false)
        }}>
          Published
        </button>
        <button className={`border border-black rounded-lg ${(grant) ? "text-white bg-red-800" : "text-red-800"} px-4 lg:px-8 lg:py-1 text-md md:text-xl`} onClick={()=>{
          fetchData('granted.xlsx');
          setPublish(false);
          setGrant(true)
        }}>
          Granted
        </button>
      </div>
      <div className='text-black'>
        {data.length>0 && (
          <div className='table-container'>
          <table className='styled-table' cellPadding="5">
            <thead>
              <tr className='font-bold'>
                {columns.map((col, index) => (
                  <th key={index}>{col}</th>
                ))}
              </tr>
            </thead>
            <tbody className="text-neutral-800">
              {data.map((row, rowIndex) => (
                <tr key={rowIndex}>
                  {row.map((cell, colIndex) => (
                    <td key={colIndex}>{renderCell(cell,colIndex)}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        )}
      </div>
             <style jsx>{`
         .table-container {
           overflow-x:auto;
           max-height: 600px; /* Adjust this height as needed */
        }

         .styled-table {
           width: 100%;
           border-collapse: collapse;
           
           font-size: 14px;
           text-align: left;
           box-shadow: 0 0 20px rgba(0, 0, 0, 0.15);
         }

        .styled-table thead th {
          background-color: #F5B7B1;
          color: #1C2833;           
          text-align: left;
           padding: 12px 15px;
           position: sticky;
           top: 0;
           z-index: 2;
         }

         .styled-table th,
         .styled-table td {
           padding: 12px 15px;
         }

         .styled-table tbody tr {
           border-bottom: 1px solid #dddddd;
         }

         .styled-table tbody tr:nth-of-type(even) {
           background-color: #f3f3f3;
         }

         .styled-table tbody tr:last-of-type {
           border-bottom: 2px solid #009879;
         }

         .styled-table tbody tr.active-row {
           font-weight: bold;
           color: #009879;
         }

         @media (max-width: 768px) {
           .styled-table {
             font-size: 10px;
           }

           .styled-table th,
           .styled-table td {
             padding: 10px;
           }

           .headingpatent {
             font-size: 24px;        }
         }

         @media (max-width: 480px) {           .styled-table {
             font-size: 10px;
           }

          .styled-table th,
          .styled-table td {
            padding: 8px;
           }

           .headingpatent{
             font-size: 20px;
           }
         }
       `}</style>

    </div>
  )
}

export default Page

