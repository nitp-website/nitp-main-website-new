"use client";

import axios from "axios";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import "./styles/Research.css";
import Researchm from "../../assets/images/researchm.svg";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";




const ProjectCard = ({ project, facultyName, sponsor, amount, start, end }) => {
  // Remove leading number and following characters from project name
  const cleanedProjectName = project.replace(/^\d+[\.\)]?\s*/, '');

  return (
    <div className="project-card bg-card rounded-lg p-4 border border-primary shadow-lg hover:shadow-xl transition-shadow duration-300 md:p-6">
      <div className="flex items-center"> 
        <h3 className="text-sm font-medium mt-2 text-primary md:text-sm">{cleanedProjectName}</h3>
      </div>
      <ul className="text-sm text-muted-foreground mt-2 space-y-1">
        {facultyName && <li>Faculty: {facultyName}</li>}
        {sponsor && <li>Sponsor: {sponsor}</li>}
        {amount && <li>Amount: {amount}</li>}
        <li>Duration: {start} - {end}</li>
      </ul>
    </div>
  );
};




// PublicationCard Component
const PublicationCard = ({ type, facultyName, year, authors, citationKey, journalName ,title}) => (
  <div className="project-card bg-card rounded-lg p-4 border border-primary shadow-lg hover:shadow-xl transition-shadow duration-300 md:p-6">
    <div className="flex items-center text-sm">
      {authors},{title},{journalName}.[{year}]
     
    </div>
    
  </div>
);



const extractYear = (publication) => {
  const yearMatch = publication.match(/\b(19|20)\d{2}\b/);
  return yearMatch ? parseInt(yearMatch[0], 10) : null;
};
const fetchFacultyName = async (email) => {
  const response = await fetch(`https://admin.nitp.ac.in/api/faculty/${email}`);
  const data = await response.json();
  return data.profile.name;
};

