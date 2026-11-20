import DepartmentAchievements from "@/app/components/department/DepartmentAchievements";

export const metadata = {
  title: "Achievements | Civil Engineering | NIT Patna",
  description:
    "Student, faculty, and research achievements for the Department of Civil Engineering at NIT Patna.",
};

export default function CEAchievementsPage() {
  return (
    <DepartmentAchievements
      dept="CE"
      code="ce"
      departmentName="Civil Engineering"
    />
  );
}
