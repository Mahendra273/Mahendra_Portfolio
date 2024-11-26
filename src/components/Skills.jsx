import skillsData from '../../src/skills.json';



export default function Skills() {

  return (
    <>
      <div className='skill_main_conatiner py-[5rem] px-[2rem]'>

        <div className='skill_container '>
          {
            skillsData.skills.map((skill, index) => {
              return (

                <div className='skill_card' key={index}>

                  <img src={`./images/${skill.icon}.svg`} />
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








