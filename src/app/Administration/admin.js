import React from "react"


const Deans = [
  {
   name: "Prof. Pijush Samui",
   designation: "Dean, Planning & Development",
   type: "dean.pd@nitp.ac.in",
   url:"https://www.nitp.ac.in/Department/CE/faculty/pijush@nitp.ac.in",
  },
  {
   name: "Prof. Ramesh Kumar",
   designation: "Dean, Research & Consultancy",
   type: "dean.rc@nitp.ac.in",
   url:"https://www.nitp.ac.in/Department/EE/faculty/ramesh@nitp.ac.in",
  },
  {
   name: "Prof. Samrat Mukherjee",
   designation: "Dean, Student Welfare",
   type: "dean.sw@nitp.ac.in",
   url:"https://www.nitp.ac.in/Department/Phy/faculty/samrat@nitp.ac.in",
  },
  {
   name: "Prof. Vivekanand Singh ",
   designation: "Dean, Academic",
   type: "dean.ac@nitp.ac.in",
   url:"https://www.nitp.ac.in/Department/CE/faculty/vsingh@nitp.ac.in",
  },
  {
   name: "Prof. Manoj Kumar",
   designation: "Dean, Faculty Welfare",
   type: "dean.fw@nitp.ac.in",
   url:"https://www.nitp.ac.in/Department/Archi/faculty/manoj@nitp.ac.in",
  },
 ]
 
 const AssDeans = [
  {
    name: "Prof. M. P. Singh",
    designation: "Associate Dean , Academic",
    type: "associ.deanac@nitp.ac.in",
   },
   {
    name: "Prof. A. R. Quaff",
    designation: "Associate Dean , Exam",
    type: "examoffice@nitp.ac.in",
   },
      {
    name: "Dr. Vimlesh Verma",
    designation: "Associate Dean, Student Welfare",
    type: "",
   },
     {
    name: "Dr. Om Ji Shukla",
    designation: "Associate Dean, Student Welfare",
    type: "",
   },

         {
    name: "Dr. Subodh Srivastava",
    designation: "Associate Dean, Student Welfare",
    type: "",
   },
   
      {
    name: "Dr. Abhimanyu Kumar",
    designation: "Associate Dean, Student Welfare",
    type: "",
   },
    

 ]
const BOG = [
 {
  name: "Shri Ashok Kumar Modi",
  designation: "Chairperson",
  type: "Chief Managing Director, Eden Group, Kolkata",
 },
 {
  name: "Prof. Pradip Kumar Jain",
  designation: "Ex-Officio Member, NIT Patna",
  type: "Director NIT Patna",
 },
 
 {
  name: "Joint Secretary(Technical) or his/her nominee",
  type: "Department of Higher Education, MHRD",
  designation: "Ex-Officio Member",
 },
 {
  name: "JS and Financial Advisor or his/her nominee",
  type: "Department of Higher Education, MHRD",
  designation: "Ex-Officio Member",
 },

 {
  name: "Director IIT Patna",
  type: "or his nominee not below the rank of professor",
  designation: "Ex-Officio Member",
 },
 {
  name: "Prof. Fulena Rajak",
  type: "Professor, Dept. of Architecture & Planning, NIT Patna",
  designation: "Member",
 },
 {
  name: "Dr. Reena Singh",
  type: "Assistant Professor, Dept. of Civil Engineering, NIT Patna",
  designation: "Member",
 },
 {
  name: "Dr. Asit Narayan",
  type: "Registrar, NIT Patna",
  designation: "Secretary",
 },
]
const BWC = [
 {
  name: "Prof. Pradip Kumar Jain",
  designation: "Director, NIT Patna",
  type: "Ex-Officio Chairperson",
 },
 {
  name: "Director or Deputy Secretary",
  designation: "or his nominee Dealing with NITs in Ministry",
  type: "Ex-Officio Member",
 },
 {
  name: "Director or Deputy Secretary",
  designation: "or his nominee Dealing with Finance of NITs in Ministry",
  type: "Ex-Officio Member",
 },
 {
  name: "Dr. Rajesh Kumar",
  designation: "Professor Department of Civil Engineering IIT BHU",
  type: "Member",
 },
 {
  name: "Sri Ashok Kumar",
  designation:
   "Director (Operation) South Bihar Power Distribution Co. Ltd Patna",
  type: "Member",
 },
 {
  name: "Sri Pawan Kumar",
  designation: `Executive Engineer
Construction Divison-1
BCD, Govt. of Bihar`,
  type: "Member",
 },
 {
  name: `Prof. Fulena Rajak`,
  designation: `Dean (Planning & Development), NIT Patna`,
  type: `Member`,
 },
 {
  name: `Dr. Asit Narayan`,
  designation: `Registrar, NIT Patna`,
  type: `Secretary`,
 },
]

