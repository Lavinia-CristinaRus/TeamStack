import { useState } from 'react';
import {Link} from "react-router-dom";
import "./../components/Menu.css";
import { GiHamburgerMenu } from 'react-icons/gi';

function ViewTeam({ selected, setSelected }) {
     const [isActive, setIsActive] = useState(false);
     const options = [<Link to="/ourteam" style={{ textDecoration: 'none', color:'white'}}>View Team</Link>];
     return(
         
     <div className="dropdown"> 
        <div className="dropdown-btn" onClick={(e) => 
            setIsActive( !isActive) }> 
            <GiHamburgerMenu/>
            <span className="fas fa-caret-down"></span> 
        </div> 
     {isActive && (
    
        <div className="dropdown-content"> 
         
            {options.map((option) => (
                <div 
                    onClick={(e) => { 
                        setSelected(option);
                        setIsActive(false);
                     }}
                     className="dropdown-item"> 
            {option} 
        </div> 
        ))} 
    </div> 


     )} </div> 
     );
} export default ViewTeam;