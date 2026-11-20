import DepartmentAchievements from "@/app/components/department/DepartmentAchievements";

export const metadata = {
  title: "Achievements | Mechatronics and Automation Engineering | NIT Patna",
  description:
    "Student, faculty, and research achievements for the Department of Mechatronics and Automation Engineering at NIT Patna.",
};

export default function MechatronicsAchievementsPage() {
  return (
    <DepartmentAchievements
      dept="Mechatronics"
      code="mae"
      departmentName="Mechatronics and Automation Engineering"
    />
  );
}
