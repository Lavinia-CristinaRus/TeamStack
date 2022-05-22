import React, {useState, useEffect} from 'react'
import {Link} from 'react-router-dom';
import mail from "./../assets/email.png";
import lock from "./../assets/lock.png";
import profile from "./../assets/icon.jpg";
import "./../components/App.css";


function Registration() {
    
    const LOCAL_STORAGE_KEY = "Info";

    const [Info, setInfo] = useState({
        name:"",
        email:"",
        password:"",
        role:""
    });

    useEffect(() => {
        const retriveContacts = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
        if (retriveContacts) setInfo(retriveContacts);
    }, [])

    useEffect(()=>{
        localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(Info))
    },[Info])

    let register = (e) =>{
        e.preventDefault()

        if (!Info.name || !Info.email || !Info.password || !Info.profession) {
            alert("Complete all the fields!!!")
            return
        }
    }

    return (
        <form onSubmit={register}>
            <div className='main'>
                <div className='sub-main'>
                    <div>
                        <div>
                            <h1 className='RHeader'>Registration</h1>
                            <br></br>
                            <div>
                                <img src={profile} alt="emial" className='email' />
                                <input type="text" placeholder='Enter Name' className='fill' value={Info.name} onChange={(e) => setInfo({...Info, name: e.target.value})}/>
                            </div>
                            <div className='mail-id'>
                                <img src={mail} alt="email" className='email' />
                                <input type="email" placeholder='Enter Email-address' className='fill' value={Info.email} onChange={(e) => setInfo({...Info, email: e.target.value})}/>
                            </div>
                            <div className='mail-id'>
                                <img src={lock} alt="password" className='email' />
                                <input type="password" placeholder='Enter Password' className='fill' value={Info.password} onChange={(e) => setInfo({...Info, password: e.target.value})}/>
                            </div>
                            <div className="drop-down-menu">
                                <label>
                                    <div className="b">Pick your role:</div>
                                    <select value={Info.role} onChange={(e) => setInfo({...Info, role: e.target.value})}>           
                                        <option value="project manager">Project Manager</option>
                                        <option value="investor">Investor</option>
                                        <option value="developer">Developer</option>
                                    </select>
                                </label>
                            </div>
                            <div className='login-btn'>
                                <button type="submit" className='autentificationButton'>Register</button>
                            </div>
                            <div className='reg-link'>
                                <p>If Account exist then <Link className='link' to='/login'>Login!</Link></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </form>
    )
}

export default Registration
