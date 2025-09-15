// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import ReviewsPage from "./pages/ReviewsPage";
import HotelFinder from "./Components/HotelFinder";
import Signup from "./Components/Signup";
import Login from "./components/Login";
import Dashboard from "./pages/Dashboard";

function App() {
  return (
    
      <Router>
        
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/Login" element={<Login />} />
            <Route path="/Signup" element={<Signup />} />
            <Route path="/reviews" element={<ReviewsPage />} />
            <Route path="/Dashboard" element={<Dashboard />} />
            <Route path="/Hotel-finder" element={<HotelFinder />} />
          </Routes>
        
      </Router>
    
  );
}

export default App;