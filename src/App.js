// App.js
import "./App.css";
import Navbar from "./Components/Navbar";
import { Route, Routes } from "react-router-dom";
import { useState } from "react";
import Home from "./Components/Home";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Signup from "./pages/Signup";
import PrivateRoute from "./Components/PrivateRoute";
import ChildrenTest from "./pages/ChildrenTest";
import ParentTest from "./pages/ParentTest";
import Blogpage from './pages/Blogpage';


function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div className="w-screen h-screen bg-richblack-900 flex flex-col">
      <Navbar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} /> 
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn} />} />
        <Route path="/signup" element={<Signup setIsLoggedIn={setIsLoggedIn} />} />
        <Route path="/dashboard" element={<PrivateRoute isLoggedIn={isLoggedIn}><Dashboard /></PrivateRoute>} />
        <Route path="/childrentest" element={<ChildrenTest />} /> 
        <Route path="/parenttest" element={<ParentTest />} /> 
        <Route path="/blogpage" element={<Blogpage/>} />

      </Routes>
    </div>
  );
}

export default App;
