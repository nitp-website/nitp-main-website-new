import BackDepartment from "../../../components/department/BackDepartment"

function Compo({ Research, Topic, sno }) {
    return (
        <>
            <div className="col-span-1 border border-black pl-4 py-2 flex flex-col justify-center">
                {sno}
            </div>
            <div className="col-span-3 border border-black pl-4 py-2 flex flex-col justify-center">
                {Topic}
            </div>
            <div className="col-span-4 border border-black pl-4 py-2 flex flex-col justify-center">
                {Research}
            </div>
          

        </>
    )
}
function Compon({ Research, Topic, sno, name,url}) {
    return (
        <>
            <div className="col-span-1 border border-black pl-4 py-2 flex flex-col justify-center">
                {sno}
            </div>
            <div className="col-span-2 border border-black pl-4 py-2 flex flex-col justify-center">
                {name}
            </div>
            <div className="col-span-3 border border-black pl-4 py-2 flex flex-col justify-center">
                {Research}
            </div>
            <div className="col-span-4 border border-black pl-4 py-2 flex flex-col justify-center">
                {Topic}
            </div>
            <div className="col-span-2 border border-black pl-4 py-2 flex flex-col justify-center items-center">
               <a href={url}>View Profile</a>
            </div>
           
          

        </>
    )
}
function Page() {
    return (
        <div className=" flex flex-col p-5 text-black">
            <div className="flex flex-col md:ml-10">
                <div>
                    <p className="text-red-900 text-xl lg:text-2xl font-bold">
                        Research Highlights
                    </p>
                </div>
                <div className="lg:mt-2">
                    <p className="text-gray-500 text-sm lg:text-base font-semibold">
                        MECHANICAL ENGINEERING
                    </p>
                </div>
                <BackDepartment navigate={"/Department/ME"}/>
            </div>
            <div className="mx-4 border p-4 rounded-md shadow-lg shadow-slate-400 backdrop-blur-md">
                <div className="mt-10">
                    <p className="text-grey-800 text-xl font-semibold">
                        Research area of Mechanical Engineering Department
                    </p>
                </div>
                <div className="mb-10 overflow-x-auto lg:mr-10 mt-5">
                    <div className="grid grid-cols-8 border min-w-[1000px]">
                        {/* heading  */}
                        <div className=" col-span-1 border border-black pl-4 py-2 flex flex-col justify-center text-red-900 font-semibold">
                            Sr. No.
                        </div>
                        <div className=" col-span-3 border border-black pl-4 py-2 flex flex-col justify-center text-red-900 font-semibold">
                            Research area
                        </div>
                        <div className="  col-span-4 border border-black pl-4 py-2 flex flex-col justify-center text-red-900 font-semibold text-center">
                            Topic
                        </div>

                        {/* grid  */}
                        <Compo
                            sno={'1.'}
                            Topic={'Thermal and Fluid Engineering'}
                            Research={'Renewable energy, I.C. Engine, Power Plant Engineering, Heat and Mass Transfer, Heat exchanger, Refrigeration and air conditioning, Hydraulic system, Automation, CFD, Biofuel, Fuel cell, Solar Energy, Multi-phase Fluid Flow, Thermal Management'}
                        />
                          <Compo
                            sno={'2'}
                            Topic={'Solid Mechanics and Design Engineering'}
                            Research={'CAD/CAM, Robotics, Control and automation, Finite Element Method, Impact Mechanics, Mechanical Vibration, Nonlinear dynamics, MEMS, Fault Diagnosis, Optimization, Vibration control, Composite Material, Biomechanics, Nanomechanics'}
                        />
                          <Compo
                            sno={'3'}
                            Topic={'Manufacturing and Production Engineering'}
                            Research={'Welding, Heat Treatment, Surface Engineering, Tribology, Additive Manufacturing, Composite Material, Machining Science, Nanotechnology, Non-conventional Manufacturing, Metal forming Technology, Casting, Friction Stir Welding, Material Science'}
                        />
                          <Compo
                            sno={'4'}
                            Topic={'Industrial Engineering'}
                            Research={'Quality Engineering, Supply chain Management, Operation Research, Industry 4.0/5, AI in Manufacturing, Data Analytics, Machine Learning'}
                        />


                    </div>
                </div>
                <div className="mt-14">
                    <p className="text-grey-800 text-xl font-semibold">
                        Research area of Faculty wise for the Mechanical Engineering Department:
                    </p>
                </div>
                <div className="mb-10 overflow-x-auto lg:mr-10 mt-5">
                    <div className="grid grid-cols-12 border min-w-[1000px]">
                        {/* heading  */}
                        <div className=" col-span-1 border border-black pl-4 py-2 flex flex-col justify-center text-red-900 font-semibold">
                            Sr. No.
                        </div>
                        <div className=" col-span-2 border border-black pl-4 py-2 flex flex-col justify-center text-red-900 font-semibold">
                           Name
                        </div>
                        <div className=" col-span-3 border border-black pl-4 py-2 flex flex-col justify-center text-red-900 font-semibold">
                            Research Specialization
                        </div>
                        <div className="  col-span-4 border border-black pl-4 py-2 flex flex-col justify-center text-red-900 font-semibold text-center">
                            Research Topics
                        </div>
                        <div className="  col-span-2 border border-black pl-4 py-2 flex flex-col justify-center text-red-900 font-semibold text-center">
                            Faculty Profile
                        </div>

                        {/* grid  */}
                        <Compon
    sno={'1.'}
    Topic={'Biofuels, Renewable Energy, Internal combustion engine, Power Plant, Heat and Mass Transfer, Thermal Engineering'}
    Research={'Thermal and Fluid Engineering'}
    name={'Om Prakash'}
    url={''}
/>
<Compon
    sno={'2.'}
    Topic={'Welding, Heat treatment'}
    Research={'Manufacturing and Production Engineering'}
    name={'A. N. Sinha'}
    url={''}
/>
<Compon
    sno={'3.'}
    Topic={'Heat Transfer, Porous Media, Solar Energy, Heat Exchanger'}
    Research={'Thermal and Fluid Engineering'}
    name={'Prakash Chandra'}
    url={''}
/>
<Compon
    sno={'4.'}
    Topic={'CAD/CAM, Robotics'}
    Research={'Solid Mechanics and Design Engineering'}
    name={'Amit Kumar'}
    url={''}
/>
<Compon
    sno={'5.'}
    Topic={'Thermal Engineering, Automation'}
    Research={'Thermal and Fluid Engineering'}
    name={'M. N. Pandey'}
    url={''}
/>
<Compon
    sno={'6.'}
    Topic={'Heat Transfer, Refrigeration, Air conditioning, Solar Energy'}
    Research={'Thermal and Fluid Engineering'}
    name={'Shahid Mahmood'}
    url={''}
/>
<Compon
    sno={'7.'}
    Topic={'Heat transfer, Heat exchanger, Power plant'}
    Research={'Thermal and Fluid Engineering'}
    name={'Arun Kumar'}
    url={''}
/>
<Compon
    sno={'8.'}
    Topic={'Manufacturing Engineering, Laser Surface Cladding and Surface Alloying, Laser Material Processing, Surface Engineering and Coating Technology, Tribological Behaviour of Materials, Welding of Advanced Materials, Nanotechnology, Materials Characterization, Composite Materials, Additive Manufacturing, Friction Stir Processing and Welding, Non-conventional Manufacturing.'}
    Research={'Manufacturing and Production Engineering'}
    name={'A. K. Das'}
    url={''}
/>
<Compon
    sno={'9.'}
    Topic={'Conventional and Unconventional Machining, Advanced and Hybrid Machining Processes, Machining of Advanced Materials, Processing and Characterization of Composite Materials, Welding, Composite Materials, Additive Manufacturing, Machine Learning'}
    Research={'Manufacturing and Production Engineering'}
    name={'Abhishek Singh'}
    url={''}
/>
<Compon
    sno={'10.'}
    Topic={'Materials and Structures, Impact Mechanics, Dynamic Behaviour of Materials, Additive Manufacturing, Finite Element Methods'}
    Research={'Solid Mechanics and Design Engineering'}
    name={'Nilamber Kumar Singh'}
    url={''}
/>
<Compon
    sno={'11.'}
    Topic={'Conventional and Unconventional Machining, Friction Stir Welding, Composite Materials, Metal Additive Manufacturing, Machine Learning.'}
    Research={'Manufacturing and Production Engineering'}
    name={'Vikas Upadhyay'}
    url={''}
/>
<Compon
    sno={'12.'}
    Topic={'Nonlinear dynamics, Mechanical vibration, Nanomechanics, MEMS'}
    Research={'Solid Mechanics and Design Engineering'}
    name={'Anand Bhushan'}
    url={''}
/>
<Compon
    sno={'13.'}
    Topic={'Quality Engineering, Supply Chain Management, Operations Management'}
    Research={'Industrial Engineering'}
    name={'Anupam Das'}
    url={''}
/>
<Compon
    sno={'14.'}
    Topic={'System optimization and Control, UIOs, Robust and adaptive estimation and control, Fault diagnosis and fault tolerant control of vehicle, aerospace and fuel cell systems, Optimization of manufacturing processes, Localization and control of mobile robots, Target tracking'}
    Research={'Solid Mechanics and Design Engineering'}
    name={'Sharifuddin Mondal'}
    url={''}
/>
<Compon
    sno={'15.'}
    Topic={'Hydraulic Systems, Control, Automation, Fluid Dynamics, Fluid Flows, Air Conditioning, CFD'}
    Research={'Thermal and Fluid Engineering'}
    name={'N. P. Mandal'}
    url={''}
/>
<Compon
    sno={'16.'}
    Topic={'Supply Chain Management, Sustainability, Digital Supply Chain Management, Industry 4.0'}
    Research={'Industrial Engineering'}
    name={'V. K. Choubey'}
    url={''}
/>
<Compon
    sno={'17.'}
    Topic={'Metrology, Tribology, Coating, Wear, Friction, Surface Modification, Industry 4.0/5.0'}
    Research={'Manufacturing and Production Engineering'}
    name={'Shailesh M Pandey'}
    url={''}
/>
<Compon
    sno={'18.'}
    Topic={'Thermal Engineering'}
    Research={'Thermal and Fluid Engineering'}
    name={'Naresh Kumar'}
    url={''}
/>
<Compon
    sno={'19.'}
    Topic={'Nonlinear Dynamics and Vibration Control'}
    Research={'Solid Mechanics and Design Engineering'}
    name={'Anindya Malas'}
    url={''}
/>
<Compon
    sno={'20.'}
    Topic={'Additive Manufacturing, Metal Forming Technologies'}
    Research={'Manufacturing and Production Engineering'}
    name={'Yogesh Kumar'}
    url={''}
/>
<Compon
    sno={'21.'}
    Topic={'Agent based modelling, Multi Agent System, Artificial intelligence in manufacturing, Operations research, Operations management, Supply chain Management, Data Analytics, E-waste management, Sustainable food supply chain management for Foxnut (Makhana) industry; Supply Chain Analytics in Healthcare Industry; Supply chain risk management in food industry; Sustainable E-waste supply chain management'}
    Research={'Industrial Engineering'}
    name={'Om Ji Shukla'}
    url={''}
/>
<Compon
    sno={'22.'}
    Topic={'Continuous Casting, Solder Alloys, Phase Change Material, Metal Matrix Composites, Modelling of Continuous Casting process and Thermal Energy Storage System, Fabrication and Characterization of MMC and Solder Alloys'}
    Research={'Manufacturing and Production Engineering'}
    name={'Ambrish Maurya'}
    url={''}
/>
<Compon
    sno={'23.'}
    Topic={'I.C. Engines, Alternative Fuels for I.C. Engines, Emissions, Renewable Energy'}
    Research={'Thermal and Fluid Engineering'}
    name={'Anmesh Kumar Srivastava'}
    url={''}
/>
<Compon
    sno={'24.'}
    Topic={'Composite Material, Nonlinear Dynamics, FEM, Experimental mechanics'}
    Research={'Solid Mechanics and Design Engineering'}
    name={'Chetan Kumar Hirwani'}
    url={''}
/>
<Compon
    sno={'25.'}
    Topic={'Supply Chain Management and Additive Manufacturing, Circular Supply Chain, Circular Economy, Industry 4.0/5., Wire-arc Additive Manufacturing'}
    Research={'Industrial Engineering'}
    name={'Sonu Rajak'}
    url={''}
/>
<Compon
    sno={'26.'}
    Topic={'Modelling and Optimization of hydropower plants, Hydro Turbine Design, Designing & testing of hydro mechanical equipment\'s, Cost Optimization, Reliability and Life Cycle Analysis, Solar PVT Energy System, Biogas/Biomass, Renewable Energy, Hybrid Energy.'}
    Research={'Thermal and Fluid Engineering'}
    name={'Ravi Kumar'}
    url={''}
/>
<Compon
    sno={'27.'}
    Topic={'Renewable Energy Conversion: Wind Energy, Solar Energy, Ocean Wave Energy, and Green Fuel Preparation, Energy Storage System Design: Battery, Thermal, and Fuel Cell Systems, Engine Combustion and Performance, Heat Exchanger Design and Development'}
    Research={'Thermal and Fluid Engineering'}
    name={'Achinta Sarkar'}
    url={''}
/>
<Compon
    sno={'28.'}
    Topic={'Computational Fluid Mechanics and Heat Transfer, Turbulence Modelling, Natural and Mixed Convection Flows, and Multiphase Flows and Heat Transfer'}
    Research={'Thermal and Fluid Engineering'}
    name={'Tanmoy Mondal'}
    url={''}
/>
<Compon
    sno={'29.'}
    Topic={'Multiphase heat transfer, thermal management, bubble dynamics, interfacial science, design and development of vapour chamber, pool boiling with binary mixtures, capillary-fed boiling in porous wicks'}
    Research={'Thermal and Fluid Engineering'}
    name={'Qaisar Raza'}
    url={''}
/>
<Compon
    sno={'30.'}
    Topic={'Thermal and Dynamic Mechanical Analysis; Bio-nanocomposites/Polymer Composites: Synthesis, Analysis and Characterization'}
    Research={'Thermal and Fluid Engineering'}
    name={'Sunil Singh Rana'}
    url={''}
/>

                       


                    </div>
                </div>
            </div>
        </div>

    )
}
export default Page
