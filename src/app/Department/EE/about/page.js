import BackDepartment from "../../../components/department/BackDepartment"


function page() {
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
                <BackDepartment navigate={"/Department/EE"} />
            </div>
            {/* section 1 */}
            <div className="mb-5">
                <p className="text-justify">The Department of Electrical Engineering was established in 1945 under Patna University with an intake of 20 students leading to Bachelor of Science (Engineering) degree of four-year duration. The four-year course was later changed to five-year integrated course in 1960 with an intake of 30 students and it continued up to 1972. Again, a four-year course was introduced in 1972 with the same intake capacity of 30 students. The intake was increased from 30 to 40 students in the sessions of 2005-06 and further in 2006-07 the intake capacity was increased to 60 students.</p>
            </div>
            <div className="mb-5">
                <p>Earlier in 1978, AICTE approved a Post Graduate (PG) course in the department leading to M. Tech. Degree in two specializations:</p>
                <ol className="list-decimal list-inside ml-5 text-md">
                    <li>Power System Engineering and</li>
                    <li>Control System Engineering with an intake capacity of 10 in each specialization. The intake in the PG program was further increased to 18 students per specialization in 2004-05. The intake has been revised at the UG level in 2019-20 session to 110 and for PG, M. Tech. (Control Systems) – 22, and M. Tech. (Power Systems)- 23 making a total of 45.</li>
                </ol>
            </div>
            <div className="mb-5">
                <p className="text-justify my-4">
                    Department owns 13 different laboratories, namely Elements of Electrical Engg. Lab., Electrical M/C Lab, Power System Protection Lab, Power Electronics Lab, Computer Lab, Microprocessor and Microcontroller Lab, Network theory Lab, Control System Lab, Measurement Lab, High Voltage Lab, SCADA Lab, Industrial Drives and Control Lab, and Advanced Instrumentation Lab. The Electrical Engineering Department, NIT Patna is one of the established departments of academic excellence of NIT Patna, known for its research and technological innovation in its domain. At present, the Electrical Engineering Department, comprising 26 dedicated members, has established itself as a formidable force in the realm of electrical engineering education and research. Their collective expertise spans a diverse array of specialties, reflecting the department's commitment to both breadth and depth in its academic offerings. One of the hallmarks of the department is its robust research ecosystem, characterized by eight broad research groups. These groups delve into areas of critical importance such as Power and Energy Systems, Electrical Machine & Drives, Control Theory & Practices, Power Electronics & its Application, Electric Vehicles & Energy Storage System, Instrumentation & Signal Processing, Semiconductor Devices & Circuit System and Robotics & Automation. Through their pioneering research endeavours, faculty members have amassed an impressive track record, boasting more than 330 publications in SCI/SCIE indexed Journals and securing 23 patents to date. Beyond the realm of pure research, the department actively engages with industry partners through 15 externally sponsored projects, which serve as conduits for translating theoretical knowledge into practical applications. These projects, whether ongoing or completed, represent the department's commitment to bridging the gap between academia and industry, fostering innovation that resonates beyond the confines of the university campus. Moreover, the department's influence resonates worldwide as it mentored 33 Ph.D scholars who have attained their degrees, with many more in pipeline, embodying the forefront of future innovation in electrical engineering. Through rigorous academic training and personalized guidance, these scholars are equipped with the tools and knowledge necessary to address the pressing challenges of the 21st century. In essence, the Electrical Engineering Department, NIT Patna serves as a beacon of excellence, driving forward the frontiers of knowledge and innovation in the field of electrical engineering. Through its multifaceted approach to education, research, and industry collaboration, the department continues to make profound contributions to both academia and society at large.
                </p>
            </div>
        </div>
    )
}
export default page