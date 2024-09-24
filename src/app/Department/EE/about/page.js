import BackDepartment from "../../../components/department/BackDepartment"


function page(){
    return (
        <div className=" flex flex-col p-10 max-sm:p-2 text-black">  
            <div className="flex flex-col  mb-16">
                <div>
                    <p className="text-red-900 text-3xl max-sm:text-2xl font-bold">
                        ABOUT
                    </p>
                </div>
                <div className="mt-2">
                    <p className="text-gray-500 text-xl font-semibold">
                        ELECTRICAL ENGINEERING
                    </p>
                </div>
                <BackDepartment navigate={"/Department/EE"}/>
            </div>
            {/* section 1 */}
            <div className="mb-10">
                <p className="text-justify">The Department of Electrical Engineering in National Institute of Technology Patna (Formerly known as Bihar College of Engineering) was established in 1945 under Patna University with an intake of 45 students leading to a Bachelor of Science (Engineering) degree of four-year duration. In the year 1978 AICTE approved Post Graduate (PG) course leading to M.Sc. (Engg.) Degree in two specializations: (i) Power System Engineering and (ii) Control System Engineering. The department is also offering the Ph.D. research program since 2009</p>
            </div>
            <div className="mb-10">
                <div className="text-red-900 font-bold text-2xl max-sm:text-2xl mb-8">The Department offers the following academic programs:</div>
                <ol className="list-decimal list-inside ml-5 space-y-4 text-lg max-md:text-[15px] max-sm:text-sm">
                    <li>B. Tech. in Electrical Engineering (151 Seats)</li>
                    <li>Dual Degree (B.Tech.+M. Tech. (Power System)) (10 Seats)</li>
                    <li>M. Tech.</li>
                    <ul className="ml-8 list-disc">
                        <li>Control Systems Engineering -22 seats</li>
                        <li>Power Systems Engineering-10 seats</li>
                    </ul>
                    <li>Ph.D. program since 2009.</li>
                </ol>
            </div>
            <div className="mb-10">
                <div className="text-red-900 font-bold text-2xl max-sm:text-2xl mb-8">The department has undergone following major upgrades in the last five years:</div>
                <ol className="list-decimal list-inside ml-5 space-y-4 text-lg max-md:text-[15px] max-sm:text-sm">
                    <li>Curriculum upgradation in accordance with New Education policy (NEP-2020) in 2021.</li>
                    <li>Introduction of new courses like five years B. Tech. Dual Degree Specialization in Power System Engineering from 2022.</li>
                    <li> Introduction of M. Tech. in power system engineering from 2023.</li>
                    <li>UG program accredited with NBA status since 2021</li>
                </ol>
            </div>
            <p className="text-justify my-4">The Electrical Engineering department has well-qualified faculty with specializations in the field of electrical power systems, electrical machines and drives, power electronics, renewable energy devices, control & robotics, and sensors & instrumentation. The department has an excellent laboratory infrastructure with 10 UG-PG labs, and three state of art research labs to provide good academic lab setup and high-end research facilities. The number of Ph. D. students working in the department is approximately 150. The faculty members of the department published more than 500 research reports, filed more than 20 patents and have 8 patents granted.</p>
            <p className="text-justify my-4">The Department of Electrical Engineering carries out research and consultancy projects from Government and private organizations. In the last five years, the faculty members of the department completed sponsored research projects of total value 427 lacs. Research projects of approximately 212 lacs is running in the department. Apart from that, the department also completed consultancy projects amounting to approximately 53 lacs. The Department of Electrical Engineering, NIT Patna has been awarded with the DST-FIST project for improving research facilities in the domain of power systems, power electronics and Industrial drives, and Control systems on 31.10.2023 for a period of five years. The sanctioned amount of 82 Lacs will facilitate teaching and research activities in the state of art technologies in power transmission and distribution systems, active power filters, multilevel inverters, advanced fault tolerant control techniques, renewable energies, and electric vehicles. The Department envisages to develop new courses, patentable technologies, training programs, quality publications, and extend the developed facilities to the researchers of other institutes with the received support. The department also contributes in the upbringing of society and other educational institutes by providing training, workshops, faculty development program, and awareness programs. The department organizes the “International conference on Emerging Frontiers in Electrical and Electronic Technologies (ICEFEET)” regularly to deliberate, exchange ideas, and produce research collaborations for the technologies those have the potential to significantly impact the domains of Power system, Power Converters, Control systems, Machine Drives, Embedded systems, Measurement and instrumentation technologies.</p>
        </div>
    )
}
export default page