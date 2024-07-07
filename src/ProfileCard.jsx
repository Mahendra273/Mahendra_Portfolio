import React from 'react'
import pic from '../images/profile.jpg'
import mypdf from '../images/Mahendra_yarrappa.pdf'
//import mypdf1 from '../images/Mahendra_yarrappa1.pdf'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faGithub,faWhatsapp} from '@fortawesome/free-brands-svg-icons';

export default function ProfileCard() {
  let phoneNumber='8328157703'

  return (
    <>    <div className='profile_container'>
   
<div className="card">
  
<div className="card__background-circle"></div>
<div className="card__background-circle"></div>
  <div className="card__content">
    <img className="card__content-img" src={pic} alt=""/>
    <div className='card__content-section'>
    <h2 className="card__content-title">Y Mahendra</h2>
    <p className="card__content-description">Software Developer</p>
    </div>
    <ul className="card__content-list-social">
    <li className="card__content-social">
         <a className="linkedin" href="https://www.linkedin.com/in/mahendra-yarrappa" target='_blank'>
         <FontAwesomeIcon icon={faLinkedin} size='lg'  color='blue'/>
        </a>
      </li>
      <li className="card__content-social">
        <a className="github" href="https://github.com/Mahendra273" target='_blank'>
        <FontAwesomeIcon icon={faGithub} size="lg"  color='#333'/>
        </a>
      </li>
      <li className="card__content-social" target="_blank">
      <a className="email" href='mailto:mahendrayarappa@gmail.com' target='_blank'>

        <FontAwesomeIcon icon={faEnvelope} size="lg" color='#333'/>
        </a>
      </li>
      <li className="card__content-social" >
        <a className="whatsapp" href={`https://wa.me/${phoneNumber}`} target='_black'>
        <FontAwesomeIcon icon={faWhatsapp} size='lg' color='green'/>
        </a>
      </li>
   
    </ul>
    <div className='card__content_buttons'>
        <a className='card__small_btn' href={mypdf} target='_blank'>Resume</a>
        <a className='card__small_btn' href='/contact'>Contact</a>
      </div>
  </div>
</div>
    </div>
    </>

  )
}
