"use client"
import axios from "axios";
import BackDepartment from "../../components/department/BackDepartment";
import DepartmentNotify1 from "../../components/department/DepartmentNotify1";
import Image from "next/image";
import { useRouter } from 'next/navigation';
import { useEffect, useState, useRef } from "react";
import { ChevronRight, ChevronDown, Code, Server, Database, Brain, Users, Award, Mail, GraduationCap } from 'lucide-react';

const carouselImages = [
  {
    src: "/ee-feature1.png",
    alt: "CSE Research Lab",
    caption: "Advanced Computing Research Laboratory"
  },
  {
    src: "/ee-feature2.png",
    alt: "Student Projects",
    caption: "Student Innovation Showcase"
  },
  {
    src: "/ee-feature3.png",
    alt: "Department Infrastructure",
    caption: "State-of-the-art Infrastructure"
  }
];

export default function CSE() {
  const router = useRouter();
  const [activeSlide, setActiveSlide] = useState(0);
  const [notices, setNotices] = useState([]);
  const [activeSection, setActiveSection] = useState("hero");
  
  // Refs for scrolling
  const heroRef = useRef(null);
  const aboutRef = useRef(null);
  const programsRef = useRef(null);
  const researchRef = useRef(null);
  const facultyRef = useRef(null);
  const achievementsRef = useRef(null);
  const contactRef = useRef(null);
  


  // Fetch notices
  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios.get(`${process.env.NEXT_PUBLIC_BACKEND_API_URL}/api/notice?type=cse`);
        setNotices(response.data);
      } catch (error) {
        console.error("Error fetching notices:", error);
      }
    }
    getData();
  }, []);

  // Carousel automation
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide((prev) => (prev === carouselImages.length - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  // Intersection observer for section highlighting
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.id;
            setActiveSection(id);
          }
        });
      },
      { threshold: 0.3 }
    );

    const sections = document.querySelectorAll('section[id]');
    sections.forEach((section) => {
      observer.observe(section);
    });

    return () => {
      sections.forEach((section) => {
        observer.unobserve(section);
      });
    };
  }, []);

  // Scroll to section function
  const scrollToSection = (ref) => {
    ref.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-900/30 via-red-800 to-[#421010] text-white overflow-hidden ">
      {/* Floating particles background effect */}
      <div className="particle-container absolute inset-0 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div 
            key={i}
            className="particle absolute bg-red-900 opacity-20 rounded-full"
            style={{
              width: `${Math.random() * 10 + 2}px`,
              height: `${Math.random() * 10 + 2}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animation: `float ${Math.random() * 20 + 10}s linear infinite`
            }}
          />
        ))}
      </div>

      <main>
        {/* Hero Section */}
        <section id="hero" ref={heroRef} className="relative min-h-[90vh] flex items-center overflow-hidden">
          {/* Dynamic Background with animation */}
          <div className="absolute inset-0 -z-10">
            <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
              <defs>
                <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#2d0707" />
                  <stop offset="100%" stopColor="#421010" />
                </linearGradient>
                <pattern id="grid" width="8" height="8" patternUnits="userSpaceOnUse">
                  <path d="M 8 0 L 0 0 0 8" fill="none" stroke="rgba(59, 130, 246, 0.1)" strokeWidth="0.5" />
                </pattern>
              </defs>
              <rect width="100" height="100" fill="url(#grad1)" />
              <rect width="100" height="100" fill="url(#grid)" />
            </svg>
          </div>

          <div className="container mx-auto px-4 z-10 py-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-8 text-center lg:text-left">
                <h1 className="text-5xl md:text-6xl font-bold leading-tight">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-red-300">
                    Computer Science
                  </span>
                  <br />
                  & Engineering
                </h1>
                <p className="text-xl text-red-100">
                  Pioneering the future through innovation, research, and excellence in education
                </p>
                <div className="flex flex-wrap justify-center lg:justify-start gap-4">
                  <button 
                    href="/Department/CSE/mission"
                    className="px-6 py-3 bg-red-500 hover:bg-red-800 text-white rounded-md transition-all duration-300 transform hover:scale-105 hover:shadow-red-500/50 hover:shadow-lg"
                  >
                    Mission & Vision
                  </button>
                  <button 
                    href="/Department/CSE/faculty"
                    className="px-6 py-3 bg-transparent border border-red-400 text-white hover:bg-red-900/30 rounded-md transition-all duration-300"
                  >
                    People
                  </button>
                </div>
              </div>

              {/* Advanced Image Carousel */}
              <div className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl shadow-red-900/50 group">
                {carouselImages.map((image, index) => (
                  <div 
                    key={index}
                    className={`absolute inset-0 transition-opacity duration-1000 ${
                      activeSlide === index ? "opacity-100" : "opacity-0"
                    }`}
                  >
                    <Image
                      src={image.src}
                      alt={image.alt}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-8 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                      <h3 className="text-2xl font-bold">{image.caption}</h3>
                    </div>
                  </div>
                ))}
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-10 flex space-x-2">
                  {carouselImages.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setActiveSlide(index)}
                      className={`w-3 h-3 rounded-full transition-all duration-300 ${
                        activeSlide === index 
                          ? "bg-red-400 w-6" 
                          : "bg-white/50 hover:bg-white/80"
                      }`}
                      aria-label={`Go to slide ${index + 1}`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" ref={aboutRef} className="py-24 bg-gray-900 bg-opacity-70 backdrop-blur-sm">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                About the <span className="text-red-400">Department</span>
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-red-500 to-red-400 mx-auto"></div>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <p className="text-gray-300 leading-relaxed">
                  The Department of Computer Science and Engineering offers courses leading to Bachelor of Technology in Computer Science and Engineering. The department has excellent infrastructure and faculty to provide outstanding education.
                </p>
                <p className="text-gray-300 leading-relaxed">
                  The curriculum is updated regularly to keep up with the growing demands and the changing trends of the software industry and research laboratories. The department provides a wide range of courses including Data Structures, Design and Analysis of Algorithms, System Programming, Computer Networks, and Artificial Intelligence.
                </p>
                <button
                  onClick={() => router.push('/Department/CSE/about')}
                  className="inline-flex items-center group text-red-400 hover:text-red-300 font-semibold transition-all duration-300"
                >
                  Read More 
                  <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
              
              {/* Notices Section - Redesigned */}
              <div className="bg-gray-800 bg-opacity-50 backdrop-blur-md rounded-xl shadow-xl border border-red-900/20 overflow-hidden">
                <div className="flex justify-between items-center p-6 border-b border-red-900/20">
                  <h3 className="text-xl font-semibold text-red-200 flex items-center">
                    <Code className="w-5 h-5 mr-2" /> 
                    Announcements
                  </h3>
                  
                </div>
                <div className="p-4 max-h-[360px] overflow-y-auto">
                  <div className="space-y-3">
                    {notices.length > 0 ? (
                      notices.map((notice, id) => (
                        notice.isVisible === 1 && (
                          <div 
                            key={id} 
                            className="p-4 rounded-lg bg-gradient-to-r from-red-500 to-gray-600 border-l-4 border-red-500 hover:border-red-400 transition-all duration-300 hover:translate-x-1"
                          >
                            <DepartmentNotify1
                              title={notice.title}
                              attachments={notice.attachments}
                              important={notice.important}
                              link={notice.notice_link || ""}
                            />
                          </div>
                        )
                      ))
                    ) : (
                      <div className="text-center py-8 text-gray-400">
                        <p>No announcements available</p>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

       

        {/* Navigation Grid (Simplified) */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
              {[
                { title: 'MISSION & VISION', path: '/Department/CSE/mission', icon: <Server className="w-6 h-6" /> },
                { title: 'FACULTY', path: '/Department/CSE/faculty', icon: <Users className="w-6 h-6" /> },
                { title: 'SYLLABUS', path: '/Department/CSE/syllabus', icon: <GraduationCap className="w-6 h-6" /> },
                { title: 'TIME TABLE', path: '/Department/CSE/timeTable', icon: <Code className="w-6 h-6" /> },
                { title: 'LABS', path: '/Department/CSE/labs', icon: <Database className="w-6 h-6" /> },
                { title: 'ACHIEVEMENTS', path: '/Department/CSE/achivments', icon: <Award className="w-6 h-6" /> }
              ].map((button, index) => (
                <button
                  key={index}
                  onClick={() => router.push(button.path)}
                  className="bg-red-900 p-6 rounded-xl border border-gray-700 hover:border-red-900 transition-all duration-300 hover:scale-105 hover:bg-red-950 flex flex-col items-center gap-3"
                >
                  <div className="text-red-200">{button.icon}</div>
                  <h3 className="text-sm font-semibold text-center">
                    {button.title}
                  </h3>
                </button>
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* Add these styles to your global CSS or create a separate CSS file */}
      <style jsx global>{`
        @keyframes float {
          0% { transform: translateY(0) translateX(0); }
          25% { transform: translateY(-15px) translateX(15px); }
          50% { transform: translateY(-25px) translateX(5px); }
          75% { transform: translateY(-15px) translateX(-15px); }
          100% { transform: translateY(0) translateX(0); }
        }
      `}</style>
    </div>
  );
}