import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import "./../components/UpdateProfiles.css";
import UploadPic from "./UploadPic";
import Tilt from 'react-vanilla-tilt';
import '../components/Home.css';
import "../components/Navbar.css";

function UpdateProfile() {

    const [isOpen, setIsOpen] = useState(false);
    const [emaillog, setEmaillog] = useState(" ");
    const [passwordlog, setPasswordlog] = useState(" ");

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
        <form>
            <div className='main-update'>
            <Tilt className='sub-main-update' style={{padding:'50px'}}>
                    <div className="upload_pic">
                        <UploadPic/>
                         <div className='bt'>
                        <button type="submit">Save Profile</button>
                    </div>
                    </div>
                    <div>
                            <br></br>
                            <div>
                                <input placeholder='First Name' className='fil' onChange={(event) => setEmaillog(event.target.value) }/> 
                            </div>
                            <div className='second-input'>
                                <input placeholder='Last Name' className='fil' onChange={(event) => setPasswordlog(event.target.value) }/>
                            </div>
                            <div className='second-input'>
                                <input placeholder='Phone Number' className='fil' onChange={(event) => setPasswordlog(event.target.value) }/>
                            </div>
                            <div className='second-input'>
                                <textarea placeholder='Description' className='des' onChange={(event) => setPasswordlog(event.target.value) }/>
                            </div>
                    </div>
            </Tilt>
            </div>
        </form>
    </div>
</div>
       
    )
}

export default UpdateProfile

