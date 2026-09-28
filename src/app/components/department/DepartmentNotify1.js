import React, { useEffect, useState } from "react";
import { FiClock, FiDownload, FiStar } from "react-icons/fi";
import { NoticeBadge, NoticeTitle, parseNoticeLink, getValidAttachments } from "@/lib/noticeHelpers";

function DepartmentNotify1(props) {
    const notice = props.notice;
    const timestamp = props.date || notice?.openDate || notice?.updatedAt || notice?.timestamp;
    const noticeObj = notice || {
        openDate: timestamp,
        timestamp,
        important: props.important,
        is_new: props.is_new,
    };

    const validAttachments = getValidAttachments(props.attachments || notice?.attachments);
    const parsedLink = parseNoticeLink(props.link || notice?.notice_link);

    const hasAttachments = validAttachments.length > 0;
    const normalizeUrl = (u) => (u ? String(u).trim().replace(/\/+$/, "") : "");
    const isLinkInAttachments =
        hasAttachments &&
        parsedLink &&
        validAttachments.some(
            (att) => att?.url && normalizeUrl(att.url) === normalizeUrl(parsedLink)
        );
    const showLink = Boolean(parsedLink && !isLinkInAttachments);
    const hasAnyAction = hasAttachments || showLink;

    const [textCol, setTextCol] = useState("red-600");
    const isImportant =
        props.important === 1 ||
        props.important === true ||
        notice?.important === 1 ||
        notice?.important === true;

    useEffect(() => {
        if (isImportant) {
            const colors = ["yellow", "red-600"];
            let flag = 0;
            const interval = setInterval(() => {
                flag = flag === 0 ? 1 : 0;
                setTextCol(colors[flag]);
            }, 1000);

            return () => clearInterval(interval);
        }
    }, [isImportant]);

    const formattedDate = (() => {
        if (!timestamp) return null;
        const parsed = typeof timestamp === "string" ? parseInt(timestamp, 10) : timestamp;
        const d = new Date(parsed);
        if (isNaN(d.getTime())) return null;
        return d.toLocaleDateString("en-GB", {
            day: "2-digit",
            month: "short",
            year: "numeric",
        });
    })();

    return (
        <div
            className={`mb-3 pl-4 pr-3 py-3 bg-white hover:bg-slate-50 border-l-4 ${
                hasAnyAction || isImportant ? "border-red-600" : "border-gray-300"
            } rounded shadow-sm transition-all duration-200`}
        >
            <div className="flex items-start gap-2 relative">
                <div className="flex items-center mt-1 flex-shrink-0">
                    <NoticeBadge notice={noticeObj} starType="fi" />
                </div>
                <div className="flex-1 min-w-0">
                    {formattedDate && (
                        <span className="text-xs text-gray-500 block mb-1">
                            {formattedDate}
                        </span>
                    )}
                    <div className="font-medium text-[15px] text-gray-900 mb-2 leading-snug">
                        <NoticeTitle
                            title={props.title || notice?.title}
                            additionalTitle={props.notice?.additional_title || props.additional_title}
                        />
                    </div>

                    {/* Display All Valid Attachments */}
                    {hasAttachments && (
                        <div className="flex flex-wrap gap-2 mt-2">
                            {validAttachments.map((attachment, index) => {
                                const caption =
                                    attachment?.caption?.trim() ||
                                    (validAttachments.length > 1
                                        ? `Attachment ${index + 1}`
                                        : "View Notice");
                                return (
                                    <a
                                        key={index}
                                        href={attachment.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-1.5 text-xs text-red-700 bg-red-50 hover:bg-red-100 hover:text-red-900 px-2.5 py-1 rounded transition-colors font-medium border border-red-200"
                                    >
                                        <FiDownload className="w-3.5 h-3.5 flex-shrink-0" />
                                        <span className="truncate max-w-[220px]">{caption}</span>
                                    </a>
                                );
                            })}
                        </div>
                    )}

                    {/* Display Notice Link if not redundant */}
                    {showLink && (
                        <div className="mt-2">
                            <a
                                href={parsedLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-1.5 text-xs text-red-700 bg-red-50 hover:bg-red-100 hover:text-red-900 px-2.5 py-1 rounded transition-colors font-medium border border-red-200"
                            >
                                <FiDownload className="w-3.5 h-3.5 flex-shrink-0" />
                                <span>View Notice</span>
                            </a>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default DepartmentNotify1;
