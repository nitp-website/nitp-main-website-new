import { useEffect, useState } from "react";

function DepartmentNotify1({ title, link, important, attachments, date }) {
    const parsedLink = link ? JSON.parse(link).url : "";
    const [textCol, setTextCol] = useState("black");
    const color = ["yellow-700", "black"];
    let flag = 0;

    useEffect(() => {
        const interval = setInterval(() => {
            flag = flag === 0 ? 1 : 0;
            setTextCol(color[flag]);
        }, 1000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="pb-3 border-b border-red-950">
            <span className="text-sm text-gray-500">{new Date(date).toDateString()}</span>
            <p className={`font-medium ${(important === 1) ? `text-${textCol}` : ""}`}>
                {parsedLink && parsedLink.length > 5 ? (
                    <a href={parsedLink} className="hover:text-blue-500">{title}</a>
                ) : (
                    title
                )}
            </p>
        </div>
    );
}

export default DepartmentNotify1;