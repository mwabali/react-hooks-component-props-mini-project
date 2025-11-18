import React from "react";
import blogData from "../data/blog";
import Header from "./Header";
import ArticleList from "./ArticleList";



function About(props){
    return(
        <aside>
            <img src={props.image || "https://via.placeholder.com/215"} alt="blog logo"/>
            <p>{props.about}</p>

        </aside>
    )

    
}
export default About;