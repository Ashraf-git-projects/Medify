import React from "react";
import './Blogs.css'
import BlogCard from "./BlogCard";


export default function Blogs(){

    return (
        <div className="blog_container"> 
        <h5>Blog & News</h5>
        <h1>Read Our Latest News</h1>
    <div className="blogcards">
          <BlogCard />
          <BlogCard />
          <BlogCard />
    </div>
    </div>);
}