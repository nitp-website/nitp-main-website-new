"use client"
import { useEffect, useState } from "react"
import axios from "axios"
import React from "react"
import Webcard from "../components/Webteam/Webcard"
import "./wpage.css"
import Collapsible from "./Collapsible";

const currentYear = 20241; // Assuming current year is fixed as 20241
const oldyears = [ 2023, 2022, 2021];
const data = [
  {
    name: "Dr. B Balaji Naik",
    email: "balaji.cs@nitp.ac.in",
    extn: "balaji.cs@nitp.ac.in",
    id: "balaji.cs@nitp.ac.in",
    interests: [
      "Cloud Computing",
      "Nature Inspired Algorithms",
      "Edge Computing",
      "Workflow Scheduling Algorithm",
      "Optimization",
      "Quantum Computing",
    ],
    image: "https://drive.google.com/thumbnail?authuser=0&sz=w320&id=1Abn5VMv4oWnpUYyNtO_j-mrh5YBNzD-C",
    desg: "Assistant Professor",
    url: "https://www.nitp.ac.in/profile/?id=balaji.cs@nitp.ac.in",
  },
];
const Webteam = () => {
  const [webteam, setWebteam] = useState([]);
  const [filteredteam, setFilteredteam] = useState([]);
  const [loading, setLoading] = useState(true);
  const [oldData, setOldData] = useState([]);

  const webteamUrl = `${process.env.NEXT_PUBLIC_BACKEND_API_URL}/api/webteam`;

  useEffect(() => {
    setLoading(true);
    axios
      .get(webteamUrl)
      .then((res) => {
        const web = res.data;
        setWebteam(web);

        // Filter current members
        const currentMembers = web.filter((member) => member.year === currentYear);
        setFilteredteam(currentMembers);

        // Filter old members and set old data
        const oldMembers = web.filter((member) => oldyears.includes(member.year));
        setOldData(oldMembers);
        
        setLoading(false);
      })
      .catch((e) => {
        console.log(e);
        setLoading(false);
      });
  }, [webteamUrl]);

  return (
    <div className="webteam-page text-black pr-5 pl-5 pb-5 md:pr-28 md:pl-28 bg-[url('https://i.postimg.cc/fbcBY1cJ/bg.jpg')] bg-center">
      <div className="layoutrow layoutrowmain">
        <div className="col-6" style={{ width: `100%` }}>
          <div className="row rowmarl3 text-center pt-5 pb-4">
            <h1
              data-aos="zoom-in-right"
              className="text-xl md:text-4xl text-red-900 font-extrabold underline"
            >
              Web Development Cell
            </h1>
          </div>
          <div className="row rowmarl3 text-center pb-6">
            <h2
              data-aos="zoom-in-right"
              className="text-sm md:text-xl font-semibold"
            >
              Think coding is challenging? Try mastering web design!” This
              sentiment truly captures the spirit of the Web Development Cell at
              NIT Patna. 🌐
            </h2>
            <h2
              data-aos="zoom-in-right"
              className="text-xs md:text-xl bg-white/35 text-justify pt-3 px-4 py-4"
            >
              The WDC at NIT Patna is a premier team of dedicated students
              responsible for managing and enhancing the Institute's website. ✨
              Our goal is to merge technical skills with innovative ideas,
              ensuring that our site is both visually engaging and content-rich,
              featuring high-quality images and up-to-date information. 📸
              <br />
              <br />
              Our mission is to ensure that the Institute's website reaches every
              corner of India, fostering a platform for learning and critical
              thinking. Through our efforts, we aim to contribute to a brighter
              and more informed future.
              <br />
              <br />
              Being part of WDC means diving into a world of hard work,
              dedication, and skill enhancement. Our members gain valuable
              experience in web design and development, honing their skills in
              coding, user experience optimization, and creative layout design. 🚀
              <br />
              <br />
              At WDC NIT Patna, we’re not just developing a website—we’re
              shaping the digital identity of our Institute and making a
              significant impact. Join us in this exciting journey of
              innovation and excellence! 💻
            </h2>
          </div>
        </div>

        <hr />
        <div className="row rowmarl3">
          <h2
            data-aos="zoom-in-right"
            className="text-center text-neutral-900 text-2xl font-bold pt-5 overline"
            style={{ width: `100%`, marginTop: `0` }}
          >
            Professor In Charge
          </h2>
        </div>
        <div className="col-6">
          <div className="row layoutrow">
            <div className="row grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-5 md:gap-6 items-center justify-center grid-flow-dense mx-auto pt-5 mb-16">
              {data.map((member) => (
                <Webcard
                  key={member.id} // Use email as the unique key
                  name={member.name}
                  email={member.email}
                  extn={member.extn}
                  id={member.id}
                  interests={member.interests}
                  image={member.image}
                  desg={member.desg}
                  url={member.url}
                />
              ))}
            </div>
          </div>
        </div>

        <hr />
        <div className="text-center pt-5 text-black">
          <h2  data-aos="zoom-in-left" className="text-center text-neutral-900 text-2xl font-bold pt-5 overline" style={{ width: `100%`, marginTop: `0` }}>Current Members</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6 items-center justify-evenly grid-flow-dense mx-auto pt-5 mb-16">
            {filteredteam &&
              filteredteam
                .filter((member) => member.role === "volunteer")
                .map((member) => (
                  <Webcard
                    key={member.email} // Adding key prop
                    name={member.name}
                    email={member.email}
                    extn={member.ext_no}
                    id={member.email}
                    interests={member.interests}
                    image={member.image}
                    desg={member.desg}
                    url={member.url}
                  />
                ))}
          </div>
        </div>
              <div className="bg-gray-500 p-5 text-white pb-5 text-lg ">
        {!loading && (
          <Collapsible title={`Team Lineups Through the Years 🔽`} data={oldData} years={oldyears} />
        )}
        </div>
      </div>
    </div>
  );
};

export default Webteam;