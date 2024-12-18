/** @format */
"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import Link from "next/link";
import { IoIosArrowDown, IoIosArrowDropright } from "react-icons/io";
import { useAutoAnimate } from "@formkit/auto-animate/react";
import "./styles/Navbar.css";
import logo from "../../assets/images/logo.png";
import About from "../../assets/images/about.svg";
import Value from "../../assets/images/value.svg";
import Mission from "../../assets/images/mission.svg";
import Home from "../../assets/images/home.svg";
import Campus from "../../assets/images/campus.svg";
import Resource from "../../assets/images/resource.svg";
import Director from "../../assets/images/director.svg";
import Person from "../../assets/images/person.svg";
import President from "../../assets/images/president.svg";
import Sperson from "../../assets/images/sperson.svg";
import FirstYear from "../../assets/images/1styear.svg";
import Admin from "../../assets/images/admin.svg";
import Admission from "../../assets/images/admission.svg";
import Bis from "../../assets/images/bis.svg";
import Calendar from "../../assets/images/calendar.svg";
import Chankaya from "../../assets/images/chankaya.svg";
import Clubs from "../../assets/images/clubs.svg";
import Department from "../../assets/images/department.svg";
import Digital from "../../assets/images/digital.svg";
import Document from "../../assets/images/document.svg";
import Ecell from "../../assets/images/Ecell.svg";
import Excellence from "../../assets/images/excellence.svg";
import Faculty from "../../assets/images/faculty.svg";
import Fee from "../../assets/images/fee.svg";
import Fest from "../../assets/images/fest.svg";
import Forms from "../../assets/images/forms.svg";
import Idcard from "../../assets/images/idcard.svg";
import International from "../../assets/images/international.svg";
import Jobs from "../../assets/images/jobs.svg";
import Mail from "../../assets/images/mail.svg";
import Notice from "../../assets/images/notice.svg";
import Bharat from "../../assets/images/bharat.svg"
import NssNew from "../../assets/images/nssnew.svg";
import Officers from "../../assets/images/officers.svg";
import Portal from "../../assets/images/portal.svg";
import Programs from "../../assets/images/programs.svg";
import Rules from "../../assets/images/rules.svg";
import Sac from "../../assets/images/sac.svg";
import Schlorship from "../../assets/images/schlorship.svg";
import Sports from "../../assets/images/sports.svg";
import Staffs from "../../assets/images/staffs.svg";
import Structure from "../../assets/images/structure.svg";
import Studentexchange from "../../assets/images/studentexchange.svg";
import women from "../../assets/images/women.svg";
import Tequip from "../../assets/images/Tequip.svg";
import scst from "../../assets/images/scst.svg"
import security from "../../assets/images/security.svg";
import Library from "../../assets/images/Library.svg";
import Hostel from "../../assets/images/hostel.svg";
import Labs from "../../assets/images/Labs.svg";
import Bank from "../../assets/images/bank.svg";
import Hospital from "../../assets/images/Hospital.svg";
import EMU from "../../assets/images/EMU.svg";
import ESU from "../../assets/images/ESU.svg";
import ComputerCentre from "../../assets/images/ComputerCentre.svg"
import itservice from "../../assets/images/itservice.svg"
import cse from "../../assets/images/cse.svg"
import ece from "../../assets/images/ECE.svg"
import ee from "../../assets/images/ee.svg"
import archi from "../../assets/images/archi.svg"
import chem from "../../assets/images/chem.svg"
import civil from "../../assets/images/civil.svg"
import hss from "../../assets/images/hss.svg"
import math from "../../assets/images/math.svg"
import mech from "../../assets/images/mech.svg"
import physics from "../../assets/images/physics.svg"



import useNavigationEvent from "./useNavigationEvent"
import { FiMenu } from "react-icons/fi";
import { AiOutlineClose } from "react-icons/ai";


//List of all nav items

