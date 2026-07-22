export const StaffdepList = new Map([
  ['arch', 'Architecture'],
  ['che', 'Chemical Science and Technology'],
  ['ce', 'Civil Engineering'],
  ['cse', 'Computer Science and Engineering'],
  ['ee', 'Electrical Engineering'],
  ['ece', 'Electronics and Communication Engineering'],
  ['hss', 'Humanities & Social Sciences'],
  ['maths', 'Mathematics and Computing Technology'],
  ['me', 'Mechanical Engineering'],
  ['phy', 'Applied Physics and Material Engineering'],
  ['mae', 'Mechatronics and Automation Engineering'],
  ['mse', 'Materials Science and Engineering'],
  ['sup', 'Supporting Staff'],
  ['min', 'Ministerial Staff'],
  ['ccis', 'CCIS'],
  ['mis', 'MIS'],
  ['esu', 'Estate Service Unit'],
  ['emu', 'Estate Maintenance  Unit'],
  ['acd', 'Academic Section'],
  ['est', 'Establishment Section'],
  ['sw', 'Student Welfare Section'],
  ['tnp', 'Training and Placement Section'],
  ['reg', 'Registrar Office Section'],
  ['dir', 'Director Office Section'],
  ['pro', 'Procurement Section'],
  ['exam', 'Exam Section'],
  ['acc', 'Account Section'],
  ['fac','Faculty Welfare Section'],
  [ 'rnc', 'Research and Consultancy Section'],
  ['pnd', 'Planning and Development Section'],
  ['erp', 'ERP Section']
])

// Looks up the full department name from a short code (e.g. "cse").
// Falls back to the original value if the code isn't in the map,
// so unmapped/new department codes still display something instead of nothing.
export const getDepartmentName = (code) => {
  if (!code) return code;
  return StaffdepList.get(code.toLowerCase().trim()) || code;
};