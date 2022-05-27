import React, { useState, useEffect, useRef } from "react";
import 'react-router-dom'
import {Link} from 'react-router-dom';
import './../../../components/Home.css';
import './../../../components/OurTeam.css';
import './../../../components/Navbar.css';
import './../../../components/SearchBar.css';
import ourteam_data from './ourteam_data.js';
import ScrollToTop from "./../../ScrollToTop";
import Menu from "./../../Menu";
import { AiOutlineSearch } from "react-icons/ai";

function OurTeam() {

    const[items, setItems] =useState([]);
    const[visible, setVisible] = useState(3);
    
    /*
    const [list, updateList] = useState(ourteam_data());
    const handleRemoveItem = (name) => {
        {updateList(list.filter(item => item.name !== name))};
       };

    */

    const showMoreItems = () => {
        setVisible((prevValue) => prevValue + 3);
    };
    useEffect(() =>{
        fetch({OurTeam})
        .then((res) =>res.json())
        .then((data) => setItems(data));
    }, []);

    const [isOpen, setIsOpen] = useState(false);
    const [searchTerm,setSearchTerm]=useState("");
    
    const OurTeam = ourteam_data.filter((item) => {
        if(item.name.toLowerCase().includes(searchTerm.toLowerCase())) {
            return item;
        }
    })
    
    function MapOurTeam(List) {
        if(!List){List=[];}
        const Filtered = List.slice(0, visible).map((item) =>
            <div className="cardT" key={item.id}>
                <div className="card_imgT">
                    <img src={require('./../../../assets/' + item.image +'.png')} />
                </div>
                <div className="card_headerT">
                    <h2>{item.name}</h2>
                    <div className="btnT" >Remove Team Member </div>
                </div>
            </div>
        );
        return Filtered;
    }
    return (
        <div className="under"  style ={{height:"2000px"}}>
            <div className="over">
                <div className="Navbar">
                    <link rel="preconnect" href="https://fonts.googleapis.com"/>
                    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
                    <link href="https://fonts.googleapis.com/css2?family=Lobster&display=swap" rel="stylesheet"/>
                    <span className="nav-logo"><span>Team</span><br/>
                    <span>Stack</span></span>
                    <div className="wrapper">
                    <AiOutlineSearch
                    style={{
                        position: 'absolute',
                        top: '7px',
                        left: '8px',
                        width: '14px',
                      }}
                    />
                    <input className="search" placeholder="Search" onChange={(event) => {const { target } = event; setTimeout(() => {setSearchTerm(target.value);}, 500)}}/>
                </div>
                    <div className={`nav-items ${isOpen && "open"}`}>
                        <Link to ="/myprojects">My Projects</Link> 
                        <Link to ="/profiles">My Profile</Link> 
                        <Link to="/login">Logout</Link>
                    </div>
                    <div
                        className={`nav-toggle ${isOpen && "open"}`}
                        onClick={() => setIsOpen(!isOpen)}>
                        <div className="bar"></div>
                    </div>
                </div>
                
                <Menu/>
                <div className="filteredcontentTeam">
                    <ScrollToTop />
                        <div className="containerTeam">
                            <p className="teamMembers">Team Members</p>
                            <div className="homeContentTeam">
                                {MapOurTeam(OurTeam)}
                                <div className={`${(OurTeam.length!==0)?"loadMore":"hide"}`}>
                                    <button className="loadMoreBtnTeam" onClick={showMoreItems}>Load More</button>
                                </div>
                            </div>
                        </div>
                </div>
            </div>
        </div>

    )
}

export default OurTeam;