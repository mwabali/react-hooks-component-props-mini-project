import React from "react";
import blogData from "../data/blog";
import Article from "./Article";
import Header from "./Header";
import About from "./About";    


function ArticleList(props) {
    return(
        <main>
            {props.posts.map((post) =>(
            <Article key={post.id} title={post.title} date={post.date} preview={post.preview} />
            ))}
        </main>
    )
}
export default ArticleList;