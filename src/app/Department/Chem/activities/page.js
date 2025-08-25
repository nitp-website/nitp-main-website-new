import BackDepartment from "../../../components/department/BackDepartment"

function ActComp({title,content}){
    return(
        <div className="flex flex-col mt-8 lg:ml-10">
            <p className="text-xl font-semibold mb-4">
                {title}
            </p>
            <ul>
                {content.map((points,i)=>{
                    return(
                        <li key={i} className="list-disc ml-4 md:text-base pb-2">
                           {points}
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}

function Compo({body, area, faculty, amount,year }){
    return (
        <>
            <div className="col-span-2 border border-black pl-4 py-2 flex flex-col justify-center">
                {body}
            </div>
            <div className="col-span-2 border border-black pl-4 py-2 flex flex-col justify-center">
                {area}
            </div>
            <div className="col-span-2 border border-black pl-4 py-2 flex flex-col justify-center">
                {faculty}
            </div>
            <div className="col-span-1 border border-black pl-4 py-2 flex flex-col justify-center">
                {amount}
            </div>
            <div className="col-span-1 border border-black pl-4 py-2 flex flex-col justify-center">
                {year}
            </div>
        </>
    )
}

function Page(){
    return (
        <div className=" flex flex-col p-5 text-black">  
            <div className="flex flex-col md:ml-10">
                <div>
                    <p className="text-red-900 text-2xl font-bold">
                        ACTIVITIES
                    </p>
                </div>
                <div className="mt-2">
                    <p className="text-gray-500 text-base font-semibold">
                        CHEMICAL SCIENCE AND TECHNOLOGY
                    </p>
                </div>
                <div>
                <BackDepartment navigate={'/Department/Chem'}/>
                </div>
            </div>
            <div className="max-sm:mx-6 max-md:mx-8 mx-20 border p-4 rounded-md shadow-lg shadow-slate-400 backdrop-blur-md">
                <ActComp title={"Workshops / Seminars / Training / Courses Conducted:"}
                content={[
                    'Workshop on "Recent Advances in Chemical Sciences" (RACS-2024), 10th-12th March 2024.',
                    'Seminar on "Green Chemistry and Sustainable Development", 15th February 2024.',
                    'Short Term Course on "Analytical Techniques in Chemistry", 5th-10th January 2024.',
                    'Training Program on "Laboratory Safety and Best Practices", 20th December 2023.',
                    'Workshop on "Spectroscopy and its Applications", 10th November 2023.'
                ]}/>
                <ActComp title={"Expert Lectures Conducted:"}
                content={[
                    'Lecture on "Designing Norbornene Based Functional Polymers" by Prof. Raja Shanmugam, IISER Kolkata, 5th January 2024.',
                    'Lecture on "Triplet Exciton Harvesting in Novel Organic Luminogens for OLED Applications" by Prof. Partha Hazra, IISER Pune, 28th November 2023.',
                    'Lecture on "Bio-organic Chemistry" by Prof. Partha Basu, Indiana University, USA, 4th October 2023.',
                    'Lecture on "Organic Synthesis: Challenges and Remedies" by Prof. Krishna Nand Singh, BHU Varanasi, 25th July 2023.',
                    'Lecture on "Synthetic Chemists and Our Society" by Prof. Vinod K. Tiwari, BHU Varanasi, 4th July 2023.'
                ]}
                />
                <div className="mt-8 lg:ml-10">
                    <div className="text-2xl font-semibold mb-5">
                        Projects
                    </div>
                    <div className="mb-10 overflow-x-auto lg:mr-10">
                        <div className="grid grid-cols-8 border min-w-[850px]">
                        {/* heading  */}
                            <div className="col-span-2 border border-black pl-4 py-2 flex flex-col justify-center text-red-900 font-semibold">
                                Funding Body
                            </div>
                            <div className="col-span-2 border border-black pl-4 py-2 flex flex-col justify-center text-red-900 font-semibold">
                                Area of Research
                            </div>
                            <div className="col-span-2 border border-black pl-4 py-2 flex flex-col justify-center text-red-900 font-semibold">
                                Faculty members involved
                            </div>
                            <div className="col-span-1 border border-black pl-4 py-2 flex flex-col justify-center text-red-900 font-semibold">
                                Funding Amount
                            </div>
                            <div className="col-span-1 border border-black pl-4 py-2 flex flex-col justify-center text-red-900 font-semibold">
                                Year
                            </div>
                            {/* grid  */}
                            <Compo
                            body={'SERB-DST'}
                            area={'Development of Green Catalysts for Organic Synthesis'}
                            faculty={'Dr. Tasneem Parvin'}
                            amount={'Rs. 18 lakhs'}
                            year={'2022-2025'}
                            />
                            <Compo
                            body={'CSIR'}
                            area={'Bioorganic Molecules for Drug Discovery'}
                            faculty={'Dr. Rima Thakur'}
                            amount={'Rs. 22 lakhs'}
                            year={'2021-2024'}
                            />
                            <Compo
                            body={'UGC'}
                            area={'Advanced Materials for Energy Storage'}
                            faculty={'Dr. Suvankar Dasgupta'}
                            amount={'Rs. 15 lakhs'}
                            year={'2020-2023'}
                            />
                            <Compo
                            body={'SERB-DST'}
                            area={'Inorganic Complexes for Catalysis'}
                            faculty={'Dr. Mukesh Choudhary'}
                            amount={'Rs. 12 lakhs'}
                            year={'2019-2022'}
                            />
                            <Compo
                            body={'ICMR'}
                            area={'Biophysical Chemistry in Disease Mechanisms'}
                            faculty={'Dr. Niki Sweta Jha'}
                            amount={'Rs. 10 lakhs'}
                            year={'2018-2021'}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Page