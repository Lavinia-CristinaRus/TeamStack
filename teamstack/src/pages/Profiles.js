import React, {useState} from 'react';
import './../components/Navbar.css';
import "./../components/Profiles.css";
import {Link} from 'react-router-dom';
import menu from "./../assets/menu.png";
import settings from "./../assets/setting.png"
import profile from "./../assets/profile-pic.png"
import arrow from "./../assets/arrow.png"
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
                        <Link to="/login">Login</Link>
                    </div>
                    <div
                        className={`nav-toggle ${isOpen && "open"}`}
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        <div className="bar"></div>
                    </div>
                </div>
                <Tilt>
                    <div className="container">
                        <div className="profile-box">
                            <img src={menu} className="menu-icon"/>
                            <img src={settings} className="setting-icon"/>
                            <img src={profile} className="profile-pic"/>
                            <h3>Name</h3>
                            <p>Web Developer</p>
                            <button type="button">Add</button>
                            <div className="profile-bottom">
                                <p>Learn More About My Profile</p>
                                <img src={arrow} />
                            </div>
                        </div>
                    </div>
               </Tilt>
        </div>

    </div>

    )
}

export default Profiles;
