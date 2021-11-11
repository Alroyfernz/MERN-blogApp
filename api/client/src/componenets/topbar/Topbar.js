import React, { useContext, useState } from "react";
import {
  FaFacebookSquare,
  FaTwitterSquare,
  FaInstagramSquare,
  FaSearch,
  FaBars,
} from "react-icons/fa";
import { CgClose } from "react-icons/cg";
import { Link } from "react-router-dom";
import { Logout } from "../../context/Actions";
import { Context } from "../../context/Context";
import "./topbar.scss";
const Topbar = () => {
  const [open, setOpen] = useState(false);
  const PF = "http://localhost:5000/images/";
  const { user, dispatch } = useContext(Context);
  const handleLogout = () => {
    dispatch(Logout());
  };

  const handleClick = () => {
    setOpen(!open);
  };
  return (
    <div className={open ? "top open" : "top"} onClick={open && handleClick}>
      <div className={open ? "top_Left open" : "top_Left"}>
        <FaFacebookSquare className="left_Icons" />
        <FaTwitterSquare className="left_Icons" />
        <FaInstagramSquare className="left_Icons" />
      </div>
      <div className={open ? "top_Center open" : "top_Center"}>
        <ul className="topList">
          <li className="topListItem">
            <Link
              className="link"
              to="/"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              HOME
            </Link>
          </li>
          <li className="topListItem">
            {" "}
            <Link
              className="link"
              to="/settings"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              ABOUT
            </Link>
          </li>
          <li className="topListItem">
            {" "}
            <Link
              className="link"
              to="/"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              CONTACT
            </Link>
          </li>
          <li className="topListItem">
            {" "}
            <Link
              className="link"
              to="/write"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              WRITE
            </Link>
          </li>
          <li className="topListItem">
            {" "}
            {user && (
              <Link
                className="link"
                to="/"
                style={{ textDecoration: "none", color: "inherit" }}
                onClick={handleLogout}
              >
                LOGOUT
              </Link>
            )}
          </li>
        </ul>
      </div>
      <div className={open ? "top_Right open" : "top_Right"}>
        {user ? (
          <img
            src={`${PF}/16319860493636.jpeg`}
            alt="userimg"
            className="userImage"
          />
        ) : (
          <ul className="topListHide">
            <li className="topListHide_Item">
              <Link
                style={{ textDecoration: "none", color: "inherit" }}
                to="/login"
              >
                LOGIN
              </Link>
            </li>
            <li className="topListHide_Item">
              <Link
                style={{ textDecoration: "none", color: "inherit" }}
                to="/register"
              >
                REGISTER
              </Link>
            </li>
          </ul>
        )}

        <FaSearch className="right_Icons" />
      </div>
      <div className="top_toggle">
        <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
          <h2 className="top_toggle_title">Blog app</h2>
        </Link>

        {open ? (
          <CgClose
            style={{
              zIndex: 999,
              color: "white",
              position: "absolute",
              top: "30",
              right: "20",
              fontSize: "30px",
            }}
            onClick={handleClick}
          />
        ) : (
          <FaBars className="top_toggle_Icon" onClick={handleClick} />
        )}
      </div>
    </div>
  );
};

export default Topbar;
