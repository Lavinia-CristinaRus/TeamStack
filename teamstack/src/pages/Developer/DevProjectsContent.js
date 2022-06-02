import React from 'react';
import DevProjectsData from "./DevProjectsData";
import {Link} from "react-router-dom";

const DevProjectsContent = () => {
    console.log(DevProjectsData);
    const listItems = DevProjectsData.map((item) =>
        <div className="card" key={item.id}>
            <div className="card_img">
                {<img src={require('./../images/' + item.image +'.png')}/>}
            </div>
            <div className="card_header">
                <h2>{item.project_name}</h2>
                <Link to="/devprojectdetails" style={{ textDecoration: 'none'}} className="btn">Apply </Link>
            </div>
        </div>

    );
    return (
        <div className="main_content">
            {listItems}
        </div>
    )
}
export default DevProjectsContent;