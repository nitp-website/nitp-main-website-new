import DepartmentStudents from "@/app/components/department/DepartmentStudents";

export const metadata = {
  title: "Students | Materials Science and Engineering | NIT Patna",
  description: "Student directory for the Department of Materials Science and Engineering at NIT Patna.",
};

export default function MaterialStudentsPage() {
  return <DepartmentStudents dept="Material" branch="mse" />;
}

