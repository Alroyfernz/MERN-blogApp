import React, { useContext, useEffect, useState } from "react";
import "./singlePost.scss";
import axios from "axios";
import { FiEdit } from "react-icons/fi";
import { MdDelete } from "react-icons/md";
import { useLocation } from "react-router";
import { Link } from "react-router-dom";
import { Context } from "../../context/Context";
import { useHistory } from "react-router";
const SinglePost = () => {
  const PF = "http://localhost:5000/images/";
  const location = useLocation();
  const path = location.pathname.split("/")[2];
  const [post, setPost] = useState();
  const { user } = useContext(Context);
  const history = useHistory();

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await axios.get("/api/posts/" + path);
      setPost(response.data);
      console.log(response.data);
    };

    fetchPosts();
  }, [path]);

  const handleDelete = async () => {
    try {
      await axios.delete(`/api/posts/${post._id}` + path, {
        data: { username: user?.username },
      });
      history.push("/");
    } catch (error) {}
  };
  return (
    <div className="singlePost">
      <div className="singlePost_Wrapper">
        {post?.photo && (
          <img
            src={PF + post?.photo}
            alt="userimg"
            className="singlePost_Image"
          />
        )}

        <h1 className="singlePost_Title">
          {post?.title}
          {post?.username === user?.username && (
            <div className="singlePost_Edit">
              <FiEdit style={{ color: "teal" }} className="singlePost_Icons" />
              <MdDelete
                style={{ color: "tomato" }}
                className="singlePost_Icons"
                onClick={handleDelete}
              />
            </div>
          )}
        </h1>
        <div className="singlePost_Info">
          <span className="singlePost_Author">
            Author:{" "}
            <Link
              to={`/?user=${post?.username}`}
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <b>{post?.username}</b>
            </Link>
          </span>
          <span className="singlePost_Date">
            {new Date(post?.createdAt).toDateString()}
          </span>
        </div>
        <p className="singlePost_Description">{post?.desc}</p>
      </div>
    </div>
  );
};

export default SinglePost;