export default function Research() {
  const [recentJournals, setRecentJournals] = useState([]);
  const [recentProjects, setRecentProjects] = useState([]);
  const [recentPublications, setRecentPublications] = useState([]);
  const[counterOn,setCounterOn]=useState(false);
  const [data, setData] = useState({
    patents: 0,
    books: 0,
    journals: 0,
    conferences: 0,
    articles: 0,
    projectCount: 0,
  });
  
  const fetchPatents = async () => {
    try {
      const publicationsResponse = await axios.get('https://admin.nitp.ac.in/api/publications/all');
      const projectResponse = await axios.get('https://admin.nitp.ac.in/api/project/count');
      
      const publications = publicationsResponse.data;
      const projectCount = projectResponse.data.projectCount;
  
      const publicationCounts = publications.reduce((acc, publication) => {
        publication.publications.forEach((pub) => {
          if (pub.type === 'patent') acc.patents += 1;
          if (pub.type === 'book') acc.books += 1;
          if (pub.type === 'conference') acc.conferences += 1;
          if (pub.type === 'article') acc.articles += 1;
        });
        return acc;
      }, { patents: 0, books: 0, conferences: 0, articles: 0 });
  
      setData({
        ...publicationCounts,
        projectCount: projectCount,
      });
  
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };
  
  useEffect(() => {
    fetchPatents();
  }, []);
  

  useEffect(() => {
    const fetchRecentPublications = async () => {
      try {
        const response = await axios.get("https://admin.nitp.ac.in/api/publications/all");
        const publications = response.data;

        
        publications.sort((a, b) => parseInt(b.year) - parseInt(a.year));

        
        const limitedPublications = publications.slice(0, 25);

        
        const publicationsWithFaculty = await Promise.all(
          limitedPublications.map(async (publication) => {
            const facultyName = await fetchFacultyName(publication.email); // Assuming email is the identifier
            return { ...publication, facultyName };
          })
        );

        setRecentPublications(publicationsWithFaculty);
      } catch (error) {
        console.error("Error fetching recent publications:", error);
      }
    };

    fetchRecentPublications();
  }, []);
  useEffect(() => {
    const fetchRecentProjectsAndJournals = async () => {
      try {
        const projectResponse = await fetch("https://admin.nitp.ac.in/api/project/all");
        const journalResponse = await fetch("https://admin.nitp.ac.in/api/project/all");

        const projects = await projectResponse.json();
        const journals = await journalResponse.json();

        // Limit to 15 projects and journals
        const limitedProjects = projects.slice(0, 15);
        const limitedJournals = journals.slice(0, 15);

        // Fetch faculty names for projects
        const projectsWithFaculty = await Promise.all(
          limitedProjects.map(async (project) => {
            const facultyName = await fetchFacultyName(project.email);
            return { ...project, facultyName };
          })
        );

        setRecentProjects(projectsWithFaculty);
        setRecentJournals(limitedJournals);
      } catch (error) {
        console.error("Error fetching recent projects or journals:", error);
      }
    };


    fetchRecentProjectsAndJournals();
  }, []);

  return (
    <ScrollTrigger onEnter={()=>setCounterOn(true)} onExit={()=>setCounterOn(false)} className="Researchdiv">
    <div className="w-full px-4 py-8 md:px-6 md:py-12 ">
      <div className="flex text-center items-center justify-center mb-8">
        <div className="w-full h-0.5 mr-4 bg-[#a51818]" />
        <svg className="text-primary mr-5" fill="#a51818" height="130px" width="130px"  viewBox="0 0 496 496" stroke="#a51818">
        {/* Paste your SVG code here */}
        <g id="SVGRepo_bgCarrier" stroke-width="0"/>

<g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"/>

<g id="SVGRepo_iconCarrier"> <g> <g> <g> <path d="M407.312,348l14.344-14.344l-11.312-11.312L396,336.688l-15.096-15.096C393.032,299.76,400,274.688,400,248 c0-2.28-0.24-4.496-0.344-6.752C437.248,232.408,464,199.128,464,160h-16c0,30.896-20.624,57.32-49.904,65.192 C387.032,152.184,324.04,96,248,96c-2.28,0-4.496,0.24-6.752,0.344C232.408,58.752,199.128,32,160,32v16 c30.896,0,57.32,20.624,65.192,49.904C152.184,108.968,96,171.96,96,248c0,2.28,0.24,4.496,0.344,6.752 C58.752,263.592,32,296.872,32,336h16c0-30.896,20.624-57.32,49.904-65.192C108.968,343.816,171.96,400,248,400 c26.688,0,51.76-6.968,73.584-19.096L336.68,396l-14.344,14.344l11.312,11.312l14.344-14.344L424.4,483.72 c7.92,7.92,18.456,12.28,29.656,12.28C477.184,496,496,477.184,496,454.064c0-11.2-4.36-21.736-12.28-29.656L407.312,348z M248,112c68.24,0,124.728,50.56,134.384,116.16l-15.768,2.624C358.232,172.76,308.312,128,248,128 c-0.408,0-0.808,0.056-1.216,0.064l-2.64-15.864C245.44,112.16,246.696,112,248,112z M248,144c57.344,0,104,46.656,104,104 s-46.656,104-104,104s-104-46.656-104-104S190.656,144,248,144z M112,248c0-68.24,50.56-124.728,116.16-134.384l2.624,15.768 C172.76,137.768,128,187.688,128,248c0,0.408,0.056,0.808,0.064,1.216l-15.864,2.64C112.16,250.56,112,249.304,112,248z M248,384 c-68.24,0-124.728-50.56-134.384-116.16l15.768-2.624C137.768,323.24,187.688,368,248,368c66.168,0,120-53.832,120-120 c0-0.408-0.056-0.808-0.064-1.216l15.864-2.64c0.04,1.296,0.2,2.552,0.2,3.856C384,322.992,322.992,384,248,384z M335.44,372.128 c14.224-10.048,26.64-22.464,36.688-36.688l12.56,12.56L348,384.688L335.44,372.128z M454.064,480 c-6.928,0-13.448-2.696-18.344-7.592L359.312,396L396,359.312l76.408,76.408c4.896,4.896,7.592,11.416,7.592,18.344 C480,468.368,468.368,480,454.064,480z"/> <path d="M424,144c39.704,0,72-32.296,72-72S463.704,0,424,0c-39.704,0-72,32.296-72,72S384.296,144,424,144z M448,122.52 c-7.288,3.472-15.408,5.48-24,5.48c-8.592,0-16.712-2.008-24-5.48V112c0-13.232,10.768-24,24-24s24,10.768,24,24V122.52z M408,56 c0-8.824,7.176-16,16-16c8.824,0,16,7.176,16,16s-7.176,16-16,16C415.176,72,408,64.824,408,56z M424,16 c30.872,0,56,25.128,56,56c0,15.256-6.152,29.088-16.08,39.2c-0.272-13.448-7.144-25.312-17.568-32.36 C452.288,73.032,456,64.952,456,56c0-17.648-14.352-32-32-32s-32,14.352-32,32c0,8.952,3.712,17.032,9.648,22.84 c-10.432,7.056-17.304,18.912-17.568,32.36C374.152,101.088,368,87.256,368,72C368,41.128,393.128,16,424,16z"/> <path d="M72,144c39.704,0,72-32.296,72-72S111.704,0,72,0S0,32.296,0,72S32.296,144,72,144z M96,122.52 c-7.288,3.472-15.408,5.48-24,5.48s-16.712-2.008-24-5.48V112c0-13.232,10.768-24,24-24s24,10.768,24,24V122.52z M56,56 c0-8.824,7.176-16,16-16s16,7.176,16,16s-7.176,16-16,16S56,64.824,56,56z M72,16c30.872,0,56,25.128,56,56 c0,15.256-6.152,29.088-16.08,39.2c-0.272-13.448-7.144-25.312-17.568-32.36C100.288,73.032,104,64.952,104,56 c0-17.648-14.352-32-32-32S40,38.352,40,56c0,8.952,3.712,17.032,9.648,22.84C39.224,85.896,32.352,97.752,32.08,111.2 C22.152,101.088,16,87.256,16,72C16,41.128,41.128,16,72,16z"/> <path d="M72,352c-39.704,0-72,32.296-72,72c0,39.704,32.296,72,72,72s72-32.296,72-72C144,384.296,111.704,352,72,352z M96,474.52c-7.288,3.472-15.408,5.48-24,5.48s-16.712-2.008-24-5.48V464c0-13.232,10.768-24,24-24s24,10.768,24,24V474.52z M56,408c0-8.824,7.176-16,16-16s16,7.176,16,16c0,8.824-7.176,16-16,16S56,416.824,56,408z M111.92,463.2 c-0.272-13.448-7.144-25.312-17.568-32.36C100.288,425.032,104,416.952,104,408c0-17.648-14.352-32-32-32s-32,14.352-32,32 c0,8.952,3.712,17.032,9.648,22.84c-10.424,7.056-17.296,18.912-17.568,32.36C22.152,453.088,16,439.256,16,424 c0-30.872,25.128-56,56-56s56,25.128,56,56C128,439.256,121.848,453.088,111.92,463.2z"/> <path d="M160,232v40v8v8h176v-8v-8v-72h-48v72h-16V168h-48v104h-16v-40H160z M304,216h16v56h-16V216z M240,184h16v88h-16V184z M192,272h-16v-24h16V272z"/> </g> </g> </g> </g>
      </svg>
        <h2 className="text-3xl font-bold text-primary">RESEARCH HIGHLIGHTS</h2>
        <svg className=" text-primary ml-5" fill="#a51818" height="130px" width="130px"  viewBox="0 0 496 496" stroke="#a51818">
        {/* Paste your SVG code here */}
        <g id="SVGRepo_bgCarrier" stroke-width="0"/>

<g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"/>

<g id="SVGRepo_iconCarrier"> <g> <g> <g> <path d="M407.312,348l14.344-14.344l-11.312-11.312L396,336.688l-15.096-15.096C393.032,299.76,400,274.688,400,248 c0-2.28-0.24-4.496-0.344-6.752C437.248,232.408,464,199.128,464,160h-16c0,30.896-20.624,57.32-49.904,65.192 C387.032,152.184,324.04,96,248,96c-2.28,0-4.496,0.24-6.752,0.344C232.408,58.752,199.128,32,160,32v16 c30.896,0,57.32,20.624,65.192,49.904C152.184,108.968,96,171.96,96,248c0,2.28,0.24,4.496,0.344,6.752 C58.752,263.592,32,296.872,32,336h16c0-30.896,20.624-57.32,49.904-65.192C108.968,343.816,171.96,400,248,400 c26.688,0,51.76-6.968,73.584-19.096L336.68,396l-14.344,14.344l11.312,11.312l14.344-14.344L424.4,483.72 c7.92,7.92,18.456,12.28,29.656,12.28C477.184,496,496,477.184,496,454.064c0-11.2-4.36-21.736-12.28-29.656L407.312,348z M248,112c68.24,0,124.728,50.56,134.384,116.16l-15.768,2.624C358.232,172.76,308.312,128,248,128 c-0.408,0-0.808,0.056-1.216,0.064l-2.64-15.864C245.44,112.16,246.696,112,248,112z M248,144c57.344,0,104,46.656,104,104 s-46.656,104-104,104s-104-46.656-104-104S190.656,144,248,144z M112,248c0-68.24,50.56-124.728,116.16-134.384l2.624,15.768 C172.76,137.768,128,187.688,128,248c0,0.408,0.056,0.808,0.064,1.216l-15.864,2.64C112.16,250.56,112,249.304,112,248z M248,384 c-68.24,0-124.728-50.56-134.384-116.16l15.768-2.624C137.768,323.24,187.688,368,248,368c66.168,0,120-53.832,120-120 c0-0.408-0.056-0.808-0.064-1.216l15.864-2.64c0.04,1.296,0.2,2.552,0.2,3.856C384,322.992,322.992,384,248,384z M335.44,372.128 c14.224-10.048,26.64-22.464,36.688-36.688l12.56,12.56L348,384.688L335.44,372.128z M454.064,480 c-6.928,0-13.448-2.696-18.344-7.592L359.312,396L396,359.312l76.408,76.408c4.896,4.896,7.592,11.416,7.592,18.344 C480,468.368,468.368,480,454.064,480z"/> <path d="M424,144c39.704,0,72-32.296,72-72S463.704,0,424,0c-39.704,0-72,32.296-72,72S384.296,144,424,144z M448,122.52 c-7.288,3.472-15.408,5.48-24,5.48c-8.592,0-16.712-2.008-24-5.48V112c0-13.232,10.768-24,24-24s24,10.768,24,24V122.52z M408,56 c0-8.824,7.176-16,16-16c8.824,0,16,7.176,16,16s-7.176,16-16,16C415.176,72,408,64.824,408,56z M424,16 c30.872,0,56,25.128,56,56c0,15.256-6.152,29.088-16.08,39.2c-0.272-13.448-7.144-25.312-17.568-32.36 C452.288,73.032,456,64.952,456,56c0-17.648-14.352-32-32-32s-32,14.352-32,32c0,8.952,3.712,17.032,9.648,22.84 c-10.432,7.056-17.304,18.912-17.568,32.36C374.152,101.088,368,87.256,368,72C368,41.128,393.128,16,424,16z"/> <path d="M72,144c39.704,0,72-32.296,72-72S111.704,0,72,0S0,32.296,0,72S32.296,144,72,144z M96,122.52 c-7.288,3.472-15.408,5.48-24,5.48s-16.712-2.008-24-5.48V112c0-13.232,10.768-24,24-24s24,10.768,24,24V122.52z M56,56 c0-8.824,7.176-16,16-16s16,7.176,16,16s-7.176,16-16,16S56,64.824,56,56z M72,16c30.872,0,56,25.128,56,56 c0,15.256-6.152,29.088-16.08,39.2c-0.272-13.448-7.144-25.312-17.568-32.36C100.288,73.032,104,64.952,104,56 c0-17.648-14.352-32-32-32S40,38.352,40,56c0,8.952,3.712,17.032,9.648,22.84C39.224,85.896,32.352,97.752,32.08,111.2 C22.152,101.088,16,87.256,16,72C16,41.128,41.128,16,72,16z"/> <path d="M72,352c-39.704,0-72,32.296-72,72c0,39.704,32.296,72,72,72s72-32.296,72-72C144,384.296,111.704,352,72,352z M96,474.52c-7.288,3.472-15.408,5.48-24,5.48s-16.712-2.008-24-5.48V464c0-13.232,10.768-24,24-24s24,10.768,24,24V474.52z M56,408c0-8.824,7.176-16,16-16s16,7.176,16,16c0,8.824-7.176,16-16,16S56,416.824,56,408z M111.92,463.2 c-0.272-13.448-7.144-25.312-17.568-32.36C100.288,425.032,104,416.952,104,408c0-17.648-14.352-32-32-32s-32,14.352-32,32 c0,8.952,3.712,17.032,9.648,22.84c-10.424,7.056-17.296,18.912-17.568,32.36C22.152,453.088,16,439.256,16,424 c0-30.872,25.128-56,56-56s56,25.128,56,56C128,439.256,121.848,453.088,111.92,463.2z"/> <path d="M160,232v40v8v8h176v-8v-8v-72h-48v72h-16V168h-48v104h-16v-40H160z M304,216h16v56h-16V216z M240,184h16v88h-16V184z M192,272h-16v-24h16V272z"/> </g> </g> </g> </g>
      </svg>
        <div className="w-full h-0.5 bg-[#a51818] ml-4" />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-5 gap-4 mb-8">
      <div className="bg-card rounded-lg p-4 flex flex-col items-center justify-center border border-primary shadow-lg hover:shadow-xl transition-shadow duration-300 md:p-6">
        <ActivityIcon className="w-6 h-6 text-primary md:w-8 md:h-8" />
        <h3 className="text-sm font-medium mt-2 text-primary md:text-lg">Patents</h3>
        <span className="text-2xl font-bold text-primary md:text-4xl">
          {counterOn && <CountUp end={data.patents} duration={5} delay={1}/>}
        </span>
      </div>
      
      <div className="bg-card rounded-lg p-4 flex flex-col items-center justify-center border border-primary shadow-lg hover:shadow-xl transition-shadow duration-300 md:p-6">
        <ClipboardIcon className="w-6 h-6 text-primary md:w-8 md:h-8" />
        <h3 className="text-sm font-medium mt-2 text-primary md:text-lg">Books</h3>
        <span className="text-2xl font-bold text-primary md:text-4xl">
          {counterOn && <CountUp end={data.books} duration={5} delay={1}/>}
        </span>
      </div>
      
      <div className="bg-card rounded-lg p-4 flex flex-col items-center justify-center border border-primary shadow-lg hover:shadow-xl transition-shadow duration-300 md:p-6">
        <BriefcaseIcon className="w-6 h-6 text-primary md:w-8 md:h-8" />
        <h3 className="text-sm font-medium mt-2 text-primary md:text-lg">Projects</h3>
        <span className="text-2xl font-bold text-primary md:text-4xl">
          {counterOn && <CountUp end={data.projectCount} duration={5} delay={1}/>}
        </span>
      </div>
      
      <div className="bg-card rounded-lg p-4 flex flex-col items-center justify-center border border-primary shadow-lg hover:shadow-xl transition-shadow duration-300 md:p-6">
        <UsersIcon className="w-6 h-6 text-primary md:w-8 md:h-8" />
        <h3 className="text-sm font-medium mt-2 text-primary md:text-lg">Article</h3>
        <span className="text-2xl font-bold text-primary md:text-4xl">
          {counterOn && <CountUp start={0} end={data.articles} duration={5} delay={1}/>}
        </span>
      </div>
      
      <div className="bg-card rounded-lg p-4 flex flex-col items-center justify-center border border-primary shadow-lg hover:shadow-xl transition-shadow duration-300 md:p-6">
        <CpuIcon className="w-6 h-6 text-primary md:w-8 md:h-8" />
        <h3 className="text-sm font-medium mt-2 text-primary md:text-lg">Conference</h3>
        <span className="text-2xl font-bold text-primary md:text-4xl">
          {counterOn && <CountUp start={0} end={data.conferences} duration={5} delay={1}/>}
        </span>
      </div>
    </div>

      <div className=" grid grid-cols-1 md:grid-cols-2 gap-8 container1p">
        <div className=" border border-primary shadow-lg hover:shadow-xl transition-shadow duration-300 rounded-lg sectionp">
          <div className="flex items-center mb-4 p-7 section-headerp">
            
            <div className="w-8 h-0.5 bg-primary mr-4" />
            <h3 className="text-lg font-medium text-primary">Recent Publication</h3>
            <div className="w-8 h-0.5 bg-primary ml-4" />
            
          </div>
          <div className="p-4">
            <ul className="space-y-4">
            {recentPublications.length === 0 ? (
          <div className="flex justify-center items-center h-52 ">
          <svg
            version="1.1"
            id="L1"
            height="100px"
            width="100px"
            x="0px"
            y="0px"
            viewBox="0 0 100 100"
            enable-background="new 0 0 100 100"
          >
            <circle
              fill="none"
              stroke="#f87171"
              stroke-width="6"
              stroke-miterlimit="15"
              stroke-dasharray="14.2472,14.2472"
              cx="50"
              cy="50"
              r="47"
            >
              <animateTransform
                attributeName="transform"
                attributeType="XML"
                type="rotate"
                dur="5s"
                from="0 50 50"
                to="360 50 50"
                repeatCount="indefinite"
              />
            </circle>
            <circle
              fill="none"
              stroke="#f87171"
              stroke-width="1"
              stroke-miterlimit="10"
              stroke-dasharray="10,10"
              cx="50"
              cy="50"
              r="39"
            >
              <animateTransform
                attributeName="transform"
                attributeType="XML"
                type="rotate"
                dur="5s"
                from="0 50 50"
                to="-360 50 50"
                repeatCount="indefinite"
              />
            </circle>
            <g fill="#f87171">
              <rect x="30" y="35" width="5" height="30">
                <animateTransform
                  attributeName="transform"
                  dur="1s"
                  type="translate"
                  values="0 5 ; 0 -5; 0 5"
                  repeatCount="indefinite"
                  begin="0.1"
                />
              </rect>
              <rect x="40" y="35" width="5" height="30">
                <animateTransform
                  attributeName="transform"
                  dur="1s"
                  type="translate"
                  values="0 5 ; 0 -5; 0 5"
                  repeatCount="indefinite"
                  begin="0.2"
                />
              </rect>
              <rect x="50" y="35" width="5" height="30">
                <animateTransform
                  attributeName="transform"
                  dur="1s"
                  type="translate"
                  values="0 5 ; 0 -5; 0 5"
                  repeatCount="indefinite"
                  begin="0.3"
                />
              </rect>
              <rect x="60" y="35" width="5" height="30">
                <animateTransform
                  attributeName="transform"
                  dur="1s"
                  type="translate"
                  values="0 5 ; 0 -5; 0 5"
                  repeatCount="indefinite"
                  begin="0.4"
                />
              </rect>
              <rect x="70" y="35" width="5" height="30">
                <animateTransform
                  attributeName="transform"
                  dur="1s"
                  type="translate"
                  values="0 5 ; 0 -5; 0 5"
                  repeatCount="indefinite"
                  begin="0.5"
                />
              </rect>
            </g>
          </svg>
        </div>
        ) : (
          recentPublications.map((publication) => (
            <PublicationCard
              key={publication.publication_id}
              type={publication.publications[0].type} // Assuming type is the same for all publications
              facultyName= {publication.facultyName}// You need to fetch this based on publication email
              year={publication.publications[0].year}
              authors={publication.publications[0].authors}
              citationKey={publication.publications[0].citation_key}
              journalName={publication.publications[0].journal_name}
              title={publication.publications[0].title}
            />
          ))
        )}
            </ul>
          </div>
        </div>
        <div className="border border-primary shadow-lg hover:shadow-xl transition-shadow duration-300 rounded-lg sectionp">
        <div className="flex items-center mb-4 p-7 section-headerp">
            
            <div className="w-auto h-0.5 bg-primary mr-4" />
            <h3 className="text-lg font-medium text-primary">Recent Projects</h3>
            <div className="w-auto h-0.5 bg-primary ml-4" />
            
          </div>
        <ul className="section-contentp">
          
          {recentProjects.length === 0 ? (
            <div className="flex justify-center items-center h-52 ">
            <svg
              version="1.1"
              id="L1"
              height="100px"
              width="100px"
              x="0px"
              y="0px"
              viewBox="0 0 100 100"
              enable-background="new 0 0 100 100"
            >
              <circle
                fill="none"
                stroke="#f87171"
                stroke-width="6"
                stroke-miterlimit="15"
                stroke-dasharray="14.2472,14.2472"
                cx="50"
                cy="50"
                r="47"
              >
                <animateTransform
                  attributeName="transform"
                  attributeType="XML"
                  type="rotate"
                  dur="5s"
                  from="0 50 50"
                  to="360 50 50"
                  repeatCount="indefinite"
                />
              </circle>
              <circle
                fill="none"
                stroke="#f87171"
                stroke-width="1"
                stroke-miterlimit="10"
                stroke-dasharray="10,10"
                cx="50"
                cy="50"
                r="39"
              >
                <animateTransform
                  attributeName="transform"
                  attributeType="XML"
                  type="rotate"
                  dur="5s"
                  from="0 50 50"
                  to="-360 50 50"
                  repeatCount="indefinite"
                />
              </circle>
              <g fill="#f87171">
                <rect x="30" y="35" width="5" height="30">
                  <animateTransform
                    attributeName="transform"
                    dur="1s"
                    type="translate"
                    values="0 5 ; 0 -5; 0 5"
                    repeatCount="indefinite"
                    begin="0.1"
                  />
                </rect>
                <rect x="40" y="35" width="5" height="30">
                  <animateTransform
                    attributeName="transform"
                    dur="1s"
                    type="translate"
                    values="0 5 ; 0 -5; 0 5"
                    repeatCount="indefinite"
                    begin="0.2"
                  />
                </rect>
                <rect x="50" y="35" width="5" height="30">
                  <animateTransform
                    attributeName="transform"
                    dur="1s"
                    type="translate"
                    values="0 5 ; 0 -5; 0 5"
                    repeatCount="indefinite"
                    begin="0.3"
                  />
                </rect>
                <rect x="60" y="35" width="5" height="30">
                  <animateTransform
                    attributeName="transform"
                    dur="1s"
                    type="translate"
                    values="0 5 ; 0 -5; 0 5"
                    repeatCount="indefinite"
                    begin="0.4"
                  />
                </rect>
                <rect x="70" y="35" width="5" height="30">
                  <animateTransform
                    attributeName="transform"
                    dur="1s"
                    type="translate"
                    values="0 5 ; 0 -5; 0 5"
                    repeatCount="indefinite"
                    begin="0.5"
                  />
                </rect>
              </g>
            </svg>
          </div>
          ) : (
            recentProjects.map(project => (
              <ProjectCard
              key={project.id}
              project={project.project}
              facultyName={project.facultyName}
              sponsor={project.sponsor}
              amount={project.amount}
              start={project.start}
              end={project.end}
            />
            ))
          )}
        </ul>
      </div>
      </div>
      
      
      
    </div>
    </ScrollTrigger>
  );
}


function ActivityIcon(props) {
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
      <path d="M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2" />
    </svg>
  )
}


