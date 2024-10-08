import Sidebar from '../components/Sidebar'
import Gallery from '../Gallary_resorces/gallary'

function Page() {
  return (
    <div className='flex flex-col md:flex-row px-2 md:px-16 lg:px-16 mt-10 md:justify-between md:gap-0 w-full mb-8'>
    {/* Sidebar */}
    <div className='mt-6 mb-12 md:mt-0 '>
      <Sidebar />
    </div>
    <div className='flex flex-col md:w-3/4 '>
     <Gallery/>
    </div>
  </div>
  )
}

export default Page