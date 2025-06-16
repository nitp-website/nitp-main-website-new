// import React from "react";


// function SyllabusComp({ dep, sem, code, title, L, T, P, cred, url }) {
//     return (
//         <div className="grid grid-cols-12 w-full text-black">
//             <div className="col-span-1 border border-black flex items-center px-2 py-2">{dep}</div>
//             <div className="col-span-1 border border-black flex items-center px-2 py-2">{sem}</div>
//             <div className="col-span-2 border border-black flex items-center px-2 py-2">{code}</div>
//             <a
//                 href={url}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="col-span-4 border border-black flex items-center text-left text-sm px-2 py-2 hover:underline hover:cursor-pointer"
//             >
//                 {title}
//             </a>
//             <div className="col-span-1 border border-black flex items-center px-2 py-2">{L}</div>
//             <div className="col-span-1 border border-black flex items-center px-2 py-2">{T}</div>
//             <div className="col-span-1 border border-black flex items-center px-2 py-2">{P}</div>
//             <div className="col-span-1 border border-black flex items-center px-2 py-2">{cred}</div>
//         </div>
//     );
// }


// const BTechSyllabus = () => {
//     return (
//         <div className="w-full mb-10 overflow-x-auto">
//             <div className="min-w-[1000px] border">
//                 <div className="grid grid-cols-12 bg-gray-100 font-semibold text-red-900">
//                     <div className="col-span-1 border border-black flex items-center justify-center py-2">Dept.</div>
//                     <div className="col-span-1 border border-black flex items-center justify-center py-2">Sem / Electives</div>
//                     <div className="col-span-2 border border-black flex items-center justify-center py-2">Course Code</div>
//                     <div className="col-span-4 border border-black flex items-center justify-center py-2">Course Title</div>
//                     <div className="col-span-1 border border-black flex items-center justify-center py-2">L</div>
//                     <div className="col-span-1 border border-black flex items-center justify-center py-2">T</div>
//                     <div className="col-span-1 border border-black flex items-center justify-center py-2">P</div>
//                     <div className="col-span-1 border border-black flex items-center justify-center py-2">Credits</div>
//                 </div>

//                 {/* Table Rows */}
//                 <SyllabusComp
//                     dep={"CSUG"}
//                     sem={"1"}
//                     code={"CS14102"}
//                     title={"Programming in C"}
//                     L={"3"}
//                     T={"0"}
//                     P={"2"}
//                     cred={"4"}
//                     url="https://docs.google.com/document/d/10LKdSo8w-A2EsIh5NIOZFVjy4CtZX-Vq/edit?usp=drivesdk&ouid=104039714947486577983&rtpof=true&sd=true"
//                 />
//                 <SyllabusComp
//                     dep={"CSUG"}
//                     sem={"1"}
//                     code={"MA14102"}
//                     title={"Engineering Mathematics I"}
//                     L={"3"}
//                     T={"1"}
//                     P={"0"}
//                     cred={"4"}
//                     url="https://drive.google.com/file/d/1vqv7bi5wbPk80c3eIBpxRJBtrIt_IZAs/view?usp=drivesdk"
//                 />
//                 <SyllabusComp
//                     dep={"CSUG"}
//                     sem={"1"}
//                     code={"CH14101"}
//                     title={"Engineering Chemistry"}
//                     L={"3"}
//                     T={"0"}
//                     P={"2"}
//                     cred={"4"}
//                     url="https://drive.google.com/file/d/1_849FlFORiBMwbo2vQA_gzetoJDDP-iH/view?usp=drivesdk"
//                 />
//                 <SyllabusComp
//                     dep={"CSUG"}
//                     sem={"1"}
//                     code={"EC14102"}
//                     title={"Digital Design"}
//                     L={"2"}
//                     T={"0"}
//                     P={"2"}
//                     cred={"3"}
//                     url="https://web.nitp.ac.in/dept/cse/syllabus/syllabus_btech_2021_onwards/EC14102_Digital Design.docx"
//                 />
//                 <SyllabusComp
//                     dep={"CSUG"}
//                     sem={"1"}
//                     code={"CS14106"}
//                     title={"Information Technology Workshop"}
//                     L={"3"}
//                     T={"0"}
//                     P={"2"}
//                     cred={"4"}
//                     url="https://docs.google.com/document/d/1ngT0zmqppXtHzvjIPnn2-9c-_1Sd3RjA/edit?usp=drivesdk&ouid=104039714947486577983&rtpof=true&sd=true"
//                 />
//                 <SyllabusComp
//                     dep={"CSUG"}
//                     sem={"1"}
//                     code={"EAA14102"}
//                     title={"EAA -II Swachha Bharat Mission (SBM)"}
//                     L={"0"}
//                     T={"0"}
//                     P={"2"}
//                     cred={"1"}
//                     url="https://web.nitp.ac.in/dept/cse/syllabus/syllabus_btech_2021_onwards/EAA14102_EAA -II Swachha Bharat Mission (SBM).docx"
//                 />
//                 <SyllabusComp
//                     dep={"CSUG"}
//                     sem={"2"}
//                     code={"CS24107"}
//                     title={"Web Technology"}
//                     L={"3"}
//                     T={"0"}
//                     P={"2"}
//                     cred={"4"}
//                     url="https://docs.google.com/document/d/1FemjSAeB-JtHvH28B6c0YziLut5DqPtc/edit?usp=drivesdk&ouid=104039714947486577983&rtpof=true&sd=true"
//                 />
//                 <SyllabusComp
//                     dep={"CSUG"}
//                     sem={"2"}
//                     code={"HS24101"}
//                     title={"Communicative English"}
//                     L={"3"}
//                     T={"0"}
//                     P={"2"}
//                     cred={"4"}
//                     url="https://docs.google.com/document/d/1j_Nbng2Th95csKOydw4pndfpQ1uNlywh/edit?usp=drivesdk&ouid=104039714947486577983&rtpof=true&sd=true"
//                 />
//                 <SyllabusComp
//                     dep={"CSUG"}
//                     sem={"2"}
//                     code={"PH24101"}
//                     title={"Engineering Physics"}
//                     L={"3"}
//                     T={"0"}
//                     P={"2"}
//                     cred={"4"}
//                     url="https://drive.google.com/file/d/1hL-bynZFDZFWZ5QpUPNjKfemB62lV3W_/view?usp=drivesdk"
//                 />
//                 <SyllabusComp
//                     dep={"CSUG"}
//                     sem={"2"}
//                     code={"CS24108"}
//                     title={"Computer Organization"}
//                     L={"3"}
//                     T={"0"}
//                     P={"2"}
//                     cred={"4"}
//                     url="https://docs.google.com/document/d/1SnZkEaSWpkA7trG7UcnfN5K58A4Ac2YY/edit?usp=drivesdk&ouid=104039714947486577983&rtpof=true&sd=true"
//                 />
//                 <SyllabusComp
//                     dep={"CSUG"}
//                     sem={"2"}
//                     code={"MA24102"}
//                     title={"Engineering Mathematics II"}
//                     L={"3"}
//                     T={"0"}
//                     P={"0"}
//                     cred={"3"}
//                     url="https://web.nitp.ac.in/dept/cse/syllabus/syllabus_btech_2021_onwards/MA24102_Engineering Mathematics II.docx"
//                 />
//                 <SyllabusComp
//                     dep={"CSUG"}
//                     sem={"2"}
//                     code={"EAA24101"}
//                     title={"EAA - I Sports/Innovative Project/NCC/NSS"}
//                     L={"0"}
//                     T={"0"}
//                     P={"2"}
//                     cred={"1"}
//                     url="https://web.nitp.ac.in/dept/cse/syllabus/syllabus_btech_2021_onwards/EAA24101_EAA - I Sports/Innovative Project/NCC/NSS.docx"
//                 />
//                 <SyllabusComp
//                     dep={"CSUG"}
//                     sem={"3"}
//                     code={"CS34104"}
//                     title={"Data Structures"}
//                     L={"3"}
//                     T={"0"}
//                     P={"2"}
//                     cred={"4"}
//                     url="https://docs.google.com/document/d/1OPdWbOD5gF7IUKplhow4if1ICJuToAYX/edit?usp=drivesdk&ouid=104039714947486577983&rtpof=true&sd=true"
//                 />
//                 <SyllabusComp
//                     dep={"CSUG"}
//                     sem={"3"}
//                     code={"CS34105"}
//                     title={"Object Oriented Programming"}
//                     L={"2"}
//                     T={"0"}
//                     P={"2"}
//                     cred={"3"}
//                     url="https://docs.google.com/document/d/1nrio72JG5cOHG55BxfDMReZIrIZAvwKt/edit?usp=drivesdk&ouid=104039714947486577983&rtpof=true&sd=true"
//                 />
//                 <SyllabusComp
//                     dep={"CSUG"}
//                     sem={"3"}
//                     code={"CS34109"}
//                     title={"Database Management Systems"}
//                     L={"3"}
//                     T={"0"}
//                     P={"2"}
//                     cred={"4"}
//                     url="https://docs.google.com/document/d/1_q02qMFZyMXMkN7Z7VR-PMwIP0bvh9zJ/edit?usp=drivesdk&ouid=104039714947486577983&rtpof=true&sd=true"
//                 />
//                 <SyllabusComp
//                     dep={"CSUG"}
//                     sem={"3"}
//                     code={"CS34110"}
//                     title={"Discrete Mathematics and Graph Theory"}
//                     L={"3"}
//                     T={"0"}
//                     P={"0"}
//                     cred={"3"}
//                     url="https://docs.google.com/document/d/10AhQkjov0iSJ1nbZmSoatLJKe2PzKYjR/edit?usp=drivesdk&ouid=104039714947486577983&rtpof=true&sd=true"
//                 />
//                 <SyllabusComp
//                     dep={"CSUG"}
//                     sem={"3"}
//                     code={"CS34111"}
//                     title={"Operating Systems"}
//                     L={"3"}
//                     T={"0"}
//                     P={"2"}
//                     cred={"4"}
//                     url="https://docs.google.com/document/d/1e3qHzoQGIlWngv4DQ3HFjU3xFa3tC2Wb/edit?usp=drivesdk&ouid=104039714947486577983&rtpof=true&sd=true"
//                 />
//                 <SyllabusComp
//                     dep={"CSUG"}
//                     sem={"3"}
//                     code={"HS34151"}
//                     title={"Social and Professional Ethics"}
//                     L={"3"}
//                     T={"0"}
//                     P={"0"}
//                     cred={"3"}
//                     url="https://web.nitp.ac.in/dept/cse/syllabus/syllabus_btech_2021_onwards/HS34151_Social and Professional Ethics.docx"
//                 />
//                 <SyllabusComp
//                     dep={"CSUG"}
//                     sem={"4"}
//                     code={"CS44112"}
//                     title={"Artificial Intelligence"}
//                     L={"3"}
//                     T={"0"}
//                     P={"2"}
//                     cred={"4"}
//                     url="https://docs.google.com/document/d/1lloVmthAUzQq0B6OU4J5Mcdcx9Se0zhI/edit?usp=drivesdk&ouid=104039714947486577983&rtpof=true&sd=true"
//                 />
//                 <SyllabusComp
//                     dep={"CSUG"}
//                     sem={"4"}
//                     code={"CS44113"}
//                     title={"Computer Networks"}
//                     L={"3"}
//                     T={"0"}
//                     P={"2"}
//                     cred={"4"}
//                     url="https://docs.google.com/document/d/1GBPyaWjitwSdLnkKrqkt62F4rBDiIGbJ/edit?usp=drivesdk&ouid=104039714947486577983&rtpof=true&sd=true"
//                 />
//                 <SyllabusComp
//                     dep={"CSUG"}
//                     sem={"4"}
//                     code={"CS44114"}
//                     title={"Automata Theory and Compiler Design"}
//                     L={"3"}
//                     T={"0"}
//                     P={"2"}
//                     cred={"4"}
//                     url="https://docs.google.com/document/d/18BcEz9pVXxCe26EyUnAPHvvVef1CCb1m/edit?usp=drivesdk&ouid=104039714947486577983&rtpof=true&sd=true"
//                 />
//                 <SyllabusComp
//                     dep={"CSUG"}
//                     sem={"4"}
//                     code={"CS44115"}
//                     title={"Design and Analysis of Algorithms"}
//                     L={"3"}
//                     T={"0"}
//                     P={"2"}
//                     cred={"4"}
//                     url="https://docs.google.com/document/d/1FJKjJt08RINoTXY6ZwR-q70Qbp8sjTBC/edit?usp=drivesdk&ouid=104039714947486577983&rtpof=true&sd=true"
//                 />
//                 <SyllabusComp
//                     dep={"CSUG"}
//                     sem={"4"}
//                     code={"OP44XXX"}
//                     title={"Open Electives-1"}
//                     L={"X"}
//                     T={"X"}
//                     P={"X"}
//                     cred={"3"}
//                     url="https://web.nitp.ac.in/dept/cse/syllabus/syllabus_btech_2021_onwards/OP44XXX_Open Electives - I.docx"
//                 />
//                 <SyllabusComp
//                     dep={"CSUG"}
//                     sem={"5"}
//                     code={"CS54116"}
//                     title={"Software Engineering"}
//                     L={"3"}
//                     T={"0"}
//                     P={"2"}
//                     cred={"4"}
//                     url="https://docs.google.com/document/d/1193uRmx_xLvrarJuVlCP8TqJhROzbvvu/edit?usp=drivesdk&ouid=104039714947486577983&rtpof=true&sd=true"
//                 />
//                 <SyllabusComp
//                     dep={"CSUG"}
//                     sem={"5"}
//                     code={"CS54117"}
//                     title={"Internet of Things"}
//                     L={"3"}
//                     T={"0"}
//                     P={"2"}
//                     cred={"4"}
//                     url="https://docs.google.com/document/d/1RTVFAo4-l4GzjxG1z6M2nBV_qVXgDSM0/edit?usp=drivesdk&ouid=104039714947486577983&rtpof=true&sd=true"
//                 />
//                 <SyllabusComp
//                     dep={"CSUG"}
//                     sem={"5"}
//                     code={"CS54118"}
//                     title={"Machine Learning"}
//                     L={"3"}
//                     T={"0"}
//                     P={"2"}
//                     cred={"4"}
//                     url="https://docs.google.com/document/d/13iGCnzwpqMLE2CjKmhuZ5SZXVftNTXiD/edit?usp=drivesdk&ouid=104039714947486577983&rtpof=true&sd=true"
//                 />
//                 <SyllabusComp
//                     dep={"CSUG"}
//                     sem={"5"}
//                     code={"CS54119"}
//                     title={"Information Security"}
//                     L={"3"}
//                     T={"0"}
//                     P={"0"}
//                     cred={"3"}
//                     url="https://docs.google.com/document/d/1QK-nBY6EwGKgGl1zyTS7ZVyJVLFhZtvo/edit?usp=drivesdk&ouid=104039714947486577983&rtpof=true&sd=true"
//                 />
//                 <SyllabusComp
//                     dep={"CSUG"}
//                     sem={"5"}
//                     code={"CS54XXX"}
//                     title={"Dept Elective - I"}
//                     L={"X"}
//                     T={"X"}
//                     P={"X"}
//                     cred={"3"}
//                     url="https://web.nitp.ac.in/dept/cse/syllabus/syllabus_btech_2021_onwards/CS54XXX_Dept Elective - I.docx"
//                 />
//                 <SyllabusComp
//                     dep={"CSUG"}
//                     sem={"6"}
//                     code={"OP54XXX"}
//                     title={"MOOC"}
//                     L={"X"}
//                     T={"X"}
//                     P={"X"}
//                     cred={"3"}
//                     url="https://web.nitp.ac.in/dept/cse/syllabus/syllabus_btech_2021_onwards/OP54XXX_MOOC.docx"
//                 />
//                 <SyllabusComp
//                     dep={"CSUG"}
//                     sem={"6"}
//                     code={"CS64120"}
//                     title={"Data Mining"}
//                     L={"3"}
//                     T={"0"}
//                     P={"2"}
//                     cred={"4"}
//                     url="https://docs.google.com/document/d/1_fJjcCSafXjJrcALfcSiE2YHTxLgHMUj/edit?usp=drivesdk&ouid=104039714947486577983&rtpof=true&sd=true"
//                 />
//                 <SyllabusComp
//                     dep={"CSUG"}
//                     sem={"6"}
//                     code={"CS64121"}
//                     title={"Cloud Computing"}
//                     L={"3"}
//                     T={"0"}
//                     P={"0"}
//                     cred={"3"}
//                     url="https://docs.google.com/document/d/1SKpEJ3ZOzWllK03lUGYizy3qQiLxlEil/edit?usp=drivesdk&ouid=104039714947486577983&rtpof=true&sd=true"
//                 />
//                 <SyllabusComp
//                     dep={"CSUG"}
//                     sem={"6"}
//                     code={"CS641XX"}
//                     title={"Dept. Elective - II"}
//                     L={"X"}
//                     T={"X"}
//                     P={"X"}
//                     cred={"3"}
//                     url="https://web.nitp.ac.in/dept/cse/syllabus/syllabus_btech_2021_onwards/CS641XX_Dept. Elective - II.docx"
//                 />
//                 <SyllabusComp
//                     dep={"CSUG"}
//                     sem={"6"}
//                     code={"OP64XXX"}
//                     title={"MOOC"}
//                     L={"X"}
//                     T={"X"}
//                     P={"X"}
//                     cred={"3"}
//                     url="https://web.nitp.ac.in/dept/cse/syllabus/syllabus_btech_2021_onwards/OP64XXX_MOOC.docx"
//                 />
//                 <SyllabusComp
//                     dep={"CSUG"}
//                     sem={"6"}
//                     code={"CS64123"}
//                     title={"Project"}
//                     L={"0"}
//                     T={"0"}
//                     P={"12"}
//                     cred={"6"}
//                     url="https://web.nitp.ac.in/dept/cse/syllabus/syllabus_btech_2021_onwards/CS64123_Project.docx"
//                 />
//                 <SyllabusComp
//                     dep={"CSUG"}
//                     sem={"7"}
//                     code={"CS74144"}
//                     title={"Applied Cryptography"}
//                     L={"3"}
//                     T={"0"}
//                     P={"2"}
//                     cred={"4"}
//                     url="https://docs.google.com/document/d/1ME1UC4IZFPovdQz9dUTmsrdKCMWMWpsu/edit?usp=drivesdk&ouid=104039714947486577983&rtpof=true&sd=true"
//                 />
//                 <SyllabusComp
//                     dep={"CSUG"}
//                     sem={"7"}
//                     code={"CS74144"}
//                     title={"Optimization Techniques"}
//                     L={"3"}
//                     T={"0"}
//                     P={"0"}
//                     cred={"3"}
//                     url="https://docs.google.com/document/d/1G3sQOirIkoFwzYpDssowGS1-xU10VpTq/edit?usp=drivesdk&ouid=104039714947486577983&rtpof=true&sd=true"
//                 />
//                 <SyllabusComp
//                     dep={"CSUG"}
//                     sem={"7"}
//                     code={"CS74XXX"}
//                     title={"Dept. Elective-III(Minor in IOT/AI)"}
//                     L={"X"}
//                     T={"X"}
//                     P={"X"}
//                     cred={"3"}
//                     url="https://web.nitp.ac.in/dept/cse/syllabus/syllabus_btech_2021_onwards/CS74XXX_Dept. Elective-I.docx"
//                 />
//                 <SyllabusComp
//                     dep={"CSUG"}
//                     sem={"7"}
//                     code={"CS74XXX"}
//                     title={"Dept. Elective-IV"}
//                     L={"X"}
//                     T={"X"}
//                     P={"X"}
//                     cred={"3"}
//                     url="https://web.nitp.ac.in/dept/cse/syllabus/syllabus_btech_2021_onwards/CS74XXX_Dept. Elective-II.docx"
//                 />
//                 <SyllabusComp
//                     dep={"CSUG"}
//                     sem={"7"}
//                     code={"OP74XXX"}
//                     title={"MOOC"}
//                     L={"X"}
//                     T={"X"}
//                     P={"X"}
//                     cred={"3"}
//                     url="https://web.nitp.ac.in/dept/cse/syllabus/syllabus_btech_2021_onwards/OP74XXX_MOOC.docx"
//                 />
//                 <SyllabusComp
//                     dep={"CSUG"}
//                     sem={"7"}
//                     code={"CS74124"}
//                     title={"Research Project-I"}
//                     L={"0"}
//                     T={"0"}
//                     P={"8"}
//                     cred={"4"}
//                     url="https://web.nitp.ac.in/dept/cse/syllabus/syllabus_btech_2021_onwards/CS74124_Research Project-I.docx"
//                 />
//                 <SyllabusComp
//                     dep={"CSUG"}
//                     sem={"7"}
//                     code={"CS74124"}
//                     title={"Industrial Training"}
//                     L={"X"}
//                     T={"X"}
//                     P={"X"}
//                     cred={"2"}
//                     url="https://web.nitp.ac.in/dept/cse/syllabus/syllabus_btech_2021_onwards/CS74124_Research Project-I.docx"
//                 />
//                 <SyllabusComp
//                     dep={"CSUG"}
//                     sem={"7"}
//                     code={"CS74125"}
//                     title={"Research Seminar"}
//                     L={"X"}
//                     T={"X"}
//                     P={"4"}
//                     cred={"2"}
//                     url="https://web.nitp.ac.in/dept/cse/syllabus/syllabus_btech_2021_onwards/CS74125_Research Seminar.docx"
//                 />
//                 <SyllabusComp
//                     dep={"CSUG"}
//                     sem={"8"}
//                     code={"CS84126"}
//                     title={"Research Project-II*"}
//                     L={"0"}
//                     T={"0"}
//                     P={"36"}
//                     cred={"18"}
//                     url="https://web.nitp.ac.in/dept/cse/syllabus/syllabus_btech_2021_onwards/CS84126_Research Project-II*.docx"
//                 />
//                 <SyllabusComp
//                     dep={"CSUG"}
//                     sem={"8"}
//                     code={"CS84126"}
//                     title={"Comprehensive Viva-Voce"}
//                     L={"X"}
//                     T={"X"}
//                     P={"X"}
//                     cred={"2"}
//                     url="https://web.nitp.ac.in/dept/cse/syllabus/syllabus_btech_2021_onwards/CS84126_Research Project-II*.docx"
//                 />

