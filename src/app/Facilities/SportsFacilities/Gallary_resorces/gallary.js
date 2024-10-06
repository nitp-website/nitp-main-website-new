"use client";
import Image from "next/image";
import React, { useState } from "react";

// Scroll component
export const Scroll = ({ data }) => {
  const [popupImage, setPopupImage] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(null);

  const openPopup = (index) => {
    setPopupImage(data[index].src);
    setCurrentIndex(index);
  };

  const closePopup = () => {
    setPopupImage(null);
    setCurrentIndex(null);
  };

  const showNextImage = () => {
    if (currentIndex !== null) {
      const nextIndex = (currentIndex + 1) % data.length;
      setPopupImage(data[nextIndex].src);
      setCurrentIndex(nextIndex);
    }
  };

  const showPreviousImage = () => {
    if (currentIndex !== null) {
      const prevIndex = (currentIndex - 1 + data.length) % data.length;
      setPopupImage(data[prevIndex].src);
      setCurrentIndex(prevIndex);
    }
  };

  return (
    <div className="grid grid-cols-2 gap-2 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 p-4">
      {data.map((item, idx) => (
        <figure
          key={idx}
          className="relative overflow-hidden rounded-lg aspect-square"
          onClick={() => openPopup(idx)}
        >
          <Image
            src={item.src}
            alt={item.alt}
            className="object-cover cursor-pointer"
            layout="fill"
          />
        </figure>
      ))}

      {popupImage && (
        <>
          <div
            className="fixed inset-0 p-1 bg-black bg-opacity-50 flex items-center justify-center z-50"
            onClick={closePopup}
          ></div>
          <div className="fixed top-[20%] md:top-[57%] left-1/2 transform -translate-x-1/2 md:-translate-y-1/2 bg-white p-4 sm:p-4 z-50 max-h-[80%] max-w-full overflow-auto shadow-lg">
            <div className="relative bg-white p-1 rounded-lg shadow-lg">
              <button
                className="absolute top-2 right-2 text-black"
                onClick={closePopup}
              >
                ✖
              </button>
              <img src={popupImage} alt="Image" className="max-w-full max-h-[70vh]" />

              <button
                onClick={showPreviousImage}
                className="absolute left-2 top-1/2 transform -translate-y-1/2 px-1 py-1  rounded-lg"
              >
                ←
              </button>
              <button
                onClick={showNextImage}
                className="absolute right-2 top-1/2 transform -translate-y-1/2 px-1 py-1  rounded-lg"
              >
                →
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

const imageData = {
  images: [
    {
      src: "https://picsum.photos/seed/img1/600",
      alt: "Img 1",
    },
    {
      src: "https://picsum.photos/seed/img2/600",
      alt: "Img 2",
    },
    {
      src: "https://picsum.photos/seed/img3/800",
      alt: "Img 3",
    },
    {
      src: "https://picsum.photos/seed/img4/800",
      alt: "Img 4",
    },
    {
      src: "https://picsum.photos/seed/img5/800",
      alt: "Img 5",
    },
    {
      src: "https://picsum.photos/seed/img6/800",
      alt: "Img 6",
    },
    {
      src: "https://picsum.photos/seed/img7/800",
      alt: "Img 7",
    },
    {
      src: "https://picsum.photos/seed/img8/800",
      alt: "Img 8",
    },
    {
      src: "https://picsum.photos/seed/img9/800",
      alt: "Img 9",
    },
    {
      src: "https://picsum.photos/seed/img10/800",
      alt: "Img 10",
    },
    {
      src: "https://picsum.photos/seed/img11/800",
      alt: "Img 11",
    },
    {
      src: "https://picsum.photos/seed/img12/600",
      alt: "Img 12",
    },
    {
      src: "https://picsum.photos/seed/img13/800",
      alt: "Img 13",
    },
    {
      src: "https://picsum.photos/seed/img14/800",
      alt: "Img 14",
    },
    {
      src: "https://picsum.photos/seed/img15/800",
      alt: "Img 15",
    },
    {
      src: "https://picsum.photos/seed/img16/800",
      alt: "Img 16",
    },
    {
      src: "https://picsum.photos/seed/img17/800",
      alt: "Img 17",
    },
    {
      src: "https://picsum.photos/seed/img18/800",
      alt: "Img 18",
    },
    {
      src: "https://picsum.photos/seed/img19/800",
      alt: "Img 19",
    },
    {
      src: "https://picsum.photos/seed/img20/800",
      alt: "Img 20",
    },
    {
      src: "https://picsum.photos/seed/img21/800",
      alt: "Img 21",
    },
    {
      src: "https://picsum.photos/seed/img22/800",
      alt: "Img 22",
    },
    {
      src: "https://picsum.photos/seed/img23/800",
      alt: "Img 23",
    },
  ],
};

const GalleryPage = () => {
  return <Scroll data={imageData.images} />;
};

export default GalleryPage;
