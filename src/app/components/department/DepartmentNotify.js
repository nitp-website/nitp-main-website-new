import React from 'react';

function DepartmentNotify(props) {
    let link = '';

    // Parse the link if it's a JSON string
    if (props.link) {
        try {
            const parsedLink = JSON.parse(props.link);
            link = parsedLink.url || '';
        } catch (error) {
            console.error('Error parsing link:', error);
        }
    }

    if (link && link.length > 5) {
        return (
            <a href={link} className="my-1 font-semibold text-[14px] flex text-start hover:text-blue-500">
                <div className="flex items-center">
                    <div className="border rounded-full bg-black h-[10px] w-[10px] mr-2"></div>
                    {props.title}
                </div>
            </a>
        );
    }

    return (
        <div className="my-1 flex text-start">
            <div className="flex items-center">
                <div className="border rounded-full bg-black h-[10px] w-[10px] mr-2"></div>
                {props.title}
            </div>
        </div>
    );
}

export default DepartmentNotify;
