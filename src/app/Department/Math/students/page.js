import DepartmentStudents from "@/app/components/department/DepartmentStudents";

export const metadata = {
  title: "Students | Mathematics and Computing Technology | NIT Patna",
  description: "Student directory for the Department of Mathematics and Computing Technology at NIT Patna.",
};

export default function MathStudentsPage() {
  return <DepartmentStudents dept="Math" branch="maths" />;
}

