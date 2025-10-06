import { url } from "inspector"


const Deans = [
  {
   name: "Prof. Maheshwari Prasad Singh ",
   designation: "Dean, Academic",
   type: "dean.ac@nitp.ac.in",
   url:"https://www.nitp.ac.in/profile/mps@nitp.ac.in",
  },
   {
   name: "Prof. Prabhat Kumar",
   designation: "Dean, Student Welfare",
   type: "dean.sw@nitp.ac.in",
   url:"https://www.nitp.ac.in/profile/prabhat@nitp.ac.in",
  },
  {
   name: "Prof. Prakash Chandra",
   designation: "Dean, Faculty Welfare",
   type: "dean.fw@nitp.ac.in",
   url:"https://www.nitp.ac.in/profile/prakash@nitp.ac.in",
  },
  {
   name: "Prof. Ramesh Kumar",
   designation: "Dean, Research & Consultancy",
   type: "dean.rc@nitp.ac.in",
   url:"https://www.nitp.ac.in/Department/EE/faculty/ramesh@nitp.ac.in",
  },
   {
   name: "Prof. Sanjeev Sinha",
   designation: "Dean, Planning & Development",
   type: "dean.pd@nitp.ac.in",
   url:"https://www.nitp.ac.in/profile/sanjeev@nitp.ac.in",
  },
   {
   name: "Dr. Sanjay Kumar",
   designation: "Dean Outreach & Alumni Affairs",
  //  type: "dean.pd@nitp.ac.in",
   url:"https://www.nitp.ac.in/profile/sanjay@nitp.ac.in",
  }
  ]
 
 const AssDeans = [

   {
    name: "Prof. A. R. Quaff",
    designation: "Associate Dean , Exam",
    type: "examoffice@nitp.ac.in",
    url: "https://www.nitp.ac.in/profile/arquaff@nitp.ac.in",
   },
      {
    name: "Dr. Vimlesh Verma",
    designation: "Associate Dean, Student Welfare",
    type: "",
    url: "https://www.nitp.ac.in/profile/vimlesh.verma@nitp.ac.in",
   },
     {
    name: "Dr. Om Ji Shukla",
    designation: "Associate Dean, Student Welfare",
    type: "",
     url: "https://www.nitp.ac.in/profile/omjishukla.me@nitp.ac.in",
   },

         {
    name: "Dr. Subodh Srivastava",
    designation: "Associate Dean, Student Welfare",
    type: "",
    url: "https://www.nitp.ac.in/profile/subodh@nitp.ac.in",
   
   },
   {
    name: "Dr. Abhimanyu Kumar",
    designation: "Associate Dean, Student Welfare",
    type: "",
    url: "https://www.nitp.ac.in/profile/abhimanyu.cs@nitp.ac.in",
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
  designation: "Director, NIT Patna",
  type: "Ex-Officio Member",
 },
 
 {
  name: "Member 1",
  type: "The Joint Secretary or His Nominee,Ministry of Education, Govt. of India",
  designation: "Member",
 },
 {
  name: "Member 2",
  type: "The Joint Secretary or His Nominee,Ministry of Education, Govt. of India",
  designation: "Member",
 },

 {
  name: "Prof. T.N. Singh",
  type: "Director, IIT Patna",
  designation: "Member",
 },
 {
  name: "Prof. Ramesh Kumar",
  type: "Professor, Dept. of Electrical Engineering & Dean (R&C), NIT Patna",
  designation: "Member",
 },
 {
  name: "Dr. Madhava Nand Pandey",
  type: "Associate Professor, Dept. of Mechanical Engineering, NIT Patna",
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
  type: "Chairperson, BWC, NIT Patna",
 },
 {
  name: "Director (Finance)",
  designation: "or his nominee Deptt. of Higher Education, Ministry of Education, GOI",
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
  name: `Prof. Pijush Sammui`,
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
  name: "Prof. Prabhat Kumar",
  designation: "Dean (Student Welfare)",
  type: "Ex-Officio Chairman",
  url:"https://www.nitp.ac.in/profile/prabhat@nitp.ac.in"
 },
 {
  name: "Dr. Bhabani S. Das",
  designation: "Director's Nominee (SC/ST) representative",
  type: "Member",
  url:"https://www.nitp.ac.in/profile/bsd.ce@nitp.ac.in"
 },
 {
  name: "Dr. Sangeeta Singh",
  designation: "Senate Chairman's Nominee (Female nominee)",
  type: "Member",
  url:"https://www.nitp.ac.in/profile/sangeeta.singh@nitp.ac.in"
 },
 {
  name: "",
  designation:
   "Chief Proctor or his nominee from the Proctorial Board",
  type: "Ex-Officio Member",
 },
 {
  name: "Dr. Asit Narayan",
  designation: "Registrar",
  type: "Ex-Officio Member",
 },
 {
  name: "",
  designation: "Associate Deans (SW) of the concerned campus",
  type: "Ex-Officio Member",
 },
 {
  name: "Dr. Bambam Kumar",
  designation: "Chairman, Hostel Management Committee",
  type: "Ex-Officio Member",
  url:"https://www.nitp.ac.in/profile/bambam.ec@nitp.ac.in"
 },
 {
  name: "",
  designation: "HOD's of Concerned Department",
  type: "Ex-Officio Member",
 },
 {
  name: "",
  designation: "Warden of the Hostel of Residence of which the student concerned is a boarder (if applicable)",
  type: "Ex-Officio Member",
 },
 {
  name: "Shri Jay Prakash Sharma",
  designation: "Assistant Registrar (General Admin)",
  type: "Ex-Officio Member Secretary",
 },


]
const FC = [
 {
  name: "Prof. Pradip Kumar Jain",
  designation: "Director, NIT Patna",
  type: "Chairperson",
 },
 {
  name: "Ms. Saumya Gupta",
  designation: "JS (NITs) Department of Higher Education, Ministry of Education, Govt. of India",
  type: "Member",
 },
 {
  name: "Sri Narayan Singh Bisht",
  designation: "Dy. Secretary (IFD) Department of Higher Education, Ministry of Education, Govt. of India",
  type: "Member",
 },
 {
  name: "Dr. T.N. Singh",
  designation: "Director, IIT Patna",
  type: "member",
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
    name: "Prof. P.K. Jain",
    designation: "Director, NIT Patna",
    type: "Chairman"
  },
  {
    name: "Prof. Manoj Kumar",
    designation: "Professor, Architecture & Planning Dept.",
    type: "Member"
  },
  {
    name: "Prof. Fulena Rajak",
    designation: "Professor, Architecture & Planning Dept.",
    type: "Member"
  },
  {
    name: "Prof. L.B. Roy",
    designation: "Professor, Civil Engineering Dept.",
    type: "Member"
  },
  {
    name: "Prof. Sanjeev Sinha",
    designation: "Professor, Civil Engineering Dept.",
    type: "Member"
  },
  {
    name: "Prof. Ajay Kr Sinha",
    designation: "Professor, Civil Engineering Dept.",
    type: "Member"
  },
  {
    name: "Prof. S.S. Mishra",
    designation: "Professor, Civil Engineering Dept.",
    type: "Member"
  },
  {
    name: "Prof. Vivekanand Singh",
    designation: "Professor, Civil Engineering Dept.",
    type: "Member"
  },
  {
    name: "Prof. Ramakar Jha",
    designation: "Professor, Civil Engineering Dept.",
    type: "Member"
  },
  {
    name: "Prof. N.S. Maurya",
    designation: "Professor, Civil Engineering Dept.",
    type: "Member"
  },
  {
    name: "Prof. A.R. Quaff",
    designation: "Professor, Civil Engineering Dept.",
    type: "Member"
  },
  {
    name: "Prof. Anshuman Singh",
    designation: "Professor, Civil Engineering Dept.",
    type: "Member"
  },
  {
    name: "Prof. Baboo Rai",
    designation: "Professor, Civil Engineering Dept.",
    type: "Member"
  },
  {
    name: "Prof. Pijush Samui",
    designation: "Professor, Civil Engineering Dept.",
    type: "Member"
  },
  {
    name: "Prof. M.P. Singh",
    designation: "Professor, Computer Science and Engineering Dept.",
    type: "Member"
  },
  {
    name: "Prof. Prabhat Kumar",
    designation: "Professor, Computer Science and Engineering Dept.",
    type: "Member"
  },
  {
    name: "Prof. Ramesh Kumar",
    designation: "Professor, Electrical Engineering Dept.",
    type: "Member"
  },
  {
    name: "Prof. Bharat Gupta",
    designation: "Professor, Electronics and Communication Engg.",
    type: "Member"
  },
  {
    name: "Prof. Om Prakash",
    designation: "Professor, Mechanical Engineering Dept.",
    type: "Member"
  },
  {
    name: "Prof. Prakash Chandra",
    designation: "Professor, Mechanical Engineering Dept.",
    type: "Member"
  },
  {
    name: "Prof. A.N. Sinha",
    designation: "Professor, Mechanical Engineering Dept.",
    type: "Member"
  },
    {
    name: "Prof. Samrat Mukherjee",
    designation: "Professor, Applied Physics and Materials Engg. Dept.",
    type: "Member"
  },
  //===============================
  {
    name: "Prof. Sunita Kumari",
    designation: "Professor & HoD, Civil Engineering Dept.",
    type: "Member"
  },
    {
    name: "Prof. Amit Kumar",
    designation: "Professor & HoD, Mechatronics and Automation Engineering Dept.",
    type: "Member"
  },
 {
    name: "Dr. Amit Kumar Singh",
    designation: "Associate Professor & HoD, Computer Science and Engineering Dept.",
    type: "Member"
  },
  {
    name: "Dr. Anil Kumar Das",
    designation: "Associate Professor & HoD, Mechanical Engineering Dept.",
    type: "Member"
  },
  {
    name: "Dr. Deepak Kumar Behera",
    designation: "Associate Professor & HoD, Humanities & Social Sciences Dept.",
    type: "Member"
  },
  {
    name: "Dr. Jayanta Ghosh",
    designation: "Associate Professor & HoD, Electronics and Communication Engineering.",
    type: "Member"
  },

   {
    name: "Dr. Rishi Kumar Jha",
    designation: "Associate Professor & HoD, Mathematics and Computing Technology Dept.",
    type: "Member"
  },
  {
    name: "Dr. Shailendra K. Mandal",
    designation: "Associate Professor & HoD, Architecture Dept.",
    type: "Member"
  },
  {
    name: "Dr. Shivendra Kumar Jaiswal",
    designation: "Associate Professor & HoD, Applied Physics and Material Engineering Dept.",
    type: "Member"
  },
  {
    name: "Dr.  Tasneem Parvin",
    designation: "Associate Professor & HoD, Chemical Science and Technology Dept.",
    type: "Member"
  },
    {
    name: "Dr. Vimlesh Verma",
    designation: "Associate Professor & HoD, Electrical Engineering Dept.",
    type: "Member"
  },
  //////////////////////////////////
  
  //===============================
  {
    name: "Dr. J.P. Singh",
    designation: "Associate Professor & PI (MIS)",
    type: "Member"
  },
  {
    name: "Prof. K.P. Singh",
    designation: "Former Director, IIT BHU",
    type: "Member"
  },
  {
    name: "Prof. S.K. Singh",
    designation: "Vice-Chancellor, LNMU, Darbhanga",
    type: "Member"
  },
  {
    name: "Prof. Pushplata Tripathi",
    designation: "Former Pro-Vice Chancellor, Guru Gobind Singh Indraprastha University, New Delhi",
    type: "Member"
  },
  {
    name: "Dr. Asit Narayan",
    designation: "Registrar, NIT Patna",
    type: "Secretary"
  }
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
  designation: "CCIS",
  type: "Head",
  name: "Prof. Prabhat Kumar",
 },

 {
  name: "Prof. M P Singh",
  type: "Chief Investigator",
  designation: " E&ICT Academy Phase II",
 },

 {
  name: "Prof. Samrat Mukherjee",
  type: "Prof. In-charge",
  designation: "Training and Placement",
 },

