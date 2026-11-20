import { BrowserRouter, Routes, Route, Outlet, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Profile from "./pages/Profile";
import BudgetPlanner from "./pages/BudgetPlanner";
import ItineraryPlanner from "./pages/ItineraryPlanner";
import Navigation from "./pages/navigation";
import Planner from "./pages/Planner";
import Squad from "./pages/Squad";
import Discover from "./pages/Discover";

function LoggedIn(): boolean{

  // True if user has a token stored
  const token = localStorage.getItem("token") || sessionStorage.getItem("token");
  return Boolean(token);
}

function HomeRoute(){
  // Direct users that are logged in to the correct home page
  if(LoggedIn()){
    return <Navigate to="/discover" replace />;
  }
  return <Home />;
}

// Pages require authentication
function ProtectedPages(){
  if (!LoggedIn()){
    return <Navigate to="/login" replace />;
  }
  return <Outlet />;
}

// Authenticated pages
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
        {/* Unauthorized home page */}
        <Route path="/" element={<HomeRoute />} />
          {/* Authenticated pages */}
          <Route path="/login" element={LoggedIn() ? <Navigate to="/discover" replace/> : <Login />} />
          <Route path="/register" element={LoggedIn() ? <Navigate to="/discover" replace/> : <Register/>} />

        {/*Once authenticated, bar for navigating to other pages */}
        <Route element={<ProtectedPages />} >
          <Route element={<LoginFormat />}>
            <Route path="/profile" element={<Profile />} />
            <Route path="/budget" element={<BudgetPlanner />} />
            <Route path="/itinerary" element={<ItineraryPlanner />} />
            <Route path="/discover" element={<Discover/>} />
            <Route path="/planner" element={<Planner />} />
            <Route path="/squad" element={<Squad />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;