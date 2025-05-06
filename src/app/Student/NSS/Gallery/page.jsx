import Image from "next/image";
import React from "react";

const NSSGalleryPage = () => {
  const images = [
    "https://lh3.googleusercontent.com/d/1GOOjMfLAHYICSaYoXhrz_ojDwfAfRDcm=w1000",
    "https://lh3.googleusercontent.com/d/1MXwdQDmaQRBIgPM9Okas7PPuZD653riu=w1000",
    "https://lh3.googleusercontent.com/d/1tHZwolFOqb4eFpW20O4b9ers81XJQxhy=w1000",
    "https://lh3.googleusercontent.com/d/1ugKHFF5YCXGrkOZqrN6yCaKhkk39_fwb=w1000",
    "https://lh3.googleusercontent.com/d/15mzxi9ewWCORGY7M-82GlLGIT4so1Uh_=w1000",
    "https://lh3.googleusercontent.com/d/1EBoxbXNZ0UxKtmHzX82bYde1jY5GxJwi=w1000",
  ];

  return (
    <div className="flex flex-col">
      <h2 className="text-3xl font-bold text-red-800 text-center mb-6">
        Gallery
      </h2>
      <div className="w-full h-fit px-2 py-2 bg-white flex flex-col gap-2 sm:gap-3">
        <div className="w-full flex flex-col sm:flex-row gap-2 sm:gap-3">
          <div className="flex w-full sm:w-[33%] flex-row sm:flex-col gap-2 sm:gap-3">
            <div className="w-[55vw] sm:w-full h-48 sm:h-80 rounded-lg overflow-hidden">
              <img alt="img" src={images[0]} className="w-full h-full cover" />
            </div>
            <div className="w-[45vw] sm:w-full h-48 sm:h-64 rounded-lg overflow-hidden">
              <img alt="img" src={images[1]} className="w-full h-full cover" />
            </div>
          </div>
          <div className="flex w-full sm:w-[33%] flex-row sm:flex-col gap-2 sm:gap-3">
            <div className="w-[45vw] sm:w-full h-48 sm:h-64 rounded-lg overflow-hidden">
              <img alt="img" src={images[2]} className="w-full h-full cover" />
            </div>
            <div className="w-[55vw] sm:w-full h-48 sm:h-80 rounded-lg overflow-hidden">
              <img alt="img" src={images[3]} className="w-full h-full cover" />
            </div>
          </div>
          <div className="flex w-full sm:w-[33%] flex-row sm:flex-col gap-2 sm:gap-3">
            <div className="w-[55vw] sm:w-full h-48 sm:h-80 rounded-lg overflow-hidden">
              <img alt="img" src={images[4]} className="w-full h-full cover" />
            </div>
            <div className="w-[45vw] sm:w-full h-48 sm:h-64 rounded-lg overflow-hidden">
              <img alt="img" src={images[5]} className="w-full h-full cover" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NSSGalleryPage;