function ArrowLeftIcon(props) {
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
      <path d="m12 19-7-7 7-7" />
      <path d="M19 12H5" />
    </svg>
  )
}


function ArrowRightIcon(props) {
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
      <path d="M5 12h14" />
      <path d="m12 5 7 7-7 7" />
    </svg>
  )
}


function BriefcaseIcon(props) {
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
      <path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
      <rect width="20" height="14" x="2" y="6" rx="2" />
    </svg>
  )
}



function ClipboardIcon(props) {
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
      <rect width="8" height="4" x="8" y="2" rx="1" ry="1" />
      <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
    </svg>
  )
}


function CpuIcon(props) {
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
      <rect width="16" height="16" x="4" y="4" rx="2" />
      <rect width="6" height="6" x="9" y="9" rx="1" />
      <path d="M15 2v2" />
      <path d="M15 20v2" />
      <path d="M2 15h2" />
      <path d="M2 9h2" />
      <path d="M20 15h2" />
      <path d="M20 9h2" />
      <path d="M9 2v2" />
      <path d="M9 20v2" />
    </svg>
  )
}


function FileIcon(props) {
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
      <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" />
      <path d="M14 2v4a2 2 0 0 0 2 2h4" />
    </svg>
  )
}


function UsersIcon(props) {
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
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  )
}