//                 <SyllabusComp
//                     dep={"CSUG"}
//                     sem={"EL-1"}
//                     code={"CSX4145"}
//                     title={"Distributed Database Systems"}
//                     L={"3"}
//                     T={"0"}
//                     P={"0"}
//                     cred={"3"}
//                     url="https://docs.google.com/document/d/1UT831fVhjIyUsZe3l6pWpKCXVemCMzjQ/edit?usp=drivesdk&ouid=104039714947486577983&rtpof=true&sd=true"
//                 />
//                 <SyllabusComp
//                     dep={"CSUG"}
//                     sem={"EL-1"}
//                     code={"CSX4146"}
//                     title={"Operations Research"}
//                     L={"3"}
//                     T={"0"}
//                     P={"0"}
//                     cred={"3"}
//                     url="https://docs.google.com/document/d/1cNE2-cXbSJl8W0rso0OVIBc6S89gk_sY/edit?usp=drivesdk&ouid=104039714947486577983&rtpof=true&sd=true"
//                 />
//                 <SyllabusComp
//                     dep={"CSUG"}
//                     sem={"EL-1"}
//                     code={"CSX4147"}
//                     title={"Digital Image Processing"}
//                     L={"3"}
//                     T={"0"}
//                     P={"0"}
//                     cred={"3"}
//                     url="https://docs.google.com/document/d/1K_l1l1wrO_DBsyvvyCVk8v2_HgijVnwb/edit?usp=drivesdk&ouid=104039714947486577983&rtpof=true&sd=true"
//                 />
//                 <SyllabusComp
//                     dep={"CSUG"}
//                     sem={"EL-1"}
//                     code={"CSX4148"}
//                     title={"Intrusion Detection"}
//                     L={"2"}
//                     T={"0"}
//                     P={"2"}
//                     cred={"3"}
//                     url="https://docs.google.com/document/d/1zPPl_dHa130Y6-ckIhBXHyB1zd53LbwI/edit?usp=drivesdk&ouid=104039714947486577983&rtpof=true&sd=true"
//                 />
//                 <SyllabusComp
//                     dep={"CSUG"}
//                     sem={"EL-1"}
//                     code={"CSX4149"}
//                     title={"Real Time Systems"}
//                     L={"3"}
//                     T={"0"}
//                     P={"0"}
//                     cred={"3"}
//                     url="https://docs.google.com/document/d/15UCcuLZ9BKh75prfIZa18-o4IqePTi_b/edit?usp=drivesdk&ouid=104039714947486577983&rtpof=true&sd=true"
//                 />
//                 <SyllabusComp
//                     dep={"CSUG"}
//                     sem={"EL-1"}
//                     code={"CSX4150"}
//                     title={"Computer Vision"}
//                     L={"3"}
//                     T={"0"}
//                     P={"0"}
//                     cred={"3"}
//                     url={"https://docs.google.com/document/d/1oEu1gtW-nXzR3lJaAwf-AegjY3N0VQ9G/edit?usp=drivesdk&ouid=104039714947486577983&rtpof=true&sd=true"}
//                 />
//                 <SyllabusComp
//                     dep={"CSUG"}
//                     sem={"EL-1"}
//                     code={"CSX4151"}
//                     title={"Social Networks"}
//                     L={"3"}
//                     T={"0"}
//                     P={"0"}
//                     cred={"3"}
//                     url={"https://docs.google.com/document/d/1iEeNbXDwGOkuOk6SQ8vNRBcQIBhc7t_9/edit?usp=drivesdk&ouid=104039714947486577983&rtpof=true&sd=true"}
//                 />
//                 <SyllabusComp
//                     dep={"CSUG"}
//                     sem={"EL-1"}
//                     code={"CSX4152"}
//                     title={"Big Data Analytics"}
//                     L={"2"}
//                     T={"0"}
//                     P={"2"}
//                     cred={"3"}
//                     url={"https://docs.google.com/document/d/1t3oj_TniTbM771tB-nuXE3EbWZ9c5yom/edit?usp=drivesdk&ouid=104039714947486577983&rtpof=true&sd=true"}
//                 />
//                 <SyllabusComp
//                     dep={"CSUG"}
//                     sem={"EL-1"}
//                     code={"CSX4153"}
//                     title={"Network Security"}
//                     L={"2"}
//                     T={"0"}
//                     P={"2"}
//                     cred={"3"}
//                     url={"https://docs.google.com/document/d/19_1MGDaeU2VYUIjun38xXHaafzgM2pkN/edit?usp=drivesdk&ouid=104039714947486577983&rtpof=true&sd=true"}
//                 />
//                 <SyllabusComp
//                     dep={"CSUG"}
//                     sem={"EL-1"}
//                     code={"CSX4154"}
//                     title={"Object Oriented Systems Development"}
//                     L={"3"}
//                     T={"0"}
//                     P={"0"}
//                     cred={"3"}
//                     url={"https://docs.google.com/document/d/1ly06huRq_UrYy4jWaP-y8AwmxYwQRo2L/edit?usp=drivesdk&ouid=104039714947486577983&rtpof=true&sd=true"}
//                 />
//                 <SyllabusComp
//                     dep={"CSUG"}
//                     sem={"EL-1"}
//                     code={"CSX4155"}
//                     title={"Computer Graphics"}
//                     L={"3"}
//                     T={"0"}
//                     P={"0"}
//                     cred={"3"}
//                     url={"https://docs.google.com/document/d/1lDTPYrdRtm8p_ijcu4p__Xq0NmVdaspi/edit?usp=drivesdk&ouid=104039714947486577983&rtpof=true&sd=true"}
//                 />
//                 <SyllabusComp
//                     dep={"CSUG"}
//                     sem={"EL-1"}
//                     code={"CSX4156"}
//                     title={"Malware Analysis"}
//                     L={"2"}
//                     T={"0"}
//                     P={"2"}
//                     cred={"3"}
//                     url={"https://docs.google.com/document/d/1T11iSkwOfgEz0wMdz5HABmYqjU654X90/edit?usp=drivesdk&ouid=104039714947486577983&rtpof=true&sd=true"}
//                 />
//                 <SyllabusComp
//                     dep={"CSUG"}
//                     sem={"EL-1"}
//                     code={"CSX4157"}
//                     title={"Microprocessor and Microcontrollers"}
//                     L={"3"}
//                     T={"0"}
//                     P={"0"}
//                     cred={"3"}
//                     url={"https://docs.google.com/document/d/1KwsxSnwwpEQWJMY9Na12jajzibjIIzky/edit?usp=drivesdk&ouid=104039714947486577983&rtpof=true&sd=true"}
//                 />
//                 <SyllabusComp
//                     dep={"CSUG"}
//                     sem={"EL-1"}
//                     code={"CSX4158"}
//                     title={"Distributed Systems"}
//                     L={"3"}
//                     T={"0"}
//                     P={"0"}
//                     cred={"3"}
//                     url={"https://docs.google.com/document/d/1LiFkNXO8jQTf2KYAZaAlCyv3rNYDfy26/edit?usp=drivesdk&ouid=104039714947486577983&rtpof=true&sd=true"}
//                 />
//                 <SyllabusComp
//                     dep={"CSUG"}
//                     sem={"EL-1"}
//                     code={"CSX4159"}
//                     title={"Virtual Reality"}
//                     L={"3"}
//                     T={"0"}
//                     P={"0"}
//                     cred={"3"}
//                     url={"https://docs.google.com/document/d/1vSnCcEonJL00z3o2-UlPu_NfHq2lLnTz/edit?usp=drivesdk&ouid=104039714947486577983&rtpof=true&sd=true"}
//                 />
//                 <SyllabusComp
//                     dep={"CSUG"}
//                     sem={"EL-1"}
//                     code={"CSX4160"}
//                     title={"Intellectual Property Rights"}
//                     L={"3"}
//                     T={"0"}
//                     P={"0"}
//                     cred={"3"}
//                     url={"https://drive.google.com/file/d/1L70hxedl6t4xmd9P8zsG_7Ryrb6MevTk/view?usp=drivesdk"}
//                 />
//                 <SyllabusComp
//                     dep={"CSUG"}
//                     sem={"EL-1"}
//                     code={"CSX4161"}
//                     title={"Blockchain Technology"}
//                     L={"3"}
//                     T={"0"}
//                     P={"0"}
//                     cred={"3"}
//                     url={"https://docs.google.com/document/d/1UyN_bU0DMuVPHvDyr_2UrB8kqDZkxwub/edit?usp=drivesdk&ouid=104039714947486577983&rtpof=true&sd=true"}
//                 />
//                 <SyllabusComp
//                     dep={"CSUG"}
//                     sem={"EL-1"}
//                     code={"CSX4162"}
//                     title={"Biometrics"}
//                     L={"3"}
//                     T={"0"}
//                     P={"0"}
//                     cred={"3"}
//                     url={"https://docs.google.com/document/d/1ur8vVSqbGwu5RS9YMu6pE3wjnm-HXROA/edit?usp=drivesdk&ouid=104039714947486577983&rtpof=true&sd=true"}
//                 />
//                 <SyllabusComp
//                     dep={"CSUG"}
//                     sem={"EL-1"}
//                     code={"CSX4163"}
//                     title={"Recommendation Systems"}
//                     L={"3"}
//                     T={"0"}
//                     P={"0"}
//                     cred={"3"}
//                     url={"https://docs.google.com/document/d/105pi7YPY8CkNO1njfBe5KgH3zzrXBUwb/edit?usp=drivesdk&ouid=104039714947486577983&rtpof=true&sd=true"}
//                 />
//                 <SyllabusComp
//                     dep={"CSUG"}
//                     sem={"EL-1"}
//                     code={"CSX4164"}
//                     title={"Computer System Parallelism"}
//                     L={"3"}
//                     T={"0"}
//                     P={"0"}
//                     cred={"3"}
//                     url={"https://docs.google.com/document/d/1XqdEK8pepC7wFRpYYIB5GT24GIsBJZTr/edit?usp=drivesdk&ouid=104039714947486577983&rtpof=true&sd=true"}
//                 />
//                 <SyllabusComp
//                     dep={"CSUG"}
//                     sem={"EL-1"}
//                     code={"CSX4165"}
//                     title={"Advanced Algorithms"}
//                     L={"3"}
//                     T={"0"}
//                     P={"0"}
//                     cred={"3"}
//                     url={"https://docs.google.com/document/d/1OqWUN2btOoQrBZM8JEaXp1T5nI_lFi7p/edit?usp=drivesdk&ouid=104039714947486577983&rtpof=true&sd=true"}
//                 />
//                 <SyllabusComp
//                     dep={"CSUG"}
//                     sem={"EL-1"}
//                     code={"CSX4166"}
//                     title={"File System Forensic"}
//                     L={"2"}
//                     T={"0"}
//                     P={"2"}
//                     cred={"3"}
//                     url={"https://docs.google.com/document/d/1AbqoGx_ahtV9pmrhJIV92f68iPdibwZD/edit?usp=drivesdk&ouid=104039714947486577983&rtpof=true&sd=true"}
//                 />
//                 <SyllabusComp
//                     dep={"CSUG"}
//                     sem={"EL-1"}
//                     code={"CSX4167"}
//                     title={"Distributed Operating Systems"}
//                     L={"3"}
//                     T={"0"}
//                     P={"0"}
//                     cred={"3"}
//                     url={"https://docs.google.com/document/d/1PTo6KVDnQ430tEqOwhHdIj9AubCEIHj2/edit?usp=drivesdk&ouid=104039714947486577983&rtpof=true&sd=true"}
//                 />
//                 <SyllabusComp
//                     dep={"CSUG"}
//                     sem={"EL-2"}
//                     code={"CSX4171"}
//                     title={"Adversarial ML"}
//                     L={"3"}
//                     T={"0"}
//                     P={"0"}
//                     cred={"3"}
//                     url={"https://docs.google.com/document/d/1fvWBfhadpvQYblqKpgl9byemBDg4p63a/edit?usp=drivesdk&ouid=104039714947486577983&rtpof=true&sd=true"}
//                 />
//                 <SyllabusComp
//                     dep={"CSUG"}
//                     sem={"EL-2"}
//                     code={"CSX4172"}
//                     title={"Digital Signal Processing"}
//                     L={"3"}
//                     T={"0"}
//                     P={"0"}
//                     cred={"3"}
//                     url={<a target="_blank" rel="noopener noreferrer" href="https://docs.google.com/document/d/1eRVDb2Xk-9xKQ-d-jrhG-RoS2ncqLNHy/edit?usp=drivesdk&ouid=104039714947486577983&rtpof=true&sd=true">Digital Signal Processing  </a>}
//                 />
//                 <SyllabusComp
//                     dep={"CSUG"}
//                     sem={"EL-2"}
//                     code={"CSX4173"}
//                     title={"IOT Systems"}
//                     L={"2"}
//                     T={"0"}
//                     P={"2"}
//                     cred={"3"}
//                     url={<a target="_blank" rel="noopener noreferrer" href="https://docs.google.com/document/d/1FeXhUNTuhy00xR6O7Lb4lT8HujEZ1Xf9/edit?usp=drivesdk&ouid=104039714947486577983&rtpof=true&sd=true">IOT Systems </a>}
//                 />
//                 <SyllabusComp
//                     dep={"CSUG"}
//                     sem={"EL-2"}
//                     code={"CSX4174"}
//                     title={"Nature Inspired Computing"}
//                     L={"3"}
//                     T={"0"}
//                     P={"0"}
//                     cred={"3"}
//                     url={<a href="https://docs.google.com/document/d/1hh0DxVx7nsPHUENa4KuZtmnv3d6z1l6z/edit?usp=drivesdk&ouid=104039714947486577983&rtpof=true&sd=true" target="_blank" rel="noopener noreferrer">Nature Inspired Computing</a>}
//                 />
//                 <SyllabusComp
//                     dep={"CSUG"}
//                     sem={"EL-2"}
//                     code={"CSX4175"}
//                     title={"Image Processing Techniques"}
//                     L={"3"}
//                     T={"0"}
//                     P={"0"}
//                     cred={"3"}
//                     url={<a href="https://docs.google.com/document/d/16YSqGw-vLtKtIx_1rNURE1AcqDo5sgoL/edit?usp=drivesdk&ouid=104039714947486577983&rtpof=true&sd=true" target="_blank" rel="noopener noreferrer">Image Processing Techniques</a>}
//                 />
//                 <SyllabusComp
//                     dep={"CSUG"}
//                     sem={"EL-2"}
//                     code={"CSX4176"}
//                     title={"Bioinformatics"}
//                     L={"2"}
//                     T={"0"}
//                     P={"2"}
//                     cred={"3"}
//                     url={<a target="_blank" rel="noopener noreferrer" href="https://docs.google.com/document/d/1xlv-BqAUYBPlIRaFZa62SDlgQrSTOuGY/edit?usp=drivesdk&ouid=104039714947486577983&rtpof=true&sd=true">Bioinformatics</a>}
//                 />
//                 <SyllabusComp
//                     dep={"CSUG"}
//                     sem={"EL-2"}
//                     code={"CSX4177"}
//                     title={"Information Retrieval"}
//                     L={"2"}
//                     T={"0"}
//                     P={"2"}
//                     cred={"3"}
//                     url="https://docs.google.com/document/d/1bj4cu3ovgTJY8cZsC7TwESlHmHdFSpBy/edit?usp=drivesdk&ouid=104039714947486577983&rtpof=true&sd=true"
//                 />
//                 <SyllabusComp
//                     dep={"CSUG"}
//                     sem={"EL-2"}
//                     code={"CSX4178"}
//                     title={"Computer Vision"}
//                     L={"3"}
//                     T={"0"}
//                     P={"0"}
//                     cred={"3"}
//                     url="https://docs.google.com/document/d/1jIxJGlHgy0Xd4DsAuikQHkN6GOMF56UH/edit?usp=drivesdk&ouid=104039714947486577983&rtpof=true&sd=true"
//                 />
//                 <SyllabusComp
//                     dep={"CSUG"}
//                     sem={"EL-2"}
//                     code={"CSX4179"}
//                     title={"Reinforcement Learning"}
//                     L={"2"}
//                     T={"0"}
//                     P={"2"}
//                     cred={"3"}
//                     url="https://docs.google.com/document/d/1g4rSw94mXuCmF4l1GAYgWrkq53bjNhPM/edit?usp=drivesdk&ouid=104039714947486577983&rtpof=true&sd=true"
//                 />
//                 <SyllabusComp
//                     dep={"CSUG"}
//                     sem={"EL-2"}
//                     code={"CSX4180"}
//                     title={"Social Networks"}
//                     L={"2"}
//                     T={"0"}
//                     P={"2"}
//                     cred={"3"}
//                     url="https://docs.google.com/document/d/1aDU9S1IGyWe6XIJ4dOMmYJebbMaHAeT5/edit?usp=drivesdk&ouid=104039714947486577983&rtpof=true&sd=true"
//                 />
//                 <SyllabusComp
//                     dep={"CSUG"}
//                     sem={"EL-2"}
//                     code={"CSX4181"}
//                     title={"Recommendation Systems"}
//                     L={"3"}
//                     T={"0"}
//                     P={"0"}
//                     cred={"3"}
//                     url="https://docs.google.com/document/d/1I3ulbGdcgKDVORx-lcO_svyrVaL9EEJi/edit?usp=drivesdk&ouid=104039714947486577983&rtpof=true&sd=true"
//                 />
//                 <SyllabusComp
//                     dep={"CSUG"}
//                     sem={"EL-2"}
//                     code={"CSX4182"}
//                     title={"Speech Processing"}
//                     L={"2"}
//                     T={"0"}
//                     P={"2"}
//                     cred={"3"}
//                     url="https://docs.google.com/document/d/1BkTFsrxDU9jsh55XpJTRzssZasqSkNF8/edit?usp=drivesdk&ouid=104039714947486577983&rtpof=true&sd=true"
//                 />
//                 <SyllabusComp
//                     dep={"CSUG"}
//                     sem={"EL-2"}
//                     code={"CSX4183"}
//                     title={"Malware Analysis"}
//                     L={"2"}
//                     T={"0"}
//                     P={"2"}
//                     cred={"3"}
//                     url="https://docs.google.com/document/d/1LZXyIHNcXeZZnrjn5UzoTsRfYat_TLkt/edit?usp=drivesdk&ouid=104039714947486577983&rtpof=true&sd=true"
//                 />
//                 <SyllabusComp
//                     dep={"CSUG"}
//                     sem={"EL-2"}
//                     code={"CSX4184"}
//                     title={"Network Security"}
//                     L={"2"}
//                     T={"0"}
//                     P={"2"}
//                     cred={"3"}
//                     url="https://docs.google.com/document/d/1kph2cxMA8O4Adv5mHpQnxrn7qF48aKig/edit?usp=drivesdk&ouid=104039714947486577983&rtpof=true&sd=true"
//                 />
//                 <SyllabusComp
//                     dep={"CSUG"}
//                     sem={"EL-2"}
//                     code={"CSX4185"}
//                     title={"Intrusion Detection"}
//                     L={"2"}
//                     T={"0"}
//                     P={"2"}
//                     cred={"3"}
//                     url="https://docs.google.com/document/d/1j_aWjuSZq2gFh9mjKE6C4_dDANIB4DVy/edit?usp=drivesdk&ouid=104039714947486577983&rtpof=true&sd=true"
//                 />
//                 <SyllabusComp
//                     dep={"CSUG"}
//                     sem={"EL-2"}
//                     code={"CSX4186"}
//                     title={"Time Series Analysis"}
//                     L={"2"}
//                     T={"0"}
//                     P={"2"}
//                     cred={"3"}
//                     url="https://docs.google.com/document/d/1zUkjkZguY2zFNqkqfShVTEFXYtf-fYMh/edit?usp=drivesdk&ouid=104039714947486577983&rtpof=true&sd=true"
//                 />
//                 <SyllabusComp
//                     dep={"CSUG"}
//                     sem={"EL-2"}
//                     code={"CSX4187"}
//                     title={"Big Data Analytics"}
//                     L={"2"}
//                     T={"0"}
//                     P={"2"}
//                     cred={"3"}
//                     url="https://docs.google.com/document/d/13yi8DEGBwC5j7DsPxAHQOJSEoMTNlifN/edit?usp=drivesdk&ouid=104039714947486577983&rtpof=true&sd=true"
//                 />
//                 <SyllabusComp
//                     dep={"CSUG"}
//                     sem={"EL-2"}
//                     code={"CSX4188"}
//                     title={"Multimedia Systems"}
//                     L={"3"}
//                     T={"0"}
//                     P={"0"}
//                     cred={"3"}
//                     url={"https://docs.google.com/document/d/122rqrtsk0HqkFPQTMbkAMI1LpUKb4Zdw/edit?usp=drivesdk&ouid=104039714947486577983&rtpof=true&sd=true"}
//                 />
//                 <SyllabusComp
//                     dep={"CSUG"}
//                     sem={"EL-2"}
//                     code={"CSX4189"}
//                     title={"Biometric Security"}
//                     L={"3"}
//                     T={"0"}
//                     P={"0"}
//                     cred={"3"}
//                     url="https://docs.google.com/document/d/1HTPEOy1xAhLCqPNQsa7OafPBYLoyDqeM/edit?usp=drivesdk&ouid=104039714947486577983&rtpof=true&sd=true"
//                 />
//                 <SyllabusComp
//                     dep={"CSUG"}
//                     sem={"EL-2"}
//                     code={"CSX4190"}
//                     title={"Federated Learning"}
//                     L={"3"}
//                     T={"0"}
//                     P={"0"}
//                     cred={"3"}
//                     url="https://docs.google.com/document/d/1X8wmagqNjR9JkjdBUYhwulTHZJ9zbSdW/edit?usp=drivesdk&ouid=104039714947486577983&rtpof=true&sd=true"
//                 />{/**2 */}
//                 <SyllabusComp
//                     dep={"CSUG"}
//                     sem={"EL-2"}
//                     code={"HSXXXXX"}
//                     title={"Intellectual Property Rights"}
//                     L={"3"}
//                     T={"0"}
//                     P={"0"}
//                     cred={"3"}
//                     url="https://drive.google.com/file/d/1L70hxedl6t4xmd9P8zsG_7Ryrb6MevTk/view?usp=drivesdk"
//                 />
//                 <SyllabusComp
//                     dep={"CSUG"}
//                     sem={"EL-3"}
//                     code={"CSX4201"}
//                     title={"Adversarial ML"}
//                     L={"3"}
//                     T={"0"}
//                     P={"0"}
//                     cred={"3"}
//                     url="https://docs.google.com/document/d/1qw8A1ozOk4pA-P-XXkN2y-Rt-rVkvd29/edit?usp=drivesdk&ouid=104039714947486577983&rtpof=true&sd=true"
//                 />
//                 <SyllabusComp
//                     dep={"CSUG"}
//                     sem={"EL-3"}
//                     code={"CSX4202"}
//                     title={"Deep Learning Algorithms"}
//                     L={"2"}
//                     T={"0"}
//                     P={"2"}
//                     cred={"3"}
//                     url="https://docs.google.com/document/d/1OoM_FihORG_5DdhTXGXIjOEfGxIUB3Z1/edit?usp=drivesdk&ouid=104039714947486577983&rtpof=true&sd=true"
//                 />
//                 <SyllabusComp
//                     dep={"CSUG"}
//                     sem={"EL-3"}
//                     code={"CSX4203"}
//                     title={"Mathematical Foundations for Information Security"}
//                     L={"3"}
//                     T={"0"}
//                     P={"0"}
//                     cred={"3"}
//                     url="https://docs.google.com/document/d/1YCa2aWQ1m4dcDCTQmMGk7xS1Ip1KIikq/edit?usp=drivesdk&ouid=104039714947486577983&rtpof=true&sd=true"
//                 />
//                 <SyllabusComp
//                     dep={"CSUG"}
//                     sem={"EL-3"}
//                     code={"CSX4204"}
//                     title={"Information Theory and Coding"}
//                     L={"3"}
//                     T={"0"}
//                     P={"0"}
//                     cred={"3"}
//                     url="https://docs.google.com/document/d/1wzHoA3vaNEt2nQxb2bpy73JglkMjPraE/edit?usp=drivesdk&ouid=104039714947486577983&rtpof=true&sd=true"
//                 />
//                 <SyllabusComp
//                     dep={"CSUG"}
//                     sem={"EL-3"}
//                     code={"CSX4205"}
//                     title={"Wireless & Mobile Security"}
//                     L={"3"}
//                     T={"0"}
//                     P={"0"}
//                     cred={"3"}
//                     url="https://docs.google.com/document/d/1KrxsgH6-7wSHGfCFikmfGuH2Ae1X4SNM/edit?usp=drivesdk&ouid=104039714947486577983&rtpof=true&sd=true"
//                 />
//                 <SyllabusComp
//                     dep={"CSUG"}
//                     sem={"EL-3"}
//                     code={"CSX4206"}
//                     title={"Image Processing Techniques"}
//                     L={"3"}
//                     T={"0"}
//                     P={"0"}
//                     cred={"3"}
//                     url="https://docs.google.com/document/d/1DB9-s0MN8OH7ISsDrBfWV3UUxQsdR9Ha/edit?usp=drivesdk&ouid=104039714947486577983&rtpof=true&sd=true"
//                 />
//                 <SyllabusComp
//                     dep={"CSUG"}
//                     sem={"EL-3"}
//                     code={"CSX4207"}
//                     title={"Cyber Security"}
//                     L={"3"}
//                     T={"0"}
//                     P={"0"}
//                     cred={"3"}
//                     url="https://docs.google.com/document/d/1TRNffZAZ0S5rr4A9Xaza4CwWSmzQYd5Z/edit?usp=drivesdk&ouid=104039714947486577983&rtpof=true&sd=true"
//                 />
//                 <SyllabusComp
//                     dep={"CSUG"}
//                     sem={"EL-3"}
//                     code={"CSX4208"}
//                     title={"Multimedia System"}
//                     L={"3"}
//                     T={"0"}
//                     P={"0"}
//                     cred={"3"}
//                     url={"https://docs.google.com/document/d/1gtNFHqUJI1DwJ_raa9qeMSTcOrhGF63j/edit?usp=drivesdk&ouid=104039714947486577983&rtpof=true&sd=true"}
//                 />
//                 <SyllabusComp
//                     dep={"CSUG"}
//                     sem={"EL-3"}
//                     code={"CSX4209"}
//                     title={"Computer Vision"}
//                     L={"3"}
//                     T={"0"}
//                     P={"0"}
//                     cred={"3"}
//                     url={"https://docs.google.com/document/d/1b8O5QYvkLmBZBnbcGDpdPOs-EGg_uHg9/edit?usp=drivesdk&ouid=104039714947486577983&rtpof=true&sd=true"}
//                 />
//                 <SyllabusComp
//                     dep={"CSUG"}
//                     sem={"EL-3"}
//                     code={"CSX4210"}
//                     title={"Big Data Analytics"}
//                     L={"2"}
//                     T={"0"}
//                     P={"2"}
//                     cred={"3"}
//                     url={"https://docs.google.com/document/d/1DumEmxy35fRho1Tsv3ARwikpGgL6m3pi/edit?usp=drivesdk&ouid=104039714947486577983&rtpof=true&sd=true"}
//                 />
//                 <SyllabusComp
//                     dep={"CSUG"}
//                     sem={"EL-3"}
//                     code={"CSX4211"}
//                     title={"Cloud Computing Security"}
//                     L={"3"}
//                     T={"0"}
//                     P={"0"}
//                     cred={"3"}
//                     url={"https://docs.google.com/document/d/1PrKknHMAn9vyGW5MjbFHAiGkQmTW6B4-/edit?usp=drivesdk&ouid=104039714947486577983&rtpof=true&sd=true"}
//                 />
//                 <SyllabusComp
//                     dep={"CSUG"}
//                     sem={"EL-3"}
//                     code={"CSX4212"}
//                     title={"Biometric Security"}
//                     L={"3"}
//                     T={"0"}
//                     P={"0"}
//                     cred={"3"}
//                     url={"https://docs.google.com/document/d/1FWXJaDdh7a9giVQV3cglTn7fjGrd-55b/edit?usp=drivesdk&ouid=104039714947486577983&rtpof=true&sd=true"}
//                 />
//                 <SyllabusComp
//                     dep={"CSUG"}
//                     sem={"EL-3"}
//                     code={"CSX4213"}
//                     title={"Ethical Hacking"}
//                     L={"2"}
//                     T={"0"}
//                     P={"2"}
//                     cred={"3"}
//                     url={"https://docs.google.com/document/d/1Rjgzyoy5TwEuCfzveMHK2fqRYWqtwziW/edit?usp=drivesdk&ouid=104039714947486577983&rtpof=true&sd=true"}
//                 />
//                 <SyllabusComp
//                     dep={"CSUG"}
//                     sem={"EL-3"}
//                     code={"CSX4214"}
//                     title={"Blockchain Technology"}
//                     L={"3"}
//                     T={"0"}
//                     P={"0"}
//                     cred={"3"}
//                     url={"https://docs.google.com/document/d/1KvIa73OND-T1RtDHldxuhOt__DzzBwV9/edit?usp=drivesdk&ouid=104039714947486577983&rtpof=true&sd=true"}
//                 />
//                 <SyllabusComp
//                     dep={"CSUG"}
//                     sem={"EL-3"}
//                     code={"CSX4215"}
//                     title={"Cyber laws and rights"}
//                     L={"3"}
//                     T={"0"}
//                     P={"0"}
//                     cred={"3"}
//                     url={"https://docs.google.com/document/d/1iMK09GuiMICZUcotOqSPbGHPbE-FdJK-/edit?usp=drivesdk&ouid=104039714947486577983&rtpof=true&sd=true"}
//                 />
//                 <SyllabusComp
//                     dep={"CSUG"}
//                     sem={"EL-3"}
//                     code={"CSX4216"}
//                     title={"Digital Watermarking and Steganography"}
//                     L={"3"}
//                     T={"0"}
//                     P={"0"}
//                     cred={"3"}
//                     url={"https://docs.google.com/document/d/1CJLXTzXrQ9vvCPH9GyzPbho1ihK9q9QI/edit?usp=drivesdk&ouid=104039714947486577983&rtpof=true&sd=true"}
//                 />
//                 <SyllabusComp
//                     dep={"CSUG"}
//                     sem={"EL-3"}
//                     code={"CSX4217"}
//                     title={"Privacy and Security for Online Social Networks"}
//                     L={"3"}
//                     T={"0"}
//                     P={"0"}
//                     cred={"3"}
//                     url={"https://docs.google.com/document/d/1PsU0CQ_iMXU9mI-BnApJxjWUsgybdoXs/edit?usp=drivesdk&ouid=104039714947486577983&rtpof=true&sd=true"}
//                 />
//                 <SyllabusComp
//                     dep={"CSUG"}
//                     sem={"EL-3"}
//                     code={"CSX4218"}
//                     title={"Malware Analysis"}
//                     L={"2"}
//                     T={"0"}
//                     P={"2"}
//                     cred={"3"}
//                     url={"https://docs.google.com/document/d/1EKkRqKWa5CxN4sr4nKxswTsl0RZ3jDkG/edit?usp=drivesdk&ouid=104039714947486577983&rtpof=true&sd=true"}
//                 />
//                 <SyllabusComp
//                     dep={"CSUG"}
//                     sem={"EL-3"}
//                     code={"CSX4219"}
//                     title={"Soft Computing"}
//                     L={"3"}
//                     T={"0"}
//                     P={"0"}
//                     cred={"3"}
//                     url={"https://docs.google.com/document/d/1ojdWdCBoxCIv7HsuYvLBoXQzk7edK-6G/edit?usp=drivesdk&ouid=104039714947486577983&rtpof=true&sd=true"}
//                 />
//                 <SyllabusComp
//                     dep={"CSUG"}
//                     sem={"EL-3"}
//                     code={"CSX4220"}
//                     title={"Ubiquitous Computing"}
//                     L={"3"}
//                     T={"0"}
//                     P={"0"}
//                     cred={"3"}
//                     url={"https://docs.google.com/document/d/1UmaxXOo3hW61h5UVFBGvwxfTkiODVZp_/edit?usp=drivesdk&ouid=104039714947486577983&rtpof=true&sd=true"}
//                 />
//                 <SyllabusComp
//                     dep={"CSUG"}
//                     sem={"EL-3"}
//                     code={"CSX4221"}
//                     title={"Embedded System and Hardware Security"}
//                     L={"3"}
//                     T={"0"}
//                     P={"0"}
//                     cred={"3"}
//                     url={"https://docs.google.com/document/d/122zC40rfbbbO38n09raxh6B8BDGUocJx/edit?usp=drivesdk&ouid=104039714947486577983&rtpof=true&sd=true"}
//                 />
//                 <SyllabusComp
//                     dep={"CSUG"}
//                     sem={"EL-3"}
//                     code={"CSX4222"}
//                     title={"Distributed System Design"}
//                     L={"3"}
//                     T={"0"}
//                     P={"0"}
//                     cred={"3"}
//                     url={"https://docs.google.com/document/d/1oEopeGbsQXEC14BUPcAYL-utLKNXHxuN/edit?usp=drivesdk&ouid=104039714947486577983&rtpof=true&sd=true"}
//                 />
//                 <SyllabusComp
//                     dep={"CSUG"}
//                     sem={"EL-3"}
//                     code={"CSX4223"}
//                     title={"Software Defined Networks"}
//                     L={"3"}
//                     T={"0"}
//                     P={"0"}
//                     cred={"3"}
//                     url={"https://docs.google.com/document/d/1ZpHH4GDSw1Qe5-81udosax9KOMmpqiSl/edit?usp=drivesdk&ouid=104039714947486577983&rtpof=true&sd=true"}
//                 />
//                 <SyllabusComp
//                     dep={"CSUG"}
//                     sem={"EL-3"}
//                     code={"CSX4224"}
//                     title={"Secure Software Systems"}
//                     L={"2"}
//                     T={"0"}
//                     P={"2"}
//                     cred={"3"}
//                     url={"https://docs.google.com/document/d/1h7BMZnsPjcH7qLSB-wLcnFpHn_b3z0pD/edit?usp=drivesdk&ouid=104039714947486577983&rtpof=true&sd=true"}
//                 />
//                 <SyllabusComp
//                     dep={"CSUG"}
//                     sem={"EL-3"}
//                     code={"CSX4225"}
//                     title={"Pattern Recognition Technique"}
//                     L={"2"}
//                     T={"0"}
//                     P={"2"}
//                     cred={"3"}
//                     url={"https://docs.google.com/document/d/1EarYN-13cr-Dwi016WuMBiUXrTDDAIaX/edit?usp=drivesdk&ouid=104039714947486577983&rtpof=true&sd=true"}
//                 />
//                 <SyllabusComp
//                     dep={"CSUG"}
//                     sem={"EL-3"}
//                     code={"CSX4226"}
//                     title={"Natural Language Processing Technique"}
//                     L={"2"}
//                     T={"0"}
//                     P={"2"}
//                     cred={"3"}
//                     url={"https://docs.google.com/document/d/1-CoaNa5HHaf3DjZLcyAmg3Axk0g1Awlv/edit?usp=drivesdk&ouid=104039714947486577983&rtpof=true&sd=true"}
//                 />
//                 <SyllabusComp
//                     dep={"CSUG"}
//                     sem={"EL-3"}
//                     code={"CSX4227"}
//                     title={"Data Visualization"}
//                     L={"2"}
//                     T={"0"}
//                     P={"2"}
//                     cred={"3"}
//                     url={"https://docs.google.com/document/d/1QaqhoiVuzIQTvIQkdp2Wu-3UhOGDNvdE/edit?usp=drivesdk&ouid=104039714947486577983&rtpof=true&sd=true"}
//                 />
//                 <SyllabusComp
//                     dep={"CSUG"}
//                     sem={"EL-3"}
//                     code={"HSXXXXX"}
//                     title={"Intellectual Property Rights"}
//                     L={"3"}
//                     T={"0"}
//                     P={"0"}
//                     cred={"3"}
//                     url={"https://drive.google.com/file/d/1L70hxedl6t4xmd9P8zsG_7Ryrb6MevTk/view?usp=drivesdk"}
//                 />
//             </div>
//         </div>
//     );
// };

// const DualCSyllabus = () => {
//     return (
//         <div className="w-full mb-10 overflow-x-auto">
//             <div className="min-w-[1000px] border">
//                 <div className="grid grid-cols-12 bg-gray-100 font-semibold text-red-900">
//                     <div className="col-span-1 border border-black flex items-center justify-center py-2">Dept.</div>
//                     <div className="col-span-1 border border-black flex items-center justify-center py-2">Sem / Electives</div>
//                     <div className="col-span-2 border border-black flex items-center justify-center py-2">Course Code</div>
//                     <div className="col-span-4 border border-black flex items-center justify-center py-2">Course Title</div>
//                     <div className="col-span-1 border border-black flex items-center justify-center py-2">L</div>
//                     <div className="col-span-1 border border-black flex items-center justify-center py-2">T</div>
//                     <div className="col-span-1 border border-black flex items-center justify-center py-2">P</div>
//                     <div className="col-span-1 border border-black flex items-center justify-center py-2">Credits</div>
//                 </div>

//                 {/* Table Rows */}
//                 <SyllabusComp
//                     dep={"CSE"}
//                     sem={"1"}
//                     code={"CS14102"}
//                     title={"Programming in C"}
//                     L={"3"}
//                     T={"0"}
//                     P={"2"}
//                     cred={"4"}
//                     url={"https://docs.google.com/document/d/10LKdSo8w-A2EsIh5NIOZFVjy4CtZX-Vq/edit?usp=drivesdk&ouid=104039714947486577983&rtpof=true&sd=true"}
//                 />
//                 <SyllabusComp
//                     dep={"CSE"}
//                     sem={"1"}
//                     code={"MA14102"}
//                     title={"Engineering Mathematics I"}
//                     L={"3"}
//                     T={"1"}
//                     P={"0"}
//                     cred={"4"}
//                     url={""}
//                 />
//                 <SyllabusComp
//                     dep={"CSE"}
//                     sem={"1"}
//                     code={"CH14101"}
//                     title={"Engineering Chemistry"}
//                     L={"3"}
//                     T={"0"}
//                     P={"2"}
//                     cred={"4"}
//                     url={"https://docs.google.com/document/d/1RbLIyCp71KOuDtNYisYeCgXFssOhlGBB/edit?usp=sharing&ouid=111684243091520260943&rtpof=true&sd=true"}
//                 />
//                 <SyllabusComp
//                     dep={"CSE"}
//                     sem={"1"}
//                     code={"EC14102"}
//                     title={"Digital Design"}
//                     L={"2"}
//                     T={"0"}
//                     P={"2"}
//                     cred={"3"}
//                     url={""}
//                 />
//                 <SyllabusComp
//                     dep={"CSE"}
//                     sem={"1"}
//                     code={"CS14106"}
//                     title={"Information Technology Workshop"}
//                     L={"3"}
//                     T={"0"}
//                     P={"2"}
//                     cred={"4"}
//                     url={""}
//                 />
//                 <SyllabusComp
//                     dep={"CSE"}
//                     sem={"1"}
//                     code={"EAA14102"}
//                     title={"EAA -II Swachha Bharat Mission (SBM)"}
//                     L={"0"}
//                     T={"0"}
//                     P={"2"}
//                     cred={"1"}
//                     url={""}
//                 />

//                 <SyllabusComp
//                     dep={"CSE"}
//                     sem={"2"}
//                     code={"CS24107"}
//                     title={"Web Technology"}
//                     L={"3"}
//                     T={"0"}
//                     P={"2"}
//                     cred={"4"}
//                     url={"https://docs.google.com/document/d/1RbLIyCp71KOuDtNYisYeCgXFssOhlGBB/edit?usp=sharing&ouid=111684243091520260943&rtpof=true&sd=true"}
//                 />
//                 <SyllabusComp
//                     dep={"CSE"}
//                     sem={"2"}
//                     code={"HS24101"}
//                     title={"Communicative English"}
//                     L={"3"}
//                     T={"0"}
//                     P={"2"}
//                     cred={"4"}
//                     url={""}
//                 />
//                 <SyllabusComp
//                     dep={"CSE"}
//                     sem={"2"}
//                     code={"PH24101"}
//                     title={"Engineering Physics"}
//                     L={"3"}
//                     T={"0"}
//                     P={"2"}
//                     cred={"4"}
//                     url={""}
//                 />
//                 <SyllabusComp
//                     dep={"CSE"}
//                     sem={"2"}
//                     code={"CS24108"}
//                     title={"Computer Organization"}
//                     L={"3"}
//                     T={"0"}
//                     P={"2"}
//                     cred={"4"}
//                     url={"https://docs.google.com/document/d/1FQafm1mKbZ0YUGJaejiPN1t9aK2bHS2t/edit?usp=sharing&ouid=111684243091520260943&rtpof=true&sd=true"}
//                 />
//                 <SyllabusComp
//                     dep={"CSE"}
//                     sem={"2"}
//                     code={"MA24102"}
//                     title={"Engineering Mathematics II"}
//                     L={"3"}
//                     T={"0"}
//                     P={"0"}
//                     cred={"3"}
//                     url={""}
//                 />
//                 <SyllabusComp
//                     dep={"CSE"}
//                     sem={"2"}
//                     code={"EAA24101"}
//                     title={"EAA - I Sports/Innovative Project/NCC/NSS"}
//                     L={"0"}
//                     T={"0"}
//                     P={"2"}
//                     cred={"1"}
//                     url={""}
//                 />

