import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import UploadPic from "./UploadPicProfile";
import "./../components/UpdateProfile.css";
import AnimatedPage from './AnimatedPage';


function UpdateProfile() {
    const [isOpen, setIsOpen] = useState(false);
    const [namelog, setNamelog] = useState(" ");
    const [phonelog, setPhonelog] = useState(" ");
    const [descriptionlog, setDescriptionlog] = useState(" ");

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
                    <Link to="/myprojects">My Projects</Link>
                </div>
                <div
                    className={`nav-toggle ${isOpen && "open"}`}
                    onClick={() => setIsOpen(!isOpen)}
                >
                    <div className="bar"></div>
                </div>
            </div>
            <div className={`${isOpen && "hide"}`}>
    <AnimatedPage>
        <form>
            <div className='main_update'>
                <div className='sub-main_update'>
                    <div className="upload_pic">
                        <UploadPic/>
                    </div>
                    <div>
                        <div className='fields'>
                            <div>
                                <input placeholder='Full Name' className='updateFill' onChange={(event) => setNamelog(event.target.value) }/>
                            </div>
                            <div className='second-input'>
                                <input placeholder='Phone Number' className='updateFill' onChange={(event) => setPhonelog(event.target.value) }/>
                            </div>
                            <div className='second-input'>
                                <textarea placeholder='Description' className='textarea' onChange={(event) => setDescriptionlog(event.target.value) }/>
                            </div>
                            <div>
                                <button type="submit" className='updateButton'>Save Profile</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </form>
    </AnimatedPage>
        </div>
    </div>
    </div>
    )
}

export default UpdateProfile

