import BackDepartment from "../../../components/department/BackDepartment";


export default function Page() {
    return (
        <div className=" flex flex-col p-10 max-sm:p-2 text-black">
            <div className="flex flex-col  mb-6">
                <div>
                    <p className="text-red-900 text-xl lg:text-2xl font-bold">
                        MISSION AND VISION
                    </p>
                </div>
                <div className="lg:mt-2">
                    <p className="text-gray-500 text-sm lg:text-base font-semibold">
                        Humanities & Social Sciences
                    </p>
                </div>
                <BackDepartment navigate={"/Department/Humanities"} />
            </div>
            <div className="max-sm:mx-6 max-md:mx-8 mx-20 border p-4 rounded-md shadow-lg shadow-slate-400 backdrop-blur-md">
                {/* vision */}
                <div className="mb-10">
                    <div className="text-red-900 font-semibold lg:text-2xl text-xl mb-8">VISION :-</div>
                    <ul className="list-none list-inside ml-5 space-y-4 lg:text-base text-sm">
                        <li>The Department aspires to be a national exemplar in undergraduate teaching and research in the humanities and social sciences. Upon completion of the program, the students will be prepared to compete, sustain and advance their communities and the world.</li>
                    </ul>
                </div>
                {/* mission */}
                <div className="mb-10">
                    <div className="text-red-900 font-semibold lg:text-2xl text-xl mb-8">MISSION :-</div>
                    <ol className="list-none list-inside ml-5 space-y-4 lg:text-base text-sm">
                        <li>To provide quality teaching, learning, and research in the field of Humanities and Social Sciences by creating, preserving, transmitting and utilizing knowledge especially to engineering students so that intellectually capable and imaginatively gifted leaders can emerge in the technical education and industry.</li>
                    </ol>
                </div>
            </div>
        </div>
    )
}