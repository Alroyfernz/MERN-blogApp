import React, { useEffect, useState } from "react";
import "./sidebar.scss";
import axios from "axios";
import {
  FaFacebookSquare,
  FaInstagramSquare,
  FaTwitterSquare,
} from "react-icons/fa";
import "./sidebar.scss";
import { Link } from "react-router-dom";
const Sidebar = () => {
  const [cats, setCats] = useState();

  useEffect(() => {
    const getCats = async () => {
      const res = await axios.get("/categories");
      setCats(res.data);
    };

    getCats();
  }, []);
  return (
    <div className="sidebar">
      <div className="sidebar_Item">
        <span className="sidebar_Item_Title">About me</span>
        <img src="assets/person/1.jpeg" alt="" className="sidebar_Item_Image" />
        <p className="sidebar_Item_para">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quasi
          incidunt dolore amet praesentium expedita odit quos doloribus
          similique dolor magnam!
        </p>
      </div>
      <div className="sidebar_Item">
        <span className="sidebar_Item_Title">Categories</span>
        <ul className="sidebar_Item_List">
          {cats?.map((c) => {
            return (
              <Link
                to={`/?cat=${c.name}`}
                style={{ textDecoration: "none", color: "inherit" }}
              >
                <li className="sidebar_Item_List_Item">{c.name}</li>;
              </Link>
            );
          })}
        </ul>
      </div>
      <div className="sidebar_Item">
        <span className="sidebar_Item_Title">follow us</span>
        <div className="sidebar_Social_Conatainer">
          <FaFacebookSquare className="social_Icons" />
          <FaTwitterSquare className="social_Icons" />
          <FaInstagramSquare className="social_Icons" />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
