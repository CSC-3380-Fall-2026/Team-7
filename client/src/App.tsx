
import { useState } from "react";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Planner from "./pages/Planner";

function App() {
  const [currentPage, setCurrentPage] = useState("home");


  return (
    <>
      {currentPage === "home" && (
        <Home
          onSignIn={() => setCurrentPage("login")}
          onPlanner={() => setCurrentPage("planner")}
        />
      )}

      {currentPage === "login" && (
        <Login onHome={() => setCurrentPage("home")} />
      )}

      {currentPage === "planner" && (
        <Planner
          onHome={() => setCurrentPage("home")}
          onLogin={() => setCurrentPage("login")}
        />
      )}
    </>
  );
}

export default App;
