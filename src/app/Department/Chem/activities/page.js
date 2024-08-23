import BackDepartment from "../../../components/department/BackDepartment"
import Image from "next/image"

const ActComp = ({ title, date, venue, speaker, img, head, sno }) => {
    return (
        <div>
            <div className='flex flex-col mt-10'>
                <div>
                    <p className='text-xl lg:text-2xl font-semibold'>
                        {sno}. {head}
                    </p>
                </div>
                <div className='flex flex-col lg:flex-row mt-5 ml-4 lg:justify-between'>
                    <div>
                        <div className='flex'>
                            <p className='mr-4'>
                                <span className='text-lg font-medium'>Date:</span> {date}
                            </p>
                            <p>
                                <span className='text-lg font-medium'>Venue:</span> {venue}
                            </p>
                        </div>
                        <p>
                            <span className='text-lg font-medium'>Speaker:</span> {speaker}
                        </p>
                        <p>
                            <span className='text-lg font-medium'>Title:</span> {title}
                        </p>
                    </div>
                    {img ? <Image
                        src={img}
                        width={500}
                        height={500}
                        alt="images"
                        quality={100}
                        className='mt-4 w-[430px] md:w-[500px] lg:w-[600px] lg:mt-0 rounded-lg bg-red-200'
                    /> : <div></div>}
                </div>
            </div>
        </div>
    )
}

function Page() {
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
                        CHEMISTRY
                    </p>
                </div>
                <div>
                    <BackDepartment navigate={'/Department/Chem'} />
                </div>
            </div>
            <div className="max-sm:mx-6 max-md:mx-8 mx-20 border p-4 rounded-md shadow-lg shadow-slate-400 backdrop-blur-md">
                <ActComp
                    sno={1}
                    head={"Department Lecture Series 7"}
                    date={'5th January, 2024 '}
                    venue={'Computer Center'}
                    speaker={'Prof. Raja Shanmugam, Professor, Department of Chemistry, IISER Kolkata'}
                    title={'Designing Norbornene Based Functional Polymers'}
                    img={'https://web.nitp.ac.in/dept/chem/activities/ac_01.jpg'}
                />
                <ActComp
                    sno={2}
                    head={"Department Lecture Series 6"}
                    date={'28th November, 2023 '}
                    venue={'Computer Center'}
                    speaker={'Prof. Partha Hazra, Professor, Department of Chemistry, IISER Pune'}
                    title={'Triplet Exciton Harvesting in Novel Organic Luminogens for New Generation OLED Applications'}
                    img={'https://web.nitp.ac.in/dept/chem/activities/ac_02.jpg'}
                />
                <ActComp
                    sno={3}
                    head={"Department Lecture Series 5"}
                    date={'4th October, 2023'}
                    venue={'Computer Center'}
                    speaker={'Prof. (Dr.) Partha Basu, Department Chair Professor of Chemistry, Indiana University, Indianapolis, USA'}
                    title={'Bio-organic Chemistry'}
                    img={'https://web.nitp.ac.in/dept/chem/activities/ac_03.jpg'}
                />
                <ActComp
                    sno={4}
                    head={"Department Lecture Series 4"}
                    date={'25th July, 2023'}
                    venue={'Computer Center'}
                    speaker={'Prof. Krishna Nand Singh, Professor, Department of Chemistry, Banaras Hindu University, Varanasi'}
                    title={'Organic Synthesis: Challenges and Remedies'}
                    img={''}
                />
                <ActComp
                    sno={5}
                    head={"Department Lecture Series 3"}
                    date={'4th July, 2023 '}
                    venue={'Computer Center'}
                    speaker={'Prof. Vinod K. Tiwari, Professor, Department of Chemistry, Banaras Hindu University, Varanasi'}
                    title={'Synthetic Chemists and Our Society'}
                    img={'https://web.nitp.ac.in/dept/chem/activities/ac_04.jpg'}
                />
                <ActComp
                    sno={6}
                    head={"Department Lecture Series 2"}
                    date={'12th June, 2023 '}
                    venue={'Computer Center'}
                    speaker={'Prof. Suvarn S. Kulkarni, Institute Chair Professor, Department of Chemistry, IIT Bombay'}
                    title={'Simple Solutions to Complex Problems'}
                    img={'https://web.nitp.ac.in/dept/chem/activities/ac_05.jpg'}
                />
                <ActComp
                    sno={7}
                    head={"Department Lecture Series 1"}
                    date={'3rd May, 2023'}
                    venue={'Computer Center'}
                    speaker={'Dr. Sumanta Kumar Sahu, Associate Professor, IIT (ISM) Dhanbad'}
                    title={'Multicolor Emissive Carbon Dots for White Light Emitting Diode: A Prospective'}
                    img={''}
                />
            </div>
        </div>

    )
}
export default Page