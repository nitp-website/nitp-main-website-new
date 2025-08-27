import React from "react";

function SyllabusComp({ type, dep, code, title, L, T, P, cred, url }) {
    return (
        <div className="grid grid-cols-12 w-full text-black">
            <div className="col-span-2 border border-black flex justify-center flex-col items-center px-2 py-2">{code}</div>
            <a
                href={url || "#"}
                target="_blank"
                rel="noopener noreferrer"
                className="col-span-4 border border-black flex justify-center flex-col items-center text-left text-sm px-2 py-2 hover:underline hover:cursor-pointer"
            >
                {title}
            </a>
            <div className="col-span-1 border border-black flex justify-center flex-col items-center px-2 py-2">{L}</div>
            <div className="col-span-1 border border-black flex justify-center flex-col items-center px-2 py-2">{T}</div>
            <div className="col-span-1 border border-black flex justify-center flex-col items-center px-2 py-2">{P}</div>
            <div className="col-span-1 border border-black flex justify-center flex-col items-center px-2 py-2">{cred}</div>
            <div className="col-span-1 border border-black flex justify-center flex-col items-center px-2 py-2">{dep}</div>
            <div className="col-span-1 border border-black flex justify-center flex-col items-center px-2 py-2">{type}</div>
        </div>
    );
}

function OtherComp({ code, title, L, T, P, cred, url }) {
    return (
        <>
            <div className="grid grid-cols-11 w-full text-black">
                <div className="col-span-3 border border-black flex flex-col justify-center text-black pl-4 py-2">{code}</div>
                <a href={url} className="col-span-4 border border-black flex flex-col justify-center text-black pl-4 py-2 cursor-pointer">{title}</a>
                <div className="col-span-1 border border-black flex flex-col justify-center text-black pl-4 py-2">{L}</div>
                <div className="col-span-1 border border-black flex flex-col justify-center text-black pl-4 py-2">{T}</div>
                <div className="col-span-1 border border-black flex flex-col justify-center text-black pl-4 py-2">{P}</div>
                <div className="col-span-1 border border-black flex flex-col justify-center text-black pl-4 py-2">{cred}</div>
            </div >
        </>
    )
}

