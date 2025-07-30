import React, { useContext } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Login from './pages/Login';
import TeamPortal from './pages/TeamPortal';
import { AuthContext } from './AuthContext';
import Home from './pages/Home';
import Board from './pages/Board';
import Teams from './pages/Teams';
import History from './pages/History';

function PrivateRoute({ children }) {
  const { token } = useContext(AuthContext);
  return token ? children : <Navigate to="/login" replace />;
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Public pages */}
        <Route path="/" element={<Home />} />
        <Route path="/board" element={<Board />} />
        <Route path="/teams" element={<Teams />} />
        <Route path="/history" element={<History />} />
        
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

        {/* Redirect anything else to home */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}