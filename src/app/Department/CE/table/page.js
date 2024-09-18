import BackDepartment from "../../../components/department/BackDepartment";


export default function lab(){
    return (
        <div className=" flex flex-col p-10 max-sm:p-2 text-black">  
            <div className="flex flex-col  mb-16">
                <div>
                    <p className="text-red-900 text-2xl  font-bold">
                       Time Table
                    </p>
                </div>
                <div className="mt-2">
                    <p className="text-gray-500 text-base font-semibold">
                    Civil
                    </p>
                </div>
                <BackDepartment navigate={"/Department/CE"}/>

            </div>

            <div className="max-sm:mx-6 max-md:mx-8 mx-20 border p-4 rounded-md shadow-lg shadow-slate-400 backdrop-blur-md min-h-screen">

            <ul>
                <li className="style-disc">
                    <a href="https://drive.google.com/file/d/1TTblz48XLiUYs5JRHlqa37VWqpyWXb_w/view"> B.Tech Civil Engineering (Effective from 2022-2023 onward)</a>

                </li>    
            </ul>   
            </div>
        </div>
    )
}