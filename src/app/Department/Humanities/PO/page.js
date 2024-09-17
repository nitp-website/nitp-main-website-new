import BackDepartment from "../../../components/department/BackDepartment";


export default function Page() {
    return (
        <div className=" flex flex-col p-10 max-sm:p-2 text-black">
            <div className="flex flex-col  mb-6">
                <div>
                    <p className="text-red-900 text-xl lg:text-2xl font-bold">
                        P O
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
                <div className="mb-10">
                    <div className="text-red-900 font-semibold lg:text-2xl text-xl mb-8">Program Objectives :-</div>
                    <ul className="list-disc list-inside ml-5 space-y-4 lg:text-base text-sm">
                        <li>To involve entire range of knowledge pertinent to human relationship with society interaction and teaching towards problems solving of the nation.</li>
                        <li>To develop into well rounded personalities and to propagate knowledge that is utilitarian and aesthetic in its makeup.</li>
                        <li>To develop good technological skills with the ability to interact with different organs of an organization.</li>
                        <li>To develop essential skills in critical thinking and writing along with the knowledge of literature,society, economic value, and philosophies of the mind and body.</li>
                    </ul>
                </div>
                <div className="mb-10">
                    <div className="text-red-900 font-semibold lg:text-2xl text-xl mb-8">Program Outcomes :-</div>
                    <ul className="list-disc list-inside ml-5 space-y-4 lg:text-base text-sm">
                        <li>Producing Technocrats with all round knowledge and development skills.</li>
                        <li>Developing professional ethics, communication skills and managerial knowledge among students to work in corporate world effectively and efficiently.</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}