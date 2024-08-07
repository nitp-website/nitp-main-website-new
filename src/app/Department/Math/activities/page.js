import BackDepartment from "../../../../components/BackDepartment"

function ActComp({ title, content }) {
  return (
    <div className="flex flex-col mt-8 lg:ml-10">
      <p className="font-semibold lg:text-2xl text-xl mb-4">{title}</p>
      <ul>
        {content.map((points, i) => {
          return (
            <li
              key={i}
              className="list-disc ml-4 lg:text-base text-sm
                        pb-2"
            >
              {points}
            </li>
          )
        })}
      </ul>
    </div>
  )
}

function Compo({ sl, name, faculty, agency, status, grant }) {
  return (
    <>
      <div className="col-span-1 border border-black pl-4 py-2 flex flex-col justify-center">
        {sl}
      </div>
      <div className="col-span-2 border border-black pl-4 py-2 flex flex-col justify-center">
        {name}
      </div>
      <div className="col-span-2 border border-black pl-4 py-2 flex flex-col justify-center">
        {faculty}
      </div>
      <div className="col-span-2 border border-black pl-4 py-2 flex flex-col justify-center">
        {agency}
      </div>
      <div className="col-span-1 border border-black pl-4 py-2 flex flex-col justify-center">
        {status}
      </div>
      <div className="col-span-1 border border-black pl-4 py-2 flex flex-col justify-center">
        {grant}
      </div>
    </>
  )
}

function CompoInvited({ sl, faculty, institute }) {
  return (
    <>
      <div className="col-span-1 border border-black pl-4 py-2 flex flex-col justify-center">
        {sl}
      </div>
      <div className="col-span-3 border border-black pl-4 py-2 flex flex-col justify-center">
        {faculty}
      </div>
      <div className="col-span-2 border border-black pl-4 py-2 flex flex-col justify-center">
        {institute}
      </div>
    </>
  )
}



function page() {
  return (
    <div className=" flex flex-col p-5">
      <div className="flex flex-col md:ml-10">
        <div>
          <p className="text-red-900 text-xl lg:text-2xl font-bold">ACTIVITIES</p>
        </div>
        <div className="lg:mt-2">
          <p className="text-gray-500 text-sm lg:text-base font-semibold">
            Mathematics
          </p>
        </div>
        <BackDepartment navigate={"/Department/Math"}/>
      </div>
      <div className="mx-4 border p-4 rounded-md shadow-lg shadow-slate-400 backdrop-blur-md">
      <ActComp
        title={'Seminars and Workshops Organized by the Department'}
        content={[
          'Inspire Science Camp for School Children (15-19 Dec; 2014)',
          'Short term course onTime Series Analysis & its Applications jointly organized with Computer Science & Civil Engineering Department during June 2014.',
          'Nationwide sensitization workshop onMathematics for Teachers and Activists during 2-3 March; 2014',
          'Nationwide sensitization workshop onMathematics for Teachers and Activists during 2-3 March; 2014',
        ]}
      />
      <div className="mt-8 lg:ml-10">
        <div className="font-semibold lg:text-2xl text-xl mb-5">
          Externally Funded Projects Running in the Department
        </div>
        <div className="mb-10 overflow-x-auto lg:mr-10">
          <div className="grid grid-cols-9 border min-w-[900px]">
            {/* heading  */}
            <div className="col-span-1 border border-black pl-4 py-2 flex flex-col justify-center text-red-900 font-semibold">
              Sl. No
            </div>
            <div className="col-span-2 border border-black pl-4 py-2 flex flex-col justify-center text-red-900 font-semibold">
              Name of the projects
            </div>
            <div className="col-span-2 border border-black pl-4 py-2 flex flex-col justify-center text-red-900 font-semibold">
              Name of the faculty
            </div>
            <div className="col-span-2 border border-black pl-4 py-2 flex flex-col justify-center text-red-900 font-semibold">
              Major funding agency
            </div>
            <div className="col-span-1 border border-black pl-4 py-2 flex flex-col justify-center text-red-900 font-semibold">
              Completed / Ongoing
            </div>
            <div className="col-span-1 border border-black pl-4 py-2 flex flex-col justify-center text-red-900 font-semibold">
              Grant Sanctioned (INR in Lakhs)
            </div>
            {/* grid  */}
            <Compo
              sl="1"
              name="Next Generation E-content of Numerical Methods and Applications"
              faculty="Prof. S. K. Singh"
              agency="MHRD"
              status="Completed"
              grant="5"
            />
            <Compo
              sl="2"
              name="Numerical Analysis for Singularly Perturbed Parabolic Partial Differential Equations"
              faculty="Dr. S. Gowrisankar"
              agency="SERB-DST"
              status="Approved"
              grant="17"
            />
          </div>
        </div>
      </div>

      <div className="mt-8 lg:ml-10">
        <div className="font-semibold lg:text-2xl text-xl mb-5">Invited Lectures</div>
        <div className="mb-10 overflow-x-auto lg:mr-10">
          <div className="grid grid-cols-6 border min-w-[500px]">
            {/* heading */}
            <div className="col-span-0 border border-black pl-3 py-2 flex flex-col justify-center text-red-900 font-semibold">
              Sl. No.
            </div>
            <div className="col-span-3 border border-black pl-4 py-2 flex flex-col justify-center text-red-900 font-semibold">
              Faculty
            </div>
            <div className="col-span-2 border border-black pl-2 py-1 flex flex-col justify-center text-red-900 font-semibold">
              Institute
            </div>
            {/* grid */}
            <CompoInvited
              sl="1"
              faculty="Prof. S. Chakrabarty, Maths Department"
              institute="NIT Rourkela"
            />
            <CompoInvited
              sl="2"
              faculty="Prof. A. K. Ganguly, Maths Department"
              institute="Patna University"
            />
            <CompoInvited
              sl="3"
              faculty="Prof. K. N. Rai, Maths Department"
              institute="IIT BHU"
            />
            <CompoInvited
              sl="4"
              faculty="Prof. S. Natesan, Maths Department"
              institute="IIT Guwahati"
            />
            <CompoInvited
              sl="5"
              faculty="Prof. K. N. Rai, Maths Department"
              institute="IIT BHU"
            />
            <CompoInvited
              sl="6"
              faculty="Prof. S. Bhatacharyya, Maths Department"
              institute="IIT Kharagpur"
            />
            <CompoInvited
              sl="7"
              faculty="Prof. Santhana, Maths Department"
              institute="IIT Kanpur"
            />
            <CompoInvited
              sl="8"
              faculty="Prof. Karmeshu, Maths & Computer Science Department"
              institute="J. N. U Delhi"
            />
          </div>
        </div>
      </div>
      </div>
    </div>
  )
}
export default page
