import DepartmentAchievements from "@/app/components/department/DepartmentAchievements";

export const metadata = {
  title: "Achievements | Electrical Engineering | NIT Patna",
  description:
    "Student, faculty, and research achievements for the Department of Electrical Engineering at NIT Patna.",
};

export default function EEAchievementsPage() {
  return (
    <DepartmentAchievements
      dept="EE"
      code="ee"
      departmentName="Electrical Engineering"
    />
  );
}
