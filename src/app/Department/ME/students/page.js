import DepartmentStudents from "@/app/components/department/DepartmentStudents";

export const metadata = {
  title: "Students | Mechanical Engineering | NIT Patna",
  description: "Student directory for the Department of Mechanical Engineering at NIT Patna.",
};

export default function MEStudentsPage() {
  return <DepartmentStudents dept="ME" branch="me" />;
}

