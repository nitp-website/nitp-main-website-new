"use client";

import { useState, useEffect } from 'react';
import { useSearchParams, usePathname, useRouter } from 'next/navigation';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faUserGraduate,
  faGlobe,
  faBoxArchive,
  faIndianRupeeSign,
} from '@fortawesome/free-solid-svg-icons';
import BTechAdmissionPage from './BTechAdmissionPage';
import MTechAdmissionPage from './MTechAdmissionPage';
import PhDAdmissionPage from './PhDAdmissionPage';
import MCAAdmissionPage from './MCAAdmissionPage';
import SIIAdmissionPage from './SIIAdmissionPage';


import './style.css';

export default function InstitutePage() {
  const searchParams = useSearchParams();
  const router = useRouter();

  // Default to BTech if no tab is specified
  const initialTab = searchParams.get("tab") || "BTech";
  const [activeTab, setActiveTab] = useState(initialTab);

  // Update active tab when URL changes
  useEffect(() => {
    const tab = searchParams.get("tab");
    if (tab) {
      setActiveTab(tab);
    }
  }, [searchParams]);

  // Handle program tab navigation
  const handleTabNavigation = (tabName) => {
    setActiveTab(tabName);

    // Update URL with query parameter
    const url = new URL(window.location.href);
    url.searchParams.set("tab", tabName);
    window.history.pushState({}, "", url.toString());
  };

  const programTabs = [
    { name: "BTech", label: "B.Tech", icon: faUserGraduate },
    { name: "MTech", label: "M.Tech", icon: faUserGraduate },
    { name: "PhD", label: "PhD", icon: faUserGraduate },
    { name: "MCA", label: "MCA", icon: faUserGraduate },
    { name: "SII", label: "SII", icon: faGlobe },
  ];

  const renderContent = () => {
    switch (activeTab) {
      case "BTech":
        return <BTechAdmissionPage />;
      case "MTech":
        return <MTechAdmissionPage />;
      case "PhD":
        return <PhDAdmissionPage />;
      case "MCA":
        return <MCAAdmissionPage />;
      case "SII":
        return <SIIAdmissionPage />;
      default:
        return <BTechAdmissionPage />;
    }
  };


  return (
    <div className="bg-white bg-opacity-70">
      <div className="mt-2 mb-5">
        <h1 className="text-red-700 text-center text-3xl font-bold py-2 uppercase">Admission</h1>
      </div>

      {/* Program level tabs */}
      <header className="px-4 lg:px-5 flex items-center justify-between mb-5">
        <div className="flex items-center justify-between w-full">
          <div className="flex flex-wrap items-center gap-8 sm:gap-4 justify-center w-full"> 
            {programTabs.map((tab) => (
              <div
                key={tab.name}
                className={`cardacad cardacad1 ${activeTab === tab.name ? "active" : ""}`}
                onClick={() => handleTabNavigation(tab.name)}
                style={{
                  backgroundColor: activeTab === tab.name ? "white" : "initial",
                  cursor: "pointer",
                  padding: "10px 20px",
                  borderRadius: "8px",
                  boxShadow: activeTab === tab.name ? "0 0 10px rgba(0,0,0,0.15)" : "none",
                }}
              >
                <FontAwesomeIcon icon={tab.icon} size="xl" color="#d62a39" />
                <p className="heading sm:text-base">{tab.label}</p>
              </div>
            ))}
          </div>
        </div>
      </header>

      {/* Content area for selected program */}
      <div className="mt-10">
        {renderContent()}
      </div>
    </div>
  );
}
