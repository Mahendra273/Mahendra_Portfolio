import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faJs, faReact, faHtml5, faCss3,  faSass, faGit, faGithub } from '@fortawesome/free-brands-svg-icons';
import next from '../../public/skills/next.svg'
import typeScript from '../../public/skills/typeScript.svg'
import jquery from '../../public/skills/jquery.svg'
import tailwind from '../../public/skills/tailwind.svg'
import boostrap from '../../public/skills/boostrap.svg'
import git from '../../public/skills/git.svg'
const skills = [
  { icon: faHtml5, color: '#E34F26', title: 'HTML 5' },
  { icon: faCss3, color: '#1572B6', title: 'CSS 3' },
  { Img: typeScript, color: '#181717', title: 'TypeScript' },
  { icon: faJs, color: '#F7DF1E', title: 'JavaScript' },
  { icon: faReact, color: '#61DAFB', title: 'React' },
  { icon: faSass, color: '#CC6699', title: 'Sass' },
  { Img: git, color: '#F05032', title: 'Git' },
  { icon: faGithub, color: '#181717', title: 'GitHub' },
  { Img: next, color: '#181717', title: 'Next' },
  { Img: jquery, color: '#181717', title: 'Jquery' },
  { Img: tailwind, color: '#181717', title: 'Tailwind' },
  { Img: boostrap, color: '#181717', title: 'Bootstrap' },
];








const AllSkillsShowCase = () => (

  <div className='flex  flex-col gap-4 py-[52px] max-sm:px-[16px] sm:py-[5rem]'>
    <div className='flex flex-col items-center gap-2 w-fit m-auto'>
      <h4 className='text-[12px] py-[5px] px-[15px] bg-[#374151] rounded-full w-fit'>Skills</h4>
      <p className='text-[14px]'>This skills, tools and technologies i am very good at:</p>
    </div>
  <div className='flex gap-[2rem] flex-wrap justify-center py-[1rem] px-[1rem] sm:px-[3rem] sm:w-[65%] m-auto '>
    {skills.map((skill, index) => (
       
   <div className='flex flex-col gap-[5px] justify-center items-center' key={index}>
       <div key={index} className='skills_card_small'>
        {
            skill.Img ?
           <img src={skill.Img} />
                :
        <FontAwesomeIcon icon={skill.icon} size="3x" title={skill.title} style={{ color: skill.color }} />

        }
      </div>
      <p className='white'>{skill.title}</p>
    </div>
    
    ))}
    </div>
  </div>
);

export default AllSkillsShowCase;
