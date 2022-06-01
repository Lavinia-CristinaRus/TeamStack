import React from 'react';
import MyProjectsData from "./MyProjectsData";
import {Link} from "react-router-dom";

const MyProjectsContent = () => {
    console.log(MyProjectsData);
    const listItems = MyProjectsData.map((item) =>
        <div className="card" key={item.id}>
            <div className="card_img">
                {<img src={require('./../images/' + item.image +'.png')} />}
            </div>
            <div className="card_header">
                <h2>{item.project_name}</h2>
                <Link to="/projectidea" style={{ textDecoration: 'none'}} className="btn">View</Link>
            </div>
        </div>

    );
    return (
        <div className="main_content">
            {listItems}
        </div>
    )
}
export default MyProjectsContent;