{
  name: "Prof. Bharat Gupta",
  type: "Professor",
  designation: "Prof Incharge (Incubation Centre); Co-PI (Procurement)"
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
  name: "Dr. Ajay Kumar",
  type: "Associate Professor",
  designation: " Asst. PI (T&P)"
},

 
{
  name: "Dr. Shailendra K. Mandal",
  type: "Associate Professor",
  designation: " PI - Library"
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
  name: "Dr. Amit Kumar Singh",
  type: "Associate Professor",
  designation: "PI – International Affairs; Chief Vigilance Officer, NIT Patna"
},
  
{
  name: "Dr. Chetan Kumar Hirwani",
  type: "Assistant Professor",
  designation: " T & P Officer"
},
{
  name: "Dr. S K Tripathy",
  type: "Assistant Professor",
  designation: " Asst. PI (T&P)"
},


{
  name: "Dr. B. Balaji Naik",
  type: "Assistant Professor",
  designation: "PI – Webservice"
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
  name: "Dr.Mukesh Kumar",
  type: "Assistant Professor",
  designation: "PI Security- Bihta Campus"
},


 {
  name: "Dr. Bambam Kumar",
  type: "Assistant Professor",
  designation: " Chairman, Hostel Management Committee; Asst. EE (ESU)"
},



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
