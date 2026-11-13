import { Link, NavLink, useNavigate } from "react-router-dom";
import "../styles/navigate.css";

function Navigation(){
    const navigate = useNavigate();

    function logout(){
        // When pressing logout, remove all data and send user to login page
        localStorage.removeItem("token");
        sessionStorage.removeItem("token");
        navigate("/login");
    }

    return(
        <header className="profile-navbar">
        <Link className="login-logo" to="/">
          globetrotter<span>.</span>
        </Link>

        <nav className="profile-nav-links">
          {/*When adding new pages if needed, add them here so we can navigate to them from one page*/}
          <NavLink to="/" end>Home</NavLink>
          <NavLink to="/itinerary">Itinerary</NavLink>
          <NavLink to="/budget">Budget</NavLink>
          <NavLink to="/profile">Profile</NavLink>
        </nav>

        <button className="logout-button" onClick={logout}>
          Log Out
        </button>
      </header>
    );
}

export default Navigation;