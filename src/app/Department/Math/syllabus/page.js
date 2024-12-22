'use client'

import BackDepartment from "../../../components/department/BackDepartment"
import { useState } from 'react'

export default function Page() {
  const [ug, setUg] = useState(true)
  // const [pg, setPg] = useState(false)
  const [dual, setdual] = useState(false)
  const [phd, setphd] = useState(false)
  return (
    <div className=" flex flex-col p-10 max-sm:p-2 text-black">
      <div className="flex flex-col ">
        <div>
          <p className="text-red-900 text-xl lg:text-2xl font-bold">
            SYLLABUS
          </p>
        </div>
        <div className="lg:mt-2">
          <p className="text-gray-500 text-sm lg:text-base font-semibold">
          Mathematics and Computing Technology
          </p>
        </div>
      </div>
      <BackDepartment navigate={"/Department/Math"}/>
    <div className="mx-4 border p-4 rounded-md shadow-lg shadow-slate-400 backdrop-blur-md">
      <div className="mb-10 flex space-x-1">
        <button
          onClick={() => {
            setUg(true)
            // setPg(false)
            setdual(false)
            setphd(false)
          }}
          className={`border border-black rounded ${ug ? 'text-white bg-red-900' : 'text-red-900'
            } px-2`}
        >
          IMSc. Courses
        </button>
        {/* <button
          onClick={() => {
            setUg(false)
            // setPg(true)
            setdual(false)
            setphd(false)
          }}
          className={`border border-black rounded ${
            pg ? 'text-white bg-red-900' : 'text-red-900'
          } px-2`}
        >
          PG (M.Tech/MURP) Course
        </button> */}
        <button
          onClick={() => {
            setUg(false)
            // setPg(false)
            setdual(false)
            setphd(true)
          }}
          className={`border border-black rounded ${phd ? 'text-white bg-red-900' : 'text-red-900'
            } px-2`}
        >
          PhD Courses
        </button>
        <button
          onClick={() => {
            setUg(false)
            // setPg(false)
            setdual(true)
            setphd(false)
          }}
          className={`border border-black rounded ${dual ? 'text-white bg-red-900' : 'text-red-900'
            } px-2`}
        >
          Dual Degree(B.tech+M.tech)
        </button>
      </div>
      {/* UG PROGRAM */}
      <div className={`mb-10 ${ug == false ? 'hidden' : ''}`}>
        <div className="text-red-900 font-semibold lg:text-2xl text-xl mb-8">
          UG PROGRAM :-
        </div>
        <div className="border grid grid-cols-12">
          <div className="col-span-2 border border-black flex flex-col justify-center text-red-900 font-semibold pl-4 py-2">
            Course Code
          </div>
          <div className="col-span-4 border border-black flex flex-col justify-center text-red-900 font-semibold pl-4 py-2">
            Course Title
          </div>
          <div className="col-span-1 border border-black flex flex-col justify-center text-red-900 font-semibold pl-4 py-2">
            L
          </div>
          <div className="col-span-1 border border-black flex flex-col justify-center text-red-900 font-semibold pl-4 py-2">
            T
          </div>
          <div className="col-span-1 border border-black flex flex-col justify-center text-red-900 font-semibold pl-4 py-2">
            P
          </div>
          <div className="col-span-1 border border-black flex flex-col justify-center text-red-900 font-semibold pl-4 py-2">
            Credits
          </div>
          <div className="col-span-1 border border-black flex flex-col justify-center text-red-900 font-semibold pl-4 py-2">
            Dept.
          </div>
          <div className="col-span-1 border border-black flex flex-col justify-center text-red-900 font-semibold pl-4 py-2">
            Type
          </div>
          <SyllabusComp
            dep={'HSS'}
            sem={''}
            code={'HS1701'}
            title={'Communicative English'}
            L={'2'}
            T={'1'}
            P={'0'}
            cred={'3'}
            type={'Foundation'}
          />
          <SyllabusComp
            dep={'HSS'}
            sem={''}
            code={'HSL1701'}
            title={'Language Lab'}
            L={'0'}
            T={'0'}
            P={'3'}
            cred={'1'}
            type={'Lab'}
          />
          <SyllabusComp
            dep={'MA'}
            sem={''}
            code={'MA1701'}
            title={'Mathematics-I'}
            L={'3'}
            T={'0'}
            P={'0'}
            cred={'3'}
            type={'Foundation'}
          />
          <SyllabusComp
            dep={'PH'}
            sem={''}
            code={'PH1701'}
            title={'Engineering Physics'}
            L={'3'}
            T={'0'}
            P={'0'}
            cred={'3'}
            type={'Foundation'}
          />
          <SyllabusComp
            dep={'PH'}
            sem={''}
            code={'PHL1701'}
            title={'Physics Lab'}
            L={'0'}
            T={'0'}
            P={'3'}
            cred={'1'}
            type={'Lab'}
          />
          <SyllabusComp
            dep={'CSE'}
            sem={''}
            code={'CS1701'}
            title={'Introduction To Computing'}
            L={'3'}
            T={'0'}
            P={'0'}
            cred={'3'}
            type={'Foundation'}
          />
          <SyllabusComp
            dep={'CSE'}
            sem={''}
            code={'CSL1701'}
            title={'Computing Lab'}
            L={'0'}
            T={'0'}
            P={'3'}
            cred={'1'}
            type={'Lab'}
          />
          <SyllabusComp
            dep={'CE'}
            sem={''}
            code={'CE1701'}
            title={'Engineering Mechanics'}
            L={'2'}
            T={'1'}
            P={'0'}
            cred={'3'}
            type={'Foundation'}
          />
          <SyllabusComp
            dep={'ME'}
            sem={''}
            code={'MEL1701'}
            title={'Workshop Practice'}
            L={'0'}
            T={'0'}
            P={'3'}
            cred={'1'}
            type={'Lab'}
          />
          <SyllabusComp
            dep={'MA/SAC'}
            sem={''}
            code={'EAA1701'}
            title={'EAA-Swachha Bharat Mission'}
            L={'0'}
            T={'0'}
            P={'3'}
            cred={'1'}
            type={'Lab'}
          />
           <SyllabusComp
            dep={'-'}
            sem={''}
            code={''}
            title={'Total Credit'}
            L={'13'}
            T={'2'}
            P={'15'}
            cred={'20'}
            type={'-'}
          />

          <SyllabusComp
            dep={'HSS'}
            sem={''}
            code={'HS2701'}
            title={'Science, Society and Ethical Values'}
            L={'1'}
            T={'1'}
            P={'0'}
            cred={'3'}
            type={'Foundation'}
          />
          <SyllabusComp
            dep={'MA'}
            sem={''}
            code={'MA2701'}
            title={'Mathematics II'}
            L={'3'}
            T={'0'}
            P={'0'}
            cred={'3'}
            type={'Foundation'}
          />
          <SyllabusComp
            dep={'CH'}
            sem={''}
            code={'CH2701'}
            title={'Engineering Chemistry'}
            L={'3'}
            T={'0'}
            P={'0'}
            cred={'3'}
            type={'Foundation'}
          />
          <SyllabusComp
            dep={'CH'}
            sem={''}
            code={'CHL2701'}
            title={'Chemistry Lab'}
            L={'0'}
            T={'0'}
            P={'3'}
            cred={'1'}
            type={'Lab'}
          />
          <SyllabusComp
            dep={'ME'}
            sem={''}
            code={'ME2701'}
            title={'Engineering Graphics'}
            L={'2'}
            T={'0'}
            P={'0'}
            cred={'2'}
            type={'Lab'}
          />
          <SyllabusComp
            dep={'ME'}
            sem={''}
            code={'MEL2701'}
            title={'Engineering Graphics Lab'}
            L={'0'}
            T={'0'}
            P={'3'}
            cred={'1'}
            type={'Lab'}
          />
          <SyllabusComp
            dep={'MA'}
            sem={''}
            code={'MA2702'}
            title={'Complex Variable and Partial Differential Equation'}
            L={'3'}
            T={'0'}
            P={'0'}
            cred={'3'}
            type={'Core'}
          />
          <SyllabusComp
            dep={'PH'}
            sem={''}
            code={'PH2701'}
            title={'Continuum Mechanics'}
            L={'3'}
            T={'0'}
            P={'0'}
            cred={'3'}
            type={'Foundation'}
          />
          <SyllabusComp
            dep={'PH'}
            sem={''}
            code={'PHL2701'}
            title={'Continuum Mechanics Lab(Physics)'}
            L={'0'}
            T={'0'}
            P={'3'}
            cred={'1'}
            type={'Lab'}
          />
          <SyllabusComp
            dep={'MA/IC/SAC'}
            sem={''}
            code={'EAA2701'}
            title={'EAA-Sports/Icovation Project'}
            L={'0'}
            T={'0'}
            P={'3'}
            cred={'1'}
            type={'Lab'}
          />
            <SyllabusComp
            dep={'-'}
            sem={''}
            code={''}
            title={'Total credit'}
            L={'16'}
            T={'1'}
            P={'12'}
            cred={'21'}
            type={'-'}
          />


          <SyllabusComp
            dep={'MA'}
            sem={''}
            code={'MA3701'}
            title={'Discrete Mathematics'}
            L={'3'}
            T={'1'}
            P={'0'}
            cred={'4'}
            url={'https://web.nitp.ac.in/dept/math/syllabus/MA3701.docx'}
            type={'Core'}
          />
          <SyllabusComp
            dep={'MA'}
            sem={''}
            code={'MA3702'}
            title={'Analysis-I'}
            L={'3'}
            T={'1'}
            P={'0'}
            cred={'4'}
            url={'https://web.nitp.ac.in/dept/math/syllabus/MA3702.docx'}
            type={'Core'}
          />
          <SyllabusComp
            dep={'MA'}
            sem={''}
            code={'MA3703'}
            title={'Algebra-I'}
            L={'3'}
            T={'1'}
            P={'0'}
            cred={'4'}
            url={'https://web.nitp.ac.in/dept/math/syllabus/MA3703.docx'}
            type={'Core'}
          />
          <SyllabusComp
            dep={'CSE'}
            sem={''}
            code={'CS3701'}
            title={'Object oriented Methodology'}
            L={'3'}
            T={'0'}
            P={'0'}
            cred={'3'}
            url={'https://web.nitp.ac.in/dept/math/syllabus/CS3701.docx'}
            type={'Foundation'}
          />
          <SyllabusComp
            dep={'CSE'}
            sem={''}
            code={'CSL3701'}
            title={'Object oriented Methodology lab'}
            L={'0'}
            T={'0'}
            P={'3'}
            cred={'1'}
            url={'https://web.nitp.ac.in/dept/math/syllabus/CSL3701.docx'}
            type={'Lab'}
          />
          <SyllabusComp
            dep={'HSS'}
            sem={''}
            code={'HS3701'}
            title={'Industrial Economics and Financial Management'}
            L={'3'}
            T={'0'}
            P={'0'}
            cred={'3'}
            url={'https://web.nitp.ac.in/dept/math/syllabus/HS3701.docx'}
            type={'Foundation'}
          />
           <SyllabusComp
            dep={'-'}
            sem={''}
            code={''}
            title={'Total credit'}
            L={'15'}
            T={'3'}
            P={'3'}
            cred={'19'}
            type={'-'}
           
          />
          <SyllabusComp
            dep={'MA'}
            sem={''}
            code={'MA4701'}
            title={'Probability & Statistics'}
            L={'3'}
            T={'1'}
            P={'0'}
            cred={'4'}
            url={'https://web.nitp.ac.in/dept/math/syllabus/MA4701.docx'}
            type={'Core'}
          />

          <SyllabusComp
            dep={'MA'}
            sem={''}
            code={'MA4702'}
            title={'Theory of Linear Algebra'}
            L={'3'}
            T={'1'}
            P={'0'}
            cred={'4'}
            url={'https://web.nitp.ac.in/dept/math/syllabus/MA4702.docx'}
            type={'Core'}
          />
          <SyllabusComp
            dep={'MA'}
            sem={''}
            code={'MA4703'}
            title={'Ordinary Differential Equation'}
            L={'3'}
            T={'1'}
            P={'0'}
            cred={'4'}
            url={'https://web.nitp.ac.in/dept/math/syllabus/MA4703.docx'}
            type={'Core'}
          />
          <SyllabusComp
            dep={'MA'}
            sem={''}
            code={'MA4704'}
            title={'Introduction to Data Structures and Algorithms'}
            L={'3'}
            T={'0'}
            P={'0'}
            cred={'3'}
            url={'https://web.nitp.ac.in/dept/math/syllabus/MA4704.docx'}
            type={'Core'}
          />
          <SyllabusComp
            dep={'MA'}
            sem={''}
            code={'MAL4701'}
            title={'Data Structure and Algorithms Lab'}
            L={'0'}
            T={'0'}
            P={'3'}
            cred={'1'}
            url={'https://web.nitp.ac.in/dept/math/syllabus/MAL4701.docx'}
            type={'Lab'}
          />
          <SyllabusComp
            dep={'Other'}
            sem={''}
            code={'OE****'}
            title={'Open Elective-I'}
            L={'3'}
            T={'0'}
            P={'0'}
            cred={'3'}
            url={''}
            type={'OE'}
          />
             <SyllabusComp
            dep={'-'}
            sem={''}
            code={''}
            title={'Total Credit'}
            L={'15'}
            T={'3'}
            P={'3'}
            cred={'19'}
            url={''}
            type={'='}
          />


          <SyllabusComp
            dep={'MA'}
            sem={''}
            code={'MA5701'}
            title={'Topology'}
            L={'3'}
            T={'1'}
            P={'0'}
            cred={'4'}
            url={'https://web.nitp.ac.in/dept/math/syllabus/MAL4701.docx'}
            type={'Core'}
          />
          <SyllabusComp
            dep={'MA'}
            sem={''}
            code={'MA5702'}
            title={'Analysis-II'}
            L={'3'}
            T={'1'}
            P={'0'}
            cred={'4'}
            url={'https://web.nitp.ac.in/dept/math/syllabus/MA5702.docx'}
            type={'Core'}
          />
          <SyllabusComp
            dep={'MA'}
            sem={''}
            code={'MA5703'}
            title={'Mathematical Methods-I'}
            L={'3'}
            T={'1'}
            P={'0'}
            cred={'4'}
            url={'https://web.nitp.ac.in/dept/math/syllabus/MA5703.docx'}
            type={'Core'}
          />
          <SyllabusComp
            dep={'MA'}
            sem={''}
            code={'MA5704'}
            title={'Functional Analysis'}
            L={'3'}
            T={'1'}
            P={'0'}
            cred={'4'}
            url={'https://web.nitp.ac.in/dept/math/syllabus/MA5704.docx'}
            type={'Core'}
          />
          <SyllabusComp
            dep={'MA'}
            sem={''}
            code={'MA5705'}
            title={'Numerical Analysis'}
            L={'3'}
            T={'1'}
            P={'0'}
            cred={'4'}
            url={'https://web.nitp.ac.in/dept/math/syllabus/MA5705.docx'}
            type={'Core'}
          />
          <SyllabusComp
            dep={'MA'}
            sem={''}
            code={'MAL5705'}
            title={'Numerical Analysis Lab'}
            L={'0'}
            T={'0'}
            P={'3'}
            cred={'1'}
            url={'https://web.nitp.ac.in/dept/math/syllabus/MA5705.docx'}
            type={'Lab'}
          />
          
          <SyllabusComp
            dep={'-'}
            sem={''}
            code={''}
            title={'Total credit'}
            L={'15'}
            T={'5'}
            P={'3'}
            cred={'21'}
            url={''}
            type={'-'}
          />

          <SyllabusComp
            dep={'MA'}
            sem={''}
            code={'MA6701'}
            title={'Linear Programming Problem and Game Theory'}
            L={'3'}
            T={'1'}
            P={'0'}
            cred={'4'}
            url={'https://web.nitp.ac.in/dept/math/syllabus/MA6701.docx'}
            type={'Core'}
          />
          <SyllabusComp
            dep={'MA'}
            sem={''}
            code={'MA6702'}
            title={'Measure Theory and Integration'}
            L={'3'}
            T={'1'}
            P={'0'}
            cred={'4'}
            url={'https://web.nitp.ac.in/dept/math/syllabus/MA6702.docx'}
            type={'Core'}
          />
          <SyllabusComp
            dep={'MA'}
            sem={''}
            code={'MA6703'}
            title={'Seminar'}
            L={'0'}
            T={'0'}
            P={'6'}
            cred={'2'}
            type={'Seminar'}
          />
          <SyllabusComp
            dep={'MA'}
            sem={''}
            code={'MA****'}
            title={'Elective-I'}
            L={'3'}
            T={'0'}
            P={'0'}
            cred={'3'}
            type={'Dept. Elective'}
          />
          <SyllabusComp
            dep={'MA'}
            sem={''}
            code={'MA****'}
            title={'Elective-II'}
            L={'3'}
            T={'0'}
            P={'0'}
            cred={'3'}
            type={'Dept. Elective'}
          />
          <SyllabusComp
            dep={'Other'}
            sem={''}
            code={'OE****'}
            title={'Open Elective-II'}
            L={'3'}
            T={'0'}
            P={'0'}
            cred={'3'}
            type={'OE'}
          />
            <SyllabusComp
            dep={'-'}
            sem={''}
            code={''}
            title={'Total credit'}
            L={'12'}
            T={'2'}
            P={'6'}
            cred={'19'}
            type={'-'}
          />

          <SyllabusComp
            dep={'MA'}
            sem={''}
            code={'MA7701'}
            title={'Integral Equation and Calculus of Variation'}
            L={'3'}
            T={'1'}
            P={'0'}
            cred={'4'}
            type={'Core'}
          />
          <SyllabusComp
            dep={'MA'}
            sem={''}
            code={'MA7702'}
            title={'Numerical Solutions of Ordinary and Partial Differentiation Equations'}
            L={'3'}
            T={'1'}
            P={'0'}
            cred={'4'}
            url={'https://web.nitp.ac.in/dept/math/syllabus/MA7702.docx'}
            type={'Core'}
          />
          <SyllabusComp
            dep={'MA'}
            sem={''}
            code={'MAL7701'}
            title={'Numerical ODE and PDE Lab'}
            L={'0'}
            T={'0'}
            P={'3'}
            cred={'1'}
            url={'https://web.nitp.ac.in/dept/math/syllabus/MAL7701.docx'}
            type={'Lab'}
            
          />
          <SyllabusComp
            dep={'MA'}
            sem={''}
            code={'MA****'}
            title={'Elective-III'}
            L={'3'}
            T={'0'}
            P={'0'}
            cred={'3'}
            type={'Dept. Elective'}
          />
          <SyllabusComp
            dep={'MA'}
            sem={''}
            code={'MA****'}
            title={'Elective-IV'}
            L={'3'}
            T={'0'}
            P={'0'}
            cred={'3'}
            type={'Dept. Elective'}
          />
          <SyllabusComp
            dep={'Other'}
            sem={''}
            code={'OE****'}
            title={'Open Elective-III'}
            L={'3'}
            T={'0'}
            P={'0'}
            cred={'3'}
            type={'OE'}
          />
            <SyllabusComp
            dep={'-'}
            sem={''}
            code={''}
            title={'Total credit'}
            L={'15'}
            T={'2'}
            P={'3'}
            cred={'18'}
            type={'-'}
          />


          <SyllabusComp
            dep={'MA'}
            sem={''}
            code={'MA8701'}
            title={'Theory of Computation'}
            L={'3'}
            T={'1'}
            P={'0'}
            cred={'4'}
            url={'https://web.nitp.ac.in/dept/math/syllabus/MA8701.docx'}
            type={'Core'}
          />
          <SyllabusComp
            dep={'MA'}
            sem={''}
            code={'MA8702'}
            title={'Complex Analysis'}
            L={'3'}
            T={'1'}
            P={'0'}
            cred={'4'}
            url={'https://web.nitp.ac.in/dept/math/syllabus/MA8702.docx'}
            type={'Core'}
          />
          <SyllabusComp
            dep={'MA'}
            sem={''}
            code={'MA****'}
            title={'Elective-V'}
            L={'3'}
            T={'0'}
            P={'0'}
            cred={'3'}
            type={'Dept. Elective'}
          />
          <SyllabusComp
            dep={'MA'}
            sem={''}
            code={'MA****'}
            title={'Elective-VI'}
            L={'3'}
            T={'0'}
            P={'0'}
            cred={'3'}
            type={'Dept. Elective'}
          />
          <SyllabusComp
            dep={'MA'}
            sem={''}
            code={'MA8703'}
            title={'Minor Project'}
            L={'0'}
            T={'0'}
            P={'6'}
            cred={'4'}
            type={'Project'}
          />
          <SyllabusComp
            dep={'Other'}
            sem={''}
            code={'OE****'}
            title={'Open Elective-IV'}
            L={'3'}
            T={'0'}
            P={'0'}
            cred={'3'}
            type={'OE'}
          />
    <SyllabusComp
            dep={'-'}
            sem={''}
            code={''}
            title={'Total credit'}
            L={'15'}
            T={'2'}
            P={'6'}
            cred={'21'}
            type={'-'}
          />

          <SyllabusComp
            dep={'Online'}
            sem={''}
            code={'****'}
            title={'Electives/Open Elective/Swayam/MOOC course'}
            L={'0'}
            T={'3'}
            P={'0'}
            cred={'3'}
            type={'Online'}
          />
          <SyllabusComp
            dep={'MA'}
            sem={''}
            code={'MA9701'}
            title={'Seminar and Comprehensive Viva-I'}
            L={'0'}
            T={'0'}
            P={'6'}
            cred={'2'}
            type={'Seminar'}
          />
          <SyllabusComp
            dep={'MA'}
            sem={''}
            code={'MA9702'}
            title={'Thesis'}
            L={'0'}
            T={'0'}
            P={'48'}
            cred={'16'}
            type={'Project'}
          />
    <SyllabusComp
            dep={'-'}
            sem={''}
            code={''}
            title={'Total credit'}
            L={'0'}
            T={'3'}
            P={'54'}
            cred={'21'}
            type={'-'}
          />

          <SyllabusComp
            dep={'-'}
            sem={''}
            code={'****'}
            title={'Electives/Open Elective/Swayam/MOOC course'}
            L={'0'}
            T={'3'}
            P={'0'}
            cred={'3'}
            type={'Online'}
          />
          <SyllabusComp
            dep={'MA'}
            sem={''}
            code={'MA10701'}
            title={'Seminar and Comprehensive Viva-II'}
            L={'0'}
            T={'0'}
            P={'6'}
            cred={'2'}
            type={'Seminar'}
          />
          <SyllabusComp
            dep={'MA'}
            sem={''}
            code={'MA10702'}
            title={'Thesis'}
            L={'0'}
            T={'0'}
            P={'48'}
            cred={'16'}
            type={'Project'}
          />
             <SyllabusComp
            dep={'-'}
            sem={''}
            code={''}
            title={'Total credit'}
            L={'0'}
            T={'3'}
            P={'54'}
            cred={'21'}
            type={'-'}
          />
           </div>

          <div className="text-red-900 w-[170px]  font-semibold lg:text-2xl text-xl mb-8 mt-2">
            Electives -
          </div>
          <div className="border grid grid-cols-10">
          <div className="col-span-2 border border-black flex flex-col justify-center text-red-900 font-semibold pl-4 py-2">
            Course Code
          </div>
          <div className="col-span-4 border border-black flex flex-col justify-center text-red-900 font-semibold pl-4 py-2">
            Subject
          </div>
          <div className="col-span-1 border border-black flex flex-col justify-center text-red-900 font-semibold pl-4 py-2">
            L
          </div>
          <div className="col-span-1 border border-black flex flex-col justify-center text-red-900 font-semibold pl-4 py-2">
            T
          </div>
          <div className="col-span-1 border border-black flex flex-col justify-center text-red-900 font-semibold pl-4 py-2">
            P
          </div>
          <div className="col-span-1 border border-black flex flex-col justify-center text-red-900 font-semibold pl-4 py-2">
            Credits
          </div>
          {/* <div className="col-span-1 border border-black flex flex-col justify-center text-red-900 font-semibold pl-4 py-2">
            Dept.
          </div> */}
         
          <SyllabusCompe
            dep={'MA'}
            sem={''}
            code={'MA*711'}
            title={'Probability Theory-I'}
            L={'3'}
            T={'0'}
            P={'0'}
            cred={'3'}
            url={'https://web.nitp.ac.in/dept/math/syllabus/MA_711.docx'}
          />
          <SyllabusCompe
            dep={'MA'}
            sem={''}
            code={'MA*712'}
            title={'Algebra- II'}
            L={'3'}
            T={'0'}
            P={'0'}
            cred={'3'}
            url={''}
          />
          <SyllabusCompe
            dep={'MA'}
            sem={''}
            code={'MA*713'}
            title={'Commutative Algebra'}
            L={'3'}
            T={'0'}
            P={'0'}
            cred={'3'}
            url={'https://web.nitp.ac.in/dept/math/syllabus/MA_713.docx'}
          />
          <SyllabusCompe
            dep={'MA'}
            sem={''}
            code={'MA*714'}
            title={'Differential Geometry'}
            L={'3'}
            T={'0'}
            P={'0'}
            cred={'3'}
            url={'https://web.nitp.ac.in/dept/math/syllabus/MA_714.docx'}
          />
          <SyllabusCompe
            dep={'MA'}
            sem={''}
            code={'MA*715'}
            title={'Number Theory'}
            L={'3'}
            T={'0'}
            P={'0'}
            cred={'3'}
            url={'https://web.nitp.ac.in/dept/math/syllabus/MA_715.docx'}
          />
          <SyllabusCompe
            dep={'MA'}
            sem={''}
            code={'MA*716'}
            title={'Applied Matrix Theory'}
            L={'3'}
            T={'0'}
            P={'0'}
            cred={'3'}
            url={'https://web.nitp.ac.in/dept/math/syllabus/MA_716.docx'}
          />
          <SyllabusCompe
            dep={'MA'}
            sem={''}
            code={'MA*717'}
            title={'Approximation Theory'}
            L={'3'}
            T={'0'}
            P={'0'}
            cred={'3'}
            url={'https://web.nitp.ac.in/dept/math/syllabus/MA_717.docx'}
          />
          <SyllabusCompe
            dep={'MA'}
            sem={''}
            code={'MA*718'}
            title={'Advanced Complex Analysis'}
            L={'3'}
            T={'0'}
            P={'0'}
            cred={'3'}
            url={'https://web.nitp.ac.in/dept/math/syllabus/MA_718.docx'}
          />
          <SyllabusCompe
            dep={'MA'}
            sem={''}
            code={'MA*719'}
            title={'Computational Linear Algebra'}
            L={'3'}
            T={'0'}
            P={'0'}
            cred={'3'}
            url={'https://web.nitp.ac.in/dept/math/syllabus/MA_718.docx'}
          />
          <SyllabusCompe
            dep={'MA'}
            sem={''}
            code={'MA*720'}
            title={'Fluid Dynamics'}
            L={'3'}
            T={'0'}
            P={'0'}
            cred={'3'}
            url={'https://web.nitp.ac.in/dept/math/syllabus/MA_720.docx'}
          />
          <SyllabusCompe
            dep={'MA'}
            sem={''}
            code={'MA*721'}
            title={'Theory and Methods of Statistical Inference'}
            L={'3'}
            T={'0'}
            P={'0'}
            cred={'3'}
            url={'https://web.nitp.ac.in/dept/math/syllabus/MA_721.docx'}
          />
          <SyllabusCompe
            dep={'MA'}
            sem={''}
            code={'MA*722'}
            title={'Classical Mechanics'}
            L={'3'}
            T={'0'}
            P={'0'}
            cred={'3'}
            url={'https://web.nitp.ac.in/dept/math/syllabus/MA_722.docx'}
          />
          <SyllabusCompe
            dep={'MA'}
            sem={''}
            code={'MA*723'}
            title={'Stochastic Processes'}
            L={'3'}
            T={'0'}
            P={'0'}
            cred={'3'}
            url={'https://web.nitp.ac.in/dept/math/syllabus/MA_723.docx'}
          />
          <SyllabusCompe
            dep={'MA'}
            sem={''}
            code={'MA*724'}
            title={'Optimization Techniques'}
            L={'3'}
            T={'0'}
            P={'0'}
            cred={'3'}
            url={'https://web.nitp.ac.in/dept/math/syllabus/MA_724.docx'}
          />
          <SyllabusCompe
            dep={'MA'}
            sem={''}
            code={'MA*725'}
            title={'Partial Differential Equations'}
            L={'3'}
            T={'0'}
            P={'0'}
            cred={'3'}
            url={'https://web.nitp.ac.in/dept/math/syllabus/MA_725.docx'}
          />
          <SyllabusCompe
            dep={'MA'}
            sem={''}
            code={'MA*726'}
            title={'Statistical Simulation and Data Analysis'}
            L={'3'}
            T={'0'}
            P={'0'}
            cred={'3'}
            url={'https://web.nitp.ac.in/dept/math/syllabus/MA_726.docx'}
          />
          <SyllabusCompe
            dep={'MA'}
            sem={''}
            code={'MA*727'}
            title={'Time Series Analysis'}
            L={'3'}
            T={'0'}
            P={'0'}
            cred={'3'}
            url={'https://web.nitp.ac.in/dept/math/syllabus/MA_727.docx'}
          />
          <SyllabusCompe
            dep={'MA'}
            sem={''}
            code={'MA*728'}
            title={'Finite Element Method'}
            L={'3'}
            T={'0'}
            P={'0'}
            cred={'3'}
            url={'https://web.nitp.ac.in/dept/math/syllabus/MA_728.docx'}
          />
          <SyllabusCompe
            dep={'MA'}
            sem={''}
            code={'MA*729'}
            title={'Computational Fluid Dynamics'}
            L={'3'}
            T={'0'}
            P={'0'}
            cred={'3'}
            url={'https://web.nitp.ac.in/dept/math/syllabus/MA_729.docx'}
          />
          <SyllabusCompe
            dep={'MA'}
            sem={''}
            code={'MA*730'}
            title={'Financial Mathematics'}
            L={'3'}
            T={'0'}
            P={'0'}
            cred={'3'}
            url={'https://web.nitp.ac.in/dept/math/syllabus/MA_730.docx'}
          />
          <SyllabusCompe
            dep={'MA'}
            sem={''}
            code={'MA*731'}
            title={'Graph Theory and Algorithms'}
            L={'3'}
            T={'0'}
            P={'0'}
            cred={'3'}
            url={'https://web.nitp.ac.in/dept/math/syllabus/MA_731.docx'}
          />
          <SyllabusCompe
            dep={'MA'}
            sem={''}
            code={'MA*732'}
            title={'Nonlinear Dynamical Systems'}
            L={'3'}
            T={'0'}
            P={'0'}
            cred={'3'}
            url={'https://web.nitp.ac.in/dept/math/syllabus/MA_732.docx'}
          />
          <SyllabusCompe
            dep={'MA'}
            sem={''}
            code={'MA*733'}
            title={'Neural Networks'}
            L={'3'}
            T={'0'}
            P={'0'}
            cred={'3'}
            url={'https://web.nitp.ac.in/dept/math/syllabus/MA_733.docx'}
          />
          <SyllabusCompe
            dep={'MA'}
            sem={''}
            code={'MA*734'}
            title={'Non Linear Programming'}
            L={'3'}
            T={'0'}
            P={'0'}
            cred={'3'}
            url={'https://web.nitp.ac.in/dept/math/syllabus/MA_734.docx'}
          />
          <SyllabusCompe
            dep={'MA'}
            sem={''}
            code={'MA*735'}
            title={'Theory of Operators'}
            L={'3'}
            T={'0'}
            P={'0'}
            cred={'3'}
            url={'https://web.nitp.ac.in/dept/math/syllabus/MA_735.docx'}
          />
          <SyllabusCompe
            dep={'MA'}
            sem={''}
            code={'MA*736'}
            title={'Advanced Numerical Methods'}
            L={'3'}
            T={'0'}
            P={'0'}
            cred={'3'}
            url={'https://web.nitp.ac.in/dept/math/syllabus/MA_736.docx'}
          />
          <SyllabusCompe
            dep={'MA'}
            sem={''}
            code={'MA*737'}
            title={'Topological Vector Space'}
            L={'3'}
            T={'0'}
            P={'0'}
            cred={'3'}
            url={'https://web.nitp.ac.in/dept/math/syllabus/MA_737.docx'}
          />
          <SyllabusCompe
            dep={'OE'}
            sem={''}
            code={'OE0701'}
            title={'Stochastic Processes'}
            L={'3'}
            T={'0'}
            P={'0'}
            cred={'3'}
            url={'https://web.nitp.ac.in/dept/math/syllabus/OE0701.docx'}
          />
          <SyllabusCompe
            dep={'OE'}
            sem={''}
            code={'OE0702'}
            title={'Applied Matrix Theory'}
            L={'3'}
            T={'0'}
            P={'0'}
            cred={'3'}
            url={'https://web.nitp.ac.in/dept/math/syllabus/OE0702.docx'}
          />
          <SyllabusCompe
            dep={'OE'}
            sem={''}
            code={'OE0703'}
            title={'Graph Theory and Algorithms'}
            L={'3'}
            T={'0'}
            P={'0'}
            cred={'3'}
            url={'https://web.nitp.ac.in/dept/math/syllabus/OE0703.docx'}
          />
          <SyllabusCompe
            dep={'OE'}
            sem={''}
            code={'OE0704'}
            title={'Nonlinear Dynamical Systems'}
            L={'3'}
            T={'0'}
            P={'0'}
            cred={'3'}
             url={'https://web.nitp.ac.in/dept/math/syllabus/OE0704.docx'}
          />
          <SyllabusCompe
            dep={'OE'}
            sem={''}
            code={'OE0705'}
            title={'Financial Mathematics'}
            L={'3'}
            T={'0'}
            P={'0'}
            cred={'3'}
            url={'https://web.nitp.ac.in/dept/math/syllabus/OE0705.docx'}
          />
          <SyllabusCompe
            dep={'OE'}
            sem={''}
            code={'OE0706'}
            title={'Finite Element Methods'}
            L={'3'}
            T={'0'}
            P={'0'}
            cred={'3'}
            url={'https://web.nitp.ac.in/dept/math/syllabus/OE0706.docx'}
          />
          </div>

         


       
      </div>
      {/* PG PROGRAM  */}
      {/* <div className={`mb-10 ${pg == false ? 'hidden' : ''}`}>
        <div className="text-red-900 font-bold text-3xl max-sm:text-2xl mb-8">
          PG PROGRAM :-
        </div>
        <div className="border grid grid-cols-12">
          <div className="col-span-1 border border-black flex flex-col justify-center text-red-900 font-semibold pl-4 py-2">
            Dept.
          </div>
          <div className="col-span-1 border border-black flex flex-col justify-center text-red-900 font-semibold pl-4 py-2">
            Sem / Electives
          </div>
          <div className="col-span-2 border border-black flex flex-col justify-center text-red-900 font-semibold pl-4 py-2">
            Course Code
          </div>
          <div className="col-span-4 border border-black flex flex-col justify-center text-red-900 font-semibold pl-4 py-2">
            Course Title
          </div>
          <div className="col-span-1 border border-black flex flex-col justify-center text-red-900 font-semibold pl-4 py-2">
            L
          </div>
          <div className="col-span-1 border border-black flex flex-col justify-center text-red-900 font-semibold pl-4 py-2">
            T
          </div>
          <div className="col-span-1 border border-black flex flex-col justify-center text-red-900 font-semibold pl-4 py-2">
            P
          </div>
          <div className="col-span-1 border border-black flex flex-col justify-center text-red-900 font-semibold pl-4 py-2">
            Credits
          </div>

          <SyllabusComp
            dep={'CEPG'}
            sem={'1'}
            code={'CE601'}
            title={'Advanced Structure Analysis'}
            L={'3'}
            T={'0'}
            P={'0'}
            cred={'3'}
            url={'http://www.nitp.ac.in/php/civil_Mtech/ce601.docx'}
          />
          
        </div>
      </div>
      {/* PhD  */}
      <div className={`mb-10 ${phd == false ? 'hidden' : ''}`}>
        <div className="text-red-900 font-semibold lg:text-2xl text-xl mb-8">
          PhD PROGRAM :-
        </div>
        {/* <div className="border grid grid-cols-12">
          <div className="col-span-1 border border-black flex flex-col justify-center text-red-900 font-semibold pl-4 py-2">
            Dept.
          </div>
          <div className="col-span-1 border border-black flex flex-col justify-center text-red-900 font-semibold pl-4 py-2">
            Sem / Electives
          </div>
          <div className="col-span-2 border border-black flex flex-col justify-center text-red-900 font-semibold pl-4 py-2">
            Course Code
          </div>
          <div className="col-span-4 border border-black flex flex-col justify-center text-red-900 font-semibold pl-4 py-2">
            Course Title
          </div>
          <div className="col-span-1 border border-black flex flex-col justify-center text-red-900 font-semibold pl-4 py-2">
            L
          </div>
          <div className="col-span-1 border border-black flex flex-col justify-center text-red-900 font-semibold pl-4 py-2">
            T
          </div>
          <div className="col-span-1 border border-black flex flex-col justify-center text-red-900 font-semibold pl-4 py-2">
            P
          </div>
          <div className="col-span-1 border border-black flex flex-col justify-center text-red-900 font-semibold pl-4 py-2">
            Credits
          </div> */}
          {/* <SyllabusComp
            dep={''}
            sem={''}
            code={'xxxx'}
            title={'Research Methodology'}
            L={'3'}
            T={'0'}
            P={'0'}
            cred={'3'}
          />
           */}
        {/* </div> */}
        <ul className="list-disc list-inside ml-5 space-y-4 text-lg max-md:text-[15px] max-sm:text-sm">
          <li className="hover:text-blue-800">
            <a className='' href="">
            To be uploaded for PhD
            </a>
          </li>
        </ul>
      </div>
      {/* Dual PROGRAM  */}
      <div className={`mb-10 ${dual == false ? 'hidden' : ''}`}>
        <div className="text-red-900 font-semibold lg:text-2xl text-xl mb-8">
          DUAL DEGREE PROGRAM :-
        </div>
        <ul className="list-disc list-inside ml-5 space-y-4 text-lg max-md:text-[15px] max-sm:text-sm">
          <li className="hover:text-blue-800">
            <a className='' href="https://web.nitp.ac.in//uploads22/Dual_Degree_Mathematics_and_Computing_Technology.pdf">
             Mathematics and Computing Technology (5 Years, Bachelor and Master of Technology(Dual Degree))
            </a>
          </li>
        </ul>
      </div>
      </div>
    </div>
  )
}

