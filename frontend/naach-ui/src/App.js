import React, { useContext } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Login from './pages/Login';
import TeamPortal from './pages/TeamPortal';
import AdminPanel from './pages/AdminPanel';
import { AuthContext, AuthProvider } from './AuthContext';
import Home from './pages/Home';
import Board from './pages/Board';
import Board2 from './pages/Board2_0';
import Board1 from './pages/Board1_0';
import Teams from './pages/Teams';
import History from './pages/History';
import Philanthropy from './pages/Philanthropy';
import Judges from './pages/Judges';
import EventSchedule from './pages/EventSchedule';
import BuyTickets from './pages/BuyTickets';
import Sponsorship from './pages/Sponsorship';
import Merch from './pages/Merch';

function PrivateRoute({ children }) {
  const { currentUser } = useContext(AuthContext);
  return currentUser ? children : <Navigate to="/login" replace />;
}

export default function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          {/* Public pages */}
          <Route path="/" element={<Home />} />
          <Route path="/board" element={<Board />} />
          <Route path="/board-2-0" element={<Board2 />} />
          <Route path="/board-1-0" element={<Board1 />} />
          <Route path="/teams" element={<Teams />} />
          <Route path="/history" element={<History />} />
          <Route path="/philanthropy" element={<Philanthropy />} />
          <Route path="/judges" element={<Judges />} />
          <Route path="/schedule" element={<EventSchedule />} />
          <Route path="/tickets" element={<BuyTickets />} />
          <Route path="/sponsorship" element={<Sponsorship />} />
          <Route path="/merch" element={<Merch />} />
          
          {/* Login page */}
          <Route path="/login" element={<Login />} />

          {/* Protected portal page */}
          <Route
            path="/portal"
            element={
              <PrivateRoute>
                <TeamPortal />
              </PrivateRoute>
            }
          />

          {/* Admin panel */}
          <Route
            path="/admin"
            element={
              <PrivateRoute>
                <AdminPanel />
              </PrivateRoute>
            }
          />

          {/* Redirect anything else to home */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}