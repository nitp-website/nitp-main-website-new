import BackDepartment from "../../../../components/BackDepartment"


function page(){
    return (
      <div className=" flex flex-col p-5 h-screen">
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