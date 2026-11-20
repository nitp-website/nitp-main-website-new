import DepartmentAchievements from "@/app/components/department/DepartmentAchievements";
import BackDepartment from "@/app/components/department/BackDepartment";

export const metadata = {
  title: "Achievements | Materials Science and Engineering | NIT Patna",
  description:
    "Student, faculty, and research achievements for the Department of Materials Science and Engineering at NIT Patna.",
};

export default function MaterialAchievementsPage() {
  return (
    <div className="p-4 sm:p-6 lg:p-10 text-black">
      <div className="mb-4">
        <BackDepartment navigate={"/Department/Material"} />
      </div>
      <DepartmentAchievements
        dept="Material"
        code="mse"
        departmentName="Materials Science and Engineering"
      />
    </div>
  );
}