//                 <SyllabusComp
//                     dep={"CSE"}
//                     sem={"3"}
//                     code={"CS34104"}
//                     title={"Data Structures"}
//                     L={"3"}
//                     T={"0"}
//                     P={"2"}
//                     cred={"4"}
//                     url={"https://docs.google.com/document/d/1vXvH4sakwoZfsA-xhz_v9fyF9B-5RwqQ/edit?usp=sharing&ouid=111684243091520260943&rtpof=true&sd=true"}
//                 />
//                 <SyllabusComp
//                     dep={"CSE"}
//                     sem={"3"}
//                     code={"CS34105"}
//                     title={"Object Oriented Programming"}
//                     L={"2"}
//                     T={"0"}
//                     P={"2"}
//                     cred={"3"}
//                     url={"https://docs.google.com/document/d/1vtY34YA2zsnT_lBY3S45IeSujM_923Pb/edit?usp=sharing&ouid=111684243091520260943&rtpof=true&sd=true"}
//                 />
//                 <SyllabusComp
//                     dep={"CSE"}
//                     sem={"3"}
//                     code={"CS34109"}
//                     title={"Database Management Systems"}
//                     L={"3"}
//                     T={"0"}
//                     P={"2"}
//                     cred={"4"}
//                     url={"https://docs.google.com/document/d/1U_DwW-h4XksotWQ75cmewDfidKk_VHWB/edit?usp=sharing&ouid=111684243091520260943&rtpof=true&sd=true"}
//                 />
//                 <SyllabusComp
//                     dep={"CSE"}
//                     sem={"3"}
//                     code={"CS34110"}
//                     title={"Discrete Mathematics and Graph Theory"}
//                     L={"3"}
//                     T={"0"}
//                     P={"0"}
//                     cred={"3"}
//                     url={"https://docs.google.com/document/d/1U_DwW-h4XksotWQ75cmewDfidKk_VHWB/edit?usp=sharing&ouid=111684243091520260943&rtpof=true&sd=true"}
//                 />
//                 <SyllabusComp
//                     dep={"CSE"}
//                     sem={"3"}
//                     code={"CS34111"}
//                     title={"Operating Systems"}
//                     L={"3"}
//                     T={"0"}
//                     P={"2"}
//                     cred={"4"}
//                     url={"https://docs.google.com/document/d/1y0m-jwIsJQWDEcXoB7sab9-HJY922lm7/edit?usp=sharing&ouid=111684243091520260943&rtpof=true&sd=true"}
//                 />
//                 <SyllabusComp
//                     dep={"CSE"}
//                     sem={"3"}
//                     code={"HS34151"}
//                     title={"Social and Professional Ethics"}
//                     L={"3"}
//                     T={"0"}
//                     P={"0"}
//                     cred={"3"}
//                     url={""}
//                 />
//                 <SyllabusComp
//                     dep={"CSE"}
//                     sem={"4"}
//                     code={"CS44112"}
//                     title={"Artificial Intelligence"}
//                     L={"3"}
//                     T={"0"}
//                     P={"2"}
//                     cred={"4"}
//                     url={"https://docs.google.com/document/d/1RlvAuKl0LWCBcS-GjIJNdGZX3QGSyPQV/edit?usp=sharing&ouid=111684243091520260943&rtpof=true&sd=true"}
//                 />
//                 <SyllabusComp
//                     dep={"CSE"}
//                     sem={"4"}
//                     code={"CS44113"}
//                     title={"Computer Networks"}
//                     L={"3"}
//                     T={"0"}
//                     P={"2"}
//                     cred={"4"}
//                     url={"https://docs.google.com/document/d/1wdu6T74Zk5OEnYv8boUUPvCGVMighso4/edit?usp=sharing&ouid=111684243091520260943&rtpof=true&sd=true"}
//                 />
//                 <SyllabusComp
//                     dep={"CSE"}
//                     sem={"4"}
//                     code={"CS44114"}
//                     title={"Automata Theory and compiler design"}
//                     L={"3"}
//                     T={"0"}
//                     P={"2"}
//                     cred={"4"}
//                     url={"https://docs.google.com/document/d/1hUcd3YI2NTrbMK4387EgfPQL_4fpd8L6/edit?usp=sharing&ouid=111684243091520260943&rtpof=true&sd=true"}
//                 />
//                 <SyllabusComp
//                     dep={"CSE"}
//                     sem={"4"}
//                     code={"CS44115"}
//                     title={"Design and Analysis of Algorithms"}
//                     L={"3"}
//                     T={"0"}
//                     P={"2"}
//                     cred={"4"}
//                     url={"https://docs.google.com/document/d/1pUbN0A7mL6-mKapxhwo3mMwfVKTngGsY/edit?usp=sharing&ouid=111684243091520260943&rtpof=true&sd=true"}
//                 />
//                 <SyllabusComp
//                     dep={"CSE"}
//                     sem={"5"}
//                     code={"CS54116"}
//                     title={"Software Engineering"}
//                     L={"3"}
//                     T={"0"}
//                     P={"2"}
//                     cred={"4"}
//                     url={"https://docs.google.com/document/d/1QqD4UW2uVJbij9Db9dC3n4mi96ZPwWWl/edit?usp=sharing&ouid=111684243091520260943&rtpof=true&sd=true"}
//                 />
//                 <SyllabusComp
//                     dep={"CSE"}
//                     sem={"5"}
//                     code={"CS54117"}
//                     title={"Internet of Things"}
//                     L={"3"}
//                     T={"0"}
//                     P={"2"}
//                     cred={"4"}
//                     url={"https://docs.google.com/document/d/1fn9TIn5w3RsC9DTgWEGa8UqqC2zY1HhR/edit?usp=sharing&ouid=111684243091520260943&rtpof=true&sd=true"}
//                 />
//                 <SyllabusComp
//                     dep={"CSE"}
//                     sem={"5"}
//                     code={"CS54118"}
//                     title={"Machine Learning"}
//                     L={"3"}
//                     T={"0"}
//                     P={"2"}
//                     cred={"4"}
//                     url={"https://docs.google.com/document/d/1QwM7P4xxqpr2hULu6IJkYLX8xDYupxV7/edit?usp=sharing&ouid=111684243091520260943&rtpof=true&sd=true"}
//                 />
//                 <SyllabusComp
//                     dep={"CSE"}
//                     sem={"5"}
//                     code={"CS54119"}
//                     title={"Information Security"}
//                     L={"3"}
//                     T={"0"}
//                     P={"0"}
//                     cred={"3"}
//                     url={"https://docs.google.com/document/d/1wLoxetb2TWA1CQGnIG-dXeDpMsNHZ-UX/edit?usp=sharing&ouid=111684243091520260943&rtpof=true&sd=true"}
//                 />
//                 <SyllabusComp
//                     dep={"CSE"}
//                     sem={"5"}
//                     code={"CS54XXX"}
//                     title={"Dept Elective - I"}
//                     L={"X"}
//                     T={"X"}
//                     P={"X"}
//                     cred={"3"}
//                     url={""}
//                 />
//                 <SyllabusComp
//                     dep={"CSE"}
//                     sem={"5"}
//                     code={"OP54XXX"}
//                     title={"MOOC"}
//                     L={"X"}
//                     T={"X"}
//                     P={"X"}
//                     cred={"3"}
//                     url={""}
//                 />
//                 <SyllabusComp
//                     dep={"CSE"}
//                     sem={"6"}
//                     code={"CS64120"}
//                     title={"Data Mining"}
//                     L={"3"}
//                     T={"0"}
//                     P={"2"}
//                     cred={"4"}
//                     url={"https://docs.google.com/document/d/1dLT1GcSantAqKxiMdUnax_PMqjaIL5rW/edit?usp=sharing&ouid=111684243091520260943&rtpof=true&sd=true"}
//                 />
//                 <SyllabusComp
//                     dep={"CSE"}
//                     sem={"6"}
//                     code={"CS64121"}
//                     title={"Cloud Computing"}
//                     L={"3"}
//                     T={"0"}
//                     P={"0"}
//                     cred={"3"}
//                     url={"https://docs.google.com/document/d/1Sh6QNteSdoNVlzSFvBPzCKoJCsGZjqEM/edit?usp=sharing&ouid=111684243091520260943&rtpof=true&sd=true"}
//                 />
//                 <SyllabusComp
//                     dep={"CSE"}
//                     sem={"6"}
//                     code={"CS641XX"}
//                     title={"Dept. Elective - II"}
//                     L={"X"}
//                     T={"X"}
//                     P={"X"}
//                     cred={"3"}
//                     url={""}
//                 />
//                 <SyllabusComp
//                     dep={"CSE"}
//                     sem={"6"}
//                     code={"OP64XXX"}
//                     title={"MOOC"}
//                     L={"X"}
//                     T={"X"}
//                     P={"X"}
//                     cred={"3"}
//                     url={""}
//                 />
//                 <SyllabusComp
//                     dep={"CSE"}
//                     sem={"6"}
//                     code={"CS64123"}
//                     title={"Project"}
//                     L={"0"}
//                     T={"0"}
//                     P={"12"}
//                     cred={"6"}
//                     url={""}
//                 />
//                 <SyllabusComp
//                     dep={"CSE"}
//                     sem={"7"}
//                     code={"CS74135"}
//                     title={"Applied Cryptography"}
//                     L={"3"}
//                     T={"0"}
//                     P={"2"}
//                     cred={"4"}
//                     url={"https://docs.google.com/document/d/1ss-IHoBQd-kXDHBrahGd3EVqebF2gezX/edit?usp=sharing&ouid=111684243091520260943&rtpof=true&sd=true"}
//                 />
//                 <SyllabusComp
//                     dep={"CSE"}
//                     sem={"7"}
//                     code={"CS74136"}
//                     title={"Network Security System"}
//                     L={"3"}
//                     T={"0"}
//                     P={"2"}
//                     cred={"4"}
//                     url={"https://docs.google.com/document/d/1cQurwLHGjmmL9k3SnrsN8OI5lXVx1h7T/edit?usp=sharing&ouid=111684243091520260943&rtpof=true&sd=true"}
//                 />
//                 <SyllabusComp
//                     dep={"CSE"}
//                     sem={"7"}
//                     code={"CS74XXX"}
//                     title={"Dept. Elective-I"}
//                     L={"X"}
//                     T={"X"}
//                     P={"X"}
//                     cred={"3"}
//                     url={"https://docs.google.com/document/d/1WUfdRoj6IEK8VrU1kE86371oKpXomRBD/edit?usp=sharing&ouid=111684243091520260943&rtpof=true&sd=true"}
//                 />
//                 <SyllabusComp
//                     dep={"CSE"}
//                     sem={"7"}
//                     code={"CS74XXX"}
//                     title={"Dept. Elective-II"}
//                     L={"X"}
//                     T={"X"}
//                     P={"X"}
//                     cred={"3"}
//                     url={""}
//                 />
//                 <SyllabusComp
//                     dep={"CSE"}
//                     sem={"7"}
//                     code={"OP74XXX"}
//                     title={"MOOC"}
//                     L={"X"}
//                     T={"X"}
//                     P={"X"}
//                     cred={"3"}
//                     url={""}
//                 />
//                 <SyllabusComp
//                     dep={"CSE"}
//                     sem={"7"}
//                     code={"CS74137"}
//                     title={"Technical Seminar and Report Writing"}
//                     L={"0"}
//                     T={"0"}
//                     P={"4"}
//                     cred={"2"}
//                     url={""}
//                 />
//                 <SyllabusComp
//                     dep={"CSE"}
//                     sem={"8"}
//                     code={"CS84138"}
//                     title={"Intrusion Detection and Prevention"}
//                     L={"3"}
//                     T={"0"}
//                     P={"2"}
//                     cred={"4"}
//                     url={"https://docs.google.com/document/d/1WUfdRoj6IEK8VrU1kE86371oKpXomRBD/edit?usp=sharing&ouid=111684243091520260943&rtpof=true&sd=true"}
//                 />
//                 <SyllabusComp
//                     dep={"CSE"}
//                     sem={"8"}
//                     code={"CS84139"}
//                     title={"Advanced Internet of Things (IoT)"}
//                     L={"3"}
//                     T={"0"}
//                     P={"2"}
//                     cred={"4"}
//                     url={"https://docs.google.com/document/d/1hKC61IdyATJOe0xeH_cvA2k4zWN7D7GA/edit?usp=sharing&ouid=111684243091520260943&rtpof=true&sd=true"}
//                 />
//                 <SyllabusComp
//                     dep={"CSE"}
//                     sem={"8"}
//                     code={"CS84140"}
//                     title={"Cyber Forensics"}
//                     L={"3"}
//                     T={"0"}
//                     P={"2"}
//                     cred={"4"}
//                     url={"https://docs.google.com/document/d/14n6eimr8AnBr7L45Hvj-a25SXWqwgYD9/edit?usp=sharing&ouid=111684243091520260943&rtpof=true&sd=true"}
//                 />
//                 <SyllabusComp
//                     dep={"CSE"}
//                     sem={"EL"}
//                     code={"CSX4201"}
//                     title={"Adversarial ML"}
//                     L={"3"}
//                     T={"0"}
//                     P={"0"}
//                     cred={"3"}
//                     url={" https://docs.google.com/document/d/1WxrELLlZGBbn72YZmGvNqgHLyVYJIiVW/edit?usp=sharing&ouid=111684243091520260943&rtpof=true&sd=true"}
//                 />
//                 <SyllabusComp
//                     dep={"CSE"}
//                     sem={"EL"}
//                     code={"CSX4202"}
//                     title={"Deep Learning Algorithms"}
//                     L={"2"}
//                     T={"0"}
//                     P={"2"}
//                     cred={"3"}
//                     url={"https://docs.google.com/document/d/1sYMxDLMkHpAE7mPnJ3wQoh-6k2CYnwVs/edit?usp=sharing&ouid=111684243091520260943&rtpof=true&sd=true "}
//                 />
//                 <SyllabusComp
//                     dep={"CSE"}
//                     sem={"EL"}
//                     code={"CSX4203"}
//                     title={"Mathematical Foundations for Information Security"}
//                     L={"3"}
//                     T={"0"}
//                     P={"0"}
//                     cred={"3"}
//                     url={"https://docs.google.com/document/d/1-_wM9JJlil8j1ud49qXU_SIWD2NjCz0B/edit?usp=sharing&ouid=111684243091520260943&rtpof=true&sd=true"}
//                 />
//                 <SyllabusComp
//                     dep={"CSE"}
//                     sem={"EL"}
//                     code={"CSX4204"}
//                     title={"Information Theory and Coding"}
//                     L={"3"}
//                     T={"0"}
//                     P={"0"}
//                     cred={"3"}
//                     url={"https://docs.google.com/document/d/1W_WlGkA-jF9nmj6810HhUmgy0V5wlN1U/edit?usp=sharing&ouid=111684243091520260943&rtpof=true&sd=true"}
//                 />
//                 <SyllabusComp
//                     dep={"CSE"}
//                     sem={"EL"}
//                     code={"CSX4205"}
//                     title={"Wireless & Mobile Security"}
//                     L={"3"}
//                     T={"0"}
//                     P={"0"}
//                     cred={"3"}
//                     url={"https://docs.google.com/document/d/11gZTjTrDjYTe9BsK1_9wM-qNG9b5B5Jt/edit?usp=sharing&ouid=111684243091520260943&rtpof=true&sd=true"}
//                 />
//                 <SyllabusComp
//                     dep={"CSE"}
//                     sem={"EL"}
//                     code={"CSX4206"}
//                     title={"Image Processing Techniques"}
//                     L={"3"}
//                     T={"0"}
//                     P={"0"}
//                     cred={"3"}
//                     url={"https://docs.google.com/document/d/1N-d5Ej2IyKpTpxE3k6GwECJ9Z469bIHu/edit?usp=sharing&ouid=111684243091520260943&rtpof=true&sd=true "}
//                 />
//                 <SyllabusComp
//                     dep={"CSE"}
//                     sem={"EL"}
//                     code={"CSX4207"}
//                     title={"Cyber Security"}
//                     L={"3"}
//                     T={"0"}
//                     P={"0"}
//                     cred={"3"}
//                     url={" https://docs.google.com/document/d/1NmuTn33UMavITzB_uUYrsiM398RHSZWt/edit?usp=sharing&ouid=111684243091520260943&rtpof=true&sd=true"}
//                 />
//                 <SyllabusComp
//                     dep={"CSE"}
//                     sem={"EL"}
//                     code={"CSX4208"}
//                     title={"Multimedia System"}
//                     L={"3"}
//                     T={"0"}
//                     P={"0"}
//                     cred={"3"}
//                     url={" https://docs.google.com/document/d/1OzmcqkbmVXXeCmEMfJAvHVuNIxGxsJDg/edit?usp=sharing&ouid=111684243091520260943&rtpof=true&sd=true"}
//                 />
//                 <SyllabusComp
//                     dep={"CSE"}
//                     sem={"EL"}
//                     code={"CSX4209"}
//                     title={"Computer Vision"}
//                     L={"3"}
//                     T={"0"}
//                     P={"0"}
//                     cred={"3"}
//                     url={"https://docs.google.com/document/d/1MQcnkMjYNFnvCb67TuiDIaUID5IS7Hsp/edit?usp=sharing&ouid=111684243091520260943&rtpof=true&sd=true "}
//                 />
//                 <SyllabusComp
//                     dep={"CSE"}
//                     sem={"EL"}
//                     code={"CSX4210"}
//                     title={"Big Data Analytics"}
//                     L={"2"}
//                     T={"0"}
//                     P={"2"}
//                     cred={"3"}
//                     url={"https://docs.google.com/document/d/18GDL8d0s2m0kzec1luDETtoPTDN7gWMU/edit?usp=sharing&ouid=111684243091520260943&rtpof=true&sd=true"}
//                 />
//                 <SyllabusComp
//                     dep={"CSE"}
//                     sem={"EL"}
//                     code={"CSX4211"}
//                     title={"Cloud Computing Security"}
//                     L={"3"}
//                     T={"0"}
//                     P={"0"}
//                     cred={"3"}
//                     url={"https://docs.google.com/document/d/1wxfwu4joi825jxNnlqXERqBHHjkyqU_M/edit?usp=sharing&ouid=111684243091520260943&rtpof=true&sd=true "}
//                 />
//                 <SyllabusComp
//                     dep={"CSE"}
//                     sem={"EL"}
//                     code={"CSX4212"}
//                     title={"Biometric Security"}
//                     L={"3"}
//                     T={"0"}
//                     P={"0"}
//                     cred={"3"}
//                     url={"https://docs.google.com/document/d/1K5yQgvvBboCmZ_WalJXhLCzPZZQR7F52/edit?usp=sharing&ouid=111684243091520260943&rtpof=true&sd=true "}
//                 />
//                 <SyllabusComp
//                     dep={"CSE"}
//                     sem={"EL"}
//                     code={"CSX4213"}
//                     title={"Ethical Hacking"}
//                     L={"2"}
//                     T={"0"}
//                     P={"2"}
//                     cred={"3"}
//                     url={"https://docs.google.com/document/d/103JYb2hIMMHboaV_qbucgGP2Liyn2Z7y/edit?usp=sharing&ouid=111684243091520260943&rtpof=true&sd=true"}
//                 />
//                 <SyllabusComp
//                     dep={"CSE"}
//                     sem={"EL"}
//                     code={"CSX4214"}
//                     title={"Blockchain Technology"}
//                     L={"3"}
//                     T={"0"}
//                     P={"0"}
//                     cred={"3"}
//                     url={"https://docs.google.com/document/d/1-6xHRs4tnKSd5IVLgU5QX8EmiPARbbE5/edit?usp=sharing&ouid=111684243091520260943&rtpof=true&sd=true "}
//                 />
//                 <SyllabusComp
//                     dep={"CSE"}
//                     sem={"EL"}
//                     code={"CSX4215"}
//                     title={"Cyber laws and rights"}
//                     L={"3"}
//                     T={"0"}
//                     P={"0"}
//                     cred={"3"}
//                     url={"https://docs.google.com/document/d/1-VtiyUXj9KG1zUoAyURQSgZ9pGPlge1D/edit?usp=sharing&ouid=111684243091520260943&rtpof=true&sd=true "}
//                 />
//                 <SyllabusComp
//                     dep={"CSE"}
//                     sem={"EL"}
//                     code={"CSX4216"}
//                     title={"Digital Watermarking and Steganography"}
//                     L={"3"}
//                     T={"0"}
//                     P={"0"}
//                     cred={"3"}
//                     url={"https://docs.google.com/document/d/1l_s5jZk7Diu903HNouytG5f79Ifx60pN/edit?usp=sharing&ouid=111684243091520260943&rtpof=true&sd=true "}
//                 />
//                 <SyllabusComp
//                     dep={"CSE"}
//                     sem={"EL"}
//                     code={"CSX4217"}
//                     title={"Privacy and Security for Online Social Networks"}
//                     L={"3"}
//                     T={"0"}
//                     P={"0"}
//                     cred={"3"}
//                     url={"https://docs.google.com/document/d/1HKtDtO60yTG5OMexuPI3X834XJq2Cnls/edit?usp=sharing&ouid=111684243091520260943&rtpof=true&sd=true "}
//                 />
//                 <SyllabusComp
//                     dep={"CSE"}
//                     sem={"EL"}
//                     code={"CSX4218"}
//                     title={"Malware Analysis"}
//                     L={"2"}
//                     T={"0"}
//                     P={"2"}
//                     cred={"3"}
//                     url={"https://docs.google.com/document/d/1gmE7h5d7vHabqIJYDLzCi1WY_cmpqIjE/edit?usp=sharing&ouid=111684243091520260943&rtpof=true&sd=true "}
//                 />
//                 <SyllabusComp
//                     dep={"CSE"}
//                     sem={"EL"}
//                     code={"CSX4219"}
//                     title={"Soft Computing"}
//                     L={"3"}
//                     T={"0"}
//                     P={"0"}
//                     cred={"3"}
//                     url={"https://docs.google.com/document/d/1Y-zvh5V4colyXy4LTz2DvzHYDGNtleV3/edit?usp=sharing&ouid=111684243091520260943&rtpof=true&sd=true "}
//                 />
//                 <SyllabusComp
//                     dep={"CSE"}
//                     sem={"EL"}
//                     code={"CSX4220"}
//                     title={"Ubiquitous Computing"}
//                     L={"3"}
//                     T={"0"}
//                     P={"0"}
//                     cred={"3"}
//                     url={"https://docs.google.com/document/d/1RlPXzeJM8S01C_xP4mn63U2FgYp7Ciyu/edit?usp=sharing&ouid=111684243091520260943&rtpof=true&sd=true"}
//                 />
//                 <SyllabusComp
//                     dep={"CSE"}
//                     sem={"EL"}
//                     code={"CSX4221"}
//                     title={"Embedded System and Hardware Security"}
//                     L={"3"}
//                     T={"0"}
//                     P={"0"}
//                     cred={"3"}
//                     url={"https://docs.google.com/document/d/17jucjrP87ecWn0e6-8zeYgQOL_Jp_QiT/edit?usp=sharing&ouid=111684243091520260943&rtpof=true&sd=true "}
//                 />
//                 <SyllabusComp
//                     dep={"CSE"}
//                     sem={"EL"}
//                     code={"CSX4222"}
//                     title={"Distributed System Design"}
//                     L={"3"}
//                     T={"0"}
//                     P={"0"}
//                     cred={"3"}
//                     url={"https://docs.google.com/document/d/1w22gCFIFZbdTduFiLW5decDfMwZaArcn/edit?usp=sharing&ouid=111684243091520260943&rtpof=true&sd=true "}
//                 />
//                 <SyllabusComp
//                     dep={"CSE"}
//                     sem={"EL"}
//                     code={"CSX4223"}
//                     title={"Software Defined Networks"}
//                     L={"3"}
//                     T={"0"}
//                     P={"0"}
//                     cred={"3"}
//                     url={"https://docs.google.com/document/d/1LCIM1vE2FJUV7618ZiGlMRWzniIUScJv/edit?usp=sharing&ouid=111684243091520260943&rtpof=true&sd=true "}
//                 />
//                 <SyllabusComp
//                     dep={"CSE"}
//                     sem={"EL"}
//                     code={"CSX4224"}
//                     title={"Secure Software Systems"}
//                     L={"2"}
//                     T={"0"}
//                     P={"2"}
//                     cred={"3"}
//                     url={"https://docs.google.com/document/d/1oZY2Ho0pJlvm-ErahFHUr2jvhZNLSIqx/edit?usp=sharing&ouid=111684243091520260943&rtpof=true&sd=true "}
//                 />
//                 <SyllabusComp
//                     dep={"CSE"}
//                     sem={"EL"}
//                     code={"CSX4225"}
//                     title={"Pattern Recognition Technique"}
//                     L={"2"}
//                     T={"0"}
//                     P={"2"}
//                     cred={"3"}
//                     url={"https://docs.google.com/document/d/1UVgpCHE_ovRaPr8m3Sly2FM6thfH8c6W/edit?usp=sharing&ouid=111684243091520260943&rtpof=true&sd=true "}
//                 />
//                 <SyllabusComp
//                     dep={"CSE"}
//                     sem={"EL"}
//                     code={"CSX4226"}
//                     title={"Natural Language Processing Technique"}
//                     L={"2"}
//                     T={"0"}
//                     P={"2"}
//                     cred={"3"}
//                     url={"https://docs.google.com/document/d/1sWLOYBNnx4ui1_a0i7D6kJjcJdUs7mcH/edit?usp=sharing&ouid=111684243091520260943&rtpof=true&sd=true "}
//                 />
//                 <SyllabusComp
//                     dep={"CSE"}
//                     sem={"EL"}
//                     code={"CSX4227"}
//                     title={"Data Visualization"}
//                     L={"2"}
//                     T={"0"}
//                     P={"2"}
//                     cred={"3"}
//                     url={"https://docs.google.com/document/d/1ZovbNdCrKEXQYPmv7CkxHoPljLpXorSS/edit?usp=sharing&ouid=111684243091520260943&rtpof=true&sd=true "}
//                 />
//                 <SyllabusComp
//                     dep={"CSE"}
//                     sem={"EL"}
//                     code={"HSXXXXX"}
//                     title={"Intellectual Property Rights"}
//                     L={"3"}
//                     T={"0"}
//                     P={"0"}
//                     cred={"3"}
//                     url={"https://drive.google.com/file/d/1W8sld7ejfOWYTxTc-OVibS1ULzDkzW28/view?usp=drive_link "}
//                 />
//                 <SyllabusComp
//                     dep={"CSE"}
//                     sem={"EL"}
//                     code={"CSX4228"}
//                     title={"Information Retrieval"}
//                     L={"2"}
//                     T={"0"}
//                     P={"2"}
//                     cred={"3"}
//                     url={"https://docs.google.com/document/d/1qo9FJhmsKbM1zOUW7Q0dZDPMsrnOXCRH/edit?usp=sharing&ouid=111684243091520260943&rtpof=true&sd=true "}
//                 />
//                 <SyllabusComp
//                     dep={"CSE"}
//                     sem={"EL"}
//                     code={"CSX4229"}
//                     title={"Intrusion Detection"}
//                     L={"2"}
//                     T={"0"}
//                     P={"2"}
//                     cred={"3"}
//                     url={"https://docs.google.com/document/d/1BQrINbqEPg03HcXhZEiero-KIKksv8fu/edit?usp=sharing&ouid=111684243091520260943&rtpof=true&sd=true "}
//                 />
//                 <SyllabusComp
//                     dep={"CSE"}
//                     sem={"EL"}
//                     code={"CSX4230"}
//                     title={"IOT Systems"}
//                     L={"2"}
//                     T={"0"}
//                     P={"2"}
//                     cred={"3"}
//                     url={"https://docs.google.com/document/d/1WKDaDR7bwL_nW9jsqYFGmbzqh9_e4h_A/edit?usp=sharing&ouid=111684243091520260943&rtpof=true&sd=true "}
//                 />
//                 <SyllabusComp
//                     dep={"CSE"}
//                     sem={"EL"}
//                     code={"CSX4231"}
//                     title={"Nature Inspired Computing"}
//                     L={"3"}
//                     T={"0"}
//                     P={"0"}
//                     cred={"3"}
//                     url={"https://docs.google.com/document/d/1REnocL0I3VkRjjqUrzJIvAONPzwignpP/edit?usp=sharing&ouid=111684243091520260943&rtpof=true&sd=true "}
//                 />
//                 <SyllabusComp
//                     dep={"CSE"}
//                     sem={"EL"}
//                     code={"CSX4232"}
//                     title={"Network Security"}
//                     L={"2"}
//                     T={"0"}
//                     P={"2"}
//                     cred={"3"}
//                     url={"https://docs.google.com/document/d/1dyXlvbIYfu4QKYfv25VeMsPQx01O5Sy8/edit?usp=sharing&ouid=111684243091520260943&rtpof=true&sd=true "}
//                 />
//                 <SyllabusComp
//                     dep={"CSE"}
//                     sem={"EL"}
//                     code={"CSX4233"}
//                     title={"Recommendation Systems"}
//                     L={"3"}
//                     T={"0"}
//                     P={"0"}
//                     cred={"3"}
//                     url={"https://docs.google.com/document/d/1ZB71S3DFUGX1ACctivvEaYDXsFqVbGOo/edit?usp=sharing&ouid=111684243091520260943&rtpof=true&sd=true "}
//                 />
//                 <SyllabusComp
//                     dep={"CSE"}
//                     sem={"EL"}
//                     code={"CSX4234"}
//                     title={"Reinforcement Learning"}
//                     L={"2"}
//                     T={"0"}
//                     P={"2"}
//                     cred={"3"}
//                     url={"https://docs.google.com/document/d/171cbB3e10DcC7xAjvFPNMMud8zJTJ5q4/edit?usp=drive_link&ouid=111684243091520260943&rtpof=true&sd=true "}
//                 />
//                 <SyllabusComp
//                     dep={"CSE"}
//                     sem={"EL"}
//                     code={"CSX4235"}
//                     title={"Social Networks"}
//                     L={"2"}
//                     T={"0"}
//                     P={"2"}
//                     cred={"3"}
//                     url={"https://docs.google.com/document/d/1ke4pX6rtyqUJQKsVNqY6zAfMl8cMkbo2/edit?usp=drive_link&ouid=111684243091520260943&rtpof=true&sd=true "}
//                 />
//                 <SyllabusComp
//                     dep={"CSE"}
//                     sem={"EL"}
//                     code={"CSX4236"}
//                     title={"Speech Processing"}
//                     L={"2"}
//                     T={"0"}
//                     P={"2"}
//                     cred={"3"}
//                     url={"https://docs.google.com/document/d/1y9KX14tChsbPIEkeAjbALSQQ5CkcyYAf/edit?usp=drive_link&ouid=111684243091520260943&rtpof=true&sd=true "}
//                 />
//                 <SyllabusComp
//                     dep={"CSE"}
//                     sem={"EL"}
//                     code={"CSX4237"}
//                     title={"Time Series Analysis"}
//                     L={"2"}
//                     T={"0"}
//                     P={"2"}
//                     cred={"3"}
//                     url={"https://docs.google.com/document/d/1vU6OlOvtoamRG7XqSB4cu8rmxsMyQGO0/edit?usp=drive_link&ouid=111684243091520260943&rtpof=true&sd=true "}
//                 />
//                 <SyllabusComp
//                     dep={"CSE"}
//                     sem={"EL"}
//                     code={"CSX4238"}
//                     title={"Human Computer Interaction"}
//                     L={"3"}
//                     T={"0"}
//                     P={"0"}
//                     cred={"3"}
//                     url={"https://docs.google.com/document/d/1K2dIQRAEQfK3H4lVky2udQAztm-EJStd/edit?usp=drive_link&ouid=111684243091520260943&rtpof=true&sd=true "}
//                 />
//                 <SyllabusComp
//                     dep={"CSE"}
//                     sem={"EL"}
//                     code={"CSX4239"}
//                     title={"Approximation Algorithms"}
//                     L={"3"}
//                     T={"0"}
//                     P={"0"}
//                     cred={"3"}
//                     url={"https://docs.google.com/document/d/1L0ltgHdKLtoG0qUjTBUTGnu7MZtpHdCu/edit?usp=drive_link&ouid=111684243091520260943&rtpof=true&sd=true "}
//                 />
//                 <SyllabusComp
//                     dep={"CSE"}
//                     sem={"EL"}
//                     code={"CSX4240"}
//                     title={"Mobile Applications Development"}
//                     L={"2"}
//                     T={"0"}
//                     P={"2"}
//                     cred={"3"}
//                     url={"https://docs.google.com/document/d/1xFdNl9Kx1X8fEvhD_hZw5XoGGn3WtccM/edit?usp=drive_link&ouid=111684243091520260943&rtpof=true&sd=true "}
//                 />
//                 <SyllabusComp
//                     dep={"CSE"}
//                     sem={"EL"}
//                     code={"CSX4241"}
//                     title={"Game Theory"}
//                     L={"3"}
//                     T={"0"}
//                     P={"0"}
//                     cred={"3"}
//                     url={"https://docs.google.com/document/d/1CgYskDrWcEGze-kuaErEfo28S2d5jL7q/edit?usp=drive_link&ouid=111684243091520260943&rtpof=true&sd=true "}
//                 />
//                 <SyllabusComp
//                     dep={"CSE"}
//                     sem={"EL"}
//                     code={"CSX4242"}
//                     title={"Computational Geometry"}
//                     L={"3"}
//                     T={"0"}
//                     P={"0"}
//                     cred={"3"}
//                     url={"https://docs.google.com/document/d/1A4OExxrM-wDt9m09QNQrn4CiTbf-16Q0/edit?usp=drive_link&ouid=111684243091520260943&rtpof=true&sd=true "}
//                 />
//                 <SyllabusComp
//                     dep={"CSE"}
//                     sem={"EL"}
//                     code={"CSX4243"}
//                     title={"Decision Support Systems"}
//                     L={"3"}
//                     T={"0"}
//                     P={"0"}
//                     cred={"3"}
//                     url={"https://docs.google.com/document/d/1_GURD6wGRIHhZHpPBW_b8RhXy--wSxFX/edit?usp=drive_link&ouid=111684243091520260943&rtpof=true&sd=true "}
//                 />
//                 <SyllabusComp
//                     dep={"CSE"}
//                     sem={"EL"}
//                     code={"CSX4244"}
//                     title={"Federated Learning"}
//                     L={"3"}
//                     T={"0"}
//                     P={"0"}
//                     cred={"3"}
//                     url={"https://docs.google.com/document/d/1is9C1MmsNnvfPPYquwgsdCfzikyadh56/edit?usp=drive_link&ouid=111684243091520260943&rtpof=true&sd=true "}
//                 />
//                 <SyllabusComp
//                     dep={"CSE"}
//                     sem={"EL"}
//                     code={"CSX4245"}
//                     title={"Knowledge Representation & Reasoning"}
//                     L={"3"}
//                     T={"0"}
//                     P={"0"}
//                     cred={"3"}
//                     url={"https://docs.google.com/document/d/1TaMZjCv_foHY_UjKCk3Y7EOZdBrKI9w1/edit?usp=drive_link&ouid=111684243091520260943&rtpof=true&sd=true "}
//                 />
//                 <SyllabusComp
//                     dep={"CSE"}
//                     sem={"EL"}
//                     code={"CSX4246"}
//                     title={"Bioinformatics"}
//                     L={"2"}
//                     T={"0"}
//                     P={"2"}
//                     cred={"3"}
//                     url={"https://docs.google.com/document/d/1iFYjQcdBa0sowP3473Goz_ZgRXvNTtK3/edit?usp=drive_link&ouid=111684243091520260943&rtpof=true&sd=true "}
//                 />
//                 <SyllabusComp
//                     dep={"CSE"}
//                     sem={"EL"}
//                     code={"CSX4247"}
//                     title={"Digital Signal Processing"}
//                     L={"3"}
//                     T={"0"}
//                     P={"0"}
//                     cred={"3"}
//                     url={"https://docs.google.com/document/d/1EHZkkrk6SRXIf0zwWIG00x9XekoKKEa-/edit?usp=drive_link&ouid=111684243091520260943&rtpof=true&sd=true "}
//                 />
//             </div>
//         </div>
//     );
// };