const IDC = [
 {
  name: "Prof. Samrat Mukherjee",
  designation: "Dean(Student Welfare)",
  type: "Chairman",
 },
 {
  name: "Prof. Prakash Chandra",
  designation: "Director's Nominee",
  type: "Member",
 },
 {
  name: "Dr. Bambam Kumar",
  designation: "Asst. Chairman Hostel Management Committee",
  type: "Member",
 },
 {
  name: "",
  designation:
   "Warden of the Hostel of Residence of which the student concerned is a boarder",
  type: "Member",
 },
 {
  name: "Dr. Mala De",
  designation: "One faculty nominated by the Senate",
  type: "Member",
 },
 
 {
  name: "Dr. Asit Narayan",
  designation: "Registrar, NIT Patna",
  type: "Member Secretary",
 },
]
const FC = [
 {
  name: "Prof. Pradip Kumar Jain",
  designation: "Director, NIT Patna",
  type: "Chairperson",
 },
 {
  name: "Joint Secretary (Technical) or his/her nominee",
  designation: "Department of Higher Education,MHRD",
  type: "Member",
 },
 {
  name: "JS and FInancial Advisor",
  designation: "Department of Higher Education, MHRD",
  type: "Member",
 },
 {
  name: "Director IIT Patna",
  designation: "or his nominee not below the rank of professor",
  type: "Member",
 },
 {
  name: "Dr. Asit Narayan",
  designation: "Registrar, NIT Patna",
  type: "Secretary",
 },
]

const director = [
 {
  director: "something",
 },
]

