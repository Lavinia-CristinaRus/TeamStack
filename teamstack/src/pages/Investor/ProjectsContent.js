import React from 'react';
import ProjectsData from "./ProjectsData";
import {Link} from "react-router-dom";

const ProjectsContent = () => {
    console.log(ProjectsData);
    const listItems = ProjectsData.map((item) =>
        <div className="card" key={item.id}>
            <div className="card_img">
                {<img src={require('./../images/' + item.image +'.png')}/>}
            </div>
            <div className="card_header">
                <h2>{item.project_name}</h2>
                <Link to="/projectdetails" style={{ textDecoration: 'none'}} className="btn">Invest</Link>
            </div>
        </div>

    );
    return (
        <div className="main_content">
            {listItems}
        </div>
    )
}
export default ProjectsContent;