import BackDepartment from "../../../../components/BackDepartment"

function Compo({ project, pi, sponsor, amount, year, sno }) {
    return (
        <>
            <div className="col-span-1 border border-black pl-4 py-2 flex flex-col justify-center">
                {sno}
            </div>

            <div className="col-span-2 border border-black pl-4 py-2 flex flex-col justify-center">
                {project}
            </div>
            <div className="col-span-2 border border-black pl-4 py-2 flex flex-col justify-center">
                {pi}
            </div>
            <div className="col-span-2 border border-black pl-4 py-2 flex flex-col justify-center">
                {sponsor}
            </div>
            <div className="col-span-2 border border-black pl-4 py-2 flex flex-col justify-center">
                {amount}
            </div>
            <div className="col-span-2 border border-black pl-4 py-2 flex flex-col justify-center">
                {year}
            </div>


        </>
    )
}
function Compon({ app, pi, title, filldate, Patent, grant, sno }) {
    return (
        <>
            <div className="col-span-1 border border-black pl-4 py-2 flex flex-col justify-center">
                {sno}
            </div>

            <div className="col-span-2 border border-black pl-4 py-2 flex flex-col justify-center">
                {app}
            </div>
            <div className="col-span-2 border border-black pl-4 py-2 flex flex-col justify-center">
                {title}
            </div>
            <div className="col-span-2 border border-black pl-4 py-2 flex flex-col justify-center">
                {filldate}
            </div>
            <div className="col-span-1 border border-black pl-4 py-2 flex flex-col justify-center">
                {Patent}
            </div>
            <div className="col-span-2 border border-black pl-4 py-2 flex flex-col justify-center">
                {grant}
            </div>
            <div className="col-span-2 border border-black pl-4 py-2 flex flex-col justify-center">
                {pi}
            </div>


        </>
    )
}
function Page() {
    return (
        <div className="flex flex-col p-5">
            <div className="flex flex-col md:ml-10">
                <div>
                    <p className="text-red-900 text-xl lg:text-2xl font-bold">
                        Achievements
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
                    <p className="text-grey-900 text-xl font-semibold">
                        Sponsored Project List:
                    </p>
                </div>
                <div className="mb-10 overflow-x-auto lg:mr-10 mt-8">
                    <div className="grid grid-cols-11 border min-w-[1000px]">
                        {/* heading  */}
                        <div className=" col-span-1 border border-black pl-4 py-2 flex flex-col justify-center text-red-900 font-semibold">
                            Sr. No.
                        </div>
                        <div className=" col-span-2 border border-black pl-4 py-2 flex flex-col justify-center text-red-900 font-semibold">
                            Name of the Project
                        </div>
                        <div className="  col-span-2 border border-black pl-4 py-2 flex flex-col justify-center text-red-900 font-semibold">
                            Name of the PI
                        </div>
                        <div className="  col-span-2 border border-black pl-4 py-2 flex flex-col justify-center text-red-900 font-semibold">
                            Sponsoring Agency
                        </div>
                        <div className=" col-span-2 border border-black pl-4 py-2 flex flex-col justify-center text-red-900 font-semibold">
                            Sanctioned Amount(in Lakh)
                        </div>
                        <div className=" col-span-2 border border-black pl-2 py-2 flex flex-col justify-start text-red-900 font-semibold">
                            Status
                        </div>

                        {/* grid  */}
                        <Compo
                            sno={'1.'}
                            project={'Modelling and nonlinear dynamic analysis of wrinkled graphene resonators'}
                            pi={'Dr. Anand Bhushan'}
                            sponsor={'Science and Engineering Research Board'}
                            amount={'12.9275'}
                            year={'Completed (2016-2019)'}
                        />
                        <Compo
                            sno={'2.'}
                            project={'Friction Stir Welding of Dissimilar Heat Treatable Aluminium Alloys'}
                            pi={'Dr. Vikas Upadhyay'}
                            sponsor={'Science and Engineering Research Board, DST, GOI'}
                            amount={'8.41'}
                            year={'Completed (2017-2020)'}
                        />
                        <Compo
                            sno={'3.'}
                            project={'Experiment and Analysis of Energy Saving Variable Displacement Electro-Hydrostatics Actuation (VDEHA) System'}
                            pi={'Dr. Nimai Pada Mandal'}
                            sponsor={'DST'}
                            amount={'24.2468'}
                            year={'Completed (2017-2021)'}
                        />
                        <Compo
                            sno={'4.'}
                            project={'Studies on hard-facing of Inconel 718 on stainless steel 321 and 347 grades for nuclear reactor components'}
                            pi={'Dr. A. Karpagaraj'}
                            sponsor={'SERB'}
                            amount={'29.74'}
                            year={'Completed (2020-2023)'}
                        />
                        <Compo
                            sno={'5.'}
                            project={'Wire Arc Additive Manufacturing (WAAM) of Stainless Steel 316L Components for Nuclear Plant Applications'}
                            pi={'Dr. A. Karpagaraj'}
                            sponsor={'TEQIP-III/NITP'}
                            amount={'10'}
                            year={'Completed (2020-2023)'}
                        />
                        <Compo
                            sno={'6.'}
                            project={'SEED Project'}
                            pi={'Dr. Anindya Malas'}
                            sponsor={'NIT Patna, TEQIP III'}
                            amount={'6'}
                            year={'Completed (2019-2022)'}
                        />
                        <Compo
                            sno={'7.'}
                            project={'Surface Modification of Stainless steel by additive manufacturing for high temperature applications'}
                            pi={'Dr. Anil Kumar Das'}
                            sponsor={'DST-SERB'}
                            amount={'31.69'}
                            year={'Ongoing (2024-2026)'}
                        />
                        <Compo
                            sno={'8.'}
                            project={'Development and Characterization of Hybrid Green Composites from Agro Waste Banana Stem fiber'}
                            pi={'Dr. Abhishek Singh (CO-PI)'}
                            sponsor={'BSCT, DST, Bihar'}
                            amount={'2'}
                            year={'Ongoing (2023)'}
                        />
                        <Compo
                            sno={'9.'}
                            project={'Assessment of E-waste Management Practices in select areas of Bihar under Swachh Bharat Abhiyan'}
                            pi={'Dr. Om Ji Shukla (PI) Dr. S.M.Pandey (Co-PI)'}
                            sponsor={'ICSSR, New Delhi'}
                            amount={'14'}
                            year={'Ongoing (2023-2024)'}
                        />
                        <Compo
                            sno={'10.'}
                            project={'Experimental and Numerical Vibroacoustic Performance Evaluation of Honeycomb Core Sandwich Structure'}
                            pi={'Dr. Shailesh M. Pandey (PI)'}
                            sponsor={'SUPRA- DST'}
                            amount={'183'}
                            year={'Ongoing (2023)'}
                        />
                        <Compo
                            sno={'11.'}
                            project={'Development of Graphene and HfO2 doped Nd2Ce2O7 as a Novel Thermal Barrier Coating Material for Ultra-Critical High-Temperature Applications'}
                            pi={'Dr. Shailesh M. Pandey (PI)'}
                            sponsor={'TDP/DST'}
                            amount={'153'}
                            year={'Approved (2023)'}
                        />
                        <Compo
                            sno={'12.'}
                            project={'FIST Engineering Science Level B'}
                            pi={'Mechanical Engineering Department'}
                            sponsor={'FIST DST'}
                            amount={'115'}
                            year={'Ongoing (2023)'}
                        />
                        <Compo
                            sno={'13.'}
                            project={'Development of Robust and Super Hydrophobic Plasma Sprayed Graphene reinforced TiAl Intermetallic membranes with improved Desalination in Membrane Distillation'}
                            pi={'Dr. Shailesh M. Pandey (CO-PI)'}
                            sponsor={'DST'}
                            amount={'58'}
                            year={'Ongoing (2023)'}
                        />
                        <Compo
                            sno={'14.'}
                            project={'Advance wear and corrosion resistance coating development and commercialisation In India'}
                            pi={'Dr. Shailesh M. Pandey (CO-PI)'}
                            sponsor={'AMT/DST'}
                            amount={'587.97022 NITP:10 Lakh'}
                            year={'Ongoing (2023)'}
                        />
                        <Compo
                            sno={'15.'}
                            project={'Low cost gram scale high quality and defect free Graphene by scalable Plasma spraying'}
                            pi={'Dr. Shailesh M. Pandey (CO-PI)'}
                            sponsor={'DST'}
                            amount={'120.00,000 NITP:20 Lakh'}
                            year={'Ongoing (2024)'}
                        />
                        <Compo
                            sno={'16.'}
                            project={'Experimental Improved Dynamic Behavior Analysis of Shape Memory Polymer Composite for Space Application'}
                            pi={'Dr. Chetan Kumar Hirwani'}
                            sponsor={'SERB-SRG'}
                            amount={'23'}
                            year={'Ongoing (2022)'}
                        />
                        <Compo
                            sno={'17.'}
                            project={'Development of Space Qualified vapor Chamber'}
                            pi={'Dr. Md. Qaisar Raza'}
                            sponsor={'ISRO'}
                            amount={'23'}
                            year={'Ongoing (2023)'}
                        />
                        <Compo
                            sno={'18.'}
                            project={'Investigation of Capillary-fed Boiling in porous wicks with Ionic Liquids and Surfactants, File No. SRG/2023/001383'}
                            pi={'Dr. Md. Qaisar Raza'}
                            sponsor={'SERB-SRG'}
                            amount={'31.5753'}
                            year={'Ongoing (2023)'}
                        />
                        <Compo
                            sno={'19.'}
                            project={'Development of Robot-based Incremental Sheet Hydro-forming Machine'}
                            pi={'Dr. Yogesh Kumar'}
                            sponsor={'SERB-SRG'}
                            amount={'21.39'}
                            year={'Completed (2021-2023)'}
                        />
                        <Compo
                            sno={'20.'}
                            project={'Manufacturing of Plasma transferred arc coated surface on magnesium alloy for Tribological applications'}
                            pi={'Dr. Anil Kumar das'}
                            sponsor={'DST-SERB'}
                            amount={'38.7174'}
                            year={'Completed (2021-2023)'}
                        />
                        <Compo
                            sno={'21.'}
                            project={'Thermomechanical Analysis and modelling of forming and welding of thin metal sheets at micro and macro scales using continuous and pulsed laser'}
                            pi={'Dr. Kuntal Maji'}
                            sponsor={'DST-SERB'}
                            amount={'12.3'}
                            year={'Completed'}
                        />


                    </div>
                </div>

                <div className="mt-10">
                    <p className="text-grey-900 text-xl font-semibold">
                        List of Granted Patents:
                    </p>
                </div>
                <div className="mb-10 overflow-x-auto lg:mr-10">
                    <div className="grid grid-cols-12 border min-w-[1000px]">
                        {/* heading  */}
                        <div className=" col-span-1 border border-black pl-4 py-2 flex flex-col justify-center text-red-900 font-semibold">
                            Sr. No.
                        </div>
                        <div className=" col-span-2 border border-black pl-4 py-2 flex flex-col justify-center text-red-900 font-semibold">
                            Application
                        </div>
                        <div className="  col-span-2 border border-black pl-4 py-2 flex flex-col justify-center text-red-900 font-semibold">
                            Title
                        </div>
                        <div className="  col-span-2 border border-black pl-4 py-2 flex flex-col justify-center text-red-900 font-semibold">
                            Filling Date
                        </div>
                        <div className=" col-span-1 border border-black pl-4 py-2 flex flex-col justify-center text-red-900 font-semibold">
                            Patent No.
                        </div>
                        <div className=" col-span-2 border border-black pl-2 py-2 flex flex-col justify-start text-red-900 font-semibold">
                            Grant Date
                        </div>
                        <div className=" col-span-2 border border-black pl-2 py-2 flex flex-col justify-start text-red-900 font-semibold">
                            Inventors Name
                        </div>

                        {/* grid  */}
                        <Compon
                            sno={'1.'}
                            app={'202131052394'}
                            title={'METHOD AND APPARATUS FOR MEASURING THE ABSORPTIVITY OF MATERIALS WITH DIFFERENT CONTOUR SURFACE'}
                            filldate={'November 15, 2021'}
                            Patent={'408905'}
                            grant={'October 12, 2022'}
                            pi={'1. SURESH KANT VERMA 2. RAVI KANT RANJAN'}
                        />
                        <Compon
                            sno={'2.'}
                            app={'202231026831'}
                            title={'A DENTAL IMPLANT ASSEMBLY WITH IMPROVED LOCKING MECHANISM'}
                            filldate={'May 9, 2022'}
                            Patent={'434134'}
                            grant={'June 8, 2023'}
                            pi={'1. SAROJ KUMAR SARANGI 2. SAMBHRANT SRIVASTAVA'}
                        />
                        <Compon
                            sno={'3.'}
                            app={'202231036212'}
                            title={'A PLANTAR PRESSURE BASED INSOLE AND A MANUFACTURING METHOD THEREOF'}
                            filldate={'June 23, 2022'}
                            Patent={'434431'}
                            grant={'June 13, 2023'}
                            pi={'1. SAROJ KUMAR SARANGI 2. RAVI KUMAR'}
                        />
                        <Compon
                            sno={'4.'}
                            app={'202231054468'}
                            title={'AN EXHAUST FAN BASED POWER GENERATION SYSTEM'}
                            filldate={'September 23, 2022'}
                            Patent={'435580'}
                            grant={'June 26, 2023'}
                            pi={'1. NITIN KUMAR 2. OM PRAKASH'}
                        />
                        <Compon
                            sno={'5.'}
                            app={'202331001902'}
                            title={'A SYSTEM FOR WASTE HEAT RECOVERY FROM AN ENGINE'}
                            filldate={'January 10, 2023'}
                            Patent={'442327'}
                            grant={'August 1, 2023'}
                            pi={'1. AMIT KUMAR 2. ABHISHEK SINGH 3. AMIT KUMAR TIWARY 4. SWARNAMBUJ SUMAN 5. AJIT KUMAR PANDEY'}
                        />
                        <Compon
                            sno={'6.'}
                            app={'201831047287'}
                            title={'STEERABLE DRIVE WHEEL ASSEMBLY AND PERSONAL CONVEYANCE DETACHABLY EQUIPPED WITH THE SAME'}
                            filldate={'December 14, 2018'}
                            Patent={'477242'}
                            grant={'December 5, 2023'}
                            pi={'1. ASHOK DE 2. PRAKASH CHANDRA 3. PARAKH SETHI 4. KUMAR TANMAY 5. SWATANTRA KUMAR 6. SUMAN YADAV 7. KUMAR YASH KESHARWANI 8. ASHISH KUSHWAHA 9. GOVIND YADAV 10. ATUL PARASHAR 11. DIVYANSHU SHAHI'}
                        />
                        <Compon
                            sno={'7.'}
                            app={'201711011951'}
                            title={'ROBOT ASSISTED HIGH SPEED INCREMENTAL SHEET HYDROFORMING MACHINE'}
                            filldate={'April 3, 2017'}
                            Patent={'486952'}
                            grant={'December 21, 2023'}
                            pi={'1. Dr. YOGESH KUMAR'}
                        />
                        <Compon
                            sno={'8.'}
                            app={'201831030260'}
                            title={'DESIGN AND FABRICATION OF GRANULAR FERTILIZER SPREADING MACHINE'}
                            filldate={'August 11, 2018'}
                            Patent={'493394'}
                            grant={'January 3, 2024'}
                            pi={'1. OM PRAKASH 2. ANURAG SINGH 3. SHEKHAR KUMAR NIRALA'}
                        />
                        <Compon
                            sno={'9.'}
                            app={'202331050550'}
                            title={'AN AUTO-ROBOTIC VACUUM BASED SCREWING SYSTEM FOR A CLUSTER ASSEMBLY'}
                            filldate={'July 26, 2023'}
                            Patent={'528591'}
                            grant={'March 15, 2024'}
                            pi={'1. SAURABH PRIYADARSHI 2. NILAMBER KUMAR SINGH'}
                        />


                    </div>
                </div>
                    
                <div className="">
                    <h1 className="font-semibold lg:text-2xl text-xl text-red-900 mb-4">Clubs Achievements :</h1>
                    <ul className="list-disc lg:text-base text-sm space-y-3 ml-4">
                        <li>In HPVC INDIA 2014, we stood 6th overall from all the 41 colleges participating, ranging from IITs to BITSs and NITs and various other prestigious colleges.</li>
                        <li>5th position in ENDURANCE Event in HPVC - 2014.</li>
                        <li>5th position in DRAG Event in HPVC - 2014.</li>
                        <li>ASME HPVC Secured an overall rank of 7th in 2019 and 10th in 2020.</li>
                        <li>4th Position in Student Design Competition(SDC) in ASME E-Fest 2020.</li>
                        <li>4th Position in IAM3D in ASME 2020.</li>
                        <li>Team AAVEGA stood 55th in Virtual Supra SAEINDIA 2015.</li>
                        <li>Team AAVEGA stood 19th in Supra SAEINDIA 2015 and 2nd among all the NITs and IITs.</li>
                        <li>2nd Rank in the design Event in HPVC 2015.</li>
                        <li>ASME-recent achievement</li>
                    </ul>
                </div>
                
            </div>
        </div>

    )
}
export default Page