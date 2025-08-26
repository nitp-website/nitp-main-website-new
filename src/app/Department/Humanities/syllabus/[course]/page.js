import React from "react";

function SyllabusComp({ srno, branch, sem, code, title, L, T, P, cred, url }) {
    return (
        <div className="grid grid-cols-12 w-full text-black">
            <div className="col-span-1 border border-black flex justify-center flex-col items-center px-2 py-2">{srno}</div>
            <div className="col-span-1 border border-black flex justify-center flex-col items-center px-2 py-2">{branch}</div>
            <div className="col-span-1 border border-black flex justify-center flex-col items-center px-2 py-2">{sem}</div>
            <div className="col-span-2 border border-black flex justify-center flex-col items-center px-2 py-2">{code}</div>
            <a
                href={url || "#"}
                target="_blank"
                rel="noopener noreferrer"
                className="col-span-3 border border-black flex justify-center flex-col items-center text-left text-sm px-2 py-2 hover:underline hover:cursor-pointer"
            >
                {title}
            </a>
            <div className="col-span-1 border border-black flex justify-center flex-col items-center px-2 py-2">{L}</div>
            <div className="col-span-1 border border-black flex justify-center flex-col items-center px-2 py-2">{T}</div>
            <div className="col-span-1 border border-black flex justify-center flex-col items-center px-2 py-2">{P}</div>
            <div className="col-span-1 border border-black flex justify-center flex-col items-center px-2 py-2">{cred}</div>
        </div>
    );
}

function OtherComp({ srno, code, title, L, T, P, cred, url }) {
    return (
        <>
            <div className="grid grid-cols-11 w-full text-black">
                <div className="col-span-1 border border-black flex flex-col justify-center text-black pl-4 py-2">{srno}</div>
                <div className="col-span-2 border border-black flex flex-col justify-center text-black pl-4 py-2">{code}</div>
                <a href={url} className="col-span-4 border border-black flex flex-col justify-center text-black pl-4 py-2 cursor-pointer">{title}</a>
                <div className="col-span-1 border border-black flex flex-col justify-center text-black pl-4 py-2">{L}</div>
                <div className="col-span-1 border border-black flex flex-col justify-center text-black pl-4 py-2">{T}</div>
                <div className="col-span-1 border border-black flex flex-col justify-center text-black pl-4 py-2">{P}</div>
                <div className="col-span-1 border border-black flex flex-col justify-center text-black pl-4 py-2">{cred}</div>
            </div >
        </>
    )
}

