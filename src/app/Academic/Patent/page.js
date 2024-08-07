"use client";
import React, { useEffect, useState } from "react";

const fetchFacultyName = async (email) => {
  const response = await fetch(
    `https://admin.nitp.ac.in/api/faculty/${email}`
  );
  const data = await response.json();
  return data.profile.name;
};

const PatentsTable = () => {
  const [patents, setPatents] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  const fetchPatents = async () => {
    setIsLoading(true);
    try {
      const response = await fetch(
        "https://admin.nitp.ac.in/api/publications/all"
      );
      const data = await response.json();

      const patentData = data.filter((item) =>
        item.publications.some(
          (publication) => publication.type === "patent"
        )
      );

      const patentsWithFaculty = [];
      for (const patent of patentData) {
        const facultyName = await fetchFacultyName(patent.email);
        for (const publication of patent.publications) {
          if (publication.type === "patent") {

          
            patentsWithFaculty.sort((a, b) => b.year - a.year);

            patentsWithFaculty.push({
              ...patent,
              facultyName,
              year: publication.year,
              filedyear: publication.yearfiled,
              nationality: publication.nationality,
              number: publication.number,
              citationKey: publication.citation_key,
            });
            
          }
        }
      }
          // Sort the patentsWithFaculty array after the loop
       
    patentsWithFaculty.sort((a, b) => b.year - a.year);
    patentsWithFaculty.sort((a, b) => {
      // Sort by year first
      if (a.year !== b.year) {
        return b.year - a.year;
      } else {
        // If years are equal, prioritize patents with filedYear
        if (a.filedyear && b.filedyear) {
          // If both have filedYear, sort by filedYear in descending order
          return b.filedyear - a.filedyear;
        } else if (a.filedyear) {
          // If only 'a' has filedYear, move it to the end
          return 1; 
        } else if (b.filedyear) {
          // If only 'b' has filedYear, keep it in its current position
          return -1;
        } else {
          // If neither has filedYear, keep them in their current positions
          return 0;
        }
      }
    });
    patentsWithFaculty.sort((a, b) => a.year - b.year);
    patentsWithFaculty.sort((a, b) => b.year - a.year);
      setPatents(patentsWithFaculty);
    } catch (error) {
      setError(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchPatents();
  }, []);

  useEffect(() => {
    fetchPatents();
  }, []);

  // Function to handle search bar input
  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value.toLowerCase());
  };

  // Filter patents based on search term
  const filteredPatents = patents.filter((patent) => {

    return patent.facultyName.toLowerCase().includes(searchTerm.toLowerCase())
  });

  return (
    <div className="patent-dashboard text-neutral-700 bg-white/70">
      <h1 className="headingpatent text-3xl text-center pb-7 md:pb-10 text-red-800 font-bold">Patents Dashboard</h1>
      {isLoading ? (
        <div className="flex justify-center items-center ">
        <svg
          version="1.1"
          id="L1"
          height="150px"
          width="150px"
          x="0px"
          y="0px"
          viewBox="0 0 100 100"
          enable-background="new 0 0 100 100"
        >
          <circle
            fill="none"
            stroke="#f87171"
            stroke-width="6"
            stroke-miterlimit="15"
            stroke-dasharray="14.2472,14.2472"
            cx="50"
            cy="50"
            r="47"
          >
            <animateTransform
              attributeName="transform"
              attributeType="XML"
              type="rotate"
              dur="5s"
              from="0 50 50"
              to="360 50 50"
              repeatCount="indefinite"
            />
          </circle>
          <circle
            fill="none"
            stroke="#f87171"
            stroke-width="1"
            stroke-miterlimit="10"
            stroke-dasharray="10,10"
            cx="50"
            cy="50"
            r="39"
          >
            <animateTransform
              attributeName="transform"
              attributeType="XML"
              type="rotate"
              dur="5s"
              from="0 50 50"
              to="-360 50 50"
              repeatCount="indefinite"
            />
          </circle>
          <g fill="#f87171">
            <rect x="30" y="35" width="5" height="30">
              <animateTransform
                attributeName="transform"
                dur="1s"
                type="translate"
                values="0 5 ; 0 -5; 0 5"
                repeatCount="indefinite"
                begin="0.1"
              />
            </rect>
            <rect x="40" y="35" width="5" height="30">
              <animateTransform
                attributeName="transform"
                dur="1s"
                type="translate"
                values="0 5 ; 0 -5; 0 5"
                repeatCount="indefinite"
                begin="0.2"
              />
            </rect>
            <rect x="50" y="35" width="5" height="30">
              <animateTransform
                attributeName="transform"
                dur="1s"
                type="translate"
                values="0 5 ; 0 -5; 0 5"
                repeatCount="indefinite"
                begin="0.3"
              />
            </rect>
            <rect x="60" y="35" width="5" height="30">
              <animateTransform
                attributeName="transform"
                dur="1s"
                type="translate"
                values="0 5 ; 0 -5; 0 5"
                repeatCount="indefinite"
                begin="0.4"
              />
            </rect>
            <rect x="70" y="35" width="5" height="30">
              <animateTransform
                attributeName="transform"
                dur="1s"
                type="translate"
                values="0 5 ; 0 -5; 0 5"
                repeatCount="indefinite"
                begin="0.5"
              />
            </rect>
          </g>
        </svg>
      </div>
      ) : error ? (
        <p>{error}</p>
      ) : (
        <div className="table-container text-red-400">
          <input
            type="text"
            placeholder="Search by Faculty Name"
            
            value={searchTerm}
            onChange={handleSearchChange}
            className="search-bar"
          />

          <table className="styled-table">
            <thead>
              <tr>
                <th>S.No.</th>
                <th>Faculty Name</th>
                <th>Year</th>
                <th>Filed Year</th>
                <th>Nationality</th>
                <th>Number</th>
                <th>Citation Key</th>
              </tr>
            </thead>
            <tbody className="text-neutral-800">
              {filteredPatents.map((patent, index) => (
                <tr key={`${patent.email}-${patent.year}-${patent.number}`}>
                  <td>{index + 1}</td>
                  <td>{patent.facultyName}</td>
                  <td>{patent.year}</td>
                  <td>{patent.filedyear}</td>
                  <td>{patent.nationality}</td>
                  <td>{patent.number}</td>
                  <td>{patent.citationKey}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
      <style jsx>{`
        .patent-dashboard {
          padding: 20px;
        }
        .headingpatent {
          text-align: center;
         
        }
        .search-bar {
          display: block;
          margin: 0 0 20px auto;
          padding: 10px;
          font-size: 16px;
          width: 80%;
          max-width: 400px;
          border-color: red;
        }
        .table-container {
          overflow-x: auto;
          max-height: 600px; /* Adjust this height as needed */
        }

        .search-bar {
          margin-bottom: 20px;
        }

        .styled-table {
          width: 100%;
          border-collapse: collapse;
          margin: 10px 10px;
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
            font-size: 24px;
          }
        }

        @media (max-width: 480px) {
          .styled-table {
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
  );
};

const PatentsPage = () => (

   
    <PatentsTable url="faculties" title="Patents Dashboard" />

);

export default PatentsPage;