const Senate = [
 {
  name: "Prof. P. K. Jain",
  designation:"Director, NIT Patna",
  type: "Ex-Officio Chairman",
 },
 {
  name: "Prof. Nityanand Singh Maurya ",
  designation:"Professor, Civil Engineering Dept.",
  type: "Member",
 },
 {
  name:
   "Prof. Prabhat Kumar ",
   designation:"Professor, Computer Science and Engineering Dept.",
  type: "Member",
 },
 {
  name: "Prof. M.P. Singh  ",
  designation:"Professor, Computer Science and Engineering Dept.",
  type: "Member",
 },
 { name: "Prof. Samrat Mukherjee ", designation: "Professor, Physics Dept.", type: "Member" },
  { name: "Prof. Bharat Gupta", designation: "Professor, Electronics and Communication Engineering Dept.", type: "Member" },
  { name: "Prof. Abdur Rahman Quaff,", designation: "Civil Engineering Dept.", type: "Member" },
  { name: "Prof. Baboo Rai", designation: "Professor, Civil Engineering Dept.", type: "Member" },
  { name: "Prof. Anshuman Singh", designation: "Professor, Civil Engineering Dept.", type: "Member" },
  { name: "Prof. Pijush Samui", designation: "Professor, Civil Engineering Dept.", type: "Member" },
  { name: "Prof. Sunita Kumari", designation: "Professor, Civil Engineering Dept.", type: "Member" },
  { name: "Prof. Amit Kumar", designation: "Professor, Mechanical Engineering Dept.", type: "Member" },
  { name: "Prof. Manoj Kumar", designation: "Professor, Architecture Dept.", type: "Member" },
  { name: "Prof. Fulena Rajak", designation: "Professor, Architecture Dept.", type: "Member" },
  { name: "Prof. L. B. Roy", designation: "Professor, Civil Engineering Dept.", type: "Member" },
  { name: "Prof. Sanjeev Sinha", designation: "Professor, Civil Engineering Dept.", type: "Member" },
  { name: "Prof. Ajay Kumar Sinha", designation: "Professor, Civil Engineering Dept.", type: "Member" },
  { name: "Prof. S. S. Mishra", designation: "Professor, Civil Engineering Dept.", type: "Member" },
  { name: "Prof. Vivekanand Singh", designation: "Professor, Civil Engineering Dept.", type: "Member" },
  { name: "Prof. Ramesh Kumar", designation: "Professor, Electrical Engineering Dept.", type: "Member" },
  { name: "Prof. Sawal Kishore Singh", designation: "Mathematics Dept.", type: "Member" },
  { name: "Prof. S. K. Verma", designation: "Professor, Mechanical Engineering Dept.", type: "Member" },
  { name: "Prof. Om Prakash", designation: "Professor, Mechanical Engineering Dept.", type: "Member" },
  { name: "Prof. Ramakar Jha", designation: "Professor, Civil Engineering Dept.", type: "Member" },
  { name: "Prof. Prakash Chandra", designation: "Professor, Mechanical Engineering Dept.", type: "Member" },
  { name: "Prof. A. N. Sinha", designation: "Professor, Mechanical Engineering Dept.", type: "Member" },
  { name: "Prof. K. P. Singh", designation: "Former Director, IIT BHU", type: "External Member" },
  { name: "Prof. S. K. Singh", designation: "Vice-Chancellor, LNMU, Darbhanga", type: "External Member" },
  { name: "Prof. Pushplata Tripathi,", designation: "Pro-Vice Chancellor, Guru-Govind Singh Indraprastha University, New Delhi.", type: "External Member" },
  { name: "Prof. Asit Narayan", designation: "Registrar, NIT Patna", type: "Ex-Officio Member Secretary" }
]
const Jai = [
 {
  name: "Prof. P. K. Jain",
  designation:"Director, NIT Patna",
  type: "Ex-Officio Chairman",
 },
 {
  name: "Prof. Nityanand Singh Maurya ",
  designation:"Professor, Civil Engineering Dept.",
  type: "Member",
 },
 {
  name:
   "Prof. Prabhat Kumar ",
   designation:"Professor, Computer Science and Engineering Dept.",
  type: "Member",
 },
 {
  name: "Prof. M.P. Singh  ",
  designation:"Professor, Computer Science and Engineering Dept.",
  type: "Member",
 },
 { name: "Prof. Samrat Mukherjee ", designation: "Professor, Physics Dept.", type: "Member" },
  { name: "Prof. Bharat Gupta", designation: "Professor, Electronics and Communication Engineering Dept.", type: "Member" },
  { name: "Prof. Abdur Rahman Quaff,", designation: "Civil Engineering Dept.", type: "Member" },
  { name: "Prof. Baboo Rai", designation: "Professor, Civil Engineering Dept.", type: "Member" },
  { name: "Prof. Anshuman Singh", designation: "Professor, Civil Engineering Dept.", type: "Member" },
  { name: "Prof. Pijush Samui", designation: "Professor, Civil Engineering Dept.", type: "Member" },
  { name: "Prof. Sunita Kumari", designation: "Professor, Civil Engineering Dept.", type: "Member" },
  { name: "Prof. Amit Kumar", designation: "Professor, Mechanical Engineering Dept.", type: "Member" },
  { name: "Prof. Manoj Kumar", designation: "Professor, Architecture Dept.", type: "Member" },
  { name: "Prof. Fulena Rajak", designation: "Professor, Architecture Dept.", type: "Member" },
  { name: "Prof. L. B. Roy", designation: "Professor, Civil Engineering Dept.", type: "Member" },
  { name: "Prof. Sanjeev Sinha", designation: "Professor, Civil Engineering Dept.", type: "Member" },
  { name: "Prof. Ajay Kumar Sinha", designation: "Professor, Civil Engineering Dept.", type: "Member" },
  { name: "Prof. S. S. Mishra", designation: "Professor, Civil Engineering Dept.", type: "Member" },
  { name: "Prof. Vivekanand Singh", designation: "Professor, Civil Engineering Dept.", type: "Member" },
  { name: "Prof. Ramesh Kumar", designation: "Professor, Electrical Engineering Dept.", type: "Member" },
  { name: "Prof. Sawal Kishore Singh", designation: "Mathematics Dept.", type: "Member" },
  { name: "Prof. S. K. Verma", designation: "Professor, Mechanical Engineering Dept.", type: "Member" },
  { name: "Prof. Om Prakash", designation: "Professor, Mechanical Engineering Dept.", type: "Member" },
  { name: "Prof. Ramakar Jha", designation: "Professor, Civil Engineering Dept.", type: "Member" },
  { name: "Prof. Prakash Chandra", designation: "Professor, Mechanical Engineering Dept.", type: "Member" },
  { name: "Prof. A. N. Sinha", designation: "Professor, Mechanical Engineering Dept.", type: "Member" },
  { name: "Prof. K. P. Singh", designation: "Former Director, IIT BHU", type: "External Member" },
  { name: "Prof. S. K. Singh", designation: "Vice-Chancellor, LNMU, Darbhanga", type: "External Member" },
  { name: "Prof. Pushplata Tripathi,", designation: "Pro-Vice Chancellor, Guru-Govind Singh Indraprastha University, New Delhi.", type: "External Member" },
  { name: "Prof. Asit Narayan", designation: "Registrar, NIT Patna", type: "Ex-Officio Member Secretary" }
]

