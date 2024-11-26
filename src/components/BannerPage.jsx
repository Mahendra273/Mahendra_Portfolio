


import React from 'react';
import pic from '../../public/images/profile.jpg'
import mypdf from '../../public/images/Mahendra_yarrappa.pdf';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faGithub, faWhatsapp } from '@fortawesome/free-brands-svg-icons';

export default function BannerPage() {
  let phoneNumber = '+91-9182885678';
const Name='Mahendra'
  return (
    <div className='profile_container'>
      <div className="card w-full">
        <div className="card__background-circle "></div>
        <div className="card__background-circle"></div>

        <div className="card__content rounded-2xl flex-col-reverse py-[52px] px-[16px] sm:py-[4rem] sm:px-[2rem] sm:flex-row">
         
          <div className='card__content-section flex flex-col justify-center  gap-10 w-full items-start ' >
            <div className='flex flex-col justify-center items-center '>
            <h2 className="card__content-title text-white text-6xl animate-slide-in font-semibold w-full ">

                <h4 className='no-wrap max-sm:text-[50px]'>I'm <strong className='name'>{Name} </strong></h4>
                Frontend <br/>
                Developer
              </h2>



            </div>
            <div className='flex flex-col gap-5 justify-end w-full' >

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

          <img className="card__content-img animate-slide-in-right" src={pic} alt="Profile" />
        </div>
      </div>
    </div>
  );
}
