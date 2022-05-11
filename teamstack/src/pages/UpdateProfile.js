import React, {useState} from 'react'
import "./../components/UpdateProfiles.css";
import UploadPic from "./UploadPic";
import Tilt from 'react-vanilla-tilt'

function UpdateProfile() {

    const [emaillog, setEmaillog] = useState(" ");
    const [passwordlog, setPasswordlog] = useState(" ");

    return (
        <form>
            <div className='main'>
            <Tilt className='sub-main' style={{backgroundcolor:"transparent", padding:'50px'}}>
                    <div className="upload_pic">
                        <UploadPic/>
                    </div>
                    <div>
                            <br></br>
                            <div>
                                <input placeholder='First Name' className='fill' onChange={(event) => setEmaillog(event.target.value) }/> 
                            </div>
                            <div className='second-input'>
                                <input placeholder='Last Name' className='fill' onChange={(event) => setPasswordlog(event.target.value) }/>
                            </div>
                            <div className='second-input'>
                                <input placeholder='Phone Number' className='fill' onChange={(event) => setPasswordlog(event.target.value) }/>
                            </div>
                            <div className='second-input'>
                                <textarea placeholder='Description' className='fill' onChange={(event) => setPasswordlog(event.target.value) }/>
                            </div>
                            <div className='bt'>
                                <button type="submit">Save Profile</button>
                            </div>
                        </div>
            </Tilt>
            </div>
        </form>
       
    )
}

export default UpdateProfile

