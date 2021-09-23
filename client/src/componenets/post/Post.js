import React from "react";
import { Link } from "react-router-dom";
import "./post.scss";
const Post = ({ post }) => {
  const PF = "http://localhost:5000/images/";
  return (
    <div className="post">
      {post.photo && (
        <img className="post_Image" src={PF + post.photo} alt="" />
      )}
      <div className="post_Info">
        <div className="post_Catergories">
          {post.categories.map((c) => {
            return <span className="post_Catergory">{c.name}</span>;
          })}
        </div>
        <Link
          to={`/post/${post._id}`}
          style={{ textDecoration: "none", color: "inherit" }}
        >
          <span className="post_Title">{post.title}</span>
        </Link>
        <hr />
        <span className="post_Date">
          {new Date(post.createdAt).toDateString()}
        </span>
      </div>
      <p className="post_Description">{post.desc}</p>
    </div>
  );
};

export default Post;
