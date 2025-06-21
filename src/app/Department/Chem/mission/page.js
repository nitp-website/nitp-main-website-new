// import BackDepartment from "../../../components/department/BackDepartment"

// function Comp({content}){
//     return(
//         <div className="flex flex-col mt-8 lg:ml-10">
//             <ul>
//                 {content.map((points,i)=>{
//                     return(
//                         <li key={i} className="list-disc ml-4 lg:text-base text-sm
//                         pb-2">
//                            {points}
//                         </li>
//                     )
//                 })}
//             </ul>
//         </div>
//     )
// }

// function Page(){
//     return (
//         <div className="flex flex-col p-5 text-black">  
//             <div className="flex flex-col md:ml-10">
//                 <div className="flex flex-col  mb-6">
//                     <div>
//                         <p className="text-red-900 text-xl lg:text-2xl font-bold">
//                         Mission And Vision
//                         </p>
//                     </div>
//                     <div className="mt-1 lg:mt-2">
//                         <p className="text-gray-500 text-sm lg:text-base font-semibold">
//                         Chemical Science and Technology
//                         </p>
//                     </div>
//                     <BackDepartment navigate={"/Department/Chem"}/>
//                 </div>
//             </div>
//             <div className="max-sm:mx-6 max-md:mx-8 mx-20 border p-4 rounded-md shadow-lg shadow-slate-400 backdrop-blur-md">
//                 <div>
//                     <p className="text-red-900 font-semibold lg:text-2xl text-xl">
//                         VISION
//                     </p>
//                     <Comp
//                     content={['To serve the country through this institution by pursuing excellence in scientific and technical education and research',
//                         'To make this department a center of excellence for cutting edge fundamental and applied research.',
//                     ]}
//                     />
//                 </div>
//                 <div className="mt-10">
//                     <p className="text-red-900 font-semibold lg:text-2xl text-xl">
//                         MISSION
//                     </p>
//                     <Comp
//                     content={[
//                         'To develop and promote innovations in Education at all levels, and generate fundamental and applied knowledge by engaging in scientific research by adopting suitable steps.',
//                         'To promote academic growth by offering state-of-the-art education in undergraduate, postgraduate and doctoral programmes.',
//                         'To pursue quality research output by developing necessary and adequate research facilities and undertaking collaborative / sponsored research projects.',
//                         'Maintaining and enhancing the diversity of students, staff, faculty and curricula.',
//                     ]}
//                     />
//                 </div>
//             </div>
//         </div>

//     )
// }
// export default Page



import React from "react";

const cheMissionPage = () => {
  return (
    <div className="bg-white text-black">
      <div className="py-1 mt-2">
        <div className="w-full px-5 xs:px-0 md:w-[90%] mx-auto">
          <div className="w-full">
            <h2 className="text-center text-4xl text-red-700 mt-2">Mission</h2>
          </div>
          <ul className="list-disc pl-5 space-y-2 mt-2 text-justify">
            <li className="ml-4">
              To improve employability by providing high-quality undergraduate
              and graduate education in computer-related disciplines.
            </li>
            <li className="ml-4">
              To develop professionals to satisfy the rising personnel demands
              and needs of industry and entrepreneurship for the state's and
              country's economic growth.
            </li>
            <li className="ml-4">
              To become capable in conducting high-quality technological
              research for the benefit of society.
            </li>
          </ul>

          <div className="w-full mt-5">
            <h2 className="text-center text-4xl text-red-700 mt-2">Vision</h2>
          </div>
          <ul className="list-disc pl-5 space-y-2 mt-2 text-justify">
            <li className="ml-4">
              To formulate up-to-date and flexible technical programs which
              will allow our graduates to attain their maximum technical
              potential, managerial capability, be competitive in the job
              market and to emerge as a centre of excellence.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default cheMissionPage;