const navItems = [
  {
    label: <Image src={Home} alt="Home" width={20} height={20} />,
    link: "/",
  },

  {
    label: "Institute",
    link: "#",
    mlabel: "Institute",
    children: [
      {
        label: "About",
        link: "#",
        iconImage: About,
        children: [
          {
            label: "About Institute",
            link: "/Institute/?tab=about",
            iconImage: Mission,
          },
          {
            label: " Vision Mission",
            link: "/Institute/?tab=mission",
            iconImage: Value,
          },
          {
            label: "Infrastructure",
            link: "/Institute/?tab=campus",
            iconImage: Campus,
          },
          
        ],
      },
      {
        label: "NIT Status & Acts",
        link: "/Others/NITAct",
        iconImage: Structure,
      },
      {
        label: "Reports",
        link: "#",
        iconImage: Resource,
        children: [
          {
            label: "Annual Reports",
            link: "/Others/Report",
            iconImage: Calendar,
          },
          {
            label: "Data of NIRF Data",
            link: "/Others/NIRF",
            iconImage: Document,
          },
          
          // {
          //   label: "Data of ARIIA",
          //   link: "/Others/UpdatedSoon",
          //   iconImage: Notice,
          // },
        ],
      },
      {
        
          label: "Magazine",
          link: "/Institute/Magazine",
          iconImage: Digital,
        
      },
      {
        label: "PAN/GST",
        link:"https://drive.google.com/file/d/1Njk4q-iZudKaNHgZ7eYprCfaFKd1BroC/view?usp=sharing",
        iconImage:Resource
      },
    ],
  },
  {
    label: "Administration",
    link: "#",
    mlabel: "Administration",
    children: [
      {
        label: "Visitor",
        link: "/Administration/Visitor",
        iconImage: President,
      },
      {
        label: " NITs Councils",
        link: "/Administration/CONIT",
        iconImage: Person,
      },
      {
        label: "Board of Governors",
        link: "/Administration/BOG",
        iconImage: Person,
      },
      {
        label: "Senate",
        link: "/Administration/Senate",
        iconImage: Person,
      },

      {
        label: "Director",
        link: "/Institute/Director",
        iconImage: Director,
      },
      {
        label: "Registrar",
        link: "/Administration/Registrar",
        iconImage: Sperson,
      },
      {
        label: "Deans",
        link: "/Administration/Deans",
        iconImage: Person,
      },
      {
        label: "HoD",
        link: "/Administration/HOD",
        iconImage: Person,
      },
      {
        label: "Chief Vigilance Officer",
        link: "/Administration/CVO",
        iconImage: Person,
      },
      {
        label: "Service Unit Heads ",
        link: "/Administration/SUH",
        iconImage: Person,
      },
      {
        label: "Finance Committee",
        link: "/Administration/FinanceCommittee",
        iconImage: Person,
      },
      {
        label: "Building Work Committee ",
        link: "/Administration/BWC",
        iconImage: Person,
      },
      // {
      //   label: "Institute Functionaries",
      //   link: "/Administration/IDC",
      //   iconImage: Person,
      // },
      {
        label: "Committees",
        link: "#",
        iconImage: Person,
        children: [
          
          {
            label: "Institute Disciplinary Committee",
            link: "/Administration/IDC",
            iconImage: Person,
          },

          // {
          //   label: "Proctorial Board",
          //   link: "/Administration/PB",
          //   iconImage: Sperson,
          // },
        ],
      },
      {
        label: "Minutes of Meeting ",
        link: "/Others/BOG",
        iconImage: Person,
        // children: [
        //   {
        //     label: "Minutes of BoG Meeting",
        //     link: "/Others/BOG",
        //     iconImage: Director,
        //   },
        //   {
        //     label: "Minutes of FC Meeting",
        //     link: "/Others/BOG",
        //     iconImage: Programs,
        //   },
        //   {
        //     label: "Minutes of Senate Meeting",
        //     link: "/Others/BOG",
        //     iconImage: Rules,
        //   },
        //],
      },
      // {
      //   label: "Others",
      //   link: "#",
      //   iconImage: Digital,
      //   children: [
         
         
         
      //   ],
      // },
       {
            label: "Organization Chart",
            link: "https://drive.google.com/file/d/1-rCS5RsPydppIQKOYVM8qNYK8y4tUTMZ/view?usp=sharing",
            iconImage: Notice,
          },
    ],
  },
  {
    label: "Academics",
    link: "#",
    mlabel: "Academics",
    children: [
      {
        label: "Departments",
        link: "/Department",
        mlabel: "Departments",
        iconImage: Department,
        children: [
          {
            label: "Architecture & Planning",
            link: "/Department/Archi",
            iconImage: archi,
          },
          { label: "Chemistry", link: "/Department/Chem", iconImage: chem },
          {
            label: "Civil Engineering",
            link: "/Department/CE",
            iconImage: civil,
          },
          {
            label: "Computer Science and Engineering",
            link: "/Department/CSE",
            iconImage: cse,
          },
          {
            label: "Electrical Engineering",
            link: "/Department/EE",
            iconImage: ee,
          },
          {
            label: "Electronics and Communication Engineering",
            link: "/Department/ECE",
            iconImage: ece,
          },
          {
            label: "Humanities & Social Sciences",
            link: "/Department/Humanities",
            iconImage: hss,
          },
          { label: "Mathematics", link: "/Department/Math", iconImage: math },
          {
            label: "Mechanical Engineering",
            link: "/Department/ME",
            iconImage: mech,
          },
          { label: "Physics", link: "/Department/Phy", iconImage: physics },
          {
            label: "Mechatronics & Automation Engineering",
            link: "/Department/Mechatronics",
            iconImage: mech,
          },
          {
            label: "Chemical Engineering and Technology",
            link: "/Department/Chemical",
            iconImage: chem,
          },
          {
            label: "Materials Science & Engineering",
            link: "/Department/Material",
            iconImage: mech,
          },
        ],
      },
      {
        label: "Intranet Portal",
        link: "/Academic/Intranet",
        iconImage: Admin,
      },
      {
        label: "Programmes",
        link: "/Course",
        iconImage: Programs,
      },
      {
        label: "Academic Calendar",
        link: "/Academic/Calender",
        iconImage: Calendar,
      },
      {
        label: "Rules and Regulation",
        link: "/Academic/Curriculam",
        iconImage: Rules,
      },
      {
        label: "Fee Structure",
        link: "/Academic/Fee",
        iconImage: Fee,
      },
      {
        label: "Admission",
        link: "/Academic/Admission?tab=JoSAA",
        iconImage: Admission,
        children: [
          {
            label: "Study in India (SII)",
            link: "/Academic/Admission?tab=SII",
            iconImage: Admission,
          },
          {
            label: "CMCT/JoSSA/CSAB/Others",
            link: "/Academic/Admission?tab=JoSAA",
            iconImage: Admission,
          },
          {
            label: "Relaxation Criteria",
            link: "/Academic/Admission?tab=Relaxation",
            iconImage: Admission,
          },
        ],
      },

      {
        label: "Format of Official Documents",
        link: "/Academic/Format",
        iconImage: Document,
      },
      {
        label: "Course Structure",
        link: "/Course",
        iconImage: Structure,
        children: [
          { label: "UG", link: "/Course/Ug", iconImage: Structure },
          {
            label: "Post Graduate",
            link: "/Course/Pg",
            iconImage: Structure,
          },
          {
            label: "Dual Degree",
            link: "/Course/MTech",
            iconImage: Structure,
          },
          {
            label: "Integrated M.Sc",
            link: "/Course/MSc",
            iconImage: Structure,
          },
          { label: "MCA", link: "/Course/MCA", iconImage: Structure },
        ],
      },

      {
        label: "Academic Notices",
        link: "/Notices/Academic",
        iconImage: Notice,
      },

      {
        label: "Centre of Excellence",
        link: "#",
        children: [
          { label: "TSSC", link: "/Academic/ISRO", iconImage: Excellence },
          { label: "ISRO RACS", link: "/Academic/TSSC", iconImage: Excellence },
        ],
        iconImage: Excellence,
      },
      // {
      //   label: "Digital Intiatives",
      //   link: "/Academic/DI",
      //   iconImage: Digital,
      // },
      // {
      //   label: "ICT Academy",
      //   link: "#",
      // },
      {
        label: "Patents",
        link: "/Academic/Patent",
        iconImage: Bis,
      },
      {
        label: "Publications",
        link: "/Academic/Publication",
        iconImage: Bis,
      },
      {
        label: "BIS Dashboard",
        link: "/Academic/BIS",
        iconImage: Bis,
      },
    ],
  },
  {
    label: "Faculty & Staff",
    link: "/Academic/Faculty&Staff",
    children: [
      {
        label: " Faculty Directory",
        link: "/Academic/Faculty&Staff/AllFaculty",
        iconImage: Director,
      },
      {
        label: " Officers Directory",
        link: "/Academic/Faculty&Staff/AllOfficers",
        iconImage: Director,
      },
      {
        label: " Staff Directory",
        link: "/Academic/Faculty&Staff/Others",
        iconImage: Director,
      },

      // {
      //   label: "Rules and Regulation",
      //   link: "/Academic/Curriculam",
      //   iconImage: Rules,
      // },
      {
        label: "Admin Portal",
        link: "https://admin.nitp.ac.in/",
        iconImage: Admin,
      },
      {
        label: "Faculty Academic Portal",
        link: "http://exam.nitp.ac.in:81/",
        iconImage: Portal,
      },
      // {
      //   label: "Purchase and Store Section",
      //   link: "#",
      //   iconImage: Notice,
      // },
      {
        label: "Staff Claim Form",
        link: "/Academic/Faculty&Staff/forms",
        iconImage: Forms,
      },
      {
        label: "Holidays/Restricted Holidays ",
        link: "https://drive.google.com/file/d/1qL_eR9y5y4uTz0dR0_woqFSv3sQNUhwD/view?usp=sharing",
        iconImage: International,
      },
    ],
  },

  {
    label: "Students",
    link: "/Student",
    children: [
      // {
      //   label: "Dean Student Welfare",
      //   link: "/Facilities/Hostel",
      //   iconImage: Person,
      // },

      {
        label: "Hostel & Mess",
        link: "/Facilities/Hostel",
        iconImage: Hostel,
      },

      // {
      //   label: "Sports",
      //   link: "/Facilities/SportsFacilities",
      //   iconImage: Sports,
      // },
      {
        label: "Scholarship",
        link: "/Student/Scholarship",
        iconImage: Schlorship,
      },
      {
        label: "Clubs/Socities",
        link: "/Student/Clubs",
        iconImage: Clubs,
      },
      {
        label: "Anti Ragging",
        link: "/Student/AntiRagging",
        iconImage: Notice,
      },
      {
        label: "Fee Payment",
        link: "https://paydirect.eduqfix.com/app/mnYv9Q6+C+3lIMqghRCwdaqVZusPrJtq2RGJrJFnKnmtz3KBqtsEFPVrZFvoPubG/3466",
        iconImage: Fee,
      },

      // {
      //   label: "Transportation",
      //   link: "#",
      //   iconImage: security,
      // },
      {
        label: "Women Cell",
        link: "/Facilities/WomanCell",
        iconImage: women,
      },
      {
        label: "SC/ST Cell",
        link: "/Facilities/SCST",
        iconImage: scst,
      },
      {
        label: "Student Activity Center",
        link: "/Student/SAC",
        iconImage: Sac,
      },

      {
        label: " Tech Fest",
        link: "/Student/TechFest",
        iconImage: Fest,
      },

      // {
      //   label: "Student Exchange",
      //   link: "/Student/StudentExchange",
      //   iconImage: Studentexchange,
      // },
      {
        label: "NSS@NITP",
        link: "/Student/NSS",
        iconImage: NssNew,
      },
      {
        label: "E-Cell",
        link: "/Student/E-Cell",
        iconImage: Ecell,
      },
      {
        label: "Unnat Bharat",
        link: "/Student/UnnatBharat",
        iconImage: Bharat,
      },
      {
        label: "Student Academic Portal",
        link: "http://exam.nitp.ac.in:9001/default.aspx?ReturnUrl=%2f",
        iconImage: Chankaya,
      },
    ],
  },
  {
    label: "Facilities",
    link: "/Facilities",
    children: [
      // {
      //   label: "Centers",
      //   link: "#",
      //   iconImage: Structure,
      //   children: [
          
      //     {
      //       label: "Incubation Center",
      //       link: "https://web.nitp.ac.in/incubation_center/index.html",
      //       iconImage: Ecell,
      //     },
      //   ],
      // },
      {
        label: "Incubation Center",
        link: "https://web.nitp.ac.in/incubation_center/index.html",
        iconImage: Ecell,
      },
      {
        label: "Computer Center",
        link: "/Facilities/ComputerCenter",
        iconImage: ComputerCentre,
      },
      {
        label: "Health Center",
        link: "/Facilities/MedicalFacilities",
        iconImage: Hospital,
      },
      {
        label: "Sports Facilities",
        link: "/Facilities/SportsFacilities",
        iconImage: Sports,
      },
      // {
      //   label: "ATM Facilities",
      //   link: "/Facilities/SportsFacilities",
      //   iconImage: itservice,
      // },
      {
        label: "Library",
        link: "/Facilities/Library",
        iconImage: Library,
      },
      {
        label: "Bank",
        link: "/Facilities/Bank",
        iconImage: Bank,
      },
      {
        label: "Security",
        link: "/Facilities/Security",

        iconImage: security,
      },
      {
        label: "EMU",
        link: "/Facilities/Emu",
        iconImage: EMU,
      },
      {
        label: "ESU",
        link: "/Facilities/Esu",
        iconImage: ESU,
      },
      {
        label: "Laboratories",
        link: "/Facilities/Laboratories",
        iconImage: Labs,
      },
    ],
  },
];

