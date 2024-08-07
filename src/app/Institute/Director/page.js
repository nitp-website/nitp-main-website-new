import React from 'react'

const page = () => {
    return (
        <div className="w-full max-w-7xl mx-auto px-4 md:px-6 pt-12 md:py-16 text-black text-justify">
          <div className="grid md:grid-cols-[200px_1fr] gap-8 md:gap-12">
            <div className="flex flex-col items-center md:items-start gap-4">
              <div className="w-40 h-40 rounded-full overflow-hidden">
                <img src="https://i.postimg.cc/6pWBW8Dg/PKJ-Desk-Photo-1.jpg" width={200} height={200} alt="Profile" className="object-cover" />
              </div>
              <div className="space-y-1 text-center md:text-left">
                <h1 className="text-xl font-bold text-[#a01d0c]">Prof. Pradip K. Jain</h1>
                <p className="text-muted-foreground text-black">Director</p>
              </div>
              <div className="flex flex-col items-center md:items-start gap-2">
                <div className="flex items-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-5 h-5 text-muted-foreground"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                    />
                  </svg>
                  <a href="mailto:director@nitp.ac.in" className="text-neutral-600"><span>director@nitp.ac.in</span></a>
                </div>
                {/* <div className="flex items-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-5 h-5 text-muted-foreground"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                    />
                  </svg>
                  <span>phone number</span>
                </div> */}
                <div className="flex items-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-5 h-5 text-muted-foreground"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                    />
                  </svg>
                  <span className="text-neutral-600">NIT Patna</span>
                </div>
              </div>
             
              <button className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-gray-900 focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800">
<span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-white rounded-md group-hover:bg-opacity-0 ">
<a href="https://drive.google.com/file/d/1Z4t3povLq2PqdWXaGeJ2g55ge9PbG_Jy/view?sz=w320">   View CV</a>
</span>
</button>
            </div>
            <div className="space-y-8 ">
              <div className="space-y-4 border-2 p-5 backdrop-blur-sm rounded-lg">
                <h2 className="text-2xl font-bold text-[#a01d0c] z-50 ">About</h2>
                <p className="text-muted-foreground">
                Prof. Pradip K. Jain joined as a Lecturer of Electronics Engineering at Institute of Technology, Banaras Hindu University in 1981, and became Professor in the Year 2001. He has made significant contribution in the areas of analysis, modeling and development of high power microwave tubes and gyrotron devices. Currently, He is Director of National Institute of Technology, Patna. He also served as Dean, Research and Development of Indian Institute of Technology (BHU), Varanasi, Coordinator of the Centre of Research in Microwave Tubes, Coordinator, Center of Advanced Study, and Head of Department of Electronics Engineering, IIT (BHU) besides acting as Chairman of the various Institute level committees over the years. Prof. Jain is actively and extensively engaged in collaborative research and development activities with other national laboratories in this area, like, CEERI (CSIR, Pilani), Various DRDO Laboratories, IPR (DAE, Gandhinagar) and successfully executed a number of sponsored research projects. His current research interests include high power microwave devices and circuits. Prof. Jain was a Visiting Scientist at Massachusetts Institute of Technology, Cambridge, US and at the Pennsylvania State University, US in the years 2008 and 2007, respectively. He has so far guided 20 doctoral theses, published more than 100 research papers in SCI journals and 200 in the conference proceedings beside a patent and authoring six book/monograph chapters. Dr. Jain is a senior member of IEEE, fellow of Institution of Electronics and Telecommunications Engineers of India, Fellow of Institution of Engineers of India and also a fellow of Vacuum Electron Devices and Application Society.
                </p>
              </div>
              <div className="space-y-4 border-2 p-5 backdrop-blur-sm rounded-lg">
                <h2 className="text-2xl font-bold text-[#a01d0c]">Director's Message</h2>
                <p className="text-muted-foreground">
                "It is my pleasure to introduce one of the oldest Technological Institutes of North India, National Institute of Technology Patna, whose history goes back to 1876 when four survey schools were established in Dacca, Hoogly, Cuttack and Patna. The schools at Hoogly and Cuttack failed but those at Dacca and Patna continued to prosper. In 1882, a separate altogether, named as Bihar Industrial School, was opened in the premises of the survey school in Patna college campus. In July 1886, these two separate institutions were merged and given the name of Bihar School of Engineering under the leadership of Mr. A Ewbank, the then principal of Patna College. Between 1892 and 1902, a functional building which is at present the main administrative building of NIT Patna, was built with Rs. 100,000/- donation from Nawab Lulf Ali Khan of Patna City. The balance amount of Rs. 38,000/- came from the Prince of Wales reception fund. Prof. C. R. Walford was the Principal of this college from 1900 to 1926. In 1924, the engineering school upgraded to Bihar College of Engineering under Patna University. In 2004, MHRD, Government of India upgraded Bihar College of Engineering to National Institute of Technology Patna and in 2007 it came under the act ‘NIT Act 2007’and declared Institute of National Importance.
                At present NIT Patna is offering undergraduate programs (B. Tech & B. Arch) and Post graduate program (M. Tech & MRUP) along with Ph.D. Programs. Total number of students is nearly 3000. The institute has state-of-art laboratories, in each department. This great institute has produced large number of alumni who served the nation with distinction like Mr. M. B. Verma, former Program Director of Prestigious LCA Project of DRDO, Dr. Ratan K. Sinha, Chairman, Atomic Energy Commission of India, Mr. C. Prasad, Ex. D G CPWD to name a few. The Institute has a very active linkage industry from its inception. Different PSUs are awarding scholarships to our students. The institute is going to sign MoU with FICCI and CII for collaboration soon. All our passed out graduates are serving the Indian Industry and PSUs with distinction. I wish the Institute all the success."

Prof. Pradip Kumar Jain,
Director NIT Patna
                </p>
              </div>
              <div className="space-y-4 border-2 p-5 backdrop-blur-sm rounded-lg">
                <h2 className="text-2xl font-bold text-[#a01d0c]">Past Administrative Responsibilities</h2>
                <ul className="space-y-2 text-muted-foreground">
                <li>
  <div className="flex items-center gap-2">
    <Work />
    <span>Vice-Chairman, JEE – 2006 and 2007, IIT-BHU, Varanasi</span>
  </div>
</li>
<li>
  <div className="flex items-center gap-2">
    <Work />
    <span>Coordinator, Centre of Research in Microwave Tubes, Dept. of Electronics Engineering, IIT, BHU</span>
  </div>
</li>
<li>
  <div className="flex items-center gap-2">
    <Work />
    <span>Coordinator, Central Media Production Center (CMPC) Banaras Hindu University</span>
  </div>
</li>
<li>
  <div className="flex items-center gap-2">
    <Work />
    <span>Coordinator, Gyanvani FM station, Varanasi (under IGNOU-BHU Partnership)</span>
  </div>
</li>
<li>
  <div className="flex items-center gap-2">
    <Work />
    <span>Institute of Technology Coordinator, University Entrance Examination</span>
  </div>
</li>
<li>
  <div className="flex items-center gap-2">
    <Work />
    <span>Coordinating Superintendent, GATE-2011, GATE-2012 Examinations, IIT BHU</span>
  </div>
</li>
<li>
  <div className="flex items-center gap-2">
    <Work />
    <span>Member, University Central Purchase Committee, BHU</span>
  </div>
</li>
<li>
  <div className="flex items-center gap-2">
    <Work />
    <span>Chairman, Electrical & Electronics Unit, University Central Purchase Committee, BHU</span>
  </div>
</li>
<li>
  <div className="flex items-center gap-2">
    <Work />
    <span>Member Core Committee, Garuda Project (C-DAC Sponsored), IIT-BHU</span>
  </div>
</li>
<li>
  <div className="flex items-center gap-2">
    <Work />
    <span>Chief Coordinator, Institute Industry Partnership Cell, IIT-BHU</span>
  </div>
</li>
<li>
  <div className="flex items-center gap-2">
    <Work />
    <span>Professor In Charge, Institute Main Library, IIT-BHU</span>
  </div>
</li>
<li>
  <div className="flex items-center gap-2">
    <Work />
    <span>Chairman, JEE–2012, IIT-BHU, Varanasi</span>
  </div>
</li>
<li>
  <div className="flex items-center gap-2">
    <Work />
    <span>Coordinator, Center of Advanced Study, Dept of Electronics Engg., IIT-BHU</span>
  </div>
</li>
<li>
  <div className="flex items-center gap-2">
    <Work />
    <span>Chairman, Committees for Selection, Screening, Tests for Institute Staff Recruitments at various levels</span>
  </div>
</li>
<li>
  <div className="flex items-center gap-2">
    <Work />
    <span>Chairman, Institute Central Purchase Cell, 2013-14 - 2017</span>
  </div>
</li>
<li>
  <div className="flex items-center gap-2">
    <Work />
    <span>Chairman, Institute Telecom Committee</span>
  </div>
</li>
<li>
  <div className="flex items-center gap-2">
    <Work />
    <span>Head, Department of Electronics Engineering, IIT(BHU)</span>
  </div>
</li>
<li>
  <div className="flex items-center gap-2">
    <Work />
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

function Work() {
    return (
        <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-5 h-5"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z"
        />
      </svg>
    )
  }