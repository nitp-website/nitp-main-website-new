import BackDepartment from "../../../components/department/BackDepartment";


export default function mission() {
    return (
        <div className=" flex flex-col p-10 max-sm:p-2">
            <div className="flex flex-col  mb-6">
                <div>
                    <p className="text-red-900 text-3xl max-sm:text-2xl font-bold">
                        MISSION AND VISION
                    </p>
                </div>
                <div className="mt-2">
                    <p className="text-gray-500 text-xl font-semibold">
                        CIVIL ENGINEERING
                    </p>
                </div>
                <BackDepartment navigate={"/Department/CE"} />
            </div>
            <div className="max-sm:mx-6 max-md:mx-8 mx-20 border p-4 rounded-md shadow-lg shadow-slate-400 backdrop-blur-md">
                {/* vision */}
                <div className="mb-10">
                    <div className="text-red-900 font-bold text-3xl max-sm:text-2xl mb-8">VISION :-</div>
                    <ul className="list-none list-inside ml-5 space-y-4 text-lg max-sm:text-sm">
                        <li>To serve the Nation and the world, through excellence education and advanced research in all the streams of Civil Engineering.</li>
                    </ul>
                </div>
                {/* mission */}
                <div className="mb-10">
                    <div className="text-red-900 font-bold text-3xl max-sm:text-2xl mb-8">MISSION :-</div>
                    <ol className="list-disc list-inside ml-5 space-y-4 text-lg max-sm:text-sm">
                        <li>To serve by producing excellent engineers, innovators, entrepreneurs and academicians for the growth of the industry and the society.</li>
                        <li>To develop sense of competitiveness, self-confidence, sincerity, punctuality and ethical values among students.</li>
                        <li>To undertake innovative collaborative projects with industries, government agencies and other organisations to cater the needs of society and solve real field problems.</li>
                        <li>To develop research and teaching potential to the fullest extent.</li>
                        <li>To remain a role model in the field of Civil Engineering.</li>
                    </ol>
                </div>
            </div>
        </div>
    )
}