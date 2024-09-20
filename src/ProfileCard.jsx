import React from 'react';
import pic from '../public/images/profile.jpg';
import mypdf from '../public/images/Mahendra_yarrappa.pdf';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faGithub, faWhatsapp } from '@fortawesome/free-brands-svg-icons';

export default function ProfileCard() {
  let phoneNumber = '+91-9182885678';

  return (
    <div className='profile_container'>
      <div className="card">
        <div className="card__background-circle "></div>
        <div className="card__background-circle"></div>
        <div className="card__content rounded-2xl">
          <img className="card__content-img" src={pic} alt="Profile" />
          <div className='card__content-section flex flex-col justify-center items-center gap-2' >
            <div className='flex flex-col justify-center items-center'>
            <h2 className="card__content-title text-white">Y Mahendra</h2>
            <p className="card__content-description text-white">Software Developer</p>
            </div>
            
            <div className="social-card">
              <button className="Btn github">
                <a className="github svgContainer" href="https://github.com/Mahendra273" target='_blank' rel="noopener noreferrer">
                  <FontAwesomeIcon icon={faGithub} size="1x"  color='#fff'/>
                </a>
                <span className="BG"></span>
              </button>

              <button className="Btn whatsapp">
                <a className="whatsapp svgContainer" href={`https://api.whatsapp.com/send?phone=${phoneNumber}`} target='_blank' rel="noopener noreferrer">
                  <FontAwesomeIcon icon={faWhatsapp} size="1x"  color='#fff' />
                </a>
                <span className="BG"></span>
              </button>

              <button className="Btn linkdin">
                <a className="linkedin svgContainer" href="https://www.linkedin.com/in/mahendra-yarrappa" target='_blank' rel="noopener noreferrer">
                  <FontAwesomeIcon icon={faLinkedin} size="1x" color='#fff' />
                </a>
                <span className="BG"></span>
              </button>

              <button className="Btn email">
                <a className="email svgContainer" href='mailto:mahendrayarappa@gmail.com' target='_blank' rel="noopener noreferrer">
                  <FontAwesomeIcon icon={faEnvelope} size="1x" color='#fff'/>
                </a>
                <span className="BG"></span>
              </button>
            </div>

            <div className='card__content_buttons p-1'>
              <a className='card__small_btn' href={mypdf} target='_blank'>Resume</a>
              <a className='card__small_btn' href='/contact'>Contact</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
