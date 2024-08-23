import BackDepartment from "../../../components/department/BackDepartment";
function Compo({ sno, project, file, title, amount, investigator, status, sdate, edate, duration }) {
    return (
        <>
            <div className="col-span-1 border border-black pl-4 py-2 flex items-center">
                {sno}
            </div>
            <div className="col-span-2 border border-black pl-4 py-6 flex items-center">
                {project}
            </div>
            <div className="col-span-1 border border-black pl-4 py-2 flex items-center whitespace-normal overflow-auto overflow-ellipsis">
                {file}
            </div>
            <div className="col-span-2 border border-black pl-4 py-2 flex items-center">
                {title}
            </div>
            <div className="col-span-1 border border-black pl-4 py-2 flex items-center">
                {amount}
            </div>
            <div className="col-span-1 border border-black pl-4 py-2 flex items-center">
                {investigator}
            </div>
            <div className="col-span-1 border border-black pl-4 py-2 flex items-center">
                {status}
            </div>
            <div className="col-span-1 border border-black pl-4 py-2 flex items-center">
                {sdate}
            </div>
            <div className="col-span-1 border border-black pl-4 py-2 flex items-center">
                {edate}
            </div>
            <div className="col-span-1 border border-black pl-4 py-2 flex items-center">
                {duration}
            </div>
        </>
    )
}
function Compon({ title, amount, agency, faculty }) {
    return (
        <>

            <div className="col-span-2 border border-black pl-4 py-2 flex items-center">
                {faculty}
            </div>
            <div className="col-span-4 border border-black pl-4 py-6 flex items-center">
                {title}
            </div>
            <div className="col-span-3 border border-black pl-4 py-2 flex items-center whitespace-normal overflow-auto overflow-ellipsis">
                {agency}
            </div>

            <div className="col-span-2 border border-black pl-4 py-2 flex items-center">
                {amount}
            </div>

        </>
    )
}

