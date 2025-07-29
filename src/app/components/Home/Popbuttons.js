"use client"
import React,{useEffect} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserGraduate, faGraduationCap, faSchool, faBolt, faBuilding,faPlaneDeparture, faHandHoldingDollar } from '@fortawesome/free-solid-svg-icons';
import './styles/Popbutton.css';
import Link from 'next/link';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Popbuttons = () => {
  useEffect(() => {
    AOS.init({
         duration: 800,
         once: false,
         offset: 50,
       })
 }, [])
  return (
    
    <div className='maindiv bg-transparent flex'>
      <div className='h-auto text-white containersideleft' data-aos="zoom-out-up"></div>
      <div className='container  bg-transparent'>
      {/* <div className="card card1" >
      <Link href="/Student" className="card card1">
          <FontAwesomeIcon icon={faUserGraduate} size="4x" className="mobileicondiv"color='#f7cece'/>
          <p className="headingp">STUDENT</p>
        </Link>
      </div> */}
      <a href ="/Academic/Admission" className="card">
        <FontAwesomeIcon icon={faSchool} size="4x" className="mobileicondiv" color='#BA210E' />
        <p className="headingp">ADMISSIONS</p>
      </a>

      <a href="https://tnp.nitp.ac.in/" className="card card1" target="_blank" >
        <FontAwesomeIcon icon={faBuilding} size="3x" className="mobileicondiv" color='#f7cece'/>
        <p className="headingp headingp1 headingp1t">TRAINING AND PLACEMENT</p>
      </a>

      <a href="/Academic/Admission?type=study_in_india" className="card">
      <FontAwesomeIcon icon={faUserGraduate} size="4x" className="mobileicondiv" color='#BA210E' />
      <p className="headingp ">Study In India</p>
      </a>

      <Link href="/Notices/JobsNITP" className="card">
        <FontAwesomeIcon icon={faBolt} size="4x" className="mobileicondiv" color='#BA210E' />
        <p className="headingp">RECRUITMENT</p>
      </Link>

      <a href="https://alumini-nitp.vercel.app/" className="card card1" target="_blank" >
          <FontAwesomeIcon icon={faGraduationCap} size="4x" className="mobileicondiv" color='#f7cece' />
          <p className="headingp12 headingp1">ALUMNI</p>
        </a>
            
      {/* <Link href="/Institute/Magazine" className="card">
      <FontAwesomeIcon icon={faBookOpen} size="4x" className="mobileicondiv" color='#BA210E' />
      <p className="headingp">MAGAZINE</p>
      </Link> */}
       
      
      
      {/* <Link href ="/Academic/Faculty&Staff" className="card card1">
      <FontAwesomeIcon icon={faUsers} size="3x" className="mobileicondiv" color='#f7cece' />
      <p className="headingp headingp1f ">FACULTY & STAFF</p>
      </Link> */}
      
      <a href="/Institute/International" className="card">
      <FontAwesomeIcon icon={faPlaneDeparture} size="4x" className="mobileicondiv" color='#BA210E' />
      <p className="headingp ">International Affairs</p>
      </a>
     
      <a href="https://eict.nitp.ac.in/" className="card card1" target="_blank" >
        <FontAwesomeIcon icon={faBuilding} size="3x" className="mobileicondiv" color='#f7cece'/>
        <p className="headingp headingp1 headingp1t">Electronics & ICT Academy</p>
      </a>
      <a href="/DevelopmentFund" className="card">
      <FontAwesomeIcon icon={faHandHoldingDollar} size="4x" className="mobileicondiv" color='#BA210E' />
      <p className="headingp ">Development Fund</p>
      </a>

      

    </div>
    <div className='h-auto text-white containersideright' data-aos="zoom-out-up"></div>
    </div>
    
  );
}

export default Popbuttons;
