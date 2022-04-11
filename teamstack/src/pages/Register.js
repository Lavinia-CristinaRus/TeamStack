function Register() {
    return (
    <div className="Register">
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
              <label for="bday">Birthday</label>
            </div>
            <div>
              <input type="date" id="bday" name="bday" placeholder="Your birthday.." min = "1900-01-01" max = "2020-12-31"></input>
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
              <label for="department">Department</label>
            </div>
            <div>
            <input list="department_list" name="department" />
              <datalist id="department_list">
                <option value="Human Resources"> </option>
                <option value="Design"> </option>
                <option value="Public Relations"> </option>
                <option value="IT"> </option>
                <option value="Fundraising"> </option>
              </datalist>
            </div>
          </div>
          <input type="submit" value="Register"></input>
    </form>
    <a href="javascript:setTimeout(()=>{window.location = 'login' },200);"></a>
    <div>
        <h1 id = "login_text">Log In</h1>
    </div>
    </div>
    )
}