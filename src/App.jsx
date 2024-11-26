import { createContext, useRef, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import './assets/stylesheets/body.scss';
import RoutesLayout from './routes/RoutesLayout'
import { BrowserRouter } from 'react-router-dom'
import Links from './routes/Links'
import BannerPage from './components/BannerPage';
import Skills from './components/Skills';
import AllSkillsShowCase from './components/AllSkills';
import About from './components/About';

export const storeContext=createContext(null)

function App() {

  const aboutRef=useRef(null)
  const skillRef=useRef(null)

const scrollUpHandler=()=>{
  window.scrollTo({top:0,behavior:'smooth'});

}

function handleScroll(type) {

  switch (type) {
      case 'about':
          aboutRef.current?.scrollIntoView({ behavior: 'smooth' });
          break;
      case 'skills':
          skillRef.current?.scrollIntoView({ behavior: 'smooth' });
          break;
      default:
          console.log('home');
          break;
  }
}




  return (
    <>
    <div className='main_container'>
      <BrowserRouter>
      <storeContext.Provider value={{aboutRef,skillRef,handleScroll}}>
      <Links/>
      <div className='outer_container'>

     <BannerPage/>
     <About/>
    <AllSkillsShowCase/>


     {/* <RoutesLayout/> */}
     </div>
    </storeContext.Provider>

     </BrowserRouter>
    

     <button className="scrollUp_btn" onClick={scrollUpHandler}>
                <svg viewBox="0 0 384 512" className="svgIcon">
                    <path
                        d="M214.6 41.4c-12.5-12.5-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 141.2V448c0 17.7 14.3 32 32 32s32-14.3 32-32V141.2L329.4 246.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-160-160z"
                    ></path>
                </svg>
            </button>
     </div>
    </>
  )
}

export default App
