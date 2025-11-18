import React from "react";
import blogData from "../data/blog";
import About from "./About";
import ArticleList from "./ArticleList";
import Article from "./Article";




function Header(props) {
    return (
        <header>    
            <h1>{props.name}</h1>
        </header>
    )
}
export default Header;