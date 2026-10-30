import "./homePage.css"

type HomePageProp = {onLogout: () => void;};

function HomePage({onLogout}: HomePageProp){
    return(<div>
          <h1>Welcome to Globetrotter!</h1>
          <p> Search for your next exploration!</p>
          <button className="home-button" onClick={onLogout}>Logout</button>
        </div>);
}

export default HomePage;