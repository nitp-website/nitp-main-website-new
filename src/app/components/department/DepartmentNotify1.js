import { useEffect, useState } from "react";


function DepartmentNotify1(props) {
    const link = props.link;
    const color = ["yellow-700", "black"];
    const [textCol, settextCol] = useState("black");
    var flag = 0;
    useEffect(()=>{
        const interval = setInterval(()=>{
            flag -= 1;
            if(flag < 0){
                flag = 1;
            }
            settextCol(color[flag]);
        },1000)
        return ()=> clearInterval(interval)
    },[])
    if(link && link.length > 5){
        return (
            <div>
                <a href={`${link}`} className={`${(props.important === 1)? `text-${textCol}`:""} my-1 font-semibold text-[14px] flex text-start hover:text-blue-500`}> 
                    <div className="flex items-center">
                        <div className="border rounded-full bg-black h-[10px] w-[10px] mr-2"></div> 
                        {props.title}
                    </div>
                </a>
                {/* {!(props.attachments.length > 0)?
                <div className="ml-10">
                    {attachments.map((att)=>{
                        return (
                            <AttachmentsCompo 
                                {title = att.caption || ""}
                                {link = at.url}
                            />
                        )
                    })}
                </div>
                :
                <div></div>} */}
            </div>
        )
    }
    return (
        <div className="my-1 flex text-start">
            <div className="flex items-center">
                <div className={`${(props.important === 1)? `text-${textCol}`:""} border rounded-full bg-black h-[10px] w-[10px] mr-2`}></div> 
                {props.title}
            </div>
        </div>
    )

}

function AttachmentsCompo(props){
    const link = props.link;
    return(
        <a href={`${link}`} className={`${(props.important === 1)? `text-${textCol}`:""} my-1 font-semibold text-[14px] flex text-start hover:text-blue-500`}> 
            <div className="flex items-center">
                <div className="border rounded-full bg-black h-[10px] w-[10px] mr-2"></div> 
                {props.title}
            </div>
        </a>
    )
}

export default DepartmentNotify1