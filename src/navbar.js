import logo from "./logo.png";
import { useDispatch, useSelector} from "react-redux";
import React, { useState } from "react";
import { logout } from "./redux/userSlice";
const NavBar = () => {
    const user = useSelector((state) => state.auth.user);
    const [username, setUsername] = useState("");
    const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
    const greeting =  user ? `Welcome, ${user}!` :` Welcome, ${username}!`;
    const dispatch = useDispatch(); 
    const handleLogout = () => {
        dispatch(logout());
    };
  return (
    <div class="menu">
      {" "}
      <div class="logo">
        {" "}
        <img src={logo} className="logo-image" alt="logo" />
      </div>
      <div class="navigations">
        <a href="/">
          <li>Home</li>
        </a>
        <a href="/about">
          <li>About</li>
        </a>
        <a href="/contact">
          <li>Contact</li>
        </a>  
        <a href="/membership">
          <li>Membership</li>
        </a>
        <a href="/donate">
          <li>Donate</li>
        </a>
        <p className='welcome'>  {isLoggedIn||user ? (
                <div className="greet-wrapper">
                 <li><span>{greeting}</span></li>
                <li ><button onClick={handleLogout}>Logout</button></li> 
                </div>
               
              ) : (
                <a href="/login" className="home-log">
                <li>Login</li>
              </a>
              )}</p>

      </div>
      
    </div>
  );
};

export default NavBar;
