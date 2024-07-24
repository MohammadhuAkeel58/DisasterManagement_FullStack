import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./Components/Home";
import Services from "./Components/Services";
import Alert from "./Components/Alert";
import Manage from "./Components/Manage";

import Login from "./Components/Login";
import Register from "./Components/Register";


const App = () => {

  return (
    <Router>
      <div>
      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between bg-slate-800 px-10 py-5 shadow-md">
  <Link to="/" className="text-xl font-semibold text-white hover:text-slate-800 transition duration-300 ease-in-out">
    Disaster Management
  </Link>
  <ul className="flex gap-8 items-center text-white">
    <li>
      <Link to="/" className="py-2 px-4 hover:bg-emerald-500 hover:text-slate-800 rounded transition duration-300 ease-in-out">
        Home
      </Link>
    </li>
    <li>
      <Link to="/services" className="py-2 px-4 hover:bg-emerald-500 hover:text-slate-800 rounded transition duration-300 ease-in-out">
        Services
      </Link>
    </li>
    <li>
      <Link to="/alert" className="py-2 px-4 hover:bg-emerald-500 hover:text-slate-800 rounded transition duration-300 ease-in-out">
        Alert
      </Link>
    </li>
    <li>
      <Link to="/manage" className="py-2 px-4 hover:bg-emerald-500 hover:text-slate-800 rounded transition duration-300 ease-in-out">
        Manage
      </Link>
    </li>

    <li>
      <Link to="/login" className="py-2 px-4 hover:bg-emerald-500 hover:text-slate-800 rounded transition duration-300 ease-in-out">
        Login
      </Link>
    </li>
    <li>
      <Link to="/register" className="py-2 px-4 hover:bg-emerald-500 hover:text-slate-800 rounded transition duration-300 ease-in-out">
        Register
      </Link>
    </li>
  </ul>
</nav>


        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/alert" element={<Alert />} />
          <Route path="/manage" element={<Manage/>} />
          
          <Route path="/login" element={<Login/>} />
          <Route path="/register" element={<Register/>} />
         
        </Routes>
      </div>
    </Router>
  );
};

export default App;
