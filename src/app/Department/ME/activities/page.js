import BackDepartment from "../../../components/department/BackDepartment"

function Compo({ project, pi, sponsor, amount, year, sno }) {
    return (
        <>
            <div className="col-span-1 border border-black pl-4 py-2 flex flex-col justify-center text-black">
                {sno}
            </div>
            <div className="col-span-3 border border-black pl-4 py-2 flex flex-col justify-center">
                {pi}
            </div>
            <div className="col-span-4 border border-black pl-4 py-2 flex flex-col justify-center">
                {project}
            </div>
            <div className="col-span-2 border border-black pl-4 py-2 flex flex-col justify-center">
                {year}
            </div>
        </>
    )
}
function Page() {
    return (
        <div className=" flex flex-col p-5 text-neutral-800">
            <div className="flex flex-col md:ml-10 mb-3">
                <div>
                    <p className="text-red-900 text-xl lg:text-2xl font-bold">
                        Activities
                    </p>
                </div>
                <div className="lg:mt-2">
                    <p className="text-gray-500 text-sm lg:text-base font-semibold">
                        Mechanical Engineering
                    </p>
                </div>
                <BackDepartment navigate={"/Department/ME"}/>
            </div>
            <div className="mx-4 border p-4 rounded-md shadow-lg shadow-slate-400 backdrop-blur-md">
                <div className="mt-10">
                    <p className="text-black font-semibold lg:text-2xl text-xl">
                        List of Short - Term Courses / Faculty Development Program / Workshop / Gian Program:
                    </p>
                </div>
                <div className="mb-10 overflow-x-auto lg:mr-10 mt-8">
                    <div className="grid grid-cols-10 border min-w-[1000px]">
                        {/* heading  */}
                        <div className=" col-span-1 border border-black pl-4 py-2 flex flex-col justify-center text-red-900 font-semibold">
                            Sr. No.
                        </div>

                        <div className="  col-span-3 border border-black pl-4 py-2 flex flex-col justify-center text-red-900 font-semibold">
                            Name of the Faculty
                        </div>
                        <div className="  col-span-4 border border-black pl-4 py-2 flex flex-col justify-center text-red-900 font-semibold">
                            Organized Workshop/FDP/STC/Conference/GIAN program
                        </div>
                        <div className=" col-span-2 border border-black pl-2 py-2 flex flex-col justify-start text-red-900 font-semibold">
                            Duration
                        </div>

                        {/* grid  */}
                        {/* <Compo
                            sno={'1.'}
                            project={'Short Term Course on Gas Turbine - Development, Operation and Maintenance for Power & Propulsion - 2015 (GT-DOMPP-2015){" "}'}
                            pi={'Coordinator: Dr. Abhishek Singh and Dr. Sharifuddin Mondal Organizing Secretary: Prof. Om Prakash'}
                            year={'May 18-22, 2015'}
                        /> */}
                        <Compo
                            sno={'1.'}
                            project={'Short Term Course on Gas Turbine - Development, Operation and Maintenance for Power & Propulsion - 2015 (GT-DOMPP-2015)'}
                            pi={'Coordinator: Dr. Abhishek Singh and Dr. Sharifuddin Mondal Organizing Secretary: Prof. Om Prakash'}
                            year={'May 18-22, 2015'}
                        />
                        <Compo
                            sno={'2.'}
                            project={'Advanced Materials, Processing and Characterization (AMPC-2016) organized under the aegis of TEQIP-II'}
                            pi={'Coordinator: Dr. Vikas Upadhyay, Dr. Nilamber Kumar Singh'}
                            year={'February 18-20, 2016'}
                        />
                        <Compo
                            sno={'3.'}
                            project={'SHORT TERM COURSE ON ADVANCED MANUFACTURING PRACTICES - 2016, (AMP-2016)'}
                            pi={'Joint Secretary: Dr. Abhishek Singh and Dr. Anupam Das Organizing Secretary: Dr. A.N Sinha'}
                            year={'March 07-12, 2016'}
                        />
                        <Compo
                            sno={'4.'}
                            project={'International Conference on Advances and Soft Computing Applications in Design and Manufacturing (ASCADM-2018)'}
                            pi={'Chairman: Dr. Amit Kumar and Dr. M.P. Singh Secretary: Dr. Abhishek Singh, Mr. Arun Kumar, Dr. Vikas Upadhyay and Dr. Gowrisankar S.'}
                            year={'June 04-06, 2018'}
                        />
                        <Compo
                            sno={'5.'}
                            project={'Renewable Energy and Applications-2018 (REA 2018)'}
                            pi={'Chairman: Prof. Om Prakash Coordinators: Dr. A. Karpagaraj, Dr. A.K. Das, Dr. Rahul Goyal Organizing Secretary: Dr. Vimal K E K'}
                            year={'December 19-23, 2018'}
                        />
                        <Compo
                            sno={'6.'}
                            project={'One-week e-workshop on “Recent Trends in Mechanical Engineering – 2020 (RTME-2020)'}
                            pi={'Coordinator: Dr. Abhishek Singh and Dr. Amit Kumar'}
                            year={'July 20-24, 2020'}
                        />
                        <Compo
                            sno={'7.'}
                            project={'One-week online e-short term course on “Advances in Design & Manufacturing Engineering – 2020 (ADME-2020)'}
                            pi={'Coordinator: Dr. Abhishek Singh and Dr. Amit Kumar Convener: Dr. Shailesh Mani Pandey and Dr. Ambrish Maurya'}
                            year={'August 03-07, 2020'}
                        />
                        <Compo
                            sno={'8.'}
                            project={'Online FDP on DEEKSHARAMBH (Student Induction Program)'}
                            pi={'Coordinator: Dr. Yogesh Kumar Convener: Dr. Amit Kumar Chairman: Prof. S. K. Verma'}
                            year={'August 10-14, 2020'}
                        />
                        <Compo
                            sno={'9.'}
                            project={'Online FDP on Universal Human Values for DEEKSHARAMBH (Student Induction Program)'}
                            pi={'Coordinator: Dr. Yogesh Kumar Convener: Dr. Amit Kumar Chairman: Prof. S. K. Verma'}
                            year={'September 21-25, 2020'}
                        />
                        <Compo
                            sno={'10.'}
                            project={'International Conference on Industrial and Manufacturing System (CIMS 2020), Venue: NIT Jalandhar'}
                            pi={'Secretary: Dr. Abhishek Singh'}
                            year={'October 09-11, 2020'}
                        />
                        <Compo
                            sno={'11.'}
                            project={'One week short term course on “Micro Manufacturing: Challenges and Opportunities”; Venue: PEC Chandigarh'}
                            pi={'Coordinator: Dr. Abhishek Singh'}
                            year={'January 04-08, 2021'}
                        />
                        <Compo
                            sno={'12.'}
                            project={'AICTE Training And Learning (ATAL) Academy Online FDP on Novel Materials'}
                            pi={'Coordinator: Dr. Abhishek Singh'}
                            year={'February 08-12, 2021'}
                        />
                        <Compo
                            sno={'13.'}
                            project={'International Conference on “Progressive Research in Industrial & Mechanical Engineering” (PRIME - 2021)'}
                            pi={'Secretary: Dr. Abhishek Singh'}
                            year={'August 05-07, 2021'}
                        />
                        <Compo
                            sno={'14.'}
                            project={'“Industry 4.0 Technologies: Application in Manufacturing Supply Chain” under the “Scheme of financial assistance for setting up of Electronics and ICT Academies” by the Ministry of Electronics and Information Technology (MeitY), Government of India.'}
                            pi={'Coordinator: Dr. Sonu Rajak'}
                            year={'May 02–13, 2022'}
                        />
                        <Compo
                            sno={'15.'}
                            project={'“Additive Manufacturing and 3D Printing (AM & 3DP)” under the “Scheme of financial assistance for setting up of Electronics and ICT Academies” by the Ministry of Electronics and Information Technology (MeitY), Government of India.'}
                            pi={'Coordinator: Dr. Sonu Rajak'}
                            year={'July 18 - 29, 2022'}
                        />
                        <Compo
                            sno={'16.'}
                            project={'“Digital Transformations in Operations & Supply Chain Management” under the “Scheme of financial assistance for setting up of Electronics and ICT Academies” by the Ministry of Electronics and Information Technology (MeitY), Government of India.'}
                            pi={'Coordinator: Dr. Sonu Rajak'}
                            year={'September 06 - 15, 2022'}
                        />
                        <Compo
                            sno={'17.'}
                            project={'Online FDP on Universal Human Values for DEEKSHARAMBH (Student Induction Program)'}
                            pi={'Coordinator: Prof. Amit Kumar, MED, Dr. Ashish Ranjan Sinha, HSS, Dr. Zeeshan Ali, HSS, Dr. Amitesh Kumar, EED'}
                            year={'September 21-25, 2020'}
                        />
                        <Compo
                            sno={'18.'}
                            project={'SERB Sponsored Symposium on Graphene: The Wonder Material of the Future'}
                            pi={'Convener: Dr. Om Ji Shukla'}
                            year={'July 10 - 16, 2023'}
                        />
                        <Compo
                            sno={'19.'}
                            project={'Emerging Trends and Commercialization of Intellectual Property Rights (ETCIPR 2024)'}
                            pi={'Coordinator: Prof. Amit Kumar, MED, Dr. Ashish Ranjan Sinha, HSS, Prof. Abhishek Singh, MED, Dr. Zeeshan Ali, HSS'}
                            year={'January 08 - 12, 2024'}
                        />
                        <Compo
                            sno={'20.'}
                            project={'The Faculty Sensitisation Programme on BIS Activities'}
                            pi={'Coordinator: Prof. Amit Kumar, MED'}
                            year={'April 04, 2024'}
                        />



                    </div>
                </div>

            </div>
        </div>

    )
}
export default Page
