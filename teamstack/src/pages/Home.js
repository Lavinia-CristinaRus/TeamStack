import React, { useState } from "react";
import 'react-router-dom'
import {Link} from 'react-router-dom';
import './../components/Home.css';
import './../components/Navbar.css';
import AnimatedPage from "./AnimatedPage";


function Home() {
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
                <AnimatedPage>
                <h2><Link className='link' to='/myprojects'>Manager's side</Link> or <Link className='link' to='/viewprojects'>Investor's side</Link> or <Link className='link' to='/devprojects'>Developer's side</Link></h2>
                </AnimatedPage>
            </div>
        </div>
        
    )
}

export default Home;