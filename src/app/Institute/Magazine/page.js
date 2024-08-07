"use client";
import React from 'react';

const magazines = [
    {
      imageUrl: 'https://i.postimg.cc/tRrQct9s/Screenshot-2024-08-03-215833.png',
      heading: 'Magazine Vol. 6 (June 2023)',
      pdfUrl: 'https://drive.google.com/file/d/1v94mM-W9xegDIJ3ZOjTznL2FgioDSCaq/view?usp=sharing',
    },
    {
      imageUrl: 'https://i.postimg.cc/hPTjR5vC/Screenshot-2024-08-03-222150.jpg',
      heading: 'Special Edition: Institute Coffee-Table Booklet',
      pdfUrl: 'http://web.nitp.ac.in/uploads23/Coffee-Table_NITP.pdf',
    },
    {
      imageUrl: 'https://i.postimg.cc/V6hyJmGj/homebg-5-1.jpg',
      heading: 'Magazine Vol. 5 (Jan 2023)',
      pdfUrl: 'https://drive.google.com/file/d/1FAhIZPthEMvSyceX5ASOAO-yI-BiTQ7Y/view?usp=share_link',
    },
    {
      imageUrl: 'https://i.postimg.cc/PqrrZf4c/Screenshot-2024-08-03-223038.png',
      heading: 'Special Edition: 5 Years Report',
      pdfUrl: 'http://web.nitp.ac.in/uploads23/5_years_Report.pdf',
    },
    {
      imageUrl: 'https://i.postimg.cc/hPTjR5vC/Screenshot-2024-08-03-222150.jpg',
      heading: 'Magazine Vol. 4 (March 2022)',
      pdfUrl: 'http://web.nitp.ac.in/uploads20/Pratibimb/Pratibimb%20Vol.%204,%20March%202022,%20online%20version-16.03.2022.pdf',
    },
    {
      imageUrl: 'https://i.postimg.cc/V6hyJmGj/homebg-5-1.jpg',
      heading: 'Magazine Vol. 3 (October, 2021) - English Version',
      pdfUrl: 'http://web.nitp.ac.in/uploads20/Pratibimb/Pratibimb_03_English%20Version.pdf',
    },
    {
      imageUrl: 'https://i.postimg.cc/hPTjR5vC/Screenshot-2024-08-03-222150.jpg',
      heading: 'Magazine Vol. 3 (October, 2021) - Hindi Version',
      pdfUrl: 'http://web.nitp.ac.in/uploads20/Pratibimb/Pratibimb_03_Hindi%20Version.pdf',
    },
    {
      imageUrl: 'https://i.postimg.cc/L6Y9B0j9/Screenshot-2024-08-03-220208.png',
      heading: 'Magazine Vol. 2 (June, 2021) - English Version',
      pdfUrl: 'http://web.nitp.ac.in/uploads20/Pratibimb/Pratibimb%20Vol.%2002-Updated%2028.07.2021.pdf',
    },
    {
      imageUrl: 'https://i.postimg.cc/L6Y9B0j9/Screenshot-2024-08-03-220208.png',
      heading: 'Magazine Vol. 2 (June, 2021) - Hindi Version',
      pdfUrl: 'https://drive.google.com/file/d/1MIx4WSMWO6-blJhZ71Ve9Y3gEd7cybBO/view?usp=sharing',
    },
    {
      imageUrl: 'https://i.postimg.cc/V6hyJmGj/homebg-5-1.jpg',
      heading: 'Magazine Vol. 1 (Dec., 2020)',
      pdfUrl: 'http://web.nitp.ac.in/uploads20/Pratibimb/NIT%20Patna%20E-Magazine.pdf',
    },
  ];
  

const MagazinePage = () => {
  return (
    <div className=" p-4 mx-auto text-center">
      <h1 className="text-sm sm:text-3xl font-bold mb-10 mt-5 text-red-900">✨ Explore Our Magazine Collection 📑</h1>
      <div className="grid mx-5 sm:mx-16 gap-10 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 ">
        {magazines.map((magazine, index) => (
          <div
            key={index}
            className="bg-white shadow-md rounded-lg overflow-hidden cursor-pointer"
            onClick={() => window.open(magazine.pdfUrl, '_blank')}
            
          >
            <img src={magazine.imageUrl} alt={magazine.heading} className="w-full h-auto object-cover" />
            <div className="p-4">
              <h2 className="text-sm md:text-lg font-semibold text-red-800">{magazine.heading}</h2>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MagazinePage;
