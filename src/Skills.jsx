import React from 'react'
import skillsData from './skills.json';


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'



export default function Skills() {
 
  return (
    <>
    <div className='skill_main_conatiner'>

      <div className='skill_container'>
{
  skillsData.skills.map((skill,index)=>{
return(

        <div className='skill_card' key={index}>
        
          <img src={`./images/${skill.icon}.svg`}/>
        <p className='caption'>{skill.skillName}</p>
        </div>
)
          })
}

      </div>

    </div>
    </>
  )
}
