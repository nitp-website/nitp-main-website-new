
import BackDepartment from "../../../../components/BackDepartment"
import Image from "next/image"

export default function activities(){
    return (
        <div className="flex flex-col p-10 max-sm:p-2">  
            <div className="flex flex-col mb-16">
                <div>
                    <p className="text-red-900 text-3xl font-bold">
                        ACTIVITIES
                    </p>
                </div>
                <div className="mt-2">
                    <p className="text-gray-500 text-xl font-semibold">
                        CIVIL ENGINEERING
                    </p>
                </div>
                <BackDepartment navigate={"/Department/CE"}/>
            </div>
            <div className="max-sm:mx-6 max-md:mx-8 mx-20 border p-4 rounded-md shadow-lg shadow-slate-400 backdrop-blur-md">
                <ACTcomponent title={"Earthquake Safety Clinic and Centre (EqSC):"} content={"In the collaboration of NITP and BSDMA for their joint efforts, the EqSC was inaugurated on 20th January 2015 by the Chairperson of BSDMA and Chief Minister of Bihar. EqSC at NIT Patna recognizes the importance of research and development in the areas of disaster risk reduction (DRR), as well as, involvement of engineeringfaculty & students in dissemination of DRR knowledge to the grass-root stakeholders. It embraces the need for awareness in vulnerable groups, creation of qualified man power in all fields related to DRR and meet societal expectations of disaster resilience. Currently, the center is doing a project on Rapid Visual Screening (RVS) of 400 school buildings in Seismic Zone V under National School Safety Program (NSSP) sponsored by NDMA, Govt. of India."} image={""}/>
                <ACTcomponent title={"Centre for Water Resources Studies (CWRS):"} content={"The CWRS was set up at erstwhile Bihar College of Engineering under Patna University in response to perceived needs of the people of this region. The CWRS complex has a total floor area of 2000 m2 (Approximately).CWRS is involved in carrying out the research activity for Water Resources. A number of projects and research works have been undertaken and completed through CWRS. The centre has presently a very prestigious Chair named as DrRajendra Prasad Chair for Water Resources. TheChair has been established by Ministry of Water Resources, for the study of Impact of Climate Change on Water Resources. The main objective of the Chair is to carry out studies on water resources with special emphasis on assessment of effect of climate change and adaptation strategies in respect of planning, design and management of water resources systems of particularly Ganga Basin."} image={""}/>
            </div>
        </div>
    )
}

function ACTcomponent({title, content, image}){
    return (
        <div className="mb-10">
                <div className=" grid grid-cols-2 max-lg:grid-cols-1">
                    <div>
                        <div className="text-black font-bold text-2xl max-sm:text-lg mb-4">{title}</div>
                        <p className="text-lg max-sm:text-sm mb-8 text-justify pr-6">{content}</p>
                    </div>
                    <div className=" flex justify-center">
                        <div className="flex flex-col">
                            <Image src={image} width={400} height={1000} alt="Loading.." className="col-span-1 h-80 border rounded-lg bg-rose-200" />
                        </div>
                    </div>
                </div>
        </div>
    )
}