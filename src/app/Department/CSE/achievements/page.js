import DepartmentAchievements from "@/app/components/department/DepartmentAchievements";

export const metadata = {
  title: "Achievements | Computer Science and Engineering | NIT Patna",
  description:
    "Student, faculty, and research achievements for the Department of Computer Science and Engineering at NIT Patna.",
};

export default function CSEAchievementsPage() {
  return (
    <DepartmentAchievements
      dept="CSE"
      code="cse"
      departmentName="Computer Science and Engineering"
    />
  );
}
