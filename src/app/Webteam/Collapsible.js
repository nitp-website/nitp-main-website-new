import './wpage.css'; // Assuming you have CSS for styling

import React, { useState } from 'react';
import { useCollapse } from 'react-collapsed';
import Webcard from "../components/Webteam/Webcard"

const Collapsible = ({ title, data, years }) => {
  const [isExpanded, setExpanded] = useState(false);
  const [selectedYear, setSelectedYear] = useState(years[0]);
  const { getCollapseProps, getToggleProps } = useCollapse({ isExpanded });

  // Filter data based on the selected year
  const filteredData = data.filter(member => member.year === selectedYear);

  // Segregate members into Developers/Designers and Faculty Coordinators
  const devAndDesigners = filteredData.filter(member => 
    member.desg.toLowerCase().includes('developer') || member.desg.toLowerCase().includes('designer')
  );
  const facultyCoordinators = filteredData.filter(member => 
    !member.desg.toLowerCase().includes('developer') && !member.desg.toLowerCase().includes('designer')
  );

  return (
    <div>
      <button {...getToggleProps({ onClick: () => setExpanded(!isExpanded) })}>
        {title}
      </button>
      <div {...getCollapseProps()}>
        <div className="text-center pt-5 text-white">
          <label htmlFor="year-select" className="text-xl font-bold">
            Select Year:
          </label>
          <select
            id="year-select"
            value={selectedYear}
            onChange={(e) => setSelectedYear(Number(e.target.value))}
            className="ml-2 p-2 border border-gray-300 rounded text-black"
          >
            {years.map((year) => (
              <option key={year} value={year}>
                {year}
              </option>
            ))}
          </select>
        </div>
        <div className='p-5 border border-blue-300 mt-5 rounded-lg bg-white/40'>

{/* Display Faculty Coordinators */}
{facultyCoordinators.length > 0 && (
          <>
            <h2
              data-aos="zoom-in-right"
              className="text-center text-neutral-900 text-xl font-bold underline"
              style={{ width: `100%`, marginTop: `0` }}
            >
              Professor In Charge
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6 items-center justify-evenly grid-flow-dense mx-auto pt-5 mb-16">
              {facultyCoordinators.map((member) => (
                <Webcard
                  key={member.email} // Adding key prop
                  name={member.name}
                  email={member.email}
                  extn={member.ext_no}
                  id={member.email}
                  interests={member.interests}
                  image={member.image}
                  desg={member.desg}
                  url={member.url}
                />
              ))}
            </div>
          </>
        )}

        {/* Display Developers/Designers */}
        {devAndDesigners.length > 0 && (
          <>
            <h2 className="text-center text-neutral-900 text-xl font-bold underline" style={{ width: `100%`, marginTop: `0` }}>
              Members
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6 items-center justify-evenly grid-flow-dense mx-auto pt-5 mb-16">
              {devAndDesigners.map((member) => (
                <Webcard
                  key={member.email} // Adding key prop
                  name={member.name}
                  email={member.email}
                  extn={member.ext_no}
                  id={member.email}
                  interests={member.interests}
                  image={member.image}
                  desg={member.desg}
                  url={member.url}
                />
              ))}
              
            </div>
          </>
        )}
</div>
        
      </div>
    </div>
  );
};


export default Collapsible;
