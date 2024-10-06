import SideBar from '../../../../components/sportsComponents/SideBar'

function PastEve({event,url}){
  return(
    <>
      <div className='col-span-2 px-2 py-3 text-neutral-800 border-t border-r text-sm shadow-md'>
        {event}
      </div>
      <a href={url} className='col-span-1 px-2 py-3 text-blue-600 border-t text-sm shadow-md'>
        Click here
      </a>
    </>
  )
}
function Page() {
  return (
    <div className='flex flex-col-reverse md:flex-row w-full md:justify-between md:px-20 lg:px-32 px-4 mt-10 md:gap-0'>
      <div className='mt-6 md:mt-0 '>
        <SideBar />
      </div>
      <div className='flex flex-col lg:w-2/3'>
        <div>
          {/* current events */}
        </div>
        <div className='flex flex-col border shadow-lg'>
          <div className='bg-red-100 px-2 py-3 font-semibold'>
            <p className='text-black'>
              Past Events
            </p>
          </div>
          <div className='grid grid-cols-3 mx-3 my-4 border'>
            <div className='col-span-2 text-black px-2 py-3 text-sm font-semibold border-r shadow-md'>
              Event Name
            </div>
            <div className='col-span-1 text-black px-2 py-3 text-sm font-semibold shadow-md'>
              Link
            </div>
            <PastEve
            event={"NIT Patna at All India inter NIT Sports"}
            url={"https://docs.google.com/document/d/1FbMIA3TLpe8SVNj4LhA2425SVW71CmQw"}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Page