import React from "react";
import Sidebar from "../../componenets/sidebar/Sidebar";
import SinglePost from "../../componenets/singlePost/SinglePost";
import "./single.scss";
const Single = () => {
  return (
    <div className="single">
      <SinglePost />
      <Sidebar />
    </div>
  );
};

export default Single;
