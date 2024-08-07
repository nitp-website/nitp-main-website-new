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
              src="https://i.postimg.cc/G2Nx8Fnc/Screenshot-2024-07-01-172617.png"
              alt="President"
            />
            <p className="description text-neutral-400 italic" >Her Excellency Honourable</p>
            <div className="hidden md:block">
              <br />
            </div>
            Smt. Droupadi Murmu
            <br />
            <div className="description1 md:mt-0 m-9 md:m-20 mb-5 md:mb-5">
              The President of India is the ex officio visitor of the Institute.
            </div>
            <div className="md:pb-11">
                

              <button type="button" class="text-white bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"><a
                href="https://www.presidentofindia.gov.in/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Hon’ble President of India
              </a></button>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default President;
