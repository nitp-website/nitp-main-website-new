"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import "./styles/Footer.css";
import { Calendar, MapPin, Download, ExternalLink, CloudIcon, HeartIcon, TwitterIcon, LinkedinIcon, FacebookIcon, GlobeIcon, MailIcon, PhoneIcon } from 'lucide-react';

const Footer = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [pollutionData, setPollutionData] = useState(null);
  const [currentDateTime, setCurrentDateTime] = useState(new Date());

  const fetchWeatherData = async () => {
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/forecast?lat=25.5941&lon=85.1376&appid=da63ce5f202fc08ca2f84ddf36e4c303`
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
        `https://api.openweathermap.org/data/2.5/air_pollution?lat=25.5941&lon=85.1376&appid=da63ce5f202fc08ca2f84ddf36e4c303`
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
    <footer className="bg-[#421010] text-white py-12 z-[100]">
      <div className="mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Institute Info */}
          <div className="lg:col-span-1 flex justify-center lg:justify-start">
            <div className="flex flex-col items-center text-center md:items-center lg:items-center">
              <img
                src="https://i.postimg.cc/k5CYZwwS/logo.png"
                alt="NIT Patna Logo"
                className="w-24 h-24 mb-4"
              />
              <div className="space-y-2">
                <p className="font-medium text-center">National Institute of Technology Patna</p>
                <p className="text-sm text-gray-300 text-center">Ashok Rajpath, Mahendru, Patna, Bihar 800005</p>
                <div className="space-y-1 mt-4 pl-[75px]">
                  <p className="flex items-center gap-2 text-sm">
                    <PhoneIcon className="w-4 h-4" /> 0612-2371715
                  </p>
                  <p className="flex items-center gap-2 text-sm">
                    <MailIcon className="w-4 h-4" /> info@nitp.ac.in
                  </p>
                  <p className="flex items-center gap-2 text-sm">
                    <GlobeIcon className="w-4 h-4" /> www.nitp.ac.in
                  </p>
                </div>
                <div className="flex justify-center space-x-4 mt-4">
                  <a href="https://twitter.com/NITPatna1" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300">
                    <TwitterIcon className="w-5 h-5" />
                  </a>
                  <a href="https://www.linkedin.com/company/nit-patna" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300">
                    <LinkedinIcon className="w-5 h-5" />
                  </a>
                  <a href="https://www.facebook.com/NITPatna" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300">
                    <FacebookIcon className="w-5 h-5" />
                  </a>
                  <a href="https://goo.gl/maps/srZ6whpfDGqg85sp6" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300">
                    <MapPin className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-1">
            <h3 className="text-lg font-semibold mb-4 border-b border-[#a51818] pb-2">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/Department" className="hover:text-gray-300">Departments</Link></li>
              <li><Link href="/Others/NIRF" className="hover:text-gray-300">NIRF</Link></li>
              <li><Link href="/Others/NewCampus" className="hover:text-gray-300">New Campus</Link></li>
              <li><Link href="/Others/RTI" className="hover:text-gray-300">RTI</Link></li>
              <li><Link href="/Institute/Magazine" className="hover:text-gray-300">Magazine(Vol.4)</Link></li>
            </ul>
          </div>

          {/* Explore */}
          <div className="lg:col-span-1">
            <h3 className="text-lg font-semibold mb-4 border-b border-[#a51818] pb-2">Explore</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/Institute?tab=campus" className="hover:text-gray-300">Campus</Link></li>
              <li><Link href="/Others/BOG" className="hover:text-gray-300">BOG/FC/BWC Minutes</Link></li>
              <li><Link href="/Others/Convocation/" className="hover:text-gray-300">Convocation 2023</Link></li>
              <li><Link href="/Others/Senate" className="hover:text-gray-300">Senate Minutes</Link></li>
              <li><Link href="/Facilities/SCST" className="hover:text-gray-300">SC/ST Grievance Cell</Link></li>
              <li><Link href="#" className="hover:text-gray-300">Climate Action Plan</Link></li>
            </ul>
          </div>

          {/* Useful Links */}
          <div className="lg:col-span-1">
            <h3 className="text-lg font-semibold mb-4 border-b border-[#a51818] pb-2">Useful Links</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="https://www.google.com/maps" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300">How to Reach</a></li>
              <li><Link href="/Others/Report" className="hover:text-gray-300">Annual Reports</Link></li>
              <li><Link href="/Student/NSS" className="hover:text-gray-300">National Service Scheme</Link></li>
              <li><Link href="/Others/Tenders" className="hover:text-gray-300">Tenders</Link></li>
              <li><a href="https://drive.google.com/file/d/1tVgQSygS8GRTZIglbVWVClasegdd6BCi/view" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300">Academic Calendar</a></li>
              <li><Link href="/Others/Terms" className="hover:text-gray-300">Terms of Use</Link></li>
            </ul>
          </div>

          {/* Weather Info */}
          <div className="lg:col-span-1">
            <h3 className="text-lg font-semibold mb-4 border-b border-[#a51818] pb-2">
              <MapPin className="inline-block w-5 h-5 mr-2" />Patna
            </h3>
            {weatherData && weatherData.list && weatherData.list.length > 0 ? (
              <div className="space-y-2 text-sm">
                <p>{formatDate(currentDateTime)}</p>
                <p className="flex items-center gap-2">
                  <CloudIcon className="w-4 h-4" />
                  {weatherData.list[0].weather[0].description}
                </p>
                <p>Temp: {(weatherData.list[0].main.temp - 273.15).toFixed(2)}°C</p>
                <p>Humidity: {weatherData.list[0].main.humidity}%</p>
                <p>Wind: {weatherData.list[0].wind.speed} km/h</p>
              </div>
            ) : (
              <p className="text-sm">Loading weather data...</p>
            )}

            {pollutionData && pollutionData.list && pollutionData.list.length > 0 && (
              <div className="mt-4 p-3 bg-[#4d1616] rounded-lg">
                <p className="text-sm flex items-center gap-2">
                  Air Quality (PM2.5): 
                  <span className="text-green-400">{pollutionData.list[0].components.pm2_5}</span>
                  <HeartIcon className="w-4 h-4 text-green-400" />
                </p>
                <p className="text-xs text-gray-400 mt-1">Source: OpenWeather</p>
              </div>
            )}

            <div className="mt-4">
              <h4 className="font-medium mb-2">Visitors:</h4>
              <div className="flex gap-2">
                {[1, 4, 0, 0, 7, 1].map((num, idx) => (
                  <div key={idx} className="w-8 h-8 flex items-center justify-center border border-[#a51818] rounded">
                    {num}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-12 pt-4 border-t border-[#a51818]">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-gray-300">Copyright © 2024 National Institute of Technology Patna. All Rights Reserved.</p>
            <Link href="/Webteam" className="text-sm text-gray-300 hover:text-white underline">
              Developed & Maintained by WDC NIT Patna
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
