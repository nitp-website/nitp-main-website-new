import DepartmentStudents from "@/app/components/department/DepartmentStudents";

export const metadata = {
  title: "Students | Mechatronics and Automation Engineering | NIT Patna",
  description: "Student directory for the Department of Mechatronics and Automation Engineering at NIT Patna.",
};

export default function MechatronicsStudentsPage() {
  return <DepartmentStudents dept="Mechatronics" branch="mae" />;
}

