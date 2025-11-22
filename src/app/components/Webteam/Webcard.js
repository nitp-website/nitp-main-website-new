import React, { useState, useEffect } from "react";
import "remixicon/fonts/remixicon.css";

const Webcard = ({ name, email, desg, image, url, interests }) => {
  // --- 1. Google Drive Link Fixer ---
  const getDirectImage = (imgUrl) => {
    if (!imgUrl) return null;
    const idMatch = imgUrl.match(/id=([a-zA-Z0-9_-]+)/) || imgUrl.match(/\/d\/([a-zA-Z0-9_-]+)/);
    if (imgUrl.includes("drive.google.com") && idMatch && idMatch[1]) {
      return `https://drive.google.com/thumbnail?id=${idMatch[1]}&sz=w500`;
    }
    return imgUrl;
  };

  // --- 2. Image State ---
  const realImage = getDirectImage(image);
  const customAvatar = `https://api.dicebear.com/7.x/notionists/svg?seed=${name}&backgroundColor=e5e7eb`;
  const [imgSrc, setImgSrc] = useState(realImage || customAvatar);

  useEffect(() => {
    setImgSrc(realImage || customAvatar);
  }, [realImage, customAvatar]);

  const handleError = () => {
    if (imgSrc !== customAvatar) setImgSrc(customAvatar);
  };

  // --- 3. Data Parsing ---
  const urls = url ? url.split(" & ") : [];
  const linkedinUrl = urls.find((u) => u.includes("linkedin")) || "#";
  const githubUrl = urls.find((u) => u.includes("github")) || "#";
  
  const desgs = desg ? desg.split(" & ") : ["Member"];
  const mainRole = desgs[0];

  const isAshish = email && email.trim() === "ashishk.dd22.cs@nitp.ac.in";
  const portfolioUrl = "https://www.ashishk.online/";

  // Reusable Social Button Component
  const SocialButtons = ({ insideHover = false }) => (
    <div className={`flex items-center gap-4 ${insideHover ? "mt-4 pt-3 border-t border-gray-200 w-full justify-center" : "mt-auto mb-6 absolute bottom-0 group-hover:opacity-0 transition-opacity duration-300"}`}>
      
      {/* Portfolio or Email */}
      {isAshish ? (
        <a
          href={portfolioUrl}
          target="_blank"
          rel="noopener noreferrer"
          className={`flex items-center justify-center rounded-full transition-all ${insideHover ? "w-10 h-10 bg-red-600 text-white hover:scale-110 shadow-md" : "w-9 h-9 bg-red-600 text-white shadow-lg shadow-red-200"}`}
          title="Personal Portfolio"
        >
          <i className="ri-global-line text-lg"></i>
        </a>
      ) : (
        <a
          href={`mailto:${email}`}
          className={`flex items-center justify-center rounded-full transition-all ${insideHover ? "w-10 h-10 bg-red-50 text-red-600 hover:bg-red-600 hover:text-white hover:scale-110 shadow-sm border border-red-100" : "w-9 h-9 bg-red-50 text-red-600 shadow-sm"}`}
          title="Send Email"
        >
          <i className={insideHover ? "ri-mail-send-fill text-lg" : "ri-mail-send-line text-lg"}></i>
        </a>
      )}

      {/* LinkedIn */}
      <a href={linkedinUrl} target="_blank" rel="noopener noreferrer" className={`${insideHover ? "text-gray-500 hover:text-[#0077b5] scale-110" : "text-gray-400 hover:text-[#0077b5]"} text-2xl transition-colors`}>
        <i className="ri-linkedin-box-fill"></i>
      </a>

      {/* GitHub */}
      <a href={githubUrl} target="_blank" rel="noopener noreferrer" className={`${insideHover ? "text-gray-500 hover:text-black scale-110" : "text-gray-400 hover:text-black"} text-2xl transition-colors`}>
        <i className="ri-github-fill"></i>
      </a>
    </div>
  );

  return (
    <div className="group relative w-full max-w-[300px] h-[400px] bg-white rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_40px_-10px_rgba(0,0,0,0.15)] transition-all duration-500 overflow-hidden mx-auto flex flex-col border border-gray-100">
      
      {/* --- Top Section: Image --- */}
      <div className="relative h-[60%] w-full overflow-hidden bg-gray-50">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-white"></div>
        <img
          src={imgSrc}
          alt={name}
          onError={handleError}
          referrerPolicy="no-referrer"
          className="absolute bottom-0 left-1/2 transform -translate-x-1/2 h-[95%] w-auto object-contain transition-transform duration-500 group-hover:scale-105 drop-shadow-xl"
          loading="lazy"
        />
      </div>

      {/* --- Bottom Section: Static Info --- */}
      <div className="relative h-[40%] w-full bg-white flex flex-col items-center pt-5 px-4 z-10">
        <div className="text-center mb-3 group-hover:opacity-0 transition-opacity duration-200">
          <h3 className="text-lg font-bold text-gray-900 leading-tight">{name}</h3>
          <span className="text-xs font-bold text-red-700 uppercase tracking-wider mt-1 block">
            {mainRole}
          </span>
        </div>
        <SocialButtons insideHover={false} />
      </div>

      {/* --- HOVER OVERLAY (Expanded Height) --- */}
      {/* h-[60%] ensures it covers the bottom 40% + 20% of the image (half the image) */}
      <div className="absolute bottom-0 w-full h-[60%] bg-white/95 backdrop-blur-xl border-t border-white/50 shadow-[0_-10px_30px_rgba(0,0,0,0.05)] 
                      transform translate-y-[110%] group-hover:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.33,1,0.68,1)] z-20 
                      flex flex-col items-center p-6">
        
        {/* Title in Overlay (Optional, helps context) */}
        <h4 className="text-sm font-bold text-gray-900 mb-2 opacity-80">{name}</h4>

        {/* Description Text */}
        <div className="flex-grow w-full overflow-y-auto scrollbar-hide">
           <p className="text-[13px] text-gray-600 leading-relaxed font-medium text-center">
             {interests || "Member of the Web Development Cell, NIT Patna. Contributed to the digital presence of the institute."}
           </p>
        </div>
        
        {/* Buttons inside Overlay */}
        <SocialButtons insideHover={true} />
        
      </div>

    </div>
  );
};

export default Webcard;