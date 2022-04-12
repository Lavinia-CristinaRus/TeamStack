import logo from './../logo.svg';

const Register = () => {
    return (
    <div className="Register">
        <div class="divlogo">
            <img src = {logo} alt = "logo"/>
        </div>
        <h1>Register</h1>
        <form action="/register" method="post">
            <div>
            <div>
                <label for="fname">First Name</label>
            </div>
            <div>
                <input type="text" id="fname" name="firstname" placeholder="Your first name.."></input>
            </div>
            </div>
            <div>
            <div>
                <label for="lname">Last Name</label>
            </div>
            <div>
                <input type="text" id="lname" name="lastname" placeholder="Your last name.."></input>
            </div>
            </div>
            <div>
                <div>
                <label for="email">Email Adress</label>
                </div>
                <div>
                <input type="email" id="email" name="email" placeholder="Your email adress.."></input>
                </div>
            </div>
            <div>
                <div>
                <label for="phone">Phone Number</label>
                </div>
                <div>
                <input type="tel" id="phone" name="nr_telefon" placeholder="Your phone number.."></input>
                </div>
            </div>
            <div>
                <div>
                <label for="pass">Password</label>
                </div>
                <div class="col2">
                <input type="password" id="pass" name="pass" placeholder="Your password.."></input>
                </div>
            </div>
            <div>
                <div>
                <label for="role">Role</label>
                </div>
                <div>
                <input list="role_list" name="role" />
                <datalist id="role_list">
                    <option value="Project Manager"> </option>
                    <option value="Developer"> </option>
                    <option value="Investor"> </option>
                </datalist>
                </div>
            </div>
            <input type="submit" value="Register"></input>
        </form>

    </div>
    )
}

export default Register;