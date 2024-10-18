"use client"
import Image from "next/image";
import { useState } from "react";
const WomenCell = () => {
    const [state,setstate]=useState("Home")
  const tags=["Home","People"]
  return (
    <div>
      <div className="block md:hidden ">
        <div className="flex flex-col gap-8">
          <div className="flex flex-wrap justify-center items-center ">
            {
              tags.map((item, i) => {
                return <span key={i} className={`m-2 p-2  cursor-pointer rounded-lg ${state === item ? "bg-red-300 text-black" : "bg-red-700 text-white"}`} onClick={() => setstate(item)}>{item}</span>
              })
            }
          </div>
          <div className=" flex flex-col">
            {
              state === "Home" ?
                  <div className="border shadow-xl w-full h-[70vh] p-3 text-md font-semibold text-black">
                  As per the directives of the Chairman UGC a Women’s cell has been set up under a committee to ensure safe working environment and inspiring learning environment for the women employees and girl students of the Institute in order to enable them to discharge their academic and professional responsibilities efficiently. The committee constantly monitors the existing arrangements and suggests additional measures to be put into operation to ensure that the Institute is free of any kind of harassment.
                  </div>
                
                :
                <></>
            }
            {
              state === "People" ?
                <>
                  
                </>
                :
                <></>
            }
            

          </div>

        </div>
</div>
      
      <div className="md:block hidden">
        <div className="w-full flex">
          <div className="flex flex-col justify-center w-[20%] ">
            {
              tags.map((item, i) => {
                return <span key={i} className={`m-2 p-2 w-[150px] cursor-pointer text-sm font-bold border-2px shadow-md ${state === item ? "bg-red-300 text-black" : "bg-red-700 text-white"}`} onClick={() => setstate(item)}>{item}</span>
              })
            }
          </div>
          <div className="ml-8 flex flex-col w-[80%]">
            {
              state === "Home" ?
                <>
                <div className=" ">

                  <div className="border shadow-xl w-full flex h-[60vh] p-3 text-md font-semibold text-black">
                  The National Service Scheme (NSS) was launched in 1969 and is an Indian government-sponsored public service program conducted by the Department of Youth Affairs and Sports of the Government of India aimed at developing student's personality through community service, NSS is a voluntary association of young people in Colleges, Universities and at +2 level working for a campus-community linkage. The NSS chapter at NIT Patna follows the cardinal principle of the NSS programme which is aimed at organising events by the students themselves such that both students and teachers get a sense of involvement in the tasks of nation building through their combined participation in community service. The programme aims to inculcate social welfare in students, and to provide service to society without bias. NSS volunteers work to ensure that everyone who is needy gets help to enhance their standard of living and lead a life of dignity.
                  <Image src={"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MTAiIGhlaWdodD0iNDA0IiBmaWxsPSJub25lIiB2aWV3Qm94PSIwIDAgNDEwIDQwNCI+PHBhdGggZmlsbD0iI0YyRjJGMiIgZD0iTTI5NS4yMjYgNTEuNjY4NEMzMTkuMTY5IDczLjc0MDcgMzM0LjgzOSAxMDQuNTM3IDM1OS45OTUgMTQ4LjgwMkMzODUuMjY4IDE5My4wNjcgNDIwLjExOCAyNTAuNzk0IDQwNi45MDIgMjg1LjIxQzM5My42ODUgMzE5LjYyNiAzMzIuMTY4IDMzMC43MiAyNzQuMDgyIDM1My4yODlDMjE1Ljk5NyAzNzUuODU4IDE2MS4zMTEgNDA5Ljc3MiAxMTEuMDA0IDQwMy4xNkM2MC42OTcyIDM5Ni41NDkgMTQuNzY5MyAzNDkuNDI0IDMuMjE4MTYgMjk3LjMwM0MtOC40NTAwNCAyNDUuMDU2IDE0LjE1MjEgMTg3LjgyNiAzMC40MzMzIDEzNS43MDVDNDYuNTk3NSA4My41ODk1IDU2LjQ0MDcgMzYuNTYyMyA4NC43NTE5IDE1LjI3MDZDMTEzLjA2MyAtNi4wMjA5OSAxNTkuODUzIC0xLjQ0NjAyIDE5OS40NzEgNy40MDM2NkMyMzkuMDgzIDE2LjM2MjUgMjcxLjI4MyAyOS42MDE1IDI5NS4yMjYgNTEuNjY4NFoiLz48cGF0aCBmaWxsPSIjRkY5ODExIiBkPSJNMTQxLjExIDEzNC40OTlMMTIyLjU5NSAyMDAuMThDMTE4LjYyOCAyMTQuNTM4IDEzNS42MzEgMjIwLjE0MyAxMzkuNzg3IDIwNi42NjZMMTU2LjM0OSAxNDYuMDg2SDE2MS4wMDlMMTMyLjU0NSAyNTIuNTExSDE1OS4xMlYzMzIuNDg3QzE1OS4xMiAzNDYuOTcxIDE3OS4yNzIgMzQ2Ljk3MSAxNzkuMjcyIDMzMi40ODdWMjUyLjUxMUgxODUuNTY5VjMzMi40ODdDMTg1LjU2OSAzNDYuOTcxIDIwNS4wOTEgMzQ2Ljk3MSAyMDUuMDkxIDMzMi40ODdWMjUyLjUxMUgyMzIuNDIxTDIwMy4zMjggMTQ2LjA4NkgyMDguNjE3TDIyNS4xNzkgMjA2LjY2NkMyMjkuMjczIDIyMC40NTggMjQ2LjE1IDIxNC41MzggMjQyLjM3MSAyMDAuMjQzTDIyMy44NTcgMTM0LjQ5OUMyMjEuMzM4IDEyNy4wNjggMjEyLjM5NiAxMTMuOTcgMTk3LjQwOCAxMTMuMzRIMTY3LjYyMkMxNTIuMTMgMTEzLjk3IDE0My4yNTEgMTI2Ljk0MiAxNDEuMTEgMTM0LjQ5OVoiLz48cGF0aCBmaWxsPSIjRkY5ODExIiBkPSJNMjA1LjQ3NiA4NC40ODkxQzIwNS40NzYgNzEuNTE2NiAxOTUuMTQ5IDYxIDE4Mi40MjggNjFDMTY5LjcwOCA2MSAxNTkuMzggNzEuNTE2NiAxNTkuMzggODQuNDg5MUMxNTkuMzggOTcuNDYxNiAxNjkuNzA4IDEwNy45NzggMTgyLjQyOCAxMDcuOTc4QzE5NS4xNDkgMTA3Ljk3OCAyMDUuNDc2IDk3LjQ2MTYgMjA1LjQ3NiA4NC40ODkxWiIvPjxwYXRoIGZpbGw9IiNGRjk4MTEiIGQ9Ik0yNDYuMDQ4IDE2NS44ODRMMjMxLjQ2OSAyMTcuNjA2QzIyOC4zNDUgMjI4LjkxMyAyNDEuNzM0IDIzMy4zMjYgMjQ1LjAwNyAyMjIuNzE0TDI1OC4wNDkgMTc1LjAwOEgyNjEuNzE5TDIzOS4zMDQgMjU4LjgxNkgyNjAuMjMxVjMyMS43OTZDMjYwLjIzMSAzMzMuMjAxIDI3Ni4xIDMzMy4yMDEgMjc2LjEgMzIxLjc5NlYyNTguODE2SDI4MS4wNTlWMzIxLjc5NkMyODEuMDU5IDMzMy4yMDEgMjk2LjQzMiAzMzMuMjAxIDI5Ni40MzIgMzIxLjc5NlYyNTguODE2SDMxNy45NTVMMjk1LjA0NCAxNzUuMDA4SDI5OS4yMDlMMzEyLjI1MiAyMjIuNzE0QzMxNS40NzUgMjMzLjU3NCAzMjguNzY1IDIyOC45MTMgMzI1Ljc5IDIxNy42NTZMMzExLjIxIDE2NS44ODRDMzA5LjIyNyAxNjAuMDMyIDMwMi4xODUgMTQ5LjcxNyAyOTAuMzgyIDE0OS4yMjFIMjY2LjkyNkMyNTQuNzI3IDE0OS43MTcgMjQ3LjczNSAxNTkuOTMzIDI0Ni4wNDggMTY1Ljg4NFoiLz48cGF0aCBmaWxsPSIjRkY5ODExIiBkPSJNMjk2Ljc0MSAxMjYuNDk3QzI5Ni43NDEgMTE2LjI4MiAyODguNjA4IDEwOCAyNzguNTkxIDEwOEMyNjguNTczIDEwOCAyNjAuNDQgMTE2LjI4MiAyNjAuNDQgMTI2LjQ5N0MyNjAuNDQgMTM2LjcxMyAyNjguNTczIDE0NC45OTQgMjc4LjU5MSAxNDQuOTk0QzI4OC42MDggMTQ0Ljk5NCAyOTYuNzQxIDEzNi43MTMgMjk2Ljc0MSAxMjYuNDk3WiIvPjxwYXRoIGZpbGw9IiNGRjk4MTEiIGQ9Ik01NC4wNDg1IDE2NS44ODRMMzkuNDY4OSAyMTcuNjA2QzM2LjM0NDcgMjI4LjkxMyA0OS43MzQxIDIzMy4zMjYgNTMuMDA3MSAyMjIuNzE0TDY2LjA0OTQgMTc1LjAwOEg2OS43MTkxTDQ3LjMwNDIgMjU4LjgxNkg2OC4yMzE0VjMyMS43OTZDNjguMjMxNCAzMzMuMjAxIDg0LjEwMDMgMzMzLjIwMSA4NC4xMDAzIDMyMS43OTZWMjU4LjgxNkg4OS4wNTk0VjMyMS43OTZDODkuMDU5NCAzMzMuMjAxIDEwNC40MzIgMzMzLjIwMSAxMDQuNDMyIDMyMS43OTZWMjU4LjgxNkgxMjUuOTU1TDEwMy4wNDQgMTc1LjAwOEgxMDcuMjA5TDEyMC4yNTIgMjIyLjcxNEMxMjMuNDc1IDIzMy41NzQgMTM2Ljc2NSAyMjguOTEzIDEzMy43OSAyMTcuNjU2TDExOS4yMSAxNjUuODg0QzExNy4yMjcgMTYwLjAzMiAxMTAuMTg1IDE0OS43MTcgOTguMzgyNCAxNDkuMjIxSDc0LjkyNjFDNjIuNzI2OCAxNDkuNzE3IDU1LjczNDYgMTU5LjkzMyA1NC4wNDg1IDE2NS44ODRaIi8+PHBhdGggZmlsbD0iI0ZGOTgxMSIgZD0iTTEwNC43NDEgMTI2LjQ5N0MxMDQuNzQxIDExNi4yODIgOTYuNjA3OCAxMDggODYuNTkwNSAxMDhDNzYuNTczMyAxMDggNjguNDQwNCAxMTYuMjgyIDY4LjQ0MDQgMTI2LjQ5N0M2OC40NDA0IDEzNi43MTMgNzYuNTczMyAxNDQuOTk0IDg2LjU5MDUgMTQ0Ljk5NEM5Ni42MDc4IDE0NC45OTQgMTA0Ljc0MSAxMzYuNzEzIDEwNC43NDEgMTI2LjQ5N1oiLz48L3N2Zz4="} height={200} width={200} alt="blank"/>
                  </div>
                </div>
                </>
                :
                <></>
            }
            {
              state === "People" ?
                <>
                  
                </>
                :
                <></>
            }
          </div>
        </div>

      </div>
    </div>
  )
}

export default WomenCell
