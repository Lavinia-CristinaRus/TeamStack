import React, { useState } from "react";
import 'react-router-dom'
import {Link} from 'react-router-dom';
import './../../components/Home.css';
import "./../../components/Navbar.css";
import DevProjectsContent from "./DevProjectsContent.js";
import './../../components/MyProjects.css';
import { ReactComponent as AnimatedSVG } from "./../../assets/in-the-office-animate.svg";
import AnimatedPage from "../AnimatedPage";
import ScrollToTop from "../ScrollToTop";

function DevProjects() {
    const [isOpen, setIsOpen] = useState(false);
        const [state] = useState({
        title:"Apply to the Newest Projects,",
        titleTwo:"Colaborate with the Most Talented",
        titleThree:"Developers",
        titleFour:"And The Best Teams",
    });
    return (
        <div className="under" style ={{height:"1150px"}}>
            <div className="over">
            <div className="Navbar">
                <link rel="preconnect" href="https://fonts.googleapis.com"/>
                <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
                <link href="https://fonts.googleapis.com/css2?family=Lobster&display=swap" rel="stylesheet"/>
                <span className="nav-logo"><span>Team</span><br/>
                <span>Stack</span></span>
                <div className={`nav-items ${isOpen && "open"}`}>
                    <Link to ="/devteamsprojects">My Projects</Link> 
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
            <div>
            <div className="curved-div">
                <div className="home-intro">
                    <h2>
                        <div className="title">{state.title}</div>
                        <div className="titleTwo">{state.titleTwo}</div>
                        <div className="titleThree">{state.titleThree}</div>
                        <div className="titleFour">{state.titleFour}</div>
                    </h2>
                        
            </div>
                <div className="animatedSVG">
                    <AnimatedSVG />
                </div>
           {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#0099ff" fill-opacity="1" d="M0,128L48,154.7C96,181,192,235,288,224C384,213,480,139,576,106.7C672,75,768,85,864,74.7C960,64,1056,32,1152,16C1248,0,1344,0,1392,0L1440,0L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path></svg>*/}
           <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#436d9a" fill-opacity="1" d="M0,288L48,261.3C96,235,192,181,288,170.7C384,160,480,192,576,186.7C672,181,768,139,864,149.3C960,160,1056,224,1152,224C1248,224,1344,160,1392,128L1440,96L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path></svg>
            </div>
                <ScrollToTop/>
                <AnimatedPage>
                   <DevProjectsContent />
                </AnimatedPage>
                </div>
            </div>
        </div>

    )
}

export default DevProjects;