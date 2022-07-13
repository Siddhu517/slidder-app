import "./App.css";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState, useEffect } from "react";
import { Slider } from "./Components/Slider/Slider";

function App() {
  const [pic, setPic] = useState([]);

  return (
    <div className="">
      <header className="header text-center bg-primary text-light shadow  p-2">
        <h4>Slidder images</h4>
      </header>
      <div className="mt-5" style={{ height: "556px" }}>
        <div className="d-flex justify-content-center text-center">
          <Slider />
        </div>
      </div>
      <footer className="footer p-3 text-center bg-dark text-muted">
        <div className=""> Slidder copyright &copy;</div>
      </footer>
    </div>
  );
}

export default App;
