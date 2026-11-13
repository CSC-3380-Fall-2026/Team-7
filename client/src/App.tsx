import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Profile from "./pages/Profile";
import BudgetPlanner from "./pages/BudgetPlanner";
import ItineraryPlanner from "./pages/ItineraryPlanner";
import Navigation from "./pages/navigation";

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
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        <Route element={<LoginFormat />}>
        <Route path="/profile" element={<Profile />} />
        <Route path="/budget" element={<BudgetPlanner />} />
        <Route path="/itinerary" element={<ItineraryPlanner />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;