function Conf({ conference, duration, nation, publisher, proceeding }) {
    return (
        <>

            <div className="col-span-3 border border-black pl-4 py-2 flex items-center">
                {conference}
            </div>
            <div className="col-span-2 border border-black pl-4 py-6 flex items-center">
                {duration}
            </div>
            <div className="col-span-2 border border-black pl-4 py-2 flex items-center whitespace-normal overflow-auto overflow-ellipsis">
                {nation}
            </div>

            <div className="col-span-1 border border-black pl-4 py-2 flex items-center">
                {publisher}
            </div>
            <div className="col-span-4 border border-black pl-4 py-2 flex items-center">
                {proceeding}
            </div>

        </>
    )
}
function Course({ title, developed, duration, person }) {
    return (
        <>

            <div className="col-span-2 border border-black pl-4 py-2 flex items-center">
                {title}
            </div>
            <div className="col-span-3 border border-black pl-4 py-6 flex flex-col items-center">
                {developed}
            </div>
            <div className="col-span-3 border border-black pl-4 py-2 flex items-center whitespace-normal overflow-auto overflow-ellipsis">
                {duration}
            </div>

            <div className="col-span-2 border border-black pl-4 py-2 flex items-center">
                {person}
            </div>

        </>
    )
}
function Lecture({ title,  duration, person }) {
    return (
        <>

            <div className="col-span-4 border border-black pl-4 py-2 flex items-center">
                {title}
            </div>
            <div className="col-span-3 border border-black pl-4 py-2 flex items-center whitespace-normal overflow-auto overflow-ellipsis">
                {duration}
            </div>

            <div className="col-span-3 border border-black pl-4 py-2 flex items-center">
                {person}
            </div>

        </>
    )
}
function Scourse({ sno, duration, other,organized, title}) {
    return (
        <>

            <div className="col-span-1 border border-black pl-4 py-2 flex items-center">
                {sno}
            </div>
            <div className="col-span-4 border border-black pl-4 py-6 flex items-center">
                {title}
            </div>
            <div className="col-span-2 border border-black pl-4 py-2 flex items-center whitespace-normal overflow-auto overflow-ellipsis">
                {organized}
            </div>

            <div className="col-span-1 border border-black pl-4 py-2 flex items-center">
                {duration}
            </div>
            <div className="col-span-4 border border-black pl-4 py-2 flex items-center">
                {other}
            </div>

        </>
    )
}
function Electure({ title, sno, duration, person }) {
    return (
        <>

            <div className="col-span-1 border border-black pl-4 py-2 flex  items-center">
                {sno}
            </div>
            <div className="col-span-4 border border-black pl-4 py-6 flex items-center">
                {title}
            </div>
            <div className="col-span-3 border border-black pl-4 py-2 flex items-center whitespace-normal overflow-auto overflow-ellipsis">
                {duration}
            </div>

            <div className="col-span-3 border border-black pl-4 py-2 flex items-center">
                {person}
            </div>

        </>
    )
}
export default function activities() {

    return (
        <div className=" flex flex-col p-10 ">
            <div className="flex flex-col md:ml-10 mb-3">
                <div>
                    <p className="text-red-900 text-3xl font-bold">
                        ACTIVITIES
                    </p>
                </div>
                <div className="mt-2">
                    <p className="text-gray-500 text-base font-semibold">
                        Electrical and Engineering
                    </p>
                </div>
                <BackDepartment navigate={"/Department/EE"} />
            </div>
            <div className="mx-4 border p-4 rounded-md shadow-lg shadow-slate-400 backdrop-blur-md">
                <div>
                    <h1 className="font-semibold lg:text-2xl text-xl">List of Research Projects Sanctioned / On-going:-</h1>
                    <p>The list of sponsored Research projects carried out by the faculty members of
                        the department are provided in the following table:</p>
                </div>
                <div className="mb-10 mt-3 lg:mr-2 overflow-x-auto">
                    <div className="grid grid-cols-12 border min-w-[1400px]">
                        {/* heading  */}
                        <div className="col-span-1 border border-black pl-4 py-2 flex items-center text-red-900 font-semibold">
                            Sr.No.
                        </div>
                        <div className="col-span-2 border border-black pl-4 py-6 flex flex-col items-center text-red-900 font-semibold">
                            Project Scheme and Sponsoring Agency
                        </div>
                        <div className="col-span-1 border border-black pl-4 py-2 flex items-center text-red-900 font-semibold">
                            File Number
                        </div>
                        <div className="col-span-2 border border-black pl-4 py-2 flex items-center text-red-900 font-semibold">
                            Title of Project
                        </div>
                        <div className="col-span-1 border border-black pl-4 py-2 flex flex-col justify-center items-center text-red-900 font-semibold">
                            Amount(INR)
                        </div>
                        <div className="col-span-1 border border-black pl-4 py-2 flex items-center text-red-900 font-semibold">
                            Name of Investigator
                        </div>
                        <div className="col-span-1 border border-black pl-4 py-2 flex items-center text-red-900 font-semibold">
                            Status
                        </div>
                        <div className="col-span-1 border border-black pl-4 py-2 flex items-center text-red-900 font-semibold">
                            Start Date
                        </div>
                        <div className="col-span-1 border border-black pl-4 py-2 flex items-center text-red-900 font-semibold">
                            End Date
                        </div>
                        <div className="col-span-1 border border-black  py-2  flex items-center text-red-900 font-semibold box-border">
                            Duration(Years)
                        </div>
                        <Compo
                            sno={'1'}
                            project={'Department of Science and Technology (DST)'}
                            file={'89830'}
                            title={'DST-FIST 2023'}
                            amount={'82,76,000'}
                            investigator={'Dr. Rajib Kumar Mandal'}
                            status={'Approved October 2023'}
                            sdate={'-'}
                            edate={'-'}
                            duration={'5.0'}

                        />
                        <Compo
                            sno={'2'}
                            project={'Science and Engineering Research Board (SERB)'}
                            file={'EEQ/2022/000555'}
                            title={'Design of Switched-Capacitor Based Boosting Inverter for PV Applications with Fewer Components'}
                            amount={'33,93,434'}
                            investigator={'Dr. Rajib Kumar Mandal'}
                            status={'Ongoing'}
                            sdate={'14.02.2023'}
                            edate={'13.02.2026'}
                            duration={'3.0'}
                        />
                        <Compo
                            sno={'3'}
                            project={'Bihar Council on Science and Technology (BCST)'}
                            file={'BCST-RD-01/2022-797'}
                            title={'A smart and connected Electrochemical device for quality analysis of agricultural products'}
                            amount={'2,00,000'}
                            investigator={'Dr. Arunangshu Ghosh'}
                            status={'Ongoing'}
                            sdate={'14.10.2023'}
                            edate={'3.10.2025'}
                            duration={'2.0'}
                        />
                        <Compo
                            sno={'4'}
                            project={'Department of Biotechnology (DBT)'}
                            file={'BT/PR49634/MED/32/851/2023'}
                            title={'Development of a novel soft -robotic joint for potential assistive applications using piezoelectric composite elastomer based synthetic muscle fibres'}
                            amount={'32,76,000'}
                            investigator={'Dr. Arunangshu Ghosh'}
                            status={'Approved on July 2023'}
                            sdate={'-'}
                            edate={'-'}
                            duration={'1.5'}
                        />
                        <Compo
                            sno={'5'}
                            project={'Startup Research grants'}
                            file={'SRG/2021/001837'}
                            title={'Design and development of indigenous low-cost phasor measurement unit'}
                            amount={'32,17,000'}
                            investigator={'Dr. M Senthil Kumar'}
                            status={'Ongoing'}
                            sdate={'14.11.2021'}
                            edate={'13.11.2024'}
                            duration={'3.0'}
                        />
                        <Compo
                            sno={'6'}
                            project={'Startup Research grants'}
                            file={'SRG/2021/002110'}
                            title={'Bio-inspired electronic synaptic cells for neuromorphic and bio-medical applications'}
                            amount={'29,00,000'}
                            investigator={'Dr. Amitesh Kumar'}
                            status={'Ongoing'}
                            sdate={'14.11.2021'}
                            edate={'13.11.2024'}
                            duration={'3.0'}
                        />
                        <Compo
                            sno={'7'}
                            project={'Biotechnology Ignition Grant (BIG), BIRAC, DBT, Govt. of India'}
                            file={'BIRAC/KIIT01201/BIG-17/20'}
                            title={'Development of portable spectroscopic instruments for on-site estimation of quality compounds in tea'}
                            amount={'49,55,000'}
                            investigator={'Dr. Arunangshu Ghosh-CoPI'}
                            status={'Completed'}
                            sdate={'20.12.2021'}
                            edate={'19.12.2023'}
                            duration={'2.0'}
                        />
                        <Compo
                            sno={'8'}
                            project={'Early Career Research Award, SERB, DST, Govt. of India'}
                            file={'ECR/2017/001027'}
                            title={'Sustainable Smart Grid Framework for Energy Management Sytem Incorporating available Renewable Resources'}
                            amount={'20,19,600'}
                            investigator={'Dr. Mala De'}
                            status={'Completed'}
                            sdate={'15.07.2017'}
                            edate={'14.01.2021'}
                            duration={'3.5'}
                        />
                        <Compo
                            sno={'9'}
                            project={'Early Career Research Award, SERB, DST, Govt. of India'}
                            file={'ECR/2016/000900'}
                            title={'Fault Tolerant Control of Permanent Magnet Synchronous Motor Drive in Electric Vehicles'}
                            amount={'29,45,180'}
                            investigator={'Dr. Vimlesh Verma'}
                            status={'Completed'}
                            sdate={'29.09.2016'}
                            edate={'28.03.2020'}
                            duration={'3.5'}
                        />
                        <Compo
                            sno={'10'}
                            project={'Early Career Research Award, SERB, DST, Govt. of India'}
                            file={'ECR/2016/001547'}
                            title={'Design and development of a low cost BLDC motor drive for solar PV based irrigation system'}
                            amount={'42,17,530'}
                            investigator={'Dr. Nishat Anwar'}
                            status={'Completed'}
                            sdate={'28.03.2017'}
                            edate={'27.09.2020'}
                            duration={'3.5'}
                        />
                        <Compo
                            sno={'11'}
                            project={'TEQIP Collaborative Research Scheme, NPIU, Govt. of India'}
                            file={'-'}
                            title={'Development of portable and industry viable torsional vibration measurement system'}
                            amount={'13,35,000'}
                            investigator={'Dr. Nishat Anwar'}
                            status={'Completed'}
                            sdate={'8.06.2019'}
                            edate={'30.09.2020'}
                            duration={'1.25'}
                        />
                        <Compo
                            sno={'12'}
                            project={'Seed Project Grant, NIT Patna'}
                            file={'NITP/3040/19'}
                            title={'High Performance Vector Controlled Multiphase AC Machines'}
                            amount={'10,00,000'}
                            investigator={'Dr. Ambarisha Mishra'}
                            status={'Completed'}
                            sdate={'02.09.2019'}
                            edate={'01.09.2021'}
                            duration={'2.0'}
                        />
                        <Compo
                            sno={'13'}
                            project={'TEQIP-AICTE, Collaborative research scheme'}
                            file={'-'}
                            title={'Investigation into QoS for Next Generation Networks'}
                            amount={'10,62,000'}
                            investigator={'Dr. Ravi Shankar'}
                            status={'Completed'}
                            sdate={'-'}
                            edate={'-'}
                            duration={'2.25'}
                        />
                        <Compo
                            sno={'14'}
                            project={'Instrument Development Program, DST, Govt. of India'}
                            file={'IDP/SEN/05/2015'}
                            title={'Development of Potentiostat System for General Purpose Electro-Chemical Applications'}
                            amount={'23,33,600'}
                            investigator={'Dr. Arunangshu Ghosh-CoPI'}
                            status={'Completed'}
                            sdate={'21.07.2016'}
                            edate={'20.07.2019'}
                            duration={'3.0'}
                        />
                        <Compo
                            sno={'15'}
                            project={'Early Career Research Award, SERB, DST, Govt. of India'}
                            file={'CR/2016/001813'}
                            title={'Development of a portable electronic tongue for estimation of tea quality and spoilage detection of food samples'}
                            amount={'15,95,000'}
                            investigator={'Dr. Arunangshu Ghosh'}
                            status={'Completed'}
                            sdate={'17.03.2017'}
                            edate={'6.09.2020'}
                            duration={'3.5'}
                        />
                        <Compo
                            sno={'Total Value of Projects (INR)'}
                            project={'42,725,344/-'}
                            file={''}
                            title={''}
                            amount={''}
                            investigator={''}
                            status={''}
                            sdate={''}
                            edate={''}
                            duration={''}
                        />
                    </div>
                </div>
                <div >
                    <h1 className="font-bold text-[23px]">Cunsultancy Projects:-</h1>
                </div>
                <div className="mb-10 mt-3 lg:mr-2 overflow-x-auto">
                    <div className="grid grid-cols-11 border min-w-[1400px]">
                        {/* heading  */}
                        <div className="col-span-2 border border-black pl-4 py-2 flex items-center text-red-900 font-semibold">
                            Name of the faculty
                        </div>
                        <div className="col-span-4 border border-black pl-4 py-6 flex flex-col items-center text-red-900 font-semibold">
                            Project Title
                        </div>
                        <div className="col-span-3 border border-black pl-4 py-2 flex items-center text-red-900 font-semibold">
                            Funding Agency
                        </div>
                        <div className="col-span-2 border border-black pl-4 py-2 flex flex-col justify-center items-center text-red-900 font-semibold">
                            Amount(INR)
                        </div>
                        <Compon
                            faculty={'Prof. Ramesh Kumar, Dr. Rajib Kumar Mandal'}
                            title={'Vetting of electrical design of new electrical distribution system of Chanakya National Law University, Patna (07.04.2021)'}
                            agency={'Chanakya National Law University, Patna, Bihar'}
                            amount={'4,60,200'}
                        />
                        <Compon
                            faculty={'Dr. Rajib Kumar Mandal, Dr. Nishat Anwar'}
                            title={'Vetting for MEP schemes/drawings for the construction of 240 bedded hospital building of Dr. Radha Krishan Medical College and Hospital, Hamirpur ( 27.04.2021)'}
                            agency={'Ahluwalia Contracts (India) Limited, New Delhi'}
                            amount={'5,36,900'}
                        />
                        <Compon
                            faculty={'Dr. Rajib Kumar Mandal, Dr. Ravi Shankar'}
                            title={'Vetting of MEP services design and drawing of all buildings at the proposed permanent campus of IIIT bhagalpur, Bihar ( 13.04.2021)'}
                            agency={'DDF Consultants, Pitampura, New Delhi'}
                            amount={'5,98,260'}
                        />
                        <Compon
                            faculty={'Dr. Rajib Kumar Mandal, Dr. Ravi Shankar'}
                            title={'Upgradation of Jawaharlal Nehru medical college and Hospital, Bhagalpur, Bihar ( 20.05.2019)'}
                            agency={'Tribeni Constructions Limited, Guwahati, Assam'}
                            amount={'4,44,860'}
                        />
                        <Compon
                            faculty={'Dr. Rajib Kumar Mandal, Dr. Ravi Shankar'}
                            title={'Upgradation of PMCH, Patna ( 28.10.2020)'}
                            agency={'C.K. Constructions, Noida, Uttar Pradesh'}
                            amount={'5,67,580'}
                        />
                        <Compon
                            faculty={'Prof. Ramesh Kumar, Dr. Rajib Kumar Mandal'}
                            title={'Proof checking and E & M works regarding the construction of academic and residential complexes for the campus of IIT Patna, Bihta ( 05.02.2019)'}
                            agency={'NCC Limited, Bihta, Patna, Bihar'}
                            amount={'3,54,000'}
                        />
                        <Compon
                            faculty={'Dr. Rajib Kumar Mandal'}
                            title={'To examine the executed work of supply, installation, testing and commissioning of air-conditioners and associated electrical work at SCI building'}
                            agency={'IGIMS Patna'}
                            amount={'3,06,800'}
                        />
                        <Compon
                            faculty={'Dr. Rajib Kumar Mandal'}
                            title={'Vetting drawings/ documents of internal and external, electrical civil and mechanical design and drawing for the 240 bedded hospital, academic block, service block, department work and specialized services for Radhakrishnan medical college and hospital at Hamirpur, Himachal Pradesh.'}
                            agency={'Ahulwalia Contracts (Inda, Ltd.)'}
                            amount={'5,36,900'}
                        />
                        <Compon
                            faculty={'Dr. Rajib Kumar Mandal'}
                            title={'Vetting of MEP services, design and drawings of permanent campus of IIM Sambalpur, Orissa.'}
                            agency={'Dee Vee Projects Ltd., IIM Sambalur'}
                            amount={'6,37,000'}
                        />
                        <Compon
                            faculty={'Dr. Ambrisha Mishra'}
                            title={'Vetting of design and drawing related to Nikrish Pump Canal Project, Buxar, Bihar'}
                            agency={'Flowmore Ltd.'}
                            amount={'3,01,600'}
                        />
                        <Compon
                            faculty={'Dr. Ambrisha Mishra'}
                            title={'Design and drawing related to Jaitpura Pump Canal Project, Kaimur, Bihar'}
                            agency={'Flowmore Ltd.'}
                            amount={'2,71,440'}
                        />
                        <Compon
                            faculty={'Dr. Rajib Kumar Mandal'}
                            title={'To examine the executed work of supply, installation, testing and commissioning of air-conditioners and associated electrical work at SCI building'}
                            agency={'IGIMS Patna'}
                            amount={'3,06,800'}
                        />
                    </div>
                </div>
                <div >
                    <h1 className="font-bold text-[23px]">Conferences:-</h1>
                </div>
                <div className="mb-10 mt-3 lg:mr-2 overflow-x-auto">
                    <div className="grid grid-cols-12 border min-w-[1400px]">
                        {/* heading  */}
                        <div className="col-span-3 border border-black pl-4 py-2 flex items-center text-red-900 font-semibold">
                            Name of Conference
                        </div>
                        <div className="col-span-2 border border-black pl-4 py-6 flex flex-col items-center text-red-900 font-semibold">
                            Duration
                        </div>
                        <div className="col-span-2 border border-black pl-4 py-2 flex items-center text-red-900 font-semibold">
                            National/International
                        </div>
                        <div className="col-span-1 border border-black pl-4 py-2 flex flex-col justify-center items-center text-red-900 font-semibold">
                            Publisher
                        </div>
                        <div className="col-span-4 border border-black pl-4 py-2 flex flex-col justify-center items-center text-red-900 font-semibold">
                            Proceeding
                        </div>
                        <Conf
                            conference={'3rd International Conference on Emerging Frontiers in Electrical and Electronic Technologies (ICEFEET)'}
                            duration={'21-22 Dec. 2023'}
                            nation={'International'}
                            publisher={'IEEE'}
                            proceeding={'https://ieeexplore.ieee.org/xpl/conhome/10452149/proceeding'}
                        />
                        <Conf
                            conference={'2rd International Conference on Emerging Frontiers in Electrical and Electronic Technologies (ICEFEET)'}
                            duration={'24-25 June 2022'}
                            nation={'International'}
                            publisher={'IEEE'}
                            proceeding={'https://ieeexplore.ieee.org/xpl/conhome/9847617/proceeding'}
                        />
                        <Conf
                            conference={'International Conference on Emerging Frontiers in Electrical and Electronic Technologies (ICEFEET)'}
                            duration={'10-11 July 2020'}
                            nation={'International'}
                            publisher={'IEEE'}
                            proceeding={'https://ieeexplore.ieee.org/xpl/conhome/9177228/proceeding'}
                        />
                    </div>
                </div>
                <div >
                    <h1 className="font-bold text-[23px]"> The List of Short Term Courses organized:-</h1>
                </div>
                <div className="mb-10 mt-3 lg:mr-2 overflow-x-auto ">
                    <div className="grid grid-cols-10 border min-w-[1400px]">
                        {/* heading  */}
                        <div className="col-span-2 border border-black pl-4 py-2 flex items-center text-red-900 font-semibold">
                           Title
                        </div>
                        <div className="col-span-3 border border-black pl-4 py-6 flex flex-col items-center text-red-900 font-semibold">
                            Developed/Organized By
                        </div>
                        <div className="col-span-3 border border-black pl-4 py-2 flex items-center text-red-900 font-semibold">
                           Duration
                        </div>
                        <div className="col-span-2 border border-black pl-4 py-2 flex flex-col justify-center items-center text-red-900 font-semibold">
                           Resource Persons
                        </div>
                             <Course
                              title={'DSP Applications on ARM Platform'}
                              developed={'Dr Arunangshu Ghosh'}
                              duration={'7 days (26/08/2016 to 01/09/2016)'}
                              person={'Prof. S K Sinha (Retd. Prof. IISc Bangalore) Prof. Donald Reay (Heriot-Watt University; Edinburgh, UK.'}
                             />
                              <Course
                              title={'Short term course(Intelligent sensing technologies and Instrumentation)'}
                              developed={'Dr Arunangshu Ghosh'}
                              duration={'5 days (05/0l/2016 to 09/01/2016)'}
                              person={'IITs, JU, NIT and Industries (CDAC)'}
                             />
                              <Course
                              title={'Short term course(Advanced Power Electronics converters for renewable energy and Industrial Drives)'}
                              developed={'Dr Vimlesh Verma'}
                              duration={'5 days (14/12/2015 to 18/12/2015)'}
                              person={'Faculties from IITs, NITs and Industries (ABB)'}
                             />
                              <Course
                              title={'Short term course(Advances in Industrial Control)'}
                              developed={'Dr Nishat Anwar'}
                              duration={'5 days (27/l 1/2015 to 1/12/2015)'}
                              person={'Faculties from IITs , AMU, NITs and Foreign University.'}
                             />
                              <Course
                              title={'Short term course Reliability, Availability, Maintainability and Safety (RAMS)'}
                              developed={'Dr Mala De'}
                              duration={'2 days (18/04/2015 to 19/04/2015)'}
                              person={'Dr. Ajeet Kr PandeyDr. Mukul Verma,Experts from Industries'}
                             />
                               <Course
                              title={'Summer School'}
                              developed={'Dr G K Choudhury'}
                              duration={'1 week (19/10/2012 to 23/10/2012)'}
                              person={'Faculties from IITs and NITs'}
                             />
                            
                        </div>
                        </div>
                        <div >
                    <h1 className="font-bold text-[23px]">List of Expert Lectures by Renowned Academicians and Industry Representatives:-</h1>
                </div>
                        <div className="mb-10 mt-3 lg:mr-2 overflow-x-auto">
                    <div className="grid grid-cols-10 border min-w-[1400px]">
                        {/* heading  */}
                        <div className="col-span-4 border border-black pl-4 py-2 flex flex-col items-center text-red-900 font-semibold">
                           Title
                        </div>
                        <div className="col-span-3 border border-black pl-4 py-2 flex flex-col items-center text-red-900 font-semibold">
                           Duration
                        </div>
                        <div className="col-span-3 border border-black pl-4 py-2 flex flex-col justify-center items-center text-red-900 font-semibold">
                           Resource Persons
                        </div>
                            <Lecture
                            title={'Expert classes and discussion session on Power Electronics and Industrial Drives & control'}
                            duration={'4 days (25/02/2016 to 28/02/2016)'}
                            person={'Prof. S.K Sinha (Retd. Prof. IISc Bangalore)'}
                            />
                                <Lecture
                            title={'DC Motor Speed Control Problem and Discussion on end-to-end Controller Design'}
                            duration={'4 days (25/02/216 to 28/02/2016)'}
                            person={'Prof. S.K Sinha (Retd. Prof. IISc Bangalore)'}
                            />
                                <Lecture
                            title={'Power Electronics & Industrial Drive Control'}
                            duration={'5 days (03/02/2015 to 09/02/2015)'}
                            person={'J R P Gupta(Professor, DTU)'}
                            />
                                <Lecture
                            title={'General overview on Aerospace Industries and equipment and Information on higher studies requirement in USA'}
                            duration={'1 day on 20/03/2015'}
                            person={'Mr. Fariz Kalim, Manager Project Management and Hardware Development, TELEDYNE CONTROLS'}
                            />
                                <Lecture
                            title={'Commercial Aspects of Solar Energy in Indian Market'}
                            duration={'1 day on18/03/2015'}
                            person={'Mr. S. Talapatra(Industry Expert)'}
                            />
                                <Lecture
                            title={'Microcontrollers/ PIC processor/ ARM Processor'}
                            duration={'1 day on 12/03/2015'}
                            person={'Radha Narayan Rao(Industry Expert)'}
                            />
                                 <Lecture
                            title={'Embedded System Design and implementation – case study and discussion'}
                            duration={'1 day on 29/01/2015'}
                            person={'Prof. S.K Sinha (Retd. Prof. IISc Bangalore)'}
                            />
                        </div>
                        </div>
                          
                        <div >
                    <h1 className="font-bold text-[23px]"> The List of Short-Term Courses organized:-</h1>
                </div>
                        <div className="mb-10 mt-3 lg:mr-2 overflow-x-auto">
                    <div className="grid grid-cols-12 border min-w-[1400px]">
                        {/* heading  */}
                        <div className="col-span-1 border border-black pl-4 py-2 flex items-center text-red-900 font-semibold">
                           Sr.No
                        </div>
                        <div className="col-span-4 border border-black pl-4 py-6 flex flex-col items-center text-red-900 font-semibold">
                            Title
                        </div>
                        <div className="col-span-2 border border-black pl-4 py-2 flex items-center text-red-900 font-semibold">
                            Developed/Organized By
                        </div>
                        <div className="col-span-1 border border-black pl-4 py-2 flex flex-col justify-center items-center text-red-900 font-semibold">
                            Duration
                        </div>
                        <div className="col-span-4 border border-black pl-4 py-2 flex flex-col justify-center items-center text-red-900 font-semibold">
                            Other Details
                        </div>
                            <Scourse 
                            sno={'1'}
                            title={'FDP on “Recent Trends in Research & Opportunities in Electrical and Electronic Engineering”'}
                            organized={'Dr. Moina Ajmeri'}
                            duration={'15.3.2021 to 23.03.2021'}
                            other={'Faculties from IITs and NITs'}
                            />
                              <Scourse 
                            sno={'2'}
                            title={'FDP course “Research Methodology For Social Sciences, Engineering and Management: NEP 2020 (RMSSEM 2023)”'}
                            organized={'Dr. Amitesh Kumar'}
                            duration={'10 July-14 July 2023'}
                            other={'Faculties from IITs and NITs'}
                            />
                              <Scourse 
                            sno={'3'}
                            title={'FDP course “Blockchain Technology for Next-Generation Applications”'}
                            organized={'Dr. Amitesh Kumar'}
                            duration={'19 June-24 June 2023'}
                            other={'Faculties from IITs and NITs'}
                            />
                              <Scourse 
                            sno={'4'}
                            title={'FDP course Next-generation Applications in Electrical and Electronics Engineering”'}
                            organized={'Dr. Amitesh Kumar'}
                            duration={'24-01-2022 to 04-02-2022'}
                            other={'Faculties from IITs and NITs'}
                            />
                              <Scourse 
                            sno={'5'}
                            title={'FDP course “Electrical Vehicles and Mobility “'}
                            organized={'Dr. Amitesh Kumar'}
                            duration={'24-01-2022 to 04-02-2022'}
                            other={'jointly organized by NIT Patna, MNIT Jaipur, IIIT Jabalpur'}
                            />
                              <Scourse 
                            sno={'6'}
                            title={'FDP course “Renewable Energy: Research to Industry “'}
                            organized={'Dr. Amitesh Kumar'}
                            duration={'22Aug- 13th Sep. 2020'}
                            other={'Faculties from IITs and NITs'}
                            />
                              <Scourse 
                            sno={'7'}
                            title={'FDP on Next-Generation Semiconductor Devices for high-end applications'}
                            organized={'Dr. Amitesh Kumar'}
                            duration={'22 -27 June 2020'}
                            other={'Faculties from IITs and NITs'}
                            />
                              <Scourse 
                            sno={'8'}
                            title={'FDP on Recent Trends in Robotics'}
                            organized={'Dr. Gagan Deep Meena'}
                            duration={'04.07.2022 to 15.07.2022'}
                            other={'in association with EICT academies of IIITDM Jabalpur, MNIT Jaipur, IIT Roorkee and NIT Patna'}
                            />
                              <Scourse 
                            sno={'9'}
                            title={'Online FDP on Recent Trends in Control System Engineering (ReTreCSE-2021'}
                            organized={'Dr. Gagan Deep Meena Dr. G. Lloyds Raja'}
                            duration={'31.05.2021 to 06.06.2021'}
                            other={'Resource Persons: Prof. Hassan K. Khalil, Michigan State Univ., USA, Prof. Francesco Bullo, UC Santa Barbara, USA, Prof. Simone Baldi, TU Delft, The Netherlands, Prof. Ramon Vilanova, Univ. of Barcelona, Spain, Prof. Hanamoto Tsuyoshi, Kyushu Inst. of Tech., Japan, Prof. Utkal Mehta, Univ. of South Pacific, Fiji, Prof Manuel Mera HernÃ¡ndez, IPN Mexico, Prof. Kazuto Takashima, Kyushu Inst. of Tech., Japan, Dr. M. Shamsuzzoha, Norner AS, Norway, Prof. Bidyadhar Subudhi, IIT Goa , Prof. Arun Tangirala, IIT Madras, Prof. Sandip Ghosh, IIT (BHU) Varanasi, Dr. Rames Chandra Panda, CSIR-CLRI, Chennai, Prof. Shubhendu Bhasin, IIT Delhi, Prof. Sheshagiri Rao, NIT Warangal, Prof. Manas Kumar Bera, NIT Silchar, Prof. Neeli Satyanarayana, MNIT Jaipur Website Link: https://sites.google.com/nitp.ac.in/retrecse2021/home?authuser=0'}
                            />
                                <Scourse 
                            sno={'10'}
                            title={'Online FDP on Deep Learning for Visual Computing and Communication- DELVICCO 2020'}
                            organized={'Dr. Gagan Deep Meena Dr. R. K. Karsh (NIT Silchar) Co-Coordinator'}
                            duration={'15 October, 2020 to 21 October, 2020.'}
                            other={'jointly by Dept of ECE, NIT Silchar and Electronics and ICT Academy, NIT Patna'}
                            />
                                <Scourse 
                            sno={'11'}
                            title={'Global FDPs, G10: Digital Tools for writing, Authoring and Reviewing Manuscripts'}
                            organized={'Dr. Gagan Deep Meena as Academy Level Coordinator'}
                            duration={'Sept 21 to Oct 02 , 2020'}
                            other={'Jointly organized by EICT Academies of NIT Patna, MNIT Jaipur, and IIT Guwahati Resource Persons were Faculties from IITs and NITs'}
                            />
                                <Scourse 
                            sno={'12'}
                            title={'Online FDP on Recent Trends in Control System Engineering (ReTreCSE-2020)'}
                            organized={'Dr. Gagan Deep Meena Dr. G. Lloyds Raja'}
                            duration={'22-28 June 2020'}
                            other={'Resource Persons: - Dr. Shubhendu Bhasin, IIT Delhi, Dr. Ahmad Ali, IIT Patna, Dr. Abhinoy Kumar Singh, IIT Indore, Dr. Vidya Sagar Yellapu, SJTU, China, Dr. Neeli Satyanaraya, MNIT Jaipur, Dr. Sumit Jha, MNNIT Allahabad, Dr. Rahul Radhakrishnan, SVNIT Surat and Control group faculty members of NIT Patna Funded by EICT NIT Patna'}
                            />

<Scourse 
                            sno={'13'}
                            title={'FDP on Theory and Simulations in Robotics (TheSiR-2020)'}
                            organized={'Dr. Gagan Deep Meena'}
                            duration={'01 June to 07 2020'}
                            other={'Resource Persons: Prof. S. K. Saha, IIT Delhi, Dr. Suril Shah, IIT Jodhpur, Dr. Amit IIT Jodhpur, Dr. Anup IIT Jodhpur, Dr. Arun Dayal Udai, IIT(ISM) Dhanbad, Dr. Aamir Hayat, SUTD Singapore Funded by EICT NIT Patna'}
                            />
                                <Scourse 
                            sno={'14'}
                            title={'Faculty Development Programme on “Advances in Industrial Automation”'}
                            organized={'Dr. D. K. Dheer'}
                            duration={'10-14/12/2018'}
                            other={'at NSIT, Amhara, Bihta'}
                            />
                                <Scourse 
                            sno={'15'}
                            title={'Five days Faculty Development Program on Advances in Electrical System'}
                            organized={'Dr. Ravi Shankar'}
                            duration={'July, 2018'}
                            other={'at BIT Sindri'}
                            />
                                 <Scourse 
                            sno={'16'}
                            title={'Workshop on “LabView and its Application”'}
                            organized={'Dr. Vimlesh Verma'}
                            duration={'14th-18th March 2016'}
                            other={'Faculties from IITs and NITs'}
                            />
                                  <Scourse 
                            sno={'17'}
                            title={'Workshop on “Control Design, Simulation and Data Acquisition using Labview and Sensor Interfacing”'}
                            organized={'Dr. Vimlesh Verma'}
                            duration={'5th – 6th April 2016'}
                            other={'Faculties from IITs and NITs'}
                            />
                                  <Scourse 
                            sno={'18'}
                            title={'Dr. Vimlesh Verma'}
                            organized={'Short Term Course on “Institute-Industry Interaction”'}
                            duration={'5th – 9th Dec. 2016'}
                            other={'Faculties from IITs and NITs'}
                            />
                                  <Scourse 
                            sno={'19'}
                            title={'Faculty Development Program Through NKN'}
                            organized={'Dr. Vimlesh Verma'}
                            duration={'11 – 20 Dec. - 2017'}
                            other={'Faculties from IITs and NITs'}
                            />
                                  <Scourse 
                            sno={'20'}
                            title={'Faculty Development Program Through NKN'}
                            organized={'Dr. Vimlesh Verma'}
                            duration={'01st June - 2018'}
                            other={'Faculties from IITs and NITs'}
                            />
                                  <Scourse 
                            sno={'21'}
                            title={'DSP Applications on ARM Platform'}
                            organized={'Dr. Arunangshu Ghosh'}
                            duration={'7 days (26/08/2016 to 01/09/2016)'}
                            other={'Prof. S K Sinha (Retd. Prof. IISc Bangalore) Prof. Donald Reay (Heriot-Watt University; Edinburgh, UK.'}
                            />
                                  <Scourse 
                            sno={'22'}
                            title={'Short term course(Intelligent sensing technologies and Instrumentation)'}
                            organized={'Dr. Arunangshu Ghosh'}
                            duration={' Ghosh	5 days (05/0l/2016 to 09/01/2016)'}
                            other={'IITs, JU, NIT and Industries (CDAC)'}
                            />
                                  <Scourse 
                            sno={'23'}
                            title={'Short term course(Advanced Power Electronics converters for renewable energy and Industrial Drives)'}
                            organized={'Dr. Vimlesh Verma'}
                            duration={'	5 days (14/12/2015 to 18/12/2015)'}
                            other={'Faculties from IITs, NITs and Industries (ABB)'}
                            />
                                  <Scourse 
                            sno={'24'}
                            title={'Short term course(Advances in Industrial Control)'}
                            organized={'Dr. Nishat Anwar'}
                            duration={'5 days (27/l 1/2015 to 1/12/2015)'}
                            other={'Faculties from IITs , AMU, NITs and Foreign University.'}
                            />
                                  <Scourse 
                            sno={'25'}
                            title={'Short term course Reliability, Availability, Maintainability and Safety (RAMS)'}
                            organized={'Dr. Mala De'}
                            duration={'2 days (18/04/2015 to 19/04/2015)'}
                            other={'Dr. Ajeet Kr PandeyDr. Mukul Verma,Experts from Industries'}
                            />
                                  <Scourse 
                            sno={'26'}
                            title={'Summer School'}
                            organized={'Dr. G. K. Choudhury'}
                            duration={'1 week (19/10/2012 to 23/10/2012)'}
                            other={'Faculties from IITs and NITs'}
                            />
                             
                        </div>
                        </div>
                        <div >
                    <h1 className="font-bold text-[23px]">List of Expert Lectures by Renowned Academicians and Representatives:-</h1>
                </div>
                        <div className="mb-10 mt-3 lg:mr-2 overflow-x-auto">
                    <div className="grid grid-cols-11 border min-w-[1400px]">
                        {/* heading  */}
                        <div className="col-span-1 border border-black pl-4 py-2 flex items-center text-red-900 font-semibold">
                           Sr.No.
                        </div>
                        <div className="col-span-4 border border-black pl-4 py-6 flex flex-col items-center text-red-900 font-semibold">
                            Title
                        </div>
                        <div className="col-span-3 border border-black pl-4 py-2 flex items-center text-red-900 font-semibold">
                            Duration/Venue
                        </div>
                        <div className="col-span-3 border border-black pl-4 py-2 flex flex-col justify-center items-center text-red-900 font-semibold">
                            Resource Person
                        </div>
                           <Electure
                            sno={'1'}
                            title={'Introduction to Advanced Distribution Management Systems (ADMS) Organized by IEEE PES Society of EED on Women’s Day'}
                            duration={'8 March 2024 Online Mode'}
                            person={'Dr. Kamakshi P. Swain, Senior Power Systems Engineer, Synergy Systems and Solutions.'}
                           />
                            <Electure
                            sno={'2'}
                            title={"Robot Demonstration of Robotnik Spain's Mobile Manipulator Integrated with Sensors"}
                            duration={'20.10.2021 at T&P Cell Seminar Hall SAC NIT Patna'}
                            person={'Mr. Aditya Marathe, Founder, Nugenix Robotics'}
                           />
                            <Electure
                            sno={'3'}
                            title={'The Rise of Reconfigurable Robots'}
                            duration={'01.11.2021,Venue: Control Lab, 2nd Floor, New Extension Building'}
                            person={'Dr. Aamir Abdullah Hayat, SUTD Singapore'}
                           />
                            <Electure
                            sno={'4'}
                            title={'Expert classes and discussion session on Power Electronics and Industrial Drives & control'}
                            duration={'4 days (25/02/2016 to 28/02/2016)'}
                            person={'Prof. S. K Sinha (Retd Professor IISC Banglore)'}
                           />
                            <Electure
                            sno={'5'}
                            title={'DC Motor Speed Control Problem and Discussion on end-to-end Controller Design'}
                            duration={'4 days (25/02/216 to 28/02/2016)'}
                            person={'Prof. S.K Sinha (Retd. Prof. IISc Bangalore)'}
                           />
                            <Electure
                            sno={'6'}
                            title={'Power Electronics & Industrial Drive Control'}
                            duration={'5 days (03/02/2015 to 09/02/2015)'}
                            person={'J R P Gupta(Professor, DTU)'}
                           />
                            <Electure
                            sno={'7'}
                            title={'General overview on Aerospace Industries and equipment and Information on higher studies requirement in USA'}
                            duration={'1 day on 20/03/2015'}
                            person={'Mr. Fariz Kalim, Manager Project Management and Hardware Development, TELEDYNE CONTROLS'}
                           />
                            <Electure
                            sno={'8'}
                            title={'Commercial Aspects of Solar Energy in Indian Market'}
                            duration={'1 day on18/03/2015'}
                            person={'Mr. S. Talapatra(Industry Expert)'}
                           />
                            <Electure
                            sno={'9'}
                            title={'Microcontrollers/ PIC processor/ ARM Processor'}
                            duration={'1 day on 12/03/2015'}
                            person={'Radha Narayan Rao(Industry Expert)'}
                           />
                            <Electure
                            sno={'10'}
                            title={'Embedded System Design and implementation – case study and discussion'}
                            duration={'1 day on 29/01/2015'}
                            person={'Prof. S.K Sinha (Retd. Prof. IISc Bangalore)'}
                           />
                        </div>
                        </div>
            </div>
      </div>
     

    )
}