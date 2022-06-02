import React, { useState, useEffect, useRef } from "react";
import 'react-router-dom'
import {Link} from 'react-router-dom';
import './../../components/Home.css';
import './../../components/Offers.css';
import './../../components/Navbar.css';
import './../../components/SearchBar.css';
import DevProjectsData from './DevProjectsData.js';
import AnimatedPage from "../AnimatedPage";
import ScrollToTop from "../ScrollToTop";
import { AiOutlineSearch } from "react-icons/ai";

function DevTeamsProjects() {

    const[items, setItems] =useState([]);
    const[visible, setVisible] = useState(3);

    const showMoreItems = () => {
        setVisible((prevValue) => prevValue + 3);
    };
    useEffect(() =>{
        fetch({Projects})
        .then((res) =>res.json())
        .then((data) => setItems(data));
    }, []);

    const scrollToSection = (elementRef) => {
        window.scrollTo({
          top: elementRef.current.offsetTop,
          behavior: "smooth",
        });
      };
    
    const pendingteams = useRef(null);
    const myteams = useRef(null);

    const [isOpen, setIsOpen] = useState(false);
    const [searchTerm,setSearchTerm]=useState("");
    
    function FilterByCategory(status) {
        const Filtered = DevProjectsData.filter((item) => {
            if(item.status.toLowerCase()===status) {
                return item;
            }
        });
        return Filtered;
    }

    const Projects = DevProjectsData.filter((item) => {
        if(item.project_name.toLowerCase().includes(searchTerm.toLowerCase())) {
            return item;
        }
    })

    function MapProjects(List) {
        if(!List){List=[];}
        const Filtered = List.slice(0, visible).map((item) =>
            <div className="card" key={item.id}>
                <div className="card_img">
                    <Link to="/projectdetails">
                        <img src={require('./../images/' + item.image +'.png')}/>
                    </Link>
                </div>
                <div className="card_header">
                    <h2>{item.project_name}</h2>
                    <div className="btn">Drop Project</div>
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
                        <Link to ="/devprojects">View Projects</Link> 
                        <Link to ="/profiles">My Profile</Link> 
                        <Link to="/login">Logout</Link>
                    </div>
                    <div
                        className={`nav-toggle ${isOpen && "open"}`}
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        <div className="bar"></div>
                    </div>
                </div>
                <div className={`${((isOpen ||searchTerm === "") && "hide" ) || (!isOpen && "homeContent")}`}>
                    {MapProjects(Projects)}
                    <div className={`${(Projects.length!==0)?"loadMore":"hide"}`}>
                        <button className="loadMoreBtn" onClick={showMoreItems}>Load More</button>
                    </div>

                </div>
                <div className={`${((isOpen ||searchTerm !== "") && "hide" ) || (!isOpen && "filteredContent")}`} >
                <ScrollToTop />
                <AnimatedPage>
                <div className="hero">
                    <ul>
                    <li onClick={() => scrollToSection(pendingteams)} className="link_status">
                        Pending Teams
                    </li>
                    <li onClick={() => scrollToSection(myteams)} className="link_status">
                        My Teams
                    </li>
                    </ul>
                </div>
                    <div ref={pendingteams} className = "categories">
                        <p className="text">Pending Teams</p>
                        <div className="homeContent">
                            {MapProjects(FilterByCategory("my"))}
                            <div className="loadMore">
                                <button className="loadMoreBtn" onClick={showMoreItems}>Load More</button>
                            </div>
                        </div>   
                    </div>
                    <div ref={myteams} className = "categories">
                        <p className="text">My Teams</p>
                        <div className="homeContent">
                            {MapProjects(FilterByCategory("placed"))}
                            <div className="loadMore">
                                <button className="loadMoreBtn" onClick={showMoreItems}>Load More</button>
                            </div>
                        </div>   
                    </div>
                    </AnimatedPage>
                </div>
            </div>
        </div>

    )
}

export default DevTeamsProjects;