//main nav funtion
export default function Navbar() {
  const [isSideMenuOpen, setSideMenuOpen] = useState(false);
  const [isSticky, setSticky] = useState(false);
  useNavigationEvent(() => setSideMenuOpen(false));

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setSticky(true);
      } else {
        setSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);



  return (
    <>
       <div className="bg-black h-6">
  <div className="flex justify-between items-center px-4 py-1 text-white text-xs md:text-sm">
    <div className="flex space-x-2 text-xs md:text-sm">
      <a
        href="/Notices/JobsNITP"
        className="hover:underline text-[0.6rem] md:text-sm"
      >
        Jobs@NITP
      </a>
      <span className="text-[0.5rem] md:text-sm">|</span>
      <a
        href="https://paydirect.eduqfix.com/app/mnYv9Q6+C+3lIMqghRCwdaqVZusPrJtq2RGJrJFnKnmtz3KBqtsEFPVrZFvoPubG/3466"
        className="hover:underline text-[0.6rem] md:text-sm"
      >
        Fee Payment
      </a>
      <span className="text-[0.5rem] md:text-sm">|</span>
      <a
        href="/Academic/Intranet"
        className="hover:underline text-[0.6rem] md:text-sm"
      >
        Intranet
      </a>
    </div>
    <div className="flex space-x-2">
      <a
        href="https://www.facebook.com/story.php?story_fbid=704954328428607&id=100067421393593&mibextid=K8Wfd2"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src="/facebook.png" alt="facebook" className="w-4 h-4 md:w-5 md:h-5" />
      </a>
      <a
        href="https://twitter.com/nitpatna1/status/1749690769500430475?s=48"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src="/twitter.svg" alt="twitter" className="w-4 h-4 md:w-5 md:h-5" />
      </a>
      <a
        href="https://www.linkedin.com/school/national-institute-of-technology-patna/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src="/linkedin.svg" alt="linkedin" className="w-4 h-4 md:w-5 md:h-5" />
      </a>
      <a
        href="https://goo.gl/maps/srZ6whpfDGqg85sp6"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src="/location.png" alt="location" className="w-4 h-4 md:w-5 md:h-5" />
      </a>
    </div>
  </div>
</div>

    <div className={`mobiletest navbar-container  ${isSticky ? "sticky-nav md:py-0 stickdiv" : ""}`}>
   
      <div className="header-top mx-auto flex w-full max-w-9xl justify-between px-4 py-2 bg-white/40 backdrop-blur-lg shadow-lg">
        <div className="right-content">
          <div className="font-bold textmob text-black">राष्ट्रीय प्रौद्योगिकी संस्थान पटना</div>
          <div className="text-sm textmob text-black">NATIONAL INSTITUTE OF TECHNOLOGY PATNA</div>
        </div>
        <div className="left-content flex">
          <Link href="/">  <Image src={logo} alt="NIT PATNA" height={70} /></Link>
        
        </div>
        <div className="institute-info pt-4 hidden text-center items-center justify-center md:block text-black">
          <div>An Institute of National Importance under Ministry of Education</div>
          <div>(Shiksha Mantralaya), Government of India</div>
        </div>
      </div>

      <div className="desktopnav mx-auto flex w-full max-w-7xl justify-center px-4 py-3 text-sm bg-white/40 md:py-1 md:bg-[#811919] backdrop-blur-lg md:rounded-xl shadow-lg">
        
        <section className="nav-items hidden md:flex">
        
        {navItems.map((item, index) => (
          
          <NavItem key={index} item={item} />
        ))}
      </section>
        <FiMenu onClick={() => setSideMenuOpen(true)} className="cursor-pointer text-4xl md:hidden text-black" />
      </div>

      {isSideMenuOpen && <MobileNav closeSideMenu={() => setSideMenuOpen(false)} />}
    </div></>
  );
}

