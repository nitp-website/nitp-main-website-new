import { useEffect, useState } from "react";
import { FiClock, FiDownload, FiStar } from 'react-icons/fi';

function DepartmentNotify1(props) {
    const link = props.link ? JSON.parse(props.link).url : props.attachments?.[0]?.url || "";
    const color = ["yellow", "red-600"];
    const [textCol, settextCol] = useState("red-600");
    let flag = 0;

    useEffect(() => {
        if (props.important === 1) {
            const interval = setInterval(() => {
                flag = flag === 0 ? 1 : 0;
                settextCol(color[flag]);
            }, 1000);
            
            return () => clearInterval(interval);
        }
    }, [props.important]);

    // Format date if timestamp exists
    const formatDate = (timestamp) => {
        if (!timestamp) return null;
        const date = new Date(parseInt(timestamp));
        if (isNaN(date)) return null;
        return new Intl.DateTimeFormat("en-GB", {
            day: "2-digit",
            month: "short",
            year: "numeric",
        }).format(date);
    };

    const formattedDate = formatDate(props.timestamp);
    
    const NoticeContent = () => (
        <div className={`flex items-start ${props.important === 1 ? 'relative' : ''}`}>
            {props.important === 1 && (
                <div className="absolute -left-6 top-0">
                    <FiStar className={`text-${textCol} fill-current w-4 h-4`} />
                </div>
            )}
            <div className="flex-1">
                <div className="font-medium text-[15px] mb-1">
                    {props.title}
                </div>
                {formattedDate && (
                    <div className="text-xs text-gray-500 mb-1 flex items-center">
                        <FiClock className="inline mr-1 w-3 h-3" />
                        {formattedDate}
                    </div>
                )}
            </div>
        </div>
    );

    if (link && link.length > 5) {
        return (
            <div className="mb-3 pl-6 pr-3 py-3 bg-white hover:bg-slate-50 border-l-4 border-red-600 rounded shadow-sm transition-all duration-200">
                <a href={link} target="_blank" rel="noopener noreferrer" className="block">
                    <NoticeContent />
                    <div className="text-xs text-red-600 mt-1 flex items-center">
                        <FiDownload className="inline mr-1 w-3 h-3" />
                        View Notice
                    </div>
                </a>
            </div>
        );
    }
    
    return (
        <div className="mb-3 pl-6 pr-3 py-3 bg-white hover:bg-slate-50 border-l-4 border-gray-300 rounded shadow-sm transition-all duration-200">
            <NoticeContent />
        </div>
    );
}

function AttachmentsCompo(props) {
    const link = props.link;
    const [textCol, settextCol] = useState("red-600");
    
    return (
        <div className="mb-3 pl-4 pr-3 py-3 bg-white hover:bg-slate-50 border-l-4 border-blue-500 rounded shadow-sm transition-all duration-200">
            <a 
                href={link} 
                className="block" 
                target="_blank"
                rel="noopener noreferrer"
            >
                <div className="font-medium text-[15px] mb-1">
                    {props.title}
                </div>
                <div className="text-xs text-blue-500 mt-1 flex items-center">
                    <FiDownload className="inline mr-1 w-3 h-3" />
                    Download Attachment
                </div>
            </a>
        </div>
    );
}

export default DepartmentNotify1;
