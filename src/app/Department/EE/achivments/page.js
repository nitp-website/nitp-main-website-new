

import BackDepartment from "../../../components/department/BackDepartment";

function Comp({ content }) {
    return (
        <div className="flex flex-col mt-8 lg:ml-10">
            <ul>
                {content.map((points, i) => (
                    <li key={i} className="list-disc ml-4 md:text-lg pb-2">
                        {points}
                    </li>
                ))}
            </ul>
        </div>
    );
}

function Page() {
    return (
        <div className="flex flex-col p-5 text-black">
            <div className="flex flex-col md:ml-10">
                <div className="mb-2">
                    <p className="text-red-900 text-2xl font-bold">
                        ACHIEVEMENTS
                    </p>
                    <div className="mt-2">
                        <p className="text-gray-500 text-base font-semibold">
                            ELECTRICAL ENGINEERING
                        </p>
                    </div>
                    <div>
                        <BackDepartment navigate={"/Department/EE"} />
                    </div>
                </div>
                <div className="max-sm:mx-6 max-md:mx-8 mx-20 border p-4 rounded-md shadow-lg shadow-slate-400 backdrop-blur-md">
                    <div className="text-red-900 font-semibold lg:text-xl text-lg mb-4">Notable achievements by students:</div>
                    <Comp
                        content={[
                            "Abhash Kumar - secured All India Rank 1 in GATE EE 2020.",
                            "Sudhakar Kumar - secured All India Rank 9th Engineering Service Examination (ESE 2015).",
                            "Amratansh Gupta - secured All India Rank 88 in GATE 2020 and currently he is a Ph.D. researcher with Department of Electronics and Informatics of Vrije Universiteit Brussel."
                        ]}
                    />
                    <div className="text-red-900 font-semibold lg:text-xl text-lg mt-8 mb-4">Consistent performance in GATE:</div>
                    <Comp
                        content={[
                            "Mayank Jaiman (Roll No. Graduating Year: 2022) secured AIR 25 in the discipline of EE.",
                            "Manish Choudhary (Roll No.1802113 Graduating Year: 2022) AIR 519.",
                            "Jitendra Kumar (Roll No.1802102, Graduating Year: 2022) (Maruti Suzuki India Ltd.) AIR 600.",
                            "Adarsh Kumar (Roll No.1802005, Graduating Year: 2022) AIR 711.",
                            "Lakshay Narnauli (Roll No. 1402023, Graduating Year: 2018) (IOCL) AIR 288 in GATE 2023.",
                            "Manish Bajya (Roll No. 1802109, Graduating Year: 2022) (KRIBHCO) secured AIR-887 Rank in GATE-EE 2022.",
                            "Rajan Kumar Pandey (Roll No.1802023 Graduating Year: 2022) at Capgemini as Associate -II Software Engineer cleared GATE 2021."
                        ]}
                    />
                    <div className="text-red-900 font-semibold lg:text-xl text-lg mt-8 mb-4">Performers at their workplace:</div>
                    <Comp
                        content={[
                            "Anjali (Roll No. 1902045; Graduating Year:2023) working as Pre-Sales Consultant at O9 Solutions Management Pvt Ltd received SPOT Award.",
                            "Tanishq Singh (Roll No. 1802100 Graduating Year: 2022) Winner of Tata Crucible Hackathon 2022 East Region, Winner of IMS case study challenge 2022, Applause/Spot Awards in Deloitte for exceptional performance.",
                            "Akansh Omar (Roll No. 1802117 Graduating Year: 2022) Received Applause Award and Spot Award.",
                            "Digvijay Verma (Roll No. 1702033 Graduating Year: 2021) working at Maruti Suzuki India Limited as Assistant Manager bagged Star Executive Award in Tata Power Delhi Distribution Limited for reducing commercial loss by 12%. He also won Gold Award in ICQC 2023- For project of curbing Theft in village area distribution network.",
                            "Rashika Singh (Roll No. 1702101 Graduating Year: 2021) working at Alstom Transport India Limited as V&V Designer won Bronze Award in December 2022 for exceptional work in NCRTC-RRTS Project of India.",
                            "Amratansh Gupta (Roll No. 1402061 Graduating Year: 2018) as Semiconductor Research at IMEC; He received JN Tata Scholar Award (2023), Secured All India Rank 88 in GATE-EC 2020, and published Two IEEE Transactions on Electron Devices Journal Papers from Master thesis at IISc Bangalore.",
                            "Tarkeshwer Narayan Gaur (Roll No. 140061 Graduating Year: 2018) at Highradius Technologies Pvt Ltd as Senior Consultant- II (Solution Architect) emerged as Employee of the quarter (HighFlyer Award).",
                            "Pranjal Kumar (Roll no. 1702084 Graduating Year: 2021) at L&T Construction as Senior Engineer- Electrical Rated as top performer in the FY22-23.",
                            "Anil Kumar (Roll no. 1802088 Graduating Year: 2022) at Zetwerk manufacturing private limited as SDE-1 received Appreciation award."
                        ]}
                    />
                    <div className="text-red-900 font-semibold lg:text-xl text-lg mt-8 mb-4">List of Publications by Students:</div>
                    <Comp
                        content={[
                            "Kamakshi Prashadini Swain, Prakash Lakhara, Kapish Khetan, Siddhant Mishra, Mala De, “Efficient hybrid pricing for optimal DSM of home energy management system utilizing load precedence” International Transactions on Electrical Energy Systems, volume 31, No. 3, Jan. 2021.",
                            "Shweta Kumari, Pulakraj Aryan and G. Lloyds Raja, Design and simulation of a novel FOIMC-PD/P double-loop control structure for CSTRs and bioreactors, Int. J. Chem. React. Eng., 2021, doi.org/10.1515/ijcre-2021-0140.",
                            "Prakash, A., & Meena, G. (2021). Observer design for apex height and vertical velocity of a single-leg hopping robot during stance phase. Robotica, Cambridge University Press, 1-12. doi:10.1017/S0263574721001429.",
                            "B. S. Shiva, C. D. Kumar & V. Verma, “Single Sensor Based Vector Controlled PMSM Drive”, IEEE -PEDES, Jaipur, Dec. - 2020.",
                            "B. S. Shiva, C. D. Kumar & V. Verma, “Speed Sensorless Vector Controlled PMSM Drive with A Single Current Sensor”, IEEE -PEDES, Jaipur, Dec. - 2020.",
                            "C. D. Kumar, B. S. Shiva & V. Verma, “Vector Control of PMSM Drive with Single Current Sensor”, In the Conf. Proc. of SCES 2020, MNNIT Allahabad, India.",
                            "Y. A. Khan, I. S. Twinkle, S. Kumar & V. Verma, “Comparative Analysis of Different Converter Topologies for an SRM Drive with Conventional and Vector Control Schemes”, In the Conf. Proc. of IEEE-ICEFEET 2020, NIT Patna, India.",
                            "Sweta Kumari and Rajib Kumar Mandal, Effectiveness of Space Vector PWM in Three-Phase Inverter, ICEFEET-2020",
                            "Ashutosh Kumar Singh, Rajib Kumar Mandal, Ravi Raushan and Pratyush Gauri, Design and Analysis of the Gate Driver Circuit for Power Semiconductor Switches, ICEFEET 2020",
                            "Ashutosh Kumar Singh, Rajib Kumar Mandal, Ravi Raushan and Pratyush Gauri, Grid Connected Photovoltaic Systems with Multilevel Inverter, ICEFEET 2020",
                            "Md Irfan Ahmed, Prateem Pan, Ramesh Kumar and R. K. Mandal, Wind Generation Forecasting Using Python, ICEFEET-2020",
                            "AK Singh, RK Mandal, V Raj, P Gauri, Design of Autonomous Electric Vehicle Detecting the Roadside Buildings, 2020 IEEE First International Conference on Smart Technologies for Power",
                            "Sariki Murali, Ravi Shankar, Shivam Shrivastav, Utkarsh Dhawal and Vishal Kannaujia, LFC Scheme for A Deregulated Multi-Area Power System using Cascaded Fractional Order Controller, ICEFEET-2020",
                            "A. Mishra, Anita Bharti, Anjali Kumari, Apurba Paul, “Transmission Line Inspection Robot:A Novel Approach,” 6th International Conference on Nanoelectronics Circuits & Communication Systems (NCCS-2020), IETE & ISVE Ranchi Centre, 19-20 Dec 2020.",
                            "M. S. Ahmed and A. Mishra, \"Analysis of 5-Phase IM Drive with Reduced Switch 5-Level Inverter,\" 2020 IEEE Students Conference on Engineering & Systems (SCES), Prayagraj, India, 2020, pp. 1-5.",
                            "S. Ahmad and A. Mishra, \"Mathematical Modelling, Simulation and Control of Five-Phase Induction Motor Drives,\" 2020 International Conference on Emerging Frontiers in Electrical and Electronic Technologies (ICEFEET), Patna, India, 2020, pp. 1-4.",
                            "A. Mishra, Sartaj Ahmed, Vikram Kuma, “Performance Investigation of Multi-phase IM Drive with Five-level Inverter under Fault Conditions”, 6th International Conference on Nanoelectronics Circuits & Communication Systems (NCCS-2020), IETE & ISVE Ranchi Centre, 19-20 Dec 2020.",
                            "Dibya Bharti, Meera Sinha, Sukanya, Mala De, “Multiobjective Optimization Based Resource Utilization with Loss Minimization in Microgrid”, IEEE region 10 Symposium (Tensymp 2019), Tensymp, IEEE PES Society, (Piscataway, NJ, USA) Jun. 2019.",
                            "Madhusudan Kumar and M. De, Optimal Load Scheduling for Industrial Load-Analysis for a Generalized Industrial Load Model, 8th International Conference ICPS 2019. Jaipur, December - 2019, DOI:10.1109/ICPS48983.2019.9067735.",
                            "R. Kumar, V. Verma, Y.A. Khan, B. S. Shiva, “Q-MRAS Based Speed Sensorless Vector Controlled Synchronous Reluctance Motor Drive”, 1st International Conference on International Conference on Power Electronics Applications and Technology in Present Energy Scenario (PETPES-2019).",
                            "Sanjeev Kumar, Manish Kumar, Arunangshu Ghosh, A New Approach of Modeling the Electronic Tongue Sensors for Classification, IEEE Sensors 2018 Conference, New Delhi, India, October 28-31, 2018, DOI: 10.1109/ICSENS.2018.8589601.",
                            "Manish Kumar, Sanjeev Kumar, Amratansh Gupta, Arunangshu Ghosh, Development of Electronic Interface for Sensing Applications with Voltammetric Electronic Tongue, IEEE Sensors 2018 Conference, New Delhi, India, October 28-31, 2018, DOI: 10.1109/ICSENS.2018.8589506,",
                            "Sanjeev Kumar, Prince Kumar, Arunangshu Ghosh, Independent Component Regression for the Development of Prediction Model for Analysis of Electronic Tongue Response, Fifth International Conference on Emerging Applications of Information Technology (EAIT), IIEST, Shibpur, Howrah, 12-13 Jan, 2018, Pages:1-4, 10.1109/EAIT.2018.8470427, DOI: 10.1109/EAIT.2018.8470427",
                            "Vibhas K Vats, Sneha Rai, Suddhasil De, Mala De, “Very Short-Term, Short-Term and Mid-Term Load Forecasting for Residential Academic Institute: A Case Study”, Nanoelectronics, Circuits and Communication Systems (NCCS 2018), LNEE Springer Verlag (Berlin/ Heidelberg, Germany), Nov.2018.",
                            "Vibhas K Vats, Sneha Rai, Dibya Bharti, Mala De, “Mitigating Eect of Communication Link Failure in Smart Meter based Load Forecasting”, ICCCA 2018, IEEE (Piscataway, NJ, USA), Dec. 2018.",
                            "S. S. Kashyap and M. De, “Loss Allocation and Loss Minimization for Radial Distribution System including DGs”, IET Renewable Power Generation, In Press, 2017.",
                            "Ambuj Saxena, M. De, Demand Response Management of Residential Loads with Integrated Temperature Dependent Appliances, 5th International Conference on Emerging Applications of Information Technology (EAIT'18), 1-4, IEEE, New York, NY, USA, 2017.",
                            "Navjeet Singh, M. De, Kamakshi P. Swain, Analysis of a PV System under Partially Shaded Condition using Enhanced PV Model, 7th International Conference on Power Systems (ICPS'17), 1-6, IEEE, New York, NY, USA, 2017.",
                            "A. Sinha and M. De, \"Load shifting technique for reduction of peak generation capacity requirement in smart grid,\" 2016 IEEE 1st International Conference on Power Electronics, Intelligent Control and Energy Systems (ICPEICES), 2016, pp. 1-5, doi: 10.1109/ICPEICES.2016.7853528.",
                            "Md S. Alam and M. De, “Optimal Reactive Power Dispatch using Hybrid Loop-Genetic based Algorithm”, Proc. 19th National Power System Conference (NPSC) 2016, Bhubaneswar, Odisha (December 19-21, 2016).",
                            "K. P. Swain and M. De, “Loss Allocation Method Independent of Dynamic Load Variation”, Proc. IEEE 7th India International Conference on Power Electronics (IICPE) 2016, Patiala, Punjab (November 17-19, 2016).",
                            "S. S. Kashyap and M. De, “A Novel Loss Allocation Method for Radial Distribution System with Distributed Generations”, Proc. 1st IEEE International Conference on Power Electronics, Intelligent Control and Energy Systems (PEICES) 2016, New Delhi (July 4-6, 2016).",
                            "A. Sinha and M. De, “Load Shifting Technique for Reduction of Peak Generation Capacity Requirement in Smart Grid”, Proc. 1st IEEE International Conference on Power Electronics, Intelligent Control and Energy Systems (PEICES) 2016, New Delhi (July 4-6, 2016).",
                            "K. Shahid and M. De, “Short Term Reactive Power Dispatch Using a Novel Pricing Structure for Synchronous Condenser”, Proc. 12th Annual IEEE India Conference (INDICON) 2015, New Delhi (December 17-20, 2015)."
                        ]}
                    />
                </div>
            </div>
        </div>
    );
}

export default Page;