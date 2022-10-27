import "./App.css";
import { Routes, Route } from "react-router-dom";
import { LadingPage } from "./components/LandingPage";
import { Dashboard } from "./components/Dashboard";

const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LadingPage />} />
        <Route path="dashboard" element={<Dashboard />} />
      </Routes>
    </div>
  );
};

export default App;
