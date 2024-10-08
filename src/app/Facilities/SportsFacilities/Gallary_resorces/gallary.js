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
                className="absolute left-2 bg-red-700 top-1/2 transform -translate-y-1/2 px-1 py-1  rounded-lg"
              >
                ←
              </button>
              <button
                onClick={showNextImage}
                className="absolute right-2 bg-red-700 top-1/2 transform -translate-y-1/2 px-1 py-1  rounded-lg"
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

const Inter_NIT = {
  images: [
    {
      src: "https://i.postimg.cc/V62b0333/2016-17.jpg",
      alt: "Img 1",
    },
    {
      src: "https://i.postimg.cc/Pf8Dn5Dh/2017-18-B.jpg",
      alt: "Img 2",
    },
    {
      src: "https://i.postimg.cc/WbLkNcmZ/2017-18-A.jpg",
      alt: "Img 3",
    },
    {
      src: "https://i.postimg.cc/zBvfj0C8/2019-20-A.jpg",
      alt: "Img 4",
    },
    {
      src: "https://i.postimg.cc/3Rqxbm1p/2019-20-C.jpg",
      alt: "Img 5",
    },
    {
      src: "https://i.postimg.cc/j5D75skH/2019-20-B.jpg",
      alt: "Img 6",
    },
    {
      src: "https://i.postimg.cc/zvWHCxN3/2022-23A.jpg",
      alt: "Img 7",
    },
    {
      src: "https://i.postimg.cc/zGw3XLDZ/2022-23B.jpg",
      alt: "Img 8",
    },
    {
      src: "https://i.postimg.cc/Hk1Vg0g9/2022-23C.jpg",
      alt: "Img 9",
    },
    {
      src: "https://i.postimg.cc/tCxYwSLg/athletics.jpg",
      alt: "Img 10",
    },
    {
      src: "https://i.postimg.cc/hGpjTH72/Receiving-Championship-trophy-from-Union-Minister-of-State-Ministry-of-Education-Shri-Subhas-Sarka.jpg",
      alt: "Img 11",
    },
   
  ],
};


const Student_Activity = {
  images: [
    {
      src: "https://i.postimg.cc/5yxjzbsK/16-2.jpg",
      alt: "Img 1",
    },
    {
      src: "https://i.postimg.cc/mrHcfdcj/29871869-2075353536053273-7152935076545530355-o.jpg",
      alt: "Img 2",
    },
    {
      src: "https://i.postimg.cc/DwDWNVzm/56.jpg",
      alt: "Img 3",
    },
    {
      src: "https://i.postimg.cc/JnCs1bZL/56618698-2322344881354136-3983581320931442688-n.jpg",
      alt: "Img 4",
    },
    {
      src: "https://i.postimg.cc/sXPv1v4Z/56734802-2322344581354166-8320473682493308928-n.jpg",
      alt: "Img 5",
    },
    {
      src: "https://i.postimg.cc/L6xgzgKt/56816017-2322344594687498-5460266415317581824-n.jpg",
      alt: "Img 6",
    },
    {
      src: "https://i.postimg.cc/2S3bTjrP/69268849-2420626141526009-8061451884273074176-n.jpg",
      alt: "Img 7",
    },
    {
      src: "https://i.postimg.cc/BbgL7X8G/69319494-2420625491526074-1263250701815906304-n.jpg",
      alt: "Img 8",
    },
    {
      src: "https://i.postimg.cc/zv5HknGj/69600831-2420625621526061-4494501576672542720-n.jpg",
      alt: "Img 9",
    },
    {
      src: "https://i.postimg.cc/L4B180x0/70298072-2424204057834884-7617946659275669504-n.jpg",
      alt: "Img 10",
    },
    {
      src: "https://i.postimg.cc/X7jyGchN/73322489-2464859670435989-135371738467794944-n.jpg",
      alt: "Img 11",
    },
    {
      src: "https://i.postimg.cc/DZ1bsCn0/75311451-2465129410409015-3564940821251751936-n.jpg",
      alt: "Img 12",
    },
    {
      src: "https://i.postimg.cc/QM2TFLLv/80532104-2526947137560575-1963583683940057088-n.jpg",
      alt: "Img 13",
    },
    {
      src: "https://i.postimg.cc/25bWjkt4/80560925-2529107210677901-7690372383550472192-n.jpg",
      alt: "Img 14",
    },
    {
      src: "https://i.postimg.cc/4NPVBFth/81227199-2529108737344415-5843577153970503680-n.jpg",
      alt: "Img 15",
    },
    {
      src: "https://i.postimg.cc/Z5D3hBwb/81342642-2529108884011067-568312555097817088-n.jpg",
      alt: "Img 16",
    },
    {
      src: "https://i.postimg.cc/9FCyPj4h/81423529-2526969944224961-1583432641057652736-n.jpg",
      alt: "Img 17",
    },
    {
      src: "https://i.postimg.cc/52tvGqqK/81468759-2529464523975503-5932698996672823296-n.jpg",
      alt: "Img 18",
    },
    {
      src: "https://i.postimg.cc/1XZwYkJD/81652851-2529107587344530-4934743764691320832-n.jpg",
      alt: "Img 19",
    },
    {
      src: "https://i.postimg.cc/3RG218CK/82612025-2537041906551098-351842986448912384-n.jpg",
      alt: "Img 20",
    },
    {
      src: "https://i.postimg.cc/htC8P3tq/84457497-2599543640300924-3374146661587615744-n.jpg",
      alt: "Img 21",
    },
    {
      src: "https://i.postimg.cc/CKzGZHRn/89839880-2599552693633352-6152328188077801472-n.jpg",
      alt: "Img 22",
    },
    {
      src: "https://i.postimg.cc/6p6LKNw0/89872379-2599561856965769-1252811401550888960-n.jpg",
      alt: "Img 23",
    },
    {
      src: "https://i.postimg.cc/MKmbgGkH/89906625-2599567793631842-3487180842084597760-n.jpg",
      alt: "Img 24",
    },
    {
      src: "https://i.postimg.cc/BQ0BhKVR/89998956-2599539480301340-8857950519889494016-n.jpg",
      alt: "Img 25",
    },
    {
      src: "https://i.postimg.cc/qq8XJJzm/90246721-2599552633633358-7100049860522409984-n.jpg",
      alt: "Img 26",
    },
    {
      src: "https://i.postimg.cc/zDWkSj0n/90428021-2599567553631866-3209756388901257216-n.jpg",
      alt: "Img 27",
    },
    {
      src: "https://i.postimg.cc/ZYrryq5H/DSCN1532.jpg",
      alt: "Img 28",
    },
    {
      src: "https://i.postimg.cc/XqcdMszm/IMG-2177.jpg",
      alt: "Img 29",
    },
  ],
};



const Gallery = () => {
  return <>
       <h2 className="text-1xl p-2 sm:text-2xl font-semibold text-black text-left mb-4 underline decoration-red-500">
        Inter NIT Medals
      </h2>
      <Scroll data={Inter_NIT.images} />

      <h2 className="text-1xl p-2 sm:text-2xl font-semibold mt-4 text-black text-left mb-4 underline decoration-red-500">
        Student Activity 
      </h2>
      <Scroll data={Student_Activity.images} />
   </>
};

export default Gallery;


