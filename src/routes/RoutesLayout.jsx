import React from "react";
import { Routes, Route } from "react-router-dom";

import '../global.css'
import Contact from "../components/Contact";
import Skills from "../components/Skills";
import Home from "../components/Home";
import About from "../components/About";

export default function RoutesLayout() {
    return (
        <>

            <Routes>
                <Route index path="/" element={<Home />} />
                <Route path="skills" element={<Skills />} />
                <Route path="about" element={<About />} />
                <Route path="contact" element={<Contact />} />
            </Routes>

           

        </>
    )
}