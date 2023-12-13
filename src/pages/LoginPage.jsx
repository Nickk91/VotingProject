import React from "react";
import { useState } from "react";
import users from "../data/users";
import "../styles/loginstyle.css";
import "../styles/genrealpagestyling.css";
import votingLogo from "../assets/images/ballot-box-voting-icon.png";

const LoginPage = ({ setPage, setUser }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorLogin, setErrorLogin] = useState("");
  console.log(users);
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const myUser = users.find(
      (user) => user.email === email && user.password === password
    );
    console.log(myUser);
    if (myUser) {
      setUser(myUser);
      localStorage.setItem("user", JSON.stringify(myUser));
      setPage("votingPage");
    } else {
      setErrorLogin("something went wrong");
    }
  };

  //set item to local storage
  // on voting page get item from the locale storge
  // do try catch to egt

  return (
    <div
      className="login.container"
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        flexDirection: "column",
      }}
    >
      <form className="form-container" onSubmit={handleSubmit}>
        <img className="hero-logo" src={votingLogo} alt="" />
        <br />
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={email}
          onChange={handleEmailChange}
          required
        />
        <br />

        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          name="password"
          value={password}
          onChange={handlePasswordChange}
          required
        />

        <button className="login-btn" type="submit">
          Login
        </button>
      </form>
      {errorLogin && <>{errorLogin}</>}
    </div>
  );
};

export default LoginPage;
