"use client";
import PeopleList from '../../../../components/sportsComponents/PeopleList'
import SideBar from '../../../../components/sportsComponents/SideBar'

function Page() {
  return (
    <div className='flex flex-col-reverse md:flex-row px-2 md:px-16 lg:px-16 mt-10 md:justify-between md:gap-0 w-full mb-8'>
    <div className='mt-6 md:mt-0 '>
      <SideBar />
    </div>
    <div className='flex flex-col md:w-3/4 '>
     <PeopleList/>
    </div>
  </div>
  )
}

export default Page   