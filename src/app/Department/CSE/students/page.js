import DepartmentStudents from "@/app/components/department/DepartmentStudents";

export const metadata = {
  title: "Students | Computer Science and Engineering | NIT Patna",
  description: "Student directory for the Department of Computer Science and Engineering at NIT Patna.",
};

export default function CSEStudentsPage() {
  return <DepartmentStudents dept="CSE" branch="cse" />;
}

