"use client";
import React, { useState } from "react";

export const Scroll = ({ data, videos }) => {
  return (
    <div className="grid grid-cols-1 p-4">
      {data.map((item, idx) => (
        <figure key={idx} className="p-2 rounded-lg">
          <img
            height={600}
            width={600}
            src={item.src}
            alt={item.alt}
            className="object-cover rounded-lg"
            loading="lazy"
          />
        </figure>
      ))}

      {videos && videos.length > 0 && (
        <div className="p-2">
          <h2 className="text-1xl p-2 sm:text-2xl font-semibold text-black text-left mb-4 underline decoration-red-500">
            Videos
          </h2>
          {videos.map((video, idx) => (
            <div key={idx} className="hidden md:block mt-3">
              <iframe
                src={video.src}
                width="600"
                height="400"
                className="rounded-lg object-cover"
                allow="autoplay"
              ></iframe>
              {video.title && (
                <p className="text-center text-sm text-gray-700 mt-2">
                  {video.title}
                </p>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

const GalleryData2024 = {
  images: [
    { src: "https://i.postimg.cc/Mp2hQKKF/home2.png", alt: "Home 2" },
    { src: "https://i.postimg.cc/K8PCrS1v/home1.png", alt: "Home 1" },
    { src: "https://i.postimg.cc/8Pr2crDv/IMG-4068.jpg", alt: "Image 4068" },
    { src: "/DSC_BB.jpg", alt: "Image 4069" },
    { src: "/DSC_AA.jpg", alt: "Image 4070" },
    { src: "/DSC_0118.jpg", alt: "Image 4071" },
    { src: "/DSC_0103.JPG", alt: "Image 4072" },
    { src: "/DSC_0102.JPG", alt: "Image 4073" },
    { src: "/DSC_0098.JPG", alt: "Image 4074" },
    { src: "/bihta1.jpg", alt: "Image 4075" },
    { src: "/bihta2.jpg", alt: "Image 4076" },
  ],
  videos: [
    {
      src: "https://drive.google.com/file/d/1RysHorbHB0f2Ot0z1caKD0-ThWO64bUl/preview",
      title: "Vigilance Awareness Week 2024 – Part 1",
    },
    {
      src: "https://drive.google.com/file/d/171_ZsnICJZZjOpdXNXXx8-h5s7FpNr46/preview",
      title: "Vigilance Awareness Week 2024 – Part 2",
    },
    {
      src: "https://drive.google.com/file/d/13-jZ4mjRrBFZMtmH3dG6qw9X3DaGrdY2/preview",
      title: "Vigilance Awareness Week 2024 – Part 3",
    },
  ],
};

const GalleryData2025 = {
  images: [
    { src: "https://i.postimg.cc/5y0Z0hm7/poster.jpg", alt: "Poster" },
    { src: "https://i.postimg.cc/6qkYXgbX/image.png", alt: "Image 1" },
    { src: "https://i.postimg.cc/PqfG9vwh/image.png", alt: "Image 2" },
    { src: "https://i.postimg.cc/v8gJJscy/image.png", alt: "Image 3" },
    { src: "https://i.postimg.cc/v8gJJscy/image.png", alt: "Image 4" },
    { src: "https://i.postimg.cc/Sxr36Qtz/image.png", alt: "Image 5" },
    { src: "https://i.postimg.cc/VL9VwLw2/image.png", alt: "Image 6" },
    { src: "https://i.postimg.cc/zBRxcqp6/image.png", alt: "Image 7" },
    { src: "https://i.postimg.cc/zBRxcqp6/image.png", alt: "Image 8" },
    { src: "https://i.postimg.cc/zXNxxZWq/image.png", alt: "Image 9" },
  ],
  videos: [
    {
      src: "https://drive.google.com/file/d/17PxAWYk9Rni8y-YzU2gIjsnILushw96a/preview",
      title:
        "Jingles prepared and performed by the SAPTAK-The Music Club of our Institute for the Vigilance Awareness Week 2025",
    },
  ],
};

const Gallery = () => {
  const [activeYear, setActiveYear] = useState("2025");
  const currentData = activeYear === "2024" ? GalleryData2024 : GalleryData2025;

  return (
    <div className="p-4">
      <div className="flex gap-4 mb-4">
        <button
          onClick={() => setActiveYear("2025")}
          className={`px-4 py-2 rounded-md font-semibold ${
            activeYear === "2025"
              ? "bg-red-500 text-white"
              : "bg-gray-200 text-black"
          }`}
        >
          2025
        </button>
        <button
          onClick={() => setActiveYear("2024")}
          className={`px-4 py-2 rounded-md font-semibold ${
            activeYear === "2024"
              ? "bg-red-500 text-white"
              : "bg-gray-200 text-black"
          }`}
        >
          2024
        </button>
      </div>
      <h2 className="text-1xl sm:text-2xl font-semibold text-black text-left mb-4 underline decoration-red-500">
        Image Gallery {activeYear}
      </h2>
      <Scroll data={currentData.images} videos={currentData.videos} />
    </div>
  );
};

export default Gallery;
