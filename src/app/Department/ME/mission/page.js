import BackDepartment from "../../../components/department/BackDepartment";


export default function mission() {
    return (
        <div className="flex flex-col p-10 max-sm:p-2 text-black">
            <div className="flex flex-col  mb-6">
                <div>
                    <p className="text-red-900 text-xl lg:text-2xl font-bold">
                        Mission and Vision 
                    </p>
                </div>
                <div className="lg:mt-2">
                    <p className="text-gray-500 text-sm lg:text-base font-semibold">
                        Mechanical Engineering 
                    </p>
                </div>
                <BackDepartment navigate={"/Department/ME"} />
            </div>
            <div className="max-sm:mx-6 max-md:mx-8 mx-20 border p-4 rounded-md shadow-lg shadow-slate-400 backdrop-blur-md">
                {/* vision */}
                <div className="mb-10">
                    <div className="text-red-900 font-semibold lg:text-2xl text-xl mb-8">VISION :-</div>
                    <ul className="list-none list-inside ml-5 space-y-4 lg:text-base text-sm">
                        <li>“To create well trained and skilled technocrats with life-long learning in the area of Mechanical Engineering”</li>
                    </ul>
                </div>
                {/* mission */}
                <div className="mb-10">
                    <div className="text-red-900 font-semibold lg:text-2xl text-xl mb-8">MISSION :-</div>
                    <ol className="list-decimal list-inside ml-5 space-y-4 lg:text-base text-sm">
                        <li>To provide education that transforms young minds through rigorous teaching and thought process to fulfil the needs of the society and Industry.</li>
                        <li>To collaborate with leading Industry partners and other academic and research Institutes around the world to strengthen the education and research ecosystem.</li>
                        <li>To prepare students with life-long learning for their career by fostering in them the ethical & technical capabilities pertinent to mechanical and allied engineering.</li>
                    </ol>
                </div>
            </div>
            
        </div>
    )
}
