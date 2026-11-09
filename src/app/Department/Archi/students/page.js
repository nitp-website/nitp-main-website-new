import DepartmentStudents from "@/app/components/department/DepartmentStudents";

export const metadata = {
  title: "Students | Architecture and Planning | NIT Patna",
  description: "Student directory for the Department of Architecture and Planning at NIT Patna.",
};

export default function ArchiStudentsPage() {
  return <DepartmentStudents dept="Archi" branch="arch" />;
}