const IMSCSyllabus = () => {
    return (
        <div className="w-full mb-10 overflow-x-auto">
            <div className="min-w-[1000px] border">
                {/* Header */}
                <div className="grid grid-cols-12 bg-gray-100 font-semibold text-red-900">
                    <div className="col-span-2 border border-black flex items-center justify-center py-2">Course Code</div>
                    <div className="col-span-4 border border-black flex items-center justify-center py-2">Course Title</div>
                    <div className="col-span-1 border border-black flex items-center justify-center py-2">L</div>
                    <div className="col-span-1 border border-black flex items-center justify-center py-2">T</div>
                    <div className="col-span-1 border border-black flex items-center justify-center py-2">P</div>
                    <div className="col-span-1 border border-black flex items-center justify-center py-2">Credits</div>
                    <div className="col-span-1 border border-black flex items-center justify-center py-2">Dept.</div>
                    <div className="col-span-1 border border-black flex items-center justify-center py-2">Type</div>
                </div>

                {/* Main Syllabus Rows */}
                <SyllabusComp
                    dep={'HSS'}
                    sem={''}
                    code={'HS1701'}
                    title={'Communicative English'}
                    L={'2'}
                    T={'1'}
                    P={'0'}
                    cred={'3'}
                    type={'Foundation'}
                />
                <SyllabusComp
                    dep={'HSS'}
                    sem={''}
                    code={'HSL1701'}
                    title={'Language Lab'}
                    L={'0'}
                    T={'0'}
                    P={'3'}
                    cred={'1'}
                    type={'Lab'}
                />
                <SyllabusComp
                    dep={'MA'}
                    sem={''}
                    code={'MA1701'}
                    title={'Mathematics-I'}
                    L={'3'}
                    T={'0'}
                    P={'0'}
                    cred={'3'}
                    type={'Foundation'}
                />
                <SyllabusComp
                    dep={'PH'}
                    sem={''}
                    code={'PH1701'}
                    title={'Engineering Physics'}
                    L={'3'}
                    T={'0'}
                    P={'0'}
                    cred={'3'}
                    type={'Foundation'}
                />
                <SyllabusComp
                    dep={'PH'}
                    sem={''}
                    code={'PHL1701'}
                    title={'Physics Lab'}
                    L={'0'}
                    T={'0'}
                    P={'3'}
                    cred={'1'}
                    type={'Lab'}
                />
                <SyllabusComp
                    dep={'CSE'}
                    sem={''}
                    code={'CS1701'}
                    title={'Introduction To Computing'}
                    L={'3'}
                    T={'0'}
                    P={'0'}
                    cred={'3'}
                    type={'Foundation'}
                />
                <SyllabusComp
                    dep={'CSE'}
                    sem={''}
                    code={'CSL1701'}
                    title={'Computing Lab'}
                    L={'0'}
                    T={'0'}
                    P={'3'}
                    cred={'1'}
                    type={'Lab'}
                />
                <SyllabusComp
                    dep={'CE'}
                    sem={''}
                    code={'CE1701'}
                    title={'Engineering Mechanics'}
                    L={'2'}
                    T={'1'}
                    P={'0'}
                    cred={'3'}
                    type={'Foundation'}
                />
                <SyllabusComp
                    dep={'ME'}
                    sem={''}
                    code={'MEL1701'}
                    title={'Workshop Practice'}
                    L={'0'}
                    T={'0'}
                    P={'3'}
                    cred={'1'}
                    type={'Lab'}
                />
                <SyllabusComp
                    dep={'MA/SAC'}
                    sem={''}
                    code={'EAA1701'}
                    title={'EAA-Swachha Bharat Mission'}
                    L={'0'}
                    T={'0'}
                    P={'3'}
                    cred={'1'}
                    type={'Lab'}
                />
                <SyllabusComp
                    dep={'-'}
                    sem={''}
                    code={''}
                    title={'Total Credit'}
                    L={'13'}
                    T={'2'}
                    P={'15'}
                    cred={'20'}
                    type={'-'}
                />

                <SyllabusComp
                    dep={'HSS'}
                    sem={''}
                    code={'HS2701'}
                    title={'Science, Society and Ethical Values'}
                    L={'1'}
                    T={'1'}
                    P={'0'}
                    cred={'3'}
                    type={'Foundation'}
                />
                <SyllabusComp
                    dep={'MA'}
                    sem={''}
                    code={'MA2701'}
                    title={'Mathematics II'}
                    L={'3'}
                    T={'0'}
                    P={'0'}
                    cred={'3'}
                    type={'Foundation'}
                />
                <SyllabusComp
                    dep={'CH'}
                    sem={''}
                    code={'CH2701'}
                    title={'Engineering Chemistry'}
                    L={'3'}
                    T={'0'}
                    P={'0'}
                    cred={'3'}
                    type={'Foundation'}
                />
                <SyllabusComp
                    dep={'CH'}
                    sem={''}
                    code={'CHL2701'}
                    title={'Chemistry Lab'}
                    L={'0'}
                    T={'0'}
                    P={'3'}
                    cred={'1'}
                    type={'Lab'}
                />
                <SyllabusComp
                    dep={'ME'}
                    sem={''}
                    code={'ME2701'}
                    title={'Engineering Graphics'}
                    L={'2'}
                    T={'0'}
                    P={'0'}
                    cred={'2'}
                    type={'Lab'}
                />
                <SyllabusComp
                    dep={'ME'}
                    sem={''}
                    code={'MEL2701'}
                    title={'Engineering Graphics Lab'}
                    L={'0'}
                    T={'0'}
                    P={'3'}
                    cred={'1'}
                    type={'Lab'}
                />
                <SyllabusComp
                    dep={'MA'}
                    sem={''}
                    code={'MA2702'}
                    title={'Complex Variable and Partial Differential Equation'}
                    L={'3'}
                    T={'0'}
                    P={'0'}
                    cred={'3'}
                    type={'Core'}
                />
                <SyllabusComp
                    dep={'PH'}
                    sem={''}
                    code={'PH2701'}
                    title={'Continuum Mechanics'}
                    L={'3'}
                    T={'0'}
                    P={'0'}
                    cred={'3'}
                    type={'Foundation'}
                />
                <SyllabusComp
                    dep={'PH'}
                    sem={''}
                    code={'PHL2701'}
                    title={'Continuum Mechanics Lab(Physics)'}
                    L={'0'}
                    T={'0'}
                    P={'3'}
                    cred={'1'}
                    type={'Lab'}
                />
                <SyllabusComp
                    dep={'MA/IC/SAC'}
                    sem={''}
                    code={'EAA2701'}
                    title={'EAA-Sports/Icovation Project'}
                    L={'0'}
                    T={'0'}
                    P={'3'}
                    cred={'1'}
                    type={'Lab'}
                />
                <SyllabusComp
                    dep={'-'}
                    sem={''}
                    code={''}
                    title={'Total credit'}
                    L={'16'}
                    T={'1'}
                    P={'12'}
                    cred={'21'}
                    type={'-'}
                />


                <SyllabusComp
                    dep={'MA'}
                    sem={''}
                    code={'MA3701'}
                    title={'Discrete Mathematics'}
                    L={'3'}
                    T={'1'}
                    P={'0'}
                    cred={'4'}
                    url={'https://web.nitp.ac.in/dept/math/syllabus/MA3701.docx'}
                    type={'Core'}
                />
                <SyllabusComp
                    dep={'MA'}
                    sem={''}
                    code={'MA3702'}
                    title={'Analysis-I'}
                    L={'3'}
                    T={'1'}
                    P={'0'}
                    cred={'4'}
                    url={'https://web.nitp.ac.in/dept/math/syllabus/MA3702.docx'}
                    type={'Core'}
                />
                <SyllabusComp
                    dep={'MA'}
                    sem={''}
                    code={'MA3703'}
                    title={'Algebra-I'}
                    L={'3'}
                    T={'1'}
                    P={'0'}
                    cred={'4'}
                    url={'https://web.nitp.ac.in/dept/math/syllabus/MA3703.docx'}
                    type={'Core'}
                />
                <SyllabusComp
                    dep={'CSE'}
                    sem={''}
                    code={'CS3701'}
                    title={'Object oriented Methodology'}
                    L={'3'}
                    T={'0'}
                    P={'0'}
                    cred={'3'}
                    url={'https://web.nitp.ac.in/dept/math/syllabus/CS3701.docx'}
                    type={'Foundation'}
                />
                <SyllabusComp
                    dep={'CSE'}
                    sem={''}
                    code={'CSL3701'}
                    title={'Object oriented Methodology lab'}
                    L={'0'}
                    T={'0'}
                    P={'3'}
                    cred={'1'}
                    url={'https://web.nitp.ac.in/dept/math/syllabus/CSL3701.docx'}
                    type={'Lab'}
                />
                <SyllabusComp
                    dep={'HSS'}
                    sem={''}
                    code={'HS3701'}
                    title={'Industrial Economics and Financial Management'}
                    L={'3'}
                    T={'0'}
                    P={'0'}
                    cred={'3'}
                    url={'https://web.nitp.ac.in/dept/math/syllabus/HS3701.docx'}
                    type={'Foundation'}
                />
                <SyllabusComp
                    dep={'-'}
                    sem={''}
                    code={''}
                    title={'Total credit'}
                    L={'15'}
                    T={'3'}
                    P={'3'}
                    cred={'19'}
                    type={'-'}

                />
                <SyllabusComp
                    dep={'MA'}
                    sem={''}
                    code={'MA4701'}
                    title={'Probability & Statistics'}
                    L={'3'}
                    T={'1'}
                    P={'0'}
                    cred={'4'}
                    url={'https://web.nitp.ac.in/dept/math/syllabus/MA4701.docx'}
                    type={'Core'}
                />

                <SyllabusComp
                    dep={'MA'}
                    sem={''}
                    code={'MA4702'}
                    title={'Theory of Linear Algebra'}
                    L={'3'}
                    T={'1'}
                    P={'0'}
                    cred={'4'}
                    url={'https://web.nitp.ac.in/dept/math/syllabus/MA4702.docx'}
                    type={'Core'}
                />
                <SyllabusComp
                    dep={'MA'}
                    sem={''}
                    code={'MA4703'}
                    title={'Ordinary Differential Equation'}
                    L={'3'}
                    T={'1'}
                    P={'0'}
                    cred={'4'}
                    url={'https://web.nitp.ac.in/dept/math/syllabus/MA4703.docx'}
                    type={'Core'}
                />
                <SyllabusComp
                    dep={'MA'}
                    sem={''}
                    code={'MA4704'}
                    title={'Introduction to Data Structures and Algorithms'}
                    L={'3'}
                    T={'0'}
                    P={'0'}
                    cred={'3'}
                    url={'https://web.nitp.ac.in/dept/math/syllabus/MA4704.docx'}
                    type={'Core'}
                />
                <SyllabusComp
                    dep={'MA'}
                    sem={''}
                    code={'MAL4701'}
                    title={'Data Structure and Algorithms Lab'}
                    L={'0'}
                    T={'0'}
                    P={'3'}
                    cred={'1'}
                    url={'https://web.nitp.ac.in/dept/math/syllabus/MAL4701.docx'}
                    type={'Lab'}
                />
                <SyllabusComp
                    dep={'Other'}
                    sem={''}
                    code={'OE****'}
                    title={'Open Elective-I'}
                    L={'3'}
                    T={'0'}
                    P={'0'}
                    cred={'3'}
                    url={''}
                    type={'OE'}
                />
                <SyllabusComp
                    dep={'-'}
                    sem={''}
                    code={''}
                    title={'Total Credit'}
                    L={'15'}
                    T={'3'}
                    P={'3'}
                    cred={'19'}
                    url={''}
                    type={'='}
                />


                <SyllabusComp
                    dep={'MA'}
                    sem={''}
                    code={'MA5701'}
                    title={'Topology'}
                    L={'3'}
                    T={'1'}
                    P={'0'}
                    cred={'4'}
                    url={'https://web.nitp.ac.in/dept/math/syllabus/MAL4701.docx'}
                    type={'Core'}
                />
                <SyllabusComp
                    dep={'MA'}
                    sem={''}
                    code={'MA5702'}
                    title={'Analysis-II'}
                    L={'3'}
                    T={'1'}
                    P={'0'}
                    cred={'4'}
                    url={'https://web.nitp.ac.in/dept/math/syllabus/MA5702.docx'}
                    type={'Core'}
                />
                <SyllabusComp
                    dep={'MA'}
                    sem={''}
                    code={'MA5703'}
                    title={'Mathematical Methods-I'}
                    L={'3'}
                    T={'1'}
                    P={'0'}
                    cred={'4'}
                    url={'https://web.nitp.ac.in/dept/math/syllabus/MA5703.docx'}
                    type={'Core'}
                />
                <SyllabusComp
                    dep={'MA'}
                    sem={''}
                    code={'MA5704'}
                    title={'Functional Analysis'}
                    L={'3'}
                    T={'1'}
                    P={'0'}
                    cred={'4'}
                    url={'https://web.nitp.ac.in/dept/math/syllabus/MA5704.docx'}
                    type={'Core'}
                />
                <SyllabusComp
                    dep={'MA'}
                    sem={''}
                    code={'MA5705'}
                    title={'Numerical Analysis'}
                    L={'3'}
                    T={'1'}
                    P={'0'}
                    cred={'4'}
                    url={'https://web.nitp.ac.in/dept/math/syllabus/MA5705.docx'}
                    type={'Core'}
                />
                <SyllabusComp
                    dep={'MA'}
                    sem={''}
                    code={'MAL5705'}
                    title={'Numerical Analysis Lab'}
                    L={'0'}
                    T={'0'}
                    P={'3'}
                    cred={'1'}
                    url={'https://web.nitp.ac.in/dept/math/syllabus/MA5705.docx'}
                    type={'Lab'}
                />

                <SyllabusComp
                    dep={'-'}
                    sem={''}
                    code={''}
                    title={'Total credit'}
                    L={'15'}
                    T={'5'}
                    P={'3'}
                    cred={'21'}
                    url={''}
                    type={'-'}
                />

                <SyllabusComp
                    dep={'MA'}
                    sem={''}
                    code={'MA6701'}
                    title={'Linear Programming Problem and Game Theory'}
                    L={'3'}
                    T={'1'}
                    P={'0'}
                    cred={'4'}
                    url={'https://web.nitp.ac.in/dept/math/syllabus/MA6701.docx'}
                    type={'Core'}
                />
                <SyllabusComp
                    dep={'MA'}
                    sem={''}
                    code={'MA6702'}
                    title={'Measure Theory and Integration'}
                    L={'3'}
                    T={'1'}
                    P={'0'}
                    cred={'4'}
                    url={'https://web.nitp.ac.in/dept/math/syllabus/MA6702.docx'}
                    type={'Core'}
                />
                <SyllabusComp
                    dep={'MA'}
                    sem={''}
                    code={'MA6703'}
                    title={'Seminar'}
                    L={'0'}
                    T={'0'}
                    P={'6'}
                    cred={'2'}
                    type={'Seminar'}
                />
                <SyllabusComp
                    dep={'MA'}
                    sem={''}
                    code={'MA****'}
                    title={'Elective-I'}
                    L={'3'}
                    T={'0'}
                    P={'0'}
                    cred={'3'}
                    type={'Dept. Elective'}
                />
                <SyllabusComp
                    dep={'MA'}
                    sem={''}
                    code={'MA****'}
                    title={'Elective-II'}
                    L={'3'}
                    T={'0'}
                    P={'0'}
                    cred={'3'}
                    type={'Dept. Elective'}
                />
                <SyllabusComp
                    dep={'Other'}
                    sem={''}
                    code={'OE****'}
                    title={'Open Elective-II'}
                    L={'3'}
                    T={'0'}
                    P={'0'}
                    cred={'3'}
                    type={'OE'}
                />
                <SyllabusComp
                    dep={'-'}
                    sem={''}
                    code={''}
                    title={'Total credit'}
                    L={'12'}
                    T={'2'}
                    P={'6'}
                    cred={'19'}
                    type={'-'}
                />

                <SyllabusComp
                    dep={'MA'}
                    sem={''}
                    code={'MA7701'}
                    title={'Integral Equation and Calculus of Variation'}
                    L={'3'}
                    T={'1'}
                    P={'0'}
                    cred={'4'}
                    type={'Core'}
                />
                <SyllabusComp
                    dep={'MA'}
                    sem={''}
                    code={'MA7702'}
                    title={'Numerical Solutions of Ordinary and Partial Differentiation Equations'}
                    L={'3'}
                    T={'1'}
                    P={'0'}
                    cred={'4'}
                    url={'https://web.nitp.ac.in/dept/math/syllabus/MA7702.docx'}
                    type={'Core'}
                />
                <SyllabusComp
                    dep={'MA'}
                    sem={''}
                    code={'MAL7701'}
                    title={'Numerical ODE and PDE Lab'}
                    L={'0'}
                    T={'0'}
                    P={'3'}
                    cred={'1'}
                    url={'https://web.nitp.ac.in/dept/math/syllabus/MAL7701.docx'}
                    type={'Lab'}

                />
                <SyllabusComp
                    dep={'MA'}
                    sem={''}
                    code={'MA****'}
                    title={'Elective-III'}
                    L={'3'}
                    T={'0'}
                    P={'0'}
                    cred={'3'}
                    type={'Dept. Elective'}
                />
                <SyllabusComp
                    dep={'MA'}
                    sem={''}
                    code={'MA****'}
                    title={'Elective-IV'}
                    L={'3'}
                    T={'0'}
                    P={'0'}
                    cred={'3'}
                    type={'Dept. Elective'}
                />
                <SyllabusComp
                    dep={'Other'}
                    sem={''}
                    code={'OE****'}
                    title={'Open Elective-III'}
                    L={'3'}
                    T={'0'}
                    P={'0'}
                    cred={'3'}
                    type={'OE'}
                />
                <SyllabusComp
                    dep={'-'}
                    sem={''}
                    code={''}
                    title={'Total credit'}
                    L={'15'}
                    T={'2'}
                    P={'3'}
                    cred={'18'}
                    type={'-'}
                />


                <SyllabusComp
                    dep={'MA'}
                    sem={''}
                    code={'MA8701'}
                    title={'Theory of Computation'}
                    L={'3'}
                    T={'1'}
                    P={'0'}
                    cred={'4'}
                    url={'https://web.nitp.ac.in/dept/math/syllabus/MA8701.docx'}
                    type={'Core'}
                />
                <SyllabusComp
                    dep={'MA'}
                    sem={''}
                    code={'MA8702'}
                    title={'Complex Analysis'}
                    L={'3'}
                    T={'1'}
                    P={'0'}
                    cred={'4'}
                    url={'https://web.nitp.ac.in/dept/math/syllabus/MA8702.docx'}
                    type={'Core'}
                />
                <SyllabusComp
                    dep={'MA'}
                    sem={''}
                    code={'MA****'}
                    title={'Elective-V'}
                    L={'3'}
                    T={'0'}
                    P={'0'}
                    cred={'3'}
                    type={'Dept. Elective'}
                />
                <SyllabusComp
                    dep={'MA'}
                    sem={''}
                    code={'MA****'}
                    title={'Elective-VI'}
                    L={'3'}
                    T={'0'}
                    P={'0'}
                    cred={'3'}
                    type={'Dept. Elective'}
                />
                <SyllabusComp
                    dep={'MA'}
                    sem={''}
                    code={'MA8703'}
                    title={'Minor Project'}
                    L={'0'}
                    T={'0'}
                    P={'6'}
                    cred={'4'}
                    type={'Project'}
                />
                <SyllabusComp
                    dep={'Other'}
                    sem={''}
                    code={'OE****'}
                    title={'Open Elective-IV'}
                    L={'3'}
                    T={'0'}
                    P={'0'}
                    cred={'3'}
                    type={'OE'}
                />
                <SyllabusComp
                    dep={'-'}
                    sem={''}
                    code={''}
                    title={'Total credit'}
                    L={'15'}
                    T={'2'}
                    P={'6'}
                    cred={'21'}
                    type={'-'}
                />

                <SyllabusComp
                    dep={'Online'}
                    sem={''}
                    code={'****'}
                    title={'Electives/Open Elective/Swayam/MOOC course'}
                    L={'0'}
                    T={'3'}
                    P={'0'}
                    cred={'3'}
                    type={'Online'}
                />
                <SyllabusComp
                    dep={'MA'}
                    sem={''}
                    code={'MA9701'}
                    title={'Seminar and Comprehensive Viva-I'}
                    L={'0'}
                    T={'0'}
                    P={'6'}
                    cred={'2'}
                    type={'Seminar'}
                />
                <SyllabusComp
                    dep={'MA'}
                    sem={''}
                    code={'MA9702'}
                    title={'Thesis'}
                    L={'0'}
                    T={'0'}
                    P={'48'}
                    cred={'16'}
                    type={'Project'}
                />
                <SyllabusComp
                    dep={'-'}
                    sem={''}
                    code={''}
                    title={'Total credit'}
                    L={'0'}
                    T={'3'}
                    P={'54'}
                    cred={'21'}
                    type={'-'}
                />

                <SyllabusComp
                    dep={'-'}
                    sem={''}
                    code={'****'}
                    title={'Electives/Open Elective/Swayam/MOOC course'}
                    L={'0'}
                    T={'3'}
                    P={'0'}
                    cred={'3'}
                    type={'Online'}
                />
                <SyllabusComp
                    dep={'MA'}
                    sem={''}
                    code={'MA10701'}
                    title={'Seminar and Comprehensive Viva-II'}
                    L={'0'}
                    T={'0'}
                    P={'6'}
                    cred={'2'}
                    type={'Seminar'}
                />
                <SyllabusComp
                    dep={'MA'}
                    sem={''}
                    code={'MA10702'}
                    title={'Thesis'}
                    L={'0'}
                    T={'0'}
                    P={'48'}
                    cred={'16'}
                    type={'Project'}
                />
                <SyllabusComp
                    dep={'-'}
                    sem={''}
                    code={''}
                    title={'Total credit'}
                    L={'0'}
                    T={'3'}
                    P={'54'}
                    cred={'21'}
                    type={'-'}
                />
            </div>

            <div>
                <h2 className="text-2xl font-semibold text-red-800 my-6">Electives</h2>
            </div>
            <div className="min-w-[1000px] border">
                {/* Header */}
                <div className="grid grid-cols-11 bg-gray-100 font-semibold text-red-900">
                    <div className="col-span-3 border border-black flex items-center justify-center py-2">Course Code</div>
                    <div className="col-span-4 border border-black flex items-center justify-center py-2">Subject</div>
                    <div className="col-span-1 border border-black flex items-center justify-center py-2">L</div>
                    <div className="col-span-1 border border-black flex items-center justify-center py-2">T</div>
                    <div className="col-span-1 border border-black flex items-center justify-center py-2">P</div>
                    <div className="col-span-1 border border-black flex items-center justify-center py-2">Credits</div>
                </div>

                <OtherComp
                    dep={'MA'}
                    sem={''}
                    code={'MA*711'}
                    title={'Probability Theory-I'}
                    L={'3'}
                    T={'0'}
                    P={'0'}
                    cred={'3'}
                    url={'https://web.nitp.ac.in/dept/math/syllabus/MA_711.docx'}
                />
                <OtherComp
                    dep={'MA'}
                    sem={''}
                    code={'MA*712'}
                    title={'Algebra- II'}
                    L={'3'}
                    T={'0'}
                    P={'0'}
                    cred={'3'}
                    url={''}
                />
                <OtherComp
                    dep={'MA'}
                    sem={''}
                    code={'MA*713'}
                    title={'Commutative Algebra'}
                    L={'3'}
                    T={'0'}
                    P={'0'}
                    cred={'3'}
                    url={'https://web.nitp.ac.in/dept/math/syllabus/MA_713.docx'}
                />
                <OtherComp
                    dep={'MA'}
                    sem={''}
                    code={'MA*714'}
                    title={'Differential Geometry'}
                    L={'3'}
                    T={'0'}
                    P={'0'}
                    cred={'3'}
                    url={'https://web.nitp.ac.in/dept/math/syllabus/MA_714.docx'}
                />
                <OtherComp
                    dep={'MA'}
                    sem={''}
                    code={'MA*715'}
                    title={'Number Theory'}
                    L={'3'}
                    T={'0'}
                    P={'0'}
                    cred={'3'}
                    url={'https://web.nitp.ac.in/dept/math/syllabus/MA_715.docx'}
                />
                <OtherComp
                    dep={'MA'}
                    sem={''}
                    code={'MA*716'}
                    title={'Applied Matrix Theory'}
                    L={'3'}
                    T={'0'}
                    P={'0'}
                    cred={'3'}
                    url={'https://web.nitp.ac.in/dept/math/syllabus/MA_716.docx'}
                />
                <OtherComp
                    dep={'MA'}
                    sem={''}
                    code={'MA*717'}
                    title={'Approximation Theory'}
                    L={'3'}
                    T={'0'}
                    P={'0'}
                    cred={'3'}
                    url={'https://web.nitp.ac.in/dept/math/syllabus/MA_717.docx'}
                />
                <OtherComp
                    dep={'MA'}
                    sem={''}
                    code={'MA*718'}
                    title={'Advanced Complex Analysis'}
                    L={'3'}
                    T={'0'}
                    P={'0'}
                    cred={'3'}
                    url={'https://web.nitp.ac.in/dept/math/syllabus/MA_718.docx'}
                />
                <OtherComp
                    dep={'MA'}
                    sem={''}
                    code={'MA*719'}
                    title={'Computational Linear Algebra'}
                    L={'3'}
                    T={'0'}
                    P={'0'}
                    cred={'3'}
                    url={'https://web.nitp.ac.in/dept/math/syllabus/MA_718.docx'}
                />
                <OtherComp
                    dep={'MA'}
                    sem={''}
                    code={'MA*720'}
                    title={'Fluid Dynamics'}
                    L={'3'}
                    T={'0'}
                    P={'0'}
                    cred={'3'}
                    url={'https://web.nitp.ac.in/dept/math/syllabus/MA_720.docx'}
                />
                <OtherComp
                    dep={'MA'}
                    sem={''}
                    code={'MA*721'}
                    title={'Theory and Methods of Statistical Inference'}
                    L={'3'}
                    T={'0'}
                    P={'0'}
                    cred={'3'}
                    url={'https://web.nitp.ac.in/dept/math/syllabus/MA_721.docx'}
                />
                <OtherComp
                    dep={'MA'}
                    sem={''}
                    code={'MA*722'}
                    title={'Classical Mechanics'}
                    L={'3'}
                    T={'0'}
                    P={'0'}
                    cred={'3'}
                    url={'https://web.nitp.ac.in/dept/math/syllabus/MA_722.docx'}
                />
                <OtherComp
                    dep={'MA'}
                    sem={''}
                    code={'MA*723'}
                    title={'Stochastic Processes'}
                    L={'3'}
                    T={'0'}
                    P={'0'}
                    cred={'3'}
                    url={'https://web.nitp.ac.in/dept/math/syllabus/MA_723.docx'}
                />
                <OtherComp
                    dep={'MA'}
                    sem={''}
                    code={'MA*724'}
                    title={'Optimization Techniques'}
                    L={'3'}
                    T={'0'}
                    P={'0'}
                    cred={'3'}
                    url={'https://web.nitp.ac.in/dept/math/syllabus/MA_724.docx'}
                />
                <OtherComp
                    dep={'MA'}
                    sem={''}
                    code={'MA*725'}
                    title={'Partial Differential Equations'}
                    L={'3'}
                    T={'0'}
                    P={'0'}
                    cred={'3'}
                    url={'https://web.nitp.ac.in/dept/math/syllabus/MA_725.docx'}
                />
                <OtherComp
                    dep={'MA'}
                    sem={''}
                    code={'MA*726'}
                    title={'Statistical Simulation and Data Analysis'}
                    L={'3'}
                    T={'0'}
                    P={'0'}
                    cred={'3'}
                    url={'https://web.nitp.ac.in/dept/math/syllabus/MA_726.docx'}
                />
                <OtherComp
                    dep={'MA'}
                    sem={''}
                    code={'MA*727'}
                    title={'Time Series Analysis'}
                    L={'3'}
                    T={'0'}
                    P={'0'}
                    cred={'3'}
                    url={'https://web.nitp.ac.in/dept/math/syllabus/MA_727.docx'}
                />
                <OtherComp
                    dep={'MA'}
                    sem={''}
                    code={'MA*728'}
                    title={'Finite Element Method'}
                    L={'3'}
                    T={'0'}
                    P={'0'}
                    cred={'3'}
                    url={'https://web.nitp.ac.in/dept/math/syllabus/MA_728.docx'}
                />
                <OtherComp
                    dep={'MA'}
                    sem={''}
                    code={'MA*729'}
                    title={'Computational Fluid Dynamics'}
                    L={'3'}
                    T={'0'}
                    P={'0'}
                    cred={'3'}
                    url={'https://web.nitp.ac.in/dept/math/syllabus/MA_729.docx'}
                />
                <OtherComp
                    dep={'MA'}
                    sem={''}
                    code={'MA*730'}
                    title={'Financial Mathematics'}
                    L={'3'}
                    T={'0'}
                    P={'0'}
                    cred={'3'}
                    url={'https://web.nitp.ac.in/dept/math/syllabus/MA_730.docx'}
                />
                <OtherComp
                    dep={'MA'}
                    sem={''}
                    code={'MA*731'}
                    title={'Graph Theory and Algorithms'}
                    L={'3'}
                    T={'0'}
                    P={'0'}
                    cred={'3'}
                    url={'https://web.nitp.ac.in/dept/math/syllabus/MA_731.docx'}
                />
                <OtherComp
                    dep={'MA'}
                    sem={''}
                    code={'MA*732'}
                    title={'Nonlinear Dynamical Systems'}
                    L={'3'}
                    T={'0'}
                    P={'0'}
                    cred={'3'}
                    url={'https://web.nitp.ac.in/dept/math/syllabus/MA_732.docx'}
                />
                <OtherComp
                    dep={'MA'}
                    sem={''}
                    code={'MA*733'}
                    title={'Neural Networks'}
                    L={'3'}
                    T={'0'}
                    P={'0'}
                    cred={'3'}
                    url={'https://web.nitp.ac.in/dept/math/syllabus/MA_733.docx'}
                />
                <OtherComp
                    dep={'MA'}
                    sem={''}
                    code={'MA*734'}
                    title={'Non Linear Programming'}
                    L={'3'}
                    T={'0'}
                    P={'0'}
                    cred={'3'}
                    url={'https://web.nitp.ac.in/dept/math/syllabus/MA_734.docx'}
                />
                <OtherComp
                    dep={'MA'}
                    sem={''}
                    code={'MA*735'}
                    title={'Theory of Operators'}
                    L={'3'}
                    T={'0'}
                    P={'0'}
                    cred={'3'}
                    url={'https://web.nitp.ac.in/dept/math/syllabus/MA_735.docx'}
                />
                <OtherComp
                    dep={'MA'}
                    sem={''}
                    code={'MA*736'}
                    title={'Advanced Numerical Methods'}
                    L={'3'}
                    T={'0'}
                    P={'0'}
                    cred={'3'}
                    url={'https://web.nitp.ac.in/dept/math/syllabus/MA_736.docx'}
                />
                <OtherComp
                    dep={'MA'}
                    sem={''}
                    code={'MA*737'}
                    title={'Topological Vector Space'}
                    L={'3'}
                    T={'0'}
                    P={'0'}
                    cred={'3'}
                    url={'https://web.nitp.ac.in/dept/math/syllabus/MA_737.docx'}
                />
                <OtherComp
                    dep={'OE'}
                    sem={''}
                    code={'OE0701'}
                    title={'Stochastic Processes'}
                    L={'3'}
                    T={'0'}
                    P={'0'}
                    cred={'3'}
                    url={'https://web.nitp.ac.in/dept/math/syllabus/OE0701.docx'}
                />
                <OtherComp
                    dep={'OE'}
                    sem={''}
                    code={'OE0702'}
                    title={'Applied Matrix Theory'}
                    L={'3'}
                    T={'0'}
                    P={'0'}
                    cred={'3'}
                    url={'https://web.nitp.ac.in/dept/math/syllabus/OE0702.docx'}
                />
                <OtherComp
                    dep={'OE'}
                    sem={''}
                    code={'OE0703'}
                    title={'Graph Theory and Algorithms'}
                    L={'3'}
                    T={'0'}
                    P={'0'}
                    cred={'3'}
                    url={'https://web.nitp.ac.in/dept/math/syllabus/OE0703.docx'}
                />
                <OtherComp
                    dep={'OE'}
                    sem={''}
                    code={'OE0704'}
                    title={'Nonlinear Dynamical Systems'}
                    L={'3'}
                    T={'0'}
                    P={'0'}
                    cred={'3'}
                    url={'https://web.nitp.ac.in/dept/math/syllabus/OE0704.docx'}
                />
                <OtherComp
                    dep={'OE'}
                    sem={''}
                    code={'OE0705'}
                    title={'Financial Mathematics'}
                    L={'3'}
                    T={'0'}
                    P={'0'}
                    cred={'3'}
                    url={'https://web.nitp.ac.in/dept/math/syllabus/OE0705.docx'}
                />
                <OtherComp
                    dep={'OE'}
                    sem={''}
                    code={'OE0706'}
                    title={'Finite Element Methods'}
                    L={'3'}
                    T={'0'}
                    P={'0'}
                    cred={'3'}
                    url={'https://web.nitp.ac.in/dept/math/syllabus/OE0706.docx'}
                />
            </div>
        </div>
    );
};

