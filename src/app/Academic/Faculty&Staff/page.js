import React from 'react';
import Link from 'next/link';

import "./style.css"
import Image from 'next/image';

const StaffResources = [
    
    {
      "title": "Web Mail",
      link: "http://mail.google.com/a/nitp.ac.in",
      "image":"https://i.postimg.cc/pVGKk5qD/mail64.png",
    },
    {
      "title": "Academic Portal",
      link: "http://exam.nitp.ac.in:9001/",
      "image":"https://i.postimg.cc/SKtTmjqC/Chankaya64.png",
    },
    {
      "title": "Recruitments",
      link: "/Notices/JobsNITP",
      "image":"https://i.postimg.cc/43Q9cYYH/job64.png",
    },
    {
      "title": "Employee I-Card",
      link: "https://docs.google.com/forms/d/e/1FAIpQLSedy0aZLXXj709zQjAejWvLQOs4_6ESIciPe0IV199kMr_D1g/viewform?usp=sf_link",
      "image":"https://i.postimg.cc/0N3fL3dC/id-card64.png",
    },
    {
      "title": "Staff Claim Form",
      link: "/Academic/Faculty&Staff/forms",
      "image":"https://i.postimg.cc/76PTnqzs/form64.png",
    },
    {
      "title": "Admin Login",
      link: "https://admin.nitp.ac.in/",
      "image":"https://i.postimg.cc/GtxQLHLj/Computer64.png",
    },
    {
      "title": "International Affairs",
      link: "#",
      "image":"https://i.postimg.cc/br130Tn9/exchange64.png",
    },
    {
      "title": "All Faculty Profile",
      link: "#",
      "image":"https://i.postimg.cc/5tVzjB2M/faculty64.png",
    },
    {
      "title": "Officers",
      link: "#",
      "image":"https://i.postimg.cc/YCggpnk3/officers64.png",
    },
    {
      "title": "Other Employee",
      link: "#",
      "image":"https://i.postimg.cc/7Yj0r8vh/other64.png",
    },
    
  ];

const StudentResourcesPage = () => {
  return (
    <div className=" mx-auto px-5 md:px-40 py-8 bg-white bg-opacity-60">
      <h1 className="text-3xl font-bold text-center mb-8 text-red-800">Faculty and Staff Resources</h1>
      <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-5 gap-5 md:gap-6 items-center justify-center grid-flow-dense	 mx-auto">
        {StaffResources.map((resource) => (
          <Link key={resource.title} href={resource.link} className="group">
            <div className=" mx-auto my-auto relative bg-white bg-clip-padding p-3 bg-opacity-80 rounded-md border-2 border-red-100 shadow-md transition duration-300 w-11/12 h-32 cardstudent" >
              <div className="relative h-16 w-16 items-center justify-center mx-auto">
                <img
                loading='lazy'
                  src={resource.image}
                  alt={resource.title}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-lg h-11/12 w-11/12"
                  
                />
              </div>
              <div className="text-center mt-1">
                <h2 className="text-[12px] md:text-sm font-bold text-neutral-500 group-hover:text-red-900 transition duration-300">
                  {resource.title}
                </h2>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default StudentResourcesPage;

export async function generateMetadata({ params }) {
  return {
    title: 'Faculty & Staff | NIT Patna',
  }
}