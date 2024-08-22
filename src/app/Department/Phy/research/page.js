import BackDepartment from "../../../components/department/BackDepartment"

function ActComp({title,content}){
    return(
        <div className="flex flex-col mt-8 lg:ml-10">
            <p className="text-2xl font-semibold mb-4">
                {title}
            </p>
            <ul>
                {content.map((points,i)=>{
                    return(
                        <li key={i} className="list-disc ml-4 md:text-lg
                        pb-2">
                           {points}
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}


function Page(){
    return (
        <div className=" flex flex-col p-5">  
            <div className="flex flex-col md:ml-10 mb-3">
                <div>
                    <p className="text-red-900 text-4xl font-bold">
                    Research Highlights
                    </p>
                    <div className="mt-2">
                        <p className="text-gray-500 text-xl font-semibold">
                            Physics
                        </p>
                    </div>
                    <BackDepartment navigate={"/Department/Phy"}/>
                </div>
            </div>
            <div className="max-sm:mx-6 max-md:mx-8 mx-20 border p-4 rounded-md shadow-lg shadow-slate-400 backdrop-blur-md h-screen">


            </div>

        </div>

    )
}
export default Page


