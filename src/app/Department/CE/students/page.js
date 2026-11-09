import DepartmentStudents from "@/app/components/department/DepartmentStudents";

export const metadata = {
  title: "Students | Civil Engineering | NIT Patna",
  description: "Student directory for the Department of Civil Engineering at NIT Patna.",
};

export default function CEStudentsPage() {
  return <DepartmentStudents dept="CE" branch="ce" />;
}

