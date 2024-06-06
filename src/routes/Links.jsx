import React from "react";
import {Link} from "react-router-dom"


export default function Links (){
    return (
        <nav className="nav_bar">
            <div className="main_link_tabs">
            <div className="links_container">
        <Link to="/" className="link_item">Home</Link>
        <Link to="/skills" className="link_item">Skills</Link>
        </div>
        <Link to="/contact" className="contact_link">Contact Me</Link>
        </div>
        </nav>

    )

}