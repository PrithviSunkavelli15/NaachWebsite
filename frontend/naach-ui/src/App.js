import React, { useContext } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Login from './pages/Login';
import TeamPortal from './pages/TeamPortal';
import { AuthContext } from './AuthContext';
import Home from './pages/Home';




function PrivateRoute({ children }) {
  const { token } = useContext(AuthContext);
  return token ? children : <Navigate to="/login" replace />;
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Public login page */}
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

        {/* Redirect anything else to login */}
        <Route path="*" element={<Navigate to="/login" replace />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}