import React, { useContext, useRef } from "react";
import "./login.scss";
import axios from "axios";
import { Link } from "react-router-dom";
import { Context } from "../../context/Context";
const Login = () => {
  const userRef = useRef();
  const passwordRef = useRef();

  const { dispatch, isFetching } = useContext(Context);

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch({ type: "LOGIN_START" });
    try {
      const res = await axios.post("/auth/login", {
        username: userRef.current.value,
        password: passwordRef.current.value,
      });
      console.log(res.data);
      dispatch({ type: "LOGIN_SUCCESS", payload: res.data });
    } catch (error) {
      dispatch({ type: "LOGIN_FAILURE" });
    }
  };
  return (
    <div className="login">
      <span className="login_Title">Login</span>
      <form className="login_Form" onSubmit={handleSubmit}>
        <label>Username</label>
        <input type="text" placeholder="Enter your email..." ref={userRef} />

        <label>Password</label>
        <input
          type="password"
          placeholder="Enter you password..."
          ref={passwordRef}
        />
        <button className="login_Button" disabled={isFetching}>
          Login
        </button>
      </form>
      <button className="login_register_Button" type="submit">
        <Link
          style={{ textDecoration: "none", color: "inherit" }}
          to="/register"
        >
          REGISTER
        </Link>
      </button>
    </div>
  );
};

export default Login;
