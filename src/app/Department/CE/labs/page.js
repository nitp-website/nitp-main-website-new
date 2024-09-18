import BackDepartment from "../../../components/department/BackDepartment";
import Image from "next/image"

export default function labs(){
    var labUrl = [
        "https://web.nitp.ac.in/dept/ee/labs/DSC_0063.jpg",
        "https://web.nitp.ac.in/dept/ee/labs/DSC_0056.jpg",
        "https://web.nitp.ac.in/dept/ee/labs/DSC_0057.jpg",
        "https://web.nitp.ac.in/dept/ee/labs/DSC_0058.jpg",
        "https://web.nitp.ac.in/dept/ee/labs/DSC_0061.jpg",
        "https://web.nitp.ac.in/dept/ee/labs/DSC_0063.jpg",
    ]
    var image = labUrl[0];
    var idx = 0;
    setInterval(()=>{
        image = labUrl[idx]
        idx++
        if(idx >= 6){
            idx = 0;
        }
    },2000)

    return (
        <div className=" flex flex-col p-10 max-sm:p-2 text-black">  
            <div className="flex flex-col  mb-6">
                <div>
                    <p className="text-red-900 text-3xl max-sm:text-2xl font-bold">
                        LABS
                    </p>
                </div>
                <div className="mt-2">
                    <p className="text-gray-500 text-xl font-semibold">
                        CIVIL ENGINEERING
                    </p>
                </div>
                <BackDepartment navigate={"/Department/CE"}/>
            </div>
            <div className="mx-4 border p-4 rounded-md shadow-lg shadow-slate-400 backdrop-blur-md">
                <div className="mb-10">
                    <div className="text-red-900 font-bold text-2xl max-sm:text-lg mb-4">Laboratory Details:-</div>
                    <p className="text-lg max-sm:text-sm mb-8">Civil Engineering Department, NIT Patna has state-of-the-art laboratories in the following specializations.These laboratories are well-equipped to cater the academic and research requirements of both UG and PG students.</p>
                </div>
                <div className="mb-10">
                    <div className="grid grid-cols-6 border">
                        {/* heading  */}
                        <div className="col-span-1 border border-black pl-4 py-2 flex flex-col justify-center text-red-900 font-semibold">SL No.</div>
                        <div className="col-span-3 border border-black pl-4 py-2 flex flex-col justify-center text-red-900 font-semibold">Name of Laboratories</div>
                        <div className="col-span-2 border border-black pl-4 py-2 flex flex-col justify-center text-red-900 font-semibold">Area (Sq. ft.)</div>
                            {/* grid  */}
                        <Compo sl={"1"} name={"Transportation Engineering Lab"} area={"2299"}/>
                        <Compo sl={"2"} name={"Cement Concrete Lab"} area={"1437.7"}/>
                        <Compo sl={"3"} name={"Water Resources Engineering Lab"} area={"4626.36"}/>
                        <Compo sl={"4"} name={"Material Testing Lab"} area={"3909.29"}/>
                        <Compo sl={"5"} name={"Geotechnical Lab"} area={"2770.68"}/>
                        <Compo sl={"6"} name={"Environmental Engineering Lab"} area={"1389.52"}/>
                        <Compo sl={"7"} name={"Heavy Structures Lab"} area={"2357.04"}/>
                        <Compo sl={"8"} name={"Surveying Lab"} area={"1100"}/>
                        <Compo sl={"9"} name={"Civil Engineering Computer Lab"} area={"472.31"}/>
                        <Compo sl={"10"} name={"Earthquake and Safety Clinic"} area={"1930.5"}/>
                    </div>
                </div>
                {/* <Labcomponent title={""} content={""} image={""} /> */}
                {/* <Labcomponent title={"Heavy Structure Laboratory"} content={"Heavy Structure Laboratory is fully dedicated for M. Tech and PhD research scholar. Equipment available in this lab are rebound hammer testing apparatus, ultrasonic pulse velocity testing apparatus, corrosion analyzer, bar locator and cover meter, universal testing machine (50 tons), actuator & loading frame (50 tons) and shake table (up to 6 degree of freedom)"} image={""} /> */}
                <div className="mb-10">
                    <div className=" grid grid-cols-2 max-md:grid-cols-1">
                        <div>
                            <div className="text-black font-bold text-2xl max-sm:text-lg mb-4">Cement Concrete Laboratory</div>
                            <p className="text-lg max-sm:text-sm mb-8 text-justify pr-6">Structural Engineering is one of the five specializations offered by the department. Faculty members are also working in other research areas related to structural mechanics, fracture mechanics, finite element analysis, durability of structures, construction management and non-destructive testing. This department boasts of a state-of-the-art concrete laboratory which can meet the present-day testing and research requirements. The lab is equipped with digital compressive testing machine, flexural strength testing machine for concrete, concrete permeability apparatus, Vee bee testing apparatus, flow table, compaction factor apparatus, slump test apparatus, table vibrator, L-box apparatus, V-funnel apparatus, J-ring apparatus, rapid chloride penetration testing apparatus and autoclave</p>
                        </div>
                        {/* <div className=" flex justify-center">
                            <div className="flex flex-col">
                                <Image src={""} width={700} height={1000} alt="Loading.." className="col-span-1 h-80 border rounded-lg ml-2" />
                            </div>
                        </div> */}
                    </div>
                </div>
                <div className="mb-10">
                    <div className=" grid grid-cols-2 max-md:grid-cols-1">
                        <div>
                            <div className="text-black font-bold text-2xl max-sm:text-lg mb-4">Transportation Engineering Laboratory</div>
                            <p className="text-lg max-sm:text-sm mb-8 text-justify pr-6">Two separate laboratories for Traffic Engineering and Pavement Engineering are functional with important equipment to provide best laboratory facilities to cater to the needs of the students and researchers. The faculties in this department are engaged in various consultancy works including the very prestigious project like PMGSY and contribute to the development of the nation.</p>
                        </div>
                        {/* <div className=" flex justify-center">
                            <div className="flex flex-col">
                                <Image src={""} width={700} height={1000} alt="Loading.." className="col-span-1 h-80 border rounded-lg ml-2" />
                            </div>
                        </div> */}
                    </div>
                </div>
                <div className="mb-10">
                    <div className=" grid grid-cols-2 max-md:grid-cols-1">
                        <div>
                            <div className="text-black font-bold text-2xl max-sm:text-lg mb-4">Material Testing Laboratory</div>
                            <p className="text-lg max-sm:text-sm mb-8 text-justify pr-6">Material testing laboratory has been set up to fulfil the needs of testing and researching on various materials like steel, metals etc. The laboratory works for the courses like Engineering Mechanics, Theory of structures etc. are conducted in this laboratory. It has state of the art equipment like 100 tons universal testing machine along with other equipment like Izod impact testing machine, Brinell’s hardness testing machine, torsion testing machine, Amsler wood testing machine, universal testing machine (30 tons), and loading frame up to 50 tons.</p>
                        </div>
                        {/* <div className=" flex justify-center">
                            <div className="flex flex-col">
                                <Image src={""} width={700} height={1000} alt="Loading.." className="col-span-1 h-80 border rounded-lg ml-2" />
                            </div>
                        </div> */}
                    </div>
                </div>
                <div className="mb-10">
                    <div className=" grid grid-cols-2 max-md:grid-cols-1">
                        <div>
                            <div className="text-black font-bold text-2xl max-sm:text-lg mb-4">Geotechnical EngineeringLaboratory</div>
                            <p className="text-lg max-sm:text-sm mb-8 text-justify pr-6">Geotechnical engineering laboratory is equipped to perform all the necessary basic characterization of soils and several advanced testing facilities. A typical geotechnical engineering laboratory helps in identifying the engineering behavior of geomaterials (soils and rocks) and by-products such as fly ash etc. There are different physical, chemical and geotechnical properties determined in the laboratory that is required for identifying the geomaterials. This information is used by geotechnical engineer for designing the type of foundations, earthworks such as dams, embankments, tunnels, reservoirs, pavement subgrades etc. The preciseness of such design is entirely based on the experimental information obtained from a geotechnical laboratory. Therefore, geotechnical engineering laboratory has a great role to play in rendering the subsurface a safe and stable load bearing medium</p>
                        </div>
                        {/* <div className=" flex justify-center">
                            <div className="flex flex-col">
                                <Image src={""} width={700} height={1000} alt="Loading.." className="col-span-1 h-80 border rounded-lg ml-2" />
                            </div>
                        </div> */}
                    </div>
                </div>
                <div className="mb-10">
                    <div className=" grid grid-cols-2 max-md:grid-cols-1">
                        <div>
                            <div className="text-black font-bold text-2xl max-sm:text-lg mb-4">Water Resource Engineering Laboratory</div>
                            <p className="text-lg max-sm:text-sm mb-8 text-justify pr-6">The laboratory provides support to both undergraduate and postgraduate, teaching so that students have the opportunity to visualize by themselves the essential fluid mechanics principles. The hydraulics laboratory has flumes for undertaking cutting edge research in the area of open channel flow, sediment transport processes and other dedicated equipment like Venturimeter, Pelton wheel, Kaplan and Francis turbines and Reynolds apparatus. Work is also being carried out in land use and land cover classification, river migration, water-shed delineation, flow accumulation and hill slope hydrology. The major areas of current research in this field include flood flow forecasting, bank protection measures, river training works etc</p>
                        </div>
                        {/* <div className=" flex justify-center">
                            <div className="flex flex-col">
                                <Image src={""} width={700} height={1000} alt="Loading.." className="col-span-1 h-80 border rounded-lg ml-2" />
                            </div>
                        </div> */}
                    </div>
                </div>
                <div className="mb-10">
                    <div className=" grid grid-cols-2 max-md:grid-cols-1">
                        <div>
                            <div className="text-black font-bold text-2xl max-sm:text-lg mb-4">Environmental Engineering Laboratory</div>
                            <p className="text-lg max-sm:text-sm mb-8 text-justify pr-6">Environmental Engineering research spans the treatment of water and wastewater, through to air quality modelling to solid waste management. The undergraduate and graduate students work in a state-of-the-art laboratory, exploring exciting questions related to the acidification of surface waters, to discharges of waste gases from thermal power plants, to the composting of water hyacinth.</p>
                        </div>
                        {/* <div className=" flex justify-center">
                            <div className="flex flex-col">
                                <Image src={""} width={700} height={1000} alt="Loading.." className="col-span-1 h-80 border rounded-lg ml-2" />
                            </div>
                        </div> */}
                    </div>
                </div>
                <div className="mb-10">
                    <div className=" grid grid-cols-2 max-md:grid-cols-1">
                        <div>
                            <div className="text-black font-bold text-2xl max-sm:text-lg mb-4">Surveying Laboratory</div>
                            <p className="text-lg max-sm:text-sm mb-8 text-justify pr-6">Surveying is the first step of any engineering project. The department boasts of a very good surveying laboratory which has all the required instruments for carrying out various survey works. It caters to the need of the under graduate course on survey. It has instruments like theodolites, plane table and total station etc.</p>
                        </div>
                        {/* <div className=" flex justify-center">
                            <div className="flex flex-col">
                                <Image src={""} width={700} height={1000} alt="Loading.." className="col-span-1 h-80 border rounded-lg" />
                            </div>
                        </div> */}
                    </div>
                </div>
                <div className="mb-10">
                    <div className=" grid grid-cols-2 max-md:grid-cols-1">
                        <div>
                            <div className="text-black font-bold text-2xl max-sm:text-lg mb-4">Computational Laboratory</div>
                            <p className="text-lg max-sm:text-sm mb-8 text-justify pr-6">Any branch of engineering and science is incomplete if it does not address the need of modelling a problem. Civil engineering is no different. A computational laboratory for civil engineering has been setup. It has sixty numbers of desktop computers with internet connections, so that the M. Tech and PhD students may carry out their research activities. Following software are available in the laboratory: GMS, WMS, PLAXIS, ABAQUS, SAP 2000 STADD PRO, Geo Studio and MATLAB</p>
                        </div>
                        {/* <div className=" flex justify-center">
                            <div className="flex flex-col">
                                <Image src={""} alt="Loading.." className="col-span-1  border rounded-lg " />
                            </div>
                        </div> */}
                    </div>
                </div> 
            </div>    
        </div>
    )
}

function Compo({sl, name, area }){
    return (
        <>
            <div className="col-span-1 border border-black pl-4 py-2 flex flex-col justify-center">{sl}</div>
            <div className="col-span-3 border border-black pl-4 py-2 flex flex-col justify-center">{name}</div>
            <div className="col-span-2 border border-black pl-4 py-2 flex flex-col justify-center">{area}</div>
        </>
    )
}

function Labcomponent({title, content, image}){
    return (
        <div className="mb-10">
                <div className=" grid grid-cols-2 max-md:grid-cols-1">
                    <div className="">
                        <div className="text-black font-bold text-2xl max-sm:text-lg mb-4">{title}</div>
                        <p className="text-lg max-sm:text-sm mb-8 text-justify pr-6">{content}</p>
                    </div>
                    <div className=" flex justify-center">
                        <div className="flex flex-col">
                            <Image src={image} width={700} height={1000} alt="Loading.." className="col-span-1 h-80 border rounded-lg ml-2" />
                        </div>
                    </div>
                </div>
        </div>
    )
}