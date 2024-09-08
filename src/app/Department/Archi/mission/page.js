import BackDepartment from "../../../components/department/BackDepartment"


function Page(){
    return (
        <div className="flex flex-col p-5 text-black">  
            <div className="flex flex-col md:ml-10">
                <div>
                    <p className="text-red-900 text-xl lg:text-2xl font-bold">
                        Mission And Vision
                    </p>
                </div>
                <div className="mt-2">
                    <p className="text-gray-500 text-sm lg:text-base font-semibold">
                        Architecture
                    </p>
                </div>
                <div>
                    <BackDepartment navigate={'/Department/Archi'}/>
                </div>
            </div>
            <div className="max-sm:mx-6 max-md:mx-8 mx-20 border p-4 rounded-md shadow-lg shadow-slate-400 backdrop-blur-md">
                    <p className="text-red-900 font-semibold lg:text-2xl text-xl">
                        VISION
                    </p>
                    <p className="mt-6 lg:text-base text-sm">
                    To become a center of excellence to inspire, innovate and transform the knowledge to create a sustainable built environment for improved quality of life on the earth.
                    </p>
                <div className="mt-10">
                    <p className="text-red-900 font-semibold lg:text-2xl text-xl">
                        MISSION
                    </p>
                    <p className="mt-6 lg:text-base text-sm">
                    To generate intellectual capital by engaging in cutting-edge research and to promote academic growth by offering state-of-the-art undergraduate, postgraduate and doctoral programmes.
                    <br/><br/>
                    To develop the department as regional center of knowledge and information in the field of Architecture and Planning.
                    <br/><br/>
                    To identify, based on an informed perception of local, regional national and global needs, areas of specialization upon which the department can concentrate.
                    <br/><br/>
                    To undertake joint initiatives which offer opportunities for long-term interaction with academia, industry, government and society.
                    <br/><br/>
                    To develop human potential to its fullest extent so that intellectually capable and imaginatively gifted leaders can emerge in a range of ethical professions.
                    </p>
                </div>
            </div>
        </div>

    )
}
export default Page