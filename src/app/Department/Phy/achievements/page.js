import DepartmentAchievements from "@/app/components/department/DepartmentAchievements";

export const metadata = {
  title: "Achievements | Applied Physics and Material Engineering | NIT Patna",
  description:
    "Student, faculty, and research achievements for the Department of Applied Physics and Material Engineering at NIT Patna.",
};

export default function PhyAchievementsPage() {
  return (
    <DepartmentAchievements
      dept="Phy"
      code="phy"
      departmentName="Applied Physics and Material Engineering"
    />
  );
}
