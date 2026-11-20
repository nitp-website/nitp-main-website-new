import DepartmentAchievements from "@/app/components/department/DepartmentAchievements";

export const metadata = {
  title: "Achievements | Chemical Science and Technology | NIT Patna",
  description:
    "Student, faculty, and research achievements for the Department of Chemical Science and Technology at NIT Patna.",
};

export default function ChemAchievementsPage() {
  return (
    <DepartmentAchievements
      dept="Chem"
      code="che"
      departmentName="Chemical Science and Technology"
    />
  );
}
