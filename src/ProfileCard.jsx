import React from 'react'
import pic from '../images/profile.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';

export default function ProfileCard() {
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
         <a className="linkedin" href="https://www.linkedin.com/in/mahendra-yarrappa">
         <FontAwesomeIcon icon={faLinkedin} size='lg' />
        </a>
      </li>
      <li className="card__content-social">
        <a className="instagram" href="#">
        <FontAwesomeIcon icon={faGithub} size="lg" />
        </a>
      </li>

    
   
    </ul>
    <div className='card__content_buttons'>
        <button className='card__small_btn'>Resume</button>
        <button className='card__small_btn'>Contact</button>
      </div>
  </div>
</div>
    </div>
    </>

  )
}
