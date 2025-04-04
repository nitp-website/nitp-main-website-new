import Image from "next/image";
import React from "react";

const EmuGalleryPage = () => {
  const images = [
    "https://lh3.googleusercontent.com/d/1UXZPZGQP7AtoXacLetZXqCTSWWeIkJAj=w1000",
    "https://lh3.googleusercontent.com/d/1Fcc6XYXFNhXVYhS6mqCZhGWK1cJTQIJ6=w1000",
    "https://lh3.googleusercontent.com/d/1FKoEzNiUHS6vNl3Qw72osgYr0QehCQMI=w1000",
    "https://lh3.googleusercontent.com/d/1zE4PWLphrXnkMXFbGdGziON2bJViZZYZ=w1000",
    "https://lh3.googleusercontent.com/d/1DR_fuBCalggghfNyafgW_cZFZeK4qxyG=w1000",
    "https://lh3.googleusercontent.com/d/18Ss3vge9Ywe4nNm0bG1vEfwcoLOP8apH=w1000",
    "https://lh3.googleusercontent.com/d/1efFZpvv6vp-g0_kqALBCjJD6FqFoj4MY=w1000",
  ];

  return (
    <div className="flex flex-col">
      <h2 className="text-3xl font-bold text-red-800 text-center mb-6">
        Gallery
      </h2>
      <div className="w-full h-fit px-2 py-2 bg-white flex flex-col gap-2 sm:gap-3">
        <div className="w-full h-[50vw] rounded-lg overflow-hidden">
          <img
            alt="img"
            className="w-full h-full cover"
            height={100}
            width={100}
            src={images[0]}
          />
        </div>

        <div className="w-full flex flex-col sm:flex-row gap-2 sm:gap-3">
          <div className="flex w-full sm:w-[33%] flex-row sm:flex-col gap-2 sm:gap-3">
            <div className="w-[55vw] sm:w-full h-48 sm:h-80 rounded-lg overflow-hidden">
              <img alt="img" src={images[1]} className="w-full h-full cover" />
            </div>
            <div className="w-[45vw] sm:w-full h-48 sm:h-64 rounded-lg overflow-hidden">
              <img alt="img" src={images[2]} className="w-full h-full cover" />
            </div>
          </div>
          <div className="flex w-full sm:w-[33%] flex-row sm:flex-col gap-2 sm:gap-3">
            <div className="w-[45vw] sm:w-full h-48 sm:h-64 rounded-lg overflow-hidden">
              <img alt="img" src={images[3]} className="w-full h-full cover" />
            </div>
            <div className="w-[55vw] sm:w-full h-48 sm:h-80 rounded-lg overflow-hidden">
              <img alt="img" src={images[4]} className="w-full h-full cover" />
            </div>
          </div>
          <div className="flex w-full sm:w-[33%] flex-row sm:flex-col gap-2 sm:gap-3">
            <div className="w-[55vw] sm:w-full h-48 sm:h-80 rounded-lg overflow-hidden">
              <img alt="img" src={images[5]} className="w-full h-full cover" />
            </div>
            <div className="w-[45vw] sm:w-full h-48 sm:h-64 rounded-lg overflow-hidden">
              <img alt="img" src={images[6]} className="w-full h-full cover" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmuGalleryPage;
