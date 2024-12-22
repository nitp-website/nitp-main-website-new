import BackDepartment from "../../../components/department/BackDepartment"
import Image from "next/image"

const ActComp=({scholar,sp,title,curr,year,sno})=>{
    return(
    <div className='flex flex-col mt-10'>
        <div className='flex flex-col lg:flex-row'>
            <div>
                <span className='text-sm lg:text-base font-semibold'>{sno}. Scholar:</span> {scholar}
            </div>
            <div className='ml-4 lg:ml-12'>
                <span className='text-sm lg:text-base font-semibold'>Supervisor:</span> {sp}
            </div>
            <div className='ml-4 lg:ml-12'>
                <span className='text-sm lg:text-base font-semibold'>Year:</span> {year}
            </div>
        </div>
        <div className='ml-4 lg:mt-3'>
            <span className='text-sm lg:text-base font-semibold'>Thesis Title:</span> {title}
        </div>
        <div className={curr?`ml-4 lg:mt-3`:`hidden`}>
            <span className='text-sm lg:text-base font-semibold'>Current Status:</span> {curr}
        </div>
    </div>
    )
}

function Page(){
    return (
        <div className=" flex flex-col p-5 text-black">  
            <div className="flex flex-col  mb-6">
                <div>
                    <p className="text-red-900 text-xl lg:text-2xl  font-bold">
                        More Information
                    </p>
                </div>
                <div className="mt-1 lg:mt-2">
                    <p className="text-gray-500 text-sm lg:text-base font-semibold">
                    Chemical Science and Technology
                    </p>
                </div>
                <BackDepartment navigate={"/Department/Chem"}/>
            </div>
            <div className="max-sm:mx-6 max-md:mx-8 mx-20 border p-4 rounded-md shadow-lg shadow-slate-400 backdrop-blur-md">
                <div>
                    <p className="text-red-900 font-semibold lg:text-xl text-lg">
                        Ph.D. Alumini:
                    </p>
                    <p className="text-red-900 font-semibold lg:text-xl text-lg">
                        Ph.D. Thesis Awarded:
                    </p>
                </div>
                <ActComp
                sno={'1'}
                scholar={'Manisha Prakashni'}
                sp={'Dr. Suvankar Dasgupta'}
                year={'2024'}
                title={'Templated Synthesis of Mechanically Interlocked Molecules (MIMs) Involving Dialkylammonium Salts and [23]Crown Ethers'}
                />
                <ActComp
                sno={'2'}
                scholar={'Dr. Pramanand Kumar'}
                sp={'Dr. Subrata Das'}
                year={'2023'}
                title={'Graphene oxide/Reduced graphene oxide-based Nanomaterials and Their Applications'}
                curr={'Assistant Professor (Guest) in Motihari College of Engineering'}
                />

                <div className='mt-10'>

                    <p className="text-red-900 font-semibold lg:text-xl text-lg">
                    Thesis Submitted:
                    </p>
                </div>
                <ActComp
                sno={'1'}
                scholar={'Aprajita'}
                sp={'Dr. Mukesh Choudhary'}
                year={'2023'}
                title={' Synthesis, Characterization And Properties Of Copper(II)/Nickel(II) Coordination Complexes'}
                curr={'Assistant Professor, Department of Chemistry, Govt. College of Engineering, Bhagalpur Bihar.'}
                />
            </div>
        </div>

    )
}
export default Page