import DepartmentStudents from "@/app/components/department/DepartmentStudents";

export const metadata = {
  title: "Students | Electronics and Communication Engineering | NIT Patna",
  description: "Student directory for the Department of Electronics and Communication Engineering at NIT Patna.",
};

export default function ECEStudentsPage() {
  return <DepartmentStudents dept="ECE" branch="ece" />;
}

