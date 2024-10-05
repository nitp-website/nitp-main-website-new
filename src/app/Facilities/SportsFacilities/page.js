import Head from "next/head";
import SideBar from '../../../components/sportsComponents/SideBar'
import Image from 'next/image';
import Carousel from '../../../components/sportsComponents/Carousel'

export default function Home() {
  var labUrl = [
    "https://i.postimg.cc/Pfbj3bYD/DSC09197.jpg",
    "https://i.postimg.cc/xjB6zBcy/4.jpg",
  ]
  
  return (
    <div className='flex flex-col md:flex-row p-8 mx-4'>
      <div className='flex flex-col'>
        <div>
          <p className='text-2xl font-semibold'>
            NIT PATNA SPORTS
          </p>
        </div>
        <div className='w-full md:w-[900px] border-2 border-black'>
          <Carousel autoSlide={true}>
            {labUrl.map((img,i)=>(     
              <Image src={img} alt='image' width={900} height={500} key={i} className='object-fill' />     
            ))}
          </Carousel>
        </div>
      </div>

      {/* Sidebar */}
      <div className='mt-6 md:mt-0 md:ml-6'>
        <SideBar />
      </div>
    </div>
  );
}

export async function generateMetadata({ params }) {
  return {
    title: "Sports Facilities | NIT Patna",
  };
}
