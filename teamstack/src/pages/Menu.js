import { useState } from 'react';
import {Link} from "react-router-dom";
import "./../components/Menu.css";
import { GiHamburgerMenu } from 'react-icons/gi';

function Menu({ selected, setSelected }) {
     const [isActive, setIsActive] = useState(false);
     const options = [<Link to="/projectidea" style={{ textDecoration: 'none', color:'white'}}> Project Idea </Link>, 
                        <hr></hr>,
                      <Link to="/ourteam" style={{ textDecoration: 'none', color:'white'}}> Our Team </Link>, 
                        <hr></hr>,
                      <Link to="/offers" style={{ textDecoration: 'none', color:'white'}}> Placed Offers </Link> ];
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
} export default Menu;