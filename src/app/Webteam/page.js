"use client"
import { useEffect, useState } from "react"
import axios from "axios"
import React from "react"
import Webcard from "../components/Webteam/Webcard"
import "./wpage.css"

const years = [20241]

const Webteam = () => {
 const [webteam, setWebteam] = useState([])
 const [filteredteam, setFilteredteam] = useState([])
 const [view, setView] = useState("maintainers")
 const [year, setYear] = useState(20241)
 let webteamUrl = `${process.env.NEXT_PUBLIC_BACKEND_API_URL}/api/webteam`

 useEffect(() => {
  axios
   .get(webteamUrl)
   .then(res => {
    const web = res.data
    setWebteam(web)
    let filtered = web.filter(member => {
     return member.year === year
    })
    setFilteredteam(filtered)
   })
   .catch(e => {
    console.log(e)
   })
 }, [year, webteamUrl])

 return (
  <>
     <div className="webteam-page text-black pr-5 pl-5 md:pr-28 md:pl-28">
      <div className="layoutrow layoutrowmain">
       <div className="col-6" style={{ width: `100%` }}>
        <div className="row rowmarl3 text-center pt-5 pb-4">
         <h1 data-aos="zoom-in-right" className="text-4xl text-red-800 font-extrabold">Web Team</h1>
        </div>
        <div className="row rowmarl3 text-center">
         <h2 data-aos="zoom-in-right" className="text-2xl font-semibold">
          The Team behind the website of NIT Patna
         </h2>
        </div>
       </div>
       <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-5 gap-5 md:gap-6 items-center justify-center grid-flow-dense mx-auto">
       </div>

       <>
        <div className="">
         <div className="">
          <h2 data-aos="zoom-in-right" className="text-center text-red-900 text-2xl font-bold pt-5" style={{ width: `100%`, marginTop: `0` }}>
           Student Volunteers
          </h2>

          <h3
             style={{
              padding: `0.25rem 0`,
              borderBottom: `2px red dotted`,
              width: `fit-content`,
              margin: `0`,
             }}
            >
             Previous Student Volunteers
            </h3>
         </div>
         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6 items-center justify-evenly grid-flow-dense mx-auto pt-5 mb-16">
         {filteredteam &&
          filteredteam
           .filter(member => member.role === "volunteer")
           .map(member => (
            <Webcard
             key={member.email}  // Adding key prop
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
        </div>
       </>
      </div>

       <>
        <div className="row rowmarl3">
         <h2 data-aos="zoom-in-right">Faculties/Officers Involved</h2>
        </div>
        <div className="col-6">
         <div className="row layoutrow">
          <div className="row rowmarl3">
           <h2 data-aos="zoom-in-right">PI Website</h2>
          </div>
          <div className="row grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-5 md:gap-6 items-center justify-center grid-flow-dense mx-auto pt-5 mb-16">
           {filteredteam &&
            filteredteam
             .filter(member => member.role === "pi")
             .map(member => (
              <Webcard
               key={member.email}  // Adding key prop
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
         </div>
        </div>
        {view === "maintainers" && (
         <div className="row layoutrow">
          <div className="row rowmarl3">
           <h2 data-aos="zoom-in-right">PI IT Services</h2>
          </div>
          <div className="row grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-5 md:gap-6 items-center justify-center grid-flow-dense mx-auto pt-5 mb-16">
           {filteredteam &&
            filteredteam
             .filter(member => member.role === "pi-it")
             .map(member => (
              <Webcard
               key={member.email}  // Adding key prop
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
         </div>
        )}

        {view === "maintainers" && (
         <div className="row layoutrow">
          <div className="row rowmarl3">
           <h2 data-aos="zoom-in-right">Scientific Officer</h2>
          </div>
          <div className="row grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-5 md:gap-6 items-center justify-center grid-flow-dense mx-auto pt-5 mb-16">
           {filteredteam &&
            filteredteam
             .filter(member => member.role === "scientificofficer")
             .map(member => (
              <Webcard
               key={member.email}  // Adding key prop
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
         </div>
        )}
       </>
     </div>
  </>
 )
}

export default Webteam
