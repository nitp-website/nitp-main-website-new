import Head from "next/head";
import SideBar from '../../../components/sportsComponents/SideBar'
import Image from 'next/image';
import Carousel from '../../../components/sportsComponents/Carousel'


export default function Home() {
  var labUrl = [
    "https://i.postimg.cc/j2Rcm5BV/4.jpg",
    "https://i.postimg.cc/zXXpkynK/DSC09197.jpg",
  ]
  return (
    <div className='flex flex-row p-10 mx-4'>
      <div className='flex flex-col'>
        <div>
          <p className='text-2xl font-semibold'>
            NIT PATNA SPORTS
          </p>
        </div>
        <div className='lg:w-[1000px] lg:h-[400px] w-[300px] border-2 border-black'>
          {/* <Carousel autoSlide={true}>
            {labUrl.map((img,i)=>(     
              <Image src={img} alt='image' width={1000}
              height={500} key={i} className='object-cover'
              />     
            ))}
          </Carousel> */}
          <Carousel/>
        </div>
        <div>
          
        </div>
      </div>
      <div className='w-1/3'>
        <SideBar/>
      </div>
    </div>
  );
}

export async function generateMetadata({ params }) {
  return {
    title: "Sports Facilities | NIT Patna",
  };
}
