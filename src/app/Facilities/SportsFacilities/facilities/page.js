"use client"
import react, { useState } from 'react';
import SideBar from '../../../../components/sportsComponents/SideBar';
import FacilitiesComp from '../../../../components/sportsComponents/FacilitiesComp';

function Page() {
  const [outdoor, setOutdoor] = useState(true);
  const [indoor, setIndoor] = useState(false);
  return (
    <div className='flex flex-col-reverse md:flex-row px-2 md:px-16 lg:px-16 mt-10 md:justify-between md:gap-0 w-full mb-8'>
      <div className='mt-6 md:mt-0 '>
        <SideBar />
      </div>
      <div className='flex flex-col md:w-3/4 '>
        <div className="mb-10 flex space-x-1 max-sm:text-[14px] mx-auto w-2/3">
          <button onClick={() => {
            setOutdoor(true);
            setIndoor(false);
          }} className={`border border-black rounded p-2 ${(outdoor) ? "text-white bg-red-900" : "text-red-900"} px-2`}>Outdoor games</button>
          <button onClick={() => {
            setOutdoor(false);
            setIndoor(true);
          }} className={`border p-2 border-black rounded ${(indoor) ? "text-white bg-red-900" : "text-red-900"} px-2`}>Indoor games</button>
        </div>
        {/* for outdoor sports */}

        <div className={`mb-10 ${(outdoor == false) ? "hidden" : ""}`}>
          <FacilitiesComp
            text={"Volleyball court(with flood lights)"}
            url={"https://i.postimg.cc/d1QTjZhp/89998956-2599539480301340-8857950519889494016-n.jpg"}
          />
          <FacilitiesComp
            text={"Cricket"}
            url={"https://i.postimg.cc/qRcjz39F/89839880-2599552693633352-6152328188077801472-n.jpg"}
          />
          <FacilitiesComp
            text={"Yoga"}
            url={"https://i.postimg.cc/zXXpkynK/DSC09197.jpg"}
          />
          <FacilitiesComp
            text={"Atheletics"}
            url={"https://i.postimg.cc/gcV3zX9w/81423529-2526969944224961-1583432641057652736-n.jpg"}
          />
          <FacilitiesComp
            text={"Football"}
            url={""}
          />
        </div>
        {/* for indoor sports */}

        <div className={`mb-10 ${(indoor == false) ? "hidden" : ""}`}>
        <FacilitiesComp
            text={"Gym"}
            url={"https://i.postimg.cc/sgZPMWWJ/DSC09080.jpg"}
          />
        <FacilitiesComp
            text={"Badminton (three courts)"}
            url={"https://i.postimg.cc/VNmSz0Wv/DSC09088.jpg"}
          />
        <FacilitiesComp
            text={"Table tennis"}
            url={"https://i.postimg.cc/rmhRnyWm/DSC09083.jpg"}
          />
        <FacilitiesComp
            text={"Chess"}
            url={"https://i.postimg.cc/d3yH3qYs/DSC-1195.jpg"}
          />
        </div>

      </div>
    </div>
  )
}

export default Page