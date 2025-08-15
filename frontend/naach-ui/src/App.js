<<<<<<< HEAD
import React, { useContext } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Login from './pages/Login';
import TeamPortal from './pages/TeamPortal';
import { AuthContext } from './AuthContext';
import Home from './pages/Home';
import Board from './pages/Board';
import Teams from './pages/Teams';
import History from './pages/History';
import Philanthropy from './pages/Philanthropy';
import Judges from './pages/Judges';
import EventSchedule from './pages/EventSchedule';
=======
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Teams from "./pages/Teams";
import Board from "./pages/Board";
import Board1_0 from "./pages/Board1_0";
import Board2_0 from "./pages/Board2_0";
import Judges from "./pages/Judges";
import History from "./pages/History";
import EventSchedule from "./pages/EventSchedule";
import BuyTickets from "./pages/BuyTickets";
import Philanthropy from "./pages/Philanthropy";
import Login from "./pages/Login";
>>>>>>> 4188bc832fca5ed19e0c77b810d033de36b19c1c

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/teams" element={<Teams />} />
        <Route path="/board" element={<Board />} />
        <Route path="/board-1-0" element={<Board1_0 />} />
        <Route path="/board-2-0" element={<Board2_0 />} />
        <Route path="/judges" element={<Judges />} />
        <Route path="/history" element={<History />} />
<<<<<<< HEAD
        <Route path="/philanthropy" element={<Philanthropy />} />
        <Route path="/judges" element={<Judges />} />
        <Route path="/schedule" element={<EventSchedule />} />
        
        {/* Login page */}
=======
        <Route path="/schedule" element={<EventSchedule />} />
        <Route path="/tickets" element={<BuyTickets />} />
        <Route path="/philanthropy" element={<Philanthropy />} />
>>>>>>> 4188bc832fca5ed19e0c77b810d033de36b19c1c
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;