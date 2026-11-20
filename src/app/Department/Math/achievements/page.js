import DepartmentAchievements from "@/app/components/department/DepartmentAchievements";

export const metadata = {
  title: "Achievements | Mathematics and Computing Technology | NIT Patna",
  description:
    "Student, faculty, and research achievements for the Department of Mathematics and Computing Technology at NIT Patna.",
};

export default function MathAchievementsPage() {
  return (
    <DepartmentAchievements
      dept="Math"
      code="maths"
      departmentName="Mathematics and Computing Technology"
    />
  );
}