// 
function NavItem({ item }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className="relative  "
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      
      <Link href={item.link ?? "#"} className="flex cursor-pointer items-center gap-2 px-10 py-3 text-white transition-all group-hover:text-red-200">
        <span>{item.label}</span>
        {item.children && <IoIosArrowDown className={`transition-all ${isOpen ? "rotate-180" : ""}`} />}
      </Link>
      {item.children && (
        <div className={`absolute right-0 top-10 w-auto flex-col gap-1 rounded-lg bg-white  shadow-md transition-all ${isOpen ? "flex" : "hidden"} group`}>
          <div className="border-solid border-2 border-red-800 m-4 p-2 rounded-lg	bg-white shadow-red-500/30 shadow-md">
          {item.children.map((child, index) => (
            <DropdownItem key={index} item={child} parentLabel={item.mlabel} />
          ))}</div>
        </div>
      )}
    </div>
  );
}



function DropdownItem({ item, parentLabel }) {
  const [isSOpen, setIsSOpen] = useState(false);

  return (
    <div
      className="relative "
      onMouseEnter={() => setIsSOpen(true)}
      onMouseLeave={() => setIsSOpen(false)}
    >
      
      <Link href={item.link ?? "#"} className="flex cursor-pointer items-center py-1 pl-6 pr-8 text-neutral-800 hover:text-red-900 hover:bg-red-100">
        {item.iconImage && <Image src={item.iconImage} alt="item-icon" />}
        <span className="whitespace-nowrap pl-3">{item.label}</span>
        {item.children && <IoIosArrowDropright className={`ml-auto transition-all ${isSOpen ? "rotate-180" : ""}`} />}
      </Link>
      
      {item.children && (
        
        <div className={`absolute left-full top-0  w-auto flex-col gap-1 rounded-lg shadow-md transition-all  bg-neutral-200 md:bg-neutral-100 ${isSOpen ? "flex" : "hidden"}`}>
          <div className="border-solid border-2 border-red-800 m-4 p-2 rounded-lg	">
          {item.children.map((subChild, subIndex) => (
            <Link key={subIndex} href={subChild.link ?? "#"} className="flex cursor-pointer items-center py-1 pl-6 pr-8 text-black md:text-neutral-900 hover:text-red-900 hover:bg-red-100">
              {subChild.iconImage && <Image src={subChild.iconImage} alt="item-icon" />}
              <span className="whitespace-nowrap pl-3">{subChild.label}</span>
            </Link>
          ))}</div>
        </div>
      )}
    </div>
  );
}
function MobileNav({ closeSideMenu }) {



  return (
    <div className="mobile-nav text-black">
      <div className="mobile-nav-content text-black">
        <AiOutlineClose onClick={closeSideMenu} className="mobile-nav-close text-4xl text-black" />
        <div className="flex flex-col text-base gap-2 transition-all ">
          {navItems.map((item, index) => (
            
            <SingleNavItem key={index} item={item} onClick={closeSideMenu} />
          ))}
        </div>
      </div>
    </div>
  );
}




