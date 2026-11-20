import DepartmentAchievements from "@/app/components/department/DepartmentAchievements";

export const metadata = {
  title: "Achievements | Humanities and Social Sciences | NIT Patna",
  description:
    "Student, faculty, and research achievements for the Department of Humanities and Social Sciences at NIT Patna.",
};

export default function HumanitiesAchievementsPage() {
  return (
    <DepartmentAchievements
      dept="Humanities"
      code="hss"
      departmentName="Humanities & Social Sciences"
    />
  );
}
