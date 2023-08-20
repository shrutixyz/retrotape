// import logo from './logo.svg';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Landing from "./pages/landing";
import Create from "./pages/create";
import View from "./pages/view";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<Landing />}></Route>
        </Routes>
        <Routes>
          <Route exact path="/create" element={<Create />}></Route>
        </Routes>
        <Routes>
          <Route path="/view" element={<View />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
