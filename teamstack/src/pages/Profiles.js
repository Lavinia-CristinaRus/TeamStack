import React, {useState} from 'react';
import './../components/Navbar.css';
import "./../components/Profiles.css";
import {Link} from 'react-router-dom';
import settings from "./../assets/setting.png"
import profile from "./../assets/profile-pic.png"
import Tilt from 'react-vanilla-tilt'

function Profiles() {
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
                        <Link to="/login">Logout</Link>
                    </div>
                    <div
                        className={`nav-toggle ${isOpen && "open"}`}
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        <div className="bar"></div>
                    </div>
                </div>
                <Tilt style={{backgroundcolor:"transparent", padding:'30px'}}>
                        <div className="profile-box">
                            <div className='updateProfileIcon'>
                                <div className='tooltip'>Update Profile</div>
                                <Link to="/updateprofile"><img src={settings} className="setting-icon"/></Link>
                            </div>
                            <img src={profile} className="profile-pic"/>
                            <h3>Name</h3>
                            <p>Project Manager / Investor / Web Developer</p>
                            <div className="profile-bottom">
                                <p>Details About My Profile</p>
                            </div>
                        </div>
                  
               </Tilt>
        </div>

    </div>

    )
}

export default Profiles;
