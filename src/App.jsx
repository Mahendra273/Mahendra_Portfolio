import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import './assets/stylesheets/body.scss';
import RoutesLayout from './routes/RoutesLayout'
import { BrowserRouter } from 'react-router-dom'
import Links from './routes/Links'


function App() {


  return (
    <>
    <div className='main_container'>
      <BrowserRouter>
      <Links/>
      <div className='outer_container'>
     <RoutesLayout/>
     </div>
     </BrowserRouter>
    
     </div>
    </>
  )
}

export default App
