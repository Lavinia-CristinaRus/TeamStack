import logo from './logo.svg';
import './App.css';
import Login from "./pages/Login";
import Register from "./pages/Register";

import {StyledContainer} from "./components/Styles.js";
import{BrowserRouter as Router, Routes, Route} from 'react-router-dom';

function App() {
  return (
    <Router>
      <StyledContainer>
       <Routes>
       
        <Route path="/Register"  element={<Register />} />
        <Route path="/Login"  element={<Login />} />
        </Routes>
      </StyledContainer>
    </Router>
    
  );
}

export default App;
