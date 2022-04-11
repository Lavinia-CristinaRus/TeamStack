import logo from './../logo.svg';

function Login() {
  return (
    <div className="Login">
      <div>
      <div class="divlogo">
            <img src = {logo} alt = "logo"/>
        </div>
        <h1>Log In</h1>
        <form>
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
                  <label for="pass">Password</label>
                </div>
                <div class="col2">
                  <input type="password" id="pass" name="pass" placeholder="Your password.."></input>
                </div>
              </div>
                <input type="submit" value="Log In"></input>
            </form>
      </div>
      <a href="javascript:setTimeout(()=>{window.location = '/register' },200);">
          <div>
              <h1 id = "register_text">Register</h1>
          </div>
      </a>
    </div>
  );
}

export default Login;
