import Image from "next/image";

function FacultyCards(props) {
  return (
    <button onClick={()=>console.log("hii")} className="bg-transparent rounded-lg shadow-lg shadow-slate-600 items-center
    h-[310px] w-[250px] [perspective:1000px] group">
        <div className="relative h-full w-full group-hover:my-rotate-y-180 duration-500
         [transform-style:preserve-3d]">
            <div className="absolute flex flex-col items-center w-full h-full
            p-5 bg-amber-50 [backface-visibility:hidden]">
                <Image
                    src={props.img}
                    alt="profile-pic"
                    height="240"
                    width="240"
                    className="mt-2 h-[150px] w-[150px] rounded-lg"
                />
                <div className="mt-6">
                    <p className="text-red-900 font-semibold text-center">
                        {props.name}
                    </p>
                    <p className="text-center font-semibold">
                        {props.desig}
                    </p>
                </div>
            </div>
            <div className="absolute w-full h-full bg-amber-100 [backface-visibility:hidden]
            my-rotate-y-180 flex flex-col items-center">
                <div className="p-5">
                    <p className="text-center text-lg font-semibold text-red-900">
                        Research Interest
                    </p>
                    <p className="text-center mt-4">
                        {props.research}
                    </p>
                </div>

            </div>
        </div>

    </button>
  )
}

export default FacultyCards