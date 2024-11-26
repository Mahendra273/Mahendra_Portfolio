import React, { useReducer, useRef } from 'react'
import { storeContext } from '../App'

export default function About() {
   
const aboutRef=useRef(null)

const handleScroll=()=>{

    
}

    return (
        <div className='skill_main_conatiner py-[52px] max-sm:px-[16px] sm:py-[5rem]  flex flex-col gap-4' ref={aboutRef}>

            <h4 className='text-[12px] py-[5px] px-[15px] bg-[#374151] rounded-full w-fit'>About me</h4>
            <div className='skill_container gap-3 max-w-[800px] px-3 py-4'>
                <p className='text-[20px]'>Curious about me? Here you have it.</p>
                <p className='text-caption text-[#cecee5]'>

                    "I am a Front-End Developer with 2+ years of experience in building dynamic, responsive web applications. My expertise includes HTML, CSS, JavaScript, and frameworks like React.js and Next.js. I excel in writing clean, maintainable code and creating user-friendly interfaces.<br /><br />

                    Skilled in tools like Git, GitHub, Redux, Axios, and CSS frameworks such as Tailwind CSS and Bootstrap, I deliver efficient, visually appealing solutions. I have a strong focus on performance optimization, accessibility, and cross-browser compatibility.<br /><br />

                    I am passionate about solving challenges, learning emerging technologies, and crafting impactful digital experiences that make a difference. With a growth mindset and attention to detail, I ensure every project meets high standards and exceeds expectations."
                </p>
            </div>
        </div>
    )
}
