export const OFFICE_SECTIONS = [
  {
    id: "AccountSection",
    path: "AccountSection",
    deptCode: "acc",
    title: "Account Section",
    shortTitle: "Account Section",
    description: "Financial management, payroll processing, accounting services, and audit compliance.",
    aliases: ["accountsection", "account-section", "account", "acc"],
  },
  {
    id: "CCIS",
    path: "CCIS",
    deptCode: "ccis",
    title: "CCIS (Centre for Computer Information Services)",
    shortTitle: "CCIS",
    description: "Digital infrastructure, IT operations, software services, and enterprise computing systems.",
    aliases: ["ccis"],
  },
  {
    id: "EMU",
    path: "EMU",
    deptCode: "emu",
    title: "EMU (Estate Maintenance Unit)",
    shortTitle: "EMU",
    description: "Estate maintenance, campus utilities, civil repair work, and electrical service management.",
    aliases: ["emu", "estatemaintenanceunit"],
  },
  {
    id: "ESU",
    path: "ESU",
    deptCode: "esu",
    title: "ESU (Estate Service Unit)",
    shortTitle: "ESU",
    description: "Campus estate services, land management, infrastructure upkeep, and campus facilities.",
    aliases: ["esu", "estateserviceunit"],
  },
  {
    id: "ComputerCenter",
    path: "ComputerCenter",
    deptCode: "cc",
    title: "Computer Center",
    shortTitle: "Computer Center",
    description: "Central computing facilities, network operations, server maintenance, and campus IT support.",
    aliases: ["computercenter", "computer-center", "cc"],
  },
  {
    id: "StudentWelfare",
    path: "StudentWelfare",
    deptCode: "sw",
    title: "Student Welfare Section",
    shortTitle: "Student Welfare",
    description: "Student affairs, scholarships, extracurricular activities, hostel welfare, and support services.",
    aliases: ["studentwelfare", "student-welfare", "sw"],
  },
  {
    id: "FacultyWelfare",
    path: "FacultyWelfare",
    deptCode: "fac",
    title: "Faculty Welfare Section",
    shortTitle: "Faculty Welfare",
    description: "Faculty development, welfare schemes, academic benefits, and faculty support administration.",
    aliases: ["facultywelfare", "faculty-welfare", "fac"],
  },
  {
    id: "AcademicSection",
    path: "AcademicSection",
    deptCode: "acd",
    title: "Academic Section",
    shortTitle: "Academic Section",
    description: "Academic administration, student admissions, registrations, curriculum oversight, and transcripts.",
    aliases: ["academicsection", "academic-section", "academic", "acd"],
  },
  {
    id: "DirectorSection",
    path: "DirectorSection",
    deptCode: "dir",
    title: "Director Section",
    shortTitle: "Director Section",
    description: "Executive office of the Director, institute governance, policy execution, and administrative leadership.",
    aliases: ["directorsection", "director-section", "director", "dir"],
  },
  {
    id: "TrainingAndPlacement",
    path: "TrainingAndPlacement",
    deptCode: "tnp",
    title: "Training and Placement Section",
    shortTitle: "Training & Placement",
    description: "Campus recruitment, corporate relations, student skill development, and industry placement coordination.",
    aliases: ["trainingandplacement", "training-and-placement", "tnp", "placement"],
  },
];

export const getSectionBySlug = (slug) => {
  if (!slug) return OFFICE_SECTIONS[0];
  const normalized = slug.toLowerCase().replace(/[^a-z0-9]/g, "");
  return (
    OFFICE_SECTIONS.find(
      (sec) =>
        sec.id.toLowerCase() === normalized ||
        sec.path.toLowerCase() === normalized ||
        sec.deptCode.toLowerCase() === normalized ||
        sec.aliases.some((alias) => alias.replace(/[^a-z0-9]/g, "") === normalized)
    ) || OFFICE_SECTIONS[0]
  );
};