const ServiceUNIT = [

   {
  name: "Prof. Vivekanand Singh",
  type: "Prof. In-charge",
  designation: "Chief Proctor – Security",
 },

 {
  name: "Prof. Samrat Mukherjee",
  type: "Prof. In-charge",
  designation: "Training and Placement",
 },
  {
  name: "Dr. Ajay Kumar",
  type: "Associate Professor",
  designation: " Asst. PI (T&P)"
},
{
  name: "Dr. S K Tripathy",
  type: "Assistant Professor",
  designation: " Asst. PI (T&P)"
},
 {
  name: "Prof. M P Singh",
  type: "Chief Investigator",
  designation: " E&ICT Academy Phase II, Associate Dean Academic",
 },

   {
  name: "Prof. A R Quaff",
  type: "Professor",
  designation: " Associate Dean Examinations",
 },


  
 {
  designation: "PI (Procurement)",
  type: "Chairman (Health Centre)",
  name: "Prof. Prakash Chandra",
 },
 {
  designation: "Addl. PI (Procurement)",
  type: "Nodal Officer – IPR,Nodal Officer – IoE,Nodal Officer – BIS",
  name: "Prof. Amit Kumar",
 },
 {
  designation: "CCIS",
  type: "Head",
  name: "Prof. Prabhat Kumar",
 },

{
  name: "Prof. Bharat Gupta",
  type: "Professor",
  designation: "PI (Incubation Centre); Co-PI (Procurement)"
},
{
  name: "Dr. Shailendra K. Mandal",
  type: "Associate Professor",
  designation: " PI - Library"
},
{
  name: "Dr. Shailesh Mani Pandey",
  type: "Assistant Professor",
  designation: " T & P Officer"
},
{
  name: "Dr. J. P. Singh",
  type: "Associate Professor",
  designation: "Coordinator Bihta Campus; PI-MIS"
},
{
  name: "Dr. Gayadhar Pradhan",
  type: "Associate Professor",
  designation: "Co-Coordinator-Bihta Campus"
},
{
  name: "Dr. Vimlesh Verma",
  type: "Associate Professor",
  designation: " PI – Electrical Maintenance Unit (EMU)"
},
{
  name: "Dr. B. Balaji Naik",
  type: "Assistant Professor",
  designation: "PI – Webservice"
},
{
  name: "Dr. Amit Kumar Singh",
  type: "Associate Professor",
  designation: "PI – International Affairs; Chief Vigilance Officer, NIT Patna"
},
{
  name: "Dr. Om Ji Shukla",
  type: "Assistant Professor",
  designation: "PI – E-Cell; Coordinator – Unnat Bharat"
},
{
  name: "Dr. Gagan Deep Meena",
  type: "Assistant Professor",
  designation: "Co PI – EMU; Coordinator - NSS"
},

 {
  name: "Dr. Bambam Kumar",
  type: "Assistant Professor",
  designation: " Chairman, Hostel Management Committee; Asst. EE (ESU)"
},
{
  name: "Dr. Amitesh Kumar",
  type: "Assistant Professor",
  designation: "Warden – Kosi Extension, Bagmati; Co PI – EMU"
},
{
  name: "Dr. Chetan Kumar Hirwani",
  type: "Assistant Professor",
  designation: "Warden – Sone Hostel; Asst. EE (ESU)"
},
{
  name: "Dr. Yogesh Kumar",
  type: "Assistant Professor",
  designation: " Warden – Brahmaputra Hostel"
},
{
  name: "Dr. Subodh Srivastava",
  type: "Assistant Professor",
  designation: "Warden – Aryabhatt Hostel"
},
{
  name: "Dr. Lini Dev K",
  type: "Assistant Professor",
  designation: " Warden – Ganga Hostel"
},
{
  name: "Dr. Ambrish Maurya",
  type: "Assistant Professor",
  designation: " Warden – Kosi Hostel; Asst. EE (ESU)"
},
{
  name: "Dr. Manpuran Mahto",
  type: "Assistant Professor",
  designation: "Warden – Kautilya Hostel"
},
{
  name: "Dr. Kakali Chatterjee",
  type: "Assistant Professor",
  designation: "Warden – Kadambini Hostel"
},
{
  name: "Dr. Bhabani Shankar Das",
  type: "Assistant Professor",
  designation: " Warden – Brahmaputra Hostel"
},
{
  name: "Dr. Satyajit Mondal",
  type: "Assistant Professor",
  designation: "Assistant Warden – Sone Hostel"
},
{
  name: "Dr. Rajan Agrahari",
  type: "Assistant Professor",
  designation: "Assistant Warden – Brahmaputra Hostel"
},
{
  name: "Dr. Shubham Meena",
  type: "Assistant Professor",
  designation: "Assistant Warden – Brahmaputra Hostel"
},
{
  name: "Dr. Supriya Kumari",
  type: "Assistant Professor",
  designation: " Assistant Warden – Ganga Hostel"
},
{
  name: "Dr. Sandeep Kumar",
  type: "Assistant Professor",
  designation: "Assistant Warden – Kosi Hostel"
},
{
  name: "Dr. Anil Kumar Sharma",
  type: "Assistant Professor",
  designation: "Assistant Warden – Kosi Extension, Bagmati"
},
{
  name: "Dr. Ajay Kumar Maurya",
  type: "Assistant Professor",
  designation: "Assistant Warden – Aryabhatt Hostel"
},
{
  name: "Dr. Richa Agrawal",
  type: "Assistant Professor",
  designation: "Assistant Warden – Kadambini Hostel"
},
{
  name: "Dr. Meena Panchore",
  type: "Assistant Professor",
  designation: "Assistant Warden – Kadambini Hostel"
}
 
]

const Admin = [
    { data: "fc", content: FC },
    { data: "deans", content: Deans },
    { data: "bog", content: BOG },
    { data: "bwc", content: BWC },
    { data: "idc", content: IDC },
    { data: "director", content: director },
    { data: "senate", content: Senate },
    { data: "serviceunit", content: ServiceUNIT },
    { data:"assdeans",content:AssDeans},
  ];
  
export default Admin;
