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
                        <Link to ="/myprojects">My Projects</Link> 
                        <Link to ="/profiles">My Profile</Link> 
                        <Link to="/login">Logout</Link>
                    </div>
                    <div
                        className={`nav-toggle ${isOpen && "open"}`}
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        <div className="bar"></div>
                    </div>
                </div>
               
                <Menu/>
                <div>
                <Tilt style={{position:'relative', margin:'110px', backgroundColor:'rgba(255,255,255,0.2)', padding:'30px', borderRadius: '20px'}}>
                            <div className='updateProfileIcon'>
                                <div className='tooltip'>Update Project</div>
                                <Link to="/updateproject"><img src={settings} className="setting-icon2"/></Link>
                            </div>
                            <img src={profile} className="profile-pic"/>
                            <h3>Emergency Ambulance Booking</h3>
                            <p>Android App</p>
                            <div className="profile-bottom">
                                <p>The system proposed here will help the users book an ambulance easily in an instant. The user will have to select the ambulance size, pick-up point & hospital. In case of emergency, the user will have to just select the pick-up point & destination and the system will automatically book the nearest ambulance and hospital. Once booked the ambulance operator will receive a notification for confirmation of the booking. The Ambulance driver can view the pick-up and drop location on Goggle Maps. The users will receive the contact details of the driver. The Hospitals can also view the booking history. This is how this Ambulance Booking App will act as a life savior in times of medical emergency.</p>
                            </div>
                        
               </Tilt>
               </div>
        </div>

    </div>

    )
}

export default ProjectIdea;
