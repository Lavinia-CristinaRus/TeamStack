import React, {useState, useEffect} from 'react'
import {Link} from 'react-router-dom';
import Email from "./../assets/email.png";
import lock from "./../assets/lock.png";
import profile from "./../assets/logo.svg";
import "./../components/Authentification.css";
import video from "./../assets/video.mp4";


function Login() {


    const [emaillog, setEmaillog] = useState(" ");
    const [passwordlog, setPasswordlog] = useState(" ");

    const initialValues = { email: "", password: "" };
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
      <div className='mainVideo'>
        <div className="overlay"></div>
          <video src={video} autoPlay loop muted />
        
        <form onSubmit={handleSubmit}>
            <div className='main'>
            {/*
            {Object.keys(formErrors).length === 0 && isSubmit ? (
                <div className="message_success">Signed in successfully</div>
                    ) : ("")}

            */}
                <div className='sub-main'>
                    
                    <div>
                      
                        <div className='imgs'>
                            <div className='container-image'>
                                <img src={profile} alt='profile' className='profile'/>
                            </div>
                        </div>
                        <div className='header'>
                            <h1 className='LHeader'>Login</h1>
                            <div>
                                <img src={Email} alt="emial" className='email' />
                                <input type="email" name="email" placeholder='Enter Email-id' className='fill' value={formValues.email} onChange={handleChange}/>
                            </div>
                            <p className='error'>{formErrors.email}</p>

                            <div>
                                <img src={lock} alt='password' className='email' />
                                <input type="password" name="password" placeholder='Enter Password' className='fill' value={formValues.password} onChange={handleChange}/>
                            </div>
                            <p className='error'>{formErrors.password}</p>
                          
                          <div className='footer'>
                            <div className='login-btn'>
                                <button type="submit" className='autentificationButton'>Login</button>
                            </div>
                            <div className='reg-link'>
                                <p>Don't have an account? <Link className='link' to='/registration'>Register Now</Link></p>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </form>
    </div>
    )
}

export default Login