// const DualDSyllabus = () => {
//     return (
//         <div className="w-full mb-10 overflow-x-auto">
//             <div className="min-w-[1000px] border">
//                 <div className="grid grid-cols-12 bg-gray-100 font-semibold text-red-900">
//                     <div className="col-span-1 border border-black flex items-center justify-center py-2">Dept.</div>
//                     <div className="col-span-1 border border-black flex items-center justify-center py-2">Sem / Electives</div>
//                     <div className="col-span-2 border border-black flex items-center justify-center py-2">Course Code</div>
//                     <div className="col-span-4 border border-black flex items-center justify-center py-2">Course Title</div>
//                     <div className="col-span-1 border border-black flex items-center justify-center py-2">L</div>
//                     <div className="col-span-1 border border-black flex items-center justify-center py-2">T</div>
//                     <div className="col-span-1 border border-black flex items-center justify-center py-2">P</div>
//                     <div className="col-span-1 border border-black flex items-center justify-center py-2">Credits</div>
//                 </div>

//                 {/* Table Rows */}
//                 <SyllabusComp
//                     dep={"CSE"}
//                     sem={"1"}
//                     code={"CS14102"}
//                     title={"Programming in C"}
//                     L={"3"}
//                     T={"0"}
//                     P={"2"}
//                     cred={"4"}
//                     url={"https://docs.google.com/document/d/1ZS47H6woMm-k1JOrEUaOABv54m_BGPLq/edit?usp=drive_link&ouid=111684243091520260943&rtpof=true&sd=true "}
//                 />
//                 <SyllabusComp
//                     dep={"CSE"}
//                     sem={"1"}
//                     code={"MA14102"}
//                     title={"Engineering Mathematics I"}
//                     L={"3"}
//                     T={"1"}
//                     P={"0"}
//                     cred={"4"}
//                     url={" "}
//                 />
//                 <SyllabusComp
//                     dep={"CSE"}
//                     sem={"1"}
//                     code={"CH14101"}
//                     title={"Engineering Chemistry"}
//                     L={"3"}
//                     T={"0"}
//                     P={"2"}
//                     cred={"4"}
//                     url={" "}
//                 />
//                 <SyllabusComp
//                     dep={"CSE"}
//                     sem={"1"}
//                     code={"EC14102"}
//                     title={"Digital Design"}
//                     L={"2"}
//                     T={"0"}
//                     P={"2"}
//                     cred={"3"}
//                     url={" "}
//                 />
//                 <SyllabusComp
//                     dep={"CSE"}
//                     sem={"1"}
//                     code={"CS14106"}
//                     title={"Information Technology Workshop"}
//                     L={"3"}
//                     T={"0"}
//                     P={"2"}
//                     cred={"4"}
//                     url={"https://docs.google.com/document/d/1ojZ3t_rDHdECjIm1Na_aslGvAlAptpTU/edit?usp=drive_link&ouid=111684243091520260943&rtpof=true&sd=true "}
//                 />
//                 <SyllabusComp
//                     dep={"CSE"}
//                     sem={"1"}
//                     code={"EAA14102"}
//                     title={"EAA -II Swachha Bharat Mission (SBM)"}
//                     L={"0"}
//                     T={"0"}
//                     P={"2"}
//                     cred={"1"}
//                     url={" "}
//                 />
//                 <SyllabusComp
//                     dep={"CSE"}
//                     sem={"2"}
//                     code={"CS24107"}
//                     title={"Web Technology"}
//                     L={"3"}
//                     T={"0"}
//                     P={"2"}
//                     cred={"4"}
//                     url={"https://docs.google.com/document/d/1J_5es_851r7JOhAAS0pEgpVFteKLWzXn/edit?usp=drive_link&ouid=111684243091520260943&rtpof=true&sd=true "}
//                 />
//                 <SyllabusComp
//                     dep={"CSE"}
//                     sem={"2"}
//                     code={"HS24101"}
//                     title={"Communicative English"}
//                     L={"3"}
//                     T={"0"}
//                     P={"2"}
//                     cred={"4"}
//                     url={" "}
//                 />
//                 <SyllabusComp
//                     dep={"CSE"}
//                     sem={"2"}
//                     code={"PH24101"}
//                     title={"Engineering Physics"}
//                     L={"3"}
//                     T={"0"}
//                     P={"2"}
//                     cred={"4"}
//                     url={" "}
//                 />
//                 <SyllabusComp
//                     dep={"CSE"}
//                     sem={"2"}
//                     code={"CS24108"}
//                     title={"Computer Organization"}
//                     L={"3"}
//                     T={"0"}
//                     P={"2"}
//                     cred={"4"}
//                     url={"https://docs.google.com/document/d/1LXRXv4u0CMRuuAv5L64GrtVZgJOoGqKM/edit?usp=drive_link&ouid=111684243091520260943&rtpof=true&sd=true"}
//                 />
//                 <SyllabusComp
//                     dep={"CSE"}
//                     sem={"2"}
//                     code={"MA24102"}
//                     title={"Engineering Mathematics II"}
//                     L={"3"}
//                     T={"0"}
//                     P={"0"}
//                     cred={"3"}
//                     url={" "}
//                 />
//                 <SyllabusComp
//                     dep={"CSE"}
//                     sem={"2"}
//                     code={"EAA24101"}
//                     title={"EAA - I Sports/Innovative Project/NCC/NSS"}
//                     L={"0"}
//                     T={"0"}
//                     P={"2"}
//                     cred={"1"}
//                     url={" "}
//                 />
//                 <SyllabusComp
//                     dep={"CSE"}
//                     sem={"3"}
//                     code={"CS34104"}
//                     title={"Data Structures"}
//                     L={"3"}
//                     T={"0"}
//                     P={"2"}
//                     cred={"4"}
//                     url={"https://docs.google.com/document/d/1LXRXv4u0CMRuuAv5L64GrtVZgJOoGqKM/edit?usp=drive_link&ouid=111684243091520260943&rtpof=true&sd=true"}
//                 />
//                 <SyllabusComp
//                     dep={"CSE"}
//                     sem={"3"}
//                     code={"CS34105"}
//                     title={"Object Oriented Programming"}
//                     L={"2"}
//                     T={"0"}
//                     P={"2"}
//                     cred={"3"}
//                     url={"https://docs.google.com/document/d/1c0pdJlSw_ypGh0fHVwUBiiKoxI0LmUlZ/edit?usp=drive_link&ouid=111684243091520260943&rtpof=true&sd=true"}
//                 />
//                 <SyllabusComp
//                     dep={"CSE"}
//                     sem={"3"}
//                     code={"CS34109"}
//                     title={"Database Management Systems"}
//                     L={"3"}
//                     T={"0"}
//                     P={"2"}
//                     cred={"4"}
//                     url={"https://docs.google.com/document/d/13elSM7_bC9GFkz4Te1wdG5-5eG4_wirA/edit?usp=drive_link&ouid=111684243091520260943&rtpof=true&sd=true"}
//                 />
//                 <SyllabusComp
//                     dep={"CSE"}
//                     sem={"3"}
//                     code={"CS34110"}
//                     title={"Discrete Mathematics and Graph Theory"}
//                     L={"3"}
//                     T={"0"}
//                     P={"0"}
//                     cred={"3"}
//                     url={"https://docs.google.com/document/d/17edpg_Yt6zAInqarjIV9k7clML-EtE1_/edit?usp=drive_link&ouid=111684243091520260943&rtpof=true&sd=true"}
//                 />
//                 <SyllabusComp
//                     dep={"CSE"}
//                     sem={"3"}
//                     code={"CS34111"}
//                     title={"Operating Systems"}
//                     L={"3"}
//                     T={"0"}
//                     P={"2"}
//                     cred={"4"}
//                     url={"https://docs.google.com/document/d/1c-VT3p4o0I14s1edOGz2KcWqQdfYKJbO/edit?usp=drive_link&ouid=111684243091520260943&rtpof=true&sd=true"}
//                 />
//                 <SyllabusComp
//                     dep={"CSE"}
//                     sem={"3"}
//                     code={"HS34151"}
//                     title={"Social and Professional Ethics"}
//                     L={"3"}
//                     T={"0"}
//                     P={"0"}
//                     cred={"3"}
//                     url={""}
//                 />
//                 <SyllabusComp
//                     dep={"CSE"}
//                     sem={"4"}
//                     code={"CS44112"}
//                     title={"Artificial Intelligence"}
//                     L={"3"}
//                     T={"0"}
//                     P={"2"}
//                     cred={"4"}
//                     url={"https://docs.google.com/document/d/1fAl7I8oNnBK3NRAtE97a337190aTN24h/edit?usp=drive_link&ouid=111684243091520260943&rtpof=true&sd=true"}
//                 />
//                 <SyllabusComp
//                     dep={"CSE"}
//                     sem={"4"}
//                     code={"CS44113"}
//                     title={"Computer Networks"}
//                     L={"3"}
//                     T={"0"}
//                     P={"2"}
//                     cred={"4"}
//                     url={"https://docs.google.com/document/d/1dyKiZlE7mv5cm57Jt0ywCtS5t0YWCl4M/edit?usp=drive_link&ouid=111684243091520260943&rtpof=true&sd=true"}
//                 />
//                 <SyllabusComp
//                     dep={"CSE"}
//                     sem={"4"}
//                     code={"CS44114"}
//                     title={"Automata Theory and Compiler Design"}
//                     L={"3"}
//                     T={"0"}
//                     P={"2"}
//                     cred={"4"}
//                     url={"https://docs.google.com/document/d/1d2WR7LWgxMX_AUw-9_AwkzuV9JtzWxAB/edit?usp=drive_link&ouid=111684243091520260943&rtpof=true&sd=true"}
//                 />
//                 <SyllabusComp
//                     dep={"CSE"}
//                     sem={"4"}
//                     code={"CS44115"}
//                     title={"Design and Analysis of Algorithms"}
//                     L={"3"}
//                     T={"0"}
//                     P={"2"}
//                     cred={"4"}
//                     url={"https://docs.google.com/document/d/1F8V6YysmHaZJ9nGO3YiZpdQoP5bWgYok/edit?usp=drive_link&ouid=111684243091520260943&rtpof=true&sd=true"}
//                 />
//                 <SyllabusComp
//                     dep={"CSE"}
//                     sem={"4"}
//                     code={"OP44XXX"}
//                     title={"Open Electives-1"}
//                     L={"X"}
//                     T={"X"}
//                     P={"X"}
//                     cred={"3"}
//                     url={""}
//                 />
//                 <SyllabusComp
//                     dep={"CSE"}
//                     sem={"5"}
//                     code={"CS54116"}
//                     title={"Software Engineering"}
//                     L={"3"}
//                     T={"0"}
//                     P={"2"}
//                     cred={"4"}
//                     url={"https://docs.google.com/document/d/1ZFgtyFYH-cWB8ee5zMS9c7HLbKsJcz6i/edit?usp=drive_link&ouid=111684243091520260943&rtpof=true&sd=true"}
//                 />
//                 <SyllabusComp
//                     dep={"CSE"}
//                     sem={"5"}
//                     code={"CS54117"}
//                     title={"Internet of Things"}
//                     L={"3"}
//                     T={"0"}
//                     P={"2"}
//                     cred={"4"}
//                     url={"https://docs.google.com/document/d/1nTN1X_BRkzfYSMd8-pYlXopjRJ6GV1Bu/edit?usp=drive_link&ouid=111684243091520260943&rtpof=true&sd=true"}
//                 />
//                 <SyllabusComp
//                     dep={"CSE"}
//                     sem={"5"}
//                     code={"CS54118"}
//                     title={"Machine Learning"}
//                     L={"3"}
//                     T={"0"}
//                     P={"2"}
//                     cred={"4"}
//                     url={"https://docs.google.com/document/d/1bZTv5mdaUHOwJcCngeBMUzEMRZK2sAIk/edit?usp=drive_link&ouid=111684243091520260943&rtpof=true&sd=true"}
//                 />
//                 <SyllabusComp
//                     dep={"CSE"}
//                     sem={"5"}
//                     code={"CS54119"}
//                     title={"Information Security"}
//                     L={"3"}
//                     T={"0"}
//                     P={"0"}
//                     cred={"3"}
//                     url={"https://docs.google.com/document/d/1uhPTb9_qLPpQRmH_WzBR1nul2B0qr3lj/edit?usp=drive_link&ouid=111684243091520260943&rtpof=true&sd=true"}
//                 />
//                 <SyllabusComp
//                     dep={"CSE"}
//                     sem={"5"}
//                     code={"CS54XXX"}
//                     title={"Dept Elective - I"}
//                     L={"X"}
//                     T={"X"}
//                     P={"X"}
//                     cred={"3"}
//                     url={""}
//                 />
//                 <SyllabusComp
//                     dep={"CSE"}
//                     sem={"5"}
//                     code={"OP54XXX"}
//                     title={"MOOC"}
//                     L={"X"}
//                     T={"X"}
//                     P={"X"}
//                     cred={"3"}
//                     url={""}
//                 />
//                 <SyllabusComp
//                     dep={"CSE"}
//                     sem={"6"}
//                     code={"CS64120"}
//                     title={"Data Mining"}
//                     L={"3"}
//                     T={"0"}
//                     P={"2"}
//                     cred={"4"}
//                     url={"https://docs.google.com/document/d/1IpW_8tqNdXz5CYLyryu29ZIhzdLQgdXx/edit?usp=drive_link&ouid=111684243091520260943&rtpof=true&sd=true"}
//                 />
//                 <SyllabusComp
//                     dep={"CSE"}
//                     sem={"6"}
//                     code={"CS64121"}
//                     title={"Cloud Computing"}
//                     L={"3"}
//                     T={"0"}
//                     P={"0"}
//                     cred={"3"}
//                     url={"https://docs.google.com/document/d/1bAoGGN-hqz1XyjgLS7Kg5wOWEIcM4raX/edit?usp=drive_link&ouid=111684243091520260943&rtpof=true&sd=true"}
//                 />
//                 <SyllabusComp
//                     dep={"CSE"}
//                     sem={"6"}
//                     code={"CS641XX"}
//                     title={"Dept. Elective - II"}
//                     L={"X"}
//                     T={"X"}
//                     P={"X"}
//                     cred={"3"}
//                     url={""}
//                 />
//                 <SyllabusComp
//                     dep={"CSE"}
//                     sem={"6"}
//                     code={"OP64XXX"}
//                     title={"MOOC"}
//                     L={"X"}
//                     T={"X"}
//                     P={"X"}
//                     cred={"3"}
//                     url={""}
//                 />
//                 <SyllabusComp
//                     dep={"CSE"}
//                     sem={"6"}
//                     code={"CS64123"}
//                     title={"Project"}
//                     L={"0"}
//                     T={"0"}
//                     P={"12"}
//                     cred={"6"}
//                     url={""}
//                 />
//                 <SyllabusComp
//                     dep={"CSE"}
//                     sem={"7"}
//                     code={"CS74127"}
//                     title={"Mathematical Foundations of Data Science"}
//                     L={"3"}
//                     T={"0"}
//                     P={"2"}
//                     cred={"4"}
//                     url={"https://docs.google.com/document/d/1ffY6ipYoUIFfQnH1XcD49hhciavdxBd-/edit?usp=drive_link&ouid=111684243091520260943&rtpof=true&sd=true"}
//                 />
//                 <SyllabusComp
//                     dep={"CSE"}
//                     sem={"7"}
//                     code={"CS74128"}
//                     title={"Pattern Recognition"}
//                     L={"3"}
//                     T={"0"}
//                     P={"2"}
//                     cred={"4"}
//                     url={"https://docs.google.com/document/d/1Z_h0Bczt1SZQlVBBlH5Z7sbIOf4ntOlg/edit?usp=drive_link&ouid=111684243091520260943&rtpof=true&sd=true"}
//                 />
//                 <SyllabusComp
//                     dep={"CSE"}
//                     sem={"7"}
//                     code={"CS74XXX"}
//                     title={"Dept. Elective-I"}
//                     L={"X"}
//                     T={"X"}
//                     P={"X"}
//                     cred={"3"}
//                     url={""}
//                 />
//                 <SyllabusComp
//                     dep={"CSE"}
//                     sem={"7"}
//                     code={"CS74XXX"}
//                     title={"Dept. Elective-II"}
//                     L={"X"}
//                     T={"X"}
//                     P={"X"}
//                     cred={"3"}
//                     url={""}
//                 />
//                 <SyllabusComp
//                     dep={"CSE"}
//                     sem={"7"}
//                     code={"CS74XXX"}
//                     title={"MOOC"}
//                     L={"X"}
//                     T={"X"}
//                     P={"X"}
//                     cred={"3"}
//                     url={""}
//                 />
//                 <SyllabusComp
//                     dep={"CSE"}
//                     sem={"7"}
//                     code={"CS74129"}
//                     title={"Technical Seminar and Report Writing"}
//                     L={"0"}
//                     T={"0"}
//                     P={"4"}
//                     cred={"2"}
//                     url={""}
//                 />
//                 <SyllabusComp
//                     dep={"CSE"}
//                     sem={"8"}
//                     code={"CS84130"}
//                     title={"Natural Language Processing"}
//                     L={"3"}
//                     T={"0"}
//                     P={"2"}
//                     cred={"4"}
//                     url={"https://docs.google.com/document/d/1qUq1I1rlyoUZkE9mTXXEqF_2CtOJ_yxf/edit?usp=drive_link&ouid=111684243091520260943&rtpof=true&sd=true"}
//                 />
//                 <SyllabusComp
//                     dep={"CSE"}
//                     sem={"8"}
//                     code={"CS84131"}
//                     title={"Deep Learning"}
//                     L={"3"}
//                     T={"0"}
//                     P={"2"}
//                     cred={"4"}
//                     url={"https://docs.google.com/document/d/1HFoTHostekgf1NZIQo4EFXn3eRYNg9t3/edit?usp=drive_link&ouid=111684243091520260943&rtpof=true&sd=true"}
//                 />
//                 <SyllabusComp
//                     dep={"CSE"}
//                     sem={"8"}
//                     code={"CS84132"}
//                     title={"Data Visualization Techniques"}
//                     L={"3"}
//                     T={"0"}
//                     P={"2"}
//                     cred={"4"}
//                     url={"https://docs.google.com/document/d/1atHOqXBV3MnR7DOIOUa_8Crcs1rJ94dR/edit?usp=sharing&ouid=111684243091520260943&rtpof=true&sd=true"}
//                 />
//                 <SyllabusComp
//                     dep={"CSE"}
//                     sem={"8"}
//                     code={"CS84XXX"}
//                     title={"Dept. Elective-III"}
//                     L={"X"}
//                     T={"X"}
//                     P={"X"}
//                     cred={"3"}
//                     url={""}
//                 />
//                 <SyllabusComp
//                     dep={"CSE"}
//                     sem={"8"}
//                     code={"CS84XXX"}
//                     title={"Dept Elective-IV"}
//                     L={"X"}
//                     T={"X"}
//                     P={"X"}
//                     cred={"3"}
//                     url={""}
//                 />
//                 <SyllabusComp
//                     dep={"CSE"}
//                     sem={"8"}
//                     code={"CS84XXX"}
//                     title={"MOOC"}
//                     L={"X"}
//                     T={"X"}
//                     P={"X"}
//                     cred={"3"}
//                     url={""}
//                 />
//                 <SyllabusComp
//                     dep={"CSE"}
//                     sem={"EL"}
//                     code={"CSX4171"}
//                     title={"Adversarial ML"}
//                     L={"3"}
//                     T={"0"}
//                     P={"0"}
//                     cred={"3"}
//                     url={"https://docs.google.com/document/d/1S5WUgD15RPXt9mmqpZZxLUh1sUGgpKiy/edit?usp=drive_link&ouid=111684243091520260943&rtpof=true&sd=true"}
//                 />
//                 <SyllabusComp
//                     dep={"CSE"}
//                     sem={"EL"}
//                     code={"CSX4172"}
//                     title={"Digital Signal Processing"}
//                     L={"3"}
//                     T={"0"}
//                     P={"0"}
//                     cred={"3"}
//                     url={"https://docs.google.com/document/d/19x2GJDwjKXUs0hf9l9HHbXHtFgCZRjbe/edit?usp=drive_link&ouid=111684243091520260943&rtpof=true&sd=true"}
//                 />
//                 <SyllabusComp
//                     dep={"CSE"}
//                     sem={"EL"}
//                     code={"CSX4173"}
//                     title={"IOT Systems"}
//                     L={"2"}
//                     T={"0"}
//                     P={"2"}
//                     cred={"3"}
//                     url={"https://docs.google.com/document/d/1__FzFOryXPTIgNs8L4mr5iK7wrRD3bim/edit?usp=drive_link&ouid=111684243091520260943&rtpof=true&sd=true"}
//                 />
//                 <SyllabusComp
//                     dep={"CSE"}
//                     sem={"EL"}
//                     code={"CSX4174"}
//                     title={"Nature Inspired Computing"}
//                     L={"3"}
//                     T={"0"}
//                     P={"0"}
//                     cred={"3"}
//                     url={"https://docs.google.com/document/d/1BRlcFtqQ6MNC2o1VubS-Xui3O3y5u0yd/edit?usp=drive_link&ouid=111684243091520260943&rtpof=true&sd=true"}
//                 />
//                 <SyllabusComp
//                     dep={"CSE"}
//                     sem={"EL"}
//                     code={"CSX4175"}
//                     title={"Image Processing Techniques"}
//                     L={"3"}
//                     T={"0"}
//                     P={"0"}
//                     cred={"3"}
//                     url={"https://docs.google.com/document/d/1ySgtdvdpgZ11yHHZac0xZ7FY8AUQnuVU/edit?usp=drive_link&ouid=111684243091520260943&rtpof=true&sd=true"}
//                 />
//                 <SyllabusComp
//                     dep={"CSE"}
//                     sem={"EL"}
//                     code={"CSX4176"}
//                     title={"Bioinformatics"}
//                     L={"2"}
//                     T={"0"}
//                     P={"2"}
//                     cred={"3"}
//                     url={"https://docs.google.com/document/d/1ATF-z1CqnhcP3WStJ1NF0WHEEDy7SYAl/edit?usp=drive_link&ouid=111684243091520260943&rtpof=true&sd=true"}
//                 />
//                 <SyllabusComp
//                     dep={"CSE"}
//                     sem={"EL"}
//                     code={"CSX4177"}
//                     title={"Information Retrieval"}
//                     L={"2"}
//                     T={"0"}
//                     P={"2"}
//                     cred={"3"}
//                     url={"https://docs.google.com/document/d/1MSTQT82DN4Hsz-p0bqmLEhHcJxpQLJzD/edit?usp=drive_link&ouid=111684243091520260943&rtpof=true&sd=true"}
//                 />
//                 <SyllabusComp
//                     dep={"CSE"}
//                     sem={"EL"}
//                     code={"CSX4178"}
//                     title={"Computer Vision"}
//                     L={"3"}
//                     T={"0"}
//                     P={"0"}
//                     cred={"3"}
//                     url={"https://docs.google.com/document/d/1WjKhL9XUkt6ceJxILzAbB_fuZUbf2vAn/edit?usp=drive_link&ouid=111684243091520260943&rtpof=true&sd=true"}
//                 />
//                 <SyllabusComp
//                     dep={"CSE"}
//                     sem={"EL"}
//                     code={"CSX4179"}
//                     title={"Reinforcement Learning"}
//                     L={"2"}
//                     T={"0"}
//                     P={"2"}
//                     cred={"3"}
//                     url={"https://docs.google.com/document/d/1M0poIMuSnTjzz7qJFTZ2VJPKnFcQFi7w/edit?usp=drive_link&ouid=111684243091520260943&rtpof=true&sd=true"}
//                 />
//                 <SyllabusComp
//                     dep={"CSE"}
//                     sem={"EL"}
//                     code={"CSX4180"}
//                     title={"Social Networks"}
//                     L={"2"}
//                     T={"0"}
//                     P={"2"}
//                     cred={"3"}
//                     url={"https://docs.google.com/document/d/1bjTmo8qFMRoPS6n0ZYMjAR87IhbubWCI/edit?usp=drive_link&ouid=111684243091520260943&rtpof=true&sd=true"}
//                 />
//                 <SyllabusComp
//                     dep={"CSE"}
//                     sem={"EL"}
//                     code={"CSX4181"}
//                     title={"Recommendation Systems"}
//                     L={"3"}
//                     T={"0"}
//                     P={"0"}
//                     cred={"3"}
//                     url={"https://docs.google.com/document/d/1Av3k8j7dKXMU-4wzZXG-xC4dtpIC_7dW/edit?usp=drive_link&ouid=111684243091520260943&rtpof=true&sd=true"}
//                 />
//                 <SyllabusComp
//                     dep={"CSE"}
//                     sem={"EL"}
//                     code={"CSX4182"}
//                     title={"Speech Processing"}
//                     L={"2"}
//                     T={"0"}
//                     P={"2"}
//                     cred={"3"}
//                     url={"https://docs.google.com/document/d/1dFyE71zXIe0ACAMpMDuPYV8tH9x8W3HJ/edit?usp=drive_link&ouid=111684243091520260943&rtpof=true&sd=true"}
//                 />
//                 <SyllabusComp
//                     dep={"CSE"}
//                     sem={"EL"}
//                     code={"CSX4183"}
//                     title={"Malware Analysis"}
//                     L={"2"}
//                     T={"0"}
//                     P={"2"}
//                     cred={"3"}
//                     url={"https://docs.google.com/document/d/1GQjE6lBIL4Z-qHK4cEk4PZCiud4jk9kq/edit?usp=drive_link&ouid=111684243091520260943&rtpof=true&sd=true"}
//                 />
//                 <SyllabusComp
//                     dep={"CSE"}
//                     sem={"EL"}
//                     code={"CSX4184"}
//                     title={"Network Security"}
//                     L={"2"}
//                     T={"0"}
//                     P={"2"}
//                     cred={"3"}
//                     url={"https://docs.google.com/document/d/1ily4ehPTWOAgic6r75xiILCHWnrxU2Ug/edit?usp=drive_link&ouid=111684243091520260943&rtpof=true&sd=true"}
//                 />
//                 <SyllabusComp
//                     dep={"CSE"}
//                     sem={"EL"}
//                     code={"CSX4185"}
//                     title={"Intrusion Detection"}
//                     L={"2"}
//                     T={"0"}
//                     P={"2"}
//                     cred={"3"}
//                     url={"https://docs.google.com/document/d/1aMiXuihrDJTyt2U3dwO9D7Fvo4PFxlsc/edit?usp=drive_link&ouid=111684243091520260943&rtpof=true&sd=true"}
//                 />
//                 <SyllabusComp
//                     dep={"CSE"}
//                     sem={"EL"}
//                     code={"CSX4186"}
//                     title={"Time Series Analysis"}
//                     L={"2"}
//                     T={"0"}
//                     P={"2"}
//                     cred={"3"}
//                     url={"https://docs.google.com/document/d/1m_bcJswg8MdtzObwx61cgMekndH1X8Cy/edit?usp=drive_link&ouid=111684243091520260943&rtpof=true&sd=true"}
//                 />
//                 <SyllabusComp
//                     dep={"CSE"}
//                     sem={"EL"}
//                     code={"CSX4187"}
//                     title={"Big Data Analytics"}
//                     L={"2"}
//                     T={"0"}
//                     P={"2"}
//                     cred={"3"}
//                     url={"https://docs.google.com/document/d/1p66-Ihn_FyTdIUmC8TAyOQi_mZPdoM01/edit?usp=drive_link&ouid=111684243091520260943&rtpof=true&sd=true"}
//                 />
//                 <SyllabusComp
//                     dep={"CSE"}
//                     sem={"EL"}
//                     code={"CSX4188"}
//                     title={"Multimedia Systems"}
//                     L={"3"}
//                     T={"0"}
//                     P={"0"}
//                     cred={"3"}
//                     url={"https://docs.google.com/document/d/1A9wohyFyPddlD2KBKS3662m6R0Y4dV7U/edit?usp=drive_link&ouid=111684243091520260943&rtpof=true&sd=true"}
//                 />
//                 <SyllabusComp
//                     dep={"CSE"}
//                     sem={"EL"}
//                     code={"CSX4189"}
//                     title={"Biometric Security"}
//                     L={"3"}
//                     T={"0"}
//                     P={"0"}
//                     cred={"3"}
//                     url={"https://docs.google.com/document/d/1FtyV2XWKYNDnAlpa6W61i5Ak60amOqMH/edit?usp=drive_link&ouid=111684243091520260943&rtpof=true&sd=true"}
//                 />
//                 <SyllabusComp
//                     dep={"CSE"}
//                     sem={"EL"}
//                     code={"CSX4190"}
//                     title={"Federated Learning"}
//                     L={"3"}
//                     T={"0"}
//                     P={"0"}
//                     cred={"3"}
//                     url={"https://docs.google.com/document/d/1hWgm8ETwI-pbjRT-WPJiKNl5VdyGOdoU/edit?usp=drive_link&ouid=111684243091520260943&rtpof=true&sd=true"}
//                 />
//                 <SyllabusComp
//                     dep={"CSE"}
//                     sem={"EL"}
//                     code={"CSX4191"}
//                     title={"Knowledge Representation & Reasoning"}
//                     L={"3"}
//                     T={"0"}
//                     P={"0"}
//                     cred={"3"}
//                     url={"https://docs.google.com/document/d/1JQx5ITa2eARL0PB0hFm50-9TYWefUYRk/edit?usp=drive_link&ouid=111684243091520260943&rtpof=true&sd=true"}
//                 />
//                 <SyllabusComp
//                     dep={"CSE"}
//                     sem={"EL"}
//                     code={"CSX4192"}
//                     title={"Decision Support Systems"}
//                     L={"3"}
//                     T={"0"}
//                     P={"0"}
//                     cred={"3"}
//                     url={"https://docs.google.com/document/d/1UQ2q8JYRcLvWv_Wo0skTrHWTZdUc2NuU/edit?usp=drive_link&ouid=111684243091520260943&rtpof=true&sd=true"}
//                 />
//                 <SyllabusComp
//                     dep={"CSE"}
//                     sem={"EL"}
//                     code={"HSXXXXX"}
//                     title={"Intellectual Property Rights"}
//                     L={"3"}
//                     T={"0"}
//                     P={"0"}
//                     cred={"3"}
//                     url={"https://drive.google.com/file/d/1B2lsjm_vOEwYCSTB6lOcjL7Lg8PJp6EE/view?usp=drive_link"}
//                 />
//                 <SyllabusComp
//                     dep={"CSE"}
//                     sem={"EL"}
//                     code={"CSX4260"}
//                     title={"Blockchain Technology"}
//                     L={"3"}
//                     T={"0"}
//                     P={"0"}
//                     cred={"3"}
//                     url={"https://docs.google.com/document/d/15qyCDMiYpkF8jkg32aD4lV9F1h7CincF/edit?usp=drive_link&ouid=111684243091520260943&rtpof=true&sd=true"}
//                 />
//                 <SyllabusComp
//                     dep={"CSE"}
//                     sem={"EL"}
//                     code={"CSX4261"}
//                     title={"Cloud Computing Security"}
//                     L={"3"}
//                     T={"0"}
//                     P={"0"}
//                     cred={"3"}
//                     url={"https://docs.google.com/document/d/1qchKU19UhaUKf933cNYgjWVrtqWmld7k/edit?usp=drive_link&ouid=111684243091520260943&rtpof=true&sd=true"}
//                 />
//                 <SyllabusComp
//                     dep={"CSE"}
//                     sem={"EL"}
//                     code={"CSX4262"}
//                     title={"Cyber laws and rights"}
//                     L={"3"}
//                     T={"0"}
//                     P={"0"}
//                     cred={"3"}
//                     url={"https://docs.google.com/document/d/1hMoGZzUWLPRBd8mvcem-rZDLr8ap3rrd/edit?usp=drive_link&ouid=111684243091520260943&rtpof=true&sd=true"}
//                 />
//                 <SyllabusComp
//                     dep={"CSE"}
//                     sem={"EL"}
//                     code={"CSX4263"}
//                     title={"Cyber Security"}
//                     L={"3"}
//                     T={"0"}
//                     P={"0"}
//                     cred={"3"}
//                     url={"https://docs.google.com/document/d/1sv_MRVz7jsX8zbjHcKLvJUeNeHPTv9cV/edit?usp=drive_link&ouid=111684243091520260943&rtpof=true&sd=true"}
//                 />
//                 <SyllabusComp
//                     dep={"CSE"}
//                     sem={"EL"}
//                     code={"CSX4264"}
//                     title={"Data Visualization"}
//                     L={"2"}
//                     T={"0"}
//                     P={"2"}
//                     cred={"3"}
//                     url={"https://docs.google.com/document/d/14GbqFnR2v9BTZN6PEaFf-a2I6hXrQqdo/edit?usp=drive_link&ouid=111684243091520260943&rtpof=true&sd=true"}
//                 />
//                 <SyllabusComp
//                     dep={"CSE"}
//                     sem={"EL"}
//                     code={"CSX4265"}
//                     title={"Deep Learning Algorithms"}
//                     L={"2"}
//                     T={"0"}
//                     P={"2"}
//                     cred={"3"}
//                     url={"https://docs.google.com/document/d/1M8ZcQ7PKrQfcIi1rQNx3z6FYmSE4Vhrl/edit?usp=drive_link&ouid=111684243091520260943&rtpof=true&sd=true"}
//                 />
//                 <SyllabusComp
//                     dep={"CSE"}
//                     sem={"EL"}
//                     code={"CSX4266"}
//                     title={"Digital Watermarking and Steganography"}
//                     L={"3"}
//                     T={"0"}
//                     P={"0"}
//                     cred={"3"}
//                     url={"https://docs.google.com/document/d/1P0_HF6hjmrMfDPYxbZqhpa_bMDwjKEun/edit?usp=drive_link&ouid=111684243091520260943&rtpof=true&sd=true"}
//                 />
//                 <SyllabusComp
//                     dep={"CSE"}
//                     sem={"EL"}
//                     code={"CSX4267"}
//                     title={"Distributed System Design"}
//                     L={"3"}
//                     T={"0"}
//                     P={"0"}
//                     cred={"3"}
//                     url={"https://docs.google.com/document/d/1b11NpjhC_5hKwrxid7QJjeiaGsFHSYWD/edit?usp=drive_link&ouid=111684243091520260943&rtpof=true&sd=true"}
//                 />
//                 <SyllabusComp
//                     dep={"CSE"}
//                     sem={"EL"}
//                     code={"CSX4268"}
//                     title={"Embedded System and Hardware Security"}
//                     L={"3"}
//                     T={"0"}
//                     P={"0"}
//                     cred={"3"}
//                     url={"https://docs.google.com/document/d/1i4VeUmDRcPlSdMQmdDpfmf32LiAkdilW/edit?usp=drive_link&ouid=111684243091520260943&rtpof=true&sd=true"}
//                 />
//                 <SyllabusComp
//                     dep={"CSE"}
//                     sem={"EL"}
//                     code={"CSX4269"}
//                     title={"Ethical Hacking"}
//                     L={"2"}
//                     T={"0"}
//                     P={"2"}
//                     cred={"3"}
//                     url={"https://docs.google.com/document/d/1s112w4TMnmSLD4D8U3tilPEUwVhv5sxu/edit?usp=drive_link&ouid=111684243091520260943&rtpof=true&sd=true"}
//                 />
//                 <SyllabusComp
//                     dep={"CSE"}
//                     sem={"EL"}
//                     code={"CSX4270"}
//                     title={"Information Theory and Coding"}
//                     L={"3"}
//                     T={"0"}
//                     P={"0"}
//                     cred={"3"}
//                     url={"https://docs.google.com/document/d/1TUnaAOBCZj9JkO-kd0MBx2L-vtooFOaP/edit?usp=drive_link&ouid=111684243091520260943&rtpof=true&sd=true"}
//                 />
//                 <SyllabusComp
//                     dep={"CSE"}
//                     sem={"EL"}
//                     code={"CSX4271"}
//                     title={"Mathematical Foundations for Information Security"}
//                     L={"3"}
//                     T={"0"}
//                     P={"0"}
//                     cred={"3"}
//                     url={"https://docs.google.com/document/d/1AlRlTB8MOUmluidn8QGZ-rcrLUK-7nVZ/edit?usp=drive_link&ouid=111684243091520260943&rtpof=true&sd=true"}
//                 />
//                 <SyllabusComp
//                     dep={"CSE"}
//                     sem={"EL"}
//                     code={"CSX4272"}
//                     title={"Natural Language Processing Technique"}
//                     L={"2"}
//                     T={"0"}
//                     P={"2"}
//                     cred={"3"}
//                     url={"https://docs.google.com/document/d/1WL-xbB35VRYnVfgS3W6JAtCmXHJiU8kp/edit?usp=drive_link&ouid=111684243091520260943&rtpof=true&sd=true"}
//                 />
//                 <SyllabusComp
//                     dep={"CSE"}
//                     sem={"EL"}
//                     code={"CSX4273"}
//                     title={"Pattern Recognition Technique"}
//                     L={"2"}
//                     T={"0"}
//                     P={"2"}
//                     cred={"3"}
//                     url={"https://docs.google.com/document/d/1YXdX9UOHUZfNWTslaHEPSHvHkRWGoGVx/edit?usp=drive_link&ouid=111684243091520260943&rtpof=true&sd=true"}
//                 />
//                 <SyllabusComp
//                     dep={"CSE"}
//                     sem={"EL"}
//                     code={"CSX4274"}
//                     title={"Privacy and Security for Online Social Networks"}
//                     L={"3"}
//                     T={"0"}
//                     P={"0"}
//                     cred={"3"}
//                     url={"https://docs.google.com/document/d/1Oy7PUgBwyDTt9nno3q3pWX3t52jsdnk1/edit?usp=drive_link&ouid=111684243091520260943&rtpof=true&sd=true"}
//                 />
//                 <SyllabusComp
//                     dep={"CSE"}
//                     sem={"EL"}
//                     code={"CSX4275"}
//                     title={"Secure Software Systems"}
//                     L={"2"}
//                     T={"0"}
//                     P={"2"}
//                     cred={"3"}
//                     url={"https://docs.google.com/document/d/187zl26VzGbsiffQnkKHSLJipfubSoT7A/edit?usp=drive_link&ouid=111684243091520260943&rtpof=true&sd=true"}
//                 />
//                 <SyllabusComp
//                     dep={"CSE"}
//                     sem={"EL"}
//                     code={"CSX4276"}
//                     title={"Soft Computing"}
//                     L={"3"}
//                     T={"0"}
//                     P={"0"}
//                     cred={"3"}
//                     url={"https://docs.google.com/document/d/1GiJ9GotxaQSJwCq-uC87Jh9Y4Toy-Qhl/edit?usp=drive_link&ouid=111684243091520260943&rtpof=true&sd=true"}
//                 />
//                 <SyllabusComp
//                     dep={"CSE"}
//                     sem={"EL"}
//                     code={"CSX4277"}
//                     title={"Software Defined Networks"}
//                     L={"3"}
//                     T={"0"}
//                     P={"0"}
//                     cred={"3"}
//                     url={"https://docs.google.com/document/d/1qOSIAd5Dy2ENxoRriYABncgGeUct8YG5/edit?usp=drive_link&ouid=111684243091520260943&rtpof=true&sd=true"}
//                 />
//                 <SyllabusComp
//                     dep={"CSE"}
//                     sem={"EL"}
//                     code={"CSX4278"}
//                     title={"Ubiquitous Computing"}
//                     L={"3"}
//                     T={"0"}
//                     P={"0"}
//                     cred={"3"}
//                     url={"https://docs.google.com/document/d/18R8XlqRQ9HFTlSYm6DCYeps4jAN10-me/edit?usp=drive_link&ouid=111684243091520260943&rtpof=true&sd=true"}
//                 />
//                 <SyllabusComp
//                     dep={"CSE"}
//                     sem={"EL"}
//                     code={"CSX4279"}
//                     title={"Wireless & Mobile Security"}
//                     L={"3"}
//                     T={"0"}
//                     P={"0"}
//                     cred={"3"}
//                     url={"https://docs.google.com/document/d/1MX9MSv24klzZWdHiwFtPaNI9EH622RLR/edit?usp=drive_link&ouid=111684243091520260943&rtpof=true&sd=true"}
//                 />
//                 <SyllabusComp
//                     dep={"CSE"}
//                     sem={"EL"}
//                     code={"CSX4280"}
//                     title={"Human Computer Interaction"}
//                     L={"3"}
//                     T={"0"}
//                     P={"0"}
//                     cred={"3"}
//                     url={"https://docs.google.com/document/d/1lQuJMN-bzM-pxQ9hYNF5NjwjQZ7PVFPr/edit?usp=drive_link&ouid=111684243091520260943&rtpof=true&sd=true"}
//                 />
//                 <SyllabusComp
//                     dep={"CSE"}
//                     sem={"EL"}
//                     code={"CSX4281"}
//                     title={"Approximation Algorithms"}
//                     L={"3"}
//                     T={"0"}
//                     P={"0"}
//                     cred={"3"}
//                     url={"https://docs.google.com/document/d/1GMl-yBv7qNaQFgg8a2ym3RLTOggsTJaM/edit?usp=drive_link&ouid=111684243091520260943&rtpof=true&sd=true"}
//                 />
//                 <SyllabusComp
//                     dep={"CSE"}
//                     sem={"EL"}
//                     code={"CSX4282"}
//                     title={"Mobile Applications Development"}
//                     L={"2"}
//                     T={"0"}
//                     P={"2"}
//                     cred={"3"}
//                     url={"https://docs.google.com/document/d/1QtpOMOfCg8GIXaqfEVbCF0yNMnc_S7xs/edit?usp=drive_link&ouid=111684243091520260943&rtpof=true&sd=true"}
//                 />
//                 <SyllabusComp
//                     dep={"CSE"}
//                     sem={"EL"}
//                     code={"CSX4283"}
//                     title={"Game Theory"}
//                     L={"3"}
//                     T={"0"}
//                     P={"0"}
//                     cred={"3"}
//                     url={"https://docs.google.com/document/d/1TH0Rzj4WWrQsurXF1Vq07C5PO9hWQ1GM/edit?usp=drive_link&ouid=111684243091520260943&rtpof=true&sd=true"}
//                 />
//                 <SyllabusComp
//                     dep={"CSE"}
//                     sem={"EL"}
//                     code={"CSX4284"}
//                     title={"Computational Geometry"}
//                     L={"3"}
//                     T={"0"}
//                     P={"0"}
//                     cred={"3"}
//                     url={"https://docs.google.com/document/d/1jyFGE46oRuHdJ-0rDEyxmkh3D0DITmZT/edit?usp=drive_link&ouid=111684243091520260943&rtpof=true&sd=true"}
//                 />
//             </div>
//         </div>
//     );
// };

