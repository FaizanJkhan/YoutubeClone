import React from "react";
import Search from "./Search";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faMagnifyingGlass, faMicrophone } from '@fortawesome/free-solid-svg-icons';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { faBell } from '@fortawesome/free-solid-svg-icons';


let Navbar=()=>{

    return(

        <>
        <nav className="navbar">
                <div className="navbar__logo">
                    <FontAwesomeIcon className="logo-icon" icon={faYoutube}/>
                
                    <p>YouTube</p>
                </div>
                <div className="input__search">
                
                    <Search></Search>
                    <FontAwesomeIcon className="search-icon" icon={faMagnifyingGlass}></FontAwesomeIcon>
                    <FontAwesomeIcon  className="microphone"icon={faMicrophone} />
                    
                </div>
                <ul className="navbar__links">
                <li><a href="/"><FontAwesomeIcon className="plus-icon" icon={faPlus} /></a></li>

                    <li><a href="/about"><FontAwesomeIcon className="plus-icon" icon={faBell} /></a></li>

                    <li><a href="/">
                        <img className="profile-icon" src="https://avatarfiles.alphacoders.com/111/thumb-111768.jpg" alt="profiles" />
                    </a></li>

                </ul>
            </nav>
        </>


    )
}

export default Navbar;