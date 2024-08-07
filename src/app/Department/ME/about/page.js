import BackDepartment from "../../../../components/BackDepartment"


function page() {
    return (
        <div className="flex flex-col p-10 max-sm:p-2">
            <div className="flex flex-col  mb-6">
                <div>
                    <p className="text-red-900 text-3xl max-sm:text-2xl font-bold">
                        ABOUT
                    </p>
                </div>
                <div className="mt-2">
                    <p className="text-gray-500 text-xl font-semibold">
                        MECHANICAL ENGINEERING
                    </p>
                </div>
                <BackDepartment navigate={"/Department/ME"} />
            </div>
            <div className="max-sm:mx-6 max-md:mx-8 mx-20 border p-4 rounded-md shadow-lg shadow-slate-400 backdrop-blur-md">

                {/* section 1 */}
                <div className="mb-10">
                    <p className="text-justify">The Department of Mechanical Engineering was established in 1952 with B. Tech program during the era of Bihar College of Engineering (BCE) which is well-known since 1924 as the sixth oldest Engineering College in India. In 1978, M. Tech Program was started with specializations in &quot;Thermal Turbo Machinery&quot; and &quot;Refrigeration, Air Conditioning and Heat Transfer&quot;. The Bihar College of Engineering was converted to National Institute of Technology Patna in 2004. </p>
                </div>
                <div className="mb-10">
                    <div className="text-red-900 font-bold text-2xl max-sm:text-2xl mb-8">The Department offers the following academic programs:</div>
                    <ol className="list-decimal list-inside ml-5 space-y-4 text-lg max-md:text-[15px] max-sm:text-sm">
                        <li>B. Tech in Mechanical Engineering</li>
                        <li>M.Tech in Mechanical Engineering with specialization in Design Engineering</li>
                        <li>M.Tech in Mechanical Engineering with specialization in Thermal Engineering</li>
                        <li>M.Tech in Mechanical Engineering with specialization in Production Engineering</li>
                        <li>Dual Degree (B.Tech + M.Tech) in Mechanical Engineering with specialization in Manufacturing and Industrial Engineering</li>
                        <li>Ph.D.</li>
                    </ol>
                </div>
                <p className="text-justify my-4">Initially, B.Tech program was started with intake of 20 which has now become 131. M.Tech program is running with a total intake of around 50 for all specializations and the 5 years Dual Degree (B.Tech + M.Tech) program is executing with an intake of 24, whereas, over 200 students are performing research in various fields of Mechanical Engineering in the Ph.D. program. Some prominent research topics in the department are Materials, solid mechanics, product design, manufacturing processes, thermodynamics, heat transfer, gas dynamics, renewable energy, surface engineering, dynamics and control, fluid power systems and operation management.</p>
                <p className="text-justify my-4">The Department has an excellent industrial interaction and contributes to the industry by offering consultancy services and sponsored research projects. Continuously growing numbers of patents and publications in various top multidisciplinary journals is indication of the thriving research environment in the department</p>
            </div>
        </div>
    )
}
export default page