import React from 'react'
import ProfileCard from './ProfileCard'
export default function Home() {
  return (
    <>
    <div style={{display:"flex",gap:'1rem'}}>
    <ProfileCard/>
    <div className='description_container'>
      <p className='caption'>
      Innovative FrontEnd Developer with a keen interest in building
user-centric products. Detail oriented professional with a knack to learn
new technologies. Looking forward to leverage my experience and
hands-on technical expertise in a challenging role as a Developer.
      </p>
    </div>
    </div>
    </>
  )
}
