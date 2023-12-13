import { useState } from "react";
// import { Routes, Routes } from "react-router-dom";
import "./App.css";
// import LoginPage from "./pages/LoginPage";
// // import ResultsPage from "./pages/ResultsPage";
import LoginPage from "./pages/LoginPage";
import VotingPage from "./pages/VotingPage";
import HeaderComponent from "./components/Header/HeaderComponent";
VotingPage;

function App() {
  const [page, setPage] = useState("loginPage");
  const [user, setUser] = useState(null);
  return (
    <div className="box">
      <HeaderComponent user={user} setUser={setUser} setPage={setPage} />
      {page === "loginPage" && (
        <LoginPage setPage={setPage} setUser={setUser} />
      )}
      {page === "votingPage" && <VotingPage setPage={setPage} />}
      {/* <VotingPage userFullName="Nikolai Kaploon" /> */}
    </div>
  );
}

export default App;
