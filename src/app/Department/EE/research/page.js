import BackDepartment from "../../../../components/BackDepartment";

function Compon({ sno, research, descriptive }) {
    return (
        <>

            <div className="col-span-1 border border-black pl-4 py-2 flex items-center ">
                {sno}
            </div>
            <div className="col-span-4 border border-black pl-4 py-6 flex items-center">
                {research}
            </div>
            <div className="col-span-4 border border-black pl-4 py-2 flex items-center whitespace-normal overflow-auto ">
                {descriptive}
            </div>
        </>
    )
}
function Compo({ sno, name, research, publications, phd, patent, project, detail }) {
    return (
        <>

            <div className="col-span-1 border border-black pl-4 py-2 flex items-center">
                {sno}
            </div>
            <div className="col-span-1 border border-black pl-4 py-6 flex items-center">
                {name}
            </div>
            <div className="col-span-1 border border-black pl-4 py-2 flex items-center whitespace-normal overflow-auto overflow-ellipsis">
                {research}
            </div>
            <div className="col-span-1 border border-black pl-4 py-2 flex items-center">
                {publications}
            </div>
            <div className="col-span-1 border border-black pl-4 py-2 flex items-center">
                {phd}
            </div>

            <div className="col-span-1 border border-black pl-4 py-2 flex items-center">
                {patent}
            </div>
            <div className="col-span-2 border border-black pl-4 py-2 flex items-center">
                {project}
            </div>
            <div className="col-span-4 border border-black pl-4 py-2 flex items-center">
                <a href={detail}>{detail}</a>
            </div>

        </>
    )
}

