import React, {useState} from 'react';
import './../../../components/Navbar.css';
import "./../../../components/Profiles.css";
import {Link} from 'react-router-dom';
import settings from "./../../../assets/setting.png"
import profile from "./../../images/1.png"
import Tilt from 'react-vanilla-tilt';
import Menu from "./../../Menu";

function ProjectIdea() {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className="under">
            <div className="over">
                <div className="Navbar">
                    <link rel="preconnect" href="https://fonts.googleapis.com"/>
                    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
                    <link href="https://fonts.googleapis.com/css2?family=Lobster&display=swap" rel="stylesheet"/>
                    <span className="nav-logo"><span>Team</span><br/>
                    <span>Stack</span></span>
                    <div className={`nav-items ${isOpen && "open"}`}>
                        <Link to="/login">Login</Link>
                    </div>
                    <div
                        className={`nav-toggle ${isOpen && "open"}`}
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        <div className="bar"></div>
                    </div>
                </div>
               
                <Menu/>
                <div >
                <Tilt style={{margin:'110px', backgroundColor:'rgba(255,255,255,0.2)', padding:'30px', borderRadius: '20px'}}>
                            <div className='updateProfileIcon'>
                                <div className='tooltip'>Update Project</div>
                                <Link to="/updateproject"><img src={settings} className="setting-icon"/></Link>
                            </div>
                            <img src={profile} className="profile-pic"/>
                            <h3>Project Name</h3>
                            <p>Best Project Ever</p>
                            <div className="profile-bottom">
                                <p>Project Details</p>
                            </div>
                        
               </Tilt>
               </div>
        </div>

    </div>

    )
}

export default ProjectIdea;
