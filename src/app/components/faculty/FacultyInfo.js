"use client"
import React, { useEffect, useState } from 'react'
import Title from './Title';
import { useParams } from 'next/navigation';
import dynamic from 'next/dynamic';
import Loading from '../../loading';
const FacultyHeader=dynamic(()=>import("./FacultyHeader"),{
  loading:()=><div className='w-full h-full p-3 m-3 bg-red-200'><Loading/></div>
})
const Sidebar=dynamic(()=>import("./Sidebar"),{
  loading:()=><div className='w-full h-full p-3 m-3 bg-red-200'><Loading/></div>
})
const FacultyInfo = () => {
  const [state, setstate] = useState(1)
  const [name, setname] = useState("")
  const [designation, setdesignation] = useState("")
  const [email, setemail] = useState("")
  const [research, setresearch] = useState("")
  const [image, setimage] = useState("")
  const [education, seteducation] = useState([])
  const [work_experience, setwork_experience] = useState([])
  const [Professional_Service,setProfessional_Service]=useState([])
  const [curr_admin_responsibility,setcurr_admin_responsibility]=useState([])
  const [past_admin_responsibility,setpast_admin_responsibility]=useState([])
  const [phd_students,setphd_students]=useState([])
  const [pg_ug_projects,setpg_ug_projects]=useState([])
  const [subjects,setsubjects]=useState([])
  const [publications,setpublications]=useState([])
  const [resume,setresume]=useState("")
  const [membership,setmemership]=useState([])
  const [conference,setconference]=useState([])
  const res = useParams()
  console.log(res.facultyid)
  const uri = `${process.env.NEXT_PUBLIC_BACKEND_API_URL}/api/faculty/${res.facultyid}`
  useEffect(() => {
    fetch(uri).then(res => res.json()).then((data) => {
      setname(data.profile.name)
      setemail(data.profile.email)
      setresearch(data.profile.research_interest)
      setdesignation(data.profile.designation)
      setimage(data.profile.image)
      seteducation(data.education)
      setwork_experience(data.work_experience)
      setProfessional_Service(data.professional_service)
      setcurr_admin_responsibility(data.curr_admin_responsibility)
      setpast_admin_responsibility(data.past_admin_responsibility)
      console.log(data)
      setphd_students(data.phd_candidates)
      setpg_ug_projects(data.pg_ug_projects)
      setsubjects(data.subjects_teaching)
      setpublications(data.publications)
      setmemership(data.memberships)
      setconference(data.publications?JSON.parse(data.publications[0].publications):[])
      setresume(data.profile.cv)
    })
  }, [])
  const downloadFileURL=(url)=>{
    const aTag=document.createElement('a')
    aTag.href=url
    aTag.setAttribute("download","resume")
    document.body.appendChild(aTag)
    aTag.click()
    aTag.remove()
}
  return (
    <div className='text-black'>
      <FacultyHeader image={image} name={name} email={email} designation={designation} research={research} />
      <div className='flex flex-col md:flex-row'>
        <Sidebar setstate={setstate} />

        <div className='md:mx-3 md:mt-3  w-full overflow-x-scroll '>
          {state === 1 && (
            <div className='w-full p-3'>
              <Title title={'Resume'} />
              <div className='w-full p-3 border rounded-md shadow-md flex justify-center items-center h-[50vh]'>
                <button onClick={()=>{resume?downloadFileURL(resume):alert("file not exist")}} className='w-[200px] p-3 bg-[#941B0C] text-white'> Download CV</button>
              </div>
            </div>
          )}
          {state === 2 ? (
            <div className='w-full p-3 '>
              <Title title={'Education'} />
              {
                education?
                <div className='  overflow-x-scroll p-3 border rounded-md shadow-md'>
                <table className='w-full'>
                  <tbody>
                  <tr className='border  border-black ' >
                    <td className='border-r px-3  border-black capitalize w-[100px] font-bold'>certification</td>
                    <td className='border-r px-3 border-black capitalize w-[350px] font-bold'>institution</td>
                    <td className=' px-3  capitalize w-[100px] font-bold'>passing_year</td>
                  </tr>
                  {
                    education.map((item) => {
                      return <tr className='border  border-black' key={item.id}>
                        <td className='border-r px-3  border-black capitalize w-[100px] -mr-40'>{item.certification?item.certification:"-"}</td>
                        <td className='border-r px-3 border-black capitalize w-[300px]'>{item.institution?item.institution:"-"}</td>
                        <td className=' px-3  capitalize w-[100px]'>{item.passing_year?item.passing_year:"-"}</td>
                      </tr>
                    }
                    )
                  }
                </tbody>
                </table>
              </div>
              :
              // <></>
              <div className='font bold uppercase p-4 font-bold border w-[100%] h-[70vh]'>data not found</div>
              }
              
            </div>
          ):<></>}
          {state === 3 ?(
            <div className='w-full p-3 font-poppins'>
              <Title title={'Teaching Experience'} />
              {
                work_experience?
                <div className='  overflow-x-scroll p-3 border rounded-md shadow-md'>
                <table className='w-full'>
                  <tbody>
                  <tr className='border  border-black ' >
                    <td className='border-r px-3  border-black capitalize w-[100px] font-bold'>Teaching experience</td>
                    <td className='border-r px-3 border-black capitalize w-[350px] font-bold'>institute</td>
                    <td className='border-r  border-black px-3  capitalize w-[100px] font-bold'>start</td>
                    <td className=' px-3  capitalize w-[100px] font-bold'>end</td>
                  </tr>
                  {
                    work_experience.map((item) => {
                      return <tr className='border  border-black' key={item.id}>
                        <td className='border-r px-3  border-black capitalize w-[100px] '>{item.work_experiences?item.work_experiences:"-"}</td>
                        <td className='border-r px-3 border-black capitalize w-[300px]'>{item.institute?item.institute:"-"}</td>
                        <td className='border-r  border-black px-3  capitalize w-[100px]'>{item.start?item.start:"-"}</td>
                        <td className=' px-3  capitalize w-[100px]'>{item.end?item.end:"-"}</td>
                      </tr>
                    }
                    )
                  }
                  </tbody>
                </table>
              </div>
              :
              // <></>
              <div className='font bold uppercase p-4 font-bold border w-[100%] h-[70vh]'>data not found</div>
              }
              
            </div>
          ):<></>}

          {state === 5 ? (
            <div className='w-full p-3 font-poppins'>
              <Title title={'Professional Services'} />
              {
                Professional_Service?<div className='  overflow-x-scroll p-3 border rounded-md shadow-md'>
                <table className='w-full'>
                  <tbody>
                  <tr className='border  border-black ' >
                    <td className=' px-3  capitalize w-[100px] font-bold'>Services</td>
                  </tr>
                  {
                    Professional_Service.map((item) => {
                      return <tr className='border  border-black' key={item.id}>
                        <td className=' px-3   capitalize w-[100px] -mr-40'>{item.services?item.services:"-"}</td>
                        
                      </tr>
                    }
                    )
                  } 
                  </tbody>
                </table>
              </div>
              :
              // <></>
              <div className='font bold uppercase p-4 font-bold border w-[100%] h-[70vh]'>data not found</div>
              }
              
            </div>
          ):<></>}

          {state === 4 ? (
            <div className='w-full p-3 font-poppins'>
              <Title title={'Administrative Responsibilities'} />
              {
                curr_admin_responsibility || past_admin_responsibility?
                <>
                  <div className='  overflow-x-scroll p-3 border rounded-md shadow-md'>
                <table className='w-full'>
                  <tbody>
                  <tr className='border  border-black ' >
                    <td className='border-r px-3  border-black capitalize w-[100px] font-bold'>Teaching experience</td>
                    <td className='border-r  border-black px-3  capitalize w-[100px] font-bold'>start</td>
                    <td className=' px-3  capitalize w-[100px] font-bold'>end</td>
                  </tr>
                  {
                    curr_admin_responsibility?.map((item) => {
                      return <tr className='border  border-black' key={item?.id}>
                        <td className='border-r px-3  border-black capitalize w-[100px] '>{item?.curr_responsibility?item.curr_responsibility:""}</td>
                        <td className='border-r  border-black px-3  capitalize w-[100px] font-bold'>{item?.start?item.start:"-"}</td>
                        <td className=' px-3  capitalize w-[100px]'>{item?.end?item.end:"-"}</td>
                      </tr>
                    }

                    )
                    
                  }
                  {
                    past_admin_responsibility?.map((item) => {
                      return <tr className='border  border-black' key={item?.id}>
                        <td className='border-r px-3  border-black capitalize w-[100px] '>{item?.past_responsibility?item.past_responsibility:"-"}</td>
                        <td className='border-r  border-black px-3  capitalize w-[100px] font-bold'>{item?.start?item.start:"-"}</td>
                        <td className=' px-3  capitalize w-[100px]'>{item?.end?item.end:""}</td>
                      </tr>
                    }
                    )
                  }
                  </tbody>
                  
                </table>
                
              </div>
                </>:
                <>
                <div className='font bold uppercase p-4 font-bold border w-[100%] h-[70vh]'>data not found</div>
                </>
              }
              
            </div>
          )
        :<></>}

          {state === 6 && (
            <div className='w-full p-3 '>
              <Title title={'Journals'} />
              <div className='  overflow-x-scroll p-3 border rounded-md shadow-md'>
              {
                publications?publications[0]?.pub_pdf?.length===0?<></>:<div className='w-full flex justify-center items-center h-12'><button  onClick={()=>{publications[0].pub_pdf?downloadFileURL(publications[0].pub_pdf):alert("file not exist")}} className='w-[200px] p-3 bg-[#941B0C] text-white'> Download CV</button></div>:<>No data found</>
              }
            </div>
            </div>
          )}
          {
            state === 7 ?
              <div className='w-[100%] p-3 '>
                <Title title={"Conferences"} />
                {
                  conference?
                  <div className='w-[100%] h-fit p-4 border'>
                    {
                  conference.length===0?<><div className='font bold uppercase p-4 font-bold border w-[100%] h-[70vh]'>data not found</div></>:<></>
                }
                  <ul className='list-decimal'>
                    {
                      conference.map((item)=>{
                        if(item.type==="book"){
                          return 
                        }else{
                          return <li key={item.id} className='flex'>
                              <div className='w-[5px] h-[5px] rounded-full bg-black mt-3 mr-2 p-[4px]'></div>
                              <div className='text-md'><span className='font-semibold mr-1'>{item?.authors?item.authors:""}</span> , &quot; {item?.title?item.title:""} &quot; ,{item?.journal_name?item.journal_name:""} ,{item?.citation_key?item.citation_key:""} , {item?.year?item.year:""} </div>
                          </li>
                        }
                      }
                      )
                    }
                  </ul>
                  </div>
                  :
                  <><div className='font bold uppercase p-4 font-bold border w-[100%] h-[70vh]'>data not found</div></>
                }
              </div>
              : 
              <>
              
              </>
          }

          {
            state === 8 ?
              <div className='w-[100%] p-3 '>
                <Title title={"Phd Candidates"} />
                {
                  phd_students?
                  <div className='  overflow-x-scroll p-3 border rounded-md shadow-md'>
                <table className='w-full'>
                  <tbody>
                  <tr className='border  border-black ' >
                    <td className='border-r px-3  border-black capitalize w-[100px] font-bold'>Candidate Name</td>
                    <td className='border-r px-3 border-black capitalize w-[350px] font-bold'>Thesis Topic</td>
                    <td className='border-r px-3 border-black capitalize w-[100px] font-bold'>Start</td>
                    <td className=' px-3  capitalize w-[100px] font-bold'>end</td>
                  </tr>
                  {
                    phd_students.map((item) => {
                      return <tr className='border  border-black' key={item.id}>
                        <td className='border-r px-3  border-black capitalize w-[100px] '>{item.phd_student_name?item.phd_student_name:"-"}</td>
                        <td className='border-r px-3 border-black capitalize w-[300px]'>{item.thesis_topic?item.thesis_topic:"-"}</td>
                        <td className='border-r px-3 border-black capitalize w-[300px]'>{item.start_year?item.start_year:"-"}</td>
                        <td className=' px-3  capitalize w-[100px]'>{item.completion_year?item.completion_year:"-"}</td>
                      </tr>
                    }
                    )
                  }
                </tbody>
                </table>
              </div>
              :
              <div className='font bold uppercase p-4 font-bold border w-[100%] h-[70vh]'>data not found</div>
                }
                
              </div>
              : <></>
          }


          {
            state === 9 ?
              <div className='w-[100%] p-3 ' >
                <Title title={"PG/UG Projects"} />
                {
                  pg_ug_projects?
                  <div className='  overflow-x-scroll p-3 border rounded-md shadow-md'>
                <table className='w-full'>
                  <tbody>
                  <tr className='border  border-black ' >
                    <td className='border-r px-3  border-black capitalize w-[100px] font-bold'>Candidate Name</td>
                    <td className='border-r px-3  border-black capitalize w-[100px] font-bold'>Candidate Program</td>
                    <td className='border-r px-3 border-black capitalize w-[350px] font-bold'>Thesis Topic</td>
                    <td className='border-r px-3 border-black capitalize w-[100px] font-bold'>Start</td>
                    <td className=' px-3  capitalize w-[100px] font-bold'>end</td>
                  </tr>
                  {
                    pg_ug_projects.map((item) => {
                      return <tr className='border  border-black' key={item.id}>
                        <td className='border-r px-3  border-black capitalize w-[100px] '>{item.student_name?item.student_name:"-"}</td>
                        <td className='border-r px-3  border-black capitalize w-[100px] '>{item.student_program?item.student_program:"-"}</td>
                        <td className='border-r px-3 border-black capitalize w-[300px]'>{item.project_topic?item.project_topic:"-"}</td>
                        <td className='border-r px-3 border-black capitalize w-[300px]'>{item.start_year?item.start_year:"-"}</td>
                        <td className=' px-3  capitalize w-[100px]'>{item.completion_year?item.completion_year:"-"}</td>
                      </tr>
                    }

                    )
                    
                  }
                </tbody>
                </table>
              </div>
              :<div className='font bold uppercase p-4 font-bold border w-[100%] h-[70vh]'>data not found</div>
                }
                
              </div>
              : <></>
          }


          {
            state === 10 ?
              <div className='w-[100%] p-3 font-poppins'>
                <Title title={"Subjects Teaching"} />
                {
                  subjects?
                  <>
                   <div className='  overflow-x-scroll p-3 border rounded-md shadow-md'>
                <table className='w-full'>
                  <tbody>
                  <tr className='border  border-black ' >
                    <td className='border-r px-3  border-black capitalize w-[100px] font-bold'>Subject Code</td>
                    <td className='border-r px-3  border-black capitalize w-[100px] font-bold'>Subject Name</td>
                    <td className='border-r px-3 border-black capitalize w-[350px] font-bold'>Start</td>
                    <td className='px-3 capitalize w-[100px] font-bold'>End</td>
                  </tr>
                  {
                    subjects.map((item) => {
                      return <tr className='border  border-black' key={item.id}>
                        <td className='border-r px-3  border-black capitalize w-[100px] '>{item.code?item.code:"-"}</td>
                        <td className='border-r px-3  border-black capitalize w-[300px] '>{item.name?item.name:"-"}</td>
                        <td className='border-r px-3 border-black capitalize w-[100px]'>{item.start?item.start:"-"}</td>
                        <td className='px-3  capitalize w-[100px]'>{item.end?item.end:"-"}</td>
                      </tr>
                    }

                    )
                    
                  }
                </tbody>
                </table>
              </div>
                  </>:
                  <div className='font bold uppercase p-4 font-bold border w-[100%] h-[70vh]'>data not found</div>
                }
               
              </div>
              : <></>
          }

          {
            state === 11 ?
              <div className='w-[100%] p-3 font-poppins'>
                <Title title={"Books"} />
                
                {
                  conference?
                  <div className='w-[100%] h-fit p-4 border'>
                    {
                  conference.length===0?<><div className='font bold uppercase p-4 font-bold border w-[100%] h-[70vh]'>data not found</div></>:<></>
                }
                  <ul className='list-decimal'>
                    {
                      conference.map((item)=>{
                        if(item.type==="book"){
                          return <li key={item.id} className='flex'>
                          <div className='w-[5px] h-[5px] rounded-full bg-black mt-3 mr-2 p-[4px]'></div>
                          <div className='text-md'><span className='font-semibold mr-1'>{item?.authors?item.authors:""}</span> , &quot{item?.title?item.title:""}&quot ,{item?.journal_name?item.journal_name:""} ,{item?.citation_key?item.citation_key:""} , {item?.year?item.year:""} </div>
                      </li>
                        }else{
                          return 
                        }
                      }
                      )
                    }
                  </ul>
                  </div>
                  :
                  <div className='font bold uppercase p-4 font-bold border w-[100%] h-[70vh]'>data not found</div>
                }
              </div>
              : <></>
          }

          {state === 12 ?(
            <div className='w-full p-3 font-poppins '>
              <Title title={'memberships'} />
              {membership?
              <>
              <div className='  overflow-x-scroll p-3 border rounded-md shadow-md'>
                <table className='w-full'>
                  <tbody>
                  <tr className='border  border-black ' >
                    <td className='border-r px-3  border-black capitalize w-[150px] font-bold'>Membership id</td>
                    <td className='border-r px-3 border-black capitalize w-[350px] font-bold'>Membership Name</td>
                    <td className='border-r  border-black px-3  capitalize w-[100px] font-bold'>start</td>
                    <td className=' px-3  capitalize w-[100px] font-bold'>end</td>
                  </tr>
                  {
                    membership.map((item) => {
                      return <tr className='border  border-black' key={item.id}>
                        <td className='border-r px-3  border-black capitalize w-[100px] '>{item.membership_id?item.membership_id:"-"}</td>
                        <td className='border-r px-3 border-black capitalize w-[300px]'>{item.membership_society?item.membership_society:"-"}</td>
                        <td className='border-r  border-black px-3  capitalize w-[100px]'>{item.start?item.start:"-"}</td>
                        <td className=' px-3  capitalize w-[100px]'>{item.end?item.end:"-"}</td>
                      </tr>
                    }

                    )
                    
                  }
                  </tbody>
                </table>
              </div>
              </>:
              // <></>
              <div className='font bold uppercase p-4 font-bold border w-[100%] h-[70vh]'>data not found</div>
              }
              
            </div>
          ):
          <></>
          }
        </div>
      </div>

    </div>

  )
}
export default FacultyInfo
