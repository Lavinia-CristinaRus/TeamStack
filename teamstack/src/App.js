import React from 'react';
import './components/App.css';
import Home from './pages/Home';
import Login from './pages/Login';
import Registration from './pages/Register';
import Profiles from './pages/Profiles';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const App = () => {
  return (
    <Router>
      <React.Fragment>
        <div className="App">
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/login" element={<Login/>}/>
            <Route path="/registration" element={<Registration/>}/>
            <Route path="/profiles" element={<Profiles/>}/>
            <Route path="/home" element={<Home/>} />
          </Routes>
        </div>
      </React.Fragment>
    </Router>
  );
}

export default App;
