import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faGithub,faWhatsapp} from '@fortawesome/free-brands-svg-icons';

export default function Contact() {
    let phoneNumber='8328157703'
  let email="mahendrayarappa.gmail.com"
  return (
   <>
   <div className='contact_conatiner'>
   <ul className="card__content-list-social">
    <li className="card__content-social">
         <a className="linkedin" href="https://www.linkedin.com/in/mahendra-yarrappa" target='_blank'>
         <FontAwesomeIcon icon={faLinkedin} size='lg'  color='blue'/>
         <p className='caption'>Linkdin</p>
        </a>
      </li>
      <li className="card__content-social">
        <a className="github" href="https://github.com/Mahendra273" target='_blank'>
        <FontAwesomeIcon icon={faGithub} size="lg"  color='#333'/>
        <p className='caption'>Github</p>
        </a>
      </li>
      <li className="card__content-social" target="_blank">
        <a className="email" href={`mailto:${email}`}>
        <FontAwesomeIcon icon={faEnvelope} size="lg" color='#333'/>
        <p className='caption'>Email</p>
        </a>
      </li>
      <li className="card__content-social" >
        <a className="whatsapp" href={`https://wa.me/${phoneNumber}`} target='_black'>
        <FontAwesomeIcon icon={faWhatsapp} size='lg' color='green'/>
        <p className='caption'>whatsapp</p>
        </a>
      </li>
   
    </ul>
   </div>
   </>
  )
}
