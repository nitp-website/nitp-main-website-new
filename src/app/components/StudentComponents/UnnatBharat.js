"use client"
import { useState } from "react"
import Title from "../faculty/Title"
import React from 'react'

const UnnatBharat = () => {
    const [state, setstate] = useState("Visions");
  const tags = ["Visions", "Missions", "Goals", "RCIs", "Participating institute", "Adopted Villages"]
  const adoptedVillages = [
    { slNo: 1, village: "Sabalpur", district: "Patna" },
    { slNo: 2, village: "Juthli", district: "Patna" },
    { slNo: 3, village: "Panapur", district: "Patna" },
    { slNo: 4, village: "Nakta Diara", district: "Patna" },
    { slNo: 5, village: "Nadauri", district: "Patna" },
  ];
  return (
    <div>
      {/* phone view  */}
      <div className="block md:hidden ">
        <div className="flex flex-col gap-8">
          <div className="flex flex-wrap justify-center items-center ">
            {
              tags.map((item, i) => {
                return <span key={i} className={`m-2 p-2  cursor-pointer rounded-lg ${state === item ? "bg-red-300 text-black" : "bg-red-700 text-white"}`} onClick={() => setstate(item)}>{item}</span>
              })
            }
          </div>
          <div className=" flex flex-col">
            {
              state === "Visions" ?
                <>
                  <Title title={state} />
                  <div className="border shadow-xl w-full h-[70vh] p-3 text-md font-semibold">
                    Unnat Bharat Abhiyan is inspired by the vision of transformational change in rural development processes by leveraging knowledge institutions to help build the architecture of an Inclusive India.
                  </div>
                </>
                :
                <></>
            }
            {
              state === "Missions" ?
                <>
                  <Title title={"Missions"} />
                  <div className="border shadow-xl w-full h-[70vh] p-3 text-md font-semibold">
                    The Mission of Unnat Bharat Abhiyan is to enable higher educational institutions to work with the people of rural India in identifying development challenges and evolving appropriate solutions for accelerating sustainable growth. It also aims to create a virtuous cycle between society and an inclusive academic system by providing knowledge and practices for emerging professions and to upgrade the capabilities of both the public and the private sectors in responding to the development needs of rural India.
                  </div>
                </>
                :
                <></>
            }
            {
              state === "Goals" ?
                <>
                  <Title title={"Goals"} />
                  <div className="border shadow-xl w-full full p-3 text-md font-semibold">
                    <ul className="flex-col list-disc gap-2 p-3">
                      <li >To build an understanding of the development agenda within institutes of Higher Education and an institutional capacity and training relevant to national needs, especially those of rural India.</li>
                      <li>To re-emphasize the need for field work, stake-holder interactions and design for societal objectives as the basis of higher education.</li>
                      <li>To stress on rigorous reporting and useful outputs as central to developing new professions.</li>
                      <li>To provide rural India and regional agencies with access to the professional resources of the institutes of higher education, especially those that have acquired academic credentials in the field of science, engineering and technology, and management</li>
                      <li>To improve development outcomes as a consequence of this research. To develop new professions and practices which are beneficial to the country.</li>
                    </ul>
                  </div>
                </>
                :
                <></>
            }
            {
              state ==="RCIs" ?
                <>
                  <Title title={"The Regional Coordinating Institutions (RCIs)"} />
                  <div className="border shadow-xl w-full h-[80vh] p-3 text-md font-semibold">
                  The Regional Coordinating Institutions (RCIs) are identified on the basis of their earlier experience and infrastructural competence etc. Our institute is also identified as Regional Coordinating Institute in Bihar and we have 42 Participating Institutes (PIs) under our region. NIT Patna acts as a nodal center for promoting and facilitating the UBA network in the region. We are responsible for grooming the other participating institutions in their region in addition to carrying out our own village cluster activities. As RCI, we have our own login credentials to view and review the work of PIs in our region. Additionally, the RCIs have a strategic role to play, they have to identify a challenge relevant in their region / states in collaboration with PIs and the State government.
                  </div>
                </>
                :
                <></>
            }
            {
              state === "Participating institute" ?
                <>
                  <Title title={"Participating institute"} />
                  <div className="border shadow-xl w-full h-[80vh] p-3 text-md font-semibold">
                  As per the guidelines of Unnat Bharat Abhiyan (UBA), each participating institute (PI) must adopt five rural villages in their region. The role of the participating institute is to use simple and people-friendly technology to uplift their socio-economic status with the use of available human resources and natural resources in the adopted villages. Our institute has also adopted five rural villages and is giving its best for their well-being. The details of these adopted villages are given below.
                  </div>
                </>
                :
                <></>
            }
            {
              state === "Adopted Villages" ?
                <>
                  <Title title={"Adopted Villages"} />
                  <div className="border shadow-xl w-full h-[80vh] p-3 text-md font-semibold"></div>
                  <table className="w-full bg-white border border-gray-300">
                    <thead>
                      <tr>
                        <th className="py-2 px-4 border-b text-red-950">SL No.</th>
                        <th className="py-2 px-4 border-b text-red-950">Adopted Village</th>
                        <th className="py-2 px-4 border-b text-red-950">District</th>
                      </tr>
                    </thead>
                    <tbody>
                      {adoptedVillages.map((village) => (
                        <tr key={village.slNo} >
                          <td className="py-2 px-4 border-b text-center text-black">{village.slNo}</td>
                          <td className="py-2 px-4 border-b text-center text-black">{village.village}</td>
                          <td className="py-2 px-4 border-b text-center text-black">{village.district}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                  
                </>
                :
                <></>
            }

          </div>

        </div>
</div>
      
      <div className="md:block hidden">
        <div className="flex">
          <div className="flex flex-col justify-center  ">
            {
              tags.map((item, i) => {
                return <span key={i} className={`m-2 p-2 w-[150px] cursor-pointer text-sm font-bold border-2px shadow-md ${state === item ? "bg-red-300 text-black" : "bg-red-700 text-white"}`} onClick={() => setstate(item)}>{item}</span>
              })
            }
          </div>
          <div className="ml-8 flex flex-col">
            {
              state === "Visions" ?
                <>
                  <Title title={state} />
                  <div className="border shadow-xl w-full h-[60vh] p-3 text-md font-semibold">
                    Unnat Bharat Abhiyan is inspired by the vision of transformational change in rural development processes by leveraging knowledge institutions to help build the architecture of an Inclusive India.
                  </div>
                </>
                :
                <></>
            }
            {
              state === "Missions" ?
                <>
                  <Title title={"Missions"} />
                  <div className="border shadow-xl w-full h-[60vh] p-3 text-md font-semibold">
                    The Mission of Unnat Bharat Abhiyan is to enable higher educational institutions to work with the people of rural India in identifying development challenges and evolving appropriate solutions for accelerating sustainable growth. It also aims to create a virtuous cycle between society and an inclusive academic system by providing knowledge and practices for emerging professions and to upgrade the capabilities of both the public and the private sectors in responding to the development needs of rural India.
                  </div>
                </>
                :
                <></>
            }
            {
              state === "Goals" ?
                <>
                  <Title title={"Goals"} />
                  <div className="border shadow-xl w-full h-[80vh] p-3 text-md font-semibold">
                    <ul className="flex-col list-disc gap-2 px-3">
                      <li >To build an understanding of the development agenda within institutes of Higher Education and an institutional capacity and training relevant to national needs, especially those of rural India.</li>
                      <li>To re-emphasize the need for field work, stake-holder interactions and design for societal objectives as the basis of higher education.</li>
                      <li>To stress on rigorous reporting and useful outputs as central to developing new professions.</li>
                      <li>To provide rural India and regional agencies with access to the professional resources of the institutes of higher education, especially those that have acquired academic credentials in the field of science, engineering and technology, and management</li>
                      <li>To improve development outcomes as a consequence of this research. To develop new professions and practices which are beneficial to the country.</li>
                    </ul>
                  </div>
                </>
                :
                <></>
            }
            {
              state ==="RCIs" ?
                <>
                  <Title title={"The Regional Coordinating Institutions (RCIs)"} />
                  <div className="border shadow-xl w-full h-[60vh] p-3 text-md font-semibold">
                  The Regional Coordinating Institutions (RCIs) are identified on the basis of their earlier experience and infrastructural competence etc. Our institute is also identified as Regional Coordinating Institute in Bihar and we have 42 Participating Institutes (PIs) under our region. NIT Patna acts as a nodal center for promoting and facilitating the UBA network in the region. We are responsible for grooming the other participating institutions in their region in addition to carrying out our own village cluster activities. As RCI, we have our own login credentials to view and review the work of PIs in our region. Additionally, the RCIs have a strategic role to play, they have to identify a challenge relevant in their region / states in collaboration with PIs and the State government.
                  </div>
                </>
                :
                <></>
            }
            {
              state === "Participating institute" ?
                <>
                  <Title title={"Participating institute"} />
                  <div className="border shadow-xl w-full h-[40vh] p-3 text-md font-semibold">
                  As per the guidelines of Unnat Bharat Abhiyan (UBA), each participating institute (PI) must adopt five rural villages in their region. The role of the participating institute is to use simple and people-friendly technology to uplift their socio-economic status with the use of available human resources and natural resources in the adopted villages. Our institute has also adopted five rural villages and is giving its best for their well-being. The details of these adopted villages are given below.
                  </div>
                </>
                :
                <></>
            }
            {
              state === "Adopted Villages" ?
                <>
                  <Title title={"Adopted Villages"} />
                  <div className="border shadow-xl w-full h-[60vh] p-3 text-md font-semibold">
                  <table className="w-full bg-white border border-gray-300">
                    <thead>
                      <tr>
                        <th className="py-2 px-4 border-b text-red-950">SL No.</th>
                        <th className="py-2 px-4 border-b text-red-950">Adopted Village</th>
                        <th className="py-2 px-4 border-b text-red-950">District</th>
                      </tr>
                    </thead>
                    <tbody>
                      {adoptedVillages.map((village) => (
                        <tr key={village.slNo} >
                          <td className="py-2 px-4 border-b text-center text-black">{village.slNo}</td>
                          <td className="py-2 px-4 border-b text-center text-black">{village.village}</td>
                          <td className="py-2 px-4 border-b text-center text-black">{village.district}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                  </div>
                </>
                :
                <></>
            }

          </div>
        </div>

      </div>
    </div>
  )
}

export default UnnatBharat
