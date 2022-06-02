import React, {useState} from 'react';
import './../../components/Navbar.css';
import "./../../components/Profiles.css";
import {Link} from 'react-router-dom';
import profile from "./../images/1.png"
import Tilt from 'react-vanilla-tilt';
import CurrencyInput from 'react-currency-input-field';
import ViewTeam from '../ViewTeam';
import AnimatedPage from '../AnimatedPage';

function ProjectDetails() {
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
                        <Link to ="/viewprojects">View Projects</Link> 
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

                <ViewTeam/>
                <AnimatedPage>
                <Tilt style={{position:'relative', margin:'80px', backgroundColor:'rgba(255,255,255,0.2)', paddingLeft:'30px', paddingRight:'30px', borderRadius: '20px'}}>
                            <img src={profile} className="profile-pic"/>
                            <h3>Project Name</h3>
                            <p>Best Project Ever</p>
                            <div className="profile-bottom">
                                <p>Project Details</p>
                            </div>
                           
               </Tilt>
               <CurrencyInput suffix="€" defaultvalue={0} placeholder="Type in the amount" className='amountInvest' />
               <button className="btnInvest">Invest</button>
               </AnimatedPage>
        </div>

    </div>

    )
}

export default ProjectDetails;
