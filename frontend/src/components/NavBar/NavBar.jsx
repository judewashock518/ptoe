import React from "react";
import { useContext } from "react";
import { useNavigate, Link } from "react-router-dom";
import AuthContext from "../../context/AuthContext";
import "./NavBar.css";

const Navbar = () => {
  const { logoutUser, user } = useContext(AuthContext);
  const navigate = useNavigate();
  return (
    <div className="navBar">
      <ul>
        <li className="brand">
          <Link to="/" style={{ textDecoration: "none", color: "white" }}>
            <b>Elements</b>
          </Link>
        </li>
        {user?.is_teacher && (
          <div>
          <Link to="/teacher" style={{ textDecoration: "none", color: "white" }}>
            <b>Review</b>
          </Link>
          <Link to="/notepad" style={{ textDecoration: "none", color: "white" }}>
            <b>Notepad</b>
          </Link>
          <Link to="/accountinfo" style={{ textDecoration: "none", color: "white" }}>
            <b>Account</b>
          </Link>
          </div>
        )}
        {user?.is_student && (
          <div>
            <button onClick={() => navigate("/notepad")}>Notepad</button>
            <button onClick={() => navigate("/accountinfo")}>Your Account</button>
          </div>
        )}
        <li>
          {user ? (
            <button onClick={logoutUser}>Logout</button>
          ) : (
            <button onClick={() => navigate("/login")}>Login</button>
          )}
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
