import DepartmentAchievements from "@/app/components/department/DepartmentAchievements";

export const metadata = {
  title: "Achievements | Mechanical Engineering | NIT Patna",
  description:
    "Student, faculty, and research achievements for the Department of Mechanical Engineering at NIT Patna.",
};

export default function MEAchievementsPage() {
  return (
    <DepartmentAchievements
      dept="ME"
      code="me"
      departmentName="Mechanical Engineering"
    />
  );
}