function SyllabusComp({ dep, sem, code, title, L, T, P, cred, url ,type}) {
  return (
    <>
      <div className="col-span-2 border border-black flex flex-col justify-center pl-4 py-2">
        {code}
      </div>
      <a
        href={url}
        className="col-span-4 border border-black flex flex-col justify-center pl-4 py-2 cursor-pointer"
      >
        {title}
      </a>
      <div className="col-span-1 border border-black flex flex-col justify-center pl-4 py-2">
        {L}
      </div>
      <div className="col-span-1 border border-black flex flex-col justify-center pl-4 py-2">
        {T}
      </div>
      <div className="col-span-1 border border-black flex flex-col justify-center pl-4 py-2">
        {P}
      </div>
      <div className="col-span-1 border border-black flex flex-col justify-center pl-4 py-2">
        {cred}
      </div>
      <div className="col-span-1 border border-black flex flex-col justify-center pl-4 py-2">
        {dep}
      </div>
      <div className="col-span-1 border border-black flex flex-col justify-center pl-4 py-2">
        {type}
      </div>
    </>
  )
}

function SyllabusCompe({  code, title, L, T, P, cred, url }) {
  return (
    <>
      <div className="col-span-2 border border-black flex flex-col justify-center pl-4 py-2">
        {code}
      </div>
      <a
        href={url}
        className="col-span-4 border border-black flex flex-col justify-center pl-4 py-2 cursor-pointer"
      >
        {title}
      </a>
      <div className="col-span-1 border border-black flex flex-col justify-center pl-4 py-2">
        {L}
      </div>
      <div className="col-span-1 border border-black flex flex-col justify-center pl-4 py-2">
        {T}
      </div>
      <div className="col-span-1 border border-black flex flex-col justify-center pl-4 py-2">
        {P}
      </div>
      <div className="col-span-1 border border-black flex flex-col justify-center pl-4 py-2">
        {cred}
      </div>
      {/* <div className="col-span-1 border border-black flex flex-col justify-center pl-4 py-2">
        {dep}
      </div> */}
     
    </>
  )
}