// const MCAITSyllabus = () => {
//     return (
//         <div className="w-full mb-10 overflow-x-auto">
//             <div className="min-w-[1000px] border">
//                 <div className="grid grid-cols-12 bg-gray-100 font-semibold text-red-900">
//                     <div className="col-span-1 border border-black flex items-center justify-center py-2">Dept.</div>
//                     <div className="col-span-1 border border-black flex items-center justify-center py-2">Sem / Electives</div>
//                     <div className="col-span-2 border border-black flex items-center justify-center py-2">Course Code</div>
//                     <div className="col-span-4 border border-black flex items-center justify-center py-2">Course Title</div>
//                     <div className="col-span-1 border border-black flex items-center justify-center py-2">L</div>
//                     <div className="col-span-1 border border-black flex items-center justify-center py-2">T</div>
//                     <div className="col-span-1 border border-black flex items-center justify-center py-2">P</div>
//                     <div className="col-span-1 border border-black flex items-center justify-center py-2">Credits</div>
//                 </div>

//                 {/* Table Row */}
//                 <SyllabusComp
//                     dep={"CSE"}
//                     sem={"1"}
//                     code={"MC470101"}
//                     title={"Problem Solving through C"}
//                     L={"3"} T={"0"} P={"2"}
//                     cred={"4"}
//                     url={"https://docs.google.com/document/d/1FV1oOQYuIZ2V_mIjTy03sGI_61pjReHe/edit?usp=drive_link&ouid=111684243091520260943&rtpof=true&sd=true"}
//                 />
//                 <SyllabusComp
//                     dep={"CSE"}
//                     sem={"1"}
//                     code={"MC470102"}
//                     title={"Mathematical Foundations of Computer Applications"}
//                     L={"3"} T={"1"} P={"0"}
//                     cred={"4"}
//                     url={"https://docs.google.com/document/d/1rvOt5qrTRMpMIRI43RNWsy55SG7UcUDL/edit?usp=drive_link&ouid=111684243091520260943&rtpof=true&sd=true"}
//                 />
//                 <SyllabusComp
//                     dep={"CSE"}
//                     sem={"1"}
//                     code={"MC470103"}
//                     title={"Computer Networks"}
//                     L={"3"} T={"0"} P={"2"}
//                     cred={"4"}
//                     url={"https://docs.google.com/document/d/16tnFG5QhraUox3TYYvCBr1_kXRqk7359/edit?usp=drive_link&ouid=111684243091520260943&rtpof=true&sd=true"}
//                 />
//                 <SyllabusComp
//                     dep={"CSE"}
//                     sem={"1"}
//                     code={"MC470104"}
//                     title={"Technical Communication"}
//                     L={"2"} T={"0"} P={"2"}
//                     cred={"3"}
//                     url={"https://docs.google.com/document/d/1r0Auj-Z9BUN91NphxqNjnrvrbLC2HLZf/edit?usp=drivesdk&ouid=105912413414551043045&rtpof=true&sd=true"}
//                 />
//                 <SyllabusComp
//                     dep={"CSE"}
//                     sem={"1"}
//                     code={"MC470105"}
//                     title={"Computer Organization and Architecture"}
//                     L={"3"} T={"1"} P={"0"}
//                     cred={"4"}
//                     url={"https://docs.google.com/document/d/1yC4wpsK1jzKUHQg_YxmtfVYj89oLO0KB/edit?usp=drive_link&ouid=111684243091520260943&rtpof=true&sd=true"}
//                 />
//                 <SyllabusComp
//                     dep={"CSE"}
//                     sem={"1"}
//                     code={"MC470106"}
//                     title={"EAA -II Swachha Bharat Mission (SBM)"}
//                     L={"0"} T={"0"} P={"2"}
//                     cred={"1"}
//                     url={""}
//                 />
//                 <SyllabusComp
//                     dep={"CSE"}
//                     sem={"2"}
//                     code={"MC470201"}
//                     title={"Data Structures"}
//                     L={"3"} T={"0"} P={"2"}
//                     cred={"4"}
//                     url={"https://docs.google.com/document/d/16k64wYC83vzOdqnKdahUw-E0UARnsapf/edit?usp=drive_link&ouid=111684243091520260943&rtpof=true&sd=true"}
//                 />
//                 <SyllabusComp
//                     dep={"CSE"}
//                     sem={"2"}
//                     code={"MC470202"}
//                     title={"Computing with Python"}
//                     L={"3"} T={"0"} P={"2"}
//                     cred={"4"}
//                     url={"https://docs.google.com/document/d/1mttudLuSXrWk3uZI9xiuUa6jxzPxarTu/edit?usp=drive_link&ouid=111684243091520260943&rtpof=true&sd=true"}
//                 />
//                 <SyllabusComp
//                     dep={"CSE"}
//                     sem={"2"}
//                     code={"MC470203"}
//                     title={"Database Management Systems"}
//                     L={"3"} T={"0"} P={"2"}
//                     cred={"4"}
//                     url={"https://docs.google.com/document/d/1yYLYR_Z8tP5F0FcC5QebQfryfzA_e3Hn/edit?usp=drive_link&ouid=111684243091520260943&rtpof=true&sd=true"}
//                 />
//                 <SyllabusComp
//                     dep={"CSE"}
//                     sem={"2"}
//                     code={"MC470204"}
//                     title={"Operating Systems"}
//                     L={"3"} T={"0"} P={"2"}
//                     cred={"4"}
//                     url={"https://docs.google.com/document/d/1tcrTuUCCSBgTh6SqwemI50Fq7YH6GzEc/edit?usp=drive_link&ouid=111684243091520260943&rtpof=true&sd=true"}
//                 />
//                 <SyllabusComp
//                     dep={"CSE"}
//                     sem={"2"}
//                     code={"MC470205"}
//                     title={"Ad-hoc & Sensor Networks"}
//                     L={"3"} T={"0"} P={"0"}
//                     cred={"3"}
//                     url={"https://docs.google.com/document/d/1NtNu0-gRLUb1kYO_EDI_mtEti9alODsA/edit?usp=drive_link&ouid=111684243091520260943&rtpof=true&sd=true"}
//                 />
//                 <SyllabusComp
//                     dep={"CSE"}
//                     sem={"2"}
//                     code={"MC470206"}
//                     title={"EAA - I Sports/Innovative Project/NCC/NSS"}
//                     L={"0"} T={"0"} P={"2"}
//                     cred={"1"}
//                     url={""}
//                 />
//                 <SyllabusComp
//                     dep={"CSE"}
//                     sem={"3"}
//                     code={"MC470301"}
//                     title={"Design and Analysis of Algorithms"}
//                     L={"3"} T={"0"} P={"2"}
//                     cred={"4"}
//                     url={"https://docs.google.com/document/d/1EORwBA86cVS6RvzaJbWxdyAEUQnCSp37/edit?usp=drive_link&ouid=111684243091520260943&rtpof=true&sd=true"}
//                 />
//                 <SyllabusComp
//                     dep={"CSE"}
//                     sem={"3"}
//                     code={"MC470302"}
//                     title={"Artificial Intelligence"}
//                     L={"3"} T={"0"} P={"2"}
//                     cred={"4"}
//                     url={"https://docs.google.com/document/d/1Cxb6ytGbaPPsGSd1ic2SHscNQmwXNO6y/edit?usp=drive_link&ouid=111684243091520260943&rtpof=true&sd=true"}
//                 />
//                 <SyllabusComp
//                     dep={"CSE"}
//                     sem={"3"}
//                     code={"MC470303"}
//                     title={"Object Oriented Programming using JAVA"}
//                     L={"2"} T={"0"} P={"2"}
//                     cred={"3"}
//                     url={"https://docs.google.com/document/d/1KY0yEMR3BY5UM7CPpceYUDLS02FO-SqO/edit?usp=drive_link&ouid=111684243091520260943&rtpof=true&sd=true"}
//                 />
//                 <SyllabusComp
//                     dep={"CSE"}
//                     sem={"3"}
//                     code={"MC470304"}
//                     title={"Internet of Things"}
//                     L={"3"} T={"0"} P={"2"}
//                     cred={"4"}
//                     url={"https://docs.google.com/document/d/1f2a1dNGuy-xiPSKGS4C3YBjdkoqY6ZpM/edit?usp=drive_link&ouid=111684243091520260943&rtpof=true&sd=true"}
//                 />
//                 <SyllabusComp
//                     dep={"CSE"}
//                     sem={"3"}
//                     code={"MC470305"}
//                     title={"Machine Learning"}
//                     L={"3"} T={"0"} P={"2"}
//                     cred={"4"}
//                     url={"https://docs.google.com/document/d/16x1uez62ptwFn-3KuGEPukDnuB8ubNix/edit?usp=drive_link&ouid=111684243091520260943&rtpof=true&sd=true"}
//                 />
//                 <SyllabusComp
//                     dep={"CSE"}
//                     sem={"4"}
//                     code={"MC470401"}
//                     title={"Deep Learning"}
//                     L={"3"} T={"0"} P={"2"}
//                     cred={"4"}
//                     url={"https://docs.google.com/document/d/1zAGN8fR3J-7QX17-1iKpWIL2_QKNU3zh/edit?usp=drive_link&ouid=111684243091520260943&rtpof=true&sd=true"}
//                 />
//                 <SyllabusComp
//                     dep={"CSE"}
//                     sem={"4"}
//                     code={"MC470402"}
//                     title={"Artificial Intelligence of Things"}
//                     L={"2"} T={"0"} P={"2"}
//                     cred={"3"}
//                     url={"https://docs.google.com/document/d/1YxrOLNDayJ6_C5E9BIeMINHBdV2DHoFM/edit?usp=drive_link&ouid=111684243091520260943&rtpof=true&sd=true"}
//                 />
//                 <SyllabusComp
//                     dep={"CSE"}
//                     sem={"4"}
//                     code={"MC470403"}
//                     title={"Data Visualization"}
//                     L={"2"} T={"0"} P={"2"}
//                     cred={"3"}
//                     url={"https://docs.google.com/document/d/1X8mv-lKL_Y8B_S7Cj06eomkyvDNrkPmQ/edit?usp=drive_link&ouid=111684243091520260943&rtpof=true&sd=true"}
//                 />
//                 <SyllabusComp
//                     dep={"CSE"}
//                     sem={"4"}
//                     code={"MC470404"}
//                     title={"Web Programming"}
//                     L={"2"} T={"0"} P={"2"}
//                     cred={"3"}
//                     url={"https://docs.google.com/document/d/1pTSzQauz4zjtRhgeDfHWmnad6a4iOtqg/edit?usp=drive_link&ouid=111684243091520260943&rtpof=true&sd=true"}
//                 />
//                 <SyllabusComp
//                     dep={"CSE"}
//                     sem={"4"}
//                     code={"MC470405"}
//                     title={"Natural Language Processing"}
//                     L={"3"} T={"0"} P={"2"}
//                     cred={"4"}
//                     url={""}
//                 />
//                 <SyllabusComp
//                     dep={"CSE"}
//                     sem={"4"}
//                     code={"MC470406"}
//                     title={"Mobile Applications Development"}
//                     L={"2"} T={"0"} P={"2"}
//                     cred={"3"}
//                     url={"https://docs.google.com/document/d/1EYUscj_LWiWNFhwLaBUNl2nNSMWKqpc_/edit?usp=drive_link&ouid=111684243091520260943&rtpof=true&sd=true"}
//                 />
//                 <SyllabusComp
//                     dep={"CSE"}
//                     sem={"4"}
//                     code={"MC470407"}
//                     title={"Seminar & Presentation"}
//                     L={"0"} T={"0"} P={"2"}
//                     cred={"1"}
//                     url={""}
//                 />
//                 <SyllabusComp
//                     dep={"CSE"}
//                     sem={"5"}
//                     code={"MC470501"}
//                     title={"Information Security"}
//                     L={"3"} T={"0"} P={"0"}
//                     cred={"3"}
//                     url={"https://docs.google.com/document/d/1eYDBWHnOAXUOX0e6dF21HHNhTTvBUlzA/edit?usp=drive_link&ouid=111684243091520260943&rtpof=true&sd=true"}
//                 />
//                 <SyllabusComp
//                     dep={"CSE"}
//                     sem={"5"}
//                     code={"MC470502"}
//                     title={"Minor Project"}
//                     L={"0"} T={"0"} P={"22"}
//                     cred={"11"}
//                     url={""}
//                 />
//                 <SyllabusComp
//                     dep={"CSE"}
//                     sem={"5"}
//                     code={"MC4705XX"}
//                     title={"Elective-I/MOOC"}
//                     L={"0"} T={"0"} P={"0"}
//                     cred={"3"}
//                     url={""}
//                 />
//                 <SyllabusComp
//                     dep={"CSE"}
//                     sem={"5"}
//                     code={"MC4705XX"}
//                     title={"Elective-II/MOOC"}
//                     L={"0"} T={"0"} P={"0"}
//                     cred={"3"}
//                     url={""}
//                 />
//                 <SyllabusComp
//                     dep={"CSE"}
//                     sem={"6"}
//                     code={"MCXX0601"}
//                     title={"Project / Industrial Training"}
//                     L={"0"} T={"0"} P={"40"}
//                     cred={"20"}
//                     url={""}
//                 />
//                 <SyllabusComp
//                     dep={"CSE"}
//                     sem={"EL"}
//                     code={"MC47XX10"}
//                     title={"Generative Deep Models"}
//                     L={"2"} T={"0"} P={"2"}
//                     cred={"3"}
//                     url={"https://docs.google.com/document/d/1XD5scsobfqtqq-MrAZX7_Qabh8H0L8Md/edit?usp=drive_link&ouid=111684243091520260943&rtpof=true&sd=true"}
//                 />
//                 <SyllabusComp
//                     dep={"CSE"}
//                     sem={"EL"}
//                     code={"MC47XX11"}
//                     title={"Explainable AI"}
//                     L={"2"} T={"0"} P={"2"}
//                     cred={"3"}
//                     url={"https://docs.google.com/document/d/10RXR8pYih1_oQGNgLJBC2H4wbg8ZBPWg/edit?usp=drive_link&ouid=111684243091520260943&rtpof=true&sd=true"}
//                 />
//                 <SyllabusComp
//                     dep={"CSE"}
//                     sem={"EL"}
//                     code={"MC47XX12"}
//                     title={"Information Retrieval"}
//                     L={"2"} T={"0"} P={"2"}
//                     cred={"3"}
//                     url={"https://docs.google.com/document/d/18qaM83QmYyQAoY6IIqAMHovAq3iwuMjO/edit?usp=drive_link&ouid=111684243091520260943&rtpof=true&sd=true"}
//                 />
//                 <SyllabusComp
//                     dep={"CSE"}
//                     sem={"EL"}
//                     code={"MC47XX13"}
//                     title={"Game Theory"}
//                     L={"3"} T={"0"} P={"0"}
//                     cred={"3"}
//                     url={"https://docs.google.com/document/d/1MDFOhtE_LVjfpxN5QBW6M1OlPn-RY_Cq/edit?usp=drive_link&ouid=111684243091520260943&rtpof=true&sd=true"}
//                 />
//                 <SyllabusComp
//                     dep={"CSE"}
//                     sem={"EL"}
//                     code={"MC47XX14"}
//                     title={"Augmented Reality (AR) and Virtual Reality (VR)"}
//                     L={"3"} T={"0"} P={"0"}
//                     cred={"3"}
//                     url={"https://docs.google.com/document/d/1P5FhovipLcJyDojRgX6ohOK42ZwAUfJJ/edit?usp=drive_link&ouid=111684243091520260943&rtpof=true&sd=true"}
//                 />
//                 <SyllabusComp
//                     dep={"CSE"}
//                     sem={"EL"}
//                     code={"MC47XX15"}
//                     title={"Intrusion Detection"}
//                     L={"3"} T={"0"} P={"0"}
//                     cred={"3"}
//                     url={"https://docs.google.com/document/d/1Hn0Nxik3PU0iwrNq4umiBnbC9Nn2cHkH/edit?usp=drive_link&ouid=111684243091520260943&rtpof=true&sd=true"}
//                 />
//                 <SyllabusComp
//                     dep={"CSE"}
//                     sem={"EL"}
//                     code={"MC47XX16"}
//                     title={"Malware Analysis"}
//                     L={"2"} T={"0"} P={"2"}
//                     cred={"3"}
//                     url={"https://docs.google.com/document/d/1bi_OU13XYC9yG496WrWb0A6lYrhNXylO/edit?usp=drive_link&ouid=111684243091520260943&rtpof=true&sd=true"}
//                 />
//                 <SyllabusComp
//                     dep={"CSE"}
//                     sem={"EL"}
//                     code={"MC47XX17"}
//                     title={"Digital Forensic"}
//                     L={"2"} T={"0"} P={"2"}
//                     cred={"3"}
//                     url={"https://docs.google.com/document/d/18OsoyNsgrirX5NHddVpLBvWUKffLCz0j/edit?usp=drive_link&ouid=111684243091520260943&rtpof=true&sd=true"}
//                 />
//                 <SyllabusComp
//                     dep={"CSE"}
//                     sem={"EL"}
//                     code={"MC47XX18"}
//                     title={"Text Analytics"}
//                     L={"2"} T={"0"} P={"2"}
//                     cred={"3"}
//                     url={"https://docs.google.com/document/d/1gXNxUGZREP4i3NaIVLxzVHhdM-9O3a3J/edit?usp=drive_link&ouid=111684243091520260943&rtpof=true&sd=true"}
//                 />
//                 <SyllabusComp
//                     dep={"CSE"}
//                     sem={"EL"}
//                     code={"MC47XX19"}
//                     title={"Computer Vision"}
//                     L={"3"} T={"0"} P={"0"}
//                     cred={"3"}
//                     url={"https://docs.google.com/document/d/1EHskGa1oJyDm0FGbCqU-r6VQzbM_064x/edit?usp=drive_link&ouid=111684243091520260943&rtpof=true&sd=true"}
//                 />
//                 <SyllabusComp
//                     dep={"CSE"}
//                     sem={"EL"}
//                     code={"MC47XX20"}
//                     title={"Reinforcement Learning"}
//                     L={"2"} T={"0"} P={"2"}
//                     cred={"3"}
//                     url={"https://docs.google.com/document/d/1gczkVV2yA5bDvtrRafSmbe1n4BJSpXC9/edit?usp=drive_link&ouid=111684243091520260943&rtpof=true&sd=true"}
//                 />
//                 <SyllabusComp
//                     dep={"CSE"}
//                     sem={"EL"}
//                     code={"MC47XX21"}
//                     title={"Blockchain Technology"}
//                     L={"3"} T={"0"} P={"0"}
//                     cred={"3"}
//                     url={"https://docs.google.com/document/d/1uhjjBoaKjmd7BiJVsJEdPbBGgA_OAp8R/edit?usp=drive_link&ouid=111684243091520260943&rtpof=true&sd=true"}
//                 />
//                 <SyllabusComp
//                     dep={"CSE"}
//                     sem={"EL"}
//                     code={"MC47XX22"}
//                     title={"Data Mining and Warehousing"}
//                     L={"3"} T={"0"} P={"0"}
//                     cred={"3"}
//                     url={"https://docs.google.com/document/d/1juciqJ33CwhcD7QKynIax_OXik5uSxOs/edit?usp=drive_link&ouid=111684243091520260943&rtpof=true&sd=true"}
//                 />
//                 <SyllabusComp
//                     dep={"CSE"}
//                     sem={"EL"}
//                     code={"MC47XX23"}
//                     title={"Recommendation Systems"}
//                     L={"3"} T={"0"} P={"0"}
//                     cred={"3"}
//                     url={"https://docs.google.com/document/d/1O-x-b_Wzu_PdSIimQg0sjavP4fqXLXSs/edit?usp=drive_link&ouid=111684243091520260943&rtpof=true&sd=true"}
//                 />
//                 <SyllabusComp
//                     dep={"CSE"}
//                     sem={"EL"}
//                     code={"MC47XX24"}
//                     title={"Cloud Computing"}
//                     L={"3"} T={"0"} P={"0"}
//                     cred={"3"}
//                     url={"https://docs.google.com/document/d/1oiciDT_511AjsYdPFlW1VVN6VhQfNVUN/edit?usp=drive_link&ouid=111684243091520260943&rtpof=true&sd=true"}
//                 />
//                 <SyllabusComp
//                     dep={"CSE"}
//                     sem={"EL"}
//                     code={"MC47XX25"}
//                     title={"Image Processing Techniques"}
//                     L={"3"} T={"0"} P={"0"}
//                     cred={"3"}
//                     url={"https://docs.google.com/document/d/19xR8HraOPVy7p1cH5xgLNKm7267w5k7J/edit?usp=drive_link&ouid=111684243091520260943&rtpof=true&sd=true"}
//                 />
//                 <SyllabusComp
//                     dep={"CSE"}
//                     sem={"EL"}
//                     code={"MC47XX26"}
//                     title={"Computer System and Security"}
//                     L={"3"} T={"0"} P={"0"}
//                     cred={"3"}
//                     url={"https://docs.google.com/document/d/1DkP_kXBUycqU7G0ubITXrE0OjNg5do7P/edit?usp=drive_link&ouid=111684243091520260943&rtpof=true&sd=true"}
//                 />
//                 <SyllabusComp
//                     dep={"CSE"}
//                     sem={"EL"}
//                     code={"MC47XX27"}
//                     title={"Smart Agriculture"}
//                     L={"3"} T={"0"} P={"0"}
//                     cred={"3"}
//                     url={"https://docs.google.com/document/d/1i776pUS1_glxH83qVWTmGcEHgeYogSSi/edit?usp=drive_link&ouid=111684243091520260943&rtpof=true&sd=true"}
//                 />
//                 <SyllabusComp
//                     dep={"CSE"}
//                     sem={"EL"}
//                     code={"MC47XX28"}
//                     title={"Human Computer Interaction"}
//                     L={"3"} T={"0"} P={"0"}
//                     cred={"3"}
//                     url={"https://docs.google.com/document/d/1LcP5ZRTCoVwaHmCOXXDIx1HaxN51aIBL/edit?usp=drive_link&ouid=111684243091520260943&rtpof=true&sd=true"}
//                 />
//                 <SyllabusComp
//                     dep={"CSE"}
//                     sem={"EL"}
//                     code={"MC47XX29"}
//                     title={"Social IoT"}
//                     L={"3"} T={"0"} P={"0"}
//                     cred={"3"}
//                     url={"https://docs.google.com/document/d/1WVcCufZiel02dQz9aYydX9ujE9uYvGkK/edit?usp=drive_link&ouid=111684243091520260943&rtpof=true&sd=true"}
//                 />
//             </div>
//         </div>
//     );
// };

