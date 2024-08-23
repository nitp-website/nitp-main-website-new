

function DepartmentNotify(props) {
    const link = props.link;
    if(link && link.length > 5){
        return (
            <a href={`${link}`} className=" my-1 font-semibold text-[14px] flex text-start hover:text-blue-500"> 
                <div className="flex items-center">
                    <div className="border rounded-full bg-black h-[10px] w-[10px] mr-2"></div> 
                    {props.title}
                </div>
            </a>
        )
    }
    return (
        <div className="my-1 flex text-start">
            <div className="flex items-center">
                <div className="border rounded-full bg-black h-[10px] w-[10px] mr-2"></div> 
                {props.title}
            </div>
        </div>
    )

}

export default DepartmentNotify