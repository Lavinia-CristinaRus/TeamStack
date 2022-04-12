import './App.css';
import Login from "./pages/Login";
import Register from "./pages/Register";


import {StyledContainer} from "./components/Styles";
import{BrowserRouter as Router, Routes, Route} from 'react-router-dom';

function App() {
  return (
    <Router>
      <StyledContainer>
      <Routes>
         
          <Route exact path="/" element={<Login/>}/>
          <Route exact path="/Register" element={<Register/>}/>
         
        </Routes>
      </StyledContainer>
    </Router>
    
  );
}

export default App;
