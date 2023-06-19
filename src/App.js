import "./App.css";
import Weather from "./Weather";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCloud } from "@fortawesome/free-solid-svg-icons";

function App() {
  return (
    <div className="App">
      <div className="container">
        <h1 className="brand">
          me-weather
          <FontAwesomeIcon icon={faCloud} className="brand-cloud" />
        </h1>
        <Weather city="Ankara" />

        <footer>
          This project is coded by Mehtap Tataroğlu and is{" "}
          <a
            href="https://github.com/teytap/me-weather-react"
            target="_blank"
            rel="noreferrer"
          >
            open-sourced
          </a>
          .
        </footer>
      </div>
    </div>
  );
}

export default App;
