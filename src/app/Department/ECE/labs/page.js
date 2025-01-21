import BackDepartment from "../../../components/department/BackDepartment"
import Image from 'next/image'

function Page() {
    return (
        <div className=" flex flex-col p-5 text-black">
            <div className="flex flex-col md:ml-10">
                <div>
                    <p className="text-red-900 text-xl lg:text-2xl font-bold">
                        LABS
                    </p>
                </div>
                <div className="mt-1 lg:mt-2">
                    <p className="text-gray-500 text-sm lg:text-base font-semibold">
                        Electronics and Communications Engineering
                    </p>
                </div>
                <div>
                    <BackDepartment navigate={'/Department/ECE'} />
                </div>

                <div className="max-sm:mx-6 max-md:mx-8 mx-20 border p-4 rounded-md shadow-lg shadow-slate-400 backdrop-blur-md">
                    <div className="mb-10 ">
                        <div className="text-red-900 font-semibold lg:text-2xl text-xl mb-8">Laboratory Facilities Available in the Department:-</div>
                        <div className=" grid grid-cols-2 max-md:grid-cols-1">
                            <ol className="list-decimal list-inside ml-5 space-y-4 text-sm lg:text-base">
                                <li>Electronic Devices and Circuit Lab</li>
                                <li>Digital Electronics Lab.</li>
                                <li>Semiconductor Device Lab</li>
                                <li>Communication Engineering Lab</li>
                                <li>VLSI Lab</li>
                                <li>Digital Signal Processing Lab</li>
                                <li>Electromagnetic Computation and Simulation Lab</li>
                                <li>Project Lab</li>
                                <li>Signal Processing Research Lab.</li>
                                <li>Wireless Propagation Lab.</li>
                                <li>Optical Fiber Communication & Photonics Research Lab</li>
                                <li>Microprocessor & Microcontroller Lab</li>
                                <li>VLSI Fabrication Lab</li>
                                <li>WSN Lab</li>
                                <li>Image Processing Lab</li>
                            </ol>
                            <div className=" flex  flex-col items-center mt-4">
                                <div className="flex flex-col">
                                    <Image src={"/ecelab1.jpg"}
                                        width={350}
                                        height={300}
                                        alt="labsPic"
                                        className="mb-4 rounded-lg bg-rose-200" />
                                    <Image src={"/ecelab2.jpg"}
                                        width={350}
                                        height={300}
                                        alt="labsPic"
                                        className="rounded-lg bg-rose-200" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="mb-10 mt-10">
                        <div className="text-red-900 font-semibold text-xl lg:text-2xl  mb-8">Important Software:</div>
                        <div className=" grid grid-cols-2 max-md:grid-cols-1">
                            <ol className="list-decimal list-inside ml-5 space-y-4 text-sm lg:text-base">
                                <li>CST(full package)</li>
                                <li>HFSS(full package)</li>
                                <li>IE3D</li>
                                <li>MATLAB</li>
                                <li>NI LAB View</li>
                                <li>Multisim</li>
                                <li>OptiSuite(full package)</li>
                                <li>Cadence</li>
                                <li>Synopsis</li>
                                <li>Mentor graphics</li>
                                <li>Vivado Xilinx</li>
                                <li>RSoft FemSIM</li>
                                <li>COMSOL with Wave Optics module</li>
                                <li>Xilinx SDSOC</li>
                                <li>Mentor Catapult (C/C++/SystemC HLS)</li>
                                <li>Xilinx Vivado System Edition with Partial Reconfiguration</li>
                            </ol>
                            <div className=" flex  flex-col items-center mt-4">
                                <div className="flex flex-col">
                                    <Image src={"/ecelab3.jpg"}
                                        width={350}
                                        height={300}
                                        alt="labsPic"
                                        className="mb-4 rounded-lg bg-rose-200" />
                                    <Image src={"/ecelab4.jpg"}
                                        width={350}
                                        height={300}
                                        alt="labsPic"
                                        className="rounded-lg bg-rose-200" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="mb-10 mt-10">
                        <div className="text-red-900 font-semibold text-xl lg:text-2xl mb-8">Major Equipment:</div>
                        <div className=" grid grid-cols-2 max-md:grid-cols-1">
                            <ol className="list-decimal list-inside ml-5 space-y-4 text-sm lg:text-base">
                                <li>Dell Blade Server</li>
                                <li>HP Blade Server</li>
                                <li>Agilent E8257D PSG Analog Signal Generator (250 kHz to 40 GHz)</li>
                                <li>Agilent N5222A PNA Vector Network Analyzer (10 MHz to 26.5 GHz)</li>
                                <li>Agilent N9020A MXA Signal Analyzer (10 Hz to 26.5 GHz)</li>
                                <li>Rudimentary Antenna Radiation Pattern Measurement Setup (40 MHz to 12.4 GHz) from Amitec</li>
                                <li>MITS ELEVEN-Lab PCB Prototyping Machine (Resolution: 0.625 micron)</li>
                                <li>ERSA i-CON VARIO 4 High Precision 4 Channel Soldering/De-soldering Station</li>
                                <li>NI USRP-Rio Software Defined Radio Platform (440 MHz to 4.4 GHz)</li>
                                <li>Tektronix 1 GHz Mixed Signal Oscilloscope</li>
                                <li>Two SMC 100A Signal Generators (9 kHz to 3 GHz) from Rohde & Schwarz</li>
                                <li>Anritsu VNA MS2037C (5 kHz to 15 GHz) and Spectrum Analyzer (9 kHz to 15 GHz)</li>
                                <li>2231A-30-3 Triple Channel DC Power Supply from Keithley</li>
                                <li>Software Controlled Motorized Antenna Positioner (azimuth and elevation) from Holmarc</li>
                                <li>Zedboard (For Embedded Application)</li>
                                <li>Xilinx Zynq UltraScale+ MPSoC ZCU102 Evaluation Kit</li>
                                <li>Xilinx Zynq 7000 AP SoC ZC702 Evaluation Kit</li>
                                <li>Zybo Board (For Internet of Things Lab)</li>
                                <li>Multiple Instrumentation Lab</li>
                                <li>NI 9792: WSN Gateway with NI WSN 3214, NI WSN 3226, and NI WSN 3212</li>
                                <li>OTDR and Optical Network Building Block system</li>
                                <li>Physics of Fiber Optics Lab Setup</li>
                                <li>Soldering De-soldering Station</li>
                            </ol>
                            <div className=" flex  flex-col items-center mt-4">
                                <div className="flex flex-col">
                                    <Image src={"/ecelab5.jpg"}
                                        width={350}
                                        height={300}
                                        alt="labsPic"
                                        className="mb-4 rounded-lg bg-rose-200" />
                                    <Image src={"/ecelab6.jpg"}
                                        width={350}
                                        height={300}
                                        alt="labsPic"
                                        className="rounded-lg bg-rose-200" />
                                    <Image src={"/ecelab7.jpg"}
                                        width={350}
                                        height={300}
                                        alt="labsPic"
                                        className="mt-4 rounded-lg bg-rose-200" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}
export default Page