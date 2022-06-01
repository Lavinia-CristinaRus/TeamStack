import React, { useState, useEffect, useRef } from "react";
import 'react-router-dom'
import {Link} from 'react-router-dom';
import './../../../components/Home.css';
import './../../../components/Offers.css';
import './../../../components/Navbar.css';
import './../../../components/SearchBar.css';
import investors_data from './investors_data.js';
import ScrollToTop from "../../ScrollToTop";
import Menu from "./../../Menu";
import { AiOutlineSearch } from "react-icons/ai";
import AnimatedPage from './../../AnimatedPage';

function Offers() {

    const[items, setItems] =useState([]);
    const[visible, setVisible] = useState(3);

    const showMoreItems = () => {
        setVisible((prevValue) => prevValue + 3);
    };
    useEffect(() =>{
        fetch({Investors})
        .then((res) =>res.json())
        .then((data) => setItems(data));
    }, []);

    const scrollToSection = (elementRef) => {
        window.scrollTo({
          top: elementRef.current.offsetTop,
          behavior: "smooth",
        });
      };
    
    const pending = useRef(null);
    const accepted = useRef(null);
    const rejected = useRef(null); 

    const [isOpen, setIsOpen] = useState(false);
    const [searchTerm,setSearchTerm]=useState("");
    
    function FilterByCategory(status) {
        const Filtered = investors_data.filter((item) => {
            if(item.status.toLowerCase()===status) {
                return item;
            }
        });
        return Filtered;
    }

    const Investors = investors_data.filter((item) => {
        if(item.investor_name.toLowerCase().includes(searchTerm.toLowerCase())) {
            return item;
        }
    })

    function MapInvestors(List) {
        if(!List){List=[];}
        const Filtered = List.slice(0, visible).map((item) =>
            <div className="card" key={item.id}>
                <div className="card_img">
                    <Link to="/profiles">
                        <img src={require('./../../../assets/' + item.image +'.png')}/>
                    </Link>
                </div>
                <div className="card_header">
                    <h2>{item.investor_name}</h2>
                    <p className="price">{item.price}</p>
                    <div className="btn">Accept offer</div>
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
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        <div className="bar"></div>
                    </div>
                </div>

                <Menu/>
                <AnimatedPage>
                <div className={`${((isOpen ||searchTerm === "") && "hide" ) || (!isOpen && "homeContent")}`}>
                    {MapInvestors(Investors)}
                    <div className={`${(Investors.length!==0)?"loadMore":"hide"}`}>
                        <button className="loadMoreBtn" onClick={showMoreItems}>Load More</button>
                    </div>

                </div>
                <div className={`${((isOpen ||searchTerm !== "") && "hide" ) || (!isOpen && "filteredContent")}`} >
                <ScrollToTop />
                <div className="hero">
                    <ul>
                    <li onClick={() => scrollToSection(pending)} className="link_status">
                        Pending
                    </li>
                    <li onClick={() => scrollToSection(accepted)} className="link_status">
                        Accepted
                    </li>
                    <li onClick={() => scrollToSection(rejected)} className="link_status">
                        Rejected
                    </li>
                    </ul>
                </div>
                    <div ref={pending} className = "categories">
                        <p className="text">Pending</p>
                        <div className="homeContent">
                            {MapInvestors(FilterByCategory("pending"))}
                            <div className="loadMore">
                                <button className="loadMoreBtn" onClick={showMoreItems}>Load More</button>
                            </div>
                        </div>   
                    </div>
                    <div ref={accepted} className = "categories">
                        <p className="text">Accepted</p>
                        <div className="homeContent">
                            {MapInvestors(FilterByCategory("accepted"))}
                            <div className="loadMore">
                                <button className="loadMoreBtn" onClick={showMoreItems}>Load More</button>
                            </div>
                        </div>   
                    </div>
                    <div ref={rejected} className = "categories">
                        <p className="text">Rejected</p>
                        <div className="homeContent">
                            {MapInvestors(FilterByCategory("rejected"))}
                            <div className="loadMore">
                                <button className="loadMoreBtn" onClick={showMoreItems}>Load More</button>
                            </div>
                        </div>   
                    </div>
                </div>
                </AnimatedPage>
            </div>
        </div>

    )
}

export default Offers;