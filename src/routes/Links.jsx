import React, { useContext, useState } from "react";
import { NavLink } from "react-router-dom";
import { storeContext } from "../App";

export default function Links() {
  const { handleScroll } = useContext(storeContext); 
  const [toggleShow,setToggleShow]=useState(false)

  return (
    <nav className="nav_bar max-sm:px-[10px] hi">
      <div className="main_link_tabs w-fit">

        
        <div className="max-sm:flex hidden" onClick={()=>setToggleShow(!toggleShow)}>
        <Menu/>
        </div>
        {
          toggleShow &&
          <MobileMenu setToggleShow={setToggleShow}/>
        }
        
        <div className="links_container w-full  sm:py-[1rem] sm:px-[5rem] max-sm:hidden">
          {/* Home Navigation */}
          <NavLink to="/" className="link_item">
            Home
          </NavLink>

          <NavLink to="/about" className="link_item" >
           About Me
          </NavLink>

           <NavLink to="/skills" className="link_item" >
           Skills
           </NavLink>

           <NavLink to="/contact" className="link_item" >
         Contact Me
          </NavLink>

         
        </div>

        
      </div>
    </nav>
  );
}


function MobileMenu({setToggleShow}){



  return(

    <div className="absolute left-0 top-0 flex flex-col bg-[#fff] px-[3rem] py-[2rem] z-[5] animate-menu rounded-br-lg h-[250px]" >

      <div className="absolute right-[15px] top-[15px]" onClick={()=>setToggleShow(false)}>
         <Close/>
      </div>
          {/* Home Navigation */}
          <NavLink to="/" className="text-[#000] py-2 px-3 hover:text-[#4664c2]" >
            Home
          </NavLink>

          <NavLink to="/about" className="text-[#000] py-2 px-3 hover:text-[#4664c2]" >
           About Me
          </NavLink>

           <NavLink to="/skills" className="text-[#000] py-2 px-3 hover:text-[#4664c2]" >
           Skills
           </NavLink>

           <NavLink to="/contact" className="text-[#000] py-2 px-3 hover:text-[#4664c2]" >
         Contact Me
          </NavLink>

         
        </div>
  )
}



function Menu(){

  return(
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24px" height="24px" fill="#fff"><path d="M 3 5 A 1.0001 1.0001 0 1 0 3 7 L 21 7 A 1.0001 1.0001 0 1 0 21 5 L 3 5 z M 3 11 A 1.0001 1.0001 0 1 0 3 13 L 21 13 A 1.0001 1.0001 0 1 0 21 11 L 3 11 z M 3 17 A 1.0001 1.0001 0 1 0 3 19 L 21 19 A 1.0001 1.0001 0 1 0 21 17 L 3 17 z"/></svg>
  )
}


function Close(){
  return(
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30" width="18px" height="18px">    <path d="M 7 4 C 6.744125 4 6.4879687 4.0974687 6.2929688 4.2929688 L 4.2929688 6.2929688 C 3.9019687 6.6839688 3.9019687 7.3170313 4.2929688 7.7070312 L 11.585938 15 L 4.2929688 22.292969 C 3.9019687 22.683969 3.9019687 23.317031 4.2929688 23.707031 L 6.2929688 25.707031 C 6.6839688 26.098031 7.3170313 26.098031 7.7070312 25.707031 L 15 18.414062 L 22.292969 25.707031 C 22.682969 26.098031 23.317031 26.098031 23.707031 25.707031 L 25.707031 23.707031 C 26.098031 23.316031 26.098031 22.682969 25.707031 22.292969 L 18.414062 15 L 25.707031 7.7070312 C 26.098031 7.3170312 26.098031 6.6829688 25.707031 6.2929688 L 23.707031 4.2929688 C 23.316031 3.9019687 22.682969 3.9019687 22.292969 4.2929688 L 15 11.585938 L 7.7070312 4.2929688 C 7.5115312 4.0974687 7.255875 4 7 4 z"/></svg>
  )
}

// import React from "react";
// import { NavLink } from "react-router-dom";

// export default function Links() {
//   return (
//     <nav className="nav_bar">
//       <div className="main_link_tabs">
//         <div className="links_container">
//           <NavLink   to="/" className="link_item" >
//             Home
//           </NavLink>
//           <NavLink to="/skills" className="link_item" >
//             Skills
//           </NavLink>
//         </div>
//         <NavLink to="/contact" className="contact_link" >
//           Contact Me
//         </NavLink>
//       </div>
//     </nav>
//   );
// }

