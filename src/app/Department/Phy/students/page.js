import DepartmentStudents from "@/app/components/department/DepartmentStudents";

export const metadata = {
  title: "Students | Physics | NIT Patna",
  description: "Student directory for the Department of Physics at NIT Patna.",
};

export default function PhyStudentsPage() {
  return <DepartmentStudents dept="Phy" branch="phy" />;
}

