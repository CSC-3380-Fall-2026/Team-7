import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Profile from "./pages/Profile";
import BudgetPlanner from "./pages/BudgetPlanner";
import ItineraryPlanner from "./pages/ItineraryPlanner";
import Planner from "./pages/Planner";
import Squad from "./pages/Squad";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/budget" element={<BudgetPlanner />} />
        <Route path="/itinerary" element={<ItineraryPlanner />} />
        <Route path="/planner" element={<Planner />} />
        <Route path="/squad" element={<Squad />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;