// const MCADSSyllabus = () => {
//     return (
//         <div className="w-full mb-10 overflow-x-auto">
//             <div className="min-w-[1000px] border">
//                 <div className="grid grid-cols-12 bg-gray-100 font-semibold text-red-900">
//                     <div className="col-span-1 border border-black flex items-center justify-center py-2">Dept.</div>
//                     <div className="col-span-1 border border-black flex items-center justify-center py-2">Sem / Electives</div>
//                     <div className="col-span-2 border border-black flex items-center justify-center py-2">Course Code</div>
//                     <div className="col-span-4 border border-black flex items-center justify-center py-2">Course Title</div>
//                     <div className="col-span-1 border border-black flex items-center justify-center py-2">L</div>
//                     <div className="col-span-1 border border-black flex items-center justify-center py-2">T</div>
//                     <div className="col-span-1 border border-black flex items-center justify-center py-2">P</div>
//                     <div className="col-span-1 border border-black flex items-center justify-center py-2">Credits</div>
//                 </div>

//                 {/* Table Row */}
//                 <SyllabusComp
//                     dep={"CSE"}
//                     sem={"1"}
//                     code={"MC460101"}
//                     title={"Mathematics for Data Science"}
//                     L={"3"} T={"1"} P={"0"}
//                     cred={"4"}
//                     url={"https://docs.google.com/document/d/15PacB_x_Z1zhd4s4nGcZVV8uK9fBWOzF/edit?usp=drive_link&ouid=111684243091520260943&rtpof=true&sd=true"}
//                 />
//                 <SyllabusComp
//                     dep={"CSE"}
//                     sem={"1"}
//                     code={"MC460102"}
//                     title={"Introduction to Programming & Problem Solving"}
//                     L={"3"} T={"0"} P={"2"}
//                     cred={"4"}
//                     url={"https://docs.google.com/document/d/1uG_lL0dbQqlkNIwsF1P31QM2EmkjQaRT/edit?usp=drive_link&ouid=111684243091520260943&rtpof=true&sd=true"}
//                 />
//                 <SyllabusComp
//                     dep={"CSE"}
//                     sem={"1"}
//                     code={"MC460103"}
//                     title={"Computing with Python"}
//                     L={"3"} T={"0"} P={"2"}
//                     cred={"4"}
//                     url={"https://docs.google.com/document/d/1tvSUqOdffHdAXt6j9W3bnLp41nxcUxWF/edit?usp=drive_link&ouid=111684243091520260943&rtpof=true&sd=true"}
//                 />
//                 <SyllabusComp
//                     dep={"CSE"}
//                     sem={"1"}
//                     code={"MC460104"}
//                     title={"Technical Communication"}
//                     L={"2"} T={"0"} P={"2"}
//                     cred={"3"}
//                     url={""}
//                 />
//                 <SyllabusComp
//                     dep={"CSE"}
//                     sem={"1"}
//                     code={"MC460105"}
//                     title={"Introduction to Informatics"}
//                     L={"3"} T={"0"} P={"0"}
//                     cred={"3"}
//                     url={"https://docs.google.com/document/d/1EwDykCXuXvAJaQmzKaoQk2NwoVBs-trn/edit?usp=drive_link&ouid=111684243091520260943&rtpof=true&sd=true"}
//                 />
//                 <SyllabusComp
//                     dep={"CSE"}
//                     sem={"1"}
//                     code={"MC460106"}
//                     title={"EAA-II Swachha Bharat Mission (SBM)"}
//                     L={"0"} T={"0"} P={"2"}
//                     cred={"1"}
//                     url={""}
//                 />
//                 <SyllabusComp
//                     dep={"CSE"}
//                     sem={"2"}
//                     code={"MC460201"}
//                     title={"Data Communication and Networks"}
//                     L={"3"} T={"0"} P={"2"}
//                     cred={"4"}
//                     url={"https://docs.google.com/document/d/1PJBUU50zuQ6Jn4js_SRE_5BCYMbjd1gw/edit?usp=drive_link&ouid=111684243091520260943&rtpof=true&sd=true"}
//                 />
//                 <SyllabusComp
//                     dep={"CSE"}
//                     sem={"2"}
//                     code={"MC460202"}
//                     title={"Data Structures"}
//                     L={"3"} T={"0"} P={"2"}
//                     cred={"4"}
//                     url={"https://docs.google.com/document/d/14KpllkAco3LwmyBJP4XvAb2vA0JxO0zl/edit?usp=drive_link&ouid=111684243091520260943&rtpof=true&sd=true"}
//                 />
//                 <SyllabusComp
//                     dep={"CSE"}
//                     sem={"2"}
//                     code={"MC460203"}
//                     title={"Database Management Systems"}
//                     L={"3"} T={"0"} P={"2"}
//                     cred={"4"}
//                     url={"https://docs.google.com/document/d/1WR349G54m62-T_y3Bw2ZiptSAe0-a-du/edit?usp=drive_link&ouid=111684243091520260943&rtpof=true&sd=true"}
//                 />
//                 <SyllabusComp
//                     dep={"CSE"}
//                     sem={"2"}
//                     code={"MC460204"}
//                     title={"Object Oriented Programming using Java"}
//                     L={"3"} T={"0"} P={"2"}
//                     cred={"4"}
//                     url={"https://docs.google.com/document/d/1ivhOdmtDt7YSSm0jru_lu_zTXFls08sa/edit?usp=drive_link&ouid=111684243091520260943&rtpof=true&sd=true"}
//                 />
//                 <SyllabusComp
//                     dep={"CSE"}
//                     sem={"2"}
//                     code={"MC460205"}
//                     title={"Discrete Mathematics & Graph Theory"}
//                     L={"3"} T={"1"} P={"0"}
//                     cred={"4"}
//                     url={"https://docs.google.com/document/d/12qQuqOJ9mL4L-upIhhAC8VRK90wfz_jb/edit?usp=drive_link&ouid=111684243091520260943&rtpof=true&sd=true"}
//                 />
//                 <SyllabusComp
//                     dep={"CSE"}
//                     sem={"2"}
//                     code={"MC460206"}
//                     title={"EAA-I Sports/Innovative Project/NCC/NSS"}
//                     L={"0"} T={"0"} P={"2"}
//                     cred={"1"}
//                     url={""}
//                 />
//                 <SyllabusComp
//                     dep={"CSE"}
//                     sem={"3"}
//                     code={"MC460301"}
//                     title={"Artificial Intelligence"}
//                     L={"3"} T={"0"} P={"2"}
//                     cred={"4"}
//                     url={"https://docs.google.com/document/d/1j8jBvWwQ7-5nFZFVcK0BcoNren0UeZw6/edit?usp=drivesdk&ouid=105912413414551043045&rtpof=true&sd=true"}
//                 />
//                 <SyllabusComp
//                     dep={"CSE"}
//                     sem={"3"}
//                     code={"MC460302"}
//                     title={"Operating Systems"}
//                     L={"3"} T={"0"} P={"2"}
//                     cred={"4"}
//                     url={"https://docs.google.com/document/d/1QmT3YerSIhA9rqzIJFglEoDKhAIk21j-/edit?usp=drive_link&ouid=111684243091520260943&rtpof=true&sd=true"}
//                 />
//                 <SyllabusComp
//                     dep={"CSE"}
//                     sem={"3"}
//                     code={"MC460303"}
//                     title={"Machine Learning"}
//                     L={"3"} T={"0"} P={"2"}
//                     cred={"4"}
//                     url={"https://docs.google.com/document/d/1OHgm7MJifvA0Fy_PBq8Rwsk-Esb1W8Wv/edit?usp=drive_link&ouid=111684243091520260943&rtpof=true&sd=true"}
//                 />
//                 <SyllabusComp
//                     dep={"CSE"}
//                     sem={"3"}
//                     code={"MC460304"}
//                     title={"Design and Analysis of Algorithms"}
//                     L={"3"} T={"0"} P={"2"}
//                     cred={"4"}
//                     url={"https://docs.google.com/document/d/1SAPPqtzll06DY9NmCP2_Jk3dabVZSMlL/edit?usp=drive_link&ouid=111684243091520260943&rtpof=true&sd=true"}
//                 />
//                 <SyllabusComp
//                     dep={"CSE"}
//                     sem={"3"}
//                     code={"MC460305"}
//                     title={"Data Preparation & Visualization"}
//                     L={"3"} T={"0"} P={"2"}
//                     cred={"4"}
//                     url={"https://docs.google.com/document/d/14ezMq5L5faidMaGIH3L9JMmKdnM0GETR/edit?usp=drive_link&ouid=111684243091520260943&rtpof=true&sd=true"}
//                 />
//                 <SyllabusComp
//                     dep={"CSE"}
//                     sem={"4"}
//                     code={"MC460401"}
//                     title={"Big Data Analytics"}
//                     L={"3"} T={"0"} P={"2"}
//                     cred={"4"}
//                     url={"https://docs.google.com/document/d/16pUrDDA4Icvo_jXIXwu_JDNbnNIK05EJ/edit?usp=drive_link&ouid=111684243091520260943&rtpof=true&sd=true"}
//                 />
//                 <SyllabusComp
//                     dep={"CSE"}
//                     sem={"4"}
//                     code={"MC460402"}
//                     title={"Bioinformatics"}
//                     L={"3"} T={"0"} P={"0"}
//                     cred={"3"}
//                     url={"https://docs.google.com/document/d/1l8Q6AIi1w70PO4_IN21FqxEyCRLjxYvt/edit?usp=drive_link&ouid=111684243091520260943&rtpof=true&sd=true"}
//                 />
//                 <SyllabusComp
//                     dep={"CSE"}
//                     sem={"4"}
//                     code={"MC460403"}
//                     title={"Deep Learning"}
//                     L={"3"} T={"0"} P={"2"}
//                     cred={"4"}
//                     url={"https://docs.google.com/document/d/1mG4ssfeZJUEKXwEkIiIelWVGj-Nu2dRx/edit?usp=drive_link&ouid=111684243091520260943&rtpof=true&sd=true"}
//                 />
//                 <SyllabusComp
//                     dep={"CSE"}
//                     sem={"4"}
//                     code={"MC460404"}
//                     title={"Information Retrieval"}
//                     L={"3"} T={"0"} P={"2"}
//                     cred={"4"}
//                     url={"https://docs.google.com/document/d/13Qkt2N2E1BpazvR01fPcj0Fe0ZNgOUzX/edit?usp=drive_link&ouid=111684243091520260943&rtpof=true&sd=true"}
//                 />
//                 <SyllabusComp
//                     dep={"CSE"}
//                     sem={"4"}
//                     code={"MC460405"}
//                     title={"Computer Vision"}
//                     L={"3"} T={"0"} P={"2"}
//                     cred={"4"}
//                     url={"https://docs.google.com/document/d/1Fwmoz4vrnj4Pw4fwL6Y9ZR-I-dAuV193/edit?usp=drive_link&ouid=111684243091520260943&rtpof=true&sd=true"}
//                 />
//                 <SyllabusComp
//                     dep={"CSE"}
//                     sem={"4"}
//                     code={"MC460406"}
//                     title={"Seminar & Presentation"}
//                     L={"0"} T={"0"} P={"2"}
//                     cred={"1"}
//                     url={""}
//                 />
//                 <SyllabusComp
//                     dep={"CSE"}
//                     sem={"5"}
//                     code={"MC460501"}
//                     title={"Human Computer Interaction"}
//                     L={"3"} T={"0"} P={"0"}
//                     cred={"3"}
//                     url={"https://docs.google.com/document/d/1uDgZ3KeyuYzejJl-82KeetP87k_xWjJT/edit?usp=drive_link&ouid=111684243091520260943&rtpof=true&sd=true"}
//                 />
//                 <SyllabusComp
//                     dep={"CSE"}
//                     sem={"5"}
//                     code={"MC460502"}
//                     title={"Minor Project I"}
//                     L={"0"} T={"0"} P={"22"}
//                     cred={"11"}
//                     url={""}
//                 />
//                 <SyllabusComp
//                     dep={"CSE"}
//                     sem={"5"}
//                     code={"MC4605XX"}
//                     title={"Elective – I/MOOC"}
//                     L={"0"} T={"0"} P={"0"}
//                     cred={"3"}
//                     url={""}
//                 />
//                 <SyllabusComp
//                     dep={"CSE"}
//                     sem={"5"}
//                     code={"MC4605XX"}
//                     title={"Elective – II/MOOC"}
//                     L={"0"} T={"0"} P={"0"}
//                     cred={"3"}
//                     url={""}
//                 />
//                 <SyllabusComp
//                     dep={"CSE"}
//                     sem={"6"}
//                     code={"MC460601"}
//                     title={"Major Project/Internship"}
//                     L={"0"} T={"0"} P={"40"}
//                     cred={"20"}
//                     url={""}
//                 />
//                 <SyllabusComp
//                     dep={"CSE"}
//                     sem={"EL"}
//                     code={"MC46XX10"}
//                     title={"Generative Deep Model"}
//                     L={"2"} T={"0"} P={"2"}
//                     cred={"3"}
//                     url={""}
//                 />
//                 <SyllabusComp
//                     dep={"CSE"}
//                     sem={"EL"}
//                     code={"MC46XX11"}
//                     title={"Explainable AI"}
//                     L={"2"} T={"0"} P={"2"}
//                     cred={"3"}
//                     url={"https://docs.google.com/document/d/1KjiTARXwV3dtKdL1GQQFTepp3sAaRCuw/edit?usp=drive_link&ouid=111684243091520260943&rtpof=true&sd=true"}
//                 />
//                 <SyllabusComp
//                     dep={"CSE"}
//                     sem={"EL"}
//                     code={"MC46XX12"}
//                     title={"Internet of Things"}
//                     L={"3"} T={"0"} P={"0"}
//                     cred={"3"}
//                     url={"https://docs.google.com/document/d/1qqxKsvpXn3Xt6J2H5hWlEuKTeXQnG4u7/edit?usp=drive_link&ouid=111684243091520260943&rtpof=true&sd=true"}
//                 />
//                 <SyllabusComp
//                     dep={"CSE"}
//                     sem={"EL"}
//                     code={"MC46XX13"}
//                     title={"Game Theory"}
//                     L={"3"} T={"0"} P={"0"}
//                     cred={"3"}
//                     url={"https://docs.google.com/document/d/1vSciwSNByKSgld9ntm1At19TkEaYH_pO/edit?usp=drive_link&ouid=111684243091520260943&rtpof=true&sd=true"}
//                 />
//                 <SyllabusComp
//                     dep={"CSE"}
//                     sem={"EL"}
//                     code={"MC46XX14"}
//                     title={"Augmented Reality/Virtual Reality"}
//                     L={"3"} T={"0"} P={"0"}
//                     cred={"3"}
//                     url={"https://docs.google.com/document/d/18UaBQc4kVPVKtYDk4Q4Z5f6SxKZhv5RM/edit?usp=drive_link&ouid=111684243091520260943&rtpof=true&sd=true"}
//                 />
//                 <SyllabusComp
//                     dep={"CSE"}
//                     sem={"EL"}
//                     code={"MC46XX15"}
//                     title={"Intrusion Detection"}
//                     L={"3"} T={"0"} P={"0"}
//                     cred={"3"}
//                     url={"https://docs.google.com/document/d/1eBD4WveWHS3GNTscblF3m8jxy67NbHmW/edit?usp=drive_link&ouid=111684243091520260943&rtpof=true&sd=true"}
//                 />
//                 <SyllabusComp
//                     dep={"CSE"}
//                     sem={"EL"}
//                     code={"MC46XX16"}
//                     title={"Malware Analysis"}
//                     L={"2"} T={"0"} P={"2"}
//                     cred={"3"}
//                     url={"https://docs.google.com/document/d/1bbtI5laHbsBncqpAazSut-ALPZ6ZE49M/edit?usp=drive_link&ouid=111684243091520260943&rtpof=true&sd=true"}
//                 />
//                 <SyllabusComp
//                     dep={"CSE"}
//                     sem={"EL"}
//                     code={"MC46XX17"}
//                     title={"Digital Forensic"}
//                     L={"2"} T={"0"} P={"2"}
//                     cred={"3"}
//                     url={"https://docs.google.com/document/d/1LnJ78iOUKUtRSaApdYdXmgUExR4z1KYP/edit?usp=drive_link&ouid=111684243091520260943&rtpof=true&sd=true"}
//                 />
//                 <SyllabusComp
//                     dep={"CSE"}
//                     sem={"EL"}
//                     code={"MC46XX18"}
//                     title={"Text Analytics"}
//                     L={"2"} T={"0"} P={"2"}
//                     cred={"3"}
//                     url={"https://docs.google.com/document/d/1b3D8nOlDVIQpiK8Gjtxn80E087q1PgQK/edit?usp=drive_link&ouid=111684243091520260943&rtpof=true&sd=true"}
//                 />
//                 <SyllabusComp
//                     dep={"CSE"}
//                     sem={"EL"}
//                     code={"MC46XX20"}
//                     title={"Reinforcement Learning"}
//                     L={"2"} T={"0"} P={"2"}
//                     cred={"3"}
//                     url={"https://docs.google.com/document/d/1H48hURtZjatIUtM4UrpE8APR4MK8C4nb/edit?usp=drive_link&ouid=111684243091520260943&rtpof=true&sd=true"}
//                 />
//                 <SyllabusComp
//                     dep={"CSE"}
//                     sem={"EL"}
//                     code={"MC46XX21"}
//                     title={"Blockchain Technology"}
//                     L={"3"} T={"0"} P={"0"}
//                     cred={"3"}
//                     url={"https://docs.google.com/document/d/1j5xuNoXbTgPwnQN7W9ztzfiHdZh2hm-l/edit?usp=drive_link&ouid=111684243091520260943&rtpof=true&sd=true"}
//                 />
//                 <SyllabusComp
//                     dep={"CSE"}
//                     sem={"EL"}
//                     code={"MC46XX22"}
//                     title={"Data Mining and Warehousing"}
//                     L={"3"} T={"0"} P={"0"}
//                     cred={"3"}
//                     url={"https://docs.google.com/document/d/1oSd28W5RdZ_NVndmbd6oX1L7GcABpKjB/edit?usp=drive_link&ouid=111684243091520260943&rtpof=true&sd=true"}
//                 />
//                 <SyllabusComp
//                     dep={"CSE"}
//                     sem={"EL"}
//                     code={"MC46XX23"}
//                     title={"Recommendation Systems"}
//                     L={"3"} T={"0"} P={"0"}
//                     cred={"3"}
//                     url={"https://docs.google.com/document/d/1PtMufhG3s4TDVpt3E_F3wpcip9KhJIEm/edit?usp=drive_link&ouid=111684243091520260943&rtpof=true&sd=true"}
//                 />
//                 <SyllabusComp
//                     dep={"CSE"}
//                     sem={"EL"}
//                     code={"MC46XX24"}
//                     title={"Cloud Computing"}
//                     L={"3"} T={"0"} P={"0"}
//                     cred={"3"}
//                     url={"https://docs.google.com/document/d/1GIAJG-s7ZmHr_RMm_Q2yUHfNrOyhMxua/edit?usp=drive_link&ouid=111684243091520260943&rtpof=true&sd=true"}
//                 />
//                 <SyllabusComp
//                     dep={"CSE"}
//                     sem={"EL"}
//                     code={"MC46XX25"}
//                     title={"Computer System and Security"}
//                     L={"3"} T={"0"} P={"0"}
//                     cred={"3"}
//                     url={"https://docs.google.com/document/d/1ruALr7BirbLfmkT0-C0UB4kXHHd1Ow5J/edit?usp=drive_link&ouid=111684243091520260943&rtpof=true&sd=true"}
//                 />
//                 <SyllabusComp
//                     dep={"CSE"}
//                     sem={"EL"}
//                     code={"MC46XX26"}
//                     title={"Biomedical Engineering"}
//                     L={"3"} T={"0"} P={"0"}
//                     cred={"3"}
//                     url={"https://docs.google.com/document/d/1HQqPUvJJ7KvIj51vzk6DxNCKs1_R7uVg/edit?usp=drive_link&ouid=111684243091520260943&rtpof=true&sd=true"}
//                 />
//                 <SyllabusComp
//                     dep={"CSE"}
//                     sem={"EL"}
//                     code={"MC46XX27"}
//                     title={"Soft Computing"}
//                     L={"3"} T={"0"} P={"0"}
//                     cred={"3"}
//                     url={"https://docs.google.com/document/d/1Z8bOGgslFVcxZE2cq8v_nWSR9y4uU0O3/edit?usp=drive_link&ouid=111684243091520260943&rtpof=true&sd=true"}
//                 />
//                 <SyllabusComp
//                     dep={"CSE"}
//                     sem={"EL"}
//                     code={"MC46XX28"}
//                     title={"Distributed and Parallel Computing"}
//                     L={"3"} T={"0"} P={"0"}
//                     cred={"3"}
//                     url={"https://docs.google.com/document/d/1oOuIoGGNrrx4te1EpW4jgk2MTViGi6Sd/edit?usp=drive_link&ouid=111684243091520260943&rtpof=true&sd=true"}
//                 />
//                 <SyllabusComp
//                     dep={"CSE"}
//                     sem={"EL"}
//                     code={"MC46XX29"}
//                     title={"Federated Learning"}
//                     L={"3"} T={"0"} P={"0"}
//                     cred={"3"}
//                     url={"https://docs.google.com/document/d/1hSk3wVPAFxDJ8R9Na7nsDthqZ50HHyQB/edit?usp=drive_link&ouid=111684243091520260943&rtpof=true&sd=true"}
//                 />
//                 <SyllabusComp
//                     dep={"CSE"}
//                     sem={"EL"}
//                     code={"MC46XX30"}
//                     title={"Quantum Computing"}
//                     L={"3"} T={"0"} P={"0"}
//                     cred={"3"}
//                     url={"https://docs.google.com/document/d/1OaHjjsViSHsVCYyUebhAs1h4v6wgWJAg/edit?usp=drive_link&ouid=111684243091520260943&rtpof=true&sd=true"}
//                 />
//                 <SyllabusComp
//                     dep={"CSE"}
//                     sem={"EL"}
//                     code={"MC46XX31"}
//                     title={"Pattern Recognition"}
//                     L={"3"} T={"0"} P={"0"}
//                     cred={"3"}
//                     url={"https://docs.google.com/document/d/1gWCe30OFE-g7BZo_C8WE8vNGStx79Rjj/edit?usp=drive_link&ouid=111684243091520260943&rtpof=true&sd=true"}
//                 />
//                 <SyllabusComp
//                     dep={"CSE"}
//                     sem={"EL"}
//                     code={"MC46XX32"}
//                     title={"Nature-Inspired Computing"}
//                     L={"3"} T={"0"} P={"0"}
//                     cred={"3"}
//                     url={"https://docs.google.com/document/d/1dXqvD8FcVhpYzT9ZkZkQL4V86oIbd8Lb/edit?usp=drive_link&ouid=111684243091520260943&rtpof=true&sd=true"}
//                 />
//                 <SyllabusComp
//                     dep={"CSE"}
//                     sem={"EL"}
//                     code={"MC46XX33"}
//                     title={"Optimization Techniques"}
//                     L={"3"} T={"0"} P={"0"}
//                     cred={"3"}
//                     url={"https://docs.google.com/document/d/1wNW7-_F1ZkPuhdIa_PDkVW9MHGxrYyvI/edit?usp=drive_link&ouid=111684243091520260943&rtpof=true&sd=true"}
//                 />
//                 <SyllabusComp
//                     dep={"CSE"}
//                     sem={"EL"}
//                     code={"MC46XX34"}
//                     title={"Health Informatics"}
//                     L={"3"} T={"0"} P={"0"}
//                     cred={"3"}
//                     url={"https://docs.google.com/document/d/17WMutXk5XSsvZUzNVPWPcIzXKDh4RMnw/edit?usp=drive_link&ouid=111684243091520260943&rtpof=true&sd=true"}
//                 />
//                 <SyllabusComp
//                     dep={"CSE"}
//                     sem={"EL"}
//                     code={"MC46XX35"}
//                     title={"Image Processing Techniques"}
//                     L={"3"} T={"0"} P={"0"}
//                     cred={"3"}
//                     url={"https://docs.google.com/document/d/1hshrZ1axwaf7hsbwT8LYdo6-AIDVDnHN/edit?usp=drive_link&ouid=111684243091520260943&rtpof=true&sd=true"}
//                 />
//             </div>
//         </div>
//     );
// };

