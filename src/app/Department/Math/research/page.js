import BackDepartment from "../../../components/department/BackDepartment"


function page(){
    return (
      <div className=" flex flex-col p-5 h-screen text-black">
        <div className="flex flex-col md:ml-10">
          <div>
            <p className="text-red-900 text-3xl font-bold">
              Research Highlights
            </p>
          </div>
          <BackDepartment navigate={"/Department/Math"}/>
        </div>
      </div>
    )
}
export default page