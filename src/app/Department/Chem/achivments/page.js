import BackDepartment from "../../../components/department/BackDepartment"

function Comp({content}){
    return(
        <div className="flex flex-col mt-8 lg:ml-10">
            <ul>
                {content.map((points,i)=>{
                    return(
                        <li key={i} className="list-disc ml-4 md:text-lg pb-2">
                           {points}
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}

function Page(){
    return (
        <div className=" flex flex-col p-5 text-black">  
            <div className="flex flex-col md:ml-10 h-screen">
                <div className="mb-2">
                    <p className="text-red-900 text-2xl font-bold">
                        ACHIEVEMENTS
                    </p>
                    <div className="mt-2">
                    <p className="text-gray-500 text-base font-semibold">
                        CHEMICAL SCIENCE AND TECHNOLOGY
                    </p>
                    </div>
                    <div>
                    <BackDepartment navigate={'/Department/Chem'}/>
                    </div>
                </div>
                <div className="max-sm:mx-6 max-md:mx-8 mx-20 border p-4 rounded-md shadow-lg shadow-slate-400 backdrop-blur-md h-screen">
                    <Comp
                    content={[
                        'Radical Mediated Glycal Functionalization towards Synthesis of C2-Modified Sugars (SERB-DST, 2022-2025)',
                        'Tunable loading of oligonucleotide with gold and magnetic silica sphere derived gold nanostructured materials as sensing probe for detection of Target DNA (RSC Research fund, 2021-2023)',
                        'Bio-sensing application of Graphene (GR) analogous systems: Estimating device potential (BRNS-DAE, 2020-2023)',
                        'Metallosupramolecular complexes with bioactive pyrimidine derivatives: Materials for advanced applications (SERB-DST, 2019-2022)',
                        'Host-Guest Chemistry for Stimuli-Responsive Systems (SERB-DST, 2017-2020)',
                        'Surface-Immobilized Growth of Anisotropic Noble Metal Nanoparticles: Spectroscopic Investigation and Application (SERB-DST, 2017-2020)',
                        'Stereoselective Strategies Towards b-glycosylation: En route Synthesis of Bioactive Compounds (SERB-DST, 2016-2019)',
                        'Exploration of bifunctional thiourea-amine orgnocatalysts in asymmetric multicomponent (SERB-DST, 2016-2019)',
                        'Nitroso-Diels-Alder (NDA) reaction for the synthesis of some heterocyclic compounds (SERB-DST, 2013-2017)',
                        'Multiple Indian Patents granted and published by faculty members (2014-2023)'
                    ]}
                    />
                </div>
            </div>
        </div>
    )
}
export default Page