// const MTechDSSyllabus = () => {
//     return (
//         <div className="w-full mb-10 overflow-x-auto">
//             <div className="min-w-[1000px] border">
//                 <div className="grid grid-cols-12 bg-gray-100 font-semibold text-red-900">
//                     <div className="col-span-1 border border-black flex items-center justify-center py-2">Dept.</div>
//                     <div className="col-span-1 border border-black flex items-center justify-center py-2">Sem / Electives</div>
//                     <div className="col-span-2 border border-black flex items-center justify-center py-2">Course Code</div>
//                     <div className="col-span-4 border border-black flex items-center justify-center py-2">Course Title</div>
//                     <div className="col-span-1 border border-black flex items-center justify-center py-2">L</div>
//                     <div className="col-span-1 border border-black flex items-center justify-center py-2">T</div>
//                     <div className="col-span-1 border border-black flex items-center justify-center py-2">P</div>
//                     <div className="col-span-1 border border-black flex items-center justify-center py-2">Credits</div>
//                 </div>

//                 {/* Table Row */}
//                 <SyllabusComp
//                     dep={"CSE"}
//                     sem={"1"}
//                     code={"CS540101"}
//                     title={"Mathematical Foundations of Data Science"}
//                     L={"3"}
//                     T={"0"}
//                     P={"2"}
//                     cred={"4"}
//                     url={"https://docs.google.com/document/d/1hJ_cQC8PN9ckw3HpPAoMOzUQENv-aSRi/edit?usp=drive_link&ouid=111684243091520260943&rtpof=true&sd=true"}
//                 />
//                 <SyllabusComp
//                     dep={"CSE"}
//                     sem={"1"}
//                     code={"CS540102"}
//                     title={"Pattern Recognition"}
//                     L={"3"}
//                     T={"0"}
//                     P={"2"}
//                     cred={"4"}
//                     url={"https://docs.google.com/document/d/18d3oZp03-eG0JzpdytLQs5Ji0QoW9-ZC/edit?usp=drive_link&ouid=111684243091520260943&rtpof=true&sd=true"}
//                 />
//                 <SyllabusComp
//                     dep={"CSE"}
//                     sem={"1"}
//                     code={"CS5401XX"}
//                     title={"Elective-I/MOOC"}
//                     L={"X"}
//                     T={"X"}
//                     P={"X"}
//                     cred={"3"}
//                     url={""}
//                 />
//                 <SyllabusComp
//                     dep={"CSE"}
//                     sem={"1"}
//                     code={"CS5401XX"}
//                     title={"Elective-II/MOOC"}
//                     L={"X"}
//                     T={"X"}
//                     P={"X"}
//                     cred={"3"}
//                     url={""}
//                 />
//                 <SyllabusComp
//                     dep={"CSE"}
//                     sem={"1"}
//                     code={"CS5401XX"}
//                     title={"Elective-III/MOOC"}
//                     L={"X"}
//                     T={"X"}
//                     P={"X"}
//                     cred={"3"}
//                     url={""}
//                 />
//                 <SyllabusComp
//                     dep={"CSE"}
//                     sem={"1"}
//                     code={"CS540103"}
//                     title={"EAA-Sports/Innovative Project"}
//                     L={"0"}
//                     T={"0"}
//                     P={"2"}
//                     cred={"1"}
//                     url={""}
//                 />
//                 <SyllabusComp
//                     dep={"CSE"}
//                     sem={"1"}
//                     code={"CS540104"}
//                     title={"Technical Seminar and Report Writing"}
//                     L={"0"}
//                     T={"0"}
//                     P={"2"}
//                     cred={"1"}
//                     url={""}
//                 />
//                 <SyllabusComp
//                     dep={"CSE"}
//                     sem={"2"}
//                     code={"CS540201"}
//                     title={"Natural Language Processing"}
//                     L={"3"}
//                     T={"0"}
//                     P={"2"}
//                     cred={"4"}
//                     url={"https://docs.google.com/document/d/1ecjcLfro6S6OliRQBv3Dmn5Cc3dBEMWQ/edit?usp=drive_link&ouid=111684243091520260943&rtpof=true&sd=true"}
//                 />
//                 <SyllabusComp
//                     dep={"CSE"}
//                     sem={"2"}
//                     code={"CS540202"}
//                     title={"Deep Learning"}
//                     L={"3"}
//                     T={"0"}
//                     P={"2"}
//                     cred={"4"}
//                     url={"https://docs.google.com/document/d/1D3x4gB-ut09zswb2sZOj2qV2U_fI_f-B/edit?usp=drive_link&ouid=111684243091520260943&rtpof=true&sd=true"}
//                 />
//                 <SyllabusComp
//                     dep={"CSE"}
//                     sem={"2"}
//                     code={"CS540203"}
//                     title={"Data Visualization Techniques"}
//                     L={"2"}
//                     T={"0"}
//                     P={"2"}
//                     cred={"3"}
//                     url={"https://docs.google.com/document/d/1D3x4gB-ut09zswb2sZOj2qV2U_fI_f-B/edit?usp=drive_link&ouid=111684243091520260943&rtpof=true&sd=true"}
//                 />
//                 <SyllabusComp
//                     dep={"CSE"}
//                     sem={"2"}
//                     code={"CS5402XX"}
//                     title={"Elective-IV/MOOC"}
//                     L={"X"}
//                     T={"X"}
//                     P={"X"}
//                     cred={"3"}
//                     url={""}
//                 />
//                 <SyllabusComp
//                     dep={"CSE"}
//                     sem={"2"}
//                     code={"CS5402XX"}
//                     title={"Elective-V/MOOC"}
//                     L={"X"}
//                     T={"X"}
//                     P={"X"}
//                     cred={"3"}
//                     url={""}
//                 />
//                 <SyllabusComp
//                     dep={"CSE"}
//                     sem={"2"}
//                     code={"CS5402XX"}
//                     title={"Elective-VI/MOOC"}
//                     L={"X"}
//                     T={"X"}
//                     P={"X"}
//                     cred={"3"}
//                     url={""}
//                 />
//                 <SyllabusComp
//                     dep={"CSE"}
//                     sem={"2"}
//                     code={"CS540204"}
//                     title={"EAA-Swachha Bharat Mission (SBM)"}
//                     L={"0"}
//                     T={"0"}
//                     P={"2"}
//                     cred={"1"}
//                     url={""}
//                 />
//                 <SyllabusComp
//                     dep={"CSE"}
//                     sem={"3"}
//                     code={"CS540301"}
//                     title={"Project/Dissertation (to be continued in 4th Sem)"}
//                     L={"0"}
//                     T={"0"}
//                     P={"20"}
//                     cred={"10"}
//                     url={""}
//                 />
//                 <SyllabusComp
//                     dep={"CSE"}
//                     sem={"4"}
//                     code={"CS540401"}
//                     title={"Project/Dissertation"}
//                     L={"0"}
//                     T={"0"}
//                     P={"24"}
//                     cred={"12"}
//                     url={""}
//                 />
//                 <SyllabusComp
//                     dep={"CSE"}
//                     sem={"EL"}
//                     code={"CS54XX05"}
//                     title={"Adversarial ML"}
//                     L={"3"}
//                     T={"0"}
//                     P={"0"}
//                     cred={"3"}
//                     url={"https://docs.google.com/document/d/1S5WUgD15RPXt9mmqpZZxLUh1sUGgpKiy/edit?usp=drive_link&ouid=111684243091520260943&rtpof=true&sd=true"}
//                 />
//                 <SyllabusComp
//                     dep={"CSE"}
//                     sem={"EL"}
//                     code={"CS54XX06"}
//                     title={"Digital Signal Processing"}
//                     L={"3"}
//                     T={"0"}
//                     P={"0"}
//                     cred={"3"}
//                     url={"https://docs.google.com/document/d/19x2GJDwjKXUs0hf9l9HHbXHtFgCZRjbe/edit?usp=drive_link&ouid=111684243091520260943&rtpof=true&sd=true"}
//                 />
//                 <SyllabusComp
//                     dep={"CSE"}
//                     sem={"EL"}
//                     code={"CS54XX07"}
//                     title={"IOT Systems"}
//                     L={"2"}
//                     T={"0"}
//                     P={"2"}
//                     cred={"3"}
//                     url={"https://docs.google.com/document/d/1__FzFOryXPTIgNs8L4mr5iK7wrRD3bim/edit?usp=drive_link&ouid=111684243091520260943&rtpof=true&sd=true"}
//                 />
//                 <SyllabusComp
//                     dep={"CSE"}
//                     sem={"EL"}
//                     code={"CS54XX08"}
//                     title={"Nature Inspired Computing"}
//                     L={"3"}
//                     T={"0"}
//                     P={"0"}
//                     cred={"3"}
//                     url={"https://docs.google.com/document/d/1BRlcFtqQ6MNC2o1VubS-Xui3O3y5u0yd/edit?usp=drive_link&ouid=111684243091520260943&rtpof=true&sd=true"}
//                 />
//                 <SyllabusComp
//                     dep={"CSE"}
//                     sem={"EL"}
//                     code={"CS54XX09"}
//                     title={"Image Processing Techniques"}
//                     L={"3"}
//                     T={"0"}
//                     P={"0"}
//                     cred={"3"}
//                     url={"https://docs.google.com/document/d/1ySgtdvdpgZ11yHHZac0xZ7FY8AUQnuVU/edit?usp=drive_link&ouid=111684243091520260943&rtpof=true&sd=true"}
//                 />
//                 <SyllabusComp
//                     dep={"CSE"}
//                     sem={"EL"}
//                     code={"CS54XX10"}
//                     title={"Bioinformatics"}
//                     L={"2"}
//                     T={"0"}
//                     P={"2"}
//                     cred={"3"}
//                     url={"https://docs.google.com/document/d/1ATF-z1CqnhcP3WStJ1NF0WHEEDy7SYAl/edit?usp=drive_link&ouid=111684243091520260943&rtpof=true&sd=true"}
//                 />
//                 <SyllabusComp
//                     dep={"CSE"}
//                     sem={"EL"}
//                     code={"CS54XX11"}
//                     title={"Information Retrieval"}
//                     L={"2"}
//                     T={"0"}
//                     P={"2"}
//                     cred={"3"}
//                     url={"https://docs.google.com/document/d/1MSTQT82DN4Hsz-p0bqmLEhHcJxpQLJzD/edit?usp=drive_link&ouid=111684243091520260943&rtpof=true&sd=true"}
//                 />
//                 <SyllabusComp
//                     dep={"CSE"}
//                     sem={"EL"}
//                     code={"CS54XX12"}
//                     title={"Computer Vision"}
//                     L={"3"}
//                     T={"0"}
//                     P={"0"}
//                     cred={"3"}
//                     url={"https://docs.google.com/document/d/1WjKhL9XUkt6ceJxILzAbB_fuZUbf2vAn/edit?usp=drive_link&ouid=111684243091520260943&rtpof=true&sd=true"}
//                 />
//                 <SyllabusComp
//                     dep={"CSE"}
//                     sem={"EL"}
//                     code={"CS54XX13"}
//                     title={"Reinforcement Learning"}
//                     L={"2"}
//                     T={"0"}
//                     P={"2"}
//                     cred={"3"}
//                     url={"https://docs.google.com/document/d/1M0poIMuSnTjzz7qJFTZ2VJPKnFcQFi7w/edit?usp=drive_link&ouid=111684243091520260943&rtpof=true&sd=true"}
//                 />
//                 <SyllabusComp
//                     dep={"CSE"}
//                     sem={"EL"}
//                     code={"CS54XX14"}
//                     title={"Social Networks"}
//                     L={"2"}
//                     T={"0"}
//                     P={"2"}
//                     cred={"3"}
//                     url={"https://docs.google.com/document/d/1bjTmo8qFMRoPS6n0ZYMjAR87IhbubWCI/edit?usp=drive_link&ouid=111684243091520260943&rtpof=true&sd=true"}
//                 />
//                 <SyllabusComp
//                     dep={"CSE"}
//                     sem={"EL"}
//                     code={"CS54XX15"}
//                     title={"Recommendation Systems"}
//                     L={"3"}
//                     T={"0"}
//                     P={"0"}
//                     cred={"3"}
//                     url={"https://docs.google.com/document/d/1Av3k8j7dKXMU-4wzZXG-xC4dtpIC_7dW/edit?usp=drive_link&ouid=111684243091520260943&rtpof=true&sd=true"}
//                 />
//                 <SyllabusComp
//                     dep={"CSE"}
//                     sem={"EL"}
//                     code={"CS54XX16"}
//                     title={"Speech Processing"}
//                     L={"2"}
//                     T={"0"}
//                     P={"2"}
//                     cred={"3"}
//                     url={"https://docs.google.com/document/d/1dFyE71zXIe0ACAMpMDuPYV8tH9x8W3HJ/edit?usp=drive_link&ouid=111684243091520260943&rtpof=true&sd=true"}
//                 />
//                 <SyllabusComp
//                     dep={"CSE"}
//                     sem={"EL"}
//                     code={"CS54XX17"}
//                     title={"Malware Analysis"}
//                     L={"2"}
//                     T={"0"}
//                     P={"2"}
//                     cred={"3"}
//                     url={"https://docs.google.com/document/d/1GQjE6lBIL4Z-qHK4cEk4PZCiud4jk9kq/edit?usp=drive_link&ouid=111684243091520260943&rtpof=true&sd=true"}
//                 />
//                 <SyllabusComp
//                     dep={"CSE"}
//                     sem={"EL"}
//                     code={"CS54XX18"}
//                     title={"Network Security"}
//                     L={"2"}
//                     T={"0"}
//                     P={"2"}
//                     cred={"3"}
//                     url={"https://docs.google.com/document/d/1ily4ehPTWOAgic6r75xiILCHWnrxU2Ug/edit?usp=drive_link&ouid=111684243091520260943&rtpof=true&sd=true"}
//                 />
//                 <SyllabusComp
//                     dep={"CSE"}
//                     sem={"EL"}
//                     code={"CS54XX19"}
//                     title={"Intrusion Detection"}
//                     L={"2"}
//                     T={"0"}
//                     P={"2"}
//                     cred={"3"}
//                     url={"https://docs.google.com/document/d/1aMiXuihrDJTyt2U3dwO9D7Fvo4PFxlsc/edit?usp=drive_link&ouid=111684243091520260943&rtpof=true&sd=true"}
//                 />
//                 <SyllabusComp
//                     dep={"CSE"}
//                     sem={"EL"}
//                     code={"CS54XX20"}
//                     title={"Time Series Analysis"}
//                     L={"2"}
//                     T={"0"}
//                     P={"2"}
//                     cred={"3"}
//                     url={"https://docs.google.com/document/d/1m_bcJswg8MdtzObwx61cgMekndH1X8Cy/edit?usp=drive_link&ouid=111684243091520260943&rtpof=true&sd=true"}
//                 />
//                 <SyllabusComp
//                     dep={"CSE"}
//                     sem={"EL"}
//                     code={"CS54XX21"}
//                     title={"Big Data Analytics"}
//                     L={"2"}
//                     T={"0"}
//                     P={"2"}
//                     cred={"3"}
//                     url={"https://docs.google.com/document/d/1p66-Ihn_FyTdIUmC8TAyOQi_mZPdoM01/edit?usp=drive_link&ouid=111684243091520260943&rtpof=true&sd=true"}
//                 />
//                 <SyllabusComp
//                     dep={"CSE"}
//                     sem={"EL"}
//                     code={"CS54XX22"}
//                     title={"Multimedia Systems"}
//                     L={"3"}
//                     T={"0"}
//                     P={"0"}
//                     cred={"3"}
//                     url={"https://docs.google.com/document/d/1A9wohyFyPddlD2KBKS3662m6R0Y4dV7U/edit?usp=drive_link&ouid=111684243091520260943&rtpof=true&sd=true"}
//                 />
//                 <SyllabusComp
//                     dep={"CSE"}
//                     sem={"EL"}
//                     code={"CS54XX23"}
//                     title={"Biometric Security"}
//                     L={"3"}
//                     T={"0"}
//                     P={"0"}
//                     cred={"3"}
//                     url={"https://docs.google.com/document/d/1FtyV2XWKYNDnAlpa6W61i5Ak60amOqMH/edit?usp=drive_link&ouid=111684243091520260943&rtpof=true&sd=true"}
//                 />
//                 <SyllabusComp
//                     dep={"CSE"}
//                     sem={"EL"}
//                     code={"CS54XX0747"}
//                     title={"Federated Learning"}
//                     L={"3"}
//                     T={"0"}
//                     P={"0"}
//                     cred={"3"}
//                     url={"https://docs.google.com/document/d/1hWgm8ETwI-pbjRT-WPJiKNl5VdyGOdoU/edit?usp=drive_link&ouid=111684243091520260943&rtpof=true&sd=true"}
//                 />
//                 <SyllabusComp
//                     dep={"CSE"}
//                     sem={"EL"}
//                     code={"CS54XX50"}
//                     title={"Knowledge Representation & Reasoning"}
//                     L={"3"}
//                     T={"0"}
//                     P={"0"}
//                     cred={"3"}
//                     url={"https://docs.google.com/document/d/1JQx5ITa2eARL0PB0hFm50-9TYWefUYRk/edit?usp=drive_link&ouid=111684243091520260943&rtpof=true&sd=true"}
//                 />
//                 <SyllabusComp
//                     dep={"CSE"}
//                     sem={"EL"}
//                     code={"CS54XX46"}
//                     title={"Decision Support Systems"}
//                     L={"3"}
//                     T={"0"}
//                     P={"0"}
//                     cred={"3"}
//                     url={"https://docs.google.com/document/d/1UQ2q8JYRcLvWv_Wo0skTrHWTZdUc2NuU/edit?usp=drive_link&ouid=111684243091520260943&rtpof=true&sd=true"}
//                 />
//                 <SyllabusComp
//                     dep={"CSE"}
//                     sem={"EL"}
//                     code={"HSXXXXX"}
//                     title={"Intellectual Property Rights"}
//                     L={"3"}
//                     T={"0"}
//                     P={"0"}
//                     cred={"3"}
//                     url={"https://drive.google.com/file/d/1B2lsjm_vOEwYCSTB6lOcjL7Lg8PJp6EE/view?usp=drive_link"}
//                 />
//                 <SyllabusComp
//                     dep={"CSE"}
//                     sem={"EL"}
//                     code={"CS54XX24"}
//                     title={"Blockchain Technology"}
//                     L={"3"}
//                     T={"0"}
//                     P={"0"}
//                     cred={"3"}
//                     url={"https://docs.google.com/document/d/15qyCDMiYpkF8jkg32aD4lV9F1h7CincF/edit?usp=drive_link&ouid=111684243091520260943&rtpof=true&sd=true"}
//                 />
//                 <SyllabusComp
//                     dep={"CSE"}
//                     sem={"EL"}
//                     code={"CS54XX25"}
//                     title={"Cloud Computing Security"}
//                     L={"3"}
//                     T={"0"}
//                     P={"0"}
//                     cred={"3"}
//                     url={"https://docs.google.com/document/d/1qchKU19UhaUKf933cNYgjWVrtqWmld7k/edit?usp=drive_link&ouid=111684243091520260943&rtpof=true&sd=true"}
//                 />
//                 <SyllabusComp
//                     dep={"CSE"}
//                     sem={"EL"}
//                     code={"CS54XX26"}
//                     title={"Cyber laws and rights"}
//                     L={"3"}
//                     T={"0"}
//                     P={"0"}
//                     cred={"3"}
//                     url={"https://docs.google.com/document/d/1hMoGZzUWLPRBd8mvcem-rZDLr8ap3rrd/edit?usp=drive_link&ouid=111684243091520260943&rtpof=true&sd=true"}
//                 />
//                 <SyllabusComp
//                     dep={"CSE"}
//                     sem={"EL"}
//                     code={"CS54XX27"}
//                     title={"Cyber Security"}
//                     L={"3"}
//                     T={"0"}
//                     P={"0"}
//                     cred={"3"}
//                     url={"https://docs.google.com/document/d/1sv_MRVz7jsX8zbjHcKLvJUeNeHPTv9cV/edit?usp=drive_link&ouid=111684243091520260943&rtpof=true&sd=true"}
//                 />
//                 <SyllabusComp
//                     dep={"CSE"}
//                     sem={"EL"}
//                     code={"CS54XX28"}
//                     title={"Data Visualization"}
//                     L={"2"}
//                     T={"0"}
//                     P={"2"}
//                     cred={"3"}
//                     url={"https://docs.google.com/document/d/14GbqFnR2v9BTZN6PEaFf-a2I6hXrQqdo/edit?usp=drive_link&ouid=111684243091520260943&rtpof=true&sd=true"}
//                 />
//                 <SyllabusComp
//                     dep={"CSE"}
//                     sem={"EL"}
//                     code={"CS54XX29"}
//                     title={"Deep Learning Algorithms"}
//                     L={"2"}
//                     T={"0"}
//                     P={"2"}
//                     cred={"3"}
//                     url={"https://docs.google.com/document/d/1M8ZcQ7PKrQfcIi1rQNx3z6FYmSE4Vhrl/edit?usp=drive_link&ouid=111684243091520260943&rtpof=true&sd=true"}
//                 />
//                 <SyllabusComp
//                     dep={"CSE"}
//                     sem={"EL"}
//                     code={"CS54XX30"}
//                     title={"Digital Watermarking and Steganography"}
//                     L={"3"}
//                     T={"0"}
//                     P={"0"}
//                     cred={"3"}
//                     url={"https://docs.google.com/document/d/1P0_HF6hjmrMfDPYxbZqhpa_bMDwjKEun/edit?usp=drive_link&ouid=111684243091520260943&rtpof=true&sd=true"}
//                 />
//                 <SyllabusComp
//                     dep={"CSE"}
//                     sem={"EL"}
//                     code={"CS54XX31"}
//                     title={"Distributed System Design"}
//                     L={"3"}
//                     T={"0"}
//                     P={"0"}
//                     cred={"3"}
//                     url={"https://docs.google.com/document/d/1b11NpjhC_5hKwrxid7QJjeiaGsFHSYWD/edit?usp=drive_link&ouid=111684243091520260943&rtpof=true&sd=true"}
//                 />
//                 <SyllabusComp
//                     dep={"CSE"}
//                     sem={"EL"}
//                     code={"CS54XX32"}
//                     title={"Embedded System and Hardware Security"}
//                     L={"3"}
//                     T={"0"}
//                     P={"0"}
//                     cred={"3"}
//                     url={"https://docs.google.com/document/d/1i4VeUmDRcPlSdMQmdDpfmf32LiAkdilW/edit?usp=drive_link&ouid=111684243091520260943&rtpof=true&sd=true"}
//                 />
//                 <SyllabusComp
//                     dep={"CSE"}
//                     sem={"EL"}
//                     code={"CS54XX33"}
//                     title={"Ethical Hacking"}
//                     L={"2"}
//                     T={"0"}
//                     P={"2"}
//                     cred={"3"}
//                     url={"https://docs.google.com/document/d/1s112w4TMnmSLD4D8U3tilPEUwVhv5sxu/edit?usp=drive_link&ouid=111684243091520260943&rtpof=true&sd=true"}
//                 />
//                 <SyllabusComp
//                     dep={"CSE"}
//                     sem={"EL"}
//                     code={"CS54XX34"}
//                     title={"Information Theory and Coding"}
//                     L={"3"}
//                     T={"0"}
//                     P={"0"}
//                     cred={"3"}
//                     url={"https://docs.google.com/document/d/1TUnaAOBCZj9JkO-kd0MBx2L-vtooFOaP/edit?usp=drive_link&ouid=111684243091520260943&rtpof=true&sd=true"}
//                 />
//                 <SyllabusComp
//                     dep={"CSE"}
//                     sem={"EL"}
//                     code={"CS54XX35"}
//                     title={"Mathematical Foundations for Information Security"}
//                     L={"3"}
//                     T={"0"}
//                     P={"0"}
//                     cred={"3"}
//                     url={"https://docs.google.com/document/d/1AlRlTB8MOUmluidn8QGZ-rcrLUK-7nVZ/edit?usp=drive_link&ouid=111684243091520260943&rtpof=true&sd=true"}
//                 />
//                 <SyllabusComp
//                     dep={"CSE"}
//                     sem={"EL"}
//                     code={"CS54XX36"}
//                     title={"Natural Language Processing Technique"}
//                     L={"2"}
//                     T={"0"}
//                     P={"2"}
//                     cred={"3"}
//                     url={"https://docs.google.com/document/d/1WL-xbB35VRYnVfgS3W6JAtCmXHJiU8kp/edit?usp=drive_link&ouid=111684243091520260943&rtpof=true&sd=true"}
//                 />
//                 <SyllabusComp
//                     dep={"CSE"}
//                     sem={"EL"}
//                     code={"CS54XX37"}
//                     title={"Pattern Recognition Technique"}
//                     L={"2"}
//                     T={"0"}
//                     P={"2"}
//                     cred={"3"}
//                     url={"https://docs.google.com/document/d/1YXdX9UOHUZfNWTslaHEPSHvHkRWGoGVx/edit?usp=drive_link&ouid=111684243091520260943&rtpof=true&sd=true"}
//                 />
//                 <SyllabusComp
//                     dep={"CSE"}
//                     sem={"EL"}
//                     code={"CS54XX38"}
//                     title={"Privacy and Security for Online Social Networks"}
//                     L={"3"}
//                     T={"0"}
//                     P={"0"}
//                     cred={"3"}
//                     url={"https://docs.google.com/document/d/1Oy7PUgBwyDTt9nno3q3pWX3t52jsdnk1/edit?usp=drive_link&ouid=111684243091520260943&rtpof=true&sd=true"}
//                 />
//                 <SyllabusComp
//                     dep={"CSE"}
//                     sem={"EL"}
//                     code={"CS54XX39"}
//                     title={"Secure Software Systems"}
//                     L={"2"}
//                     T={"0"}
//                     P={"2"}
//                     cred={"3"}
//                     url={"https://docs.google.com/document/d/187zl26VzGbsiffQnkKHSLJipfubSoT7A/edit?usp=drive_link&ouid=111684243091520260943&rtpof=true&sd=true"}
//                 />
//                 <SyllabusComp
//                     dep={"CSE"}
//                     sem={"EL"}
//                     code={"CS54XX40"}
//                     title={"Soft Computing"}
//                     L={"3"}
//                     T={"0"}
//                     P={"0"}
//                     cred={"3"}
//                     url={"https://docs.google.com/document/d/1GiJ9GotxaQSJwCq-uC87Jh9Y4Toy-Qhl/edit?usp=drive_link&ouid=111684243091520260943&rtpof=true&sd=true"}
//                 />
//                 <SyllabusComp
//                     dep={"CSE"}
//                     sem={"EL"}
//                     code={"CS54XX41"}
//                     title={"Software Defined Networks"}
//                     L={"3"}
//                     T={"0"}
//                     P={"0"}
//                     cred={"3"}
//                     url={"https://docs.google.com/document/d/1qOSIAd5Dy2ENxoRriYABncgGeUct8YG5/edit?usp=drive_link&ouid=111684243091520260943&rtpof=true&sd=true"}
//                 />
//                 <SyllabusComp
//                     dep={"CSE"}
//                     sem={"EL"}
//                     code={"CS54XX42"}
//                     title={"Ubiquitous Computing"}
//                     L={"3"}
//                     T={"0"}
//                     P={"0"}
//                     cred={"3"}
//                     url={"https://docs.google.com/document/d/18R8XlqRQ9HFTlSYm6DCYeps4jAN10-me/edit?usp=drive_link&ouid=111684243091520260943&rtpof=true&sd=true"}
//                 />
//                 <SyllabusComp
//                     dep={"CSE"}
//                     sem={"EL"}
//                     code={"CS54XX43"}
//                     title={"Wireless & Mobile Security"}
//                     L={"3"}
//                     T={"0"}
//                     P={"0"}
//                     cred={"3"}
//                     url={"https://docs.google.com/document/d/1MX9MSv24klzZWdHiwFtPaNI9EH622RLR/edit?usp=drive_link&ouid=111684243091520260943&rtpof=true&sd=true"}
//                 />
//                 <SyllabusComp
//                     dep={"CSE"}
//                     sem={"EL"}
//                     code={"CS54XX49"}
//                     title={"Human Computer Interaction"}
//                     L={"3"}
//                     T={"0"}
//                     P={"0"}
//                     cred={"3"}
//                     url={"https://docs.google.com/document/d/1lQuJMN-bzM-pxQ9hYNF5NjwjQZ7PVFPr/edit?usp=drive_link&ouid=111684243091520260943&rtpof=true&sd=true"}
//                 />

//                 <SyllabusComp
//                     dep={"CSE"}
//                     sem={"EL"}
//                     code={"CS54XX50"}
//                     title={"Approximation Algorithms"}
//                     L={"3"}
//                     T={"0"}
//                     P={"0"}
//                     cred={"3"}
//                     url={"https://docs.google.com/document/d/1GMl-yBv7qNaQFgg8a2ym3RLTOggsTJaM/edit?usp=drive_link&ouid=111684243091520260943&rtpof=true&sd=true"}
//                 />
//                 <SyllabusComp
//                     dep={"CSE"}
//                     sem={"EL"}
//                     code={"CS54XX51"}
//                     title={"Mobile Applications Development"}
//                     L={"2"}
//                     T={"0"}
//                     P={"2"}
//                     cred={"3"}
//                     url={"https://docs.google.com/document/d/1QtpOMOfCg8GIXaqfEVbCF0yNMnc_S7xs/edit?usp=drive_link&ouid=111684243091520260943&rtpof=true&sd=true"}
//                 />
//                 <SyllabusComp
//                     dep={"CSE"}
//                     sem={"EL"}
//                     code={"CS54XX48"}
//                     title={"Game Theory"}
//                     L={"3"}
//                     T={"0"}
//                     P={"0"}
//                     cred={"3"}
//                     url={"https://docs.google.com/document/d/1TH0Rzj4WWrQsurXF1Vq07C5PO9hWQ1GM/edit?usp=drive_link&ouid=111684243091520260943&rtpof=true&sd=true"}
//                 />
//                 <SyllabusComp
//                     dep={"CSE"}
//                     sem={"EL"}
//                     code={"CS54XX45"}
//                     title={"Computational Geometry"}
//                     L={"3"}
//                     T={"0"}
//                     P={"0"}
//                     cred={"3"}
//                     url={"https://docs.google.com/document/d/1jyFGE46oRuHdJ-0rDEyxmkh3D0DITmZT/edit?usp=drive_link&ouid=111684243091520260943&rtpof=true&sd=true"}
//                 />
//             </div>
//         </div>
//     );
// };

