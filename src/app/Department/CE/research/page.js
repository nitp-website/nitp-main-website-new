import BackDepartment from "../../../components/department/BackDepartment";


export default function research(){
    return (
        <div className=" flex flex-col p-5 h-screen">  
            <div className="flex flex-col md:ml-10">
                <div>
                    <p className="text-red-900 text-3xl font-bold">
                        RESEARCH AND HIGHLIGHT
                    </p>
                </div>
                <div className="mt-2">
                    <p className="text-gray-500 text-xl font-semibold">
                        MECHANICAL ENGINEERING
                    </p>
                </div>
                <BackDepartment navigate={"/Department/CE"}/>
            </div>
        </div>

    )
}