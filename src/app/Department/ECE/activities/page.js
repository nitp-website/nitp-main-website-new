import BackDepartment from "../../../components/department/BackDepartment"

function ActComp({title,content}){
    return(
        <div className="flex flex-col mt-8 lg:ml-10">
            <p className="text-xl lg:text-2xl font-semibold mb-4">
                {title}
            </p>
            <ul>
                {content.map((points,i)=>{
                    return(
                        <li key={i} className="list-disc ml-4 text-sm lg:text-base
                        pb-2">
                           {points}
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}

function Compo({project, pi, sponsor, amount,year }){
    return (
        <>
            <div className="col-span-2 border border-black pl-4 py-2 flex flex-col justify-center">
                {project}
            </div>
            <div className="col-span-2 border border-black pl-4 py-2 flex flex-col justify-center">
                {pi}
            </div>
            <div className="col-span-2 border border-black pl-4 py-2 flex flex-col justify-center">
                {sponsor}
            </div>
            <div className="col-span-1 border border-black pl-4 py-2 flex flex-col justify-center">
                {amount}
            </div>
            <div className="col-span-1 border border-black pl-4 py-2 flex flex-col justify-center">
                {year}
            </div>
        </>
    )
}
function Page(){
    return (
        <div className="flex flex-col p-5">  
            <div className="flex flex-col md:ml-10">
                <div>
                    <p className="text-red-900 text-xl lg:text-2xl font-bold">
                        ACTIVITIES
                    </p>
                </div>
                <div className="mt-1 lg:mt-2">
                    <p className="text-gray-500 text-sm lg:text-base font-semibold">
                        Electronics and Communications Engineering
                    </p>
                </div>
                <div>
                <BackDepartment navigate={'/Department/ECE'}/>
                </div>
            </div>
            <div className="mx-4 border p-4 rounded-md shadow-lg shadow-slate-400 backdrop-blur-md">
                <ActComp title={"Inter Departmental Activity:"}
                content={['ICT academy has been established for development/upgradation to improve the employability of the graduates/diploma holders in various streams in cooperation with other departments.'
                ]}
                />
                <div className="mt-8 lg:ml-10">
                    <div className="text-xl lg:text-2xl font-semibold mb-5">
                        Projects
                    </div>
                    <div className="mb-10 overflow-x-auto lg:mr-10">
                        <div className="grid grid-cols-8 border min-w-[900px]">
                        {/* heading  */}
                            <div className="col-span-2 border border-black pl-4 py-2 flex flex-col justify-center text-red-900 font-semibold">
                                Name of the Project
                            </div>
                            <div className="col-span-2 border border-black pl-4 py-2 flex flex-col justify-center text-red-900 font-semibold">
                                Name of the PI
                            </div>
                            <div className="col-span-2 border border-black pl-4 py-2 flex flex-col justify-center text-red-900 font-semibold">
                                Sponsoring Agency
                            </div>
                            <div className="col-span-1 border border-black pl-4 py-2 flex flex-col justify-center text-red-900 font-semibold">
                                Sanctioned Amount(in lakh)
                            </div>
                            <div className="col-span-1 border border-black pl-4 py-2 flex flex-col justify-center text-red-900 font-semibold">
                                Status
                            </div>
                            {/* grid  */}
                            <Compo
                            project={'Design and Optimization of CPW-Fed Multiband MIMO Antenna for Handheld Mobile Terminals'}
                            pi={'Dr. R. Bhattacharya  (PI)'}
                            sponsor={'DST (SERB Young Scientist Scheme)'}
                            amount={'26.8'}
                            year={'On going'}
                            />
                            <Compo
                            project={'Development of Algorithms for Speech based Bilingual Keyword Search to Detect Fraud/Spam Calls'}
                            pi={'Dr. G. Pradhan (PI)'}
                            sponsor={'DeitY'}
                            amount={'41.1'}
                            year={'Completed'}
                            />
                            <Compo
                            project={'A 94 GHZ Front End for Passive Millimeter wave Imaging with Enhanced Antenna Gain'}
                            pi={'PDr. P. Mondal (I)'}
                            sponsor={'SERB-DST'}
                            amount={'20.74'}
                            year={'On going'}
                            />
                            <Compo
                            project={'A low noise subharmonic mixer for millimeter-wave space-borne applications	'}
                            pi={'PDr. P. Mondal (I)'}
                            sponsor={'ISRO RESPOND scheme'}
                            amount={'17.48'}
                            year={'On going'}
                            />
                            <Compo
                            project={'Design Optimization of Multicore Fibers for High Capacity Optical Communications'}
                            pi={'Dr. R. Ranjan (PI)'}
                            sponsor={'SERB_DST'}
                            amount={'7.48'}
                            year={'On going'}
                            />
                            <Compo
                            project={'Resource Optimization and Interference management for Green ultra-dense 5G Cognitive Radio Networks '}
                            pi={'Dr. S. Saha (PI)'}
                            sponsor={'SERB_DST'}
                            amount={'27.33'}
                            year={'On going'}
                            />
                            <Compo
                            project={'Development of Signal Processing Algorithms for Ultra-Wideband Through-the-Wall Radar Imaging using Compressive Sensing'}
                            pi={'Dr. P. Kishore Kumar (PI)'}
                            sponsor={'SERB_DST'}
                            amount={'21.07'}
                            year={'On going'}
                            />
                            <Compo
                            project={'Development of Chirp Scaling Algorithm and Range Doppler Algorithm for Processing High Squint SAR raw data and its Simulation'}
                            pi={'Dr. P. Kishore Kumar (Co-PI)'}
                            sponsor={'RCI Hyderabad'}
                            amount={'9.5'}
                            year={'Completed'}
                            />
                            <Compo
                            project={'Developing E-Learning material for UG students across India in collaboration with IIT Kharagpur'}
                            pi={'Dr. P. Kishore Kumar (Co-PI)'}
                            sponsor={'NMEICT, MHRD, Govt. of India'}
                            amount={'7'}
                            year={'Completed'}
                            />
                            <Compo
                            project={'NMEICT'}
                            pi={'Prof. D. K. Singh'}
                            sponsor={'MHRD'}
                            amount={'10'}
                            year={'Completed'}
                            />
                            <Compo
                            project={'ICT Academy'}
                            pi={'Dr. B. Gupta (PI)'}
                            sponsor={'DeitY'}
                            amount={'1750'}
                            year={'On going'}
                            />
                            
                            <Compo
                            project={'Applied design studies on HPM oscillator-MILO'}
                            pi={'Prof. Pradip Kumar Jain'}
                            sponsor={'DRDO'}
                            amount={'99'}
                            year={'On going'}
                            />
                            <Compo
                            project={'Design and Simulation of Integrated Optoelectronics Filters in Silicon-on-Insulator Substrate'}
                            pi={'Dr. Rakesh Ranjan (Co-PI)'}
                            sponsor={'NPIU, New Delhi Under TEQIP CRS'}
                            amount={'10.08'}
                            year={'On going'}
                            />
                            <Compo
                            project={'Engineering the tunable Au-Bi2Se3-Au metamaterial perfect absorber (MMPA)'}
                            pi={'Dr. Manpuran Mahto(Co-PI)'}
                            sponsor={'TEQIP Collaborative Research Scheme.'}
                            amount={'10'}
                            year={'On going'}
                            />
                            <Compo
                            project={'Development of multi-stacked PLZT material for Aerospace actuator applications'}
                            pi={'Dr. Manpuran Mahto(Co-PI)'}
                            sponsor={'Aeronautics R & D Board, DRDO'}
                            amount={'23'}
                            year={'On going'}
                            />
                            <Compo
                            project={'Image Processing and Machine Learning Algorithms based Automatic Bimodal Computer Aided Diagnostics (BCAD) Tool for Breast Cancer Detection(Seed Money )'}
                            pi={'Dr. Subodh Srivastava(PI)'}
                            sponsor={'TEQIP-III'}
                            amount={'9.7'}
                            year={'On going'}
                            />
                            <Compo
                            project={'Low power D2D communication with QoS constrains for IoB/IoT applications in 5G Network'}
                            pi={'Dr. Rajeev Kumar Arya (PI)'}
                            sponsor={'SERB_DST'}
                            amount={'21.48'}
                            year={'On going'}
                            />
                            <Compo
                            project={'Design and fabrication of current mode CMOS based Low Power IC (Integrated Circuit)'}
                            pi={'Dr. Rajeev Kumar Arya(Co-PI)'}
                            sponsor={'NPIU -TEQIP-III, CRS'}
                            amount={'16.92'}
                            year={'On going'}
                            />
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}
export default Page