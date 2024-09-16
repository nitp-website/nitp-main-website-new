import BackDepartment from "../../../components/department/BackDepartment"


function Page(){
    return (
        <div className=" flex flex-col p-10 max-sm:p-2 text-black">  
            <div className="flex flex-col  mb-16">
                <div>
                    <p className="text-red-900 text-xl lg:text-2xl font-bold">
                        MORE INFORMATION
                    </p>
                </div>
                <div className="lg:mt-2">
                    <p className="text-gray-500 text-sm lg:text-base font-semibold">
                        Humanities & Social Sciences
                    </p>
                </div>
                <BackDepartment navigate={"/Department/Humanities"}/>

            </div>
            {/* LINKS */}
            <div className=" border p-4 rounded-md shadow-lg shadow-slate-400 backdrop-blur-md">
                <div className="mb-10 text-black overflow-x-auto">
                    <div className="w-[1300px]">
                        <div className="font-bold mb-2 text-red-900">Research Scholars Information</div>
                        <div className=" grid grid-cols-12  border border-black">
                            <div className="px-2 h-10 flex flex-col justify-center col-span-1 border-r border-black font-bold">S.no.</div>
                            <div className="px-2 h-10 flex flex-col justify-center col-span-1 border-r border-black font-bold">Roll</div>
                            <div className="px-2 h-10 flex flex-col justify-center col-span-4 border-r border-black font-bold">	Name of the Scholar</div>
                            <div className="px-2 h-10 flex flex-col justify-center col-span-4 border-r border-black font-bold">	Name of the Supervisor</div>
                            <div className="px-2 h-10 flex flex-col justify-center col-span-2  font-bold">Status</div>
                        </div>
                        <div className="font-bold font-serif my-2">Full-Time (Institute Fellowship)</div>
                        <div className=" grid grid-cols-12  border border-black  text-[12px]">
                            <div className="px-2  flex flex-col justify-center col-span-1 border-r border-black">1</div>
                            <div className="px-2 flex flex-col justify-center col-span-1 border-r border-black">185HS01</div>
                            <div className="px-2 flex flex-col justify-center col-span-4 border-r border-black">SHALU KUMARI</div>
                            <div className="px-2  flex flex-col justify-center col-span-4 border-r border-black">Dr. Manish Tiwari</div>
                            <div className="px-2  flex flex-col justify-center col-span-2 ">Submitted</div>
                        </div>
                        <InfoCompo 
                            sn={"2"}
                            roll={"195HS01"}
                            scholar={"TALAT"}
                            suparvisor={"Dr. Sukhdev Singh"}
                            status={"Submitted"}
                        />
                        <InfoCompo 
                            sn={"3"}
                            roll={"195HS08"}
                            scholar={"SANA ASIF"}
                            suparvisor={"Dr. Sukhdev Singh"}
                            status={"Submitted"}
                        />
                        <InfoCompo 
                            sn={"4"}
                            roll={"205HS02"}
                            scholar={"MUGDHA MOHINI"}
                            suparvisor={"Dr. Ashish Ranjan Sinha"}
                            status={"Ongoing"}
                        />
                        <InfoCompo 
                            sn={"5"}
                            roll={"205HS011"}
                            scholar={"DIPAK KUMAR MANDAL"}
                            suparvisor={"Dr. Zeeshan Ali"}
                            status={"Ongoing"}
                        />
                        <InfoCompo 
                            sn={"6"}
                            roll={"205HS012"}
                            scholar={"RAMA SHANKAR SAHU"}
                            suparvisor={"Dr. Manish Tiwari"}
                            status={"Submitted"}
                        />
                        <InfoCompo 
                            sn={"7"}
                            roll={"205HS013"}
                            scholar={"DHRUVEE SINHA"}
                            suparvisor={"Dr. Zeeshan Ali"}
                            status={"Ongoing"}
                        />
                        <InfoCompo 
                            sn={"8"}
                            roll={"205HS014"}
                            scholar={"SHAIL KUMARI"}
                            suparvisor={"Dr. Zeeshan Ali"}
                            status={"Ongoing"}
                        />
                        <InfoCompo 
                            sn={"9"}
                            roll={"215HS001"}
                            scholar={"ASHUTOSH YADAV"}
                            suparvisor={"Dr. Deepak Kumar Behera"}
                            status={"Submitted"}
                        />
                        <InfoCompo 
                            sn={"10"}
                            roll={"215HS002"}
                            scholar={"SNEHA DAS"}
                            suparvisor={"Dr. Zeeshan Ali"}
                            status={"Pre-submission conducted"}
                        />
                        <InfoCompo 
                            sn={"11"}
                            roll={"215HS003"}
                            scholar={"PRITAM RANJAN SAHU"}
                            suparvisor={"Dr. Deepak Kumar Behera"}
                            status={"Ongoing"}
                        />
                        <InfoCompo 
                            sn={"12"}
                            roll={"215HS009"}
                            scholar={"VIJAY KUMAR"}
                            suparvisor={"Dr. Ashish Ranjan Sinha"}
                            status={"Ongoing"}
                        />
                        <InfoCompo 
                            sn={"13"}
                            roll={"225HS008"}
                            scholar={"JAI DEV"}
                            suparvisor={"Dr. Zeeshan Ali (Supervisor) & Dr. Ashish Ranjan Sinha (Co-Supervisor)"}
                            status={"Ongoing"}
                        />
                        <InfoCompo 
                            sn={"14"}
                            roll={"235HS001"}
                            scholar={"SAURABH ANAND"}
                            suparvisor={"Dr. Manish Tiwari"}
                            status={"Ongoing"}
                        />
                        <InfoCompo 
                            sn={"15"}
                            roll={"235HS003"}
                            scholar={"SAKSHI KUMARI"}
                            suparvisor={"Dr. Ashish Ranjan Sinha"}
                            status={"Ongoing"}
                        />
                        <InfoCompo 
                            sn={"16"}
                            roll={"235HS004"}
                            scholar={"RAVEESH RAJNI"}
                            suparvisor={"Dr. Deepak Kumar Behera"}
                            status={"Ongoing"}
                        />

                        <div className="font-bold font-serif my-2">Full-Time (Sponsored)</div>
                        <div className=" grid grid-cols-12  border border-black  text-[12px]">
                            <div className="px-2  flex flex-col justify-center col-span-1 border-r border-black">1</div>
                            <div className="px-2  flex flex-col justify-center col-span-1 border-r border-black">225HS001</div>
                            <div className="px-2 flex flex-col justify-center col-span-4 border-r border-black">AMIT KUMAR </div>
                            <div className="px-2  flex flex-col justify-center col-span-4 border-r border-black">Dr. Ashish Ranjan Sinha</div>
                            <div className="px-2  flex flex-col justify-center col-span-2 ">Ongoing</div>
                        </div>
                        <InfoCompo 
                            sn={"2"}
                            roll={"225HS002"}
                            scholar={"AUGUST KESHAV"}
                            suparvisor={"Dr. Ashish Ranjan Sinha"}
                            status={"Ongoing"}
                        />
                        <InfoCompo 
                            sn={"3"}
                            roll={"225HS007"}
                            scholar={"ANSHU KUMARI"}
                            suparvisor={"Dr. Manish Tiwari"}
                            status={"Ongoing"}
                        />
                        <InfoCompo 
                            sn={"4"}
                            roll={"225HS013"}
                            scholar={"DEEPIKA KANTH "}
                            suparvisor={"Dr. Ashish Ranjan Sinha"}
                            status={"Ongoing"}
                        />
                        <InfoCompo 
                            sn={"5"}
                            roll={"235HS002"}
                            scholar={"MD. SHABBIR ALAM"}
                            suparvisor={"Dr. Deepak Kumar Behera"}
                            status={"Ongoing"}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

function InfoCompo({sn, roll, scholar, suparvisor, status}){
    return (
        <div className=" grid grid-cols-12  border border-black border-t-0 text-[12px]">
            <div className="px-2  flex flex-col justify-center col-span-1 border-r border-black">{sn}</div>
            <div className="px-2  flex flex-col justify-center col-span-1 border-r border-black">{roll}</div>
            <div className="px-2 flex flex-col justify-center col-span-4 border-r border-black">{scholar}</div>
            <div className="px-2  flex flex-col justify-center col-span-4 border-r border-black">{suparvisor}</div>
            <div className="px-2  flex flex-col justify-center col-span-2 ">{status}</div>
        </div>
    )
}

export default Page