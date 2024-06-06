import React from "react";
import { Routes,Route } from "react-router-dom";
import Home from "../Home";
import '../Navbar.css'
import Skills from "./Skills";
import Contact from "../Contact";
export default function RoutesLayout(){
    return(
        <>
        
            <Routes>
            <Route index element={<Home/>}/>
            <Route path="skills" element={<Skills/>}/>
            <Route path="contact" element={<Contact/>}/>
            </Routes>
         
    
        </>
    )
}