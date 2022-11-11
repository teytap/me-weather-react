import "./App.css";
import Weather from "./Weather";

function App() {
  return (
    <div className="App">
      <div className="container">
        <h1>me-weather🌥</h1>
        <Weather city="Ankara" />

        <footer>
          This project is coded bay Mehtap Tataroğlu and is{" "}
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
