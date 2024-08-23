import BackDepartment from "../../../components/department/BackDepartment"

function Compo({ project, pi, sponsor, amount, year, sno }) {
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
            <div className="col-span-2 border border-black pl-4 py-2 flex flex-col justify-center">
                {year}
            </div>
            <div className="col-span-1 border border-black pl-4 py-2 flex flex-col justify-center">
                {amount}
            </div>
            <div className="col-span-2 border border-black pl-4 py-2 flex flex-col justify-center">
                {sponsor}
            </div>
        </>
    )
}
function Page() {
    return (
        <div className=" flex flex-col p-5">
            <div className="flex flex-col  mb-6">
                <div>
                    <p className="text-red-900 lg:text-2xl text-xl  font-bold">
                    ACHIEVEMENTS
                    </p>
                </div>
                <div className="mt-1 lg:mt-2">
                    <p className="text-gray-500 text-sm lg:text-base font-semibold">
                        CHEMISTRY
                    </p>
                </div>
                <BackDepartment navigate={"/Department/Chem"}/>
            </div>
            <div className="mx-4 border p-4 rounded-md shadow-lg shadow-slate-400 backdrop-blur-md">
                <div className="mt-10">
                    <p className="text-red-900 text-xl font-semibold">
                        Externally Sponsored Projects:
                    </p>
                </div>
                <div className="mb-10 overflow-x-auto lg:mr-10">
                    <div className="grid grid-cols-10 border min-w-[1000px]">
                        {/* heading  */}
                        <div className=" col-span-1 border border-black pl-4 py-2 flex flex-col justify-center text-red-900 font-semibold">
                            Sr. No.
                        </div>
                        <div className=" col-span-2 border border-black pl-4 py-2 flex flex-col justify-center text-red-900 font-semibold">
                            Name of the PI
                        </div>
                        <div className="  col-span-2 border border-black pl-4 py-2 flex flex-col justify-center text-red-900 font-semibold">
                            Title of the Project
                        </div>
                        <div className="  col-span-2 border border-black pl-4 py-2 flex flex-col justify-center text-red-900 font-semibold">
                            Project No./ Time Period
                        </div>
                        <div className=" col-span-1 border border-black pl-2 py-2 flex flex-col justify-start text-red-900 font-semibold">
                            Sanctioned Amount(in lakh)
                        </div>
                        <div className=" col-span-2 border border-black pl-4 py-2 flex flex-col justify-center text-red-900 font-semibold">
                            Funding Agency
                        </div>
                        {/* grid  */}
                        <Compo
                            sno={'1'}
                            project={'Radical Mediated Glycal Functionalization towards Synthesis of C2-Modified Sugars.'}
                            pi={'Dr. Rima Thakur'}
                            sponsor={'SERB-DST'}
                            amount={'45.21 Lakhs'}
                            year={'SPG/2021/004607 July 2022 - July 2025'}
                        />
                        <Compo
                            sno={'2'}
                            project={'Tunable loading of oligonucleotide with gold and magnetic silica sphere derived gold nanostructured materials as sensing probe for detection of Target DNA.'}
                            pi={'Dr. Niki Sweta Jha'}
                            sponsor={'RSC Research fund'}
                            amount={'3.92 Lakhs'}
                            year={'R21-1196462483August 2021 – August 2023'}
                        />
                        <Compo
                            sno={'3'}
                            project={'Analysis of Stopper Size for Smaller Crown Ethers in MIM.'}
                            pi={'Dr. Suvankar Dasgupta'}
                            sponsor={'RSC Research fund'}
                            amount={'3.92 Lakhs'}
                            year={'R21-1196462483August 2021 – August 2023'}
                        />
                        <Compo
                            sno={'4'}
                            project={'Bio-sensing application of Graphene (GR) analogous systems: Estimating device potential.'}
                            pi={'Dr. Subrata Das'}
                            sponsor={'BRNS-DAE'}
                            amount={'32.00 Lakhs'}
                            year={'54/14/15/2020-BRNS/35054 September 2020 – September 2023'}
                        />
                        <Compo
                            sno={'5'}
                            project={'Metallosupramolecular complexes with bioactive pyrimidine derivatives: Materials for advanced applications.'}
                            pi={'Dr. Subrata Das'}
                            sponsor={'	SERB-DST'}
                            amount={'43.00 Lakhs'}
                            year={'EEQ/2019/000294 December 2019 – December 2022'}
                        />
                        <Compo
                            sno={'6'}
                            project={'Host-Guest Chemistry for Stimuli-Responsive Systems.'}
                            pi={'Dr. Suvankar Dasgupta'}
                            sponsor={'	SERB-DST'}
                            amount={'36.21 Lakhs'}
                            year={'ECR/2016/001724 Feb 2017 – June 2020'}
                        />
                        <Compo
                            sno={'7'}
                            project={'Surface-Immobilized Growth of Anisotropic Noble Metal Nanoparticles: Spectroscopic Investigation and Application.'}
                            pi={'Dr. Aniruddha Paul'}
                            sponsor={'	SERB-DST'}
                            amount={'45.16 Lakhs'}
                            year={'ECR/2016/001597 Feb 2017 – Feb 2020'}
                        />
                        <Compo
                            sno={'8'}
                            project={'Stereoselective Strategies Towards b-glycosylation: En route Synthesis of Bioactive Compounds.'}
                            pi={'Dr. Rima Thakur'}
                            sponsor={'SERB-DST'}
                            amount={'37.62 Lakhs'}
                            year={'ECR/2016/000623 Nov 2016 – Nov 2019'}
                        />
                        <Compo
                            sno={'9'}
                            project={'Exploration of bifunctional thiourea-amine orgnocatalysts in asymmetric multicomponent'}
                            pi={'	Dr. Tasneem Parvin'}
                            sponsor={'SERB-DST'}
                            amount={'51.95 Lakhs'}
                            year={'EMR/2016/000960 Sept 2016 – Sept 2019'}
                        />
                        <Compo
                            sno={'10'}
                            project={'Nitroso-Diels-Alder (NDA) reaction for the synthesis of some heterocyclic compounds.'}
                            pi={'Dr. Subrata Das'}
                            sponsor={'SERB-DST'}
                            amount={'13.00 Lakhs'}
                            year={'SB/FT/CS-133/2012 April 2013 – March 2017'}
                        />
                    </div>
                </div>
                <div >
                    <div className="mt-10">
                        <p className="text-red-900 text-xl font-semibold">
                            Patents:
                        </p>
                    </div>
                    <ol className='list-decimal mt-4 ml-4 space-y-4'>
                        <li>
                            <p>
                                <span className='font-semibold text-red-800 text-lg'>Subrata Das</span>, P. K. Sukul and A. Mondal.
                                <span className='font-semibold'>“Superhydrophobic Photostable Dye Coated Magnetic Nano Materials for Separating Contaminated Oil”.</span>
                                <span className='text-blue-800'> Indian Patent. 2017. Patent No: 332217 (Granted).</span>
                            </p>
                        </li>
                        <li>
                            <p>
                                <span className='font-semibold text-red-800 text-lg'>Subrata Das</span>, Shibu Naskar, S. Mal, T. Das and P. Kumar.
                                <span className='font-semibold'>“An Improved Batch-flow photo-reactor”.</span>
                                <span className='text-blue-800'> Indian Patent. 2022. Patent no: 412866 (Granted).</span>
                            </p>
                        </li>
                        <li>
                            <p>
                                <span className='font-semibold text-red-800 text-lg'>Subrata Das</span>, A. Sarkar and Abhimanyu.
                                <span className='font-semibold'>“Method and system for reducing pollutants in exhaust emissions of internal combustion engine”.</span>
                                <span className='text-blue-800'>Indian Patent. 2014. Patent App. No: 1455/MUM/2014. (Published). (Examination report submitted on July 2019)..</span>
                            </p>
                        </li>
                        <li>
                            <p>
                                <span className='font-semibold text-red-800 text-lg'>Subrata Das</span>, Parmanand Kumar, Raj Kumar, Susital Mal, Tushar Das and Shubham Raj.
                                <span className='font-semibold'>“Violuric acid functionalized reduced graphene oxide as an adsorbent for the removal of toxic metal ions”.</span>
                                <span className='text-blue-800'> Indian Patent. 2023. Indian Patent App. no: 202331006034. (Published). Examination report submitted.</span>
                            </p>
                        </li>
                        <li>
                            <p>
                                <span className='font-semibold text-red-800 text-lg'>Subrata Das</span>, Tushar Das, Susital Mal, Prakash Kumar, Debabrata Mandal.
                                <span className='font-semibold'>“Graphene quantum dots as nanozymes for neuronal stress suppression”. </span>
                                <span className='text-blue-800'> 2023. Indian Patent App. no: 202331025091. (Published).</span>
                            </p>
                        </li>
                        <li>
                            <p>
                                <span className='font-semibold text-red-800 text-lg'>Tasneem Parvin</span>, Darakshan, Ujjain Chaurasia and Aatka Mehar,
                                <span className='font-semibold'>“Indole linked benzo indoledione derivatives and one-pot synthesis method thereof.” </span>
                                <span className='text-blue-800'>Indian Patent, 2023, Application No. 202331043395. (Published).</span>
                            </p>
                        </li>
                    </ol>
                </div>
            </div>
        </div>
    )
}
export default Page
