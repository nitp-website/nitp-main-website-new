"use client";
import PeopleList from '../components/PeopleList'
import Sidebar from '../components/Sidebar'

function Page() {
  return (
    <div className='flex flex-col md:flex-row px-2 md:px-16 mt-10 md:justify-between md:gap-0 w-full mb-8'>
    <div className='mt-6 mb-12 md:mt-0 '>
      <Sidebar />
    </div>
    <div className='flex flex-col md:w-3/4 '>
     <PeopleList/>
    </div>
  </div>
  )
}





export default Page   