import DepartmentAchievements from "@/app/components/department/DepartmentAchievements";

export const metadata = {
  title: "Achievements | Architecture and Planning | NIT Patna",
  description:
    "Student, faculty, and research achievements for the Department of Architecture and Planning at NIT Patna.",
};

export default function ArchiAchievementsPage() {
  return (
    <DepartmentAchievements
      dept="Archi"
      code="arch"
      departmentName="Architecture and Planning"
    />
  );
}
