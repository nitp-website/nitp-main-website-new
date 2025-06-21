import React from "react";


function SyllabusComp({ dep, sem, code, title, L, T, P, cred, url }) {
    return (
        <div className="grid grid-cols-12 w-full text-black">
            <div className="col-span-1 border border-black flex items-center px-2 py-2">{dep}</div>
            <div className="col-span-1 border border-black flex items-center px-2 py-2">{sem}</div>
            <div className="col-span-2 border border-black flex items-center px-2 py-2">{code}</div>
            <a
                href={url || "#"}
                target="_blank"
                rel="noopener noreferrer"
                className="col-span-4 border border-black flex items-center text-left text-sm px-2 py-2 hover:underline hover:cursor-pointer"
            >
                {title}
            </a>
            <div className="col-span-1 border border-black flex items-center px-2 py-2">{L}</div>
            <div className="col-span-1 border border-black flex items-center px-2 py-2">{T}</div>
            <div className="col-span-1 border border-black flex items-center px-2 py-2">{P}</div>
            <div className="col-span-1 border border-black flex items-center px-2 py-2">{cred}</div>
        </div>
    );
}

const BTechSyllabus = () => {
    return (
        <div className="w-full mb-10 overflow-x-auto">
            <div className="min-w-[1000px] border">
                {/* Header */}
                <div className="grid grid-cols-12 bg-gray-100 font-semibold text-red-900">
                    <div className="col-span-1 border border-black flex items-center justify-center py-2">Branch</div>
                    <div className="col-span-1 border border-black flex items-center justify-center py-2">Sem</div>
                    <div className="col-span-2 border border-black flex items-center justify-center py-2">Course Code</div>
                    <div className="col-span-4 border border-black flex items-center justify-center py-2">Course Title</div>
                    <div className="col-span-1 border border-black flex items-center justify-center py-2">L</div>
                    <div className="col-span-1 border border-black flex items-center justify-center py-2">T</div>
                    <div className="col-span-1 border border-black flex items-center justify-center py-2">P</div>
                    <div className="col-span-1 border border-black flex items-center justify-center py-2">Credits</div>
                </div>

                {/* Main Syllabus Rows */}
                <SyllabusComp dep="ME-UG & DD" sem="1" code="HS12101" title="Communicative English" L="3" T="0" P="2" cred="4" />
                <SyllabusComp dep="CE-UG & DD" sem="1" code="HS13101" title="Communicative English" L="3" T="0" P="2" cred="4" />
                <SyllabusComp dep="EE-UG & DD" sem="1" code="HS16101" title="Communicative English" L="3" T="0" P="2" cred="4" />
                <SyllabusComp dep="MA-DD" sem="1" code="HS17101" title="Communicative English" L="3" T="0" P="2" cred="4" />
                <SyllabusComp dep="MS&E-DD" sem="1" code="HS18101" title="Communicative English" L="3" T="0" P="2" cred="4" />
                <SyllabusComp dep="CE&T-DD" sem="1" code="HS19101" title="Communicative English" L="3" T="0" P="2" cred="4" />
                <SyllabusComp dep="M&AE-DD" sem="1" code="HS111101" title="Communicative English" L="3" T="0" P="2" cred="4" />
                <SyllabusComp dep="AR-UG" sem="2" code="HS21121" title="Communicative English" L="3" T="0" P="2" cred="4" />
                <SyllabusComp dep="CSE-UG & DD" sem="2" code="HS24101" title="Communicative English" L="3" T="0" P="2" cred="4" />
                <SyllabusComp dep="ECE-UG & DD" sem="2" code="HS25101" title="Communicative English" L="3" T="0" P="2" cred="4" />
                <SyllabusComp dep="MA-UG & DD" sem="2" code="HS27101" title="Science, Society and Ethical Values" L="3" T="0" P="0" cred="3" />
                <SyllabusComp dep="MS&E-DD" sem="2" code="HS28101" title="Science, Society and Ethical Values" L="2" T="1" P="0" cred="3" />
                <SyllabusComp dep="CE&T-DD" sem="2" code="HS29101" title="Science, Society and Ethical Values" L="3" T="0" P="0" cred="3" />
                <SyllabusComp dep="CSE-UG & DD" sem="3" code="HS34151" title="Social and Professional Ethics" L="3" T="0" P="0" cred="3" />
                <SyllabusComp dep="ME-UG & DD" sem="5" code="HS52101" title="Universal Human Values & Ethics" L="2" T="0" P="0" cred="2" />
                <SyllabusComp dep="EE-UG & DD" sem="5" code="HS56101" title="Professional Ethics" L="2" T="0" P="0" cred="2" />
                <SyllabusComp dep="MS&E-DD" sem="5" code="HS58105" title="Industrial Economics and Financial Management" L="3" T="0" P="0" cred="3" />
                <SyllabusComp dep="All Branches" sem="5" code="OEHSXXX" title="Open Elective-I" L="3" T="0" P="0" cred="3" />
                <SyllabusComp dep="AR-UG" sem="8" code="HS81153" title="Sociology and Building Economics" L="2" T="0" P="0" cred="2" />
                <SyllabusComp dep="AR-UG & All DD Courses" sem="8" code="OEHSXXX" title="Open Elective-II" L="3" T="0" P="0" cred="3" />

                {/* Section Title for Open Electives */}
                <div className="col-span-12 border border-black bg-gray-50 font-semibold text-left px-4 py-2 mt-4">
                    List of Open Elective-I & II
                </div>

                {/* Open Elective List */}
                <SyllabusComp dep="" sem="OE" code="OEHSXXX" title="Industrial Economics and Financial Management" L="3" T="0" P="0" cred="3" />
                <SyllabusComp dep="" sem="OE" code="OEHSXXX" title="Organisational Behaviour & Industrial Psychology" L="3" T="0" P="0" cred="3" />
                <SyllabusComp dep="" sem="OE" code="OEHSXXX" title="History of Science & Technology" L="3" T="0" P="0" cred="3" />
                <SyllabusComp dep="" sem="OE" code="OEHSXXX" title="Introduction to Intellectual Property Rights" L="3" T="0" P="0" cred="3" />
                <SyllabusComp dep="" sem="OE" code="OEHSXXX" title="Business Environment & Indian Economy" L="3" T="0" P="0" cred="3" />
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
                    <div className="col-span-1 border border-black flex items-center justify-center py-2">Sem</div>
                    <div className="col-span-2 border border-black flex items-center justify-center py-2">Course Code</div>
                    <div className="col-span-4 border border-black flex items-center justify-center py-2">Course Title</div>
                    <div className="col-span-1 border border-black flex items-center justify-center py-2">L</div>
                    <div className="col-span-1 border border-black flex items-center justify-center py-2">T</div>
                    <div className="col-span-1 border border-black flex items-center justify-center py-2">P</div>
                    <div className="col-span-1 border border-black flex items-center justify-center py-2">Credits</div>
                </div>

                {/* Rows */}
                {/* <SyllabusComp
                    dep={"CSE"}
                    sem={"1"}
                    code={"MC470101"}
                    title={"Problem Solving through C"}
                    L={"3"} T={"0"} P={"2"} cred={"4"}
                    url={"https://docs.google.com/document/d/1FV1oOQYuIZ2V_mIjTy03sGI_61pjReHe/edit?usp=drive_link&ouid=111684243091520260943&rtpof=true&sd=true"}
                /> */}

                <SyllabusComp
                    dep={"MCA-DS &I"}
                    sem={"1"}
                    code={"MC460104"}
                    title={"Technical Communication"}
                    L={"2"} T={"0"} P={"2"} cred={"3"}
                    url={""}
                />

                <SyllabusComp
                    dep={"MCA-AI & IOT"}
                    sem={"1"}
                    code={"MC470104"}
                    title={"Technical Communication"}
                    L={"2"} T={"0"} P={"2"} cred={"3"}
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
                <div className="grid grid-cols-12 bg-gray-100 font-semibold text-red-900">
                    <div className="col-span-1 border border-black flex items-center justify-center py-2">Dept.</div>
                    <div className="col-span-1 border border-black flex items-center justify-center py-2">Sem / Electives</div>
                    <div className="col-span-2 border border-black flex items-center justify-center py-2">Course Code</div>
                    <div className="col-span-4 border border-black flex items-center justify-center py-2">Course Title</div>
                    <div className="col-span-1 border border-black flex items-center justify-center py-2">L</div>
                    <div className="col-span-1 border border-black flex items-center justify-center py-2">T</div>
                    <div className="col-span-1 border border-black flex items-center justify-center py-2">P</div>
                    <div className="col-span-1 border border-black flex items-center justify-center py-2">Credits</div>
                </div>

                {/* Table Rows */}
                <SyllabusComp dep="" sem="" code="PDMEXX01 / PDHSXX01" title="Research Methodology" L="3" T="0" P="0" cred="3" />
                <SyllabusComp dep="" sem="" code="PDHSXX02" title="Seminar and Technical Report Writing" L="0" T="0" P="3" cred="2" />
                <SyllabusComp dep="" sem="" code="PDHSXX03" title="Comprehensive Viva" L="-" T="-" P="-" cred="1S" />
                <SyllabusComp dep="" sem="" code="PDHSXX04" title="Research Seminar" L="-" T="-" P="-" cred="4S" />
                <SyllabusComp dep="" sem="" code="PDHSXX05" title="Human Resource Management" L="3" T="0" P="0" cred="3" />
                <SyllabusComp dep="" sem="" code="PDHSXX06" title="Industrial Relations and Labour Legislations" L="3" T="0" P="0" cred="3" />
                <SyllabusComp dep="" sem="" code="PDHSXX07" title="Introduction to British Romantic Poetry" L="3" T="0" P="0" cred="3" />
                <SyllabusComp dep="" sem="" code="PDHSXX08" title="Twentieth Century Poetry" L="3" T="0" P="0" cred="3" />
                <SyllabusComp dep="" sem="" code="PDHSXX09" title="Twentieth Century Novel/Short Story and Drama" L="3" T="0" P="0" cred="3" />
                <SyllabusComp dep="" sem="" code="PDHSXX10" title="Introduction to Non-British Literature in English" L="3" T="0" P="0" cred="3" />
                <SyllabusComp dep="" sem="" code="PDHSXX11" title="Advanced Microeconomics" L="3" T="0" P="0" cred="3" />
                <SyllabusComp dep="" sem="" code="PDHSXX12" title="Advanced Macroeconomics" L="3" T="0" P="0" cred="3" />
                <SyllabusComp dep="" sem="" code="PDHSXX13" title="Intellectual Property Rights" L="3" T="0" P="0" cred="3" />
                <SyllabusComp dep="" sem="" code="PDHSXX14" title="Indian Rural Development" L="3" T="0" P="0" cred="3" />
                <SyllabusComp dep="" sem="" code="PDHSXX15" title="Sociology: Development & Environment" L="3" T="0" P="0" cred="3" />
                <SyllabusComp dep="" sem="" code="PDHSXX16" title="Econometrics" L="3" T="0" P="0" cred="3" />
                <SyllabusComp dep="" sem="" code="PDHSXX17" title="Postcolonial Literature" L="3" T="0" P="0" cred="3" />
                <SyllabusComp dep="" sem="" code="PDHSXX18" title="Computer Application Lab" L="0" T="0" P="6" cred="4" />
            </div>
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
