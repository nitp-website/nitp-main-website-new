"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import "./styles/Footer.css";
import logo from "../../assets/images/logo.png"
const Footer = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [pollutionData, setPollutionData] = useState(null);
  const [currentDateTime, setCurrentDateTime] = useState(new Date());

  const fetchWeatherData = async () => {
    try {
      const response = await fetch(
        `http://api.openweathermap.org/data/2.5/forecast?lat=25.5941&lon=85.1376&appid=${process.env.NEXT_PUBLIC_YOUR_API_KEY}`
      );
      const data = await response.json();
      setWeatherData(data);
    } catch (error) {
      console.error("Error fetching weather data:", error);
    }
  };

  const fetchPollutionData = async () => {
    try {
      const response = await fetch(
        `http://api.openweathermap.org/data/2.5/air_pollution?lat=25.5941&lon=85.1376&appid=${process.env.NEXT_PUBLIC_YOUR_API_KEY}`
      );
      const data = await response.json();
      setPollutionData(data);
    } catch (error) {
      console.error("Error fetching air pollution data:", error);
    }
  };

  useEffect(() => {
    // Fetch data initially
    fetchWeatherData();
    fetchPollutionData();

    // Fetch data every two minutes
    const interval = setInterval(() => {
      fetchWeatherData();
      fetchPollutionData();
    }, 120000);

    // Clean up interval on component unmount
    return () => clearInterval(interval);
  }, []);

  // Helper function to format date and time
  const formatDate = (date) => {
    return date.toLocaleString("en-US", {
      weekday: "long",
      hour: "numeric",
      minute: "numeric",
      hour12: true,
      day: "numeric",
      month: "long",
      year: "numeric",
    });
  };
  return (
  <>

  <footer className="fsdiv bg-[#421010] text-white py-8">
      <div className="container3 mx-auto px-4 flex justify-between items-start flex-wrap">
        <div className="flex flex-col ndivf ">
          <img
            src="https://i.postimg.cc/k5CYZwwS/logo.png"
            alt="NIT Patna Logo"
            className="w-24 h-24 mb-2"
          />
          <p>National Institute of Technology Patna</p>
          <p>Ashok Rajpath, Mahendru, Patna, Bihar 800005</p>
          <p className="mt-4">
            <PhoneIcon className="inline-block mr-2" /> 0612-2371715
          </p>
          <p>
            <MailIcon className="inline-block mr-2" /> info@nitp.ac.in
          </p>
          <p>
            <GlobeIcon className="inline-block mr-2" /> www.nitp.ac.in
          </p>
          <div className="flex space-x-4 mt-4">
          <a href="https://twitter.com/NITPatna1" target="_blank" rel="noopener noreferrer">
        <TwitterIcon className="w-6 h-6" />
      </a>
      <a href="https://www.linkedin.com/company/nit-patna" target="_blank" rel="noopener noreferrer">
        <LinkedinIcon className="w-6 h-6" />
      </a>
      <a href="https://www.facebook.com/NITPatna" target="_blank" rel="noopener noreferrer">
        <FacebookIcon className="w-6 h-6" />
      </a>
      <a href="https://goo.gl/maps/srZ6whpfDGqg85sp6" target="_blank" rel="noopener noreferrer">
        <LocationIcon className="w-6 h-6" />
      </a>
          
          </div>
        </div>

        <div className="flex flex-col items-start w-full md:w-auto">
          <h3 className="font-bold mb-1 mt-5  leading-relaxed tracking-wide">
            Quick Links
          </h3>
          <div className="w-full h-0.5 bg-[#a51818] mb-3" />
          <ul className="space-y-2">
            <li>
              <a href="/Departments" className="hover:underline">
                Departments
              </a>
            </li>
            <li>
              <Link
                href="/Others/NIRF"
                className="hover:underline"
                
              >
                NIRF
              </Link>
            </li>

            <li>
              <Link
                href="/Others/NewCampus"
                className="hover:underline"
               
              >
                New Campus
              </Link>
            </li>

            <li>
              <Link
                href="/Others/RTI"
                className="hover:underline"
                
              >
                RTI
              </Link>
            </li>
            {/* <li>
              <a
                href="https://www.nitp.ac.in/webteam/"
                className="hover:underline"
              >
                Web Team
              </a>
            </li> */}
            <li>
              <Link
                href="/Institute/Magazine"
                className="hover:underline"
              >
                Magazine(Vol.4)
              </Link>
            </li>
            {/* <li>
              <a href="#" className="hover:underline">
                Switch to Dark Mode
              </a>
            </li> */}
          </ul>
        </div>
        <div className="flex flex-col items-start  w-full md:w-auto">
          <h3 className="font-bold mb-1 mt-5 leading-relaxed tracking-wide">
            Explore
          </h3>
          <div className="w-full h-0.5 bg-[#a51818] mb-3" />
          <ul className="space-y-2">
            <li>
              <Link
                href="/Institute?tab=campus"
                className="hover:underline"
                
              >
                Campus
              </Link>
            </li>
            <li>
              <Link
                href="/Others/BOG"
                className="hover:underline"
              >
                BOG/FC/BWC Minutes
              </Link>
            </li>
            <li>
              <Link
                href="/Others/Convocation/"
                className="hover:underline"
              >
                Convocation 2023
              </Link>
            </li>
            <li>
              <Link
                href="/Others/Senate"
                className="hover:underline"
              >
                Senate Minutes
              </Link>
            </li>
            <li>
              <Link
                href="/Facilities/SCST"
                className="hover:underline"
              >
                SC/ST Grievance Cell
              </Link>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Climate Action Plan
              </a>
            </li>
            <li>
              <a
                href="https://drive.google.com/file/d/1EdgaqKGB0zlB1LUmypjpnV9QAkXmpjBu/view"
                className="hover:underline"
                target="_blank"
              >
                Anti-Sexual Harassment Policy
              </a>
            </li>
          </ul>
        </div>

        <div className="flex flex-col items-start  w-full md:w-auto">
          <h3 className="font-bold mb-1 mt-5 leading-relaxed tracking-wide">
            Useful Links
          </h3>
          <div className="w-full h-0.5 bg-[#a51818] mb-3" />
          <ul className="space-y-2">
            <li>
              <a
                href="https://www.google.com/maps/place/National+Institute+of+Technology+Patna/@25.6207241,85.170702,17z/data=!3m1!4b1!4m5!3m4!1s0x39ed58dce6732867:0x4059f39a1ac82f06!8m2!3d25.6207241!4d85.1728907"
                className="hover:underline"
                target="_blank"
              >
                How to Reach
              </a>
            </li>
            <li>
              <Link
                href="/Others/Report"
                className="hover:underline"
              >
                Annual Reports
              </Link>
            </li>
            {/* <li>
              <a
                href=""
                className="hover:underline"
                target="_blank"
              >
                ICT Academy
              </a>
            </li> */}
            <li>
              <Link
                href="/Student/NSS"
                className="hover:underline"
              >
                National Service Scheme
              </Link>
            </li>
            <li>
              <Link
                href="/Others/Tenders"
                className="hover:underline"
              >
                Tenders
              </Link>
            </li>
            <li>
              <a
                href="https://drive.google.com/file/d/1tVgQSygS8GRTZIglbVWVClasegdd6BCi/view"
                className="hover:underline"
                target="_blank"
              >
                Academic Calendar
              </a>
            </li>
            <li>
              <Link
                href="/Others/Terms"
                className="hover:underline"
              >
                Terms of Use
              </Link>
            </li>
          </ul>
        </div>

        <div className="flex flex-col wfdiv  w-full md:w-auto">
          <h3 className="font-bold mb-4">
            <MapIcon className="inline mr-1" /> Patna
          </h3>
          {weatherData && weatherData.list && weatherData.list.length > 0 ? (
            <>
              <p>{formatDate(currentDateTime)}</p>
              <p className="flex items-center mt-2">
                <CloudIcon className="inline-block mr-2" />{" "}
                {weatherData.list[0].weather[0].description}{" "}<CloudIcon className="inline-block ml-2" />
              </p>
              <p>
                Temp: {(weatherData.list[0].main.temp - 273.15).toFixed(2)}°C
              </p>
              <p>
                Humidity: {weatherData.list[0].main.humidity}% Wind:{" "}
                {weatherData.list[0].wind.speed} km/h
              </p>
            </>
          ) : (
            <p>Loading...</p>
          )}
          {pollutionData &&
          pollutionData.list &&
          pollutionData.list.length > 0 ? (
            <div className="mt-2 p-2 border rounded">
              <p>
                Air Pollution (PM2.5):{" "}
                <span className="text-green-500">
                  {pollutionData.list[0].components.pm2_5}{" "}
                  <HeartIcon className="inline-block" />
                </span>
              </p>
              <p className="text-xs">Source: openweather</p>
            </div>
          ) : (
            <p>Loading...</p>
          )}
          <h4 className="mt-4">Visitors:</h4>
          <div className="flex space-x-2 mt-2">
            <div className="p-2 border rounded">1</div>
            <div className="p-2 border rounded">4</div>
            <div className="p-2 border rounded">0</div>
            <div className="p-2 border rounded">0</div>
            <div className="p-2 border rounded">7</div>
            <div className="p-2 border rounded">1</div>
          </div>
        </div>
      </div>
      <div className="container3 mx-auto px-4 mt-8 border-t pt-4 flex justify-between items-center text-sm">
        <p>
          Copyright © 2024 National Institute of Technology Patna. All Rights
          Reserved.
        </p>
        <div className="flex items-center space-x-4">
          <a href="/Webteam" className="underline">
          Developed & Maintained by WDC NIT Patna
          </a>
          
        </div>
      </div>
    </footer>
  </>
    
  );
};
function LocationIcon(props){
  <svg viewBox="0 0 1024 1024" width="54"
  height="54" class="icon" version="1.1" xmlns="http://www.w3.org/2000/svg" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M309.2 584.776h105.5l-49 153.2H225.8c-7.3 0-13.3-6-13.3-13.3 0-2.6 0.8-5.1 2.2-7.3l83.4-126.7c2.5-3.6 6.7-5.9 11.1-5.9z" fill="#FFFFFF"></path><path d="M404.5 791.276H225.8c-36.7 0-66.5-29.8-66.5-66.5 0-13 3.8-25.7 11-36.6l83.4-126.7c12.3-18.7 33.1-29.9 55.5-29.9h178.4l-83.1 259.7z m-95.3-206.5c-4.5 0-8.6 2.2-11.1 6l-83.4 126.7c-1.4 2.2-2.2 4.7-2.2 7.3 0 7.3 6 13.3 13.3 13.3h139.9l49-153.2H309.2z" fill="#333333"></path><path d="M454.6 584.776h109.6l25.3 153.3H429.3z" fill="#FFFFFF"></path><path d="M652.2 791.276H366.6l42.8-259.6h200l42.8 259.6z m-222.9-53.2h160.2l-25.3-153.3H454.6l-25.3 153.3z" fill="#333333"></path><path d="M618.6 584.776h105.5c4.5 0 8.6 2.2 11.1 6l83.5 126.7c4 6.1 2.3 14.4-3.8 18.4-2.2 1.4-4.7 2.2-7.3 2.2H667.7l-49.1-153.3z" fill="#FFFFFF"></path><path d="M807.6 791.276H628.9l-83.1-259.7h178.4c22.4 0 43.2 11.2 55.5 29.9l83.4 126.7c9.8 14.8 13.2 32.6 9.6 50s-13.7 32.3-28.6 42.1c-10.8 7.2-23.5 11-36.5 11z m-139.9-53.2h139.9c2.6 0 5.1-0.8 7.3-2.2 4-2.6 5.3-6.4 5.7-8.4 0.4-2 0.7-6-1.9-10l-83.4-126.6c-2.5-3.8-6.6-6-11.1-6H618.6l49.1 153.2z" fill="#333333"></path><path d="M534.1 639.7C652.5 537.4 711.7 445.8 711.7 365c0-127-102.7-212.1-195-212.1s-195 85.1-195 212.1c0 80.8 59.2 172.3 177.7 274.7 9.9 8.6 24.7 8.6 34.7 0z" fill="#8CAAFF"></path><path d="M516.7 672.7c-12.5 0-24.9-4.3-34.8-12.9C356.2 551.2 295.1 454.7 295.1 365c0-142.8 114.6-238.7 221.6-238.7S738.3 222.2 738.3 365c0 89.7-61.1 186.2-186.9 294.8-9.8 8.6-22.3 12.9-34.7 12.9z m0-493.2c-79.7 0-168.4 76.2-168.4 185.5 0 72.3 56.7 158 168.4 254.6C628.5 523 685.1 437.3 685.1 365c0-109.3-88.7-185.5-168.4-185.5z" fill="#333333"></path><path d="M516.7 348m-97.5 0a97.5 97.5 0 1 0 195 0 97.5 97.5 0 1 0-195 0Z" fill="#FFFFFF"></path><path d="M516.7 472.1c-68.4 0-124.1-55.7-124.1-124.1s55.7-124.1 124.1-124.1S640.8 279.5 640.8 348 585.1 472.1 516.7 472.1z m0-195.1c-39.1 0-70.9 31.8-70.9 70.9 0 39.1 31.8 70.9 70.9 70.9s70.9-31.8 70.9-70.9c0-39.1-31.8-70.9-70.9-70.9z" fill="#333333"></path></g></svg>
}
function CloudIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z" />
    </svg>
  );
}
function MapIcon(props) {
  return (
    <svg width="44" height="44" viewBox="0 0 1024 1024" class="icon" version="1.1"  fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M786 279l-48-13 48-13 13-48 13 48 49 13-49 13-13 49-13-49zM834 332l-19-4 19-5 4-19 5 19 19 5-19 4-5 19-4-19z" fill="#F0FFFF	"></path><path d="M159 715l-21-5 21-5 5-21 5 21 21 5-21 5-5 21-5-21z" fill="#F0FFFF	"></path><path d="M244 247m-9 0a9 9 0 1 0 18 0 9 9 0 1 0-18 0Z" fill="#5546CB"></path><path d="M288 821l-27-6 27-7 6-27 7 27 27 7-27 6-7 27-6-27z" fill="#F0FFFF	"></path><path d="M832 828a25 25 0 1 1 25-25 25 25 0 0 1-25 25z m0-36a10 10 0 1 0 10 10 10 10 0 0 0-10-10z" fill="#5546CB"></path><path d="M627 502l-10-17 11-7V287l-22 14a95 95 0 0 1 3 24c0 28-19 64-58 108 21 7 34 19 34 34s-31 40-71 40-71-17-71-40 13-27 34-34l-25-30-40 26v180h2l11-7 11 17-17 10h-7v112l216-102V501z m-135 83l-16 10-8 5-8 5h-1l-5-9-5-8 9-5 24-15 10 17z m56-35l-33 20-10-17 33-20 10 17z m56-35l-33 20-10-17 17-10 16-10 10 17zM188 640l204 99V427L188 296z m162-74l32 22-11 16-32-22z m-57-31l4-5 8 6 23 16-11 16-15-11-8-6-8-6z m-42-45a29 29 0 1 1-29 29 29 29 0 0 1 30-29zM648 477l12 6-9 18-3-2v141l217 95V428L648 285z m176 68a29 29 0 1 1-29 29 29 29 0 0 1 29-29z m-72-15l36 19-9 18-36-18z m-69-23l5-10 9 4 9 4 18 9-9 18-27-14-9-4z" fill="#F0FFFF	"></path><path d="M640 256l-41 27a95 95 0 0 0-181 43c0 17 7 38 22 61l-37 24-235-151v392l236 115 233-110 248 108V417z m-202 69a75 75 0 0 1 151 0c0 33-40 81-75 118-62-63-76-99-76-118z m97 124c18 4 29 12 29 18s-20 20-51 20-51-12-51-20 11-14 29-18l15 15 7 7 7-7zM392 739l-204-99V296l204 131z m20 2V630h7l17-10-11-17-11 7h-2V429l40-26 25 30c-21 7-34 19-34 34s31 40 71 40 71-17 71-40-13-27-34-34c39-44 58-80 58-108a95 95 0 0 0-3-24l22-14v190l-11 7 10 17h1v138z m453-6l-217-95V499l3 2 9-18-12-6V285l217 143z" fill="#5546CB"></path><path d="M286 546l8 5 8 6 15 11 12-17-24-16-8-6-4 5-7 12zM371 604l11-16-32-22-11 16 32 22zM481 568l-24 15-9 5 1 1h-1l5 8 5 9v-1l1 1 8-5 9-5h-1l17-11-11-17zM537 534l-33 20 11 17 33-20-10-17h-1zM594 499l-16 10-17 10 10 17 33-20-10-17zM679 515l9 4 27 14 9-17v-1l-18-9-9-4-9-5-5 10-4 8zM779 566l9-18-36-18-9 17v1l36 18z" fill="#5546CB"></path><path d="M824 585a11 11 0 1 0-11-11 11 11 0 0 0 11 11z" fill="#F97744"></path><path d="M824 603a29 29 0 1 0-29-29 29 29 0 0 0 29 29z m0-40a11 11 0 1 1-11 11 11 11 0 0 1 11-11z" fill="#5546CB"></path><path d="M252 530a11 11 0 1 0-11-11 11 11 0 0 0 11 11z" fill="#FFFFFF"></path><path d="M252 548a29 29 0 1 0-29-29 29 29 0 0 0 29 29z m0-40a11 11 0 1 1-11 11 11 11 0 0 1 11-11z" fill="#5546CB"></path><path d="M507 465l-15-15c-18 4-29 12-29 18s20 20 51 20 51-12 51-20-11-14-29-18l-15 15-7 7z" fill="#AFBCF3"></path><path d="M514 444c36-37 75-85 75-118a75 75 0 0 0-151 0c0 18 14 54 76 118z m-35-117a35 35 0 1 1 35 35 35 35 0 0 1-35-35z" fill="#F97744"></path><path d="M514 327m-35 0a35 35 0 1 0 70 0 35 35 0 1 0-70 0Z" fill="#FFFFFF"></path></g></svg>
  );
}
function FacebookIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}

function GlobeIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
      <path d="M2 12h20" />
    </svg>
  );
}

function HeartIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
    </svg>
  );
}

function LinkedinIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

function MailIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="20" height="16" x="2" y="4" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  );
}

function PhoneIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}

function TwitterIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
    </svg>
  );
}

export default Footer;
