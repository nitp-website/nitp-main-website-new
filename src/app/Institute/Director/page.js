import React from 'react'

const page = () => {
    return (
        <div className="w-full max-w-7xl mx-auto px-4 md:px-6 pt-8 md:pt-16 pb-12 md:pb-20 text-black">
          {/* Page Header */}
          <div className="text-center mb-8 md:mb-12 relative">
            <div className="absolute inset-0 bg-red-50 opacity-10 rounded-lg"></div>
            <div className="py-8 px-4 relative">
              <h1 className="text-3xl md:text-4xl font-bold text-red-800 mb-3">Office of the Director</h1>
              <div className="w-24 h-1 bg-gradient-to-r from-red-800 to-red-500 mx-auto rounded-full mb-3"></div>
              <p className="text-gray-600 max-w-2xl mx-auto">Leadership and Vision for NIT Patna's Academic Excellence</p>
            </div>
          </div>
          
          <div className="grid lg:grid-cols-[300px_1fr] gap-8 md:gap-12">
            {/* Profile Section - Left Side (Sticky) */}
            <div className="lg:sticky lg:top-32 lg:self-start flex flex-col items-center gap-6 bg-white rounded-xl shadow-lg p-6 border border-gray-100 h-fit hover:shadow-xl transition-shadow duration-300">
              {/* Profile Image with better styling */}
              <div className="relative">
                <div className="w-48 h-48 md:w-56 md:h-56 rounded-full overflow-hidden border-4 border-red-100 shadow-lg relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-red-500/10 to-red-800/20 z-10"></div>
                  {/* https://i.postimg.cc/6pWBW8Dg/PKJ-Desk-Photo-1.jpg */}
                  <img 
                    src="https://i.postimg.cc/J4NP3M0H/image.png" 
                    width={224} 
                    height={224} 
                    alt="Prof. Pradip K. Jain" 
                    className="object-cover w-full h-full" 
                  />
                </div>
                <div className="absolute bottom-0 right-0 bg-gradient-to-r from-red-700 to-red-600 text-white px-3 py-1 rounded-full text-sm font-semibold shadow-lg">
                  Director
                </div>
              </div>
              
              {/* Director Name and Title */}
              <div className="text-center w-full">
                <h2 className="text-2xl font-bold text-gray-800 mb-1">Prof. Pradip K. Jain</h2>
                <p className="text-red-700 font-medium text-lg">Director, NIT Patna</p>
                <div className="flex items-center justify-center mt-2 gap-1">
                  <span className="inline-block w-2 h-2 bg-red-600 rounded-full"></span>
                  <span className="inline-block w-2 h-2 bg-red-400 rounded-full"></span>
                  <span className="inline-block w-2 h-2 bg-red-200 rounded-full"></span>
                </div>
              </div>
              
              {/* Contact Information */}
              <div className="w-full space-y-3 border-t border-b border-gray-100 py-4">
                <div className="flex items-center gap-3 group">
                  <div className="w-9 h-9 rounded-full bg-red-50 flex items-center justify-center flex-shrink-0">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-5 h-5 text-red-700"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                      />
                    </svg>
                  </div>
                  <a href="mailto:director@nitp.ac.in" className="text-gray-700 hover:text-red-700 transition-colors font-medium">director@nitp.ac.in</a>
                </div>
                
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-red-50 flex items-center justify-center flex-shrink-0">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-5 h-5 text-red-700"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                      />
                    </svg>
                  </div>
                  <span className="text-gray-700 font-medium">National Institute of Technology Patna</span>
                </div>
              </div>
             
              {/* CV Button */}
              <a 
                href="https://drive.google.com/file/d/1Z4t3povLq2PqdWXaGeJ2g55ge9PbG_Jy/view?sz=w320"
                className="flex items-center justify-center gap-2 bg-gradient-to-r from-red-700 to-red-600 text-white font-medium py-3 px-6 rounded-lg hover:shadow-lg transition-all duration-300 w-full"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m.75 12l3 3m0 0l3-3m-3 3v-6m-1.5-9H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
                </svg>
                View Curriculum Vitae
              </a>
            </div>
            <div className="space-y-8">
              <div className="space-y-4 border border-gray-200 p-6 rounded-lg bg-white shadow-sm hover:shadow-md transition-shadow duration-300">
                <h2 className="text-2xl font-bold text-red-800 border-b border-red-100 pb-2">About</h2>
                <p className="text-gray-700 leading-relaxed text-justify">
                Professor Pradip Kumar Jain is the Director of National Institute of Technology Patna, since November 2017. A professor of Electronics and Communication Engineering at IIT(BHU) Varanasi. Prof. Jain has held various administrative positions at IIT(BHU) Varanasi including Dean research and Development, Head Electronics Engineering Department, Coordinator, Centre of Research in Microwave Tubes, and Center of Advanced Study, etc. 
                </p>
                <p className="text-gray-700 leading-relaxed text-justify mt-3">
                Prof. Jain is a well-known name in the field of high-power RF and Microwave devices and circuits. He has extensively engaged in collaborative R&D activities with various national laboratories of CSIR, DRDO, DAE and executed a number of research projects worth ~ ₹ 5 Crores of DRDO, DST, MEITY, etc. He has supervised one D Sc., more than 35 Ph. D and 75 M. Tech students. He has over 250 publications in international journals of repute and 13 patents to his credit.
                </p>
                <p className="text-gray-700 leading-relaxed text-justify mt-3">
               Prof. Jain also served as a Visiting Scientist at Pennsylvania State University US and Massachusetts Institute of Technology, Cambridge, US and at the, in the years 2007 and 2008, respectively. He held an additional responsibility as the Director, IIIT Bhagalpur, Bihar, from July 2023 to till June 2025.
                <p className="text-gray-700 leading-relaxed text-justify mt-3">
                Prof. Jain is a senior member of IEEE, and fellow of IE, ISTE, VEDS, and IETE. He is also chairman/member of various key national level committees of different Government, academic and R&D Institutions.
                </p>
              </div>
              <div className="space-y-4 border border-gray-200 p-6 rounded-lg bg-white shadow-sm hover:shadow-md transition-shadow duration-300">
                <h2 className="text-2xl font-bold text-red-800 border-b border-red-100 pb-2">Director's Message</h2>
                <div className="relative pl-6 border-l-4 border-red-100 py-1">
                  <div className="absolute top-0 left-0 text-red-200 text-6xl -translate-x-4 -translate-y-6 opacity-30">"</div>
                  <p className="text-gray-700 leading-relaxed text-justify italic">
                    It is my pleasure to introduce one of the oldest Technological Institutes of North India, National Institute of Technology Patna, whose history goes back to 1876 when four survey schools were established in Dacca, Hoogly, Cuttack and Patna. The schools at Hoogly and Cuttack failed but those at Dacca and Patna continued to prosper.
                  </p>
                  <p className="text-gray-700 leading-relaxed text-justify italic mt-3">
                    In 1882, a separate altogether, named as Bihar Industrial School, was opened in the premises of the survey school in Patna college campus. In July 1886, these two separate institutions were merged and given the name of Bihar School of Engineering under the leadership of Mr. A Ewbank, the then principal of Patna College.
                  </p>
                  <p className="text-gray-700 leading-relaxed text-justify italic mt-3">
                    Between 1892 and 1902, a functional building which is at present the main administrative building of NIT Patna, was built with Rs. 100,000/- donation from Nawab Lulf Ali Khan of Patna City. The balance amount of Rs. 38,000/- came from the Prince of Wales reception fund. Prof. C. R. Walford was the Principal of this college from 1900 to 1926.
                  </p>
                  <p className="text-gray-700 leading-relaxed text-justify italic mt-3">
                    In 1924, the engineering school upgraded to Bihar College of Engineering under Patna University. In 2004, MHRD, Government of India upgraded Bihar College of Engineering to National Institute of Technology Patna and in 2007 it came under the act 'NIT Act 2007'and declared Institution of National Importance.
                  </p>
                  <p className="text-gray-700 leading-relaxed text-justify italic mt-3">
                    At present NIT Patna is offering undergraduate programs (B. Tech & B. Arch) and Post graduate program (M. Tech & MRUP) along with Ph.D. Programs. Total number of students is nearly 3000. The institute has state-of-art laboratories, in each department.
                  </p>
                  <p className="text-gray-700 leading-relaxed text-justify italic mt-3">
                    This great institute has produced large number of alumni who served the nation with distinction like Mr. M. B. Verma, former Program Director of Prestigious LCA Project of DRDO, Dr. Ratan K. Sinha, Chairman, Atomic Energy Commission of India, Mr. C. Prasad, Ex. D G CPWD to name a few.
                  </p>
                  <p className="text-gray-700 leading-relaxed text-justify italic mt-3">
                    The Institute has a very active linkage industry from its inception. Different PSUs are awarding scholarships to our students. The institute is going to sign MoU with FICCI and CII for collaboration soon. All our passed out graduates are serving the Indian Industry and PSUs with distinction. I wish the Institute all the success.
                  </p>
                  <div className="mt-6 text-right">
                    <p className="font-medium text-gray-900">Prof. Pradip Kumar Jain</p>
                    <p className="text-red-700">Director NIT Patna</p>
                  </div>
                </div>
              </div>
              <div className="space-y-4 border border-gray-200 p-6 rounded-lg bg-white shadow-sm hover:shadow-md transition-shadow duration-300">
                <h2 className="text-2xl font-bold text-red-800 border-b border-red-100 pb-2">Past Administrative Responsibilities</h2>
                <ul className="space-y-3 text-gray-700 mt-4">
                <li>
  <div className="flex items-center gap-3 p-2 rounded-md hover:bg-red-50 transition-colors">
    <div className="w-8 h-8 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0">
      <Work className="w-4 h-4 text-red-700" />
    </div>
    <span>Vice-Chairman, JEE – 2006 and 2007, IIT-BHU, Varanasi</span>
  </div>
</li>
<li>
  <div className="flex items-center gap-3 p-2 rounded-md hover:bg-red-50 transition-colors">
    <div className="w-8 h-8 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0">
      <Work className="w-4 h-4 text-red-700" />
    </div>
    <span>Coordinator, Centre of Research in Microwave Tubes, Dept. of Electronics Engineering, IIT, BHU</span>
  </div>
</li>
<li>
  <div className="flex items-center gap-3 p-2 rounded-md hover:bg-red-50 transition-colors">
    <div className="w-8 h-8 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0">
      <Work className="w-4 h-4 text-red-700" />
    </div>
    <span>Coordinator, Central Media Production Center (CMPC) Banaras Hindu University</span>
  </div>
</li>
<li>
  <div className="flex items-center gap-3 p-2 rounded-md hover:bg-red-50 transition-colors">
    <div className="w-8 h-8 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0">
      <Work className="w-4 h-4 text-red-700" />
    </div>
    <span>Coordinator, Gyanvani FM station, Varanasi (under IGNOU-BHU Partnership)</span>
  </div>
</li>
<li>
  <div className="flex items-center gap-3 p-2 rounded-md hover:bg-red-50 transition-colors">
    <div className="w-8 h-8 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0">
      <Work className="w-4 h-4 text-red-700" />
    </div>
    <span>Institute of Technology Coordinator, University Entrance Examination</span>
  </div>
</li>
<li>
  <div className="flex items-center gap-3 p-2 rounded-md hover:bg-red-50 transition-colors">
    <div className="w-8 h-8 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0">
      <Work className="w-4 h-4 text-red-700" />
    </div>
    <span>Coordinating Superintendent, GATE-2011, GATE-2012 Examinations, IIT BHU</span>
  </div>
</li>
<li>
  <div className="flex items-center gap-3 p-2 rounded-md hover:bg-red-50 transition-colors">
    <div className="w-8 h-8 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0">
      <Work className="w-4 h-4 text-red-700" />
    </div>
    <span>Member, University Central Purchase Committee, BHU</span>
  </div>
</li>
<li>
  <div className="flex items-center gap-3 p-2 rounded-md hover:bg-red-50 transition-colors">
    <div className="w-8 h-8 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0">
      <Work className="w-4 h-4 text-red-700" />
    </div>
    <span>Chairman, Electrical & Electronics Unit, University Central Purchase Committee, BHU</span>
  </div>
</li>
<li>
  <div className="flex items-center gap-3 p-2 rounded-md hover:bg-red-50 transition-colors">
    <div className="w-8 h-8 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0">
      <Work className="w-4 h-4 text-red-700" />
    </div>
    <span>Member Core Committee, Garuda Project (C-DAC Sponsored), IIT-BHU</span>
  </div>
</li>
<li>
  <div className="flex items-center gap-3 p-2 rounded-md hover:bg-red-50 transition-colors">
    <div className="w-8 h-8 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0">
      <Work className="w-4 h-4 text-red-700" />
    </div>
    <span>Chief Coordinator, Institute Industry Partnership Cell, IIT-BHU</span>
  </div>
</li>
<li>
  <div className="flex items-center gap-3 p-2 rounded-md hover:bg-red-50 transition-colors">
    <div className="w-8 h-8 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0">
      <Work className="w-4 h-4 text-red-700" />
    </div>
    <span>Professor In Charge, Institute Main Library, IIT-BHU</span>
  </div>
</li>
<li>
  <div className="flex items-center gap-3 p-2 rounded-md hover:bg-red-50 transition-colors">
    <div className="w-8 h-8 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0">
      <Work className="w-4 h-4 text-red-700" />
    </div>
    <span>Chairman, JEE–2012, IIT-BHU, Varanasi</span>
  </div>
</li>
<li>
  <div className="flex items-center gap-3 p-2 rounded-md hover:bg-red-50 transition-colors">
    <div className="w-8 h-8 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0">
      <Work className="w-4 h-4 text-red-700" />
    </div>
    <span>Coordinator, Center of Advanced Study, Dept of Electronics Engg., IIT-BHU</span>
  </div>
</li>
<li>
  <div className="flex items-center gap-3 p-2 rounded-md hover:bg-red-50 transition-colors">
    <div className="w-8 h-8 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0">
      <Work className="w-4 h-4 text-red-700" />
    </div>
    <span>Chairman, Committees for Selection, Screening, Tests for Institute Staff Recruitments at various levels</span>
  </div>
</li>
<li>
  <div className="flex items-center gap-3 p-2 rounded-md hover:bg-red-50 transition-colors">
    <div className="w-8 h-8 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0">
      <Work className="w-4 h-4 text-red-700" />
    </div>
    <span>Chairman, Institute Central Purchase Cell, 2013-14 - 2017</span>
  </div>
</li>
<li>
  <div className="flex items-center gap-3 p-2 rounded-md hover:bg-red-50 transition-colors">
    <div className="w-8 h-8 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0">
      <Work className="w-4 h-4 text-red-700" />
    </div>
    <span>Chairman, Institute Telecom Committee</span>
  </div>
</li>
<li>
  <div className="flex items-center gap-3 p-2 rounded-md hover:bg-red-50 transition-colors">
    <div className="w-8 h-8 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0">
      <Work className="w-4 h-4 text-red-700" />
    </div>
    <span>Head, Department of Electronics Engineering, IIT(BHU)</span>
  </div>
</li>
<li>
  <div className="flex items-center gap-3 p-2 rounded-md hover:bg-red-50 transition-colors">
    <div className="w-8 h-8 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0">
      <Work className="w-4 h-4 text-red-700" />
    </div>
    <span>Dean (Research & Development), IIT(BHU)</span>
  </div>
</li>

                </ul>
              </div>
            </div>
          </div>
        </div>
      )
}





export default page

function Work({ className = "" }) {
    return (
        <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className={className || "w-5 h-5"}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z"
        />
      </svg>
    )
  }
