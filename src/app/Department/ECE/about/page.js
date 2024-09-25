import BackDepartment from "../../../components/department/BackDepartment"


function Page(){
    return (
        <div className=" flex flex-col p-10 max-sm:p-2 text-black">  
            <div className="flex flex-col  mb-10">
                <div>
                    <p className="text-red-900 text-xl lg:text-2xl font-bold">
                        ABOUT
                    </p>
                </div>
                <div className="mt-1 lg:mt-2">
                    <p className="text-gray-500 text-sm lg:text-base font-semibold">
                    ELECTRONICS AND COMMUNICATION ENGINEERING
                    </p>
                </div>
                <div>
                <BackDepartment navigate={'/Department/ECE'}/>
                </div>
            </div>
            {/* section 1 */}
            <div className="max-sm:mx-6 max-md:mx-8 mx-10 border p-4 rounded-md shadow-lg shadow-slate-400 backdrop-blur-md">
                <div className="text-justify text-base lg:text-lg">
                <>
                    The Department of Electronics and Communication Engineering is one of the
                    established and largest department in the institute. It was established in
                    the year 1978 with an intake of 10 students only. The Department offers
                    B.Tech programme in "Electronics & Communication Engineering" with 161 intake
                    capacity, and M.Tech programme in "Communication System, Microelectronics and
                    VLSI System Design" with 22 intake capacity for each specialization.
                    Department introduces dual degree program in "Microelectronics and VLSI
                    System Design" in the year 2022 onwards with 22 intake capacity. The
                    department is also offering Ph.D. program (Full time and Part time research
                    program) in Electronics and Communication Engineering since 2012 provides a
                    platform for bright graduates and postgraduates to conduct research in the
                    following areas:
                    <br />
                    <br />
                    <li>
                        High Power RF / Microwave Devices, Circuits and Systems. RF MEMs,
                        Metamaterial devices ,Microwave Imaging and Remote Sensing, Absorber,
                        Dielectric Resonator Antennas, Graphene Antennas and Filters, Polarization
                        of Waves and wave manipulation, Micro, Milli and THz wave Antennas and
                        devices, Computational Electromagnetics.
                    </li>
                    <br />
                    <li>
                        Image Processing, Satellite Imaging, Medical Imaging, Pattern Recognition,
                        Machine Learning/ Deep Machine Learning, and Soft Computing Techniques,
                        Radar signal processing, Speech Analysis; Speech Enhancement; Speech
                        Recognition; Keyword Spotting; Speaker and Language Recognition, Efficient
                        Hardware Architectures for Speech Processing Algorithms, Biomedical Signal
                        Processing.
                    </li>
                    <br />
                    <li>
                        Analog/RF and Digital IC Design, Design of Signal Processing Circuits using
                        Analog Building Blocks, FPGA based System Design, Fabrication and
                        characterization of thin films, Synthesis and characterization of
                        nanomaterials, Low Power High Performance Robust Circuit Design,
                        Semiconductor Device Modelling, Fabrication and characterization of thin
                        films & Nanostructure, Nano-electronics, Photonics, Beyond CMOS Devices
                        ,Green Electronics, Steep switching transistors
                    </li>
                    <br />
                    <li>
                        UWB Communication, Wireless Body Area Network, Short range Medical
                        Communication, Energy efficient MAC for WBAN, Vital sign monitoring, Optical
                        Fiber Communication, Photonics, and Silicon-on-Insulator based Waveguides
                        and Devices, Hybrid Plasmonic Waveguide and Devices, Wireless
                        Communications. Routing and Security Issues in Wireless Networks, Study and
                        Applications of Post Quantum Cryptographic Algorithms for Network Security,
                        Physical layer of digital and wireless communication, Spectrum sensing and
                        sharing in Cognitive Radio Network (CRN), Estimation-detection theory,
                        Neuro-fuzzy based system identification, Channel estimation and
                        equalization.
                    </li>
                    <br />
                    <br />
                    Currently, 32 students are enrolled in full-time Ph.D. research program and
                    48 students are enrolled in part-time Ph.D. research program. All courses of
                    the department are periodically reviewed by the National Board of
                    Accreditation (NBA). The undergraduate (UG) course B.Tech (Electronics &
                    Communication Engineering) was accredited by the NBA for the academic Year
                    2015-16, 2016-17 and 2017-18, i.e., upto 30-06-2018; Further Accredited for
                    2018-19, 2019-20 and 2020-21, i.e., upto 30-06-2021; Further
                    <a className="underline" href="http://web.nitp.ac.in/uploads22/NBA2022.pdf" target="blank">
                        {" "}
                        accredited for 2021-22 to 2026-27 i.e, upto 30-06-2027
                    </a>
                    . The PG course Communication systems was accredited by the NBA for the
                    academic Years 2016-2017 and 2017-2018.
                    <br />
                    <br />
                    The Department's faculty have received many sponsored R&D projects funded by
                    central agencies such as MHRD, DRDO, DST, MeitY The resources of VLSI LAB
                    have been upgraded with the support of SMDP-C2SD project. The department
                    possesses a highly qualified group of young, competent and highly motivated
                    faculty and staff members who have adopted and implemented some of the best
                    academic practices in teaching and research. Department is organizing
                    international and national seminar ,faculty development programme, GIAN
                    programme, students training programme by industry experts, invited lectures
                    by eminent academicians and resource persons from industries for up gradation
                    and sharing of technical knowledge. Department is organizing training
                    programs and FDP supported by E & ICT Academy, NIT Patna and TEQIP III
                    project in every semester.
                    <br />
                    <br />
                    The students of the department have been securing top ranks in national
                    competitive examinations such as GATE and CAT. Students from the department
                    have been regularly recruited by several public sector and MNC companies with
                    high package. Ever year, about 10% of ECE graduate (B.Tech) students are
                    going for pursue post graduate and doctoral studies in the top-rated
                    Universities in India and abroad. The students of the department have won
                    prizes in different national & international technical competitions and
                    sports events. Some of the students group are motivated towards
                    entrepreneurship development and have started Start-up Company with the help
                    of institute's incubation centre. In all courses, the Department has built an
                    excellent reputation for its graduates in terms of placements.
                    </>
                </div>

            </div>
        </div>
    )
}
export default Page