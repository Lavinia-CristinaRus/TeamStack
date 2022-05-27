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

    const initialValues = { name:"", email: "", password: "" };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);
  };

  useEffect(() => {
    console.log(formErrors);
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      console.log(formValues);
    }
  }, [formErrors]);
  const validate = (values) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!values.name) {
        errors.name = "Name is required!";
      }
    if (!values.email) {
      errors.email = "Email is required!";
    } else if (!regex.test(values.email)) {
      errors.email = "This is not a valid email format!";
    }
    if (!values.password) {
      errors.password = "Password is required";
    } else if (values.password.length < 4) {
      errors.password = "Password must be more than 4 characters";
    } else if (values.password.length > 10) {
      errors.password = "Password cannot exceed more than 10 characters";
    }
    return errors;
  };

    return (
        <form onSubmit={handleSubmit}>
            <div className='main'>
                <div className='sub-main'>
                    <div>
                        <div>
                            <div className='header'>
                            <h1 className='RHeader'>Registration</h1>
                            <br></br>
                            <div>
                                <img src={profile} alt="emial" className='email' />
                                <input type="text" name="name" placeholder='Enter Name' className='fill' value={formValues.name} onChange={handleChange}/>
                                <p className='error'>{formErrors.name}</p>
                            </div>
                            <div >
                                <img src={mail} alt="email" className='email' />
                                <input type="email" name="email" placeholder='Enter Email-address' className='fill' value={formValues.email} onChange={handleChange}/>
                                <p className='error'>{formErrors.email}</p>
                            </div>
                            <div >
                                <img src={lock} alt="password" className='email' />
                                <input type="password" name="password" placeholder='Enter Password' className='fill' value={formValues.password} onChange={handleChange}/>
                                <p className='error'>{formErrors.password}</p>
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
                            </div>
                            <div className='footer'>
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
            </div>
        </form>
    )
}

export default Registration
