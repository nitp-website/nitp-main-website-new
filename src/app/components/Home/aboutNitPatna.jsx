"use client"
import { React, useEffect, useRef } from 'react'
import { Button } from "../../../components/ui/button";
import { 
  Landmark, 
  Award, 
  Target, 
  BookOpen, 
  Mail, 
  User, 
  School, 
  MessageSquareQuote,
  Calendar,
  GraduationCap,
  Play,
  Video
} from 'lucide-react';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Aboutus() {
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Video is in view, start playing
            video.play().catch((error) => {
              console.log("Auto-play prevented:", error);
            });
          } else {
            // Video is out of view, pause it
            video.pause();
          }
        });
      },
      {
        threshold: 0.5, // Trigger when 50% of the video is visible
        rootMargin: '0px 0px -50px 0px' // Add some margin for better UX
      }
    );

    observer.observe(video);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div className="relative bg-gray-50">
      <div className="relative h-64 md:h-96 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-red-900 to-red-700 opacity-50"></div>
        <img 
          src="https://i.postimg.cc/h4mxzgKS/nit-patna-004.jpg" 
          alt="NIT Patna Campus"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center px-4">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              About <span className="text-red-300">NIT Patna</span>
            </h1>
            <p className="text-xl text-red-100 max-w-3xl mx-auto">
              Transforming education through excellence in technical learning and research since 1886
            </p>
          </div>
        </div>
      </div>

      <div className="mx-auto px-4 py-12 md:py-16 -mt-10 z-10 relative">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div 
            className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-xl transition-all duration-300"
          >
            <div className="p-6">
              <div className="flex items-center mb-6">
                <div className="bg-red-100 p-3 rounded-lg mr-4">
                  <Landmark className="w-8 h-8 text-red-600" />
                </div>
                <h2 className="text-2xl font-bold text-red-800">ABOUT US</h2>
              </div>
              
              <div className="flex items-start mb-4">
                <Calendar className="w-5 h-5 text-red-500 mt-1 mr-2 flex-shrink-0" />
                <p className="text-gray-600">
                  Established in 1886 as Bihar School of Engineering, NIT Patna is the 18th National Institute of Technology recognized by MHRD, Govt. of India.
                </p>
              </div>

              <div className="mb-6">
                <div className="flex items-start mb-3">
                  <Award className="w-5 h-5 text-red-500 mt-1 mr-2 flex-shrink-0" />
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-1">Vision</h3>
                    <p className="text-gray-600 text-sm">
                    To contribute to India and the World through excellence in scientific and technical education and research; to serve as a valuable resource for industry and society; and to remain a source of pride for all Indians.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mb-6">
                <div className="flex items-start">
                  <Target className="w-5 h-5 text-red-500 mt-1 mr-2 flex-shrink-0" />
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-1">Mission</h3>
                    <p className="text-gray-600 text-sm">
                      To nurture innovation through cutting-edge research and offer world-class undergraduate, postgraduate and doctoral programs.
                    </p>
                  </div>
                </div>
              </div>

              <Button className="w-full bg-red-600 hover:bg-red-700 text-white group">
                <a href="/Institute" className="flex items-center justify-center">
                  Read More
                  <BookOpen className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
            </div>
          </div>

          <div 
            className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-xl transition-all duration-300"
          >
            <div className="p-6 flex flex-col items-center text-center">
              <div className="relative mb-6 group">
                <div className="absolute inset-0 bg-red-600 rounded-full opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                <img 
                  src="https://i.postimg.cc/J4NP3M0H/image.png" 
                  alt="Prof. P.K. Jain"
                  className="w-48 h-48 object-cover rounded-full border-4 border-red-100 shadow-md"
                />
                <div className="absolute -bottom-3 right-6 bg-red-600 text-white px-4 py-1 rounded-full text-xs font-bold shadow-lg">
                  Director
                </div>
              </div>
              
              <h3 className="text-2xl font-bold text-red-800 mb-1">Prof. Pradip K. Jain</h3>
              <div className="flex items-center text-gray-600 mb-4">
                <School className="w-4 h-4 mr-1 text-red-500" />
                <span>Director, NIT Patna</span>
              </div>
              
              <div className="flex items-center text-gray-500 text-sm mb-6">
                <Mail className="w-4 h-4 mr-2 text-red-500" />
                <span>director@nitp.ac.in</span>
              </div>
              
              <div className="flex space-x-3 w-full">
                <Button className="flex-1 bg-transparent text-red-600 border border-red-600 hover:bg-red-50 group">
                  <a href="mailto:director@nitp.ac.in" className="flex items-center justify-center">
                    <Mail className="w-4 h-4 mr-2 group-hover:animate-bounce" />
                    Email
                  </a>
                </Button>
                <Button className="flex-1 bg-red-600 hover:bg-red-700 text-white group">
                  <a href="/Institute/Director" className="flex items-center justify-center">
                    <User className="w-4 h-4 mr-2 group-hover:animate-pulse" />
                    Profile
                  </a>
                </Button>
              </div>
              
              <div className="mt-6 pt-4 border-t border-gray-100 w-full">
                <div className="flex items-center justify-center text-gray-600 text-sm">
                  <GraduationCap className="w-4 h-4 mr-2 text-red-500" />
                  <span>Professor since 2001</span>
                </div>
              </div>
            </div>
          </div>

          <div 
            className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-xl transition-all duration-300"
          >
            <div className="p-6">
              <div className="flex items-center mb-6">
                <div className="bg-red-100 p-3 rounded-lg mr-4">
                  <MessageSquareQuote className="w-8 h-8 text-red-600" />
                </div>
                <h2 className="text-2xl font-bold text-red-800">KNOW US</h2>
              </div>
              
              <div className="mb-6">
                <div className="flex items-start">
                  <User className="w-5 h-5 text-red-500 mt-1 mr-2 flex-shrink-0" />
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-1">About Director</h3>
                    <p className="text-gray-600 text-sm mb-4">
                      Prof. P.K. Jain joined as Lecturer at IIT-BHU in 1981 and became Professor in 2001. He has made significant contributions in high power microwave tubes and gyrotron devices.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="mb-6">
                <div className="flex items-start">
                  <MessageSquareQuote className="w-5 h-5 text-red-500 mt-1 mr-2 flex-shrink-0" />
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-1">Director's Message</h3>
                    <p className="text-gray-600 text-sm">
                      "It gives me immense pleasure to lead one of North India's oldest technical institutes, with roots tracing back to 1876. We continue our legacy of excellence in engineering education."
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="bg-red-50 rounded-lg p-4 mb-6 border border-red-100">
                <div className="flex">
                  <div className="bg-red-100 p-2 rounded-full mr-3">
                    <GraduationCap className="w-5 h-5 text-red-600" />
                  </div>
                  <p className="text-gray-700 text-sm">
                    NIT Patna offers 10 UG, 21 PG, and PhD programs across 11 departments with 230+ faculty members.
                  </p>
                </div>
              </div>
              
              <Button className="w-full bg-red-600 hover:bg-red-700 text-white group">
                <a href="/Institute" className="flex items-center justify-center">
                  Explore More
                  <BookOpen className="ml-2 w-4 h-4 group-hover:rotate-12 transition-transform" />
                </a>
              </Button>
            </div>
          </div>
        </div>

        {/* Campus Life Video Section */}
        <div className="mt-12">
          <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-xl transition-all duration-300 mx-auto max-w-4xl">
            <div className="p-6">
              <div className="flex items-center justify-center mb-6">
                <div className="bg-red-100 p-3 rounded-lg mr-4">
                  <Video className="w-8 h-8 text-red-600" />
                </div>
                <h2 className="text-3xl font-bold text-red-800">History and Campus Life</h2>
              </div>
              
              <div className="relative rounded-xl overflow-hidden shadow-lg bg-gray-900">
                <video 
                  ref={videoRef}
                  className="w-full h-auto" 
                  controls 
                  muted
                  loop
                  poster="/homepage/campus-preview.jpg"
                  preload="metadata"
                  style={{ maxHeight: '400px' }}
                >
                  <source src="https://files.catbox.moe/s2hv8f.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none"></div>
              </div>
              
              <div className="mt-6 text-center">
                <div className="flex items-center justify-center mb-3">
                  <Play className="w-5 h-5 text-red-500 mr-2" />
                  <p className="text-lg font-semibold text-gray-800">Experience NIT Patna</p>
                </div>
                <p className="text-gray-600 max-w-2xl mx-auto">
                  Discover the vibrant campus life, world-class facilities, and the spirit of innovation that defines our community. 
                  From state-of-the-art laboratories to recreational activities, witness what makes NIT Patna a premier institution.
                </p>
              </div>

              <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="text-center p-4 bg-red-50 rounded-lg border border-red-100">
                  <School className="w-6 h-6 text-red-600 mx-auto mb-2" />
                  <p className="text-sm font-semibold text-gray-800">Academic Excellence</p>
                </div>
                <div className="text-center p-4 bg-red-50 rounded-lg border border-red-100">
                  <GraduationCap className="w-6 h-6 text-red-600 mx-auto mb-2" />
                  <p className="text-sm font-semibold text-gray-800">Research Innovation</p>
                </div>
                <div className="text-center p-4 bg-red-50 rounded-lg border border-red-100">
                  <Landmark className="w-6 h-6 text-red-600 mx-auto mb-2" />
                  <p className="text-sm font-semibold text-gray-800">Campus Culture</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4" data-aos="fade-up">
          {[
            { icon: <GraduationCap className="w-8 h-8 text-red-600" />, value: "230+", label: "Faculty" },
            { icon: <School className="w-8 h-8 text-red-600" />, value: "5,000+", label: "Students" },
            { icon: <BookOpen className="w-8 h-8 text-red-600" />, value: "500+", label: "Phd Scholars Awarded" },
            { icon: <Landmark className="w-8 h-8 text-red-600" />, value: "145+", label: "Years Legacy" },
                      
          ].map((stat, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-md text-center hover:shadow-lg transition-shadow">
              <div className="mx-auto mb-3 bg-red-100 w-16 h-16 rounded-full flex items-center justify-center">
                {stat.icon}
              </div>
              <h3 className="text-2xl font-bold text-gray-800">{stat.value}</h3>
              <p className="text-gray-600">{stat.label}</p>
            </div>
          ))}
        </div> */}
      </div>
    </div>
  );
}