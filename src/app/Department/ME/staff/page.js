import BackDepartment from "../../../components/department/BackDepartment";


export default function achivments(){
    return (
        <div className=" flex flex-col p-10 max-sm:p-2 h-screen text-black">  
            <div className="flex flex-col  mb-16">
                <div>
                    <p className="text-red-900 text-xl lg:text-2xl font-bold">
                        List of Non Teaching Staff 
                    </p>
                </div>
                <div className="lg:mt-2">
                    <p className="text-gray-500  text-sm lg:text-base font-semibold">
                        Mechanical Engineering 
                    </p>
                </div>
                <BackDepartment navigate={"/Department/ME"}/>
            </div>
            {/* Achivment */}
            
        </div>
    )
}
