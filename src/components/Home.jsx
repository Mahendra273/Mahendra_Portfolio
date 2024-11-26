import React from 'react'
import ProfileCard from './ProfileCard'
export default function Home() {
  return (
    <>
    <div className='card_discreption_section'>
    <ProfileCard/>
    <div className='description_container'>
    <div className='col-flex'>
      <h2 className='h2-headings'>Summary</h2>
      <p className='caption'>
      Enthusiastic Software Developer with 2+ years of experience in the development of web applications,
      possessing robust proficiency in JavaScript DOM and React.js. Demonstrating expertise in crafting clear and
       concise code, facilitating ease of maintenance and troubleshooting.

      </p>
      </div>
      <h2 className='h2-headings'>Experience</h2>
      <div className='col-flex'>
      <p className='caption'><b>Begalileo </b>| Software Developer</p>
      <p className='caption'> May 2023 – Present | Bangalore, India</p>
      </div>
    </div>
    </div>
    </>
  )
}
