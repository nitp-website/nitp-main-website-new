"use client"
import React, { useEffect, useState } from 'react'
import Title from './Title';
import { useParams } from 'next/navigation';
import dynamic from 'next/dynamic';
const FacultyHeader = dynamic(() => import("./FacultyHeader"), {
  loading: () => <div className='w-full h-full p-3 text-black m-3 bg-red-200'>loading</div>
})
const Sidebar = dynamic(() => import("./Sidebar"), {
  loading: () => <div className='w-full h-full p-3 text-black m-3 bg-red-200'>loading</div>
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
  const [Professional_Service, setProfessional_Service] = useState([])
  const [curr_admin_responsibility, setcurr_admin_responsibility] = useState([])
  const [past_admin_responsibility, setpast_admin_responsibility] = useState([])
  const [phd_students, setphd_students] = useState([])
  const [pg_ug_projects, setpg_ug_projects] = useState([])
  const [subjects, setsubjects] = useState([])
  const [publications, setpublications] = useState([])
  const [resume, setresume] = useState("")
  const [membership, setmemership] = useState([])
  const [conference, setconference] = useState([])
  const [books, setbooks] = useState([])
  const [scopus,setscopus]=useState("")
  const [google_scholar,setgoogle_scholar]=useState("")
  const [linkedin,setlinkedin]=useState("")
  const [orcid,setorcid]=useState("")
  const [vidwan,setvidwan]=useState("")
  const [personal_webpage,setpersonal_webpage]=useState("")
  const [article,setarticle]=useState([])
  const res = useParams()
  console.log(res.facultyid)
  const uri = `https://admin.nitp.ac.in/api/faculty/${res.facultyid}`
  useEffect(() => {
    fetch(uri).then(res => res.json()).then((data) => {
      console.log(data)
      setname(data.profile.name)
      setemail(data.profile.email)
      setresearch(data.profile.research_interest)
      setdesignation(data.profile.designation)
      setgoogle_scholar(data.profile.google_scholar)
      setlinkedin(data.profile.linkedin)
      setvidwan(data.profile.vidwan)
      setscopus(data.profile.scopus)
      setorcid(data.profile.orcid)
      setpersonal_webpage(data.profile.personal_webpage)
      setimage(data.profile.image)
      seteducation(data.education)
      setwork_experience(data.work_experience)
      setProfessional_Service(data.professional_service)
      setcurr_admin_responsibility(data.curr_admin_responsibility)
      setpast_admin_responsibility(data.past_admin_responsibility)
      setphd_students(data.phd_candidates)
      setpg_ug_projects(data.pg_ug_projects)
      setsubjects(data.subjects_teaching)
      setpublications(data.publications)
      setmemership(data.memberships)
      
      let arr = data.publications ? JSON.parse(data.publications[0].publications) : []
      console.log(arr)
      let conferences = arr.filter((item) => item.type === "conference")
      setconference(conferences)
      let booksdata = arr.filter((item) => item.type === "book")
      setbooks(booksdata)
      let articledata=arr.filter((item) => item.type === "article")
      setarticle(articledata)
      setresume(data.profile.cv)
    })
  }, [])

  const downloadFileURL = (url) => {
    const aTag = document.createElement('a')
    aTag.href = url
    aTag.setAttribute("download", "resume")
    document.body.appendChild(aTag)
    aTag.click()
    aTag.remove()
  }
  return (
    <div>
      <FacultyHeader vidwan={vidwan} scopus={scopus} orcid={orcid} personal_webpage={personal_webpage} linkedin={linkedin} google_scholar={google_scholar} image={image} name={name} email={email} designation={designation} research={research} />
      {
        resume||books.length!==0||conference.length!==0||membership||education||publications||subjects||pg_ug_projects||phd_students||work_experience||Professional_Service||curr_admin_responsibility.length > 0|| past_admin_responsibility.length > 0?
      <div className='flex flex-col md:flex-row'>
        <Sidebar setstate={setstate} resume={resume} subjects={subjects} article={article} past_admin={past_admin_responsibility} work={work_experience} curr_admin={curr_admin_responsibility} phd_students={phd_students} memebership={membership} education={education} pg_ug_projects={pg_ug_projects} books={books} conference={conference} professional={Professional_Service} publications={publications}/>
        <div className='md:mx-3 md:mt-3  w-full overflow-scroll  '>
          {state === 1 && (
            <div className='w-full p-3 text-black'>
              <Title title={'Resume'} />
              <div className='w-full p-3 text-black border rounded-md  flex justify-center items-center overflow-scroll h-[60vh] shadow-lg hover:shadow-2xl'>
                <button onClick={() => { resume ? downloadFileURL(resume) : alert("file not exist") }} className='w-[200px] p-3 text-black bg-[#941B0C] '> Download CV</button>
              </div>
            </div>
          )}
          {state === 2 ? (
            <div className='w-full p-3 text-black '>
              <Title title={'Education'} />
              {
                education ?
                  <div className='  overflow-scroll h-[70vh] p-3 text-black border rounded-md shadow-lg hover:shadow-2xl'>
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
                              <td className='border-r px-3  border-black capitalize w-[100px] -mr-40'>{item.certification ? item.certification : "-"}</td>
                              <td className='border-r px-3 border-black capitalize w-[300px]'>{item.institution ? item.institution : "-"}</td>
                              <td className=' px-3  capitalize w-[100px]'>{item.passing_year ? item.passing_year : "-"}</td>
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
          ) : <></>}
          {state === 3 ? (
            <div className='w-full p-3 text-black font-poppins'>
              <Title title={'Teaching Experience'} />
              {
                work_experience ?
                  <div className='  overflow-scroll h-[70vh] p-3 text-black border rounded-md shadow-lg hover:shadow-2xl'>
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
                              <td className='border-r px-3  border-black capitalize w-[100px] '>{item.work_experiences ? item.work_experiences : "-"}</td>
                              <td className='border-r px-3 border-black capitalize w-[300px]'>{item.institute ? item.institute : "-"}</td>
                              <td className='border-r  border-black px-3  capitalize w-[100px]'>{item.start ? item.start : "-"}</td>
                              <td className=' px-3  capitalize w-[100px]'>{item.end ? item.end : "-"}</td>
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
          ) : <></>}

          {state === 4 ? (
            <div className='w-full p-3 text-black font-poppins'>
              <Title title={'Professional Services'} />
              {
                Professional_Service ? <div className='  overflow-scroll h-[70vh] p-3 text-black border rounded-md shadow-lg hover:shadow-2xl'>
                  <table className='w-full'>
                    <tbody>
                      <tr className='border  border-black ' >
                        <td className=' px-3  capitalize w-[100px] font-bold'>Services</td>
                      </tr>
                      {
                        Professional_Service.map((item) => {
                          return <tr className='border  border-black py-3' key={item.id}>
                            <td className=' p-3 text-black   capitalize w-[100px] -mr-40'>{item.services ? item.services : "-"}</td>

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
          ) : <></>}

          {state === 5 ? (
            <div className='w-full p-3 text-black font-poppins'>
              <Title title={'Administrative Responsibilities'} />
              {
                curr_admin_responsibility || past_admin_responsibility ?
                  <>
                    <div className='  overflow-scroll h-[70vh] p-3 text-black border rounded-md shadow-lg hover:shadow-2xl'>
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
                                <td className='border-r px-3  border-black capitalize w-[100px] '>{item?.curr_responsibility ? item.curr_responsibility : ""}</td>
                                <td className='border-r  border-black px-3  capitalize w-[100px] font-bold'>{item?.start ? item.start : "-"}</td>
                                <td className=' px-3  capitalize w-[100px]'>{item?.end ? item.end : "-"}</td>
                              </tr>
                            }

                            )

                          }
                          {
                            past_admin_responsibility?.map((item) => {
                              return <tr className='border  border-black' key={item?.id}>
                                <td className='border-r px-3  border-black capitalize w-[100px] '>{item?.past_responsibility ? item.past_responsibility : "-"}</td>
                                <td className='border-r  border-black px-3  capitalize w-[100px] font-bold'>{item?.start ? item.start : "-"}</td>
                                <td className=' px-3  capitalize w-[100px]'>{item?.end ? item.end : ""}</td>
                              </tr>
                            }
                            )
                          }
                        </tbody>

                      </table>

                    </div>
                  </> :
                  <>
                    <div className='font bold uppercase p-4 font-bold border w-[100%] h-[70vh]'>data not found</div>
                  </>
              }

            </div>
          )
            : <></>}

          {state === 6 && (
            <div className='w-full p-3 text-black '>
              <Title title={'Journals'} />
              <div className='  overflow-scroll h-[70vh] p-3 text-black w-full  border rounded-md shadow-lg hover:shadow-2xl'>
                {
                  publications ? publications[0]?.pub_pdf?.length === 0 ? <></> : <div className='w-full flex justify-center items-center h-12'><button onClick={() => { publications[0].pub_pdf ? downloadFileURL(publications[0].pub_pdf) : alert("file not exist") }} className='w-[200px] p-3 text-black bg-[#941B0C]  mt-3'> Journals</button></div> : <>No data found</>
                }
                <ul className='list-decimal gap-3 flex flex-col mt-6'>
                      {
                        article?.map((item,i) => {
                          return <li key={i} className='flex'>
                            <div className='w-[5px] h-[5px] rounded-full bg-black mt-3 mr-2 p-[4px]'></div>
                            <div className='text-md'><span className='font-semibold mr-1'>{item?.authors ? item.authors : ""}</span> , &quot;{item?.title ? item.title : ""}&quot; ,{item?.journal_name ? item.journal_name : ""} ,{item?.citation_key ? item.citation_key : ""} , {item?.year ? item.year : ""} </div>
                          </li>
                        }
                        )
                      }
                </ul>
              </div>
            </div>
          )}
          {
            state === 7 ?
              <div className='w-[100%] p-3 text-black '>
                <Title title={"Conferences"} />

                <div className='w-[100%]  p-4 border shadow-lg hover:shadow-2xl overflow-scroll h-[70vh]'>
                  {
                    conference.length === 0 ? <><div className='font bold uppercase p-4 font-bold border w-[100%] h-[70vh]'>data not found</div></> : <></>
                  }
                  <ul className='list-decimal flex flex-col gap-3'>
                    {
                      conference.map((item) => {
                        return   <li key={item.id} className="flex">
                        <div className="w-[5px] h-[5px] rounded-full bg-black mt-3 mr-2 p-[4px]"></div>
                        <div className="text-md">
                          <span className="font-semibold mr-1">
                            {item?.authors ? `${item.authors},` : ""}
                          </span>
                          {item?.title ? `"${item.title}"` : ""}
                          {item?.journal_name ? ` ${item.journal_name},` : ""}
                          {item?.booktitle ? ` ${item.booktitle},` : ""}
                          {item?.citation_key ? ` ${item.citation_key},` : ""}
                          {item?.year ? ` ${item.year}` : ""}
                        </div>
                      </li>
                      }
                      )
                    }
                  </ul>
                </div>

              </div>
              :
              <>

              </>
          }

          {
            state === 8 ?
              <div className='w-[100%] p-3 text-black '>
                <Title title={"Phd Candidates"} />
                {
                  phd_students ?
                    <div className='  overflow-scroll h-[70vh] p-3 text-black border rounded-md shadow-lg hover:shadow-2xl'>
                      <table className='w-full'>
                        <tbody>
                          <tr className='border  border-black ' >
                            <td className='border-r px-3  border-black capitalize w-[100px] font-bold text-center'>Candidate Name</td>
                            <td className='border-r px-3 border-black capitalize w-[350px] font-bold text-center'>Thesis Topic</td>
                            <td className='border-r px-3 border-black capitalize w-[100px] font-bold text-center'>Start</td>
                            <td className=' px-3  capitalize w-[100px] font-bold text-center'>end</td>
                          </tr>
                          {
                            phd_students.map((item) => {
                              return <tr className='border  border-black' key={item.id}>
                                <td className='border-r px-3  border-black capitalize  '>{item.phd_student_name ? item.phd_student_name : "-"}</td>
                                <td className='border-r px-3 border-black capitalize w-[300px]'>{item.thesis_topic ? item.thesis_topic : "-"}</td>
                                <td className='border-r px-3 border-black capitalize '>{item.start_year ? item.start_year : "-"}</td>
                                <td className=' px-3  capitalize '>{item.completion_year ? item.completion_year : "-"}</td>
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
              <div className='w-[100%] p-3 text-black ' >
                <Title title={"PG/UG Projects"} />
                {
                  pg_ug_projects ?
                    <div className='  overflow-scroll h-[70vh] p-3 text-black border rounded-md shadow-lg hover:shadow-2xl'>
                      <table className='w-full'>
                        <tbody>
                          <tr className='border  border-black ' >
                            <td className='border-r px-3  border-black capitalize w-[100px] font-bold text-center'>Candidate Name</td>
                            <td className='border-r px-3  border-black capitalize w-[100px] font-bold text-center'>Candidate Program</td>
                            <td className='border-r px-3 border-black capitalize w-[350px] font-bold text-center'>Thesis Topic</td>
                            <td className='border-r px-3 border-black capitalize w-[100px] font-bold text-center'>Start</td>
                            <td className=' px-3  capitalize w-[100px] font-bold text-center'>end</td>
                          </tr>
                          {
                            pg_ug_projects.map((item) => {
                              return <tr className='border  border-black' key={item.id}>
                                <td className='border-r px-3  border-black capitalize '>{item.student_name ? item.student_name : "-"}</td>
                                <td className='border-r px-3  border-black capitalize'>{item.student_program ? item.student_program : "-"}</td>
                                <td className='border-r px-3 border-black capitalize '>{item.project_topic ? item.project_topic : "-"}</td>
                                <td className='border-r px-3 border-black capitalize '>{item.start_year ? item.start_year : "-"}</td>
                                <td className=' px-3  capitalize '>{item.completion_year ? item.completion_year : "-"}</td>
                              </tr>
                            }

                            )

                          }
                        </tbody>
                      </table>
                    </div>
                    : <div className='font bold uppercase p-4 font-bold border w-[100%] h-[70vh]'>data not found</div>
                }

              </div>
              : <></>
          }


          {
            state === 10 ?
              <div className='w-[100%] p-3 text-black font-poppins'>
                <Title title={"Subjects Teaching"} />
                {
                  subjects ?
                    <>
                      <div className='  overflow-scroll h-[70vh] p-3 text-black border rounded-md shadow-lg hover:shadow-2xl'>
                        <table className='w-full'>
                          <tbody>
                            <tr className='border  border-black ' >
                              <td className='border-r p-3 text-black  border-black capitalize w-[50px] font-bold'>Subject Code</td>
                              <td className='border-r p-3 text-black  border-black capitalize w-[350px] font-bold'>Subject Name</td>
                              <td className='border-r p-3 text-black border-black capitalize w-[100px] font-bold'>Start</td>
                              <td className='p-3 capitalize w-[100px] font-bold'>End</td>
                            </tr>
                            {
                              subjects.map((item) => {
                                return <tr className='border  border-black' key={item.id}>
                                  <td className='border-r p-2  border-black capitalize'>{item.code ? item.code : "-"}</td>
                                  <td className='border-r p-2  border-black capitalize '>{item.name ? item.name : "-"}</td>
                                  <td className='border-r p-2 border-black capitalize '>{item.start ? item.start : "-"}</td>
                                  <td className='p-2  capitalize'>{item.end ? item.end : "-"}</td>
                                </tr>
                              }

                              )

                            }
                          </tbody>
                        </table>
                      </div>
                    </> :
                    <div className='font bold uppercase p-4 font-bold border w-[100%] h-[70vh]'>data not found</div>
                }

              </div>
              : <></>
          }

          {
            state === 11 ?
              <div className='w-[100%] p-3 text-black font-poppins'>
                <Title title={"Books"} />
                {
                  <div className='w-[100%] h-[60vh] overflow-scroll p-4 border shadow-lg hover:shadow-2xl'>
                    {
                      books.length === 0 ? <><div className='font bold uppercase p-4 font-bold border w-[100%] h-[70vh]'>data not found</div></> : <></>
                    }
                    <ul className='list-decimal gap-3 flex flex-col'>
                      {
                        books?.map((item,i) => {
                          return <li key={i} className='flex'>
                            <div className='w-[5px] h-[5px] rounded-full bg-black mt-3 mr-2 p-[4px]'></div>
                            <div className='text-md'><span className='font-semibold mr-1'>{item?.authors ? item.authors : ""}</span> , &quot{item?.title ? item.title : ""}&quot ,{item?.journal_name ? item.journal_name : ""} ,{item?.citation_key ? item.citation_key : ""} , {item?.year ? item.year : ""} </div>
                          </li>
                        }
                        )
                      }
                    </ul>
                  </div>
                }
              </div>
              : <></>
          }

          {state === 12 ? (
            <div className='w-full p-3 text-black font-poppins '>
              <Title title={'memberships'} />
              {membership ?
                <>
                  <div className='  overflow-scroll h-[70vh] p-3 text-black border rounded-md  shadow-lg hover:shadow-2xl'>
                    <table className='w-full'>
                      <tbody>
                        <tr className='border  border-black ' >
                          <td className='border-r px-3  border-black capitalize w-[100px] font-bold'>Membership id</td>
                          <td className='border-r px-3 border-black capitalize w-[350px] font-bold'>Membership Name</td>
                          <td className='border-r  border-black px-3  capitalize w-[100px] font-bold'>start</td>
                          <td className=' px-3  capitalize  font-bold w-[100px]'>end</td>
                        </tr>
                        {
                          membership.map((item) => {
                            return <tr className='border  border-black' key={item.id}>
                              <td className='border-r px-3  border-black capitalize '>{item.membership_id ? item.membership_id : "-"}</td>
                              <td className='border-r px-3 border-black capitalize w-[300px]'>{item.membership_society ? item.membership_society : "-"}</td>
                              <td className='border-r  border-black px-3  capitalize '>{item.start ? item.start : "-"}</td>
                              <td className=' px-3  capitalize '>{item.end ? item.end : "-"}</td>
                            </tr>
                          }

                          )

                        }
                      </tbody>
                    </table>
                  </div>
                </> :
                // <></>
                <div className='font bold uppercase p-4 font-bold border w-[100%] h-[70vh]'>data not found</div>
              }

            </div>
          ) :
            <></>
          }

          {
            state === 13 ?
              <div className='w-[100%] p-3 text-black font-poppins'>
                <Title title={"Articles"} />
                {
                  <div className='w-[100%] overflow-scroll h-[60vh] p-4 border shadow-lg hover:shadow-2xl'>
                    {
                      article.length === 0 ? <><div className='font bold uppercase p-4 font-bold border w-[100%] h-[70vh]'>data not found</div></> : <></>
                    }
                    <ul className='list-decimal gap-3 flex flex-col'>
                      {
                        article?.map((item,i) => {
                          return <li key={i} className='flex'>
                            <div className='w-[5px] h-[5px] rounded-full bg-black mt-3 mr-2 p-[4px]'></div>
                            <div className='text-md'><span className='font-semibold mr-1'>{item?.authors ? item.authors : ""}</span> , &quot;{item?.title ? item.title : ""}&quot; ,{item?.journal_name ? item.journal_name : ""} ,{item?.citation_key ? item.citation_key : ""} , {item?.year ? item.year : ""} </div>
                          </li>
                        }
                        )
                      }
                    </ul>
                  </div>
                }
              </div>
              : <></>
          }
        </div>
      </div>
      :<></>}
    </div>

  )
}
export default FacultyInfo
