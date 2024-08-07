import BackDepartment from "../../../../components/BackDepartment";

export default function mission() {
  return (
    <div className=" flex flex-col p-10 max-sm:p-2">
      <div className="flex flex-col  mb-6">
        <div>
          <p className="text-red-900 text-xl lg:text-2xl font-bold">
            MISSION AND VISION
          </p>
        </div>
        <div className="lg:mt-2">
          <p className="text-gray-500 text-sm lg:text-base font-semibold">MATHEMATICS</p>
        </div>
        <BackDepartment navigate={"/Department/Math"} />
      </div>
      <div className="max-sm:mx-6 max-md:mx-8 mx-20 border p-4 rounded-md shadow-lg shadow-slate-400 backdrop-blur-md">
        {/* vision */}
        <div className="mb-10">
          <div className="text-red-900 font-semibold lg:text-2xl text-xl mb-8">
            VISION :-
          </div>
          <div className="list-disc list-inside ml-5 space-y-4 lg:text-base text-sm text-justify">
            The vision of the Department is to achieve excellence in undergraduate
            and postgraduate education and research through a synergic combination
            and thereby lead to development of new knowledge.
          </div>
        </div>
        {/* mission */}
        <div className="mb-10">
          <div className="text-red-900 font-semibold lg:text-2xl text-xl mb-8">
            MISSION :-
          </div>
          <ul className="list-disc list-inside ml-5 space-y-4 lg:text-base text-sm text-justify">
            <li className="">
              The Department of Mathematics will offer courses and programs of
              study that will ensure that the student learner will be able to
              contribute to today&apos;s society. The students will obtain
              abilities to critically assess numerical and graphical information;
              learn to formulate strategies for solving problems; and acknowledge
              the importance of being intellectually curious throughout their
              adult lives. The Department, through its faculty, will continue to
              contribute to the body of knowledge of the discipline, whether in
              traditional research, applied research, or research in the teaching
              of mathematics.
            </li>

            <li>
              The main mission of the Department of Mathematics is to offer high
              quality instruction in mathematics, statistics and the applied
              sciences to all students that it serves. The department strives to
              teach the main ideas and methods of mathematics and to build up the
              students reasoning and analytical skills. The department maintains
              programs and teaching practices that match those at most
              Undergraduate/Postgraduate programs at Institute. As the department
              offers core courses and in addition support other engineering degree
              programs, our mission is to make sure that these courses are taught
              at a high standard and meet the needs of those programs. For its
              majors, the department mission is to provide students with a number
              of degree programs and a wide spectrum of courses, and to offer them
              a rigorous training that enables them to pursue graduate degrees or
              work in jobs that require a high degree of mathematical skills.
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}
