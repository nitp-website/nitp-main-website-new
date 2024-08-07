"use client";

import { useState, useEffect } from 'react';
import { useSearchParams, usePathname, useRouter } from 'next/navigation';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserGraduate, faSchool, faBookOpen } from '@fortawesome/free-solid-svg-icons';
import './Ipage.css';

export default function InstitutePage() {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const router = useRouter();

  const initialTab = searchParams.get('tab') || 'about';
  const [activeSection, setActiveSection] = useState(initialTab);

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

  return (
    <div className="flex flex-col min-h-screen">
      <header className="bg-primary text-primary-foreground px-4 lg:px-5 h-14 flex items-center justify-between">
        <div className="maindivins">
          <div className="containerip">
            <div
              className={`cardins cardins1 ${activeSection === 'about' ? 'active' : ''}`}
              onClick={() => handleNavigation('about')}
              style={{ backgroundColor: activeSection === 'about' ? 'white' : 'initial' }}
            >
              <FontAwesomeIcon icon={faUserGraduate} size="2x" color='#d62a39' />
              <p className="heading">About</p>
            </div>
            <div
              className={`cardins cardins1 ${activeSection === 'mission' ? 'active' : ''}`}
              onClick={() => handleNavigation('mission')}
              style={{ backgroundColor: activeSection === 'mission' ? 'white' : 'initial' }}
            >
              <FontAwesomeIcon icon={faUserGraduate} size="2x" color='#d62a39' />
              <p className="heading">Mission</p>
            </div>
            <div
              className={`cardins cardins1 ${activeSection === 'values' ? 'active' : ''}`}
              onClick={() => handleNavigation('values')}
              style={{ backgroundColor: activeSection === 'values' ? 'white' : 'initial' }}
            >
              <FontAwesomeIcon icon={faSchool} size="2x" color='#d62a39' />
              <p className="heading">Values</p>
            </div>
            <div
              className={`cardins ${activeSection === 'campus' ? 'active' : ''}`}
              onClick={() => handleNavigation('campus')}
              style={{ backgroundColor: activeSection === 'campus' ? 'white' : 'initial' }}
            >
              <FontAwesomeIcon icon={faBookOpen} size="2x" color='#d62a39' />
              <p className="heading">Campus</p>
            </div>
          </div>
        </div>
      </header>
      <div className="flex-1 flex justify-center items-center ">
        {activeSection === 'about' && (
          <section className=" text-black mx-2 p-2 md:p-10 md:ml-28 md:mr-28 pb-0 mt-10 md:mt-20 justify-center items-center space-y-4 border-2 backdrop-blur-sm rounded-lg">
          <h1 className='font-extrabold text-3xl text-red-800 mx-auto text-center pd-3 md:pb-10' >About us </h1>
          <p className="text-muted-foreground">National Institute of Technology Patna is the 18th National Institute of Technology created by the Ministry of H.R.D. Government of India after rechristening the erstwhile Bihar College of Engineering Patna on 28. 01. 2004. NIT Patna marked its humble beginning in 1886 with the establishment of pleaders survey training school which was subsequently promoted of Bihar College of Engineering Patna in 1924. This made this institute the 6th Oldest Engineering Institute of India. The graduate level curriculum was later elevated to the post graduate level in 1978. The institute is situated on the south bank of holy river Ganges behind Gandhi Ghat, one of the most important and reverential place of Patna. The Gandhi Ghat is associated with the immersion of ashes of father of the Nation Mahatma Gandhi in the river Ganges. The campus has a picturesque river view with historic building presenting a spectacle of architectural delight and natural beauty.</p>
          <p className="text-muted-foreground">National Institute of Technology Patna has been declared as an Institute of National Importance and has been granted a fully Autonomous Status by MHRD, Government of India. The Institute has also been declared as a Centre of Excellence of impart high level education training , research and development in science, engineering technology and humanities. It is imparting high quality education & values at UG (B.Tech), PG (M.Tech) & Ph .D programmes through its experienced faculty well versed in their respective field of engineering an technology with well equipped laboratories . At present the Institute has seven disciplines viz. Architecture, Civil Engineering, Compute Science & Engg., Electrical Engg., Electronics & Communication Engg., Information Technology and Mechanical Engg., and well established departments of physics, Mathematics and Humanities and Social Science.</p>

          <p className="text-muted-foreground">National Institute of Technology Patna aims at setting out very high education standards and holds long record of academic excellence. The pedagogical aspects have been formulated to suit not only the needs of the contemporary industrial requirements but also to develop human potential to its fullest extent in a range of professions. Extra curricular activities are planed through games and sports, cultural programmes and NSS activities. Cultural activities provide a platform to know about the culture of various states and regions of the country and opportunity for national integration.</p>

          <p className="text-muted-foreground">Ever since its rechristening, NIT Patna has been on the fast track of development and has undergone numerous facelifts because of which placement records have witnessed unprecedented growth and is touching new heights as the graph of placement is increasing remarkably.</p>
        </section>
        )}
        {activeSection === 'mission' && (
          <section className=" text-black mx-2 p-2 md:p-10 md:ml-28 md:mr-28 pb-0 mt-10 justify-center items-center space-y-4 border-2 backdrop-blur-sm rounded-lg">
          <h1 className='font-extrabold text-3xl text-red-800 mx-auto text-center pd-3 md:pb-10' >Vision</h1>
          <p className="text-muted-foreground">
          To contribute to India and the World through excellence in scientific and technical education and research; to serve as a valuable resource for industry and society; and to remain a source of pride for all Indians.
        </p>
        <h1 className='font-extrabold text-3xl text-red-800 mx-auto text-center pd-3 md:pb-10' >Mission</h1>
          <p className="text-muted-foreground">To generate new knowledge by engaging in cutting-edge research and to promote academic growth by offering state-of-the-art undergraduate, postgraduate and doctoral programmes</p>

          <p className="text-muted-foreground">To identify, based on an informed perception of Indian, regional and global needs, areas of specialization upon which the Institute can concentrate</p>

          <p className="text-muted-foreground">To undertake collaborative projects which offer opportunities for long term interaction with academia and industry</p>

          <p className="text-muted-foreground">To develop human potential to its fullest extent so that intellectually capable and imaginatively gifted leaders can emerge in a range of profession</p>

        </section>
        )}
        {activeSection === 'values' && (
          <section className=" text-black mx-2 p-2 md:p-10 md:ml-28 md:mr-28 pb-0 justify-center items-center space-y-4 border-2 backdrop-blur-sm rounded-lg">
          <h1 className='font-extrabold text-3xl text-red-800 mx-auto text-center pd-3 md:pb-10' >Values</h1>
          <p className="text-muted-foreground">Academic integrity and accountability.</p>

          <p className="text-muted-foreground">Respect and tolerance for the views of every individual.</p>

          <p className="text-muted-foreground">Attention to issues of national relevance as well as of global concern.</p>

          <p className="text-muted-foreground">Breadth of understanding, including knowledge of the human sciences.</p>

          <p className="text-muted-foreground">Appreciation of intellectual excellence and creativity.</p>

          <p className="text-muted-foreground">An unfettered spirit of explorating, rationality and enterprise.</p>
          
        </section>
        )}
        {activeSection === 'campus' && (
         <section className=" text-black mx-2 p-5 md:pt-5 md:ml-28 md:mr-28 pb-5 border-2 backdrop-blur-sm rounded-lg md:-m-20 md:-p-20">
         <h1 className='font-extrabold text-3xl text-red-800 mx-auto text-center pd-3 md:pb-10' >Campus</h1>
         <p className="text-muted-foreground">
         NIT Patna is situated on the South bank of river Ganges behind Gandhi Ghat, one of the most important and sacred places of Patna . The Institute campus is 8 Km from the Patna junction railway station and 20 Km from the Jai Prakash Narayan International Airport, Patna . The entrance to the institute is from Ashok Rajpath and it is about 3Km from the famous Gandhi Maidan. The Institute is residential in nature and provides residential facilities to its students as well as teachers as per availability. Its large campus has a picturesque river view with eyecatching historic buildings presenting a spectacle of architectural and natural beauty.</p>
        
          </section>
        )}
      </div>
      
    </div>
  );
}
