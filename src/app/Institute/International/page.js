"use client";

import { useState, useEffect } from 'react';
import { useSearchParams, usePathname, useRouter } from 'next/navigation';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faHome, faGraduationCap, faBullhorn, faHandshake, faUserTie, faPhone, faImage, faCalendarAlt, faBook, faChalkboardTeacher, faPlane, faBookOpen, faEllipsisH,faTools } from '@fortawesome/free-solid-svg-icons';

import './style.css';

export default function InternationalAffairsPage() {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const router = useRouter();

  const initialTab = searchParams.get('tab') || 'Home';
  const [activeSection, setActiveSection] = useState(initialTab);
  const [activeEventSubsection, setActiveEventSubsection] = useState('Conferences');
    const [activePartnershipSubsection, setActivePartnershipSubsection] = useState('OngoingMoUs');

  useEffect(() => {
    const tab = searchParams.get('tab');
    if (tab && tab !== activeSection) {
      setActiveSection(tab);
    }
  }, [searchParams]);

  const handleNavigation = (section) => {
    setActiveSection(section);
    updateURL(section);
  };

  const updateURL = (section) => {
    const url = new URL(window.location.href);
    url.searchParams.set('tab', section);
    window.history.pushState({}, '', url.toString());
  };

  const handleEventSubNavigation = (subsection) => {
    setActiveEventSubsection(subsection);
  };
  const handlePartnershipSubNavigation = (subsection) => {
    setActivePartnershipSubsection(subsection);
  };
  return (
    <div className="flex flex-col bg-white bg-opacity-70 maincont1">
      <header className="bg-primary text-primary-foreground px-4 lg:px-5 h-14 flex items-center justify-between">
        <div className="bottonconatiner">
          <div className="containeripi ">
            {[
              { id: 'Home', icon: faHome, label: 'Home' },
              { id: 'Announcements', icon: faBullhorn, label: 'Announcements' },
              { id: 'Partnership', icon: faHandshake, label: 'Partnership' },
              { id: 'StudentExchange', icon: faGraduationCap, label: 'Student Exchange' },
              { id: 'FacultyExchange', icon: faUserTie, label: 'Faculty Exchange' },
              { id: 'ContactDetails', icon: faPhone, label: 'Contact Details' },
              { id: 'Gallery', icon: faImage, label: 'Gallery' },
              { id: 'Events', icon: faCalendarAlt, label: 'Events' }
            ].map((tab) => (
              <div
                key={tab.id}
                className={`cardacad cardacad1 ${activeSection === tab.id ? 'active' : ''}`}
                onClick={() => handleNavigation(tab.id)}
                style={{ backgroundColor: activeSection === tab.id ? 'white' : 'initial' }}
              >
                <FontAwesomeIcon icon={tab.icon} className='w-6 h-6 md:w-8 md:h-8' color='#d62a39' />
                <p className="heading">{tab.label}</p>
              </div>
            ))}
          </div>
        </div>
      </header>
      <div className='detailcontainer mx-5 md:mx-20'>
        <div className="flex-1 flex justify-center items-center">
          {activeSection === 'Home' && (
            <section className="text-black items-center  mx-auto">
              <h1 className="section-title-heading text-red-800">Welcome to International Affairs</h1>
              <img src="https://i.postimg.cc/zX1hTMfT/nit-patna-003.jpg" className='mx-auto w-4/5 h-[40vh]'></img>
              <p className='text-justify mt-10 mx-5 md:mx-28'>National Institute of Technology Patna (Institute of National Importance) is the 18th National Institute of Technology created by the Ministry of Education, Government of India after rechristening the erstwhile Bihar College of Engineering Patna on 28. 01. 2004. The institute is well recognised in the field of engineering education and research. NIT Patna has been ranked 56 by National Institutional Ranking Framework (NIRF), Government of India, Ranking 2023 in engineering category. It currently has about 6000 students and 500 teaching and non-teaching staff. NIT Patna will soon set up its additional campus almost 30 km from the state capital, Patna at Bihta. The master plan has been prepared for 6,600 students. The approved detailed project report (DPR) envisages a campus to cater to 2,415 students (B. Tech, M. Tech, MSc, and Ph.D.), 250 faculty members, and 350 non-teaching staff members in the first phase. Research and academic programmes (bachelor's, master's and doctoral) at NIT Patna are driven by a well-known faculty, many of whom are reputed for their research contributions internationally. Members of the faculty of the institute have won many prestigious awards and recognitions, including the word ranking of top 2% scientist given by Stanford University, USA, Royal Society fellowships and awards, AD Scientific Index etc. At present the Institute has nine disciplines viz. Computer Science & Engg., Electronics & Communication Engg., Electrical Engg., Civil Engg., Mechanical Engg., Mechatronics & Automation Engg., Chemical Engg. and Technology, Materials Science & Engg., Architecture and planning, and well established departments of Humanities and Social Science, Physics, Chemistry and Mathematics. The Institute alumni have distinguished themselves through their achievements in and contributions to leading researchers, industry, academics, business, government and social domains. Located at on the south bank of holy river Ganges behind Gandhi Ghat, one of the most important and reverential place of Patna. The Gandhi Ghat is associated with the immersion of ashes of father of the Nation Mahatma Gandhi in the river Ganges. The campus has a picturesque river view with historic building presenting a spectacle of architectural delight and natural beauty.<br></br>
Refer the link for more detail: <a href='https://www.nitp.ac.in/' target='_blank' className='text-blue-700'>https://www.nitp.ac.in/</a></p>
            </section>
          )}
          {activeSection === 'Announcements' && (
            <section className="text-black mx-10 md:mx-20">
              <h1 className="section-title-heading text-red-800">Announcements</h1>
                <h3 className='text-xl font-bold'>Study in India (SII) Scheme</h3>
                    The Study in India is a project of the Government of India under the aegis of the Ministry of Education. Foreign students applying to the SII programme get the opportunity to avail of financial assistance in the form either Study in India Scholarship or Fee Waiver. The SII Scholarship worth USD 3200 is offered to meritorious students on the basis of scores of PRAGATII Exam. Furthermore, students who do not get the SII Scholarship can still avail Fee Waiver that is granted across 3 categories by the institutes. To know more about the SII programme and Study in India Scholarship, please visit <a src="https://studyinindia.gov.in/" className='text-blue-500'>SII Scheme</a> 

                    <h3 className='text-xl font-bold'>MSCA Doctoral Networks</h3>
                    The objective of Doctoral Networks is to implement doctoral programmes by partnerships of organisations from different sectors across Europe and beyond to train highly skilled doctoral candidates, stimulate their creativity, enhance their innovation capacities and boost their employability in the long-term. Refer the url for more detail at <a src="https://marie-sklodowska-curie-actions.ec.europa.eu/actions/doctoral-networks" className='text-blue-500'>MSCA</a> .

                    <h3 className='text-xl font-bold'>Royal Society Grants Received by NIT Patna Professors</h3>
                    Dr. Amit Kumar Singh and Dr. Jyoti Prakash Singh from the Department of Computer Science and Engineering, National Institute of Technology Patna (NITP) received grants of €12,000 under the International Exchanges award for overseas travel between collaborators in the United Kingdom (UK) and India. The grant is mainly received for the research collaboration over the project “Robust watermarking scheme in medical images for smart healthcare”, which is currently funded by The Royal Society, United Kingdom. This collaborative research between National Institute of Technology Patna, India, and University of Leicester, UK mainly focuses on developing effective copyright protection methods that can offer improved robustness, invisibility, capacity, and security with high accuracy for smart healthcare applications.
                    <img src="https://web.nitp.ac.in/intl-affair/faculty-visit.jpg" className='max-w-60 md:max-w-96 border-2 border-red-950 mx-auto pt-10 mt-10'></img>
            </section>
          )}
          {activeSection === 'Partnership' && (
  <section className="text-black">
    <h1 className="section-title-heading text-red-800">Partnerships</h1>
    <div className="sub-nav grid grid-cols-3 md:grid-cols-6 gap-2 md:gap-4 pl-3 text-center">
      {[
        { id: 'OngoingMoUs', label: 'Ongoing MoUs' },
        { id: 'MoUInProcess', label: 'MoU in process' },
        { id: 'PreApproved', label: 'Pre-approved' },
        { id: 'PastMoUs', label: 'Past MoUs' },
        { id: 'JointActivities', label: 'Joint academic and research activities' }
      ].map((subtab) => (
        <div
          key={subtab.id}
          className={`partnership-subtab ${activePartnershipSubsection === subtab.id ? 'active bg-red-100' : ''} border-red-100 border-2 rounded-lg`}
          onClick={() => handlePartnershipSubNavigation(subtab.id)}
        >
          <span className='text-xs md:text-base'>{subtab.label}</span>
        </div>
      ))}
    </div>
    <div className="partnership-content pt-16">
      {activePartnershipSubsection === 'OngoingMoUs' && (
        <div>
          <h2 className="text-xl mb-6 text-neutral-700">
            <ul className='list-disc'>
                <li>
                    <a href="https://drive.google.com/file/d/1avWRhDy5-sXe6gaBkFi6edrfWQyi6XTl/view?usp=sharing">MoU between Pennsylvania State University, USA & NIT Patna.</a>
                </li>
            </ul>
            
          </h2>
          
        </div>
      )}
      {activePartnershipSubsection === 'MoUInProcess' && (
        <div>
           <h2 className="text-xl mb-6 text-neutral-700">
           <ul className="list-disc">
           <li>
          <a href="https://aicybersecuritycenter.com/" >
            International Center for AI and Cyber Security Research and Innovations (CCRI), Asia University, Taiwan
          </a>
        </li>
        <li>
          <a href="https://www.unical.it/" >
            UNIVERSITA’ DELLA CALABRIA, Italy
          </a>
        </li>
        <li>
          <a href="https://www.unifi.it/" >
            University of Florence, Italy
          </a>
        </li>
        <li>
          <a href="https://eiu.edu.vn/en/" >
            Eastern International University, Vietnam
          </a>
        </li>
        <li>
          <a href="https://www.ufscar.br/" >
            University of São Carlos (UFSCar), Brazil
          </a>
        </li>
           </ul>
           </h2>
        </div>
      )}
      {activePartnershipSubsection === 'PreApproved' && (
        <div>
            <img src="https://www.svgrepo.com/show/492701/supporting-business-person.svg" alt="img" className='w-72 h-72 mx-auto'/> 
          <h2 className="text-xl font-bold mb-6 text-red-400 text-center">Currently no pre-approved MoUs !</h2>
          {/* <p>Details about pre-approved MoUs will be updated if available...</p> */}
        </div>
      )}
      {activePartnershipSubsection === 'PastMoUs' && (
        <div>
            <img src="https://www.svgrepo.com/show/492701/supporting-business-person.svg" alt="img" className='w-72 h-72 mx-auto'/> 
          <h2 className="text-xl font-bold mb-6 text-red-400 text-center">Currently no past MoUs Data !</h2>
          {/* <p>Details about past MoUs will be updated if available...</p> */}
        </div>
      )}
      {activePartnershipSubsection === 'JointActivities' && (
        <div>
            <img src="https://www.svgrepo.com/show/492701/supporting-business-person.svg" alt="img" className='w-72 h-72 mx-auto'/> 
          <h2 className="text-xl font-bold mb-6 text-red-400 text-center">Currently no joint academic and research activities !</h2>
          {/* <p>Details about joint academic and research activities will be updated if available...</p> */}
        </div>
      )}
    </div>
  </section>
)}
          {activeSection === 'StudentExchange' && (
            <section className="text-black">
              <h1 className="section-title-heading text-red-800">Student Exchange</h1>
              <img src="https://www.svgrepo.com/show/492701/supporting-business-person.svg" alt="img" className='w-72 h-72 mx-auto'/> 
          <h2 className="text-xl font-bold mb-6 text-red-400 text-center">will be Updated soon !</h2>
            </section>
          )}
          {activeSection === 'FacultyExchange' && (
            <section className="text-black">
              <h1 className="section-title-heading text-red-800">Faculty Exchange</h1>
              <img src="https://www.svgrepo.com/show/492701/supporting-business-person.svg" alt="img" className='w-72 h-72 mx-auto'/> 
          <h2 className="text-xl font-bold mb-6 text-red-400 text-center">will be Updated soon !</h2>
            </section>
          )}
          {activeSection === 'ContactDetails' && (
            <section className="text-black">
              <h1 className="section-title-heading text-red-800 pb-8 pt-5">Contact Details</h1>
              <div className='grid grid-cols-1 md:grid-cols-2 gap-52'>
                <div>
<h3 className='text-xl font-bold'>Dr. Amit Kumar Singh</h3><br></br>
Professor-in-Charge, International Affairs<br></br>
Associate Professor<br></br>
Department of Computer Science & Engineering<br></br>
National Institute of Technology Patna<br></br>
Ashok Rajpath, Patna, Bihar, 800005, India<br></br><br></br>
<h3 className='font-bold'>Official Email:</h3><br></br>
amit.singh@nitp.ac.in,<br></br>
amit_245singh@yahoo.com<br></br><br></br>

<h3 className='font-bold'>Telephone:</h3> (+91) 612-2371715 extn. 225
</div>
<div>
    <img src="https://drive.google.com/thumbnail?authuser=0&sz=w320&id=1v2jlADs0iPttRin4thdy38Dge9g-ibB3"></img>
    <h3 className='font-bold'>Dr. Amit Kumar Singh</h3>
    <h4>Professor-in-Charge, International Affairs</h4>
</div>

              </div>
            </section>
          )}
          {activeSection === 'Gallery' && (
            <section className="text-black">
              <h1 className="section-title-heading text-red-800">Gallery</h1>
              <h3 className=" text-2xl text-center pb-5 text-neutral-700">Departments</h3>
              <div className='grid gird-cols-1 sm:grid-cols-3 md:grid-cols-4 gap-10'>
                
                <div className="grid-cols-1">
            <img
             src="https://web.nitp.ac.in/intl-affair/mech-dep.jpg"
             
            ></img>
            <strong>Mechanical Department</strong>
           </div>
           <div className="">
            <img
             src="https://web.nitp.ac.in/intl-affair/cse-dep.jpg"
             
            ></img>
            <strong>Computer Science Department</strong>
           </div>
            
            <div className="">
            <img
             src="https://web.nitp.ac.in/intl-affair/ece-dep.jpg"
             
            ></img>
            <strong>Electronics and Communication Department</strong>
           </div>
           <div className="">
            <img
             src="https://web.nitp.ac.in/intl-affair/electrical-dep.jpg"
             
            ></img>
            <strong>Electrical Department</strong>
           </div>
                <div className="">
            <img
             src="https://web.nitp.ac.in/intl-affair/chem-dep.jpg"
             
            ></img>
            <strong>Chemistry Department</strong>
           </div>
           <div className="">
            <img
             src="https://web.nitp.ac.in/intl-affair/architecture-dep.jpg"
             
            ></img>
            <strong>Architecture Department</strong>
           </div>
               
              </div>
              <h3 className=" text-2xl text-center pb-5 text-neutral-700">Labs</h3>
              <div className='grid gird-cols-1 sm:grid-cols-3 md:grid-cols-4 gap-10'>
              <div className="">
            <img
             src="https://web.nitp.ac.in/intl-affair/ece-lab.jpg"
             
            ></img>
            <strong>Microwave Lab</strong>
           </div>
           <div className="">
            <img
             src="https://web.nitp.ac.in/intl-affair/cse-lab.jpg"
             
            ></img>
            <strong>Computer Lab</strong>
           </div>
              <div className="">
            <img
             src="https://web.nitp.ac.in/intl-affair/ee-lab.jpg"
             
            ></img>
            <strong>Electrical Lab</strong>
           </div>
           <div className="">
            <img
             src="https://web.nitp.ac.in/intl-affair/lib.jpg"
             
            ></img>
            <strong>Library</strong>
           </div></div>

            </section>
          )}
          {activeSection === 'Events' && (
            <section className="text-black">
              <h1 className="section-title-heading text-red-800">Events</h1>
              <div className="sub-nav grid grid-cols-3 md:grid-cols-6 gap-2 md:gap-4 pl-3 text-center">
                {[
                  { id: 'Conferences', label: 'Conferences', icon: faChalkboardTeacher },
                  { id: 'Workshops', label: 'Workshops', icon: faTools },
                  { id: 'ShortTermCourses', label: 'Short term courses / training / internship', icon: faBookOpen },
                  { id: 'InternationalVisit', label: 'International visit', icon: faPlane },
                  { id: 'Magazine', label: 'Magazine', icon: faBook },
                  { id: 'Others', label: 'Others', icon: faEllipsisH }
                ].map((subtab) => (
                  
                  <div
                    key={subtab.id}
                    className={`event-subtab ${activeEventSubsection === subtab.id ? 'active bg-red-100' : ''} border-red-100 border-2 rounded-lg`}
                    onClick={() => handleEventSubNavigation(subtab.id)}
                  >
                    
                    <span className=' text-xs  md:text-base'>{subtab.label}</span>
                  </div>
              
                ))}
              </div>
              <div className="event-content pt-16">
                {activeEventSubsection === 'Conferences' && (
                  <div>
                    <img src="https://www.svgrepo.com/show/492701/supporting-business-person.svg" alt="img" className='w-72 h-72 mx-auto'/> 
                    <h1 className="text-xl font-bold mb-6 text-red-400 text-center">Currently no conferences !</h1>
                    <p>Details about upcoming conferences will be updated if available...</p>
                  </div>
                )}
                {activeEventSubsection === 'Workshops' && (
                  <div>
                    <img src="https://www.svgrepo.com/show/492701/supporting-business-person.svg" alt="img" className='w-72 h-72 mx-auto'/> 
                    <h1 className="text-xl font-bold mb-6 text-red-400 text-center">Currently no Workshops !</h1>
                    <p>Details about Upcoming Workshops will be updated if available...</p>
                   
                  </div>
                )}
                {activeEventSubsection === 'ShortTermCourses' && (
                    <div>
                    <img src="https://www.svgrepo.com/show/492701/supporting-business-person.svg" alt="img" className='w-72 h-72 mx-auto'/> 
                    <h1 className="text-xl font-bold mb-6 text-red-400 text-center">Currently no short term courses, training, and internships !</h1>
                    <p>Details about upcoming short term courses, training, and internships will be updated if available...</p>
                   
                    </div>
                )}
                {activeEventSubsection === 'InternationalVisit' && (
                  <div>
                    <h2 className='text-2xl text-center font-bold pb-5 text-red-800'>International Visits</h2>
                    <div className="event-card">
                      <img src="https://web.nitp.ac.in/intl-affair/faculty-visit.jpg" alt="Visit to University Of Leicester, UK" className="event-image border-black border-2 mx-auto h-[50vh] w-auto" />
                      <h3 className='mx-auto text-center pb-10'>Visit to University Of Leicester, UK</h3>
                      <div className="event-description mx-5 md:mx-40">
                        
                        <p>Dr. Amit Kumar Singh and Dr. Jyoti Prakash Singh visited University of Leicester, UK as a part of an International Exchanges award for overseas travel between collaborators in the UK and India funded by Royal Society, UK, from May 31, 2023, to June 6, 2023.</p>
                      </div>
                    </div>
                  </div>
                )}
                {activeEventSubsection === 'Magazine' && (
                  <div className='text-center mx-auto'>
                    <h2 className='text-2xl text-center font-bold pb-5 text-red-800'>Magazines</h2>
                    <div
            className="bg-white border-red-300 border-2 w-60 px-5 py-5 shadow-md rounded-lg overflow-hidden cursor-pointer mx-auto"
            onClick={() => window.open("https://drive.google.com/file/d/1v94mM-W9xegDIJ3ZOjTznL2FgioDSCaq/view?usp=sharing", '_blank')}
            
          >
            <img src="https://i.postimg.cc/tRrQct9s/Screenshot-2024-08-03-215833.png" alt=" magzine cover" className="h-auto object-cover mx-auto border-2 border-black" />
            <div className="p-4">
              <h2 className="text-sm md:text-lg font-semibold text-red-800">Magazine Vol. 6 (June 2023)</h2>
            </div>
          </div>
                  </div>
                )}
                {activeEventSubsection === 'Others' && (
                  <div className='text-center mx-auto max-w-96'>
                    <h2 className='text-2xl text-center font-bold pb-5 text-red-800'>Other Events</h2>
                    <img src="https://web.nitp.ac.in/intl-affair/taiwan.jpg" className='mx-auto max-w-96'></img>
                    <p className='font-bold text-black'>An online meeting on "Higher Education Opportunities for Indian Students" with Dr. Rushikesh Khire, Providence University, Taiwan on August 22, 2023.</p>
                  </div>
                )}
              </div>
            </section>
          )}
        </div>
      </div>
    </div>
  );
}
