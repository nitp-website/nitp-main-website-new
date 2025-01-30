import BackDepartment from "../../../components/department/BackDepartment"


function Page() {
    const data = [
        {
            name: "Mechatronics and Automation Engineering  Dept. Time Table for the Class Jan- June 2025 (Even Semster)",
            link: "https://drive.google.com/file/d/1hpZ6RVveUhFo-noguVNRulif-BplAZP4/view?usp=sharing"
        },


    ];
    return (
        <div className=" flex flex-col p-5 h-screen text-black">
            <div className="flex flex-col md:ml-10">
                <div>
                    <p className="text-red-900 text-3xl font-bold">
                        TIME TABLE
                    </p>
                </div>
                <div className="mt-2">
                    <p className="text-gray-500 text-xl font-semibold">
                        Mechatronics and Automation Engineering
                    </p>
                </div>
                <div>
                    <BackDepartment navigate={'/Department/Mechatronics'} />
                </div>
            </div>
            <div className="md:mx-auto px-4 py-8 w-4/5">

                <table className="w-full mx-auto border-collapse border border-neutral-600 bg-white rounded-lg">
                    <thead>
                        <tr>
                            <th className="text-left px-2 py-2 md:px-4 md:py-4 bg-gradient-to-r from-red-200 to-pink-200 text-black">Name</th>
                            <th className="text-center px-2 py-2 md:px-4 md:py-4 bg-gradient-to-r from-red-200 to-orange-200 text-black">Download Now</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((item, index) => (
                            <tr key={index}>
                                <td className="text-xs md:text-base text-left px-2 md:px-4 py-2 border-b border-gray-300 text-black">{item.name}</td>
                                <td className="text-xs md:text-base text-center px-4 py-3 border-b border-gray-300">
                                    <a href={item.link} className="bg-blue-400 text-white font-bold px-4 py-2 rounded-md hover:bg-gradient-to-r from-cyan-500 to-blue-500 md:text-xs text-xs" target="_blank">
                                        Download
                                    </a>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>

    )
}
export default Page
