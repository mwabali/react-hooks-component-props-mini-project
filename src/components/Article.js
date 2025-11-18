import react from "react";
import blogData from "../data/blog";
import Header from "./Header";
import ArticleList from "./ArticleList";
import About from "./About";



function Article(props) {
    return(
        <article>
            <h3>{props.title}</h3>
            <small>{props.date || "January 1, 1970"}</small>
            <p>{props.preview}</p>


        </article>
    )
}
export default Article;