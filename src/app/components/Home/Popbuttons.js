"use client"
import React,{useEffect} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserGraduate, faGraduationCap, faSchool, faBookOpen, faBolt, faUsers, faCalendarAlt, faBuilding,faPlaneDeparture } from '@fortawesome/free-solid-svg-icons';
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
    
    <div className='maindiv flex'>
      <div className='h-auto text-white containersideleft' data-aos="zoom-out-up"></div>
      <div className='container'>
      <div className="card card1" >
      <Link href="/Student" className="card card1">
          <FontAwesomeIcon icon={faUserGraduate} size="4x" className="mobileicondiv"color='#f7cece'/>
          <p className="headingp">STUDENT</p>
        </Link>
      </div>
      <a href="https://alumini-nitp.vercel.app/" className="card" target="_blank" >
          <FontAwesomeIcon icon={faGraduationCap} size="4x" className="mobileicondiv" color='#BA210E' />
          <p className="headingp12 headingp1">ALUMNI</p>
        </a>
      <a href ="/Academic/Admission?tab=JoSAA" className="card card1">
        <FontAwesomeIcon icon={faSchool} size="4x" className="mobileicondiv" color='#f7cece' />
        <p className="headingp">ADMISSIONS</p>
      </a>
      
      <Link href="/Institute/Magazine" className="card">
      <FontAwesomeIcon icon={faBookOpen} size="4x" className="mobileicondiv" color='#d62a39' />
      <p className="headingp">MAGAZINE</p>
      </Link>
      
      <Link href="/Notices/JobsNITP" className="card">
        <FontAwesomeIcon icon={faBolt} size="4x" className="mobileicondiv" color='#d62a39' />
        <p className="headingp">RECRUITMENT</p>
      </Link>
      
      <Link href ="/Academic/Faculty&Staff" className="card card1">
      <FontAwesomeIcon icon={faUsers} size="3x" className="mobileicondiv" color='#f7cece' />
      <p className="headingp">FACULTY & STAFF</p>
      </Link>
      
      <a href="/Institute/International" className="card">
      <FontAwesomeIcon icon={faPlaneDeparture} size="4x" className="mobileicondiv" color='#d62a39' />
      <p className="headingp">International Affairs</p>
      </a>
      <a href="https://tpc.nitp.ac.in/" className="card card1" target="_blank" >
        <FontAwesomeIcon icon={faBuilding} size="3x" className="mobileicondiv" color='#f7cece'/>
        <p className="headingp headingp1 headingp1t">TRAINING AND PLACEMENT</p>
      </a>

    </div>
    <div className='h-auto text-white containersideright' data-aos="zoom-out-up"></div>
    </div>
    
  );
}

export default Popbuttons;
