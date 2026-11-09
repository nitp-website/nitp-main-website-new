import DepartmentStudents from "@/app/components/department/DepartmentStudents";

export const metadata = {
  title: "Students | Chemical Science and Technology | NIT Patna",
  description: "Student directory for the Department of Chemical Science and Technology at NIT Patna.",
};

export default function ChemStudentsPage() {
  return <DepartmentStudents dept="Chem" branch="che" />;
}

