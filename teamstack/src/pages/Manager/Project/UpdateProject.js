import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import UploadPic from "./../../UploadPic";
import "./../../../components/UpdateProject.css";


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
        <form>
            <div className='main_updateProject'>
                <div className='sub-main_updateProject'>
                    <div className="upload_pic">
                        <UploadPic/>
                    </div>
                    <div>
                        <div className='fieldsProject'>
                            <div>
                                <input placeholder='Project Name' className='updateProjectFill' onChange={(event) => setNamelog(event.target.value) }/>
                            </div>
                            <div className='second-input'>
                                <input placeholder='Nessesary funds' className='updateProjectFill' onChange={(event) => setPhonelog(event.target.value) }/>
                            </div>
                            <div className='second-input'>
                                <input placeholder='Nr of Developers' className='halfFill1' onChange={(event) => setPhonelog(event.target.value) }/>
                            </div>
                            <div>
                                <input placeholder='Estimated time' className='halfFill2' onChange={(event) => setPhonelog(event.target.value) }/>
                            </div>
                            <div className='second-input'>
                                <textarea placeholder='Description' className='textarea' onChange={(event) => setDescriptionlog(event.target.value) }/>
                            </div>
                            <div>
                                <button type="submit" className='updateProjectButton'>Save Project</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </form>
        </div>
    </div>
    </div>
    )
}

export default UpdateProfile

