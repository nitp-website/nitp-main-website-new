import Head from "next/head";
import SideBar from '../../../components/sportsComponents/SideBar'
import Image from 'next/image';
import Carousel from '../../../components/sportsComponents/Carousel'

function Sports({game,desc}){
  return(
    <div className='grid grid-cols-3 w-2/3 font-medium'>
      <div className='col-span-1 border-t border-l border-black p-2'>
        {game}
      </div>
      <div className='col-span-2 border-t border-l border-r border-black p-2'>
        {desc}
      </div>
    </div>
  )
}

export default function Home() {
  
  return (
    
    <div className='flex flex-col-reverse md:flex-row px-4 md:px-20 lg:px-32 mt-10 md:justify-between md:gap-0 w-full mb-8'>
      {/* Sidebar */}
      <div className='mt-6 md:mt-0 '>
        <SideBar />
      </div>
      <div className='flex flex-col md:w-2/3 '>
        <div>
          <span className='text-xl  font-semibold border-b-2 pb-2 border-red-800'>
            NIT PATNA SPORTS
          </span>
        </div>
        <div className='mt-8 md:w-full'>
        <Carousel/>
        </div>
        <div className='mt-8 text-base text-gray-500 mx-4'>
          <p className='text-justify'>
          The <span className='font-bold text-black'>National Institute of Technology Patna (NIT Patna)</span> has a vibrant sports culture, which plays an integral role in the holistic development of students. The institute promotes a healthy balance between academics and physical activities, encouraging students to participate in a variety of sports. The students of NIT Patna manifested these exemplary qualities with great aplomb every year in terms of Sports. Their achievements have been manifold and the following is a summation of their efforts: A packed calendar saw different Inter-Department / open sports, cultural and technical events have been conducted round the year. NIT Patna became the Overall Champion at All India inter NIT Weightlifting Competition for consecutive 5th times.
          </p>
          <p className='mt-4'>
            <span className='text-black font-bold'>Sports Facilities:</span>
            <ul className='list-disc mt-4'>
              <li className='text-justify'>
                <span className='font-semibold text-black'>
                Outdoor Games:
                </span>
                NIT Patna has provisions for sports like Cricket, Football, Kabaddi, Volleyball, and Athletics. The institute has well-maintained grounds for these activities.
              </li>
              <li className='text-justify'>
                <span className='font-semibold text-black'>
                Indoor Sports:
                </span>
                Indoor sports like Table tennis, chess, Badminton, Squash and Carrom are available for students.
              </li>
            </ul>
            <ol className='list-decimal mt-4'>
            <li className='text-justify'>
                <span className='font-semibold text-black'>
                Intramural Sports:
                </span>
                NIT Patna organizes an annual sports fest, where students from various departments and years participate in numerous events. It includes athletics, team sports, and individual sports events. The sports meet fosters competitive spirit and teamwork among students.
              </li>
              <li className='text-justify'>
                <span className='font-semibold text-black'>
                Gymnasium: 
                </span>
                The institute also has a gymnasium equipped with modern fitness equipment, encouraging students to stay fit and healthy.
              </li>
              <li className='text-justify'>
                <span className='font-semibold text-black'>
                Inter-NIT Tournaments:
                </span>
                NIT Patna students participate in inter-NIT sports competitions held across various NITs in India. These tournaments are highly competitive and provide students with an opportunity to showcase their talents at a national level.
              </li>
            </ol>
          </p>
          <p>
          Overall, sports are an important part of the student experience at NIT Patna, contributing to the overall physical and mental well-being of t
          </p>
        </div>
        <div>
          <p className='text-lg mt-8 font-bold mb-8'>
          Sports Infrastructure at NIT Patna
          </p>
          <Sports
          game={"Football"}
          desc={"One Football ground with flood lights"}
          />
          <Sports
          game={"Cricket "}
          desc={"Two cemented nets practice arena"}
          />
          <Sports
          game={"Volleyball"}
          desc={"One Volleyball ground with flood lights"}
          />
          <Sports
          game={"Badminton"}
          desc={"Three synthetic Badminton Court  "}
          />
          <Sports
          game={"Table Tennis"}
          desc={"One Table Tennis room"}
          />
          <Sports
          game={"Squash Racket"}
          desc={"Two wooden court "}
          />
          <Sports
          game={"Lawn Tennis"}
          desc={"One Lawn Tennis cemented court"}
          />
          <Sports
          game={"Gym"}
          desc={"Girls and Boys Gym with world class equipment"}
          />
          <Sports
          game={"Carrom"}
          desc={"One Carrom room "}
          />
          <Sports
          game={"Chess"}
          desc={"Facilities for playing Chess"}
          />
          <Sports
          game={"Pool"}
          desc={"2 Pool tables"}
          />
          <Sports
          game={"Yoga"}
          desc={"One Yoga hall"}
          />
          <p className='w-2/3 border-t border-black'></p>
        </div>
      </div>
    </div>
  );
}

export async function generateMetadata({ params }) {
  return {
    title: "Sports Facilities | NIT Patna",
  };
}