const PhDSyllabus = () => {
    return (
        <div className="w-full mb-10 overflow-x-auto">
            <div className="min-w-[1000px] border">
                <div className="grid grid-cols-11 bg-gray-100 font-semibold text-red-900">
                    <div className="col-span-1 border border-black flex items-center justify-center py-2">Dept.</div>
                    <div className="col-span-2 border border-black flex items-center justify-center py-2">Course Code</div>
                    <div className="col-span-4 border border-black flex items-center justify-center py-2">Course Title</div>
                    <div className="col-span-1 border border-black flex items-center justify-center py-2">L</div>
                    <div className="col-span-1 border border-black flex items-center justify-center py-2">T</div>
                    <div className="col-span-1 border border-black flex items-center justify-center py-2">P</div>
                    <div className="col-span-1 border border-black flex items-center justify-center py-2">Credits</div>
                </div>

                {/* Table Rows */}
                <OtherComp
                    srno={"1"}
                    code={"PDMEXX01 / PDHSXX01"}
                    title={"Research Methodology"}
                    L={"3"} T={"0"} P={"0"}
                    cred={"3"}
                    url={""}
                />

                <OtherComp
                    srno={"2"}
                    code={"PDHSXX02"}
                    title={"Seminar and Technical Report Writing"}
                    L={"0"} T={"0"} P={"3"}
                    cred={"2"}
                    url={""}
                />

                <OtherComp
                    srno={"3"}
                    code={"PDHSXX03"}
                    title={"Comprehensive Viva"}
                    L={"-"} T={"-"} P={"-"}
                    cred={"1S"}
                    url={""}
                />

                <OtherComp
                    srno={"4"}
                    code={"PDHSXX04"}
                    title={"Research Seminar"}
                    L={"-"} T={"-"} P={"-"}
                    cred={"4S"}
                    url={""}
                />

                <OtherComp
                    srno={"5"}
                    code={"PDHSXX05"}
                    title={"Human Resource Management"}
                    L={"3"} T={"0"} P={"0"}
                    cred={"3"}
                    url={""}
                />

                <OtherComp
                    srno={"6"}
                    code={"PDHSXX06"}
                    title={"Industrial Relations and Labour Legislations"}
                    L={"3"} T={"0"} P={"0"}
                    cred={"3"}
                    url={""}
                />

                <OtherComp
                    srno={"7"}
                    code={"PDHSXX07"}
                    title={"Introduction to British Romantic Poetry"}
                    L={"3"} T={"0"} P={"0"}
                    cred={"3"}
                    url={""}
                />

                <OtherComp
                    srno={"8"}
                    code={"PDHSXX08"}
                    title={"Twentieth Century Poetry"}
                    L={"3"} T={"0"} P={"0"}
                    cred={"3"}
                    url={""}
                />

                <OtherComp
                    srno={"9"}
                    code={"PDHSXX09"}
                    title={"Twentieth Century Novel/Short Story and Drama"}
                    L={"3"} T={"0"} P={"0"}
                    cred={"3"}
                    url={""}
                />

                <OtherComp
                    srno={"10"}
                    code={"PDHSXX10"}
                    title={"Introduction to Non-British Literature in English"}
                    L={"3"} T={"0"} P={"0"}
                    cred={"3"}
                    url={""}
                />

                <OtherComp
                    srno={"11"}
                    code={"PDHSXX11"}
                    title={"Advanced Microeconomics"}
                    L={"3"} T={"0"} P={"0"}
                    cred={"3"}
                    url={""}
                />

                <OtherComp
                    srno={"12"}
                    code={"PDHSXX12"}
                    title={"Advanced Macroeconomics"}
                    L={"3"} T={"0"} P={"0"}
                    cred={"3"}
                    url={""}
                />

                <OtherComp
                    srno={"13"}
                    code={"PDHSXX13"}
                    title={"Intellectual Property Rights"}
                    L={"3"} T={"0"} P={"0"}
                    cred={"3"}
                    url={""}
                />

                <OtherComp
                    srno={"14"}
                    code={"PDHSXX14"}
                    title={"Indian Rural Development"}
                    L={"3"} T={"0"} P={"0"}
                    cred={"3"}
                    url={""}
                />

                <OtherComp
                    srno={"15"}
                    code={"PDHSXX15"}
                    title={"Sociology: Development & Environment"}
                    L={"3"} T={"0"} P={"0"}
                    cred={"3"}
                    url={""}
                />

                <OtherComp
                    srno={"16"}
                    code={"PDHSXX16"}
                    title={"Econometrics"}
                    L={"3"} T={"0"} P={"0"}
                    cred={"3"}
                    url={""}
                />

                <OtherComp
                    srno={"17"}
                    code={"PDHSXX17"}
                    title={"Postcolonial Literature"}
                    L={"3"} T={"0"} P={"0"}
                    cred={"3"}
                    url={""}
                />

                <OtherComp
                    srno={"18"}
                    code={"PDHSXX18"}
                    title={"Computer Application Lab"}
                    L={"0"} T={"0"} P={"6"}
                    cred={"4"}
                    url={""}
                /></div>
        </div>
    );
};


const syllabusMap = {
    "imsc": {
        title: "IMSc",
        content: <IMSCSyllabus />,
    },

    // "mca": {
    //     title: "M.C.A in Humanities and Social Sciences",
    //     content: <MCAHSSSyllabus />,
    // },
    "phd": {
        title: "Ph.D. in Humanities and Social Sciences",
        content: <PhDSyllabus />,
    },
};

export default function SyllabusPage({ params }) {
    const { course } = params;
    const syllabus = syllabusMap[course];

    return (
        <div className="max-w-7xl mx-auto px-4 mt-10 text-center">
            <h1 className="text-3xl font-bold text-red-800 mb-6">
                {syllabus.title} – Syllabus
            </h1>
            {syllabus.content && (
                syllabus.content
            )}
        </div>
    );
}
