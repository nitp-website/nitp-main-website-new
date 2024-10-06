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
          {/* Past events */}
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
            url={"https://drive.google.com/file/d/1brqbCN9ycnnhFJ4sylYG66vNKHf5fxkZ/view?usp=drive_link"}
            />
            <PastEve
            event={"Receiving Championship trophy from Union Minister of State, Ministry of Education, Shri Subhas Sarkar at NIT Durgapur"}
            url={"https://drive.google.com/file/d/1Ed4l3mlMKEVlk027yV5Q9kGFI9v-DUvD/view?usp=drive_link"}
            />
            <PastEve
            event={"Flyer 2024"}
            url={"https://drive.google.com/file/d/1Nwjgsz3dAdeWw5HtnyWtLC-7jge153PW/view?usp=drive_link"}
            />
            <PastEve
            event={"Intramural 2024"}
            url={"https://drive.google.com/file/d/1jIs7fqmHqq3VdLifiCyd5ZHOuufEpUma/view?usp=drive_link"}
            />
            <PastEve
            event={"Flyer 2023"}
            url={"https://drive.google.com/file/d/1RuIQuqVhdTS3Yuz8INVJIhe9yQfhUbn9/view?usp=drive_link"}
            />
            <PastEve
            event={"Intramural 2023"}
            url={"https://drive.google.com/file/d/1HK5YGMcaifHJRW3KAIX5pnRdfZxL3g-Q/view?usp=drive_link"}
            />
            <PastEve
            event={"Annual Report SAS 2023-24"}
            url={"https://drive.google.com/file/d/1SHgWQ6ZH-4u_8sLnL3ThSikP1ERHY4Dx/view?usp=drive_link"}
            />

          </div>
        </div>
      </div>
    </div>
  )
}

export default Page