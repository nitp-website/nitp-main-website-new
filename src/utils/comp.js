export function Comp({content}){
    return(
        <div className="flex flex-col mt-8 lg:ml-10">
            <ul>
                {content.map((points,i)=>{
                    return(
                        <li key={i} className="list-disc ml-4 lg:text-base text-sm
                        pb-2">
                           {points}
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}