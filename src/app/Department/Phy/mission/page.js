import BackDepartment from "../../../components/department/BackDepartment"


function Page(){
    return (
        <div className=" flex flex-col p-5  text-black">  
            <div className="flex flex-col md:ml-10 lg:w-1/2">
                <div>
                    <p className="text-red-900 text-xl lg:text-2xl font-bold">
                        Mission And Vision
                    </p>
                </div>
                <div className="lg:mt-2">
                    <p className="text-gray-500 text-sm lg:text-base font-semibold">
                        Physics
                    </p>
                </div>
                <BackDepartment navigate={"/Department/Phy"}/>
            </div>
                <div className="max-sm:mx-6 max-md:mx-8 mx-20 border p-4 rounded-md shadow-lg shadow-slate-400 backdrop-blur-md">
                <div className='text-justify'>
                    <p className="text-red-900 font-semibold lg:text-2xl text-xl">
                        VISION
                    </p>
                    <p className="mt-4 lg:text-base text-sm">
                    The vision of the Department is to achieve excellence in undergraduate and postgraduate education and research through a synergic combination and thereby lead to development of new knowledge.
                    </p>
                </div>
                <div className="mt-10 text-justify">
                    <p className="text-red-900 font-semibold lg:text-2xl text-xl">
                        MISSION
                    </p>
                    <p className="mt-4 lg:text-base text-sm">
                    To train the students to be lifelong learners who will contribute to the creation of new knowledge, new technology, and innovation through excellence in research in emerging areas and disciplines.
                    <br/><br/>
                    To educate students to be future leaders in science, technology, industry, education and other professions and succeed in a globally competitive environment.
                    <br/><br/>
                    To create National and International collaborations for research engagement in strategic areas of research
                    <br/><br/>
                    To undertake joint initiatives which offer opportunities for long-term interaction with academia, industry, government and society.
                    <br/><br/>
                    To create National and International collaborations for research engagement in strategic areas of research
                    </p>
                </div>
            </div>
        </div>

    )
}
export default Page