const BTechSyllabus = () => {
    return (
        <div className="w-full mb-10 overflow-x-auto">
            <div className="min-w-[1000px] border">
                {/* Header */}
                <div className="grid grid-cols-12 bg-gray-100 font-semibold text-red-900">
                    <div className="col-span-1 border border-black flex items-center justify-center py-2">Sr.No.</div>
                    <div className="col-span-1 border border-black flex items-center justify-center py-2">Branch</div>
                    <div className="col-span-1 border border-black flex items-center justify-center py-2">Sem/Elective</div>
                    <div className="col-span-2 border border-black flex items-center justify-center py-2">Course Code</div>
                    <div className="col-span-3 border border-black flex items-center justify-center py-2">Course Title</div>
                    <div className="col-span-1 border border-black flex items-center justify-center py-2">L</div>
                    <div className="col-span-1 border border-black flex items-center justify-center py-2">T</div>
                    <div className="col-span-1 border border-black flex items-center justify-center py-2">P</div>
                    <div className="col-span-1 border border-black flex items-center justify-center py-2">Credits</div>
                </div>

                {/* Main Syllabus Rows */}
                <SyllabusComp
                    srno={"1"}
                    branch={"ME-UG & DD"}
                    sem={"1"}
                    code={"HS12101"}
                    title={"Communicative English"}
                    L={"3"} T={"0"} P={"2"}
                    cred={"4"}
                />

                <SyllabusComp
                    srno={"2"}
                    branch={"CE-UG & DD"}
                    sem={"1"}
                    code={"HS13101"}
                    title={"Communicative English"}
                    L={"3"} T={"0"} P={"2"}
                    cred={"4"}
                />

                <SyllabusComp
                    srno={"3"}
                    branch={"EE-UG & DD"}
                    sem={"1"}
                    code={"HS16101"}
                    title={"Communicative English"}
                    L={"3"} T={"0"} P={"2"}
                    cred={"4"}
                />

                <SyllabusComp
                    srno={"4"}
                    branch={"MA-DD"}
                    sem={"1"}
                    code={"HS17101"}
                    title={"Communicative English"}
                    L={"3"} T={"0"} P={"2"}
                    cred={"4"}
                />

                <SyllabusComp
                    srno={"5"}
                    branch={"MS&E-DD"}
                    sem={"1"}
                    code={"HS18101"}
                    title={"Communicative English"}
                    L={"3"} T={"0"} P={"2"}
                    cred={"4"}
                />

                <SyllabusComp
                    srno={"6"}
                    branch={"CE&T-DD"}
                    sem={"1"}
                    code={"HS19101"}
                    title={"Communicative English"}
                    L={"3"} T={"0"} P={"2"}
                    cred={"4"}
                />

                <SyllabusComp
                    srno={"7"}
                    branch={"M&AE-DD"}
                    sem={"1"}
                    code={"HS111101"}
                    title={"Communicative English"}
                    L={"3"} T={"0"} P={"2"}
                    cred={"4"}
                />

                <SyllabusComp
                    srno={"8"}
                    branch={"AR-UG"}
                    sem={"2"}
                    code={"HS21121"}
                    title={"Communicative English"}
                    L={"3"} T={"0"} P={"2"}
                    cred={"4"}
                />

                <SyllabusComp
                    srno={"9"}
                    branch={"CSE-UG & DD"}
                    sem={"2"}
                    code={"HS24101"}
                    title={"Communicative English"}
                    L={"3"} T={"0"} P={"2"}
                    cred={"4"}
                />

                <SyllabusComp
                    srno={"10"}
                    branch={"ECE-UG & DD"}
                    sem={"2"}
                    code={"HS25101"}
                    title={"Communicative English"}
                    L={"3"} T={"0"} P={"2"}
                    cred={"4"}
                />

                <SyllabusComp
                    srno={"11"}
                    branch={"MA-UG & DD"}
                    sem={"2"}
                    code={"HS27101"}
                    title={"Science, Society and Ethical Values"}
                    L={"3"} T={"0"} P={"0"}
                    cred={"3"}
                />

                <SyllabusComp
                    srno={"12"}
                    branch={"MS&E-DD"}
                    sem={"2"}
                    code={"HS28101"}
                    title={"Science, Society and Ethical Values"}
                    L={"2"} T={"1"} P={"0"}
                    cred={"3"}
                />

                <SyllabusComp
                    srno={"13"}
                    branch={"CE&T-DD"}
                    sem={"2"}
                    code={"HS29101"}
                    title={"Science, Society and Ethical Values"}
                    L={"3"} T={"0"} P={"0"}
                    cred={"3"}
                />

                <SyllabusComp
                    srno={"14"}
                    branch={"CSE-UG & DD"}
                    sem={"3"}
                    code={"HS34151"}
                    title={"Social and Professional Ethics"}
                    L={"3"} T={"0"} P={"0"}
                    cred={"3"}
                />

                <SyllabusComp
                    srno={"15"}
                    branch={"ME-UG & DD"}
                    sem={"5"}
                    code={"HS52101"}
                    title={"Universal Human Values & Ethics"}
                    L={"2"} T={"0"} P={"0"}
                    cred={"2"}
                />

                <SyllabusComp
                    srno={"16"}
                    branch={"EE-UG & DD"}
                    sem={"5"}
                    code={"HS56101"}
                    title={"Professional Ethics"}
                    L={"2"} T={"0"} P={"0"}
                    cred={"2"}
                />

                <SyllabusComp
                    srno={"17"}
                    branch={"MS&E-DD"}
                    sem={"5"}
                    code={"HS58105"}
                    title={"Industrial Economics and Financial Management"}
                    L={"3"} T={"0"} P={"0"}
                    cred={"3"}
                />

                <SyllabusComp
                    srno={"18"}
                    branch={"All Branches"}
                    sem={"5"}
                    code={"OEHSXXX"}
                    title={"Open Elective-I"}
                    L={"3"} T={"0"} P={"0"}
                    cred={"3"}
                />

                <SyllabusComp
                    srno={"19"}
                    branch={"AR-UG"}
                    sem={"8"}
                    code={"HS81153"}
                    title={"Sociology and Building Economics"}
                    L={"2"} T={"0"} P={"0"}
                    cred={"2"}
                />

                <SyllabusComp
                    srno={"20"}
                    branch={"AR-UG & All DD Courses"}
                    sem={"8"}
                    code={"OEHSXXX"}
                    title={"Open Elective-II"}
                    L={"3"} T={"0"} P={"0"}
                    cred={"3"}
                />
            </div>

            <div>
                <h2 className="text-2xl font-semibold text-red-800 my-6">List of Open Elective-I & II</h2>
            </div>
            <div className="min-w-[1000px] border">
                {/* Header */}
                <div className="grid grid-cols-11 bg-gray-100 font-semibold text-red-900">
                    <div className="col-span-1 border border-black flex items-center justify-center py-2">Sr.No.</div>
                    <div className="col-span-2 border border-black flex items-center justify-center py-2">Course Code</div>
                    <div className="col-span-4 border border-black flex items-center justify-center py-2">Course Title</div>
                    <div className="col-span-1 border border-black flex items-center justify-center py-2">L</div>
                    <div className="col-span-1 border border-black flex items-center justify-center py-2">T</div>
                    <div className="col-span-1 border border-black flex items-center justify-center py-2">P</div>
                    <div className="col-span-1 border border-black flex items-center justify-center py-2">Credits</div>
                </div>

                <OtherComp
                    srno={"1"}
                    code={"OEHSXXX"}
                    title={"Industrial Economics and Financial Management"}
                    L={"3"} T={"0"} P={"0"}
                    cred={"3"}
                    url={""}
                />
                <OtherComp
                    srno={"2"}
                    code={"OEHSXXX"}
                    title={"Organisational Behaviour & Industrial Psychology"}
                    L={"3"} T={"0"} P={"0"}
                    cred={"3"}
                    url={""}
                />
                <OtherComp
                    srno={"3"}
                    code={""}
                    title={"History of Science & Technology"}
                    L={""} T={""} P={""}
                    cred={""}
                    url={""}
                />
                <OtherComp
                    srno={"4"}
                    code={""}
                    title={"Introduction to Intellectual Property Rights"}
                    L={""} T={""} P={""}
                    cred={""}
                    url={""}
                />
                <OtherComp
                    srno={"5"}
                    code={""}
                    title={"Business Environment & Indian Economy"}
                    L={""} T={""} P={""}
                    cred={""}
                    url={""}
                />

            </div>
        </div>
    );
};

