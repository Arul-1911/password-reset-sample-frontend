import "./App.css";
import Loggedinpage from "./components/loggedinpage";
import Login from "./components/login";
import Reset from "./components/reset";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/loggedin" element={<Loggedinpage />} />
          <Route path="/reset" element={<Reset />} />
         
        </Routes>
      </Router>
    </div>
  );
}

export default App;
