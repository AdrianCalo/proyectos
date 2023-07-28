import React from "react";
import { Link } from "react-router-dom";
import '../styles/header.css'

function Header() {
    return(
        <>
            <div className='cont-header-li'>
                        <li><Link to='/aboutme'>About Me</Link></li>
                        <li><Link to='/proyects'>Proyects</Link></li>
                        <li><Link to='/experience'>work experience</Link></li>
                        <li><Link to='/certifications'>Certifications</Link></li>
                        <li><Link to='/contacts'>Contacts</Link></li>
            </div>
        </>
    )
}
export default Header