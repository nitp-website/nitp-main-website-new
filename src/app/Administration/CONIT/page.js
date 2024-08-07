import React from "react";
import "./style.css";

const President = () => {
  return (
    <div className="main-container mb-10">
      <div className="maincard mb-3 pt-20">
        <div className="e-card playing bg-white w-4/5">
          <div className="wave"></div>
          <div className="wave"></div>
          <div className="wave"></div>
          <div className="infotop pt-10">
            <img
              className="icon"
              src="https://i.postimg.cc/wBxrhY30/Dharmendra-Pradhan.webp"
              alt="President"
            />
            <p className="description text-neutral-400 italic" >Hon'ble Education Minister</p>
            <div className="hidden md:block">
              <br />
            </div>
            Shri Dharmendra Pradhan
            <br />
            <div className="description1 md:mt-0 m-9 md:m-20 mb-5 md:mb-5">
            Hon'ble Union Cabinet Minister, MoE, GoI
            Chairman, Council of NITs
            </div>
            <div className="md:pb-11">
            <button type="button" class="text-white bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"><a
                href="https://www.education.gov.in/"
                target="_blank"
                rel="noopener noreferrer"
              >
               Ministry of Education
              </a></button>  

              <button type="button" class="text-white bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"><a
                href="https://nitcouncil.org.in/"
                target="_blank"
                rel="noopener noreferrer"
              >
              NIT Council
              </a></button>

              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default President;
