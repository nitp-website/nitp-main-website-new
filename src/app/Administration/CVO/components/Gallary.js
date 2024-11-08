"use client";
import Image from "next/image";
import React from "react";

export const Scroll = ({ data }) => {

  return (
    <div className="grid grid-cols-1 p-4">
        
      {data.map((item, idx) => (
        <figure key={idx} className=" p-2 rounded-lg ">
          <Image
            height={600}
            width={600}
            src={item.src}
            alt={item.alt}
            className="object-cover rounded-lg"
           
          />
        </figure>
      ))}
      <div className="p-2">
      <h2 className="text-1xl p-2 sm:text-2xl font-semibold text-black text-left mb-4 underline decoration-red-500">
        Videos
      </h2>
  <div className="hidden md:block">
    <iframe 
      src="https://drive.google.com/file/d/1RysHorbHB0f2Ot0z1caKD0-ThWO64bUl/preview" 
      width="600" 
      className=" rounded-lg object-cover" 
      height="400"
    ></iframe>
  </div>

  <div className="hidden md:block mt-3">
    <iframe 
      src="https://drive.google.com/file/d/171_ZsnICJZZjOpdXNXXx8-h5s7FpNr46/preview" 
      width="600" 
      className=" rounded-lg object-cover" 
      height="400"
    ></iframe>
  </div>
  <div className="hidden md:block mt-3">
    <iframe 
      src="https://drive.google.com/file/d/13-jZ4mjRrBFZMtmH3dG6qw9X3DaGrdY2/preview" 
      width="600" 
      className=" rounded-lg object-cover" 
      height="400"
    ></iframe>
  </div>
  
</div>

</div>
  );
};

const GalleryData = {
  images: [
    {
        src: "https://i.postimg.cc/Mp2hQKKF/home2.png",
        alt: "Home 2",
    },
    {
      src: "https://i.postimg.cc/K8PCrS1v/home1.png",
      alt: "Home 1",
    },
    
    {
      src: "https://i.postimg.cc/8Pr2crDv/IMG-4068.jpg",
      alt: "Image 4068",
    },
    {
      src: "/DSC_BB.jpg",
      alt: "Image 4069",
    },
    {
      src: "/DSC_AA.jpg",
      alt: "Image 4070",
    },
    {
      src: "/DSC_0118.jpg",
      alt: "Image 4071",
    },
    {
      src: "/DSC_0103.JPG",
      alt: "Image 4072",
    },
    {
      src: "/DSC_0102.JPG",
      alt: "Image 4073",
    },
    {
      src: "/DSC_0098.JPG",
      alt: "Image 4074",
    },
    {
      src: "/bihta1.jpg",
      alt: "Image 4075",
    },
    {
      src: "/bihta2.jpg",
      alt: "Image 4076",
    },
  ],
};

// Gallery component
const Gallery = () => {
  return (
    <>
      <h2 className="text-1xl p-2 sm:text-2xl font-semibold text-black text-left mb-4 underline decoration-red-500">
        Image Gallery
      </h2>
      <Scroll data={GalleryData.images} />
    </>
  );
};

export default Gallery;