function SingleNavItem({ item ,closeSideMenu}) {
  const [animationParent] = useAutoAnimate();
  const [isItemOpen, setItemOpen] = useState(false);
 
  return (
    <div ref={animationParent} className="relative px-1 py-3 transition-all">
      <p onClick={() => setItemOpen(!isItemOpen)} className="flex cursor-pointer items-center gap-2 text-neutral-900 group-hover:text-black">
      {item.iconImage && <Image src={item.iconImage} alt="item-icon" />}
      <Link href={ "#"} onClick={closeSideMenu} >
                {item.label}
              </Link>
        {item.children && <IoIosArrowDown className={`text-xs transition-all ${isItemOpen && "rotate-180"}`} />}
      </p>
      {isItemOpen && item.children && (
        <p className="w-auto flex-col gap-1  bg-neutral-50 py-3 transition-all flex">
          {item.children.map((child, index) => (
            <SubSidemenu key={index} item={child}/>
          ))}
        </p>
      )}
    </div>
  );
}
function SubSidemenu({ item,closeSideMenu }) {
  const [isSubItemOpen, setSubItemOpen] = useState(false);
  const [isItemOpen, setItemOpen] = useState(true);
  const handleSubToggle = () => {
    setSubItemOpen(!isSubItemOpen);
  };

  return (
    <div className="relative px-1 py-1 transition-all ">
      <p onClick={handleSubToggle} className="flex cursor-pointer items-center gap-1 text-neutral-700 group-hover:text-black">
      {item.iconImage && <Image src={item.iconImage} alt="item-icon" />}
        <Link href={item.link ?? "#"} onClick={closeSideMenu}>
        <span>{item.label}</span>
              </Link>
        {item.children && <IoIosArrowDown className={`text-xs transition-all ${isSubItemOpen && "rotate-180"} `} />}
      </p>
      {isSubItemOpen && item.children && (
        <div className="w-auto flex-col gap-1 bg-white py-1 transition-all text-sm">
          {item.children.map((subChild, index) => (
            <p key={index} className="flex pl-4">
              {item.iconImage && <Image src={subChild.iconImage} alt="item-icon" />}
              <Link href={subChild.link ?? "#"} className="flex cursor-pointer items-center py-1 text-neutral-700 hover:text-black pl-1">
                <span>{subChild.label}</span>
              </Link>
            </p>
          ))}
        </div>
      )}
    </div>
  );
}