const MCAHSSSyllabus = () => {
    return (
        <div className="w-full mb-10 overflow-x-auto">
            <div className="min-w-[1000px] border">
                {/* Header */}
                <div className="grid grid-cols-12 bg-gray-100 font-semibold text-red-900">
                    <div className="col-span-1 border border-black flex items-center justify-center py-2">Dept.</div>
                    <div className="col-span-1 border border-black flex items-center justify-center py-2">Branch</div>
                    <div className="col-span-1 border border-black flex items-center justify-center py-2">Sem</div>
                    <div className="col-span-2 border border-black flex items-center justify-center py-2">Course Code</div>
                    <div className="col-span-3 border border-black flex items-center justify-center py-2">Course Title</div>
                    <div className="col-span-1 border border-black flex items-center justify-center py-2">L</div>
                    <div className="col-span-1 border border-black flex items-center justify-center py-2">T</div>
                    <div className="col-span-1 border border-black flex items-center justify-center py-2">P</div>
                    <div className="col-span-1 border border-black flex items-center justify-center py-2">Credits</div>
                </div>

                {/* Rows */}
                <SyllabusComp
                    srno={"1"}
                    branch={"MCA-DS &I"}
                    sem={"1"}
                    code={"MC460104"}
                    title={"Technical Communication"}
                    L={"2"} T={"0"} P={"2"}
                    cred={"3"}
                    url={""}
                />
                <SyllabusComp
                    srno={"2"}
                    branch={"MCA-AI & IOT"}
                    sem={"1"}
                    code={"MC470104"}
                    title={"Technical Communication"}
                    L={"2"} T={"0"} P={"2"}
                    cred={"3"}
                    url={""}
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
    "btech": {
        title: "B.Tech in Humanities and Social Sciences",
        content: <BTechSyllabus />,
    },

    "mca": {
        title: "M.C.A in Humanities and Social Sciences",
        content: <MCAHSSSyllabus />,
    },
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
