import React, {useState} from 'react'
import "./../components/Profiles.css";


function Profiles() {
    return (
        <div className="container">
            <div className="profile=box">
                <img src="./../assets/menu.png" className="menu-icon"/>
                <img src="./../assets/setting.png" className="setting-icon"/>
                <img src="./../assets/profile-pic.png" className="profile-pic"/>
                <h3>Name</h3>
                <p>Web Developer</p>
            </div>
        </div>

    )
}

export default Profiles;


