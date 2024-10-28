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
   The Department of Electronics and Communication Engineering at the National Institute of Technology Patna began its journey in 1978 with just 10 undergraduate students. The department is dedicated to providing quality education at both undergraduate (UG) and postgraduate levels. Currently, it offers the following programs:
   <br />
   1. B.Tech in "Electronics & Communication Engineering" with an intake of 161.
   <br />
   2. Dual degree (B.Tech + M.Tech) in "Microelectronics and VLSI System Design" with an intake of 22.
   <br />
   3. M.Tech in:
   <br />
   &nbsp;&nbsp;&nbsp;(a) "Next Generation Wireless Technologies" with an intake of 22.
   <br />
   &nbsp;&nbsp;&nbsp;(b) "Microelectronics and VLSI System Design" with an intake of 22.
   <br />
   4. Ph.D. (Full-time and Part-time) in Electronics and Communication Engineering.
   <br />
   <br />
   All courses are regularly updated by academic and industry experts to meet the needs of today's industry. The undergraduate program is accredited by the National Board of Accreditation (NBA) for six years, from July 2021 to June 2027. The department received a grant of 3.52 Crore from DST under the FIST scheme for upgrading the Antenna Engineering Laboratory. The VLSI Lab has also been upgraded with the support of the SMDP-C2SD project.
   <br />
   <br />
   The department has a group of young, competent, and dedicated faculty members engaged in quality research in the following areas:
   <br />
   <li>
      High Power RF / Microwave Devices, Antennas, Filters, Metamaterials and Metasurfaces, Microwave Imaging, Computational Electromagnetics.
   </li>
   <br />
   <li>
      Signal Processing, Image Processing, Speech Analysis, Biomedical Signal Processing, Machine Learning, Soft Computing Techniques, Pattern Recognition.
   </li>
   <br />
   <li>
      Analog, Digital and Mixed Signal IC Design, FPGA-based System Design, Synthesis and characterization of nanomaterials, Nano-electronics.
   </li>
   <br />
   <li>
      Wireless Communications and Networks, Quantum Cryptographic Algorithms, Physical Layer, Cognitive Radio Network (CRN), Optical Fiber Communication.
   </li>
   <br />
</>

                </div>

            </div>
        </div>
    )
}
export default Page