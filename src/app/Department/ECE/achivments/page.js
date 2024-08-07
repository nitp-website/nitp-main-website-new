import BackDepartment from "../../../../components/BackDepartment"

function Compo({project, pi, year,sno }){
    return (
        <>
            <div className="col-span-1 border border-black pl-4 py-2 flex flex-col justify-center">
                {sno}
            </div>
            <div className="col-span-2 border border-black pl-4 py-2 flex flex-col justify-center">
                {pi}
            </div>
            <div className="col-span-2 border border-black pl-4 py-2 flex flex-col justify-center">
                {project}
            </div>
            <div className="col-span-1 border border-black pl-4 py-2 flex flex-col justify-center">
                {year}
            </div>
        </>
    )
}
function Page(){
    return (
        <div className=" flex flex-col p-5">  
            <div className="flex flex-col md:ml-10">
                <div>
                    <p className="text-red-900 text-xl lg:text-2xl font-bold">
                        ACHIEVEMENTS
                    </p>
                </div>
                <div className="lg:mt-2">
                    <p className="text-gray-500 text-sm lg:text-base font-semibold">
                        Electronics And Communication Enginnering
                    </p>
                </div>
                <div>
                <BackDepartment navigate={'/Department/ECE'}/>
                </div>
            </div>
                <div className="mx-4 border p-4 rounded-md shadow-lg shadow-slate-400 backdrop-blur-md">
                    <div className="mt-10">
                        <p className="text-gray-900 text-xl lg:text-2xl font-semibold">
                        List of Short-Term Courses / Faculty Development Program / Workshop / Gian Program:
                        </p>
                    </div>
                    <div className="mb-10 overflow-x-auto lg:mr-10 mt-8">
                        <div className="grid grid-cols-6 border min-w-[800px]">
                        {/* heading  */}
                            <div className=" col-span-1 border border-black pl-4 py-2 flex flex-col justify-center text-red-900 font-semibold">
                                Sr. No.
                            </div>
                            <div className=" col-span-2 border border-black pl-4 py-2 flex flex-col justify-center text-red-900 font-semibold">
                                Name of the Faculty
                            </div>
                            <div className="  col-span-2 border border-black pl-4 py-2 flex flex-col justify-center text-red-900 font-semibold">
                            Organized Workshop/FDP/STC/GIAN program
                            </div>
                            <div className="  col-span-1 border border-black pl-4 py-2 flex flex-col justify-center text-red-900 font-semibold">
                            Duration
                            </div>
                            {/* grid  */}
                            
                            <Compo
                            sno={'1.'}
                            project={'National Mission on Education through Information and communication tech.'}
                            pi={'Dr. D.K. Singh and Mr. B.C. Sahana'}
                            year={'2013, June 06-07'}
                            />
                            <Compo
                            sno={'2.'}
                            project={'National Mission on Education through Information and communication tech.'}
                            pi={'Dr. D.K. Singh '}
                            year={'2014, January 17-18'}
                            />
                            <Compo
                            sno={'3.'}
                            project={'Analog Integrated Circuits'}
                            pi={'Prof. M.P. Tripathi, Dr. Rakesh Ranjan and Dr. P. Kishore Kumar'}
                            year={'2015, June 15-22'}
                            />
                            <Compo
                            sno={'4.'}
                            project={'Recent trends in Speech & Image Processing'}
                            pi={'Dr. Gayadhar Pradhan, Dr. Rakesh Ranjan and Dr. P. Kishore Kumar'}
                            year={'	2015, June 23-27'}
                            />
                            <Compo
                            sno={'5.'}
                            project={'Microwaves and antennas'}
                            pi={'Dr. Puli Kishore Kumar and Dr. Rakesh Ranjan'}
                            year={'2015, June 29 to July 03'}
                            />
                        
                        <Compo
                            sno={'6.'}
                            project={'VLSI & EMBEDDED SYSTEM'}
                            pi={'Dr. (Md.) Waseem Akram and Dr. Gaurav Kaushal'}
                            year={'2015, December 09-18'}
                            />
                        
                        <Compo
                            sno={'7.'}
                            project={'Summer Internship Programme on Microcontroller based Embedded System Design'}
                            pi={'Dr. (Md.) Waseem Akram and Dr. Gaurav Kaushal'}
                            year={'2016, July 11 to August 02'}
                            />
                            <Compo
                            sno={'8.'}
                            project={'Terahertz Technology and its application (NIT Patna)'}
                            pi={'Dr. Priyanka Mondal'}
                            year={'2016, August 01-05'}
                            />
                            <Compo
                            sno={'9.'}
                            project={'Smart Antennas and Space-time Adaptive Processing'}
                            pi={'Dr. Priyanka Mondal'}
                            year={'2016, March 28 to April 1'}
                            />
                        <Compo
                            sno={'10.'}
                            project={'Microwave Wireless Components for Transmitter and Receiver Systems'}
                            pi={'Dr. Priyanka Mondal'}
                            year={'2016, May 30 to June 3'}
                            />
                        <Compo
                            sno={'11.'}
                            project={'TOWARDS 5G: THE KEY ENABLING TECHNOLOGIES'}
                            pi={'Dr. Seemant Saha, Dr. Bharat Gupta and Dr. Rajarshi Battacharya'}
                            year={'2016, December 05-14'}
                            />
                        <Compo
                            sno={'12.'}
                            project={'IOT, BIGDATA AND CLOUD COMPUTING'}
                            pi={'Dr. Bharat Gupta, Mr S. Sasmal and Mrs. M. Bhatacharyya(PI)'}
                            year={'2017, February 08-18'}
                            />
                        <Compo
                            sno={'13.'}
                            project={'Fundamentals of Analog and Digital Communication Systems'}
                            pi={'Dr. Seemanti saha (PI)'}
                            year={'2017, May 13-22'}
                            />
                        <Compo
                            sno={'14.'}
                            project={'Embedded Systems-Design and Development'}
                            pi={'Dr. Bharat Gupta and Mr. S Sasmal'}
                            year={'2017, May 18-24'}
                            />
                        <Compo
                            sno={'15.'}
                            project={'Digital VLSI Circuit Design'}
                            pi={'Dr. Bharat Gupta'}
                            year={'2017, June 03-12'}
                            />
                        <Compo
                            sno={'16.'}
                            project={'Big Data Annalytics and Machine Learning'}
                            pi={'Dr. Bharat Gupta & Mr. Soumitra Sasmal'}
                            year={'	2017, July 04-14'}
                            />
                        <Compo
                            sno={'17.'}
                            project={'Hybrid Computational Intelligence'}
                            pi={'Dr. Bharat Gupta and Dr. S. Bhattacharyya'}
                            year={'2017, July 17-27'}
                            />
                        <Compo
                            sno={'18.'}
                            project={'Advanced Java and Android'}
                            pi={'Dr. Bharat Gupta & Mr. Soumitra Sasmal'}
                            year={'2018, January 04-11'}
                            />
                        <Compo
                            sno={'19.'}
                            project={'DSP and Sensors'}
                            pi={'Dr. Bikash Chandra Sahana and Dr. Rajeev Kumar Arya (Coordinator)'}
                            year={'2018,December 10-14'}
                            />
                        <Compo
                            sno={'20.'}
                            project={'Embedded System and Interfacing hands-on'}
                            pi={'Dr. Subodh Srivastava(Coordinator)'}
                            year={'2019, June 10-14'}
                            />
                        <Compo
                            sno={'21.'}
                            project={'VLSI ASIC Design ( Under the aegis of TEQIP)'}
                            pi={'Dr. Ritesh Kumar Mishra'}
                            year={'2019, June 26-30'}
                            />
                        <Compo
                            sno={'22.'}
                            project={'Antenna Trends'}
                            pi={'Dr. Jayanta Ghosh'}
                            year={'2019, July 01-05'}
                            />
                        <Compo
                            sno={'23.'}
                            project={'Photonics Communication and Its Applications'}
                            pi={'Dr. Rakesh Ranjan (Co-ordinator)'}
                            year={'2019, July 9-13'}
                            />
                            <Compo
                            sno={'24.'}
                            project={'Distinguished lecture by Dr. R Venkatesha Prasad from Delft University of Technology (TU Delft), Netherlands'}
                            pi={'Dr. Subodh Srivastava (Coordinator)'}
                            year={'2019, August 22'}
                            />
                            <Compo
                            sno={'25.'}
                            project={'Distinguished lecture by Prof. Mohamed Rawidean Mohd Kassim (MIMOS,the Ministry of Science, Technology and Innovation Malaysia)'}
                            pi={'Dr. Subodh Srivastava (Coordinator)'}
                            year={'2019, September 25'}
                            />
                            <Compo
                            sno={'26.'}
                            project={'Cloud Computing'}
                            pi={'Dr. Subodh Srivastava (Coordinator & PI)'}
                            year={'2019, October 16-20'}
                            />
                            <Compo
                            sno={'27.'}
                            project={'National symposium on Vacuum Electronic Devices and Applications (VEDA-2019)'}
                            pi={'Dr. Manpuran Mahto (Convener)'}
                            year={'2019, November 21-23'}
                            />
                            <Compo
                            sno={'28.'}
                            project={'Deep Learning and Applications'}
                            pi={'Dr. Subodh Srivastava (Coordinator)'}
                            year={'2019, December 09-13'}
                            />
                            <Compo
                            sno={'29.'}
                            project={'VLSI Chip Design Hands on using Open Source EDA'}
                            pi={'Dr. Bal Chand Nagar (Coordinator)	'}
                            year={'2019, December 16-20'}
                            />
                            <Compo
                            sno={'30.'}
                            project={'AI & Machine Learning'}
                            pi={'Dr. Rajeev Kumar Arya and Dr.Bikash Chandra Sahana'}
                            year={'2019, December 23-27'}
                            /> 
                            <Compo
                            sno={'31.'}
                            project={'4th International Conference SoCTA-2019 (Soft Computing: Theories and Applications)'}
                            pi={'Dr. Rajeev Kumar Arya and Dr.Bikash Chandra Sahana'}
                            year={'2019, December 27-29'}
                            /> 
                            <Compo
                            sno={'32.'}
                            project={'ICT Tools for Teaching, Learning Process & Institutes'}
                            pi={'Dr. Bharat Gupta (Principal Coordinator)'}
                            year={'2020, January 13-17'}
                            />
                            <Compo
                            sno={'33.'}
                            project={'Hands on WorkShop on Internet of Things (IOT)/Embedded System'}
                            pi={'Dr. Subodh Srivastava (Coordinator) & Dr. Manpuran Mahto (Coordinator)'}
                            year={'2020, February 14-18'}
                            />
                            <Compo
                            sno={'34.'}
                            project={'Digital System Design, Verification and Synthesis Algorithm ( Under the aegis of TEQIP)'}
                            pi={'Dr. Ritesh Kumar Mishra (Coordinator)'}
                            year={'2020, February 26- March 01'}
                            />

                        </div>
                    </div>
                </div>
        </div>

    )
}
export default Page