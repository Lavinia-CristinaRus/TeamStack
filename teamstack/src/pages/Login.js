import logo from './../logo.svg';
import {StyledButton} from "./../components/Styles";
import  "./../components/Login.css";


const Login = () => {
  return (  
    <div>
    <div class="center">
        <div>
            <img src = {logo} alt = "logo" width="200" height="300"/>
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
                <div>
                  <input type="password" id="pass" name="pass" placeholder="Your password.."></input>
                </div>
              </div>
              <input type="submit" value="Log In"></input>
          </form>
      </div>
        <StyledButton to="/register">
          Register
          </StyledButton>
      
    </div>
  );
}

export default Login;