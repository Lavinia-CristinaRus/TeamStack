import React, { useState } from "react";
import 'react-router-dom'
import {Link} from 'react-router-dom';
import './../../components/Home.css';
import "./../../components/Navbar.css";
import ProjectsContent from "./ProjectsContent.js";
import './../../components/MyProjects.css';

function ViewProjects() {
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
                    <Link to ="/investedprojects">Invested Projects</Link> 
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
                   <ProjectsContent />
                </div>
            </div>
        </div>

    )
}

export default ViewProjects;