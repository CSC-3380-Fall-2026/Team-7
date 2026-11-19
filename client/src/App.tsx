import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Profile from "./pages/Profile";
import BudgetPlanner from "./pages/BudgetPlanner";
import ItineraryPlanner from "./pages/ItineraryPlanner";
import Navigation from "./pages/navigation";
import Planner from "./pages/Planner";
import Squad from "./pages/Squad";

function LoginFormat(){
  return (
    <>
      <Navigation />
      <Outlet />
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      {/*Routing for pages*/}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/*Once logged in, bar for navigating to other pages */}
        <Route element={<LoginFormat />}>
        <Route path="/profile" element={<Profile />} />
        <Route path="/budget" element={<BudgetPlanner />} />
        <Route path="/itinerary" element={<ItineraryPlanner />} />
        <Route path="/planner" element={<Planner />} />
        <Route path="/squad" element={<Squad />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;