import {useState} from "react";
import LoginPage from "./pages/Login"
import HomePage from "./pages/homePage"

/**
 * Root component of the Globetrotter app.
 * @returns The temporary home screen.
 */
function App() {

  // Controls if the login or home page should be shown
  const [showHome, setShowHome] = useState(false);

  // Login and back button functionality
  function handleBackButton() {
    setShowHome(false);
  }
  function handleLoginSubmit(){
    setShowHome(true);
  }

  return (
    <div>
      {showHome ? (
        // If true, show home page
        <HomePage onLogout={handleBackButton}/>
      ) : (
        // If false, show the login screen
        <LoginPage onLogin={handleLoginSubmit} />
      )}
    </div>
  );
}

export default App;
