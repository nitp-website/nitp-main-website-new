import DepartmentStudents from "@/app/components/department/DepartmentStudents";

export const metadata = {
  title: "Students | Electrical Engineering | NIT Patna",
  description: "Student directory for the Department of Electrical Engineering at NIT Patna.",
};

export default function EEStudentsPage() {
  return <DepartmentStudents dept="EE" branch="ee" />;
}

