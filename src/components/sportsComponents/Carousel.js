"use client"
import React,{useState,useEffect} from 'react'

function Carousel({children:pics,
    autoSlideInterval=3000,
    autoSlide=true,}){

    const [curr,setCurr]=useState(0)
    const prev=()=>{
        setCurr((curr)=>(curr===0?pics.length-1:curr-1))
    }
    const next=()=>{
        setCurr((curr)=>(curr===pics.length-1?0:curr+1))
    }
    useEffect(()=>{
        if(!autoSlide) return 
        const slideInterval=setInterval(next,autoSlideInterval)
        return ()=>clearInterval(slideInterval)
    },[])
    return(
        <div className=' relative overflow-hidden'>
            <div className='flex transition-transform ease-out duration-1000'
            style={{transform:`translateX(-${curr*100}%)`}}>
                {pics}
            </div>
        </div>
    )
}

export default Carousel