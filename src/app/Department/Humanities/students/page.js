import DepartmentStudents from "@/app/components/department/DepartmentStudents";

export const metadata = {
  title: "Students | Humanities and Social Sciences | NIT Patna",
  description: "Student directory for the Department of Humanities and Social Sciences at NIT Patna.",
};

export default function HumanitiesStudentsPage() {
  return <DepartmentStudents dept="Humanities" branch="hss" />;
}

