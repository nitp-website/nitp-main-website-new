import BackDepartment from "../../../../components/BackDepartment"

function ActComp({title,content}){
    return(
        <div className="flex flex-col mt-8 lg:ml-10">
            <p className="text-xl font-semibold mb-4">
                {title}
            </p>
            <ul>
                {content.map((points,i)=>{
                    return(
                        <li key={i} className="list-disc ml-4 md:text-base
                        pb-2">
                           {points}
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}

function Compo({body, area, faculty, amount,year }){
    return (
        <>
            <div className="col-span-2 border border-black pl-4 py-2 flex flex-col justify-center">
                {body}
            </div>
            <div className="col-span-2 border border-black pl-4 py-2 flex flex-col justify-center">
                {area}
            </div>
            <div className="col-span-2 border border-black pl-4 py-2 flex flex-col justify-center">
                {faculty}
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
        <div className=" flex flex-col p-5">  
            <div className="flex flex-col md:ml-10">
                <div>
                    <p className="text-red-900 text-2xl font-bold">
                        ACTIVITIES
                    </p>
                </div>
                <div className="mt-2">
                    <p className="text-gray-500 text-base font-semibold">
                        COMPUTER SCIENCE ENGINEERING
                    </p>
                </div>
                <div>
                <BackDepartment navigate={'/Department/CSE'}/>
                </div>
            </div>
            <div className="max-sm:mx-6 max-md:mx-8 mx-20 border p-4 rounded-md shadow-lg shadow-slate-400 backdrop-blur-md">
                <ActComp title={"Workshops / Seminars / Training / Course Conducted:"}
                content={['Workshop/Short Term Courses on "Concepts of Cryptographic Engineering" from 19th February 2018 to 23rd February 2018.',
                    'Workshop/Short Term Courses on "Artificial Intelligence & Machine Learning" from 18th May 2018 to 22nd May 2018.',
                    'Workshop/Short Term Courses on "Deep Learning and applications" from 27th May 2019 to 31st May 2019.',
                    'Workshop/Short Term Courses on "Introduction to Programming: A Pedagogical Approach" from 17th June 2019 to 22nd June 2019.',
                    'Workshop/Short Term Courses on "Academia-Future of Industry" from 23rd August 2019 to 24th August 2019.',
                    'Workshop/Short Term Courses on "Natural Language Processing" from 6th January 2020 to 10th January 2020.',
                    'Workshop/Short Term Courses on "Artificial Intelligence & Machine Learning" from 12thFebruary 2020 to 16th February 2020.',
                    'Workshop/Short Term Courses on "Cyber Security Using Machine Learning/Big Data Analytics" from 17th February 2020 to 21st February 2020.',
                    'Workshop/Short Term Courses on "Understanding the concept of Node.JS and React.JS from 20thMay 2020 to 26th May 2020.',
                    'Workshop/Short Term Courses on "Deep learning and its Applications" from 17thJune 2020 to 22nd June 2020.',
                    'Workshop/Short Term Courses on "Machine learning for Computer Vision" from 29thJune 2020 to 8th July 2020.',
                    'Workshop/Short Term Courses on "Advanced Optimization Techniques and Hands-on with MATLAB/SCILAB" from 13th July 2020 to 24th July 2020.',
                    'Workshop/Short Term Courses on "Data Science for All" from 27th July 2020 to 8thAugust 2020.',
                    'Workshop/Short Term Courses on "Deep learning & Machine learning Application in Computer Vision" from 12th August 2020 to 18thAugust 2020.',
                    'Workshop/Short Term Courses on "Quantum Computing" from 24th August 2020 to 29thAugust 2020.',
                    'Workshop/Short Term Courses on "Python Programming" from 7th September 2020 to 18th September 2020.',
                    'Workshop/Short Term Courses on "Cyber Security" from 5thOctober 2020 to 11thOctober 2020.',
                    'Workshop/Short Term Courses on "Machine learning for Computer Vision" from 1stFebruary 2021 to 12th February 2021.',
                    'Workshop/Short Term Courses on "Data Science for All" from 14th April 2021 to 23rd April 2021.',
                    'Workshop/Short Term Courses on "Social Robotics & AI" from 28th June 2021 to 4th July 2021.'
                ]}/>
                <ActComp title={"Expert Lectures Conducted:"}
                content={['Pattern Recognition with relevance to Soft Computing / Granular Data Mining with Applications to image processing and Bio-Informatics by Prof. Shankar K. Pal, Distinguished Scientist & Former Director, ISI Kolkata.',
                            'Soft Computing by Prof. Paramartha Dutta, VBU, Shantineketan.',
                            'ABC of Big Data by Prof. Shankar K. Pal, Distinguished Scientist & Former Director, ISI Kolkata'
                ]}
                />
                <div className="mt-8 lg:ml-10">
                    <div className="text-2xl font-semibold mb-5">
                        Projects
                    </div>
                    <div className="mb-10 overflow-x-auto lg:mr-10">
                        <div className="grid grid-cols-8 border min-w-[850px]">
                        {/* heading  */}
                            <div className="col-span-2 border border-black pl-4 py-2 flex flex-col justify-center text-red-900 font-semibold">
                                Funding Body
                            </div>
                            <div className="col-span-2 border border-black pl-4 py-2 flex flex-col justify-center text-red-900 font-semibold">
                                Area of Research
                            </div>
                            <div className="col-span-2 border border-black pl-4 py-2 flex flex-col justify-center text-red-900 font-semibold">
                                Faculty members involved
                            </div>
                            <div className="col-span-1 border border-black pl-4 py-2 flex flex-col justify-center text-red-900 font-semibold">
                                Funding Amount
                            </div>
                            <div className="col-span-1 border border-black pl-4 py-2 flex flex-col justify-center text-red-900 font-semibold">
                                Year
                            </div>
                            {/* grid  */}
                            <Compo
                            body={'DST SERB'}
                            area={'	Efficient Reliable Data Delivery during Forest Fire using Wireless Network'}
                            faculty={'Dr. Ditipriya Sinha'}
                            amount={'11 lakhs'}
                            year={'2017-2020'}
                            />
                            <Compo
                            body={'DST SERB'}
                            area={'Study of Road Coverage Problem in Wireless Sensor Network'}
                            faculty={'Dr. Dinesh Dash'}
                            amount={'7.42 lakhs'}
                            year={'2016-2019 Completed'}
                            />
                            <Compo
                            body={'SERB (DST)'}
                            area={'Fault-tolerant Coordination in Infrastructure-less Network'}
                            faculty={'Dr. Suddhasil De'}
                            amount={'Rs. 20.85 lakhs'}
                            year={'2017- Ongoing'}
                            />
                            <Compo
                            body={'Ministry of Electronics and Information Technology (MeitY), Government of India'}
                            area={'Information Security Education and Awareness (ISEA) - Phase 1'}
                            faculty={'Dr. G.K. Choudhary, Dr. Prabhat Kumar (CSE deptt.) (Co-chief Investigator)'}
                            amount={'19.32 lakhs'}
                            year={'2006-2014 Completed'}
                            />
                            <Compo
                            body={'Graphic Trades Pvt. Ltd. (An ISO 9001, 14001, 20001 & 27001 Certified Company)'}
                            area={'Cashless Services without the need of Smart Phone and Internet'}
                            faculty={'Dr. Prabhat Kumar (P.I.)'}
                            amount={'10.07 lakhs (approx.)'}
                            year={'2017-2021'}
                            />
                            <Compo
                            body={'Ministry of Electronics and Information Technology (MeitY)'}
                            area={'Development of Algorithms for Speech based Bilingual Keyword Search to Detect Fraud/Spam Calls'}
                            faculty={'PI : Dr. Gayadhar Pradhan (ECE deptt.) Co-PI : Dr. Jyoti Prakash Singh (CSE deptt.)'}
                            amount={'41.1 lakhs'}
                            year={'Completed'}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Page


