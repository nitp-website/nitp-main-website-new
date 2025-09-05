'use client'

import BackDepartment from "../../../components/department/BackDepartment"
import { useState } from 'react'

export default function Page() {
  const [dual, setdual] = useState(false)
  const [phd, setphd] = useState(false)
  return (
    <div className=" flex flex-col p-10 pt-4 max-sm:p-2 text-black">
      <div className="flex flex-col ">
        <div>
          <p className="text-red-900 text-center text-2xl lg:text-3xl font-bold">
            SYLLABUS
          </p>
        </div>
      </div>
      <div className="mx-4 border p-4 rounded-md shadow-lg shadow-slate-400 backdrop-blur-md">
        <div className="mb-10 flex space-x-1">
          <button
            onClick={() => {
              setdual(true)
              setphd(false)
            }}
            className={`border border-black rounded ${dual ? 'text-white bg-red-900' : 'text-red-900'
              } px-2`}
          >
            Dual Degree(B.tech+M.tech)
          </button>
          <button
            onClick={() => {
              setdual(false)
              setphd(true)
            }}
            className={`border border-black rounded ${phd ? 'text-white bg-red-900' : 'text-red-900'
              } px-2`}
          >
            PhD Courses
          </button>
        </div>

        {/* Dual PROGRAM  */}
        <div className={`mb-10 ${dual == false ? 'hidden' : ''}`}>
          <div className="text-red-900 font-semibold lg:text-2xl text-xl mb-8">
            DUAL DEGREE PROGRAM :-
          </div>
          <ul className="list-disc list-inside ml-5 space-y-4 text-lg max-md:text-[15px] max-sm:text-sm">
            <li className="hover:text-blue-800">
              <a className='' href="https://drive.google.com/file/d/1MPFriB_DYxQwIA99uRKgBfj-fwGVcU24/view?usp=sharing">
                Mathematics and Computing Technology (5 Years, Bachelor and Master of Technology(Dual Degree))
              </a>
            </li>
          </ul>
        </div>

        {/* PhD  */}
        <div className={`mb-10 ${phd == false ? 'hidden' : ''}`}>
          <div className="text-red-900 font-semibold lg:text-2xl text-xl mb-8">
            PhD PROGRAM :-
          </div>
          <ul className="list-disc list-inside ml-5 space-y-4 text-lg max-md:text-[15px] max-sm:text-sm">
            <li className="hover:text-blue-800">
              <a className='' href="">
                To be uploaded for PhD
              </a>
            </li>
          </ul>
        </div>

      </div>
    </div>
  )
}

function SyllabusComp({ dep, sem, code, title, L, T, P, cred, url, type }) {
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

function SyllabusCompe({ code, title, L, T, P, cred, url }) {
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
