import BackDepartment from "../../../components/department/BackDepartment"

function ActComp({title,content}){
    return(
        <div className="flex flex-col mt-2 lg:ml-10">
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
        <div className=" flex flex-col p-5 h-screen">  
            <div className="flex flex-col md:ml-10">
                <div>
                    <p className="text-red-900 text-xl lg:text-2xl font-bold">
                        ACHIEVEMENTS
                    </p>
                </div>
                <div className="lg:mt-2">
                    <p className="text-gray-500 text-sm lg:text-base font-semibold">
                        Physics
                    </p>
                <BackDepartment navigate={"/Department/Phy"}/>
                </div>
            </div>
            <div className="max-sm:mx-6 max-md:mx-8 mx-20 border p-4 rounded-md shadow-lg shadow-slate-400 backdrop-blur-md h-screen">
                <ActComp
                content={['Dr. Alok Kumar Pan has been awarded RAMANUJAN FELLOWSHIP from DST-SERB in 2015.'
                ]}/>
            </div>
        </div>

    )
}
export default Page


