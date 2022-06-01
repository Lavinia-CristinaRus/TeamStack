import React from 'react';
import './components/App.css';
import Home from './pages/Home';
import Login from './pages/Login';
import Registration from './pages/Register';
import Profiles from './pages/Profiles';
import MyProjects from './pages/Manager/MyProjects';
import AddNewProject from './pages/Manager/AddNewProject';
import UpdateProfile from './pages/UpdateProfile';
import UpdateProject from './pages/Manager/Project/UpdateProject';
import ProjectIdea from './pages/Manager/Project/ProjectIdea';
import OurTeam from './pages/Manager/Project/OurTeam';
import Offers from './pages/Manager/Project/Offers';
import ViewProjects from './pages/Investor/ViewProjects';
import ProjectDetails from './pages/Investor/ProjectDetails';
import InvestedProjects from './pages/Investor/InvestedProjects';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';

const App = () => {
  return (
    <Router>
      <React.Fragment>
        <div className="App">
          <Routes>
            <Route path="*" element={<> not found</>} />
            <Route path="/" element={<Home/>} />
            <Route path="/login" element={<Login/>}/>
            <Route path="/registration" element={<Registration/>}/>
            {/*  Project Manager */}
            <Route path="/profiles" element={<Profiles/>}/>
            <Route path="/myprojects" element={<MyProjects/>}/>
            <Route path="/updateprofile" element={<UpdateProfile/>}/>
            <Route path="/updateproject" element={<UpdateProject/>}/>
            <Route path="/offers" element={<Offers/>}/>
            <Route path="/ourteam" element={<OurTeam/>}/>
            <Route path="/projectidea" element={<ProjectIdea/>}/>
            <Route path="/addnewproject" element={<AddNewProject/>}/>
            {/*  Investor */}
            <Route path="/viewprojects" element={<ViewProjects/>}/>
            <Route path="/projectdetails" element={<ProjectDetails/>}/>
            <Route path="/investedprojects" element={<InvestedProjects/>}/>
          </Routes>
        </div>
      </React.Fragment>
    </Router>
  );
}

export default App;
