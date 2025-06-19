import BackDepartment from "../../../components/department/BackDepartment";

function Page() {
  return (
    <div className="flex flex-col p-10 max-sm:p-2 text-black">
      {/* Header Section */}
      <div className="flex flex-col mb-10">
        <div>
          <p className="text-red-900 text-xl lg:text-2xl font-bold">ABOUT</p>
        </div>
        <div className="mt-1 lg:mt-2">
          <p className="text-gray-500 text-sm lg:text-base font-semibold">
            ELECTRONICS AND COMMUNICATION ENGINEERING
          </p>
        </div>
        <div>
          <BackDepartment navigate={"/Department/ECE"} />
        </div>
      </div>

      {/* Main Content Section */}
      <div className="max-sm:mx-6 max-md:mx-8 mx-10 border p-4 rounded-md shadow-lg shadow-slate-400 backdrop-blur-md">
        <div className="text-justify text-base lg:text-lg space-y-4">
          <p>
           The Department of Electronics and Communication Engineering at the National Institute of Technology Patna began its journey in 1978 with just 10 undergraduate students. The department is dedicated to providing quality education at both undergraduate (UG) and postgraduate levels. Currently, it offers the following programs:
          </p>

          <ul className="list-decimal list-inside space-y-1">
            <li>
              B.Tech in "Electronics & Communication Engineering" with an intake of 100.
            </li>
            <li>
              B.Tech in Electronics Engineering (VLSI Design and Technology) with an intake of 80
            </li>
            <li>
            Dual degree (B.Tech + M.Tech) in "Microelectronics and VLSI System Design" with an intake of 22
            </li>
            <li>
              M.Tech in:
              <ul className="list-disc list-inside ml-6 space-y-1">
                <li>Next Generation Wireless Technologies" with an intake of 15.</li>
                <li>Microelectronics and VLSI System Design" with an intake of 15.</li>
              </ul>
            </li>
            <li>
              Ph.D. (Full-time and Part-time) in Electronics and Communication Engineering.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Page;
