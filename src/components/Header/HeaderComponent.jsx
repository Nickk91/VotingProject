import React, { useEffect, useState } from "react";
import "../../styles/headerstyle.css";
// import { Link } from "react-router-dom";
import logo from "../../assets/images/ballot-box-voting-icon.png";
import usericon from "../../assets/images/user-icon.png";
import Navbar from "./Navbar";
import BurgerMenu from "./BurgerMenu";

const HeaderComponent = ({ user, setUser, setPage }) => {
  console.log(user);
  // useEffect(() => {
  //   console.log(JSON.parse(localStorage.getItem("user")));
  // }, []);
  const handleLogout = () => {
    localStorage.removeItem("user");
    setUser(null);
  };

  const handleLoginPage = () => {
    setPage("loginPage");
  };
  return (
    <div className="header-container">
      <div className="logo"></div>
      <div className="buttons-container">
        {/* {
          user ? (
            <BurgerMenu username={user?.firstName} />
          ) : // <button className="user-btn"> */}
        {/* //   <span>
          //     <img className="user-icon" src={usericon} alt="" />
          //   </span>
          //   {user?.firstName}
          // </button>
          null
          // <button onClick={handleLoginPage}>login</button> */}

        {/* {user && <button onClick={handleLogout}>logout</button>} */}
      </div>
    </div>
  );
};

export default HeaderComponent;
