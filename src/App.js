import "./App.css";
import Header from "./components/Header";
import WeatherContainer from "./components/WeatherContainer";
import { useGlobalContext } from "./components/context";

function App() {
  const { isDarkMode } = useGlobalContext();

  return (
    <div className={isDarkMode ? "app_background dark_app" : "app_background"}>
      <div className="app_container">
        <Header />
        <WeatherContainer />
      </div>
    </div>
  );
}

export default App;
