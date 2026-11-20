import DepartmentAchievements from "@/app/components/department/DepartmentAchievements";

export const metadata = {
  title: "Achievements | Electronics and Communication Engineering | NIT Patna",
  description:
    "Student, faculty, and research achievements for the Department of Electronics and Communication Engineering at NIT Patna.",
};

export default function ECEAchievementsPage() {
  return (
    <DepartmentAchievements
      dept="ECE"
      code="ece"
      departmentName="Electronics and Communication Engineering"
    />
  );
}