export default function research() {
    return (
        <div className=" flex flex-col p-5 ">
            <div className="flex flex-col md:ml-10 mb-3">
                <div>
                    <p className="text-red-900 text-xl lg:text-2xl  font-bold">
                        RESEARCH AND HIGHLIGHT
                    </p>
                </div>
                <div className="mt-2">
                    <p className="text-gray-500 text-sm lg:text-base font-semibold">
                        ELECTRICAL ENGINEERING
                    </p>
                </div>
                <BackDepartment navigate={"/Department/EE"} />
            </div>
            <div className="mx-4 border p-4 rounded-md shadow-lg shadow-slate-400 backdrop-blur-md">
                    <div className="lg:text-base text-sm text-justify">
                        The Electrical Engineering Department, NIT Patna is
                        a one of the nucleus of academic excellence, research
                        and technological innovation in its domain. With the
                        faculty comprising 29 dedicated members, the department
                        has established itself as a formidable force in the realm
                        of electrical engineering education and research.
                        Their collective expertise spans a diverse array of
                        specialties, reflecting the department&apos;s commitment to both breadth and depth in its academic offerings. One of the hallmarks of the department is its robust research ecosystem, characterized by eight broad research groups. These groups delve into areas of critical importance such as Power and Energy Systems, Electrical Machine & Drives, Control Theory & Practices, Power Electronics & its Application, Electric Vehicles & Energy Storage System, Instrumental & Signal Processing, Semi-Conductor Devices & Circuit System and Robotics & Automation. Through their pioneering research endeavours, faculty members have amassed an impressive track record, boasting more than 330 publications in SCI/SCIE indexed Journals and securing 23 patents to date. Beyond the realm of pure research, the department actively engages with industry partners through 12 externally sponsored projects, which serve as conduits for translating theoretical knowledge into practical applications. These projects, whether ongoing or completed, represent the department&apos;s commitment to bridging the gap between academia and industry, fostering innovation that resonates beyond the confines of the university campus. Moreover, the department&apos;s influence resonates worldwide as it mentored 33 Ph.D scholars who have attained their degrees, with many more in pipeline, embodying the forefront of future innovation in electrical engineering. Through rigorous academic training and personalized guidance, these scholars are equipped with the tools and knowledge necessary to address the pressing challenges of the 21st century. In essence, the Electrical Engineering Department, NIT Patna serves as a beacon of excellence, driving forward the frontiers of knowledge and innovation in the field of electrical engineering. Through its multifaceted approach to education, research, and industry collaboration, the department continues to make profound contributions to both academia and society at large.
                    </div>
                    <div className="mt-6 mb-4 font-semibold lg:text-2xl text-xl">Broadly research area of Electrical Engineering department are classified as below: -</div>
                    <div className="mb-10  lg:mr-2 overflow-x-auto">
                        <div className="grid grid-cols-9 border min-w-[1400px]">
                            {/* heading  */}
                            <div className="col-span-1 border border-black pl-4 py-2 flex items-center text-red-900 font-semibold">
                                Sr.No
                            </div>
                            <div className="col-span-4 border border-black pl-4 py-6 flex flex-col items-center text-red-900 font-semibold">
                                Specialization of the Research
                            </div>
                            <div className="col-span-4 border border-black pl-4 py-6 flex flex-col items-center text-red-900 font-semibold">
                                Discriptive Key-word
                            </div>
                            <Compon
                                sno={'1'}
                                research={'Power and Energy System'}
                                descriptive={'a) Power System Protection & PMU b) Real & Reactive Power Management, Optimal Power Flow c)Renewable energy integration, Operation control & Stability d)Microgrid, Smart-Grid, Restructered Power System, AGC Resiliency & Reliability of Hybrid Power System e)Cyber Security, high performance Computing, Optimization, HVDC & FACTS device application to te Power System.'}
                            />
                            <Compon
                                sno={'2'}
                                research={'Electrical Machine & Drives'}
                                descriptive={'a) Sensorless Control of AC Drives.b) Vector Controlled AC Drives.c) DTC Controlled AC Drives.d) Multilevel Converter Fed AC Drives.e) Multiphase AC motor drive.f) Dob based control of machine.'}
                            />
                            <Compon
                                sno={'3'}
                                research={'Control Theory & Practices'}
                                descriptive={'a) Nonlinear and advanced control techniques (SMC, ADRC, adaptive control, learning based control, non-linear control, optimal control, DOB based control).b) Applications oriented control (such as control for power electronics, load frequency regulations with cyber security, robotics, radar, dc microgrid, altitude control of flight).c) Biomedical applications of control, controller design for industrial processes, chemical process control.d) Digital Control, Discretization techniques, Microprocessor based control.e) Process modelling and identification, control of waste water treatment plant.'}
                            />
                            <Compon
                                sno={'4'}
                                research={'	Power Electronics & its Application'}
                                descriptive={'a) Electric Vehicle Chargers & Charging Stations, Converter Control of Motors, Solid State Transformers.b) Analysis, Modelling, and Control of Power Electronics Converters.c) Renewable Energy & Its Integration; DC, AC, and Hybrid Microgrids; Grid Connected Converters.d) Multilevel Inverters, Reduced Sensor-based SAPF.e) Shunt Active Power Filter, Series Active Power Filter.f) UPQC, STATCOM, D-STATCOM, UPFC, DPFC and Power Quality Improvement Techniques.'}
                            />
                            <Compon
                                sno={'5'}
                                research={'Electric Vehicles & Energy Storage System'}
                                descriptive={'a) Electric Powertrain, Drives and Control.b) Battery Management and Energy Storage Systems.c) Charging Infrastructure and Converters.d) Grid and Renewable Energy Integration'}
                            />
                            <Compon
                                sno={'6'}
                                research={'Robotics & Automation'}
                                descriptive={'a) Unmanned aerial and ground vehicles.b) Bio inspired and Reconfigurable robots.c) Vision based control and Path planning algorithms.d) Multi agent systems.e) Assistive service robots.'}
                            />
                            <Compon
                                sno={'7'}
                                research={'Instrumental & Signal Processing'}
                                descriptive={'a) Multivariate signal modelling using AI/ML techniques.b) Sensor array based instrumentation.c) Sensors and actuators.d) System identification of biochemical processes'}
                            />
                            <Compon
                                sno={'8'}
                                research={'	Semi-Conductor Devices & Circuit System'}
                                descriptive={'a) Design and Fabrication of VLSI and Semiconductor devices.b) Analog and Mixed Signal Integrated Circuit Design.c) Fractional-order Circuits and Systems.d) Microelectronics Circuits and Nanotechnology devices.e) Biosensors, Memory and Neuromorphic Computing.f) Energy Harvesting/Storage Devices, including Solar cells, batteries and fuel cells.'}
                            />


                        </div>
                    </div>
                    <div>
                        <h1 className="font-semibold lg:text-2xl text-xl">Research area of Faculty wise for the Electrical Engineering Department: -</h1>
                    </div>

                    <div className="mb-10 mt-3 lg:mr-2 overflow-x-auto">
                        <div className="grid grid-cols-12 border min-w-[1400px]">
                            {/* heading  */}
                            <div className="col-span-1 border border-black pl-4 py-2 flex items-center text-red-900 font-semibold">
                                Sr.No.
                            </div>
                            <div className="col-span-1 border border-black pl-4 py-6 flex  items-center text-red-900 font-semibold">
                                Name
                            </div>
                            <div className="col-span-1 border border-black pl-2 py-2 flex items-center text-red-900 font-semibold">
                                Specialization of the Research(Serial No.)
                            </div>
                            <div className="col-span-1 border border-black pl-4 py-2 flex items-center text-red-900 font-semibold">
                                No. of Publications in SCI/SCIE indexed Journal
                            </div>
                            <div className="col-span-1 border border-black pl-4 py-2 flex flex-col justify-center items-center text-red-900 font-semibold">
                                No. of Phd Guided
                            </div>

                            <div className="col-span-1 border border-black pl-4 py-2 flex items-center text-red-900 font-semibold">
                                No.of Patent Granted
                            </div>
                            <div className="col-span-2 border border-black  pl-3 py-2 flex items-center text-red-900 font-semibold">
                                No. of externally Sponsored Project(Completed/ongoing)
                            </div>
                            <div className="col-span-4 border border-black pl-4 py-10 flex flex-col items-center text-red-900 font-semibold">
                                More Details(Home Page Link)
                            </div>
                            <Compo
                                sno={'1'}
                                name={'Prof. (Dr.) Girish Kumar Choudhary'}
                                research={'On-lien'}
                                publications={''}
                                phd={''}
                                patent={''}
                                project={''}
                                detail={'https://www.nitp.ac.in/profile?id=girish@nitp.ac.in'}
                            />

                            <Compo
                                sno={'2'}
                                name={'Prof. (Dr.) Ramesh Kumar'}
                                research={'1 & 3'}
                                publications={'02'}
                                phd={'00'}
                                patent={''}
                                project={''}
                                detail={'https://www.nitp.ac.in/profile?id=ramesh@nitp.ac.in'}
                            />

                            <Compo
                                sno={'3'}
                                name={'Dr. Rajib Kumar Mandal'}
                                research={'1, 4 & 5'}
                                publications={'25'}
                                phd={'03'}
                                patent={'00'}
                                project={'01'}
                                detail={'https://www.nitp.ac.in/profile?id=rajib@nitp.ac.in'}
                            />

                            <Compo
                                sno={'4'}
                                name={'Dr. Mala De'}
                                research={'1'}
                                publications={'28'}
                                phd={'04'}
                                patent={'02'}
                                project={'01'}
                                detail={'https://www.nitp.ac.in/profile?id=mala@nitp.ac.in'}
                            />

                            <Compo
                                sno={'5'}
                                name={'Dr. Vimlesh Verma'}
                                research={'2, 4, & 5'}
                                publications={'25'}
                                phd={'05'}
                                patent={'04'}
                                project={'02'}
                                detail={'https://www.nitp.ac.in/profile?id=vimlesh.verma@nitp.ac.in'}
                            />

                            <Compo
                                sno={'6'}
                                name={'Dr. Jayanti Choudhary'}
                                research={'2, 4, & 5'}
                                publications={'01'}
                                phd={'00'}
                                patent={'00'}
                                project={'00'}
                                detail={'https://www.nitp.ac.in/profile?id=jayanti@nitp.ac.in'}
                            />

                            <Compo
                                sno={'7'}
                                name={'Dr. Md Nishat Anwar'}
                                research={'1, 2, 3 & 5'}
                                publications={'30'}
                                phd={'02'}
                                patent={'03'}
                                project={'02'}
                                detail={'https://www.nitp.ac.in/profile?id=nishat@nitp.ac.in'}
                            />

                            <Compo
                                sno={'8'}
                                name={'Dr. Arunangshu Ghosh'}
                                research={'6 & 7'}
                                publications={'26'}
                                phd={'01'}
                                patent={'02'}
                                project={'04'}
                                detail={'https://www.nitp.ac.in/profile?id=arunangshu.ghosh@nitp.ac.in'}
                            />

                            <Compo
                                sno={'9'}
                                name={'Dr. Sanjeev Kumar Mallik'}
                                research={'1, 4 & 5'}
                                publications={'04'}
                                phd={'02'}
                                patent={'00'}
                                project={'00'}
                                detail={'https://www.nitp.ac.in/profile?id=skmallik@nitp.ac.in'}
                            />

                            <Compo
                                sno={'10'}
                                name={'Dr. Ravi Shankar'}
                                research={'1 & 5'}
                                publications={'27'}
                                phd={'05'}
                                patent={'02'}
                                project={'00'}
                                detail={'https://www.nitp.ac.in/profile?id=ravi@nitp.ac.in'}
                            />

                            <Compo
                                sno={'11'}
                                name={'Dr. Dharmendra Kumar Dheer'}
                                research={'1, 3, 5 & 6'}
                                publications={'27'}
                                phd={'02'}
                                patent={'00'}
                                project={'00'}
                                detail={'https://www.nitp.ac.in/profile?id=dkdheer@nitp.ac.in'}
                            />

                            <Compo
                                sno={'12'}
                                name={'Dr. Ashiwani Kumar'}
                                research={'1 & 5'}
                                publications={'05'}
                                phd={'00'}
                                patent={'01'}
                                project={'00'}
                                detail={'https://www.nitp.ac.in/profile?id=ashwani@nitp.ac.in'}
                            />

                            <Compo
                                sno={'13'}
                                name={'Dr. Ambarisha Mishra'}
                                research={'2, 4 & 5'}
                                publications={'06'}
                                phd={'02'}
                                patent={'00'}
                                project={'00'}
                                detail={'https://www.nitp.ac.in/profile?id=ambrish.mishra@nitp.ac.in'}
                            />

                            <Compo
                                sno={'14'}
                                name={'Dr. Moina Ajmeri'}
                                research={'3, 4 & 6'}
                                publications={'06'}
                                phd={'01'}
                                patent={'01'}
                                project={'00'}
                                detail={'https://www.nitp.ac.in/profile?id=moina@nitp.ac.in'}
                            />

                            <Compo
                                sno={'15'}
                                name={'Dr. M SENTHIL KUMAR'}
                                research={'1'}
                                publications={'05'}
                                phd={'00'}
                                patent={'02'}
                                project={'01'}
                                detail={'https://www.nitp.ac.in/profile?id=msk.ee@nitp.ac.in'}
                            />

                            <Compo
                                sno={'16'}
                                name={'Dr. G. Lloyds Raja'}
                                research={'3'}
                                publications={'25'}
                                phd={'01'}
                                patent={'01'}
                                project={'00'}
                                detail={'https://www.nitp.ac.in/profile?id=lloyds.ee@nitp.ac.in'}
                            />

                            <Compo
                                sno={'17'}
                                name={'Dr. Gagan Deep Meena'}
                                research={'3, 5, 6 & 7'}
                                publications={'01'}
                                phd={'00'}
                                patent={'00'}
                                project={'00'}
                                detail={'https://www.nitp.ac.in/profile?id=gagandeep.ee@nitp.ac.in'}
                            />

                            <Compo
                                sno={'18'}
                                name={'Dr. Amitesh Kumar'}
                                research={'1, 5 & 8'}
                                publications={'35'}
                                phd={'02'}
                                patent={'02'}
                                project={'01'}
                                detail={'https://www.nitp.ac.in/profile?id=amitesh.ee@nitp.ac.in'}
                            />

                            <Compo
                                sno={'19'}
                                name={'Dr. Trilochan Penthia'}
                                research={'4 & 5'}
                                publications={'09'}
                                phd={'00'}
                                patent={'00'}
                                project={'00'}
                                detail={'https://www.nitp.ac.in/profile?id=trilochan.ee@nitp.ac.in'}
                            />

                            <Compo
                                sno={'20'}
                                name={'Dr. Ajit Kumar'}
                                research={'1 & 3'}
                                publications={'07'}
                                phd={'00'}
                                patent={'00'}
                                project={'00'}
                                detail={'https://www.nitp.ac.in/profile?id=ajitk.ee@nitp.ac.in'}
                            />

                            <Compo
                                sno={'21'}
                                name={'Dr. Ruchi Agarwal'}
                                research={'4'}
                                publications={'01'}
                                phd={'01'}
                                patent={'01'}
                                project={'00'}
                                detail={'https://www.nitp.ac.in/profile?id=ruchi.agarwal@nitp.ac.in'}
                            />

                            <Compo
                                sno={'22'}
                                name={'Dr. Aasim'}
                                research={'1 & 5'}
                                publications={'04'}
                                phd={'00'}
                                patent={'00'}
                                project={'00'}
                                detail={'https://www.nitp.ac.in/profile?id=aasim.ee@nitp.ac.in'}
                            />

                            <Compo
                                sno={'23'}
                                name={'Dr. Ajishek Raj'}
                                research={'3 & 8'}
                                publications={'25'}
                                phd={'00'}
                                patent={'00'}
                                project={'00'}
                                detail={'https://www.nitp.ac.in/profile?id=ajishek.ee@nitp.ac.in'}
                            />

                            <Compo
                                sno={'24'}
                                name={'Dr. Saran Satsangi'}
                                research={'1 & 5'}
                                publications={'07'}
                                phd={'00'}
                                patent={'01'}
                                project={'00'}
                                detail={'https://www.nitp.ac.in/profile?id=saran.ee@nitp.ac.in'}
                            />

                            <Compo
                                sno={'25'}
                                name={'Dr. Pawan Kumar'}
                                research={'2, 4 & 5'}
                                publications={'00'}
                                phd={'00'}
                                patent={'00'}
                                project={'00'}
                                detail={'https://www.nitp.ac.in/profile?id=pawan.ee@nitp.ac.in'}
                            />

                            <Compo
                                sno={'26'}
                                name={'Dr. Dhruba Kumar'}
                                research={'1'}
                                publications={'04'}
                                phd={'00'}
                                patent={'01'}
                                project={'00'}
                                detail={'https://www.nitp.ac.in/profile?id=dhruba.ee@nitp.ac.in'}
                            />

                            <Compo
                                sno={'27'}
                                name={'Dr. Bineeta Mukhopadhyay'}
                                research={'1, 4 & 5'}
                                publications={'NA'}
                                phd={'NA'}
                                patent={'NA'}
                                project={'NA'}
                                detail={'https://www.nitp.ac.in/profile?id=contract.faculty1.ee@nitp.ac.in'}
                            />

                            <Compo
                                sno={'28'}
                                name={'Dr. Sanjeev Kumar'}
                                research={'6 & 7'}
                                publications={'NA'}
                                phd={'NA'}
                                patent={'NA'}
                                project={'NA'}
                                detail={'https://www.nitp.ac.in/profile?id=contract.faculty2.ee@nitp.ac.in'}
                            />
                            <Compo
                                sno={'29'}
                                name={'Dr. Pankaj Sahu'}
                                research={'2,4 & 5'}
                                publications={''}
                                phd={'NA'}
                                patent={'NA'}
                                project={'NA'}
                                detail={'https://www.nitp.ac.in/profile?id=contract.faculty3.ee@nitp.ac.in'}
                            />

                        </div>
                    </div>
                </div>
        </div>

    )
}
