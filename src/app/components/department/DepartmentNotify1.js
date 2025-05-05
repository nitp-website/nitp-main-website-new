import { useEffect, useState } from "react";

function DepartmentNotify1(props) {
    const link = props.link ? JSON.parse(props.link).url : props.attachments?.[0]?.url || "";
    const color = ["yellow-700", "black"];
    const [textCol, settextCol] = useState("black");
    let flag = 0;

    useEffect(() => {
        const interval = setInterval(() => {
            flag = flag === 0 ? 1 : 0;
            settextCol(color[flag]);
        }, 1000);
        
        return () => clearInterval(interval);
    }, []);

    if (link && link.length > 5) {
        return (
            <div>
                <a href={link} className={`${(props.important === 1) ? `text-${textCol}` : ""} my-1 font-semibold text-[14px] flex text-start hover:text-blue-700`}>
                    <div className="flex items-center">
                        <div className="border rounded-full bg-black h-[10px] w-[10px] mr-2"></div>
                        {props.title}
                    </div>
                </a>
                {/* Attachments rendering logic can go here */}
            </div>
        );
    }
    
    return (
        <div className="my-1 flex text-start">
            <div className="flex items-center">
                <div className={`${(props.important === 1) ? `text-${textCol}` : ""} border rounded-full bg-black h-[10px] w-[10px] mr-2`}></div>
                {props.title}
            </div>
        </div>
    );
}

function AttachmentsCompo(props) {
    const link = props.link;
    return (
        <a href={link} className={`${(props.important === 1) ? `text-${textCol}` : ""} my-1 font-semibold text-[14px] flex text-start hover:text-blue-500`} target="_blank">
            <div className="flex items-center">
                <div className="border rounded-full bg-black h-[10px] w-[10px] mr-2"></div>
                {props.title}
            </div>
        </a>
    );
}

export default DepartmentNotify1;
