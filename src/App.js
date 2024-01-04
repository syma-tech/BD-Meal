import logo from "./logo.svg";
import "./App.css";
import Home from "./component/Home/Home/Home";

function App() {
  return (
    <div className="background-image">
      <div className="background-overlay">
        <Home />
      </div>
    </div>
  );
}

export default App;
