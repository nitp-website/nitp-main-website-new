"use client"
import BackDepartment from "../../../components/department/BackDepartment"
import Image from "next/image"

export default function labs(){
    return (
        <div className="min-h-screen bg-gradient-to-br from-red-900 via-red-800 to-[#421010] text-white">
            {/* Floating particles background effect */}
            <div className="particle-container absolute inset-0 pointer-events-none">
                {[...Array(20)].map((_, i) => (
                    <div 
                        key={i}
                        className="particle absolute bg-red-900 opacity-20 rounded-full"
                        style={{
                            width: `${Math.random() * 10 + 2}px`,
                            height: `${Math.random() * 10 + 2}px`,
                            top: `${Math.random() * 100}%`,
                            left: `${Math.random() * 100}%`,
                            animation: `float ${Math.random() * 20 + 10}s linear infinite`
                        }}
                    />
                ))}
            </div>

            <div className="relative z-10 flex flex-col p-5">  
                <div className="flex flex-col md:ml-10">
                    <div>
                        <p className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-red-300">
                            LABS
                        </p>
                    </div>
                    <div className="mt-2">
                        <p className="text-red-100 text-base font-semibold">
                            COMPUTER SCIENCE ENGINEERING
                        </p>
                    </div>
                    <BackDepartment navigate={'/Department/CSE'}/>
                </div>

                <div className="max-sm:mx-6 max-md:mx-8 mx-20 border border-red-900/20 p-8 rounded-xl shadow-2xl shadow-red-900/50 backdrop-blur-md bg-gray-900 bg-opacity-70 mt-8">
                    {/* Lab list */}

                    <div className="mb-10 flex flex-col lg:flex-row">
                        <div className="flex flex-col">
                            <p className="text-red-400 text-xl font-bold mb-4">
                                Computing Lab-1:
                            </p>
                            <div className="lg:w-2/3">
                                <p className="text-gray-300 text-justify pl-6">
                                Operating System lab uses the Linux OS (Fedora 16.0) to implement the operating
                                system management process, memory function, UNIX and
                                shell programming related to OS system call functions. This lab also deals
                                with courses like Object- Oriented Programming (OOP),
                                Web Technology, Database Management (DBMS), Artificial Intelligence (AI),
                                and Software Engineering.    
                                </p>
                            </div>
                        </div>
                        <Image
                        src={"/Cselab1.jpg"}
                        alt="labs"
                        width={300}
                        height={500}
                        className="mt-6 lg:mt-0 mr-6 ml-6 lg:pl-0 rounded-lg"
                        />
                    </div>
                    <div className="mb-10 flex flex-col lg:flex-row">
                        <div className="flex flex-col">
                            <p className="text-red-400 text-xl font-bold mb-4">
                                Computing Lab-2:
                            </p>
                            <div className="lg:w-2/3">
                                <p className="text-gray-300 text-justify  pl-6">
                                    Simulation lab uses the IBM Rational Rose software and other
                                    software to design software modules. This lab also deals some
                                    courses like Object-Oriented Programming (OOP), Web Technology, 
                                    Database Management (DBMS), Artificial Intelligence (AI), and 
                                    Software Engineering.
                                </p>
                            </div>
                        </div>
                        <Image
                        src={"/Cselab2.jpg"}
                        alt="labs"
                        width={300}
                        height={500}
                        className="mt-6 lg:mt-0 mr-6 ml-6 lg:pl-0 rounded-lg"
                        />
                    </div>
                    <div className="mb-10 flex flex-col lg:flex-row justify-between">
                        <div className="flex flex-col">
                            <p className="text-red-400 text-xl font-bold mb-4">
                                Network System Lab:
                            </p>
                            <div className="lg:w-2/3">
                                <p className="text-gray-300 text-justify  pl-6">
                                    The lab has well equipped system for research, which 
                                    include the Network Training Kit. The lab deals with Cyber 
                                    Security courses.
                                </p>
                            </div>
                        </div>
                        <Image
                        src={"/Cselab3.jpg"}
                        alt="labs"
                        width={300}
                        height={500}
                        className="mt-6 lg:mt-0 ml-6 lg:pl-0 lg:mr-6 rounded-lg"
                        />
                    </div>
                    <div className="mb-10 flex flex-col lg:flex-row">
                        <div className="flex flex-col">
                            <p className="text-red-400 text-xl font-bold mb-4">
                                Soft Computing Lab:
                            </p>
                            <div className="lg:w-2/3">
                                <p className="text-gray-300 text-justify font-medium pl-6">
                                    Soft Computing lab use Statistica software for 
                                    supervised learning analysis and data mining and also used 
                                    the LAN Trainer kit for network topology. The lab is focusing 
                                    on IOT related specific courses.

                                </p>
                            </div>
                        </div>
                        <Image
                        src={"/Cselab4.jpg"}
                        alt="labs"
                        width={300}
                        height={500}
                        className="mt-6 lg:mt-0 mr-6 ml-6 lg:pl-0 rounded-lg"
                        />
                    </div>
                    <div className="mb-10 flex flex-col lg:flex-row">
                        <div className="flex flex-col">
                            <p className="text-red-400 text-xl font-bold mb-4">
                                Research Sholar Lab:
                            </p>
                            <div className="lg:w-2/3">
                                <p className="text-gray-300 text-justify font-medium pl-6">
                                    The lab uses Statistica for supervised learning 
                                    analysis and data mining work and Qualnet simulator 
                                    for network simulation work.   
                                </p>
                            </div>
                        </div>
                        {/* <Image
                        src={#}
                        alt="labs"
                        width={300}
                        height={500}
                        className="mt-6 lg:mt-0 mr-6 pl-6 lg:pl-0"
                        /> */}
                    </div>
                    <div className="mb-10 flex flex-col lg:flex-row">
                        <div className="flex flex-col">
                            <p className="text-red-400 text-xl font-bold mb-4">
                                Image Processing Lab:
                            </p>
                            <div className="lg:w-2/3">
                                <p className="text-gray-300 text-justify font-medium pl-6">
                                    Hardware: Image Capture Camera, Image Grabber Card 
                                    along with PCs. The analysis and manipulation of a 
                                    digital image, in order to get an enhanced image 
                                    or to extract some useful information from it with 
                                    the help of "Image Processing Software".
                                </p>
                            </div>
                        </div>
                        {/* <Image
                        src={"https://web.nitp.ac.in/dept/cse/labs/DSC_0004.jpg"}
                        alt="labs"
                        width={300}
                        height={500}
                        className="mt-6 lg:mt-0 mr-6 pl-6 lg:pl-0"
                        /> */}
                    </div>
                    <div className="mb-10 flex flex-col lg:flex-row">
                        <div className="flex flex-col">
                            <p className="text-red-400 text-xl font-bold mb-4">
                                Computing Lab-3:
                            </p>
                            <div className="lg:w-2/3">
                                <p className="text-gray-300 text-justify font-medium pl-6">
                                    This lab facilitates training, research, experiments in the domain of software testing, mobile application development, cloud computing, network security, Big Data analysis and Industrial Automation. This also deals some courses like Data Structure and Algorithms, Operating System, Compiler Design, and Computer Graphics.
                                </p>
                            </div>
                        </div>
                        {/* <Image
                        src={"https://web.nitp.ac.in/dept/cse/labs/DSC_0004.jpg"}
                        alt="labs"
                        width={300}
                        height={500}
                        className="mt-6 lg:mt-0 mr-6 pl-6 lg:pl-0"
                        /> */}
                    </div>
                    <div className="mb-10 flex flex-col lg:flex-row">
                        <div className="flex flex-col">
                            <p className="text-red-400 text-xl font-bold mb-4">
                                Computing Lab-4:
                            </p>
                            <div className="lg:w-2/3">
                                <p className="text-gray-300 text-justify font-medium pl-6">
                                This deals with some courses like Data Structure and Algorithms, Operating System, Compiler Design, and Computer Graphics.
                                </p>
                            </div>
                        </div>
                        {/* <Image
                        src={"https://web.nitp.ac.in/dept/cse/labs/DSC_0004.jpg"}
                        alt="labs"
                        width={300}
                        height={500}
                        className="mt-6 lg:mt-0 mr-6 pl-6 lg:pl-0"
                        /> */}
                    </div>
                    <div className="mb-10 flex flex-col lg:flex-row">
                        <div className="flex flex-col">
                            <p className="text-red-400 text-xl font-bold mb-4">
                                Network Security Lab:
                            </p>
                            <div className="lg:w-2/3">
                                <p className="text-gray-300 text-justify font-medium pl-6">
                                    The lab has well equipped system for research, which include the Network Training Kit. The lab deals with Cyber Security courses.
                                </p>
                            </div>
                        </div>
                        {/* <Image
                        src={"https://web.nitp.ac.in/dept/cse/labs/DSC_0004.jpg"}
                        alt="labs"
                        width={300}
                        height={500}
                        className="mt-6 lg:mt-0 mr-6 pl-6 lg:pl-0"
                        /> */}
                    </div>
                </div>    
            </div>

            {/* Add the floating animation styles */}
            <style jsx global>{`
                @keyframes float {
                    0% { transform: translateY(0) translateX(0); }
                    25% { transform: translateY(-15px) translateX(15px); }
                    50% { transform: translateY(-25px) translateX(5px); }
                    75% { transform: translateY(-15px) translateX(-15px); }
                    100% { transform: translateY(0) translateX(0); }
                }
            `}</style>
        </div>
    )
}