// const MTechCSSyllabus = () => {
//     return (
//         <div className="w-full mb-10 overflow-x-auto">
//             <div className="min-w-[1000px] border">
//                 <div className="grid grid-cols-12 bg-gray-100 font-semibold text-red-900">
//                     <div className="col-span-1 border border-black flex items-center justify-center py-2">Dept.</div>
//                     <div className="col-span-1 border border-black flex items-center justify-center py-2">Sem / Electives</div>
//                     <div className="col-span-2 border border-black flex items-center justify-center py-2">Course Code</div>
//                     <div className="col-span-4 border border-black flex items-center justify-center py-2">Course Title</div>
//                     <div className="col-span-1 border border-black flex items-center justify-center py-2">L</div>
//                     <div className="col-span-1 border border-black flex items-center justify-center py-2">T</div>
//                     <div className="col-span-1 border border-black flex items-center justify-center py-2">P</div>
//                     <div className="col-span-1 border border-black flex items-center justify-center py-2">Credits</div>
//                 </div>

//                 {/* Table Row */}
//                 <SyllabusComp
//                     dep={"CSE"}
//                     sem={"1"}
//                     code={"CS550102"}
//                     title={"Network Security System"}
//                     L={"3"}
//                     T={"0"}
//                     P={"2"}
//                     cred={"4"}
//                     url={'https://docs.google.com/document/d/1I0MJ3dr4t58lTLB0eZAIWDXrfkDp_aeJ/edit?usp=drivesdk&ouid=105912413414551043045&rtpof=true&sd=true'}
//                 />
//                 <SyllabusComp
//                     dep={"CSE"}
//                     sem={"1"}
//                     code={"CS5501XX"}
//                     title={"Elective-I/ MOOC"}
//                     L={"X"}
//                     T={"X"}
//                     P={"X"}
//                     cred={"3"}
//                     url={''}
//                 />
//                 <SyllabusComp
//                     dep={"CSE"}
//                     sem={"1"}
//                     code={"CS5501XX"}
//                     title={"Elective-II/ MOOC"}
//                     L={"X"}
//                     T={"X"}
//                     P={"X"}
//                     cred={"3"}
//                     url={''}
//                 />
//                 <SyllabusComp
//                     dep={"CSE"}
//                     sem={"1"}
//                     code={"CS5501XX"}
//                     title={"Elective-III/ MOOC"}
//                     L={"X"}
//                     T={"X"}
//                     P={"X"}
//                     cred={"3"}
//                     url={''}
//                 />
//                 <SyllabusComp
//                     dep={"CSE"}
//                     sem={"1"}
//                     code={"CS550103"}
//                     title={"EAA-Sports/Innovative Project"}
//                     L={"0"}
//                     T={"0"}
//                     P={"2"}
//                     cred={"1"}
//                     url={''}
//                 />
//                 <SyllabusComp
//                     dep={"CSE"}
//                     sem={"1"}
//                     code={"CS550104"}
//                     title={"Technical Seminar and Report Writing"}
//                     L={"0"}
//                     T={"0"}
//                     P={"2"}
//                     cred={"1"}
//                     url={''}
//                 />
//                 <SyllabusComp
//                     dep={"CSE"}
//                     sem={"2"}
//                     code={"CS550201"}
//                     title={"Intrusion Detection and Prevention"}
//                     L={"3"}
//                     T={"0"}
//                     P={"2"}
//                     cred={"4"}
//                     url={'https://docs.google.com/document/d/1A4xRoXiIVqqmZcQPPuDwvoZgCmLeu0Ub/edit?usp=drivesdk&ouid=105912413414551043045&rtpof=true&sd=true'}
//                 />
//                 <SyllabusComp
//                     dep={"CSE"}
//                     sem={"2"}
//                     code={"CS550202"}
//                     title={"Advanced Internet of Things (IoT)"}
//                     L={"3"}
//                     T={"0"}
//                     P={"2"}
//                     cred={"4"}
//                     url={'https://docs.google.com/document/d/1Zd4qDbCYWT8ocC30DQZ84n3wWsRjnvl_/edit?usp=drivesdk&ouid=105912413414551043045&rtpof=true&sd=true'}
//                 />
//                 <SyllabusComp
//                     dep={"CSE"}
//                     sem={"2"}
//                     code={"CS550203"}
//                     title={"Cyber Forensics"}
//                     L={"2"}
//                     T={"0"}
//                     P={"2"}
//                     cred={"3"}
//                     url={'https://docs.google.com/document/d/13_BHG_KI4kVn2t6EXlWuyyjVOBx2doBD/edit?usp=drivesdk&ouid=105912413414551043045&rtpof=true&sd=true'}
//                 />
//                 <SyllabusComp
//                     dep={"CSE"}
//                     sem={"2"}
//                     code={"CS5502XX"}
//                     title={"Elective-IV/ MOOC"}
//                     L={"X"}
//                     T={"X"}
//                     P={"X"}
//                     cred={"3"}
//                     url={''}
//                 />
//                 <SyllabusComp
//                     dep={"CSE"}
//                     sem={"2"}
//                     code={"CS5502XX"}
//                     title={"Elective-V/ MOOC"}
//                     L={"X"}
//                     T={"X"}
//                     P={"X"}
//                     cred={"3"}
//                     url={''}
//                 />
//                 <SyllabusComp
//                     dep={"CSE"}
//                     sem={"2"}
//                     code={"CS5502XX"}
//                     title={"Elective-VI/ MOOC"}
//                     L={"X"}
//                     T={"X"}
//                     P={"X"}
//                     cred={"3"}
//                     url={''}
//                 />
//                 <SyllabusComp
//                     dep={"CSE"}
//                     sem={"2"}
//                     code={"CS550204"}
//                     title={"EAA-Swachha Bharat Mission (SBM)"}
//                     L={"0"}
//                     T={"0"}
//                     P={"2"}
//                     cred={"1"}
//                     url={''}
//                 />
//                 <SyllabusComp
//                     dep={"CSE"}
//                     sem={"3"}
//                     code={"CS550301"}
//                     title={"Project/Dissertation (to be continued in 4th Sem)"}
//                     L={"0"}
//                     T={"0"}
//                     P={"20"}
//                     cred={"10"}
//                     url={''}
//                 />
//                 <SyllabusComp
//                     dep={"CSE"}
//                     sem={"4"}
//                     code={"CS550401"}
//                     title={"Project/Dissertation"}
//                     L={"0"}
//                     T={"0"}
//                     P={"24"}
//                     cred={"12"}
//                     url={''}
//                 />
//                 <SyllabusComp
//                     dep={"Cyber Security"}
//                     sem={"EL"}
//                     code={"CS55XX05"}
//                     title={"Adversarial ML"}
//                     L={"3"}
//                     T={"0"}
//                     P={"0"}
//                     cred={"3"}
//                     url={'https://docs.google.com/document/d/1EdZu91332hjDrxntIEZp82vRLu9HQBLU/edit?usp=drivesdk&ouid=105912413414551043045&rtpof=true&sd=true'}
//                 />
//                 <SyllabusComp
//                     dep={"Cyber Security"}
//                     sem={"EL"}
//                     code={"CS55XX06"}
//                     title={"Deep Learning Algorithms"}
//                     L={"2"}
//                     T={"0"}
//                     P={"2"}
//                     cred={"3"}
//                     url={'https://docs.google.com/document/d/1QhwpDinOy1FXeEEHq61OrklcmjL3Pg7l/edit?usp=drivesdk&ouid=105912413414551043045&rtpof=true&sd=true'}
//                 />
//                 <SyllabusComp
//                     dep={"Cyber Security"}
//                     sem={"EL"}
//                     code={"CS55XX07"}
//                     title={"Mathematical Foundations for Information Security"}
//                     L={"3"}
//                     T={"0"}
//                     P={"0"}
//                     cred={"3"}
//                     url={'https://docs.google.com/document/d/1xhvHinDxW_0YnqcXXH9zSOsCJD_juN-p/edit?usp=drivesdk&ouid=105912413414551043045&rtpof=true&sd=true'}
//                 />
//                 <SyllabusComp
//                     dep={"Cyber Security"}
//                     sem={"EL"}
//                     code={"CS55XX08"}
//                     title={"Information Theory and Coding"}
//                     L={"3"}
//                     T={"0"}
//                     P={"0"}
//                     cred={"3"}
//                     url={'https://docs.google.com/document/d/134dzdXQIvu9XSYRElOAgVYuJjIc4PHJm/edit?usp=drivesdk&ouid=105912413414551043045&rtpof=true&sd=true'}
//                 />
//                 <SyllabusComp
//                     dep={"Cyber Security"}
//                     sem={"EL"}
//                     code={"CS55XX09"}
//                     title={"Wireless & Mobile Security"}
//                     L={"3"}
//                     T={"0"}
//                     P={"0"}
//                     cred={"3"}
//                     url={'https://docs.google.com/document/d/1Q4NnF1GiID1RU5js9oG34Z95nBZetdpG/edit?usp=drivesdk&ouid=105912413414551043045&rtpof=true&sd=true'}
//                 />
//                 <SyllabusComp
//                     dep={"Cyber Security"}
//                     sem={"EL"}
//                     code={"CS55XX10"}
//                     title={"Image Processing Techniques"}
//                     L={"3"}
//                     T={"0"}
//                     P={"0"}
//                     cred={"3"}
//                     url={'https://docs.google.com/document/d/1VgMlWRXpf46S5x2lVZwcxgLYBsnJXKmG/edit?usp=drivesdk&ouid=105912413414551043045&rtpof=true&sd=true'}
//                 />
//                 <SyllabusComp
//                     dep={"Cyber Security"}
//                     sem={"EL"}
//                     code={"CS55XX11"}
//                     title={"Cyber Security"}
//                     L={"3"}
//                     T={"0"}
//                     P={"0"}
//                     cred={"3"}
//                     url={'https://docs.google.com/document/d/1hYCXWv4BaLJF3Vp_KY9ljZdiWt-6Dg8l/edit?usp=drivesdk&ouid=105912413414551043045&rtpof=true&sd=true'}
//                 />
//                 <SyllabusComp
//                     dep={"Cyber Security"}
//                     sem={"EL"}
//                     code={"CS55XX12"}
//                     title={"Multimedia System"}
//                     L={"3"}
//                     T={"0"}
//                     P={"0"}
//                     cred={"3"}
//                     url={'https://docs.google.com/document/d/1HZ7FvqGgPvEwiOevgXRGeKept1YLgCNT/edit?usp=drivesdk&ouid=105912413414551043045&rtpof=true&sd=true'}
//                 />
//                 <SyllabusComp
//                     dep={"Cyber Security"}
//                     sem={"EL"}
//                     code={"CS55XX13"}
//                     title={"Computer Vision"}
//                     L={"3"}
//                     T={"0"}
//                     P={"0"}
//                     cred={"3"}
//                     url={'https://docs.google.com/document/d/179_YIy8RV_SXec4uWT_CkvjxiB9p-myJ/edit?usp=drivesdk&ouid=105912413414551043045&rtpof=true&sd=true'}
//                 />
//                 <SyllabusComp
//                     dep={"Cyber Security"}
//                     sem={"EL"}
//                     code={"CS55XX14"}
//                     title={"Big Data Analytics"}
//                     L={"2"}
//                     T={"0"}
//                     P={"2"}
//                     cred={"3"}
//                     url={'https://docs.google.com/document/d/1Zo6XiPBiCR2-2iRXw-DeFpGN6rz1Wphg/edit?usp=drivesdk&ouid=105912413414551043045&rtpof=true&sd=true'}
//                 />
//                 <SyllabusComp
//                     dep={"Cyber Security"}
//                     sem={"EL"}
//                     code={"CS55XX15"}
//                     title={"Cloud Computing Security"}
//                     L={"3"}
//                     T={"0"}
//                     P={"0"}
//                     cred={"3"}
//                     url={'https://docs.google.com/document/d/1YaNMFedF6tLzd5mVnHn0MIa-JF-h1jLn/edit?usp=drivesdk&ouid=105912413414551043045&rtpof=true&sd=true'}
//                 />
//                 <SyllabusComp
//                     dep={"Cyber Security"}
//                     sem={"EL"}
//                     code={"CS55XX16"}
//                     title={"Biometric Security"}
//                     L={"3"}
//                     T={"0"}
//                     P={"0"}
//                     cred={"3"}
//                     url={'https://docs.google.com/document/d/14YGko8K1lu6f5P5ES-MU7q2DKX7jmwOD/edit?usp=drivesdk&ouid=105912413414551043045&rtpof=true&sd=true'}
//                 />
//                 <SyllabusComp
//                     dep={"Cyber Security"}
//                     sem={"EL"}
//                     code={"CS55XX17"}
//                     title={"Ethical Hacking"}
//                     L={"2"}
//                     T={"0"}
//                     P={"2"}
//                     cred={"3"}
//                     url={'https://docs.google.com/document/d/1Bzi0SFDJeA5j3BzbZJKD2aXp6G9AKLTV/edit?usp=drivesdk&ouid=105912413414551043045&rtpof=true&sd=true'}
//                 />
//                 <SyllabusComp
//                     dep={"Cyber Security"}
//                     sem={"EL"}
//                     code={"CS55XX18"}
//                     title={"Blockchain Technology"}
//                     L={"3"}
//                     T={"0"}
//                     P={"0"}
//                     cred={"3"}
//                     url={'https://docs.google.com/document/d/1Bzi0SFDJeA5j3BzbZJKD2aXp6G9AKLTV/edit?usp=drivesdk&ouid=105912413414551043045&rtpof=true&sd=true'}
//                 />
//                 <SyllabusComp
//                     dep={"Cyber Security"}
//                     sem={"EL"}
//                     code={"CS55XX19"}
//                     title={"Cyber laws and rights in the digital age"}
//                     L={"3"}
//                     T={"0"}
//                     P={"0"}
//                     cred={"3"}
//                     url={'https://docs.google.com/document/d/19oAnc1j64lN9IEUkC1Y_6HS9xO5D_Lhl/edit?usp=drivesdk&ouid=105912413414551043045&rtpof=true&sd=true'}
//                 />
//                 <SyllabusComp
//                     dep={"Cyber Security"}
//                     sem={"EL"}
//                     code={"CS55XX20"}
//                     title={"Digital Watermarking and Steganography"}
//                     L={"3"}
//                     T={"0"}
//                     P={"0"}
//                     cred={"3"}
//                     url={'https://docs.google.com/document/d/17L0XBrMoKU0R0tQsBIBx3nMN3Uj9sbgC/edit?usp=drivesdk&ouid=105912413414551043045&rtpof=true&sd=true'}
//                 />
//                 <SyllabusComp
//                     dep={"Cyber Security"}
//                     sem={"EL"}
//                     code={"CS55XX21"}
//                     title={"Privacy and Security for Online Social Networks"}
//                     L={"3"}
//                     T={"0"}
//                     P={"0"}
//                     cred={"3"}
//                     url={'https://docs.google.com/document/d/1Shii64QvMQ2tG__oC1_ljuiNhIQK1PEx/edit?usp=drivesdk&ouid=105912413414551043045&rtpof=true&sd=true'}
//                 />
//                 <SyllabusComp
//                     dep={"Cyber Security"}
//                     sem={"EL"}
//                     code={"CS55XX22"}
//                     title={"Malware Analysis"}
//                     L={"2"}
//                     T={"0"}
//                     P={"2"}
//                     cred={"3"}
//                     url={'https://docs.google.com/document/d/11EY58hevJ-zAU6N83mwIrJR_k__U4e9N/edit?usp=drivesdk&ouid=105912413414551043045&rtpof=true&sd=true'}
//                 />
//                 <SyllabusComp
//                     dep={"Cyber Security"}
//                     sem={"EL"}
//                     code={"CS55XX23"}
//                     title={"Soft Computing"}
//                     L={"3"}
//                     T={"0"}
//                     P={"0"}
//                     cred={"3"}
//                     url={'https://docs.google.com/document/d/1Wfz350fPyxDRic-NAdXezKYzEBUP9Vxr/edit?usp=drivesdk&ouid=105912413414551043045&rtpof=true&sd=true'}
//                 />
//                 <SyllabusComp
//                     dep={"Cyber Security"}
//                     sem={"EL"}
//                     code={"CS55XX24"}
//                     title={"Ubiquitous Computing"}
//                     L={"3"}
//                     T={"0"}
//                     P={"0"}
//                     cred={"3"}
//                     url={'https://docs.google.com/document/d/1C_kCCcEzH-ygzXtuVPVEyncSBQkzQscu/edit?usp=drivesdk&ouid=105912413414551043045&rtpof=true&sd=true'}
//                 />
//                 <SyllabusComp
//                     dep={"Cyber Security"}
//                     sem={"EL"}
//                     code={"HSXXXXXX"}
//                     title={"Intellectual Property Rights"}
//                     L={"3"}
//                     T={"0"}
//                     P={"0"}
//                     cred={"3"}
//                     url={''}
//                 />
//                 <SyllabusComp
//                     dep={"Cyber Security"}
//                     sem={"EL"}
//                     code={"CS55XX26"}
//                     title={"Embedded System and Hardware Security"}
//                     L={"3"}
//                     T={"0"}
//                     P={"0"}
//                     cred={"3"}
//                     url={'https://docs.google.com/document/d/1hepcq3sdGCn4omShtc_j1vSIypqPreTe/edit?usp=drivesdk&ouid=105912413414551043045&rtpof=true&sd=true'}
//                 />
//                 <SyllabusComp
//                     dep={"Cyber Security"}
//                     sem={"EL"}
//                     code={"CS55XX27"}
//                     title={"Distributed System Design"}
//                     L={"3"}
//                     T={"0"}
//                     P={"0"}
//                     cred={"3"}
//                     url={'https://docs.google.com/document/d/1iDIZttuYQlRQDmXECWqDlh6W4aIDJN-w/edit?usp=drivesdk&ouid=105912413414551043045&rtpof=true&sd=true'}
//                 />
//                 <SyllabusComp
//                     dep={"Cyber Security"}
//                     sem={"EL"}
//                     code={"CS55XX28"}
//                     title={"Software Defined Networks"}
//                     L={"3"}
//                     T={"0"}
//                     P={"0"}
//                     cred={"3"}
//                     url={'https://docs.google.com/document/d/1EoNJaAf4QtmRDgkrzdqmp-V0IJdJkAqi/edit?usp=drivesdk&ouid=105912413414551043045&rtpof=true&sd=true'}
//                 />
//                 <SyllabusComp
//                     dep={"Cyber Security"}
//                     sem={"EL"}
//                     code={"CS55XX29"}
//                     title={"Secure Software Systems"}
//                     L={"2"}
//                     T={"0"}
//                     P={"2"}
//                     cred={"3"}
//                     url={'https://docs.google.com/document/d/1bv7myOc9-l6npdehpWwHgooMgUzx1yHo/edit?usp=drivesdk&ouid=105912413414551043045&rtpof=true&sd=true'}
//                 />
//                 <SyllabusComp
//                     dep={"Cyber Security"}
//                     sem={"EL"}
//                     code={"CS55XX30"}
//                     title={"Pattern Recognition Technique"}
//                     L={"2"}
//                     T={"0"}
//                     P={"2"}
//                     cred={"3"}
//                     url={'https://docs.google.com/document/d/13_Z62Zr4OVfAkczlndnfALyWehChLqgG/edit?usp=drivesdk&ouid=105912413414551043045&rtpof=true&sd=true'}
//                 />
//                 <SyllabusComp
//                     dep={"Cyber Security"}
//                     sem={"EL"}
//                     code={"CS55XX31"}
//                     title={"Natural Language Processing Technique"}
//                     L={"2"}
//                     T={"0"}
//                     P={"2"}
//                     cred={"3"}
//                     url={'https://docs.google.com/document/d/1RHiIFgWrNo0Kd617jm5ajono46s_qqgB/edit?usp=drivesdk&ouid=105912413414551043045&rtpof=true&sd=true'}
//                 />
//                 <SyllabusComp
//                     dep={"Cyber Security"}
//                     sem={"EL"}
//                     code={"CS55XX32"}
//                     title={"Data Visualization"}
//                     L={"2"}
//                     T={"0"}
//                     P={"2"}
//                     cred={"3"}
//                     url={'https://docs.google.com/document/d/1ZiPts7SlqGEbU9w2SAaDSOkVx0LLvpVN/edit?usp=drivesdk&ouid=105912413414551043045&rtpof=true&sd=true'}
//                 />
//                 <SyllabusComp
//                     dep={"Cyber Security"}
//                     sem={"EL"}
//                     code={"CS55XX33"}
//                     title={"Bioinformatics"}
//                     L={"2"}
//                     T={"0"}
//                     P={"2"}
//                     cred={"3"}
//                     url={'https://docs.google.com/document/d/1yxwlC1o7kXRbA971tKgIrF84OC_PGLPH/edit?usp=drivesdk&ouid=105912413414551043045&rtpof=true&sd=true'}
//                 />
//                 <SyllabusComp
//                     dep={"Cyber Security"}
//                     sem={"EL"}
//                     code={"CS55XX34"}
//                     title={"Digital Signal Processing"}
//                     L={"3"}
//                     T={"0"}
//                     P={"0"}
//                     cred={"3"}
//                     url={'https://docs.google.com/document/d/1UiiepA9ueSZyHd2TUNKMhPPQ9HkLAw_E/edit?usp=drivesdk&ouid=105912413414551043045&rtpof=true&sd=true'}
//                 />
//                 <SyllabusComp
//                     dep={"Cyber Security"}
//                     sem={"EL"}
//                     code={"CS55XX35"}
//                     title={"Information Retrieval"}
//                     L={"2"}
//                     T={"0"}
//                     P={"2"}
//                     cred={"3"}
//                     url={'https://docs.google.com/document/d/1lpMGnxoxC7jSZn0DR9k00I0kF2EPjRQG/edit?usp=drivesdk&ouid=105912413414551043045&rtpof=true&sd=true'}
//                 />
//                 <SyllabusComp
//                     dep={"Cyber Security"}
//                     sem={"EL"}
//                     code={"CS55XX36"}
//                     title={"Intrusion Detection"}
//                     L={"2"}
//                     T={"0"}
//                     P={"2"}
//                     cred={"3"}
//                     url={'https://docs.google.com/document/d/1fNet1b4fy995qCg-eRFFGb0LI7Itwr0K/edit?usp=drivesdk&ouid=105912413414551043045&rtpof=true&sd=true'}
//                 />
//                 <SyllabusComp
//                     dep={"Cyber Security"}
//                     sem={"EL"}
//                     code={"CS55XX37"}
//                     title={"IOT Systems"}
//                     L={"2"}
//                     T={"0"}
//                     P={"2"}
//                     cred={"3"}
//                     url={'https://docs.google.com/document/d/1wtgtKKP0ShlMgsI653zIq_Tni7fOgCGy/edit?usp=drivesdk&ouid=105912413414551043045&rtpof=true&sd=true'}
//                 />
//                 <SyllabusComp
//                     dep={"Cyber Security"}
//                     sem={"EL"}
//                     code={"CS55XX38"}
//                     title={"Nature Inspired Computing"}
//                     L={"3"}
//                     T={"0"}
//                     P={"0"}
//                     cred={"3"}
//                     url={'https://docs.google.com/document/d/1Er7O1zr0vfYdzeqA-QktmwhuYG3QSciD/edit?usp=drivesdk&ouid=105912413414551043045&rtpof=true&sd=true'}
//                 />
//                 <SyllabusComp
//                     dep={"Cyber Security"}
//                     sem={"EL"}
//                     code={"CS55XX39"}
//                     title={"Network Security"}
//                     L={"2"}
//                     T={"0"}
//                     P={"2"}
//                     cred={"3"}
//                     url={'https://docs.google.com/document/d/1ZblLshtnjq85UZKFRDSAIQZe_r_0TeQ3/edit?usp=drivesdk&ouid=105912413414551043045&rtpof=true&sd=true'}
//                 />
//                 <SyllabusComp
//                     dep={"Cyber Security"}
//                     sem={"EL"}
//                     code={"CS55XX40"}
//                     title={"Recommendation Systems"}
//                     L={"2"}
//                     T={"0"}
//                     P={"2"}
//                     cred={"3"}
//                     url={'https://docs.google.com/document/d/1RW2TqHu63bO7a9XQ28tpdD3B5S_ATE93/edit?usp=drivesdk&ouid=105912413414551043045&rtpof=true&sd=true'}
//                 />
//                 <SyllabusComp
//                     dep={"Cyber Security"}
//                     sem={"EL"}
//                     code={"CS55XX41"}
//                     title={"Reinforcement Learning"}
//                     L={"2"}
//                     T={"0"}
//                     P={"2"}
//                     cred={"3"}
//                     url={'https://docs.google.com/document/d/1mpau99Nbhntav3lHl_My9FRsc23PMaRN/edit?usp=drivesdk&ouid=105912413414551043045&rtpof=true&sd=true'}
//                 />
//                 <SyllabusComp
//                     dep={"Cyber Security"}
//                     sem={"EL"}
//                     code={"CS55XX42"}
//                     title={"Security Testing"}
//                     L={"2"}
//                     T={"0"}
//                     P={"2"}
//                     cred={"3"}
//                     url={'https://docs.google.com/document/d/1sY_r9JmOTKAuust_GVzbsnptXASMbiky/edit?usp=drivesdk&ouid=105912413414551043045&rtpof=true&sd=true'}
//                 />
//                 <SyllabusComp
//                     dep={"Cyber Security"}
//                     sem={"EL"}
//                     code={"CS55XX43"}
//                     title={"Social Computing"}
//                     L={"2"}
//                     T={"0"}
//                     P={"2"}
//                     cred={"3"}
//                     url={'https://docs.google.com/document/d/14W1EH8mPLTTM38eoLo6IJzCW62j5DRhy/edit?usp=drivesdk&ouid=105912413414551043045&rtpof=true&sd=true'}
//                 />
//                 <SyllabusComp
//                     dep={"Cyber Security"}
//                     sem={"EL"}
//                     code={"CS55XX44"}
//                     title={"Quantum Information Processing"}
//                     L={"3"}
//                     T={"0"}
//                     P={"0"}
//                     cred={"3"}
//                     url={'https://docs.google.com/document/d/1lEB2LQmA3iZjcxyvPAIpN_QRcc6Udyfg/edit?usp=drivesdk&ouid=105912413414551043045&rtpof=true&sd=true'}
//                 />
//             </div>
//         </div>
//     );
// };

// const PhDSyllabus = () => {
//     return (
//         <div className="w-full mb-10 overflow-x-auto">
//             <div className="min-w-[1000px] border">
//                 <div className="grid grid-cols-12 bg-gray-100 font-semibold text-red-900">
//                     <div className="col-span-1 border border-black flex items-center justify-center py-2">Dept.</div>
//                     <div className="col-span-1 border border-black flex items-center justify-center py-2">Sem / Electives</div>
//                     <div className="col-span-2 border border-black flex items-center justify-center py-2">Course Code</div>
//                     <div className="col-span-4 border border-black flex items-center justify-center py-2">Course Title</div>
//                     <div className="col-span-1 border border-black flex items-center justify-center py-2">L</div>
//                     <div className="col-span-1 border border-black flex items-center justify-center py-2">T</div>
//                     <div className="col-span-1 border border-black flex items-center justify-center py-2">P</div>
//                     <div className="col-span-1 border border-black flex items-center justify-center py-2">Credits</div>
//                 </div>

//                 {/* Table Row */}
//                 <SyllabusComp
//                     dep={""}
//                     sem={""}
//                     code={"xxxx"}
//                     title={"Research Methodology"}
//                     L={"3"} T={"0"} P={"0"}
//                     cred={"3"}
//                 />
//                 <SyllabusComp
//                     dep={""}
//                     sem={""}
//                     code={"xxxx"}
//                     title={"Seminar and Technical report Writing"}
//                     L={"0"} T={"0"} P={"3"}
//                     cred={"2"}
//                 />
//                 <SyllabusComp
//                     dep={""}
//                     sem={""}
//                     code={"xxxx"}
//                     title={"Comprehensive Viva & Presentation"}
//                     L={"0"} T={"0"} P={"2"}
//                     cred={"1"}
//                 />
//                 <SyllabusComp
//                     dep={""}
//                     sem={""}
//                     code={"xxxx"}
//                     title={"Course -I"}
//                     L={"3"} T={"0"} P={"0"}
//                     cred={"3"}
//                 />
//                 <SyllabusComp
//                     dep={""}
//                     sem={""}
//                     code={"xxxx"}
//                     title={"Course -II"}
//                     L={"3"} T={"0"} P={"0"}
//                     cred={"3"}
//                 />
//                 <SyllabusComp
//                     dep={""}
//                     sem={""}
//                     code={"xxxx"}
//                     title={"Lab Course"}
//                     L={"0"} T={"0"} P={"6"}
//                     cred={"4"}
//                 />
//                 <SyllabusComp
//                     dep={""}
//                     sem={""}
//                     code={"xxxx"}
//                     title={"Course -III"}
//                     L={"3"} T={"0"} P={"0"}
//                     cred={"3"}
//                 />
//                 <SyllabusComp
//                     dep={""}
//                     sem={""}
//                     code={"xxxx"}
//                     title={"Course -IV"}
//                     L={"3"} T={"0"} P={"0"}
//                     cred={"3"}
//                 />
//                 <SyllabusComp
//                     dep={""}
//                     sem={""}
//                     code={"xxxx"}
//                     title={"Course -V"}
//                     L={"3"} T={"0"} P={"0"}
//                     cred={"3"}
//                 />
//             </div>
//         </div>
//     );
// };

// const syllabusMap = {
//     "btech": {
//         title: "B.Tech in Computer Science and Engineering",
//         content: <BTechSyllabus />,
//     },
//     "dual-cs": {
//         title: "B.Tech and M.Tech Dual Degree (Computer Science and Engineering with Specialization in Cyber Security)",
//         content: <DualCSyllabus />,
//     },
//     "dual-ds": {
//         title: "B.Tech and M.Tech Dual Degree (Computer Science and Engineering with Specialization in Data Science)",
//         content: <DualDSyllabus />,
//     },
//     "mca-ai": {
//         title: "MCA with specialization in Artificial Intelligence and Internet of Thing",
//         content: <MCAITSyllabus />,
//     },
//     "mca-ds": {
//         title: "MCA with specialization in Data Science and Informatics",
//         content: <MCADSSyllabus />,
//     },
//     "mtech-ds": {
//         title: "M.Tech in Data Science and Engineering",
//         content: <MTechDSSyllabus />,
//     },
//     "mtech-cs": {
//         title: "M.Tech in Cyber Security",
//         content: <MTechCSSyllabus />,
//     },
//     "phd": {
//         title: "Ph.D. in Computer Science and Engineering",
//         content: <PhDSyllabus />,
//     },
// };

// export default function SyllabusPage({ params }) {
//     const { course } = params;
//     const syllabus = syllabusMap[course];

//     return (
//         <div className="max-w-7xl mx-auto px-4 mt-10 text-center">
//             <h1 className="text-3xl font-bold text-red-800 mb-6">
//                 {syllabus.title} – Syllabus
//             </h1>
//             {syllabus.content && (
//                 syllabus.content
//             )}
//         </div>
//     );
// }


//look and add
