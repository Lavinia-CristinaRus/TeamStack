import React, { useState } from "react";
import 'react-router-dom'
import {Link} from 'react-router-dom';
import '../components/Home.css';
import "../components/Navbar.css";
import MyProjectsContent from "./MyProjectsContent.js";
import '../components/MyProjects.css';

function MyProjects() {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className="under">
            <div className="over">
            <div className="Navbar">
                <span className="nav-logo"><span>Team</span><br/>
                <span>Stack</span></span>
                <div className={`nav-items ${isOpen && "open"}`}>
                    <Link to ="/">Home</Link>
                    <Link to="/login">Login</Link>
                </div>
                <div
                    className={`nav-toggle ${isOpen && "open"}`}
                    onClick={() => setIsOpen(!isOpen)}
                >
                    <div className="bar"></div>
                </div>
            </div>
            <div>
                    <MyProjectsContent />
                </div>
            </div>
        </div>

    )
}

export default MyProjects;